export const BUSINESS_DAY_WINDOW = 5;
export const HOLD_DURATION_MS = 5 * 60 * 1000;
export const SHOW_MORE_THRESHOLD = 6;
export const INITIAL_VISIBLE_SLOTS = 3;

export type SlotTag = "Morning" | "This week";

/** Local calendar date as YYYY-MM-DD (en-CA). */
export function toDateKey(date: Date): string {
  return date.toLocaleDateString("en-CA");
}

function startOfLocalDay(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}

/** First selectable weekday on/after today (skips weekends). */
export function firstSelectableBusinessDay(from: Date = new Date()): Date {
  const d = startOfLocalDay(from);
  while (isWeekend(d)) {
    d.setDate(d.getDate() + 1);
  }
  return d;
}

/** Next `count` Mon–Fri days starting from the first selectable day. */
export function listNextBusinessDays(
  count: number = BUSINESS_DAY_WINDOW,
  from: Date = new Date(),
): Date[] {
  const days: Date[] = [];
  const cursor = firstSelectableBusinessDay(from);
  while (days.length < count) {
    if (!isWeekend(cursor)) {
      days.push(new Date(cursor));
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

export function listNextBusinessDayKeys(
  count: number = BUSINESS_DAY_WINDOW,
  from: Date = new Date(),
): string[] {
  return listNextBusinessDays(count, from).map(toDateKey);
}

export function isSelectableBusinessDay(
  date: Date,
  allowedKeys: ReadonlySet<string> | readonly string[],
): boolean {
  const keys =
    allowedKeys instanceof Set ? allowedKeys : new Set(allowedKeys);
  return keys.has(toDateKey(date));
}

/** Hour in America/New_York for an ISO instant (0–23). */
export function hourInEastern(isoStart: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date(isoStart));
  const hour = parts.find((p) => p.type === "hour")?.value ?? "0";
  return Number.parseInt(hour, 10);
}

/** Weekday 0–6 in America/New_York for a YYYY-MM-DD date key. */
export function weekdayInEastern(dateStr: string): number {
  // Noon UTC avoids DST edge ambiguity for date-only keys.
  const d = new Date(`${dateStr}T12:00:00Z`);
  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
  }).format(d);
  const map: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  return map[weekday] ?? d.getUTCDay();
}

export function tagSlot(isoStart: string, dateStr: string): SlotTag[] {
  const tags: SlotTag[] = [];
  if (hourInEastern(isoStart) < 12) {
    tags.push("Morning");
  }
  const weekday = weekdayInEastern(dateStr);
  if (weekday === 4 || weekday === 5) {
    tags.push("This week");
  }
  return tags;
}

/** How many slots to show before "Show more times". */
export function visibleSlotLimit(total: number): number {
  return total >= SHOW_MORE_THRESHOLD ? INITIAL_VISIBLE_SLOTS : total;
}

export function formatCountdown(msRemaining: number): string {
  const clamped = Math.max(0, msRemaining);
  const totalSeconds = Math.ceil(clamped / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes)}:${String(seconds).padStart(2, "0")}`;
}
