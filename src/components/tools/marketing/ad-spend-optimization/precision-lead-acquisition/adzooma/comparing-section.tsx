import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma stands out for small businesses that want to manage Google, Meta, and Microsoft ad spend from one place,
        with real-time opportunity detection and automated fixes. It is not a generic reporting dashboard or a black-box
        automation tool; it is built for hands-on control, actionable recommendations, and speed, without requiring a
        marketing team or agency retainer.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most small businesses in South Florida are weighing three main options for ad spend optimization: manual
        management across platform dashboards, hiring an outside agency, or adopting a SaaS platform like Adzooma. Each
        approach has its own tradeoffs, but the evidence from Adzooma&rsquo;s own pages shows where it fits and where it
        does not.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual management remains the default for many teams, but it comes at a cost. Juggling Google, Meta, and
        Microsoft Ads in their native dashboards means hours lost to switching contexts, reconciling data, and tracking
        down errors that surface only after budget is wasted. Adzooma&rsquo;s own data points to this as dashboard
        fatigue, too many screens, too little clarity, and a constant risk of missing spend leaks or optimization
        opportunities. By contrast, Adzooma connects all accounts into a single dashboard, runs continuous audits, and
        flags wasted spend, underperforming ads, and pacing issues before they become expensive problems.</p>
      <p className="text-base text-white shadow-text pt-3">
        Agency management promises expertise but introduces new problems for small businesses. Agencies often batch work
        across many clients, which means your account may only get reviewed weekly or monthly. Only 10% of advertisers,
        according to Adzooma&rsquo;s own research, do optimization work in their accounts every week (<a id={`tools-marketing-precision-lead-acquisition-adzooma-comparing-source-adzooma-com${idSuffix}`} href="https://adzooma.com/great-google-ads-manager/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Adzooma</a>,
        as of Oct 23, 2026). For a small business, this delay means errors or wasted spend can persist for weeks before
        anyone acts. Adzooma&rsquo;s platform, by contrast, surfaces and ranks optimization opportunities daily, and
        many fixes can be actioned directly in the dashboard, putting control back in the hands of the business owner or
        in-house marketer.</p>
      <p className="text-base text-white shadow-text pt-3">
        Compared to other SaaS platforms in this space, Adzooma is positioned as a specialist in cross-platform ad spend
        optimization for small businesses and agencies. It supports unlimited ad accounts on all plans, offers daily
        opportunity analysis on paid tiers, and provides prioritized action recommendations, features that many
        competitors gate behind higher spend tiers or enterprise contracts. Adzooma&rsquo;s automation is focused on
        surfacing actionable fixes, not just reporting issues. It is not a passive analytics tool; it is designed for
        real intervention: pausing underperforming ads, suggesting <GlossaryLink slug="negative-keywords" className="text-[#0B162A] hover:underline">negative
        keywords</GlossaryLink>, and flagging budget pacing problems before they cost you.</p>
      <p className="text-base text-white shadow-text pt-3">
        A key difference in Adzooma&rsquo;s approach is the way it handles automation. The platform&rsquo;s Opportunity
        Engine uses AI to analyze account data and suggest improvements tailored to your actual campaigns, not generic
        best practices. You decide which actions to apply, so you retain control over every change. Batch actions make
        it possible to apply all recommended fixes in one go, and custom automation rules let you set thresholds for
        alerts or automatic pausing, critical for teams that cannot monitor accounts full-time.</p>
      <p className="text-base text-white shadow-text pt-3">
        Where some tools focus only on Google Ads or only on Meta, Adzooma brings parity to Google, Meta, and Microsoft
        Ads, integrating them into one workflow. This cross-platform approach is vital for small businesses running
        campaigns in multiple channels, as it eliminates the risk of dead budgets and missed optimization moves in
        less-used accounts. Adzooma also supports Shopping and <GlossaryLink slug="performance-max" className="text-[#0B162A] hover:underline">Performance
        Max</GlossaryLink> campaigns, with product feed quality checks and recommendations that can be actioned in-app or
        with step-by-step guidance for Google and Microsoft Ads.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting and audit capabilities are another area where Adzooma distinguishes itself. Every account connected to
        Adzooma receives a full audit in under five minutes, with a detailed score and prioritized list of fixes. On the
        Free plan, audits refresh monthly, while Silver and Gold plans offer weekly and daily updates respectively.
        These audits go beyond surface-level metrics, highlighting broken tracking, missing conversion data, disapproved
        ads, and gaps in targeting or campaign coverage. White-label reporting is available on Silver and Gold, so
        agencies can brand audit results for clients.</p>
      <p className="text-base text-white shadow-text pt-3">
        For <GlossaryLink slug="predictive-analytics" className="text-[#0B162A] hover:underline">predictive
        analytics</GlossaryLink> and future-focused optimization, Adzooma does not claim to replace the advanced modeling
        of enterprise tools like Adobe Mix Modeler or Optimove, which are also profiled elsewhere on this site. Instead,
        it delivers practical, real-time analysis and actionable recommendations that any small team can use without a
        data science background. Its AI is focused on surfacing opportunities, reducing wasted spend, and guiding budget
        reallocation, not on building custom predictive models or running multi-channel attribution analysis.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, Adzooma is the right fit for small businesses in South Florida that need to control ad spend across
        Google, Meta, and Microsoft Ads without losing hours to manual checks or relying on slow agency cycles. It is
        stronger than manual management for speed and error prevention, more hands-on than agency outsourcing, and more
        actionable than pure reporting dashboards. Its value comes from surfacing and ranking the fixes that matter
        most, letting small teams act fast and keep spend focused on what works.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-adzooma-compares-to-other-ad-spend-optimization-tools-and-approaches" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Adzooma Compares to Other Ad Spend Optimization Tools and Approaches
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-adzooma-compares-to-other-ad-spend-optimization-tools-and-approaches-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Adzooma Compares to Other Ad Spend Optimization Tools and Approaches
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
