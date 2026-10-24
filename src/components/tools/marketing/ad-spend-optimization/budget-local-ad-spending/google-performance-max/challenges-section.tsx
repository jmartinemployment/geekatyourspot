import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manual ad copy and message validation on a small budget is a losing game for local businesses. The real cost
        is not just wasted dollars, but wasted time, missed leads, and constant stress. Every day spent manually
        adjusting bids or testing messages by hand is a day where most of your $10 to $16 ad budget disappears
        before you see a single real lead (<a id={`tools-marketing-budget-ad-copy-message-validation-google-performance-max-challenges-source-business-google-com${idSuffix}`} href="https://business.google.com/aunz/think/ai-excellence/remaster-retail-strategy-ai/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Google</a>,
        as of Oct 24, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in Miami-Dade, Broward, and West Palm Beach, the problem is not just that ad platforms
        are complex. It is that the system is set up to drain micro-budgets through trial and error. When you run
        ads on Google or Meta, the default settings are not built for your neighborhood, they are built for big
        spenders with money to burn. That means broad match keywords and wide targeting, which send your ads to
        people who will never buy from you, or to accidental clicks that cost you real money. One wrong keyword or a
        single day of bad targeting can wipe out your whole week’s spend. And once that money is gone, it is not
        coming back.</p>
      <p className="text-base text-white shadow-text pt-3">
        Trying to manage this by hand is not just hard, it is nearly impossible at this scale. You cannot afford an
        agency, its retainer would eat your entire budget. So you are left with late-night dashboard tweaks and
        endless guesswork. You try to pause losing ads, but unless you check every day, you end up paying for clicks
        that never convert. If you try to get clever and tweak keyword bids down to the penny, you reset the
        learning algorithms, and your ads stop showing up altogether. That leaves you invisible when local search
        volume spikes for your service.</p>
      <p className="text-base text-white shadow-text pt-3">
        There’s also the problem of geography. Platforms do not care about your true service area. Without constant
        manual intervention, your ads end up showing to people far outside your 10-mile radius, or to commuters who
        will never become customers. Every out-of-area click is money you will never see again. And when you do get
        a real lead, you are often too slow to respond, there is no team on hand to reply instantly, so hot
        prospects drop off while you are busy running the business.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ad fatigue is another silent killer. Running the same <GlossaryLink slug="ad-copy">ad copy</GlossaryLink> for
        months means your local audience stops noticing you. But refreshing creative and testing new messages is
        hard to do by hand. Most businesses end up letting stale ads run far too long, draining budget on <GlossaryLink slug="impressions">impressions</GlossaryLink> that
        no longer drive results. If you try to fix it by adding more variations, you face a new problem: how to know
        which one is actually working, and how to pause losers before they do real damage.</p>
      <p className="text-base text-white shadow-text pt-3">
        All of this adds up to a system where the odds are stacked against local businesses with small budgets. The
        platforms are optimized for volume, not for your success. Every manual step, whether it is adjusting bids,
        pausing ads, or sorting through performance data, costs you real money and real time. And the more you try
        to manage by hand, the more likely you are to make a mistake that erases a week’s worth of spend in a single
        afternoon.</p>
      <p className="text-base text-white shadow-text pt-3">
        The final blow comes when you realize that even your best efforts can be undone by platform exploitation.
        Leaving campaigns on autopilot means your budget is spent on cheap informational searches, accidental mobile
        clicks, or people outside your service radius. The platforms are not malicious, but they are indifferent to
        your constraints. They will happily serve your ads to anyone, anywhere, as long as it keeps the clicks
        coming. That is not a system built for small business survival.</p>
      <p className="text-base text-white shadow-text pt-3">
        In the end, the cost of manual ad copy and message validation is not just financial. It is the stress of
        knowing that every dollar counts, and that one slip can set you back for weeks. It is the frustration of
        seeing your budget vanish on clicks that never convert. And it is the exhaustion of trying to keep up with
        platforms that are always one step ahead, always ready to drain your spend unless you outsmart them, every
        single day.</p>
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
