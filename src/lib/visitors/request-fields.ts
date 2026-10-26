import { isIP } from "node:net";
import type { VisitorGeo } from "@/lib/visitors/geo-cookie";
import { readEdgeRegion, readVercelGeo } from "@/lib/visitors/vercel-geo";

/** What the request itself says about the visitor, read on the server and never trusted from the body. */
export interface RequestFields {
  ip: string;
  geo: VisitorGeo;
  edgeRegion?: string;
  userAgent: string;
  clientHints?: { ua?: string; mobile?: string; platform?: string };
  acceptLanguage?: string;
  dnt?: string;
}

/** Null when the request carries no valid `x-real-ip`, which is every request not served by Vercel. */
export function readRequestFields(headers: Headers): RequestFields | null {
  const ip = headers.get("x-real-ip")?.trim() ?? "";
  if (!ip || isIP(ip) === 0) return null;

  const short = (name: string, max: number): string | undefined => {
    const value = headers.get(name)?.trim();
    return value && value.length <= max ? value : undefined;
  };

  const hints = {
    ua: short("sec-ch-ua", 300),
    mobile: short("sec-ch-ua-mobile", 4),
    platform: short("sec-ch-ua-platform", 40),
  };
  const hasHints = hints.ua !== undefined || hints.mobile !== undefined || hints.platform !== undefined;

  return {
    ip,
    geo: readVercelGeo(headers) ?? {},
    edgeRegion: readEdgeRegion(headers),
    userAgent: (headers.get("user-agent") ?? "").slice(0, 1024),
    clientHints: hasHints ? hints : undefined,
    acceptLanguage: short("accept-language", 200),
    dnt: short("dnt", 4),
  };
}
