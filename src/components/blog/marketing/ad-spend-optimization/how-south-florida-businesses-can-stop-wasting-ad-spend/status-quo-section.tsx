import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function StatusQuoSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manual lead generation drains time, money, and focus from local teams at every step. The first cost is
        invisible: hours lost on repetitive, low-value tasks that no one tracks but everyone feels. When your team
        manages keywords, <GlossaryLink slug="ad-placement" className="text-[#0B162A] hover:underline">ad placements</GlossaryLink>,
        and budgets by hand, every adjustment is slow and every mistake is expensive. You set fixed daily spends for
        Meta, only to miss a spike in Google searches that day. Your ads keep running to the wrong neighborhoods,
        wasting budget on people who will never buy.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next cost is in creative. If you rely on the same images and copy for weeks, ad fatigue sets in. Your
        best prospects stop noticing you, and your <GlossaryLink slug="click-through-rate" className="text-[#0B162A] hover:underline">click-through
        rates</GlossaryLink> drop. But generating new creative takes hours you do not have, so low-performing ads
        stay live, and your cost per lead rises without warning. If no one checks the dashboard over the weekend,
        failing ads burn through your budget until Monday. These leaks are not small; they add up to real dollars
        lost month after month.</p>
      <p className="text-base text-white shadow-text pt-3">
        The technical overhead is relentless. Without scripts or automation, your team must update micro-bids by
        hand, risking resets that kill platform learning and halt delivery. When a competitor outbids you, you may
        not even notice until you drop off the first page of search results, by then, the opportunity is gone. If a
        landing page breaks, there is no one watching to pause the ads. Each failure means budget spent on clicks
        that never had a chance of converting.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data is often the silent killer. Customer information sits locked in static spreadsheets or a CRM that does
        not talk to your ad accounts. Uploading contact lists by hand brings formatting errors that digital networks
        cannot match, so your <GlossaryLink slug="retargeting" className="text-[#0B162A] hover:underline">retargeting</GlossaryLink> misses
        the mark. You serve broad, top-funnel ads to both new prospects and loyal buyers, burning cash on people who
        need different messages, or do not need to see your ad at all. Past buyers keep seeing introduction offers,
        while potential high-value leads are lumped in with everyone else.</p>
      <p className="text-base text-white shadow-text pt-3">
        Worst of all, each manual process introduces delay. You catch a trend or a problem only after it has cost
        you, never before. By the time you segment your database or update a <GlossaryLink slug="negative-keywords" className="text-[#0B162A] hover:underline">negative
        keyword</GlossaryLink> list, your budget has already paid for the mistake. Small teams absorb these costs in
        late nights, lost weekends, and constant firefighting. The business pays in missed targets, unreliable
        pipelines, and a sense that you are always catching up but never getting ahead.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is why the true cost of manual lead generation is not the ad spend you see on a statement. It is the
        wasted labor, the money lost to preventable errors, and the slow response to every shift in the market.
        Until these bottlenecks are removed, every new dollar you spend is a risk, and every hour you spend on
        manual fixes is an hour your competitors spend winning new business.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-manual-lead-generation-really-costs" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What manual lead generation really costs
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-manual-lead-generation-really-costs-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What manual lead generation really costs
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
