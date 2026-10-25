import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Madgicx is built as a cloud platform that connects directly to your ad accounts, CRM systems, and key data
        sources. Its architecture is designed for real-time data ingestion, cross-channel analytics, and continuous
        automation, all without requiring deep technical setup from a small business team. What makes Madgicx
        distinct is how it brings together campaign management, creative generation, and audience targeting in one
        environment, while keeping your data unified and actionable.</p>
      <p className="text-base text-white shadow-text pt-3">
        At its core, Madgicx acts as a control layer over your ad platforms. It uses secure API connections to Meta
        (Facebook and Instagram), Google Ads, TikTok, and Shopify, among others. These integrations are not just for
        pulling performance metrics, they allow Madgicx to launch, pause, and adjust campaigns automatically based
        on live results. For example, the platform can take a winning post from your organic feed and turn it into a
        paid ad, or instantly pause a campaign if costs spike above your set threshold.</p>
      <p className="text-base text-white shadow-text pt-3">
        Madgicx’s data structure is built for segmentation and attribution. It holds detailed records of every
        campaign, ad set, <GlossaryLink slug="creative-assets" className="text-[#0B162A] hover:underline">creative
        asset</GlossaryLink>, audience segment, and conversion event. This data is not siloed: Madgicx unifies it
        into a single dashboard, allowing you to see the impact of each variable across the entire funnel. The
        platform includes built-in integrations for Google Sheets, so you can create custom metrics and feed in
        offline or spreadsheet-based data, critical for businesses whose lead tracking lives outside the ad
        platforms.</p>
      <p className="text-base text-white shadow-text pt-3">
        Audience management is a central feature. Madgicx stores over 100 pre-set audience templates, including
        AI-generated lookalikes and custom segments (<a id={`tools-marketing-measured-lead-generation-madgicx-architecture-source-madgicx-com${idSuffix}`} href="https://madgicx.com/blog/how-to-scale-facebook-ads" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Madgicx</a>,
        as of Oct 24, 2026). These templates cover every funnel stage, from broad prospecting to precise retargeting
        and customer retention. The platform’s Audience Studio analyzes your account’s history, ranks interests by
        profitability, and predicts which targeting options are likely to perform best. As campaigns run, Madgicx
        continuously updates these segments based on conversion data and engagement signals, so your targeting stays
        accurate even as your market shifts.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative assets are managed through the AI Ad Generator and Creative Insights modules. Madgicx stores every
        image, video, and copy variant it produces, linking each to its performance data. This means you can track
        which elements drive the best results for which audience, and the system can automatically recombine
        top-performing headlines, visuals, and <GlossaryLink slug="call-to-action" className="text-[#0B162A] hover:underline">calls
        to action</GlossaryLink> for new campaigns. The platform’s creative rotation engine ensures that no single
        ad variation is overexposed, reducing fatigue and keeping results steady.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget and bid management are handled by Madgicx’s Autonomous Budget Optimizer, which operates 24/7. This
        tool tracks all spend in real time, reallocates funds between campaigns and ad sets, and applies bid caps,
        cost caps, and value optimization logic. It does not just spend to the limit, it analyzes which segments are
        delivering the highest return and shifts budget accordingly. Every adjustment is logged, and you can review
        the rationale behind each move in the reporting dashboard.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting and analytics are unified through the One-Click Report dashboard. Madgicx combines campaign data
        from every connected platform, showing you real-time results across Meta, Google, TikTok, Shopify, Klaviyo,
        and more. This cross-channel view is critical for small businesses running multi-platform campaigns, as it
        eliminates the need to stitch together reports from different sources. The dashboard also supports
        benchmarking, so you can compare performance across time periods or client accounts if you manage multiple
        brands.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the security and privacy side, Madgicx deploys server-side tracking and requires OAuth 2.0 authentication
        for all platform connections. This means your data stays protected, and every integration is verified before
        any automation is enabled. The system also supports CRM integration, feeding long-journey conversion signals
        (such as sales from a pipeline) back into the ad optimization engine. This is especially important for B2B
        or high-value consumer sales, where the path from lead to revenue is not immediate.</p>
      <p className="text-base text-white shadow-text pt-3">
        Madgicx does not store your customer data in a black box. Instead, it acts as a processing and decision
        layer, holding only what is needed for optimization and reporting. You retain control over your ad accounts
        and data sources at all times. The platform’s architecture is designed for transparency: every automation,
        budget shift, and creative rotation is visible and auditable, so you know exactly how your campaigns are
        being run and why each decision was made.</p>
      <p className="text-base text-white shadow-text pt-3">
        For South Florida small businesses, this architecture means you get enterprise-level automation and
        analytics without the complexity or risk of losing control. Madgicx plugs into the systems you already use,
        unifies your marketing data, and automates the heavy lifting, so you can focus on strategy and growth, not
        on chasing down reports or fixing broken campaigns.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="madgicxs-platform-architecture" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Madgicx’s platform architecture
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="madgicxs-platform-architecture-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Madgicx’s platform architecture
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
