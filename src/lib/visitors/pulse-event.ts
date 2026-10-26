import { isUuid } from "@/lib/visitors/visitor-events";

/**
 * The beacon's wire shape, and the one parser the route trusts. Every field is checked and
 * copied; nothing the browser sent passes through unread.
 */
export const PULSE_PATH = "/api/pulse";
export const MAX_PULSE_BYTES = 8 * 1024;
export const MAX_CLICKS_PER_PAGE = 50;
export const SCHEDULER_VIEW_DWELL_MS = 3000;

export const PULSE_KINDS = ["page_view", "page_end", "click", "scheduler", "contact", "vitals", "geo"] as const;
export type PulseKind = (typeof PULSE_KINDS)[number];

export const SCHEDULER_STEPS = ["view", "date_picked", "slot_held", "booked"] as const;
export type SchedulerStep = (typeof SCHEDULER_STEPS)[number];

export const VITAL_NAMES = ["LCP", "INP", "CLS", "FCP", "TTFB"] as const;
export type VitalName = (typeof VITAL_NAMES)[number];

export const DROP_REASONS = ["too_large", "cross_site", "bot", "gpc", "no_ip", "excluded_ip", "invalid_body"] as const;
export type DropReason = (typeof DROP_REASONS)[number];

export interface PulseUtm {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
}

export interface PulseClickIds {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  fbclid?: string;
  msclkid?: string;
  liFatId?: string;
  ttclid?: string;
}

export interface PulseArrival {
  landingUrl?: string;
  referrer?: string;
  utm?: PulseUtm;
  clickIds?: PulseClickIds;
}

export interface PulseScreen {
  width?: number;
  height?: number;
  availWidth?: number;
  availHeight?: number;
  viewportWidth?: number;
  viewportHeight?: number;
  devicePixelRatio?: number;
  colorDepth?: number;
  orientation?: string;
}

export interface PulseDevice {
  platform?: string;
  hardwareConcurrency?: number;
  deviceMemory?: number;
  maxTouchPoints?: number;
  pointer?: string;
  hover?: boolean;
}

export interface PulseBrowser {
  languages?: string[];
  timezone?: string;
  utcOffsetMinutes?: number;
  cookieEnabled?: boolean;
  pdfViewerEnabled?: boolean;
  displayMode?: string;
  colorScheme?: string;
  reducedMotion?: boolean;
}

export interface PulseHighEntropy {
  platformVersion?: string;
  model?: string;
  architecture?: string;
  bitness?: string;
  fullVersionList?: string[];
}

export interface PulseNetwork {
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
}

export interface PulseEnvironment {
  screen?: PulseScreen;
  device?: PulseDevice;
  browser?: PulseBrowser;
  highEntropy?: PulseHighEntropy;
  network?: PulseNetwork;
}

export interface PulseSnapshot {
  arrival?: PulseArrival;
  environment?: PulseEnvironment;
}

export interface PulseClick {
  href?: string;
  linkId?: string;
  outbound: boolean;
}

export interface PulseVital {
  name: VitalName;
  value: number;
}

export interface PulsePosition {
  latitude: number;
  longitude: number;
  accuracyMeters?: number;
}

export interface PulseEvent {
  kind: PulseKind;
  visitorId: string;
  sessionId: string;
  pageViewId?: string;
  path?: string;
  query?: string;
  title?: string;
  snapshot?: PulseSnapshot;
  activeMs?: number;
  maxScrollPct?: number;
  click?: PulseClick;
  schedulerStep?: SchedulerStep;
  vital?: PulseVital;
  position?: PulsePosition;
}

type Raw = Record<string, unknown>;

function obj(value: unknown): Raw | undefined {
  return typeof value === "object" && value !== null && !Array.isArray(value) ? (value as Raw) : undefined;
}

function str(value: unknown, max: number): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (trimmed.length === 0) return undefined;
  return trimmed.length > max ? trimmed.slice(0, max) : trimmed;
}

function num(value: unknown, min: number, max: number): number | undefined {
  return typeof value === "number" && Number.isFinite(value) && value >= min && value <= max ? value : undefined;
}

