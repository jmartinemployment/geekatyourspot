import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manual budget ad copy and message validation drains small teams in South Florida of both time and money.
        Every day spent juggling separate dashboards for Google, Meta, and Microsoft Ads is a day lost to repetitive
        checks, missed alerts, and the risk of costly mistakes. The reality for small businesses working with
        micro-budgets, often just $10 to $16 a day, is that one wrong setting or an outdated ad can wipe out a
        week&apos;s worth of spend before anyone notices.</p>
      <p className="text-base text-white shadow-text pt-3">
        The problem starts with scattered logins and disconnected spreadsheets. When each platform requires its own
        review, it is easy to forget to check a secondary channel like Microsoft Ads. This oversight can leave
        budgets running unchecked, wasting money on ads that no longer match your current offers or service areas.
        The cost is not just in wasted spend, but in the hours spent each week tracking down which campaigns are
        active, which ones are over budget, and which need urgent changes.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business owner or a lean marketing team, the stakes are higher than for a large agency. You
        cannot afford the luxury of a dedicated digital ad manager, and agency retainers often cost more than your
        actual ad spend. That means you are left to manage everything yourself, copy updates, budget pacing,
        audience targeting, and performance checks. When you are stretched thin, errors slip through. An ad left
        running with an expired promotion can burn through your budget overnight. A missed alert about a disapproved
        ad or a broken tracking pixel means you are paying for traffic with no way to measure results.</p>
      <p className="text-base text-white shadow-text pt-3">
        Platforms like Google and Meta are not on your side. Their default settings are designed to maximize their
        own revenue, not yours. Left unchecked, your ads are served to broad, low-intent audiences, out-of-area
        prospects, or even to accidental clicks. For a business spending under $500 a month, a single day of
        unoptimized <GlossaryLink slug="broad-match">broad-match</GlossaryLink> keywords or out-of-boundary
        impressions can mean the difference between a profitable campaign and a wasted budget (<a id={`tools-marketing-budget-ad-copy-message-validation-adzooma-challenges-source-adzooma-com${idSuffix}`} href="https://adzooma.com/budgeting-paid-ads/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Adzooma</a>,
        as of Oct 23, 2026). There is no safety net, every dollar counts, and every error is magnified.</p>
      <p className="text-base text-white shadow-text pt-3">
        The manual approach also creates dashboard fatigue. With each platform requiring its own login, its own set
        of rules, and its own reporting format, the process quickly becomes unmanageable. Small teams find
        themselves reviewing cross-channel ad data once a month, often too late to catch issues before they
        snowball. By the time a problem is spotted in a spreadsheet, the budget has already been spent and the
        opportunity to fix it has passed.</p>
      <p className="text-base text-white shadow-text pt-3">
        Even when you try to stay on top of things, the constant need to monitor multiple accounts eats into time
        that could be spent on strategy, customer service, or sales. Instead of focusing on growing your business,
        you are stuck in a loop of logging in, checking reports, and reacting to problems after they have already
        cost you money. The result is a system that is reactive, error-prone, and fundamentally unsuited to the
        needs of small businesses with tight budgets and no room for error.</p>
      <p className="text-base text-white shadow-text pt-3">
        The cost of manual budget ad copy and message validation is not just financial. It is the opportunity cost
        of time lost to low-value tasks, the stress of knowing that one missed setting can derail your entire
        campaign, and the frustration of watching your budget disappear with little to show for it. For small
        businesses in Miami-Dade, Broward, and West Palm Beach, the current way of working is not just inefficient,
        it is unsustainable.</p>
      <p className="text-base text-white shadow-text pt-3">
        When a team is forced to review performance data across disconnected spreadsheets, optimization moves come
        too late. Campaigns continue to spend on dead search terms, outdated pricing, or promotions that have
        already ended. Without real-time oversight, even the most careful planning cannot prevent budget from
        leaking out through the cracks. The risk is highest for those with the least margin for error: small
        businesses who need every ad dollar to deliver. In this environment, the cost of doing nothing is not just a
        missed opportunity, it is a direct hit to your bottom line.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
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
