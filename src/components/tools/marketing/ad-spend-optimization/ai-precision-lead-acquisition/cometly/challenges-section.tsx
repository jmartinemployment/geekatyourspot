import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manual ad spend management drains small teams in South Florida because the numbers in your dashboards are not
        the numbers that matter. When you rely on basic platform dashboards, you end up scaling campaigns that look good
        on paper but do not bring in real revenue. Worse, you cut back on the ads that actually bring you customers,
        simply because the data is incomplete or misleading. This cycle wastes budget, eats up time, and leaves your
        team chasing the wrong targets.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real problem is not just the hours spent watching dashboards or the frustration of reconciling numbers
        between Meta, Google, and your CRM. It is the compounding effect of bad data on every decision you make. Each
        platform claims credit for the same conversion, so you see inflated results and move budget to the wrong places.
        If a campaign&rsquo;s dashboard says it is working, but your bank account tells a different story, you are not
        just wasting dollars, you are building your strategy on fiction.</p>
      <p className="text-base text-white shadow-text pt-3">
        This gets worse with browser privacy changes and ad blockers. Relying on browser-based pixels means you miss
        conversions from phone calls, form fills, and offline sales. Up to a third of your conversions could be
        invisible to your ad platforms, so the algorithms start optimizing for the wrong signals. Instead of finding
        customers, your ads chase lookalikes of phantom conversions. Over time, your <GlossaryLink slug="cost-per-acquisition">cost
        per acquisition</GlossaryLink> creeps up, your team loses confidence in the data, and your competitors, who have
        fixed their tracking, pull ahead.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual adjustments do not fix this. If you are moving budgets around based on delayed or low-confidence numbers,
        you are always reacting to old news. By the time you spot a problem, you have already wasted days or weeks of
        spend. Creative fatigue goes unnoticed over weekends or holidays, so your <GlossaryLink slug="cost-per-lead">cost
        per lead</GlossaryLink> spikes while no one is watching. You end up with a system where no one can say which
        campaigns actually drive revenue, and every budget meeting turns into a guessing game.</p>
      <p className="text-base text-white shadow-text pt-3">
        The cost is not just in wasted ad dollars. It is in missed opportunities to scale what works, lost growth to
        competitors, and the time your team spends trying to make sense of bad data. When your dashboards are built on
        inflated or duplicated conversions, you lose the ability to act with confidence. Instead of investing in proven
        winners, you pause the campaigns that actually bring in customers. The longer this goes on, the harder it is to
        catch up.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cometly breaks this cycle by replacing platform-reported numbers with verified, server-side tracking. Instead of
        trusting what Meta or Google claims, you see the full customer journey from ad click to closed sale. Every
        conversion is tied back to the exact ad, creative, and channel that drove it. This means you stop wasting money
        on campaigns that only look good in a dashboard and start putting budget behind what actually works. The
        guesswork ends, and every dollar starts working harder for your business.</p>
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
              {body()}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
