import type { NextConfig } from "next";

// Addresses Search Console reported as Not found (404) on 2026-11-23. None has a replacement page,
// so each answers 410 Gone, the status for a page removed on purpose. The four accounting tool
// pages never existed here and the rest were removed or renamed away. /api/gone is the responder.
const GONE_PATHS = [
  "/tools/marketing/leadsquared",
  "/tools/accounting/agicap",
  "/tools/accounting/freshbooks",
  "/tools/accounting/notion",
  "/tools/accounting/airtable",
  "/use-cases/marketing/ai-marketing-systems/es-ES",
  "/use-cases/marketing/ai-marketing-systems/en-US",
  "/blog/technology-consulting-in-south-florida-expert-guidance-for-smarter-technology-decisions",
  "/blog/cloud-migration-infrastructure-reduce-it-costs-by-60-without-buying-another-server",
  "/orderstack-floor-plan",
  // Search Console listed these as excluded (2026-11-24); no equivalent page exists.
  "/tools/accounting/rows",
  "/tools/accounting/kissflow",
  "/tools/marketing/salesforce-einstein",
  "/use-cases/accounting/ai-accounting-systems",
  "/blog/category/technology-consulting",
  "/blog/business-intelligence-solutions-for-south-florida-small-businesses-from-data-to-decisions",
  // Search Console listed these as excluded (2026-11-24); they answered 404 and have no equivalent page.
  "/blog/marketing/are-smart-chatbots-the-secret-weapon-for-marketing-success",
  "/blog/marketing/how-ai-powered-lead-scoring-can-boost-your-sales-funnel",
  "/blog/marketing/how-personalized-email-campaigns-drive-real-results",
  "/blog/marketing/how-smart-chatbots-revolutionize-b2b-marketing",
  "/blog/marketing/unlocking-the-power-of-ai-for-content-repurposing",
  "/tools/marketing/airia",
  "/tools/marketing/chatgpt",
  "/tools/marketing/claude",
  "/tools/marketing/keyword-insights",
  "/tools/marketing/madgicx",
  "/tools/marketing/makecom",
  "/tools/marketing/surfer-seo",
  "/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable",
  "/use-cases/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai",
  "/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai",
  "/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting-for-smbs",
  "/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business",
  "/use-cases/accounting/tax-compliance-regulations/ai-solutions-for-complex-and-changing-tax-laws",
  "/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws",
  "/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida-smbs",
  "/use-cases/marketing/ai-content-creation-workflow",
  "/use-cases/marketing/ai-content-repurposing",
  "/use-cases/marketing/ai-driven-lead-scoring-for-small-businesses",
  "/use-cases/marketing/intelligent-lead-capture-pipeline",
  "/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-smb-implementation-guide",
  "/use-cases/marketing/lead-capture-pipeline/intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses",
  "/use-cases/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-smarter-lead-capture-for-south-florida-smbs",
  "/use-cases/marketing/seo-blog-and-article-generation",
  "/use-cases/marketing/smart-chatbots-for-marketing",
];

