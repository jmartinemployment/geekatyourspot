import { after } from "next/server";
import { isbot } from "isbot";
import { MAX_PULSE_BYTES, parsePulseEvent, type DropReason } from "@/lib/visitors/pulse-event";
import { readRequestFields } from "@/lib/visitors/request-fields";
import { forwardDrop, forwardPulse, isForwardingConfigured, logUndelivered } from "@/lib/visitors/forward-pulse";

export const dynamic = "force-dynamic";

/**
 * The beacon's target. Every answer is 204 with no body, whether the event was kept or dropped,
 * so the browser learns nothing about the filters. A kept event is passed on to GeekAPI after
 * the response; a dropped one is counted by reason the same way. The one other answer is 503,
 * with no body, when the site holds no GeekAPI address or key: it does not accept what it cannot
 * pass on. The beacon sends and never reads the answer, so neither status reaches a visitor.
 */
export async function POST(request: Request): Promise<Response> {
  if (!isForwardingConfigured()) return new Response(null, { status: 503 });

  const receivedAt = new Date();
  const drop = (reason: DropReason): Response => {
    after(async () => logUndelivered("drops", await forwardDrop(reason, receivedAt)));
    return new Response(null, { status: 204 });
  };

  const declared = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(declared) && declared > MAX_PULSE_BYTES) return drop("too_large");
  if (!isSameOrigin(request)) return drop("cross_site");

  const userAgent = request.headers.get("user-agent") ?? "";
  if (userAgent.trim().length === 0 || isbot(userAgent)) return drop("bot");
  if (request.headers.get("sec-gpc") === "1") return drop("gpc");

  const fields = readRequestFields(request.headers);
  if (!fields) return drop("no_ip");
  if (excludedIps().has(fields.ip)) return drop("excluded_ip");

  let text: string;
  try {
    text = await request.text();
  } catch {
    return drop("invalid_body");
  }
  if (text.length > MAX_PULSE_BYTES) return drop("too_large");
  const event = parsePulseEvent(text);
  if (!event) return drop("invalid_body");

  after(async () => logUndelivered("events", await forwardPulse(event, fields, receivedAt)));
  return new Response(null, { status: 204 });
}

/**
 * Fetch metadata when the browser sends it, the Origin or Referer host against the request's
 * host when it does not. A request that names neither is not one of ours.
 */
function isSameOrigin(request: Request): boolean {
  const site = request.headers.get("sec-fetch-site");
  if (site) return site === "same-origin";

  const host = (request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "").split(",")[0].trim().toLowerCase();
  if (!host) return false;
  for (const name of ["origin", "referer"]) {
    const value = request.headers.get(name);
    if (!value) continue;
    try {
      return new URL(value).host.toLowerCase() === host;
    } catch {
      return false;
    }
  }
  return false;
}

function excludedIps(): Set<string> {
  return new Set(
    (process.env.VISITOR_EXCLUDED_IPS ?? "")
      .split(",")
      .map((ip) => ip.trim())
      .filter((ip) => ip.length > 0),
  );
}
