import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Google Performance Max automates precision lead acquisition by using AI to handle every step that
        drains time and money from small local campaigns. The platform uses real-time data and built-in machine
        learning to test, adapt, and optimize ad copy, targeting, and spend, without manual oversight or constant
        dashboard checks. Every feature is designed for teams with less than $500 a month to spend, where a single
        mistake can wipe out a week’s budget.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core engine behind Google Performance Max is its combination of Demand Gen campaigns, broad match
        keyword targeting, and <GlossaryLink slug="smart-bidding" className="text-[#0B162A] hover:underline">smart
        bidding</GlossaryLink>. Demand Gen lets a business set up upper-funnel campaigns that are built around
        strict local budget thresholds. Instead of generic ads, Google Performance Max generates messaging like
        “Meals Under $10 in Miami” or “Top Plumbers Near Me for Under $200,” paired with a live product or service
        catalogue. This approach speaks directly to cost-sensitive buyers and makes every click more likely to
        convert.</p>
      <p className="text-base text-white shadow-text pt-3">
        Broad match and smart bidding work together to capture high-intent searchers. Google Performance Max
        analyzes general keywords about budgeting and local services, then uses AI to match ads to users who are
        actively planning their purchases. The system constantly updates bids in real time based on conversion
        signals, so spend flows toward the best-performing placements, whether that is Google Search, Maps, YouTube,
        or local display. This means the platform can automatically shift a micro-budget between channels as local
        demand spikes, instead of burning through daily caps on one channel while missing hot leads on another.</p>
      <p className="text-base text-white shadow-text pt-3">
        Google Performance Max’s message validation is driven by its dynamic creative engine. The platform generates
        and tests multiple ad copy variations, headlines, descriptions, and calls to action, using generative AI. It
        draws directly from a business’s website and existing ads to ensure all messaging is on-brand and relevant.
        Underperforming ads are paused instantly, with no need for a business owner to check the dashboard every
        night. This avoids the common trap of running one stale ad until the audience tunes out, and it means ad
        fatigue is caught before it costs real money.</p>
      <p className="text-base text-white shadow-text pt-3">
        Targeting is refined down to the zip code and neighborhood level. Google Performance Max uses location-level
        controls within ad groups to ensure ads only appear to buyers inside a precise, serviceable radius. The
        system blocks out-of-area impressions, so every dollar stays focused on the people most likely to call,
        click, or walk in. For businesses in Miami-Dade, Broward, and West Palm Beach, this means no more wasted
        spend on clicks from out-of-town browsers or accidental mobile taps.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every adjustment, whether it is pausing a low-performing creative, shifting budget between channels, or
        tightening a location radius, happens automatically. The platform’s automation eliminates the need for
        manual bid tweaks or daily intervention. This is especially critical for small teams who cannot afford to
        babysit their campaigns or reset learning algorithms with every adjustment. Instead, Google Performance Max
        uses historical auction-time data to secure the lowest possible <GlossaryLink slug="cost-per-click" className="text-[#0B162A] hover:underline">cost
        per click</GlossaryLink> for the right audience at the right moment.</p>
      <p className="text-base text-white shadow-text pt-3">
        Google Performance Max also integrates real-time <GlossaryLink slug="feedback-loop" className="text-[#0B162A] hover:underline">feedback
        loops</GlossaryLink> and <GlossaryLink slug="a-b-testing" className="text-[#0B162A] hover:underline">A/B
        testing</GlossaryLink>. As new creative assets are pushed live, the system tracks which variations drive the
        best results and automatically reallocates spend to the top performers. There is no lag between testing and
        action, winning ads get more budget, losing ads are paused, and the cycle repeats. This keeps campaigns
        fresh and maximizes <GlossaryLink slug="return-on-ad-spend" className="text-[#0B162A] hover:underline">return
        on ad spend</GlossaryLink>, even when budgets are tight.</p>
      <p className="text-base text-white shadow-text pt-3">
        For local businesses, the result is a system that works behind the scenes. Google Performance Max handles
        the heavy lifting of message validation and budget optimization, freeing up owners to focus on running their
        business instead of chasing ad performance. The automation is not a black box; every decision is visible in
        detailed reports, so teams can see exactly which ads, keywords, and locations are driving results. This
        level of transparency is critical for small businesses that need to justify every dollar spent.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, Google Performance Max replaces the manual grind of ad copy testing and budget management with a
        closed-loop, AI-driven system. It narrows targeting to high-intent local buyers, adapts creative in real
        time, and keeps spend focused where it matters most, all without the need for a full-time ad manager or
        agency retainer. For businesses operating on razor-thin margins, this is the difference between burning
        through budget and seeing real, measurable results from every campaign.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-google-performance-max-automates-ad-copy-and-message-validation-at-the-micro-budget-level" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Google Performance Max automates precision lead acquisition at the micro-budget level
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-google-performance-max-automates-ad-copy-and-message-validation-at-the-micro-budget-level-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Google Performance Max automates precision lead acquisition at the micro-budget level
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