// Pages that moved when the tools, blog posts and glossary were reorganised. Search Console listed
// each old address as excluded (2026-11-24) and the live site answered 404. Each goes to the page
// on the same subject, 301 so Google moves the ranking with it. Where a tool now sits under several
// use cases, the old category picks the new one: multi-state-sales-tax-nexus -> ai-multi-state-sales-tax,
// the complex and changing laws categories -> ai-tax-law, intelligent-resource-planning ->
// ai-resource-planning, automated-payment-execution -> ai-payment-execution, cross-platform-chatbot
// -> ai-chatbot. Old addresses with no equivalent page answer 410 instead, see GONE_PATHS.
const MOVED_PAGES: ReadonlyArray<readonly [string, string]> = [
  ["/blog/marketing/lead-capture-pipeline/cross-platform-chatbot-the-missing-link-in-your-south-florida-lead-capture-pipeline", "/blog/business-operations/cross-platform-chatbot-the-missing-link-in-your-south-florida-lead-capture-pipeline"],
  ["/blog/marketing/lead-capture-pipeline/intelligent-receptionist-how-miami-small-businesses-can-stop-losing-leads-after-hours", "/blog/business-operations/intelligent-receptionist-how-miami-small-businesses-can-stop-losing-leads-after-hours"],
  ["/tools/accounting/accounts-payable/automated-approval-workflows/approvalmax", "/tools/accounting/accounts-payable/ai-invoice-approval-workflows/approvalmax"],
  ["/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/avidxchange", "/tools/accounting/accounts-payable/ai-payment-execution/avidxchange"],
  ["/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/melio", "/tools/accounting/accounts-payable/ai-payment-execution/melio"],
  ["/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/tipalti", "/tools/accounting/accounts-payable/ai-payment-execution/tipalti"],
  ["/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/bill", "/tools/accounting/cash-flow-forecasting/ai-accounts-receivable/bill"],
  ["/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq", "/tools/accounting/cash-flow-forecasting/ai-accounts-receivable/chaserhq"],
  ["/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced", "/tools/accounting/cash-flow-forecasting/ai-accounts-receivable/invoiced"],
  ["/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay", "/tools/accounting/cash-flow-forecasting/ai-accounts-receivable/versapay"],
  ["/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/cashflowfrog", "/tools/accounting/cash-flow-forecasting/ai-resource-planning/cashflowfrog"],
  ["/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq", "/tools/accounting/cash-flow-forecasting/ai-resource-planning/fathomhq"],
  ["/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/jirav", "/tools/accounting/cash-flow-forecasting/ai-resource-planning/jirav"],
  ["/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks", "/tools/accounting/cash-flow-forecasting/ai-resource-planning/quickbooks"],
  ["/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/takethehelm", "/tools/accounting/cash-flow-forecasting/ai-resource-planning/takethehelm"],
  ["/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/quaderno", "/tools/accounting/tax-compliance-regulations/ai-tax-law/quaderno"],
  ["/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxcloud", "/tools/accounting/tax-compliance-regulations/ai-tax-law/taxcloud"],
  ["/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxjar", "/tools/accounting/tax-compliance-regulations/ai-tax-law/taxjar"],
  ["/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/thetaxvalet", "/tools/accounting/tax-compliance-regulations/ai-tax-law/thetaxvalet"],
  ["/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/zamp", "/tools/accounting/tax-compliance-regulations/ai-tax-law/zamp"],
  ["/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/taxjar", "/tools/accounting/tax-compliance-regulations/ai-tax-law/taxjar"],
  ["/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno", "/tools/accounting/tax-compliance-regulations/ai-multi-state-sales-tax/quaderno"],
  ["/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud", "/tools/accounting/tax-compliance-regulations/ai-multi-state-sales-tax/taxcloud"],
  ["/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar", "/tools/accounting/tax-compliance-regulations/ai-multi-state-sales-tax/taxjar"],
  ["/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/thetaxvalet", "/tools/accounting/tax-compliance-regulations/ai-multi-state-sales-tax/thetaxvalet"],
  ["/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/zamp", "/tools/accounting/tax-compliance-regulations/ai-multi-state-sales-tax/zamp"],
  ["/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/adp", "/tools/accounting/tax-compliance-regulations/ai-payroll-tax/adp"],
  ["/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/deel", "/tools/accounting/tax-compliance-regulations/ai-payroll-tax/deel"],
  ["/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/justworks", "/tools/accounting/tax-compliance-regulations/ai-payroll-tax/justworks"],
  ["/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/rippling", "/tools/accounting/tax-compliance-regulations/ai-payroll-tax/rippling"],
  ["/tools/marketing/anomalo", "/tools/business-operations/ai-data-quality-assessments/anomalo"],
  ["/tools/marketing/content-creation-workflow/intelligent-content-planning/hootsuite", "/tools/marketing/marketing-automation-platforms/ai-content-planning/hootsuite"],
  ["/tools/marketing/content-creation-workflow/intelligent-content-planning/marketmuse", "/tools/marketing/marketing-automation-platforms/ai-content-planning/marketmuse"],
  ["/tools/marketing/frase", "/tools/marketing/marketing-automation-platforms/ai-content-generation/frase"],
  ["/tools/marketing/great-expectations", "/tools/business-operations/ai-data-quality-assessments/great-expectations"],
  ["/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/botpenguin", "/tools/business-operations/ai-chatbot/botpenguin"],
  ["/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/dapta", "/tools/business-operations/ai-chatbot/dapta"],
  ["/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/manychat", "/tools/business-operations/ai-chatbot/manychat"],
  ["/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/myaifrontdesk", "/tools/business-operations/ai-chatbot/myaifrontdesk"],
  ["/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/tidio", "/tools/business-operations/ai-chatbot/tidio"],
  ["/tools/marketing/lead-capture-pipeline/intelligent-receptionist/voksha", "/tools/business-operations/ai-receptionist/voksha"],
  ["/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo", "/tools/marketing/marketing-automation-platforms/ai-lead-enrichment-predictive-scoring/apollo"],
  ["/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/factors", "/tools/marketing/marketing-automation-platforms/ai-lead-enrichment-predictive-scoring/factors"],
  ["/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/leadfeeder", "/tools/marketing/marketing-automation-platforms/ai-lead-enrichment-predictive-scoring/leadfeeder"],
  ["/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/lusha", "/tools/marketing/marketing-automation-platforms/ai-lead-enrichment-predictive-scoring/lusha"],
  ["/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/snitcher", "/tools/marketing/marketing-automation-platforms/ai-lead-enrichment-predictive-scoring/snitcher"],
  ["/tools/marketing/mailchimp", "/tools/marketing/marketing-automation-platforms/ai-personalized-email-campaigns/mailchimp"],
  ["/tools/marketing/qualytics", "/tools/business-operations/ai-data-quality-assessments/qualytics"],
  ["/blog/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-how-south-florida-smbs-can-turn-more-leads-into-sales", "/blog/marketing/marketing-automation-platforms/lead-enrichment-and-predictive-scoring-how-south-florida-can-turn-more-leads-into-sales"],
  ["/tools/marketing/active-campaign", "/tools/marketing/marketing-automation-platforms/ai-personalized-email-campaigns/activecampaign"],
  ["/tools/marketing/copyai", "/tools/marketing/marketing-automation-platforms/ai-content-generation/copy"],
  ["/tools/marketing/jasper-ai", "/tools/marketing/marketing-automation-platforms/ai-content-generation/jasper"],
  ["/use-cases/accounting/accounts-payable/automated-fraud-duplicate-payment-controls-boosting-efficiency-for-smbs", "/use-cases/accounting/accounts-payable/ai-fraud-duplicate-payment-controls"],
  ["/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting", "/use-cases/accounting/cash-flow-forecasting"],
  ["/use-cases/marketing/automated-ad-spend-optimization", "/use-cases/marketing/ad-spend-optimization"],
  ["/tools/marketing/apollo", "/tools/marketing/marketing-automation-platforms/ai-lead-enrichment-predictive-scoring/apollo"],
];

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Host canonicalization lives in Vercel (Settings > Domains), not here. Having both caused a
  // redirect loop: this file sent apex -> www while the dashboard sent www -> apex.

  // The site was WordPress before 2026 and Google still lists WordPress's own sitemap files as
  // referrers (Search Console, 2026-11-06). WordPress served /wp-sitemap.xml and one
  // /wp-sitemap-<type>-<name>-<n>.xml per content type, so they all point at the one sitemap.
  async rewrites() {
    return {
      beforeFiles: GONE_PATHS.map((source) => ({ source, destination: "/api/gone" })),
    };
  },

  async redirects() {
    return [
      { source: "/wp-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/:file(wp-sitemap-.*\\.xml)", destination: "/sitemap.xml", permanent: true },
      // Old WordPress pages that Search Console still reports as 404 (2026-11-06) and that have a
      // close match here. The old addresses with no equivalent page answer 410 Gone, see GONE_PATHS.
      { source: "/cookie-policy", destination: "/privacy-policy", permanent: true },
      ...MOVED_PAGES.map(([source, destination]) => ({ source, destination, permanent: true })),
      {
        source: "/blog/search-engine-marketing-for-south-florida-dominating-google-in-broward-and-palm-beach-county",
        destination: "/blog/marketing/ad-spend-optimization/how-south-florida-businesses-can-stop-wasting-ad-spend",
        permanent: true,
      },
      {
        source: "/blog/search-engine-marketing-stop-paying-for-clicks-you-could-get-free",
        destination: "/use-cases/marketing/ai-seo-tools",
        permanent: true,
      },
      {
        source: "/blog/email-marketing-own-your-audience-instead-of-renting-it-from-social-media",
        destination: "/use-cases/marketing/marketing-automation-platforms/ai-personalized-email-campaigns",
        permanent: true,
      },
    ];
  },

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
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://tagmanager.google.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://www.google.com https://www.clarity.ms https://scripts.clarity.ms https://vercel.live",
      "style-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://tagmanager.google.com https://fonts.googleapis.com https://vercel.live",
       "img-src 'self' data: blob: https://*.google-analytics.com https://analytics.google.com https://*.googletagmanager.com https://*.g.doubleclick.net https://www.google.com https://www.googleadservices.com https://pagead2.googlesyndication.com https://ssl.gstatic.com https://www.gstatic.com https://*.clarity.ms https://c.bing.com https://vercel.live https://vercel.com",
      "font-src 'self' data: https://fonts.gstatic.com https://vercel.live https://assets.vercel.com",
      "connect-src 'self' https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://*.googletagmanager.com https://*.g.doubleclick.net https://ad.doubleclick.net https://www.google.com https://www.googleadservices.com https://pagead2.googlesyndication.com https://*.clarity.ms https://c.bing.com https://vercel.live wss://ws-us3.pusher.com",
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
        // HTTPS-only for two years, subdomains included. `preload` is held back on purpose: it is a
        // hard-to-reverse commitment to the browser preload list, and the site is pre-launch.
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
        // Isolate the top-level window from documents it opens. `-allow-popups` keeps any OAuth or
        // third-party popup (and the booking widget) able to talk back to the page that opened it.
        { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
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
