import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manual lead generation at the $500 to $1,500 monthly ad spend level drains both time and budget for small
        businesses in South Florida. The real cost is not just higher bills, but lost control over your sales
        pipeline and wasted effort that never returns value. Each time you try to scale, your cost per lead jumps,
        and your team hits a wall trying to keep up with creative demands and data management.</p>
      <p className="text-base text-white shadow-text pt-3">
        The scaling trap is the first pain point. When you raise your ad budget to get more leads, ad platforms like
        Meta and Google often react by driving up your cost per lead. The algorithm that once rewarded your efforts
        now works against you. This means that every extra dollar you spend brings in fewer leads than before, and
        your margins shrink instead of growing. For a small business, this is not just an inconvenience, it can mean
        missing revenue targets and falling short on payroll or rent.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative bottlenecks follow close behind. Ad platforms demand a steady stream of new images, copy, and
        layouts to keep performance high. When your team cannot produce enough creative variations quickly, ad
        fatigue sets in. Performance drops, and you find yourself recycling old ads that no longer work. The cost
        here is twofold: you pay for <GlossaryLink slug="impressions">impressions</GlossaryLink> that do not
        convert, and you lose momentum in building your pipeline. This is not a small problem. It leads to wasted
        hours spent on design and copywriting, often with little to show for it.</p>
      <p className="text-base text-white shadow-text pt-3">
        Scripting blind spots are another source of hidden cost. Most small businesses do not have a data scientist
        or technical marketer on staff who can write custom <GlossaryLink slug="automation-scripts">automation
        scripts</GlossaryLink>. This means you cannot easily defend your bids against sudden price spikes from
        competitors, or quickly pause ads when a <GlossaryLink slug="landing-page">landing page</GlossaryLink> goes
        down. Every time a technical issue goes undetected, you spend money with no return, and sometimes damage
        your reputation with broken user experiences.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data fragmentation is a slow bleed on your budget. When customer data is trapped in spreadsheets or
        disconnected CRMs, you end up showing the same introductory ads to people who have already bought from you,
        or to leads who have already said no. This is pure waste. Every dollar spent on these irrelevant impressions
        is a dollar that could have gone to a new, high-intent prospect. The longer you let data silos persist, the
        more your campaigns become untargeted and inefficient.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual management creates a chain reaction of inefficiency. You might bid the same amount for a cold
        prospect as you do for someone who has visited your pricing page twice. This flattens your funnel and burns
        through your ad budget. Overlapping <GlossaryLink slug="custom-audience">custom audiences</GlossaryLink> can
        cause your ads to compete against each other in the <GlossaryLink slug="ad-auction">auction</GlossaryLink>,
        driving up your own costs. Without automation, you cannot easily exclude past buyers from top-of-funnel ads,
        so you end up paying to re-acquire customers you already have.</p>
      <p className="text-base text-white shadow-text pt-3">
        The cost of keeping unprofitable demographic groups active is another drain. Analyzing audience
        intersections manually takes time most small teams do not have. As a result, you keep spending on segments
        that never convert, while missing opportunities to double down on what works. Relying on broad platform
        matching options wastes your budget on out-of-market <GlossaryLink slug="ad-placement">placements</GlossaryLink>,
        because you cannot fine-tune your targeting without more sophisticated tools.</p>
      <p className="text-base text-white shadow-text pt-3">
        Each of these failures is expensive in its own right, but together they create a system that is
        unsustainable at scale. You spend more, get less, and burn out your team in the process. The opportunity
        cost is high: lost sales, missed growth targets, and a constant struggle to keep up with competitors who
        have already automated these processes. For small businesses in Miami-Dade, Broward, and West Palm Beach,
        the real price of manual lead generation is falling behind while your costs spiral out of control.</p>
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
            <div className="col-span-12">{body}</div>
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
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