function int(value: unknown, min: number, max: number): number | undefined {
  const n = num(value, min, max);
  return n === undefined ? undefined : Math.round(n);
}

function bool(value: unknown): boolean | undefined {
  return typeof value === "boolean" ? value : undefined;
}

function strings(value: unknown, maxItems: number, maxLength: number): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const out: string[] = [];
  for (const item of value) {
    const s = str(item, maxLength);
    if (s) out.push(s);
    if (out.length >= maxItems) break;
  }
  return out.length === 0 ? undefined : out;
}

function prune<T extends object>(value: T): T | undefined {
  const entries = Object.entries(value).filter(([, v]) => v !== undefined);
  return entries.length === 0 ? undefined : (Object.fromEntries(entries) as T);
}

function parseSnapshot(raw: Raw | undefined): PulseSnapshot | undefined {
  if (!raw) return undefined;
  const arrivalRaw = obj(raw.arrival);
  const utmRaw = obj(arrivalRaw?.utm);
  const clickRaw = obj(arrivalRaw?.clickIds);
  const envRaw = obj(raw.environment);
  const screenRaw = obj(envRaw?.screen);
  const deviceRaw = obj(envRaw?.device);
  const browserRaw = obj(envRaw?.browser);
  const highRaw = obj(envRaw?.highEntropy);
  const netRaw = obj(envRaw?.network);

  const arrival = arrivalRaw
    ? prune<PulseArrival>({
        landingUrl: str(arrivalRaw.landingUrl, 2048),
        referrer: str(arrivalRaw.referrer, 2048),
        utm: utmRaw
          ? prune<PulseUtm>({
              source: str(utmRaw.source, 200),
              medium: str(utmRaw.medium, 200),
              campaign: str(utmRaw.campaign, 200),
              term: str(utmRaw.term, 200),
              content: str(utmRaw.content, 200),
            })
          : undefined,
        clickIds: clickRaw
          ? prune<PulseClickIds>({
              gclid: str(clickRaw.gclid, 200),
              gbraid: str(clickRaw.gbraid, 200),
              wbraid: str(clickRaw.wbraid, 200),
              fbclid: str(clickRaw.fbclid, 200),
              msclkid: str(clickRaw.msclkid, 200),
              liFatId: str(clickRaw.liFatId, 200),
              ttclid: str(clickRaw.ttclid, 200),
            })
          : undefined,
      })
    : undefined;

  const environment = envRaw
    ? prune<PulseEnvironment>({
        screen: screenRaw
          ? prune<PulseScreen>({
              width: int(screenRaw.width, 0, 20000),
              height: int(screenRaw.height, 0, 20000),
              availWidth: int(screenRaw.availWidth, 0, 20000),
              availHeight: int(screenRaw.availHeight, 0, 20000),
              viewportWidth: int(screenRaw.viewportWidth, 0, 20000),
              viewportHeight: int(screenRaw.viewportHeight, 0, 20000),
              devicePixelRatio: num(screenRaw.devicePixelRatio, 0, 10),
              colorDepth: int(screenRaw.colorDepth, 0, 64),
              orientation: str(screenRaw.orientation, 40),
            })
          : undefined,
        device: deviceRaw
          ? prune<PulseDevice>({
              platform: str(deviceRaw.platform, 60),
              hardwareConcurrency: int(deviceRaw.hardwareConcurrency, 0, 1024),
              deviceMemory: num(deviceRaw.deviceMemory, 0, 1024),
              maxTouchPoints: int(deviceRaw.maxTouchPoints, 0, 100),
              pointer: str(deviceRaw.pointer, 10),
              hover: bool(deviceRaw.hover),
            })
          : undefined,
        browser: browserRaw
          ? prune<PulseBrowser>({
              languages: strings(browserRaw.languages, 10, 35),
              timezone: str(browserRaw.timezone, 64),
              utcOffsetMinutes: int(browserRaw.utcOffsetMinutes, -1000, 1000),
              cookieEnabled: bool(browserRaw.cookieEnabled),
              pdfViewerEnabled: bool(browserRaw.pdfViewerEnabled),
              displayMode: str(browserRaw.displayMode, 20),
              colorScheme: str(browserRaw.colorScheme, 10),
              reducedMotion: bool(browserRaw.reducedMotion),
            })
          : undefined,
        highEntropy: highRaw
          ? prune<PulseHighEntropy>({
              platformVersion: str(highRaw.platformVersion, 40),
              model: str(highRaw.model, 80),
              architecture: str(highRaw.architecture, 20),
              bitness: str(highRaw.bitness, 8),
              fullVersionList: strings(highRaw.fullVersionList, 10, 120),
            })
          : undefined,
        network: netRaw
          ? prune<PulseNetwork>({
              effectiveType: str(netRaw.effectiveType, 10),
              downlink: num(netRaw.downlink, 0, 100000),
              rtt: int(netRaw.rtt, 0, 1000000),
              saveData: bool(netRaw.saveData),
            })
          : undefined,
      })
    : undefined;

  return prune<PulseSnapshot>({ arrival, environment });
}

