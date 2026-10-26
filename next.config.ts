import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75],
  },
  // Host canonicalization lives in Vercel (Settings > Domains), not here. Having both caused a
  // redirect loop: this file sent apex -> www while the dashboard sent www -> apex.

  // Keep the site out of search results until launch. This header beats the per-page `robots`
  // metadata exports, so there is no page to forget. Set ALLOW_INDEXING=true in Vercel to launch.
  async headers() {
    // Safe on every response before and after launch. The CSP allows inline scripts and styles:
    // every page is prerendered, and a nonce would force each one to render on request. It still
    // limits scripts to this site, GTM and the Google tags GTM loads (GA4 and Google Ads), and
    // forbids framing, plugins, <base> rewrites and form posts to other sites. Tag Assistant
    // (tagmanager.google.com) and the Vercel toolbar (vercel.live) are allowed so both keep working.
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://tagmanager.google.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://www.google.com https://vercel.live",
      "style-src 'self' 'unsafe-inline' https://tagmanager.google.com https://fonts.googleapis.com https://vercel.live",
      "img-src 'self' data: blob: https://*.google-analytics.com https://analytics.google.com https://*.googletagmanager.com https://*.g.doubleclick.net https://www.google.com https://www.googleadservices.com https://pagead2.googlesyndication.com https://ssl.gstatic.com https://www.gstatic.com https://vercel.live https://vercel.com",
      "font-src 'self' data: https://fonts.gstatic.com https://vercel.live https://assets.vercel.com",
      "connect-src 'self' https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://*.googletagmanager.com https://*.g.doubleclick.net https://ad.doubleclick.net https://www.google.com https://www.googleadservices.com https://pagead2.googlesyndication.com https://vercel.live wss://ws-us3.pusher.com",
      "frame-src https://www.googletagmanager.com https://td.doubleclick.net https://bid.g.doubleclick.net https://vercel.live",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
    ].join("; ");
    const security = {
      source: "/:path*",
      headers: [
        { key: "Content-Security-Policy", value: csp },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        // Geolocation is open to this origin only: the visitor beacon asks the browser for a
        // position when the request carried no location, and nothing embedded may ask.
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
      ],
    };
    // geekatyourspot.vercel.app (and every preview URL) serves the same pages as the real domain,
    // so it stays out of search after launch too. This sits outside the ALLOW_INDEXING branch.
    const vercelHost = {
      source: "/:path*",
      has: [{ type: "host" as const, value: ".*\\.vercel\\.app" }],
      headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
    };
    if (process.env.ALLOW_INDEXING === "true") return [security, vercelHost];
    return [
      security,
      vercelHost,
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
