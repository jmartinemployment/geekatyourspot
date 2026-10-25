import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function NumbersSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Measured Lead Generation delivers real gains in <GlossaryLink slug="lead-quality">lead quality</GlossaryLink>,
        ad spend efficiency, and pipeline stability for small businesses in Miami-Dade, Broward, and Palm Beach, but
        not every promise is proven or permanent. The strongest evidence is around cost savings, time reclaimed from
        manual work, and the ability to keep cost-per-lead stable as budgets rise, but there are limits: not every
        metric moves for every business, and results depend on data quality and execution.</p>
      <p className="text-base text-white shadow-text pt-3">
        The clearest result is the sharp reduction in wasted spend and manual errors. Tools like Performance Max and
        Optmyzr automate the most error-prone points, pausing failing ads, shifting budgets out of low-intent
        placements, and shielding your account from competitor bid spikes or broken pages. Evidence from Performance
        Max shows that moving budget between search feeds, maps, and social networks in real time, rather than
        setting rigid daily spends, keeps campaigns from overspending when local demand shifts. Over a month, this
        alone can be the difference between a campaign that caps out at ten solid leads and one that keeps filling
        your pipeline.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wrench’s data-backed segmentation and exclusion routines are proven to keep spend focused on
        high-probability prospects, not just any available audience. When Wrench syncs with your CRM and
        standardizes contact data, you actually see the effects: cold leads and previous buyers are excluded from
        fresh acquisition campaigns, and new buyers are automatically fed into upsell routines only when the data
        shows they’re ready. This process addresses the common pain of burning budget on audiences that are already
        closed or non-responsive, closing a loop that manual filters miss.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the creative side, Marpipe and Madgicx both attack the persistent bottleneck of keeping your ad
        variations fresh and fatigue-free. Marpipe’s instant generation of hundreds of creative variants from a
        single upload eliminates the old wait for a designer or media buyer to hand-build every test. Madgicx,
        meanwhile, maps out your funnel structure so each audience tier, new prospects, warm leads, past buyers,
        gets the right message and bid, rather than one-size-fits-all. This structure is what keeps cost-per-lead
        from spiking when you scale spend, breaking the classic cycle where every budget increase brings diminishing
        returns.</p>
      <p className="text-base text-white shadow-text pt-3">
        But the outcomes are not magic, and the evidence does not guarantee every metric will improve for every
        business. For example, campaign total budgets and automated audience segmentation keep spend from spiraling,
        but the actual number of <GlossaryLink slug="qualified-lead">qualified leads</GlossaryLink> depends on the
        quality of your original data and your local market’s demand. The research is clear that when data is
        incomplete or poorly maintained, even the best automation cannot fill the gap. No tool can create demand
        where there is none, nor can it guarantee that every lead will convert if your service offer or follow-up is
        weak.</p>
      <p className="text-base text-white shadow-text pt-3">
        The evidence also does not promise permanent results if you “set and forget” your system. Automation can
        prevent waste and free up your team, but it still relies on regular data audits (as Wrench and Optmyzr
        facilitate) and campaign reviews to catch shifts in the market or changes in buyer behavior. Without ongoing
        oversight, even the most finely tuned rules can drift, and the savings of month one can erode by month six.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, the research does not support the idea that Measured Lead Generation is a one-size-fits-all fix.
        The tools deliver the best outcomes when they fit the specifics of your region, your business model, and the
        state of your CRM. For a business still relying on static spreadsheets, the gains from moving to automated
        data sync and segmentation are dramatic. For a team already running a well-maintained CRM and disciplined
        follow-up, the improvements may be real but incremental. The bottom line: measured lead generation pays off
        where you have bottlenecks in budget allocation, creative refresh, or audience targeting, but results vary
        with the quality of your inputs and how tightly the tools are integrated with your workflow.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-the-evidence-shows-about-measured-outcomes-and-what-it-does-not" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What the evidence shows about measured outcomes, and what it does not
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-the-evidence-shows-about-measured-outcomes-and-what-it-does-not-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What the evidence shows about measured outcomes, and what it does not
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
