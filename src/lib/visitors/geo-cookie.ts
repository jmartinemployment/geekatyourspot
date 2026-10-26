/**
 * The approximate location Vercel derives from the request's IP address, carried to the browser
 * in a cookie so the page can read it without a lookup. Written by `src/proxy.ts` on every
 * document request whose geo headers are present; read by the visitor beacon, which asks the
 * browser for a position only when this cookie carries none.
 */
export const GEO_COOKIE_NAME = "gays_geo";
export const GEO_COOKIE_MAX_AGE_SECONDS = 7 * 24 * 60 * 60;

export interface VisitorGeo {
  country?: string;
  region?: string;
  city?: string;
  postalCode?: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
  continent?: string;
}

const STRING_KEYS = ["country", "region", "city", "postalCode", "timezone", "continent"] as const;

/**
 * The cookie's value is the JSON itself. The cookie serializer percent-encodes it on the way
 * out and the request parser decodes it on the way back, so `request.cookies.get()` compares
 * equal to this string, and `document.cookie` holds it encoded once.
 */
export function serializeGeoCookie(geo: VisitorGeo): string {
  return JSON.stringify(geo);
}

function parseJson(value: string): unknown {
  try {
    return JSON.parse(value);
  } catch {
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch {
      return null;
    }
  }
}

export function parseGeoCookie(value: string | undefined | null): VisitorGeo | null {
  if (!value) return null;
  try {
    const raw: unknown = parseJson(value);
    if (typeof raw !== "object" || raw === null) return null;
    const source = raw as Record<string, unknown>;
    const geo: VisitorGeo = {};
    for (const key of STRING_KEYS) {
      const v = source[key];
      if (typeof v === "string" && v.length > 0 && v.length <= 120) geo[key] = v;
    }
    if (typeof source.latitude === "number" && Number.isFinite(source.latitude)) geo.latitude = source.latitude;
    if (typeof source.longitude === "number" && Number.isFinite(source.longitude)) geo.longitude = source.longitude;
    return Object.keys(geo).length === 0 ? null : geo;
  } catch {
    return null;
  }
}

/** True when the geo carries coordinates, which is what the browser fallback would add. */
export function hasCoordinates(geo: VisitorGeo | null): boolean {
  return geo !== null && typeof geo.latitude === "number" && typeof geo.longitude === "number";
}

/** The cookie as the browser holds it. Client side only; null on the server or without a cookie. */
export function readGeoCookie(): VisitorGeo | null {
  if (typeof document === "undefined") return null;
  try {
    const prefix = GEO_COOKIE_NAME + "=";
    for (const part of document.cookie.split(";")) {
      const trimmed = part.trim();
      if (trimmed.startsWith(prefix)) return parseGeoCookie(trimmed.slice(prefix.length));
    }
  } catch {
    return null;
  }
  return null;
}
