export default function KeyFactorsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Most small business ad automation stalls because it tries to bolt generic tools onto noisy data, ignores
        local realities, or leaves the process half-built, leading to budget leaks, missed leads, and wasted hours.
        The only way it holds up is if every phase of the implementation is tied back to a specific business goal,
        the data feeding the system is clean, and each tool is configured for local needs and constraints. When a
        system falls apart, it is rarely because the technology itself failed. It is almost always a breakdown in
        one of these three areas.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first point of failure is skipping the business alignment step. When small business owners rush straight
        into deploying automation without mapping exactly what outcome they need, be it more phone calls, booked
        appointments, or in-store visits, the system cannot optimize for anything but surface-level clicks or
        impressions. The result is a dashboard full of activity, but little to show for it in real sales. The
        approach that holds up always starts by tying every automation rule and optimization to one real business
        KPI, so the system knows what “winning” looks like from day one.</p>
      <p className="text-base text-white shadow-text pt-3">
        The second breakdown comes from poor data quality. If the system is fed inconsistent, incomplete, or
        duplicate data, every automated decision it makes is suspect. LocaliQ and Adzooma both show the risk
        clearly: if lead forms, call tracking, or campaign tracking are not unified and validated, you end up with
        split records and attribution gaps. This means you cannot tell which ad, keyword, or campaign is actually
        delivering results. To keep automation working over time, Geek @ Your Spot sets up automated data validation
        checks using proven tools, so that every lead, call, and sale is tracked from first click to closed deal,
        with errors caught and fixed before they cause budget waste.</p>
      <p className="text-base text-white shadow-text pt-3">
        The third reason automation fails is tool overload and poor configuration. Many small businesses jump from
        tool to tool, layering a generic copywriter add-on here, a bidding script there, and a dashboard somewhere
        else, without ever integrating them into a single workflow. This leads to gaps, overlap, and eventual
        confusion. The solution is to use only the automation that fits the business’s own workflow, and to
        configure each tool, Google Performance Max for shifting micro-budgets between local ad platforms, Anyword
        for scoring and pre-validating ad copy, AdCreative for on-brand graphics, Plai for dashboard clarity, so
        that each one fills a real need and does not fight the others for control.</p>
      <p className="text-base text-white shadow-text pt-3">
        A working implementation also keeps ongoing oversight and feedback loops in place. The best systems are not
        set-and-forget: they monitor for changes in local search volume, ad fatigue, or out-of-area clicks, and
        update rules or creative before the problem drains your spend. AdCreative’s automated creative refresh and
        Adzooma’s real-time alerts are built exactly for this. Plai’s dashboards give owners an instant view of
        which days or channels are producing value and which are not, so adjustments happen proactively, not after
        the budget is gone. LocaliQ’s unified reporting ensures that every new lead is captured and followed up,
        closing the loop from ad to sale.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Tie every automation step to a clear business outcome, never automate for automation’s sake.</li>
        <li>Validate and unify all lead, call, and tracking data before connecting automation tools.</li>
        <li>Pick and configure only the tools that fit your business and local market, avoid tool sprawl.</li>
        <li>Set up ongoing feedback loops and alerts to catch new problems early and adjust in real time.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        An implementation that holds up is not about chasing the latest AI feature or buying the biggest dashboard.
        It is about building a system that works for your business, your local audience, and your real budget, then
        maintaining the data, goals, and oversight needed to keep it running at full strength, month after month.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-most-small-business-ad-automation-stalls-and-what-actually-keeps-it-working" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Most Small Business Ad Automation Stalls and What Actually Keeps It Working
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-most-small-business-ad-automation-stalls-and-what-actually-keeps-it-working-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Most Small Business Ad Automation Stalls and What Actually Keeps It Working
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
