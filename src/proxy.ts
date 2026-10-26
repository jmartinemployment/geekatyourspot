import { NextResponse, type NextRequest } from "next/server";
import { readVercelGeo } from "@/lib/visitors/vercel-geo";
import {
  GEO_COOKIE_MAX_AGE_SECONDS,
  GEO_COOKIE_NAME,
  serializeGeoCookie,
} from "@/lib/visitors/geo-cookie";

/**
 * Copies Vercel's geolocation headers into the `gays_geo` cookie, so the browser can read the
 * approximate location the edge worked out from the IP address. The cookie is written only
 * when the request carries geo headers and the browser does not already hold the same value,
 * so a cached page is served unchanged. Pages stay prerendered: this runs beside them, not
 * inside them. Nothing else happens here.
 */
export function proxy(request: NextRequest): NextResponse {
  const response = NextResponse.next();
  const geo = readVercelGeo(request.headers);
  if (!geo) return response;

  const value = serializeGeoCookie(geo);
  if (request.cookies.get(GEO_COOKIE_NAME)?.value === value) return response;

  response.cookies.set(GEO_COOKIE_NAME, value, {
    path: "/",
    maxAge: GEO_COOKIE_MAX_AGE_SECONDS,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    httpOnly: false,
  });
  return response;
}

export const config = {
  // Documents only: not the build output, the image optimizer, the API routes, or any file with
  // an extension (images, fonts, llms.txt, sitemap.xml, robots.txt).
  matcher: ["/((?!_next/static|_next/image|api/|.*\\..*).*)"],
};
