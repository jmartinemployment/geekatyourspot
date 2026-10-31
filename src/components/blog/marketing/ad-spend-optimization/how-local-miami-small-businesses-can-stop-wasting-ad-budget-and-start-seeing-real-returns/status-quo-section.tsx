export default function StatusQuoSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Doing ad spend optimization by hand creates a hidden drain on time, accuracy, and morale for small business
        teams. The work always starts with good intentions, someone logs in every morning, checks the dashboards, and
        pulls data from Google, Meta, and any other active channel. But the problems begin the moment you try to
        connect what you see in each system to what&rsquo;s actually happening in your sales or bank account.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first cost is hours lost to routine checks and manual data entry. Every time your team downloads a report
        or tries to reconcile leads in one spreadsheet with sales in another, it burns time that could go toward sales
        calls, service, or new ideas. The time investment only gets bigger as you add more channels or campaigns.
        Instead of a one-click answer to &ldquo;what&rsquo;s working,&rdquo; you spend hours every week hunting for
        clues, chasing down missing conversions, cross-referencing form fills with phone calls, or comparing two
        platforms&rsquo; version of the same campaign. The cost is not just in hours, but in lost focus and the
        opportunity cost of work not done.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual management also breeds errors. When campaign changes are made by hand, pausing an ad set, shifting
        budget, updating targeting, the risk of mistakes goes up. The operator&rsquo;s own findings show that the most
        common failures are missed spikes in cost-per-click, campaigns left running well past their prime, or budget
        caps forgotten over a weekend. There is no safety net against a sudden cost spike or a broken link in a key ad,
        because nobody is monitoring performance every 15 minutes (<a id={`blog-marketing-precision-lead-acquisition-status-quo-source-cometly-com${idSuffix}`} href="https://www.cometly.com/post/attribution-for-multiple-ad-accounts" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Cometly</a>,
        as of Oct 29, 2026). When the office is closed, a single high-cost anomaly can drain a week&rsquo;s worth of
        budget before anyone notices. The absence of real-time checks means you only catch the problem after the money
        is gone.</p>
      <p className="text-base text-white shadow-text pt-3">
        Delays are just as damaging. In a manual process, decisions happen on a lag, after the fact, not in real time.
        Budgets are reallocated based on reports that are already outdated. By the time your team discovers that a
        campaign has stalled, or that a previously strong ad is now burning through cash, the loss is baked in.
        Attempts to scale up a winning campaign often go too slow, missing the window when performance is at its peak.
        Or worse, drastic manual changes push campaigns back into unstable learning phases, causing platforms&rsquo;
        algorithms to reset and performance to drop even further.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, the real cost lands on the people in the business. Owners and staff bear the stress of never knowing
        if the numbers in the dashboard can be trusted, or whether they&rsquo;re making the right call. The mental load
        grows as the business adds new channels, more creative, and more complex campaigns. Instead of scaling
        smoothly, every new campaign becomes a risk, will this be the one that drains our budget overnight, or the one
        we fail to scale when it&rsquo;s working? The cost is not just in money lost, but in morale, missed
        opportunities, and the constant pressure of knowing that one mistake could undo weeks of hard work. Manual ad
        spend optimization does not just risk inefficiency, it puts the business at risk of falling behind.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-manual-ad-spend-optimization-really-costs-a-small-team" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Manual Ad Spend Optimization Really Costs a Small Team
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
              <h2 id="what-manual-ad-spend-optimization-really-costs-a-small-team-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Manual Ad Spend Optimization Really Costs a Small Team
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
