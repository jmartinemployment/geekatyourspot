"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useReportWebVitals } from "next/web-vitals";
import {
  MAX_CLICKS_PER_PAGE,
  MAX_PULSE_BYTES,
  PULSE_PATH,
  SCHEDULER_VIEW_DWELL_MS,
  VITAL_NAMES,
  type PulseEvent,
  type PulseHighEntropy,
  type PulseSnapshot,
  type SchedulerStep,
  type VitalName,
} from "@/lib/visitors/pulse-event";
import {
  SESSION_IDLE_MS,
  SESSION_KEY,
  VISITOR_EVENT_NAME,
  VISITOR_ID_KEY,
  isUuid,
  readStoredSession,
  type VisitorEventKind,
} from "@/lib/visitors/visitor-events";
import { hasCoordinates, readGeoCookie } from "@/lib/visitors/geo-cookie";
import { GTM_LINK_PREFIX } from "@/lib/gtm/link-id";
import { SCHEDULER_ID } from "@/components/shared/scheduler/scheduler-id";

/**
 * The visitor beacon. Renders nothing. Keeps a persistent visitor id and a session id that rolls
 * over after 30 minutes idle, both in localStorage; sends one page_view per page (the first of a
 * session with the browser snapshot), a page_end with the visible, non-idle time and the scroll
 * depth, link clicks, Core Web Vitals, the scheduler funnel, and, when the request carried no
 * location, the position the browser shares. Everything goes by sendBeacon to /api/pulse; a
 * beacon the browser refuses is dropped, and nothing is retried. It never runs under Global
 * Privacy Control or WebDriver.
 *
 * State lives at module level so React StrictMode's double effects cannot send twice.
 */

const IDLE_PAUSE_MS = 30 * 1000;
const TITLE_SETTLE_MS = 120;
const HIGH_ENTROPY_WAIT_MS = 300;
const GEO_ASKED_KEY = "gays_geo_asked";
const GEO_TIMEOUT_MS = 10 * 1000;
const GEO_MAX_AGE_MS = 60 * 60 * 1000;

interface PageState {
  pageViewId: string;
  path: string;
  activeMs: number;
  activeSince: number | null;
  maxScrollPct: number;
  clicks: number;
  ended: boolean;
}

const state = {
  started: false,
  visitorId: null as string | null,
  sessionId: null as string | null,
  snapshotSentFor: null as string | null,
  schedulerViewedFor: null as string | null,
  page: null as PageState | null,
  idleTimer: 0,
  scrollFrame: 0,
  schedulerTimer: 0,
  schedulerObserver: null as IntersectionObserver | null,
  geoAskedFor: null as string | null,
};

type NavigatorExtras = Navigator & {
  globalPrivacyControl?: boolean;
  deviceMemory?: number;
  pdfViewerEnabled?: boolean;
  connection?: { effectiveType?: string; downlink?: number; rtt?: number; saveData?: boolean };
  userAgentData?: {
    getHighEntropyValues?: (hints: string[]) => Promise<Record<string, unknown>>;
  };
};

function canTrack(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined") return false;
  const nav = navigator as NavigatorExtras;
  if (nav.webdriver === true || nav.globalPrivacyControl === true) return false;
  if (typeof nav.sendBeacon !== "function") return false;
  if (typeof crypto === "undefined" || typeof crypto.randomUUID !== "function") return false;
  try {
    const probe = "gays_probe";
    window.localStorage.setItem(probe, "1");
    window.localStorage.removeItem(probe);
  } catch {
    return false;
  }
  return true;
}

function now(): number {
  return Date.now();
}

function writeSession(id: string, snapshotSent: boolean): void {
  try {
    window.localStorage.setItem(SESSION_KEY, JSON.stringify({ id, last: now(), snapshotSent }));
  } catch {
    // Storage refused the write: the ids live for this page only.
  }
}

/**
 * Sets the visitor and session ids. `snapshotSent` is true when the stored record says the browser
 * snapshot already went out for this session, from an earlier page load or another tab.
 */
