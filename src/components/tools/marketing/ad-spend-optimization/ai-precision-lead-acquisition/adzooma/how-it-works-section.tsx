import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma works by connecting all your paid ad accounts, Google, Meta, and Microsoft, into one dashboard, then
        running continuous audits and serving up prioritized, actionable fixes for wasted spend and underperformance.
        The platform&rsquo;s engine surfaces what is draining your budget, ranks fixes by impact, and lets you apply
        changes directly or with guided steps, so you can shift from spreadsheet wrangling to real-time optimization in
        minutes.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once you connect your ad accounts, Adzooma begins with a full account audit. This process scans every campaign,
        ad group, and creative for common issues: outdated ads, missing tracking, budget pacing errors, and
        low-performing placements. The audit covers all campaign types, Search, Display, Shopping, Performance Max, and
        more, across platforms. It checks for missing extensions, broken tracking pixels, and gaps in targeting. This is
        not a one-off review; the audit refreshes on a schedule that matches your plan, monthly for Free, weekly for
        Silver, and daily for Gold, so you always have up-to-date recommendations.</p>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma&rsquo;s Opportunity Engine is the core of its optimization process. Using AI, it analyzes your
        performance data and flags wasted spend, underperforming ads, and missed opportunities. Each recommendation is
        ranked by impact and ease of implementation. For example, it might suggest pausing ads with low click-through
        rates, raising budgets on high-ROAS campaigns, or fixing conversion tracking on campaigns missing data. Many
        recommendations can be applied directly from the dashboard with a single click; for others, Adzooma provides
        clear, step-by-step instructions for manual changes in the native ad platform.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform&rsquo;s automation layer goes beyond alerts. You can set up custom rules, like pausing ads that
        fall below a set performance threshold or sending an alert if daily spend spikes. Alerts can be delivered by
        email or Slack, and monitoring can run as often as every 15 minutes, depending on your plan (<a id={`tools-marketing-precision-lead-acquisition-adzooma-how-it-works-source-adzooma-com${idSuffix}`} href="https://adzooma.com/product/automated-ppc-alerts/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Adzooma</a>,
        as of Oct 23, 2026). Automated rules help you eliminate tedious manual checks and keep control over what gets
        changed and when. Adzooma&rsquo;s batch actions let you queue up multiple fixes and apply them all at once,
        reducing the time spent on repetitive tasks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Campaign management is streamlined by unifying all accounts into one interface. You can compare performance
        across Google, Meta, and Microsoft, adjust budgets from a single screen, and use cross-platform reports to see
        where your money is working hardest. The dashboard highlights overspend alerts, underutilized budgets, and ad
        fatigue before these issues erode your ROI. This unified view is what lets small teams avoid dashboard fatigue
        and late optimization moves, no more switching between platforms or missing a critical drop in performance on a
        secondary channel.</p>
      <p className="text-base text-white shadow-text pt-3">
        For <GlossaryLink slug="shopping-ads" className="text-[#0B162A] hover:underline">Shopping campaigns</GlossaryLink>,
        Adzooma audits product feed quality, checks for missing attributes, and flags budget gaps or negative keyword
        opportunities. Agencies and multi-account users can manage several Shopping campaigns at once, prioritize fixes
        by impact, and roll out optimizations across multiple accounts in bulk. The system supports daily opportunity
        analysis and real-time health diagnostics, so teams can act on issues before they become expensive problems.</p>
      <p className="text-base text-white shadow-text pt-3">
        <GlossaryLink slug="performance-max" className="text-[#0B162A] hover:underline">Performance Max</GlossaryLink>
        campaigns benefit from Adzooma&rsquo;s automated checks for missing assets, weak budgets, and inefficient
        targeting. The platform&rsquo;s insights help keep your budget aligned with goals, recommend brand exclusions to
        avoid wasted spend, and suggest adjustments to ensure enough data is collected for <GlossaryLink slug="smart-bidding" className="text-[#0B162A] hover:underline">smart
        bidding</GlossaryLink>. Ad frequency and creative fatigue warnings are built in, so you can refresh ads before
        performance drops.</p>
      <p className="text-base text-white shadow-text pt-3">
        All optimization steps are tracked and reported, with client-ready reports available for agencies or teams that
        need to share results. Silver and Gold plans allow custom branding on reports. The audit history shows when
        recommendations were made, what was applied, and what changed as a result, giving full visibility into the
        optimization process and its impact on spend and results.</p>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma&rsquo;s process is not about replacing your ad platforms. You still create campaigns in Google, Meta, or
        Microsoft Ads, but Adzooma sits on top, surfacing what to fix, simplifying management, and automating routine
        work. For a small business in South Florida, this means fewer errors, less time spent on manual checks, and a
        clear path to higher ROI without adding staff or outsourcing to an agency.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="adzoomas-optimization-process" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Adzooma&rsquo;s Optimization Process
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="adzoomas-optimization-process-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Adzooma&rsquo;s Optimization Process
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
