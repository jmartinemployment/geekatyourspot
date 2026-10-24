import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manual campaign management for small businesses in South Florida is a drain on both budget and time. Every
        day, owners working with less than $500 a month find themselves fighting a losing battle against platform
        defaults, wasted clicks, and missed leads (<a id={`tools-marketing-budget-ad-copy-message-validation-localiq-challenges-source-localiq-com${idSuffix}`} href="https://localiq.com/blog/local-ppc/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">LocaliQ</a>,
        as of Oct 23, 2026). The cost is not just money lost on bad traffic or broad-match keywords, but also the
        hours spent trying to figure out what went wrong when the phone doesn’t ring.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first place these budgets leak is in keyword targeting. Without automation, campaigns often default to
        broad, informational phrases that attract people looking for DIY tips rather than buyers. A single day’s
        worth of clicks on the wrong terms can wipe out a week’s budget. There is no room for error: with only $10
        to $16 to spend each day, even a handful of misfires means the campaign is over before it starts. The money
        is gone, and the business is left with nothing to show for it.</p>
      <p className="text-base text-white shadow-text pt-3">
        Tracking is the next failure point. Most small businesses do not have the data engineering resources to set
        up proper web tracking, so they cannot see which ad or platform delivered a real customer. Calls, form
        fills, and chats come in, but there is no single view tying them back to the campaign that won the lead.
        This means they cannot tell what is working or where to double down, leaving every decision as a guess. When
        platforms like Meta and Google optimize for their own goals, not the business’s, the result is more money
        spent on traffic that never converts.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geography is another silent killer. Manual setup often leaves geographic targeting too wide, so ads show up
        for people far outside the service area. For a small business in West Palm Beach, a single <GlossaryLink slug="impressions">impression</GlossaryLink> served
        to someone an hour away is a wasted click. Multiply this by dozens of campaigns and the budget is gone on
        people who will never walk in the door. No matter how good the <GlossaryLink slug="ad-copy">ad copy</GlossaryLink> is,
        it cannot overcome the cost of showing up in the wrong place.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative fatigue is a slow bleed. Without the time or tools to run structured A/B copy tests,
        underperforming ads linger for weeks or months. Low-click banners and stale headlines keep running simply
        because there is no one to monitor and optimize them daily. The campaign drifts, and the <GlossaryLink slug="cost-per-lead">cost
        per lead</GlossaryLink> climbs higher. The business is left wondering why nothing is improving, but the
        answer is simple: there is no system in place to shift spend to the best-performing messages or images.</p>
      <p className="text-base text-white shadow-text pt-3">
        Lead follow-up is where the final dollars are lost. Without a unified lead database, new inquiries from web
        forms, chats, or social comments get lost in the shuffle. Hot leads cool off as they wait for a response, or
        worse, never get a reply at all. The business owner is left scrambling to piece together who came from
        where, often missing out on real opportunities simply because there is no process to capture and track every
        contact.</p>
      <p className="text-base text-white shadow-text pt-3">
        All of this adds up to a harsh reality: small businesses paying out of pocket for every click do not have
        the margin to absorb these mistakes. The cost is not just the wasted spend, but the opportunity lost when a
        real lead goes to a competitor who responds faster, targets better, or simply has the right tools in place.
        Without automation, every dollar is at risk, every campaign is a gamble, and every week is a new round of
        trial and error with no guarantee of success.</p>
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