function ensureIds(): { snapshotSent: boolean } {
  let visitorId: string | null = null;
  try {
    visitorId = window.localStorage.getItem(VISITOR_ID_KEY);
  } catch {
    visitorId = null;
  }
  if (!isUuid(visitorId)) {
    visitorId = crypto.randomUUID();
    try {
      window.localStorage.setItem(VISITOR_ID_KEY, visitorId);
    } catch {
      // Storage refused the write: the ids live for this page only.
    }
  }
  state.visitorId = visitorId;

  const stored = readStoredSession();
  const live = stored !== null && now() - stored.last <= SESSION_IDLE_MS;
  // A live stored session is this tab's, or one another tab rolled over to, which this tab joins.
  const sessionId = live ? stored.id : crypto.randomUUID();
  const snapshotSent = live && stored.snapshotSent;
  writeSession(sessionId, snapshotSent);
  state.sessionId = sessionId;
  return { snapshotSent };
}

function send(partial: Omit<PulseEvent, "visitorId" | "sessionId">): void {
  if (!state.visitorId || !state.sessionId) return;
  const event: PulseEvent = { ...partial, visitorId: state.visitorId, sessionId: state.sessionId };
  let json: string;
  try {
    json = JSON.stringify(event);
  } catch {
    return;
  }
  if (json.length > MAX_PULSE_BYTES) return;
  try {
    navigator.sendBeacon(PULSE_PATH, new Blob([json], { type: "application/json" }));
  } catch {
    // Refused: dropped, as the contract says.
  }
}

function queryParam(params: URLSearchParams, name: string): string | undefined {
  const value = params.get(name);
  return value && value.trim().length > 0 ? value.trim().slice(0, 200) : undefined;
}

function mediaMatches(query: string): boolean | undefined {
  try {
    return window.matchMedia(query).matches;
  } catch {
    return undefined;
  }
}

async function collectSnapshot(): Promise<PulseSnapshot> {
  const nav = navigator as NavigatorExtras;
  const params = new URLSearchParams(window.location.search);
  const displayMode = mediaMatches("(display-mode: standalone)") ? "standalone" : "browser";
  const pointer = mediaMatches("(pointer: coarse)") ? "coarse" : mediaMatches("(pointer: fine)") ? "fine" : undefined;

  let highEntropy: PulseHighEntropy | undefined;
  const getHigh = nav.userAgentData?.getHighEntropyValues;
  if (typeof getHigh === "function" && nav.userAgentData) {
    try {
      const values = await Promise.race<Record<string, unknown> | null>([
        getHigh.call(nav.userAgentData, ["platformVersion", "model", "architecture", "bitness", "fullVersionList"]),
        new Promise<null>((resolve) => window.setTimeout(() => resolve(null), HIGH_ENTROPY_WAIT_MS)),
      ]);
      if (values) {
        const list = Array.isArray(values.fullVersionList)
          ? (values.fullVersionList as Array<{ brand?: string; version?: string }>)
              .map((b) => `${b.brand ?? ""} ${b.version ?? ""}`.trim())
              .filter((s) => s.length > 0)
          : undefined;
        highEntropy = {
          platformVersion: typeof values.platformVersion === "string" ? values.platformVersion : undefined,
          model: typeof values.model === "string" && values.model.length > 0 ? values.model : undefined,
          architecture: typeof values.architecture === "string" ? values.architecture : undefined,
          bitness: typeof values.bitness === "string" ? values.bitness : undefined,
          fullVersionList: list && list.length > 0 ? list : undefined,
        };
      }
    } catch {
      highEntropy = undefined;
    }
  }

  const connection = nav.connection;
  return {
    arrival: {
      landingUrl: window.location.href.slice(0, 2048),
      referrer: document.referrer ? document.referrer.slice(0, 2048) : undefined,
      utm: {
        source: queryParam(params, "utm_source"),
        medium: queryParam(params, "utm_medium"),
        campaign: queryParam(params, "utm_campaign"),
        term: queryParam(params, "utm_term"),
        content: queryParam(params, "utm_content"),
      },
      clickIds: {
        gclid: queryParam(params, "gclid"),
        gbraid: queryParam(params, "gbraid"),
        wbraid: queryParam(params, "wbraid"),
        fbclid: queryParam(params, "fbclid"),
        msclkid: queryParam(params, "msclkid"),
        liFatId: queryParam(params, "li_fat_id"),
        ttclid: queryParam(params, "ttclid"),
      },
    },
    environment: {
      screen: {
        width: window.screen?.width,
        height: window.screen?.height,
        availWidth: window.screen?.availWidth,
        availHeight: window.screen?.availHeight,
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio,
        colorDepth: window.screen?.colorDepth,
        orientation: window.screen?.orientation?.type,
      },
      device: {
        platform: nav.platform || undefined,
        hardwareConcurrency: nav.hardwareConcurrency,
        deviceMemory: nav.deviceMemory,
        maxTouchPoints: nav.maxTouchPoints,
        pointer,
        hover: mediaMatches("(hover: hover)"),
      },
      browser: {
        languages: Array.isArray(nav.languages) ? Array.from(nav.languages).slice(0, 10) : undefined,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        utcOffsetMinutes: -new Date().getTimezoneOffset(),
        cookieEnabled: nav.cookieEnabled,
        pdfViewerEnabled: nav.pdfViewerEnabled,
        displayMode,
        colorScheme: mediaMatches("(prefers-color-scheme: dark)") ? "dark" : "light",
        reducedMotion: mediaMatches("(prefers-reduced-motion: reduce)"),
      },
      highEntropy,
      network: connection
        ? { effectiveType: connection.effectiveType, downlink: connection.downlink, rtt: connection.rtt, saveData: connection.saveData }
        : undefined,
    },
  };
}

