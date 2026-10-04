import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 100],
  },
  // Host canonicalization lives in Vercel (Settings > Domains), not here. Having both caused a
  // redirect loop: this file sent apex -> www while the dashboard sent www -> apex.

  // Keep the site out of search results until launch. This header beats the per-page `robots`
  // metadata exports, so there is no page to forget. Set ALLOW_INDEXING=true in Vercel to launch.
  async redirects() {
    return [
      {
        source: "/glossary/artificial-intelligence",
        destination: "/glossary/ai",
        permanent: true,
      },
      // Accounting tools moved to /tools/<department>/<use-case>/<tool> on
      // 2026-10-02. See plans/tools-directory-structure.md; marketing has not
      // moved yet, so only these four have a use-case segment.
      {
        source: "/tools/accounting/dext",
        destination: "/tools/accounting/accounts-payable/dext",
        permanent: true,
      },
      {
        source: "/tools/accounting/bill",
        destination: "/tools/accounting/accounts-payable/bill",
        permanent: true,
      },
      {
        source: "/tools/accounting/avidxchange",
        destination: "/tools/accounting/accounts-payable/avidxchange",
        permanent: true,
      },
      {
        source: "/tools/accounting/accounts-payable/dext",
        destination: "/tools/accounting/accounts-payable/automated-data-entry-processing/dext",
        permanent: true,
      },
      {
        source: "/tools/accounting/accounts-payable/bill",
        destination: "/tools/accounting/accounts-payable/automated-data-entry-processing/bill",
        permanent: true,
      },
      {
        source: "/tools/accounting/accounts-payable/avidxchange",
        destination: "/tools/accounting/accounts-payable/automated-data-entry-processing/avidxchange",
        permanent: true,
      },
      {
        source: "/tools/accounting/avalara",
        destination: "/tools/accounting/tax-compliance-regulations/avalara",
        permanent: true,
      },
      // ActiveCampaign shipped at two URLs. The hyphenated one is canonical;
      // the one-word route was retired on 2026-10-03 and its page's content
      // now serves the hyphenated path.
      {
        source: "/tools/marketing/activecampaign",
        destination: "/tools/marketing/active-campaign",
        permanent: true,
      },
    ];
  },
  async headers() {
    if (process.env.ALLOW_INDEXING === "true") return [];
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
