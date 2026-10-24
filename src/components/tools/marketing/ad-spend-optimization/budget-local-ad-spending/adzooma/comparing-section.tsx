export default function ComparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma sits between expensive agency services and manual ad management, offering automation and oversight
        that neither can match for small-budget teams. Unlike agencies that charge fees larger than most South
        Florida micro-businesses spend on ads, Adzooma delivers continuous, cross-platform monitoring and one-click
        fixes without adding headcount or inflating costs.</p>
      <p className="text-base text-white shadow-text pt-3">
        The traditional agency model is out of reach for most businesses spending under $500 a month on digital ads
        (<a id={`tools-marketing-budget-ad-copy-message-validation-adzooma-comparing-source-adzooma-com${idSuffix}`} href="https://adzooma.com/budgeting-paid-ads/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Adzooma</a>,
        as of Oct 23, 2026). Even a basic retainer often exceeds the entire ad budget, forcing teams to manage
        campaigns in-house. Manual management means logging into Google, Meta, and Microsoft Ads separately,
        tracking budgets in spreadsheets, and trying to spot issues before they burn through a week’s spend. This
        approach is not just slow; it is risky. One missed alert, and a campaign can waste most of the month’s
        budget on clicks that never convert.</p>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma’s core difference is its unified dashboard and automation engine. Where agencies batch their
        optimizations and manual teams rely on after-the-fact reporting, Adzooma scans every connected account in
        real time. It flags overspending, outdated ad copy, and underperforming placements as soon as they occur.
        This is not just a reporting tool, it is a system that tells you what to fix, ranks the urgency, and lets
        you act without switching tabs or waiting for a monthly check-in.</p>
      <p className="text-base text-white shadow-text pt-3">
        Compared to competing AI and automation platforms, Adzooma stands out for a few reasons. First, it supports
        unlimited ad accounts across Google, Meta, and Microsoft on all plans. That means a small business running
        local campaigns can see every channel at once, without paying for extra seats or hitting account limits.
        Second, Adzooma’s automation is built for practical, day-to-day fixes. It does not just surface data; it
        recommends and, where possible, applies optimizations directly from the dashboard. For example, if a
        campaign’s frequency is too high and causing ad fatigue, Adzooma will warn you and let you pause or adjust
        the ad with a click.</p>
      <p className="text-base text-white shadow-text pt-3">
        Other platforms may offer similar features in isolation, like automated alerts, budget pacing, or
        cross-platform reporting, but Adzooma brings them together in one workflow. Its Opportunity Engine analyzes
        every account for budget pacing errors, disapprovals, missing extensions, and wasted spend, then prioritizes
        fixes by impact and ease. This is especially valuable for small teams that cannot afford to miss a day’s
        oversight or tie up staff with repetitive checks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma’s automation rules and alerting are also more flexible than most alternatives. You can set up custom
        rules to monitor specific metrics, like spend thresholds or sudden drops in impressions, and get notified by
        email or Slack as soon as something changes. For businesses in Miami-Dade, Broward, and West Palm Beach,
        where teams are often stretched thin, this means you are not relying on someone remembering to check every
        account daily. The system does it for you, flagging issues before they cost you real dollars.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual approaches and spreadsheets fall short on three fronts: speed, accuracy, and coverage. Adzooma’s
        real-time health diagnostics and daily opportunity analysis close those gaps. Instead of reviewing
        disconnected spreadsheets once a month and making late adjustments, you see problems and act on them as they
        happen. That is the difference between catching a budget leak in minutes versus after a week of wasted
        spend.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, Adzooma’s pricing model is more accessible than most competing platforms. There is a Free plan with
        monthly data refreshes, a Silver plan with weekly updates, and a Gold plan with daily optimizations. All
        plans allow unlimited ad accounts, so a growing business does not have to switch tools or pay more just to
        add a new campaign or channel. This makes it possible for even the smallest teams to run multi-platform ads
        with the same control and insight as much larger organizations.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, Adzooma replaces the scattered, error-prone manual process and the unaffordable agency
        relationship with a single, always-on automation layer. It is not just another reporting tool or a set of
        disconnected scripts. For small businesses in South Florida, it is the practical answer to the real risks
        and costs of budget ad copy and message validation in a multi-channel world.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-adzooma-compares-to-agency-manual-and-competing-ai-approaches" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Adzooma Compares to Agency, Manual, and Competing AI Approaches
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
              <h2 id="how-adzooma-compares-to-agency-manual-and-competing-ai-approaches-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Adzooma Compares to Agency, Manual, and Competing AI Approaches
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
