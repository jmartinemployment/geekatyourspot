import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manual ad copy and message validation drains time and budget from small teams. When you run ads on a budget
        under $500 a month, every wasted click or impression is money you cannot get back (<a id={`tools-marketing-budget-ad-copy-message-validation-anyword-challenges-source-anyword-com${idSuffix}`} href="https://www.anyword.com/blog/email-a-b-testing-a-practical-guide-for-marketing-teams" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Anyword</a>,
        as of Oct 19, 2026). Most South Florida businesses in this range face a daily reality where a single
        misstep, a generic headline, a poorly targeted message, or an untested description, can burn through a
        week&apos;s spend in hours. Without a way to validate copy before launch, you are paying to find out what
        does not work.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first pain point is the cost of trial and error. Writing your own ad copy is a guessing game. There is
        no time or budget for structured A/B testing, and hiring an agency is out of reach. You end up running
        unproven headlines live, exposing your daily budget to the whims of ad platform algorithms. These platforms,
        tuned for mass-market advertisers, default to broad targeting and generic settings. They do not care if your
        $15 a day goes to accidental clicks from outside your local area, or to users who will never buy. The result
        is cash spent on traffic that never converts.</p>
      <p className="text-base text-white shadow-text pt-3">
        The second problem is fatigue, yours and your audience&apos;s. Small teams often stick with a single ad
        variation for weeks or months, hoping it will eventually catch on. Instead, your local audience sees the
        same message over and over, tune it out, and your <GlossaryLink slug="click-through-rate">click-through
        rates</GlossaryLink> drop. Meanwhile, your team is stuck editing and rewriting copy by hand, trying to guess
        what might work better, with no real data to guide them. Every cycle spent on this is time lost from other
        parts of your business.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual validation also creates blind spots in targeting. Every platform, Google, Meta, LinkedIn, requires a
        different style of copy and a different approach to audience engagement. What gets a click on Google Search
        may flop in a Facebook feed. Without a way to adapt your message to each channel, you end up with generic
        copy that fits nowhere. Worse, you cannot see which parts of your message connect with your real audience
        and which fall flat. Changing both the text and the creative at once, as many teams do, makes it impossible
        to know what actually drove results.</p>
      <p className="text-base text-white shadow-text pt-3">
        For South Florida businesses, the stakes are higher. Local campaigns need to speak to specific demographics,
        cultural references, and neighborhood pain points. Generic copy written for a national audience gets
        ignored, and your ad dollars go to waste. With no dedicated staff to follow up on leads, even a good click
        can be lost if the copy does not drive immediate action or fails to filter out low-quality traffic. Every
        hour spent writing, testing, and revising copy by hand is an hour not spent serving customers or growing
        your business.</p>
      <p className="text-base text-white shadow-text pt-3">
        The hidden cost is the opportunity you lose. While you are paying to test copy live, competitors using
        data-driven tools are validating their headlines before launch, filtering out weak messages, and focusing
        their spend on what works. They move faster, spend less on wasted clicks, and capture more of the local
        market. For a small team, staying in the manual cycle means you are always a step behind, reacting to
        results rather than shaping them. This is the real price of doing Budget Ad Copy &amp; Message Validation by
        hand in a market where every dollar must count.</p>
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