// ----- active time -----

function flushActive(): void {
  const page = state.page;
  if (!page || page.activeSince === null) return;
  page.activeMs += Math.max(0, now() - page.activeSince);
  page.activeSince = null;
}

function resumeActive(): void {
  const page = state.page;
  if (!page || page.ended || document.visibilityState !== "visible") return;
  if (page.activeSince === null) page.activeSince = now();
  armIdleTimer();
}

function pauseActive(): void {
  flushActive();
  if (state.idleTimer) {
    window.clearTimeout(state.idleTimer);
    state.idleTimer = 0;
  }
}

function armIdleTimer(): void {
  if (state.idleTimer) window.clearTimeout(state.idleTimer);
  state.idleTimer = window.setTimeout(() => {
    flushActive();
    state.idleTimer = 0;
  }, IDLE_PAUSE_MS);
}

function onInput(): void {
  touchSession();
  resumeActive();
}

function touchSession(): void {
  if (!state.sessionId) return;
  const stored = readStoredSession();
  const snapshotSent =
    state.snapshotSentFor === state.sessionId ||
    (stored !== null && stored.id === state.sessionId && stored.snapshotSent);
  writeSession(state.sessionId, snapshotSent);
}

function onScroll(): void {
  if (state.scrollFrame) return;
  state.scrollFrame = window.requestAnimationFrame(() => {
    state.scrollFrame = 0;
    const page = state.page;
    if (!page) return;
    const doc = document.documentElement;
    const total = Math.max(doc.scrollHeight, 1);
    const seen = Math.min(total, window.scrollY + window.innerHeight);
    const pct = Math.max(0, Math.min(100, Math.round((seen / total) * 100)));
    if (pct > page.maxScrollPct) page.maxScrollPct = pct;
    onInput();
  });
}

// ----- pages -----

function endPage(): void {
  const page = state.page;
  if (!page || page.ended) return;
  pauseActive();
  page.ended = true;
  send({ kind: "page_end", pageViewId: page.pageViewId, activeMs: Math.round(page.activeMs), maxScrollPct: page.maxScrollPct });
}

