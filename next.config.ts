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
      // Helm was first laid out under its old vendor handle on 2026-10-11 and
      // re-exported as takethehelm on 2026-10-12.
      {
        source: "/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/helmhq",
        destination: "/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/takethehelm",
        permanent: true,
      },
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
      // The home page linked these flat accounting paths before their pages
      // existed (found 2026-10-09). Each now has a page under its pillar.
      {
        source: "/tools/accounting/chaser",
        destination: "/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq",
        permanent: true,
      },
      {
        source: "/tools/accounting/invoiced",
        destination: "/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced",
        permanent: true,
      },
      {
        source: "/tools/accounting/versapay",
        destination: "/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay",
        permanent: true,
      },
      // The accounts receivable blog post was re-exported under a new slug on
      // 2026-10-10; the old slug had been live since 2026-10-09.
      {
        source: "/blog/accounting/cash-flow-forecasting/how-automated-accounts-receivable-boosts-your-business-efficiency",
        destination: "/blog/accounting/cash-flow-forecasting/how-automated-accounts-receivable-can-transform-your-cash-flow",
        permanent: true,
      },
      {
        source: "/tools/accounting/melio",
        destination: "/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/melio",
        permanent: true,
      },
      {
        source: "/tools/accounting/stampli",
        destination: "/tools/accounting/accounts-payable/automated-approval-workflows/stampli",
        permanent: true,
      },
      {
        source: "/tools/accounting/tipalti",
        destination: "/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/tipalti",
        permanent: true,
      },
      // ActiveCampaign shipped at two URLs. The hyphenated one is canonical;
      // the one-word route was retired on 2026-10-03 and its page's content
      // now serves the hyphenated path.
      // Friday's approval-workflows pillar was superseded by a new export on
      // 2026-10-07 with a different slug; the old pages are in backup/.
      {
        source: "/use-cases/accounting/accounts-payable/automated-approval-workflows-boosting-efficiency-with-ai",
        destination: "/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable",
        permanent: true,
      },
      {
        source: "/tools/accounting/accounts-payable/automated-approval-workflows-boosting-efficiency-with-ai/approvalmax",
        destination: "/tools/accounting/accounts-payable/automated-approval-workflows/approvalmax",
        permanent: true,
      },
      // The complex and changing laws pillar and its tools moved to the
      // automating-complex-and-changing-laws segment on 2026-10-14, after the
      // home card renamed the use case; both had been live since 2026-10-12.
      {
        source: "/use-cases/accounting/tax-compliance-regulations/ai-solutions-for-complex-and-changing-tax-laws",
        destination: "/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws",
        permanent: true,
      },
      {
        source: "/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/:tool",
        destination: "/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/:tool",
        permanent: true,
      },
      {
        source: "/tools/marketing/activecampaign",
        destination: "/tools/marketing/active-campaign",
        permanent: true,
      },
      // The Smart Chatbots for Marketing pillar moved to the blog on 2026-10-16;
      // Cross-Platform Chatbot is the pillar for this topic now.
      {
        source: "/use-cases/marketing/smart-chatbots-for-marketing",
        destination: "/blog/marketing/smart-chatbots-for-marketing-transforming-customer-engagement",
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
