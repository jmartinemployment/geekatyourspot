/**
 * The scheduler and the contact flow talk to the visitor beacon through these, so neither
 * imports the beacon. `emitVisitorEvent` raises a window event the beacon listens for;
 * `readVisitorIds` reads the ids the beacon keeps, without creating them.
 */
export const VISITOR_EVENT_NAME = "gays:visitor-event";
export const VISITOR_ID_KEY = "gays_visitor";
export const SESSION_KEY = "gays_session";
export const SESSION_IDLE_MS = 30 * 60 * 1000;

export type VisitorEventKind =
  | "scheduler_date_picked"
  | "scheduler_slot_held"
  | "scheduler_booked"
  | "contact_submitted";

export interface VisitorIds {
  visitorId: string;
  sessionId: string;
}

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function isUuid(value: unknown): value is string {
  return typeof value === "string" && UUID.test(value);
}

export function emitVisitorEvent(kind: VisitorEventKind): void {
  if (typeof window === "undefined") return;
  try {
    window.dispatchEvent(new CustomEvent(VISITOR_EVENT_NAME, { detail: { kind } }));
  } catch {
    // An environment without CustomEvent records nothing, which is the failure state.
  }
}

interface StoredSession {
  id: string;
  last: number;
  /** True once the browser snapshot went out for this session, from any tab or page load. */
  snapshotSent: boolean;
}

export function readStoredSession(): StoredSession | null {
  try {
    const raw = window.localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return null;
    const { id, last, snapshotSent } = parsed as Record<string, unknown>;
    if (!isUuid(id) || typeof last !== "number" || !Number.isFinite(last)) return null;
    return { id, last, snapshotSent: snapshotSent === true };
  } catch {
    return null;
  }
}

/** The current ids when the beacon has set them and the session has not idled out; null otherwise. */
export function readVisitorIds(): VisitorIds | null {
  if (typeof window === "undefined") return null;
  try {
    const visitorId = window.localStorage.getItem(VISITOR_ID_KEY);
    const session = readStoredSession();
    if (!isUuid(visitorId) || !session) return null;
    if (Date.now() - session.last > SESSION_IDLE_MS) return null;
    return { visitorId, sessionId: session.id };
  } catch {
    return null;
  }
}