async function beginPage(path: string): Promise<void> {
  endPage();
  const { snapshotSent } = ensureIds();
  const page: PageState = {
    pageViewId: crypto.randomUUID(),
    path,
    activeMs: 0,
    activeSince: null,
    maxScrollPct: 0,
    clicks: 0,
    ended: false,
  };
  state.page = page;

  const needsSnapshot = !snapshotSent && state.snapshotSentFor !== state.sessionId;
  const snapshot = needsSnapshot ? await collectSnapshot() : undefined;
  await new Promise<void>((resolve) => window.setTimeout(resolve, TITLE_SETTLE_MS));
  if (state.page !== page) return;

  send({
    kind: "page_view",
    pageViewId: page.pageViewId,
    path,
    query: window.location.search ? window.location.search.slice(0, 512) : undefined,
    title: document.title ? document.title.slice(0, 300) : undefined,
    snapshot,
  });
  if (needsSnapshot && state.sessionId) {
    state.snapshotSentFor = state.sessionId;
    writeSession(state.sessionId, true);
  }
  resumeActive();
  onScroll();
  observeScheduler();
  askForPositionIfMissing();
}

/** A session that idled out mid-page starts a new one on the same page, as a navigation would. */
function rolloverIfIdle(): void {
  const stored = readStoredSession();
  if (stored && now() - stored.last <= SESSION_IDLE_MS && stored.id === state.sessionId) return;
  const page = state.page;
  if (!page) return;
  void beginPage(page.path);
}

// ----- clicks -----

function onClick(event: MouseEvent): void {
  onInput();
  const target = event.target;
  if (!(target instanceof Element)) return;
  const anchor = target.closest("a[href]");
  if (!(anchor instanceof HTMLAnchorElement)) return;
  const page = state.page;
  if (!page || page.ended || page.clicks >= MAX_CLICKS_PER_PAGE) return;
  page.clicks += 1;
  let href: string | undefined;
  let outbound = false;
  try {
    const url = new URL(anchor.href, window.location.href);
    href = url.href.slice(0, 2048);
    outbound = url.host !== window.location.host && !url.protocol.startsWith("mailto") && !url.protocol.startsWith("tel");
    if (url.protocol === "mailto:" || url.protocol === "tel:") outbound = false;
  } catch {
    href = anchor.getAttribute("href")?.slice(0, 2048);
  }
  const linkId = anchor.id && anchor.id.startsWith(GTM_LINK_PREFIX) ? anchor.id.slice(0, 200) : undefined;
  send({ kind: "click", pageViewId: page.pageViewId, click: { href, linkId, outbound } });
}

// ----- scheduler -----

function observeScheduler(): void {
  if (state.schedulerObserver) {
    state.schedulerObserver.disconnect();
    state.schedulerObserver = null;
  }
  if (state.schedulerTimer) {
    window.clearTimeout(state.schedulerTimer);
    state.schedulerTimer = 0;
  }
  if (state.schedulerViewedFor === state.sessionId) return;
  const element = document.getElementById(SCHEDULER_ID);
  if (!element || typeof IntersectionObserver === "undefined") return;

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[entries.length - 1];
      if (!entry) return;
      // Half the section, or the section filling half the viewport when it is taller than it.
      const visible = entry.isIntersecting
        && (entry.intersectionRatio >= 0.5 || entry.intersectionRect.height >= window.innerHeight * 0.5);
      if (visible && !state.schedulerTimer) {
        state.schedulerTimer = window.setTimeout(() => {
          state.schedulerTimer = 0;
          if (state.schedulerViewedFor === state.sessionId) return;
          state.schedulerViewedFor = state.sessionId;
          sendSchedulerStep("view");
          observer.disconnect();
          if (state.schedulerObserver === observer) state.schedulerObserver = null;
        }, SCHEDULER_VIEW_DWELL_MS);
      } else if (!visible && state.schedulerTimer) {
        window.clearTimeout(state.schedulerTimer);
        state.schedulerTimer = 0;
      }
    },
    { threshold: [0, 0.25, 0.5, 0.75, 1] },
  );
  observer.observe(element);
  state.schedulerObserver = observer;
}

function sendSchedulerStep(step: SchedulerStep): void {
  rolloverIfIdle();
  send({ kind: "scheduler", schedulerStep: step });
}

