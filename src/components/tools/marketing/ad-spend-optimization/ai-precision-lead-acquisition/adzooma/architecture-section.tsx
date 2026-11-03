import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma is built as a cross-platform management hub that connects directly to Google Ads, Meta Ads, and
        Microsoft Advertising accounts, pulling live data for unified analysis and action. Its architecture is designed
        for small businesses and agencies that need to manage multiple accounts and channels without the overhead of
        switching between native dashboards or exporting spreadsheets for manual review.</p>
      <p className="text-base text-white shadow-text pt-3">
        At its core, Adzooma acts as a data aggregator and decision engine. When you connect your ad accounts, the
        platform establishes secure data connections and begins ingesting campaign, ad group, creative, and spend data
        in real time. This live data powers the platform&rsquo;s diagnostics, opportunity analysis, and alerting
        systems. The frequency of data refresh, monthly, weekly, or daily, depends on your subscription tier, ensuring
        that optimization opportunities are based on the latest performance, not stale reports.</p>
      <p className="text-base text-white shadow-text pt-3">
        The dashboard is the main control panel. It pulls data from all connected ad accounts and presents a unified
        view, letting you monitor spend, performance, and issues across every channel. You can drill down to see which
        campaigns are wasting budget, which ads are underperforming, and where tracking or targeting gaps exist.
        Adzooma&rsquo;s interface is built for clarity, with prioritized alerts and recommendations surfaced at the top
        so small teams can act fast.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation is a key part of the architecture. Adzooma supports custom rules and automated alerts that monitor
        for specific performance thresholds, budget pacing issues, or <GlossaryLink slug="ad-fatigue" className="text-[#0B162A] hover:underline">ad
        fatigue</GlossaryLink>. These rules can be configured to run on the schedule that fits your business, up to
        every 15 minutes on higher-tier plans (<a id={`tools-marketing-precision-lead-acquisition-adzooma-architecture-source-adzooma-com${idSuffix}`} href="https://adzooma.com/product/automated-ppc-alerts/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Adzooma</a>,
        as of Oct 23, 2026). Alerts are delivered by email or Slack, and you can choose the timezone for notification
        delivery, making it easy to align monitoring with your business hours and reporting cycles.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform does not make changes automatically unless you approve them. Automated alerts and opportunity
        recommendations are surfaced for your review, and you decide which to apply and when. This design keeps you in
        control of budget and strategy, avoiding the risk of automated changes that do not fit your business goals.
        Batch actions and queue features let you line up multiple fixes and apply them all at once, reducing the manual
        load while still keeping oversight.</p>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma&rsquo;s architecture supports unlimited ad accounts on all plans, so you can manage multiple brands,
        locations, or clients from one login. This is especially useful for agencies or businesses running several
        campaigns at once. <GlossaryLink slug="shopping-ads" className="text-[#0B162A] hover:underline">Shopping
        campaign</GlossaryLink> support includes product feed analysis, missing attribute detection, and recommendations
        for negative keywords or budget adjustments, all available from the same dashboard.</p>
      <p className="text-base text-white shadow-text pt-3">
        For reporting, Adzooma generates client-ready, white-label audit reports that summarize account health,
        highlight issues, and show the impact of applied fixes. These reports can be customized with your branding on
        Silver and Gold plans. The system maintains an alert history and audit trail, so you can always see what was
        flagged, when action was taken, and what changed in your campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and privacy are built into the data flow. Adzooma only uses your account information for analysis and
        optimization, never sharing it outside the platform. Direct connections to ad platforms mean there is no need to
        upload spreadsheets or manually sync data, reducing the risk of errors or data leaks.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform&rsquo;s architecture is designed to scale with your needs. Whether you are managing a handful of
        campaigns or dozens, Adzooma&rsquo;s infrastructure handles the load, keeping performance fast and
        recommendations relevant. All optimization logic is kept within the platform, so your campaigns remain under
        your control, and you can see the effect of every change in real time across Google, Meta, and Microsoft Ads.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="adzoomas-platform-architecture" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Adzooma&rsquo;s Platform Architecture
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
              <h2 id="adzoomas-platform-architecture-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Adzooma&rsquo;s Platform Architecture
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
