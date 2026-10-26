import "server-only";

import type { DropReason, PulseEvent } from "@/lib/visitors/pulse-event";
import type { RequestFields } from "@/lib/visitors/request-fields";
import { isUuid, type VisitorIds } from "@/lib/visitors/visitor-events";

/**
 * The hop from the site to GeekAPI. Each call is one POST with X-API-Key and a five-second
 * timeout, run inside `after()` so the visitor's response never waits on it. Every call answers
 * with what happened: delivered, or not delivered and why. Nothing here swallows a failure. Logs
 * carry the route and the status code only: the body is the visitor's record.
 */
const TIMEOUT_MS = 5000;

export type ForwardResult =
  | { delivered: true }
  | { delivered: false; reason: "skipped" | "not_configured" | "unreachable" | "refused"; status?: number };

interface Target {
  url: string;
  key: string;
}

/** True when the site holds both the address of GeekAPI and the key its internal routes expect. */
export function isForwardingConfigured(): boolean {
  return target("/") !== null;
}

function target(path: string): Target | null {
  const base = process.env.GEEK_API_URL?.trim().replace(/\/+$/, "");
  const key = process.env.GEEK_BACKEND_API_KEY?.trim();
  if (!base || !key) return null;
  return { url: `${base}${path}`, key };
}

async function post(path: string, body: unknown): Promise<ForwardResult> {
  const to = target(path);
  if (!to) return { delivered: false, reason: "not_configured" };
  let response: Response;
  try {
    response = await fetch(to.url, {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": to.key },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(TIMEOUT_MS),
      cache: "no-store",
    });
  } catch {
    return { delivered: false, reason: "unreachable" };
  }
  if (!response.ok) return { delivered: false, reason: "refused", status: response.status };
  return { delivered: true };
}

/**
 * Writes a hand-off that did not happen to the log, with the route and the reason and nothing
 * else. Vercel keeps no state between requests, so this is as far as the site can carry a failed
 * hand-off; the daily report on GeekAPI's side says in words when a day had nothing arrive.
 */
export function logUndelivered(what: "events" | "identify" | "drops", result: ForwardResult): void {
  if (result.delivered || result.reason === "skipped") return;
  const status = result.status === undefined ? "" : ` ${result.status}`;
  console.error(`[visitors] ${what} not delivered: ${result.reason}${status}`);
}

export interface VisitorIdentity {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  source: "booking" | "contact";
}

export function forwardPulse(event: PulseEvent, request: RequestFields, receivedAt: Date): Promise<ForwardResult> {
  return post("/api/visitors/internal/events", { ...event, request, receivedAt: receivedAt.toISOString() });
}

/** A visitor with no ids is one who is not tracked; there is nothing to send and that is not a failure. */
export function forwardIdentity(identity: VisitorIdentity, ids: VisitorIds | null | undefined): Promise<ForwardResult> {
  if (!ids || !isUuid(ids.visitorId)) return Promise.resolve({ delivered: false, reason: "skipped" });
  return post("/api/visitors/internal/identify", {
    visitorId: ids.visitorId,
    sessionId: isUuid(ids.sessionId) ? ids.sessionId : undefined,
    firstName: identity.firstName.slice(0, 200),
    lastName: identity.lastName.slice(0, 200),
    email: identity.email.slice(0, 200),
    phone: identity.phone.slice(0, 40),
    source: identity.source,
  });
}

export function forwardDrop(reason: DropReason, receivedAt: Date): Promise<ForwardResult> {
  return post("/api/visitors/internal/drops", { reason, receivedAt: receivedAt.toISOString() });
}