function onVisitorEvent(event: Event): void {
  const kind = (event as CustomEvent<{ kind?: VisitorEventKind }>).detail?.kind;
  switch (kind) {
    case "scheduler_date_picked":
      sendSchedulerStep("date_picked");
      return;
    case "scheduler_slot_held":
      sendSchedulerStep("slot_held");
      return;
    case "scheduler_booked":
      sendSchedulerStep("booked");
      return;
    case "contact_submitted":
      rolloverIfIdle();
      send({ kind: "contact" });
      return;
    default:
      return;
  }
}

// ----- browser position, only when the request carried no location -----

function askForPositionIfMissing(): void {
  if (!state.sessionId || state.geoAskedFor === state.sessionId) return;
  if (hasCoordinates(readGeoCookie())) return;
  if (!("geolocation" in navigator) || !navigator.geolocation) return;
  try {
    if (window.sessionStorage.getItem(GEO_ASKED_KEY) === state.sessionId) return;
    window.sessionStorage.setItem(GEO_ASKED_KEY, state.sessionId);
  } catch {
    // Without sessionStorage the module flag below still holds for this page.
  }
  state.geoAskedFor = state.sessionId;
  const sessionId = state.sessionId;
  try {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (state.sessionId !== sessionId) return;
        const { latitude, longitude, accuracy } = position.coords;
        if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return;
        send({
          kind: "geo",
          position: { latitude, longitude, accuracyMeters: Number.isFinite(accuracy) ? accuracy : undefined },
        });
      },
      () => {
        // Declined, unavailable or timed out: nothing is recorded.
      },
      { enableHighAccuracy: false, timeout: GEO_TIMEOUT_MS, maximumAge: GEO_MAX_AGE_MS },
    );
  } catch {
    // A browser that throws here records nothing.
  }
}

// ----- lifecycle -----

function onVisibilityChange(): void {
  if (document.visibilityState === "hidden") {
    pauseActive();
    const page = state.page;
    if (page && !page.ended) {
      send({ kind: "page_end", pageViewId: page.pageViewId, activeMs: Math.round(page.activeMs), maxScrollPct: page.maxScrollPct });
    }
  } else {
    touchSession();
    resumeActive();
  }
}

function onPageHide(): void {
  endPage();
}

function onPageShow(event: PageTransitionEvent): void {
  if (!event.persisted) return;
  // Back from the back/forward cache: the page view continues, and its time keeps counting.
  const page = state.page;
  if (page) page.ended = false;
  ensureIds();
  resumeActive();
}

function start(): void {
  if (state.started) return;
  state.started = true;
  ensureIds();
  document.addEventListener("visibilitychange", onVisibilityChange);
  window.addEventListener("pagehide", onPageHide);
  window.addEventListener("pageshow", onPageShow);
  window.addEventListener("scroll", onScroll, { passive: true });
  for (const name of ["pointerdown", "keydown", "touchstart", "mousemove", "wheel"] as const) {
    window.addEventListener(name, onInput, { passive: true });
  }
  document.addEventListener("click", onClick, true);
  window.addEventListener(VISITOR_EVENT_NAME, onVisitorEvent);
  window.setInterval(rolloverIfIdle, 60 * 1000);
}

export function VisitorPulse(): null {
  const pathname = usePathname();

  useEffect(() => {
    if (!canTrack()) return;
    start();
    const path = pathname || window.location.pathname;
    if (state.page && state.page.path === path && !state.page.ended) return;
    void beginPage(path);
  }, [pathname]);

  useReportWebVitals((metric) => {
    if (!state.started) return;
    const page = state.page;
    if (!page) return;
    const name = metric.name;
    if (!(VITAL_NAMES as readonly string[]).includes(name)) return;
    const value = Number(metric.value);
    if (!Number.isFinite(value) || value < 0) return;
    send({ kind: "vitals", pageViewId: page.pageViewId, vital: { name: name as VitalName, value: Math.round(value * 10000) / 10000 } });
  });

  return null;
}
