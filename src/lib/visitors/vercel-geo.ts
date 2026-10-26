import type { VisitorGeo } from "@/lib/visitors/geo-cookie";

/**
 * Vercel's geolocation request headers, which arrive on every request with no lookup call. The
 * city is RFC 3986 encoded and is decoded here. Returns null when the request carries none of
 * them, which is every request outside Vercel.
 */
export function readVercelGeo(headers: Headers): VisitorGeo | null {
  const geo: VisitorGeo = {};
  const text = (name: string, max = 120): string | undefined => {
    const value = headers.get(name)?.trim();
    return value && value.length <= max ? value : undefined;
  };
  const number = (name: string): number | undefined => {
    const value = headers.get(name)?.trim();
    if (!value) return undefined;
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : undefined;
  };

  const country = text("x-vercel-ip-country", 8);
  if (country) geo.country = country;
  const region = text("x-vercel-ip-country-region", 16);
  if (region) geo.region = region;
  const city = text("x-vercel-ip-city");
  if (city) {
    try {
      geo.city = decodeURIComponent(city);
    } catch {
      geo.city = city;
    }
  }
  const postalCode = text("x-vercel-ip-postal-code", 16);
  if (postalCode) geo.postalCode = postalCode;
  const latitude = number("x-vercel-ip-latitude");
  if (latitude !== undefined && latitude >= -90 && latitude <= 90) geo.latitude = latitude;
  const longitude = number("x-vercel-ip-longitude");
  if (longitude !== undefined && longitude >= -180 && longitude <= 180) geo.longitude = longitude;
  const timezone = text("x-vercel-ip-timezone", 64);
  if (timezone) geo.timezone = timezone;
  const continent = text("x-vercel-ip-continent", 8);
  if (continent) geo.continent = continent;

  return Object.keys(geo).length === 0 ? null : geo;
}

/** The edge region that served the request: the prefix of `x-vercel-id`, such as `iad1`. */
export function readEdgeRegion(headers: Headers): string | undefined {
  const id = headers.get("x-vercel-id");
  if (!id) return undefined;
  const region = id.split("::")[0]?.trim();
  return region && region.length <= 32 ? region : undefined;
}
