import Link from "next/link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        MarketMuse is built for small teams who want to stop guessing and start making content decisions
        grounded in real data about their own business. It works best for organizations that need to stretch
        limited resources, move quickly, and show measurable results, especially those in competitive local
        markets like Miami-Dade, Broward, and West Palm Beach. If your team is tired of producing content that
        never ranks, or you are overwhelmed by the sheer volume of topics you could cover, MarketMuse provides
        a clear path forward. Its automated inventory, personalized difficulty scoring, and competitive gap
        analysis are designed for teams that need to know exactly where to focus and why.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform is not the right fit for businesses looking for a plug-and-play content writer or a
        replacement for a content management system. MarketMuse does not publish content for you, nor does it
        manage your site’s backend. It is a strategic planning tool that tells you what to write, how to
        structure it, and which areas will deliver the biggest return. Teams that want to hand off all content
        creation to software, or those that expect a CMS-like workflow, will not find what they need here.
        Instead, MarketMuse fits into a workflow where people still write, edit, and approve content, but do
        so with clear, data-backed guidance instead of hunches.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams with highly fragmented data, or those that have never run a content audit, the first step is
        to get their current assets mapped into MarketMuse. This means pulling in all published pages,
        tracking which topics are covered, and letting the platform apply its personalized metrics. The
        outcome is a living inventory that updates as new content goes live and as the competitive landscape
        shifts. Teams can see which topics are easy wins, which require more investment, and which are simply
        not worth the effort. This clarity is especially valuable for small teams that cannot afford to waste
        resources on projects that will not move the needle.</p>
      <p className="text-md text-white shadow-text pt-3">
        MarketMuse is also a strong fit for teams that need to coordinate across roles, writers, editors,
        managers, without losing sight of the strategy. The platform’s content briefs, topic models, and
        scoring systems help everyone stay aligned on the goals for each piece. It is not just about producing
        more content, but about producing the right content. Teams that use MarketMuse report faster
        turnaround times, fewer rewrites, and a greater confidence that what they publish will actually
        perform. This is especially true for businesses that want to build long-term authority in their niche,
        rather than chasing short-term trends that do not deliver.</p>
      <p className="text-md text-white shadow-text pt-3">
        If a small business is evaluating whether to implement MarketMuse, the next step is to assess their
        current workflow. Are they spending hours in spreadsheets, debating which topics to cover, or
        struggling to see results from their content? If so, MarketMuse is likely to deliver immediate value.
        The process starts with a full content inventory, followed by the application of personalized
        difficulty and authority metrics. From there, the team can prioritize which topics to tackle, build
        out structured content briefs, and track performance over time. The key is to use the platform not as
        a replacement for people, but as a system that gives them the data and direction they need to win in
        their market.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams that want to go beyond manual planning and start making every piece of content count,
        MarketMuse offers a way to break the cycle of wasted effort and invisible results. It is not for
        everyone, but for those who need to make the most of limited resources and outmaneuver larger
        competitors, it is a strategic advantage that pays off week after week.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<Link id="tools-marketing-intelligent-content-planning-marketmuse-right-fit-booking-your-free-consultation" href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">booking
        your free consultation</Link>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Walk me through your current process from the moment someone says &#39;we need a piece of content on X&#39; to the moment it goes live. Where does the process typically stall?</li>
        <li>Who is actually doing the writing and optimization? Is it an in-house generalist, a dedicated copywriter, or a rotating group of freelance contractors?</li>
        <li>When local customers look for your services online, are you fighting head-to-head against massive corporate players with huge budgets, or are you mostly competing with other local independent businesses?</li>
        <li>How critical is immediate search visibility (SEO and AI Search summaries) to your quarterly revenue goals versus staying top-of-mind on social media channels?</li>
        <li>Are you creating content strictly for a traditional company blog, or are you looking to turn these insights into short-form videos, email newsletters, and localized social media campaigns?</li>
        <li>How much does your target audience&#39;s behavior shift by neighborhood or culture? For example, do you need to alter your topic strategy between a corporate Brickell audience and a luxury Palm Beach demographic?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-marketmuse-is-for-who-it-is-not-and-what-a-small-team-should-do-next" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who MarketMuse Is For, Who It Is Not, and What a Small Team Should Do Next
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-marketmuse-is-for-who-it-is-not-and-what-a-small-team-should-do-next" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who MarketMuse Is For, Who It Is Not, and What a Small Team Should Do Next
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