/** The event, or null when the text is not one. Nothing is repaired or defaulted. */
export function parsePulseEvent(text: string): PulseEvent | null {
  if (typeof text !== "string" || text.length === 0 || text.length > MAX_PULSE_BYTES) return null;
  let raw: Raw | undefined;
  try {
    raw = obj(JSON.parse(text));
  } catch {
    return null;
  }
  if (!raw) return null;

  const kind = raw.kind;
  if (typeof kind !== "string" || !(PULSE_KINDS as readonly string[]).includes(kind)) return null;
  if (!isUuid(raw.visitorId) || !isUuid(raw.sessionId)) return null;

  const event: PulseEvent = { kind: kind as PulseKind, visitorId: raw.visitorId, sessionId: raw.sessionId };
  const pageViewId = isUuid(raw.pageViewId) ? raw.pageViewId : undefined;

  switch (event.kind) {
    case "page_view": {
      const path = str(raw.path, 512);
      if (!pageViewId || !path || !path.startsWith("/")) return null;
      event.pageViewId = pageViewId;
      event.path = path;
      event.query = str(raw.query, 512);
      event.title = str(raw.title, 300);
      event.snapshot = parseSnapshot(obj(raw.snapshot));
      return event;
    }
    case "page_end": {
      if (!pageViewId) return null;
      event.pageViewId = pageViewId;
      event.activeMs = int(raw.activeMs, 0, 24 * 60 * 60 * 1000) ?? 0;
      event.maxScrollPct = int(raw.maxScrollPct, 0, 100) ?? 0;
      return event;
    }
    case "click": {
      const click = obj(raw.click);
      if (!pageViewId || !click) return null;
      event.pageViewId = pageViewId;
      event.click = {
        href: str(click.href, 2048),
        linkId: str(click.linkId, 200),
        outbound: click.outbound === true,
      };
      return event;
    }
    case "scheduler": {
      const step = raw.schedulerStep;
      if (typeof step !== "string" || !(SCHEDULER_STEPS as readonly string[]).includes(step)) return null;
      event.schedulerStep = step as SchedulerStep;
      return event;
    }
    case "contact":
      return event;
    case "vitals": {
      const vital = obj(raw.vital);
      const name = vital?.name;
      const value = num(vital?.value, 0, 1e9);
      if (!pageViewId || typeof name !== "string" || !(VITAL_NAMES as readonly string[]).includes(name) || value === undefined) return null;
      event.pageViewId = pageViewId;
      event.vital = { name: name as VitalName, value };
      return event;
    }
    case "geo": {
      const position = obj(raw.position);
      const latitude = num(position?.latitude, -90, 90);
      const longitude = num(position?.longitude, -180, 180);
      if (latitude === undefined || longitude === undefined) return null;
      event.position = { latitude, longitude, accuracyMeters: num(position?.accuracyMeters, 0, 1e7) };
      return event;
    }
    default:
      return null;
  }
}
