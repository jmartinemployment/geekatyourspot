import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A small business marketing team in Miami-Dade sits down to build their next campaign. They have a
        spreadsheet of half-baked ideas, a Slack thread with three conflicting directions, and a calendar that
        never matches what actually gets posted. The team is stuck in a cycle: someone tries to invent a new
        hook under pressure, the post goes out at the wrong time, and the audience misses it. Next week, the
        same scramble starts again. This is not just a story, it is the real cost of running content planning
        without the right tools.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first pain point is the blank page. Small teams spend hours staring at empty screens, trying to
        come up with social media hooks or campaign themes. There is pressure to be original, but without live
        data or trend tracking, every idea is a shot in the dark. Most posts end up missing the mark, never
        reaching the right people, and rarely driving any leads or sales. The cost here is not just time. It
        is the wasted effort on content that never lands, the missed opportunities to tap into local trends,
        and the slow erosion of brand relevance.</p>
      <p className="text-base text-white shadow-text pt-3">
        Then comes the chaos of juggling tools. Teams bounce between browser tabs, chat threads, and
        disconnected scheduling apps. Each platform has its own quirks, and keeping everything in sync is a
        manual grind. This fragmentation leads to mistakes, posts go out at random times, campaigns overlap,
        and nobody is sure what is actually live. When the team tries to coordinate a campaign, the lack of a
        unified workflow means hours lost to back-and-forth, last-minute edits, and miscommunication.
        Operational overhead climbs, but results stay flat.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another major risk is missing out on local conversation topics. Without enterprise-scale listening
        tools, small businesses cannot spot what is trending in their market. By the time the team hears about
        a viral topic, it is already old news. The result is a reactive approach, always playing catch-up
        instead of leading the conversation. This not only hurts engagement but also leaves the brand out of
        key moments that competitors are leveraging to grow their own audience.</p>
      <p className="text-base text-white shadow-text pt-3">
        Timing is another silent killer. Promotional updates go out when nobody is online, posts are scheduled
        based on guesses, not data. The audience scrolls past, and the team is left wondering why engagement
        is so low. There is no&nbsp;<GlossaryLink slug="feedback-loop">feedback loop</GlossaryLink>&nbsp;to
        learn what works, so the same mistakes repeat. The business loses the chance to drive real results
        from its social channels, and marketing becomes a chore that distracts from running the company.</p>
      <p className="text-base text-white shadow-text pt-3">
        Approval and compliance are often afterthoughts in this manual process. Without structured, multi-tier
        review workflows, employee drafts slip through unapproved. A single off-message post can put the brand
        at risk, especially in regulated industries. The team spends more time chasing down errors and less
        time building campaigns that actually deliver value. The cost is not just in hours wasted but in the
        potential damage to reputation and the stress that comes from firefighting instead of planning.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most small businesses in South Florida do not have the luxury of a dedicated content strategist or a
        compliance officer. Every hour spent on manual planning, rewriting, or damage control is an hour not
        spent growing the business. The operational overhead is high, the results are nearly invisible, and
        the stress never lets up. Intelligent Content Planning is supposed to solve this, but without the
        right platform, the cycle of chaos continues.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-content-planning-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Content Planning by Hand
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
              <h2 id="what-it-costs-to-keep-doing-content-planning-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Content Planning by Hand
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
