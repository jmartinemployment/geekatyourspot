import Link from "next/link";

export default function StatusQuoSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The cost of sticking with the old way runs deeper than just wasted money. It shows up as lost time, rising
        error rates, missed opportunities, and a steady drain on both owner focus and team morale. Every manual check,
        every spreadsheet exported, every late-night dashboard session is a symptom of a system that forces people to
        work harder for less clarity. The ones who pay for this, day in and day out, are owners, small teams, and the
        few staff who have to juggle marketing with their real jobs.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual reporting eats up hours every week. Without unified dashboards or automation, a manager might spend
        several hours just gathering numbers from Google, Meta, Microsoft, and TikTok. That does not include the time
        spent reconciling why Google says one thing, Meta another, and the CRM something else entirely. Adzooma and
        Wask both exist to cut this, but most small businesses are still stuck in the export-and-paste cycle, chasing
        basic clarity. Every hour spent on reporting is an hour not spent on strategy, creative, or customer
        service.</p>
      <p className="text-base text-white shadow-text pt-3">
        Errors multiply as the workload grows. When a business relies on browser pixels and spreadsheet exports, things
        slip. Calls and form fills go untracked, duplicate conversions inflate results, and budgets get stuck on the
        wrong ads. The result is not just financial, it is operational pain. Team members get blamed when sales do not
        show up, even though the dashboard said the campaign was a winner. Owners make decisions based on the wrong
        numbers, and marketing teams lose credibility with the rest of the business. Tools like Cometly and Triplewhale
        solve parts of this by tying conversions to verified sales, but without them, every error compounds over
        time.</p>
      <p className="text-base text-white shadow-text pt-3">
        Delays in decision-making waste budget every single day. Ad accounts that run without automated checks can
        bleed money for a week or more before anyone notices. Weekends and holidays are especially risky, when no one
        is watching the dashboards. Bir was built to catch and pause these anomalies in real time, but most teams only
        find out there is a problem after the budget is gone. Every delayed reaction is another day wasted on ads that
        should have been paused, and another missed chance to scale up a winner before the competition does.</p>
      <p className="text-base text-white shadow-text pt-3">
        The workflow gap means that nobody really owns optimization. When there is no structured process for weekly
        review, creative refresh, or budget reallocation, everyone assumes someone else is watching. Weak ads keep
        running, old creative never gets replaced, and budgets stick to the default. Wask and Plai were both designed
        to give owners a repeatable review workflow and actionable insights, but without that, the cost is paid in
        missed performance and staff burnout. No one wants to be the person who let $500 slip away on a dead campaign,
        but in the absence of process, it happens all the time (<a id={`use-cases-marketing-precision-lead-acquisition-status-quo-source-cometly-com${idSuffix}`} href="https://www.cometly.com/post/ad-spend-budget-optimization" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Cometly</a>,
        as of Oct 29, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        Risk is highest for small teams that do not have the resources for a full-time analyst or agency. The owner who
        is also the bookkeeper and the salesperson ends up absorbing the stress, the late nights, and the
        second-guessing. Every time a lead slips through the cracks because the CRM did not catch it, or a campaign
        spends through its cap without review, the business pays in both money and focus. <Link id={`use-cases-marketing-precision-lead-acquisition-status-quo-localiq${idSuffix}`} href="/tools/marketing/ad-spend-optimization/precision-lead-acquisition/localiq" className="text-[#C83803] hover:underline">LocaliQ</Link> and <Link id={`use-cases-marketing-precision-lead-acquisition-status-quo-google-performance-max${idSuffix}`} href="/tools/marketing/ad-spend-optimization/precision-lead-acquisition/google-performance-max" className="text-[#C83803] hover:underline">Performance
        Max</Link> both help reduce this risk by automating tracking, geofencing, and micro-budget pivots, but in the
        status quo, most businesses are exposed.</p>
      <p className="text-base text-white shadow-text pt-3">
        The final cost is opportunity. Every week spent guessing instead of acting is a week where competitors, often
        larger, better-resourced ones, pull ahead. The small business that waits a month to adjust its spend or spot a
        creative fatigue spike is funding the learning curve for the next guy in line. Automation tools like Optmyzr
        and Adzooma are designed to close this gap, but until a business adopts them, the cost is paid in missed
        growth. Over time, the status quo does not just waste money, it holds back the entire business. In the end, the
        only ones who win are the platforms collecting the spend.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-the-status-quo-costs" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What the Status Quo Costs
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-the-status-quo-costs-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What the Status Quo Costs
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
