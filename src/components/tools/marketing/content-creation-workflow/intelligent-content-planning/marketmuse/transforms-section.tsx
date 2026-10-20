export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        MarketMuse changes the week for a small marketing team by replacing manual, error-prone planning with
        data-driven automation. Instead of spending hours in spreadsheets, the team can see, in minutes, which
        topics they already own, where their competitors left gaps, and what to write next to build authority.
        MarketMuse does this by mapping the entire live digital footprint of the business, every page, every
        topic, every historical win, without the need for manual uploads or endless keyword lists.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform uses proprietary AI to analyze the site’s content, competitor coverage, and search
        behavior. It does not rely on generic third-party APIs, so the recommendations are specific to the
        business’s real authority, not just what is popular in the market. This means the team gets a
        personalized difficulty score for every topic, a 1 to 100 scale that shows exactly how hard it is for
        them to rank, based on their own content, not a generic average. Instead of fighting for high-volume
        keywords they cannot win, they see the topics where they have a real edge.</p>
      <p className="text-md text-white shadow-text pt-3">
        With MarketMuse, the team no longer writes disconnected articles. The system reveals clusters of
        related topics, showing where to build depth and how to link pieces together to establish authority.
        It highlights technical subjects and subtopics that major competitors have overlooked, giving the team
        a roadmap to quick wins. This is not just a list of ideas, it is a blueprint that shows which articles
        to create, which to update, and which to retire, all based on live data. The guesswork is gone.</p>
      <p className="text-md text-white shadow-text pt-3">
        Writing assignments become clear and actionable. MarketMuse generates detailed content briefs for
        every target topic, outlining objectives, user intent, questions to answer, and subheadings to
        include. Writers know exactly what to cover, how to structure the article, and which gaps to fill to
        outperform competitors. This removes the need for endless back-and-forth between editors and writers,
        reduces revisions, and ensures that every piece supports the broader strategy.</p>
      <blockquote cite="https://www.marketmuse.com/" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Our AI-powered software tells you what content to write (and how much) to leverage your experience and
        rank higher where competitors are weak.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        The system also flags thin, low-quality, or outdated pages that could be dragging down search
        performance. Instead of waiting for a ranking drop or a manual audit, the team gets alerts on which
        content needs to be improved or removed. This proactive approach protects the site’s authority and
        keeps the content portfolio healthy. The team spends less time firefighting and more time building
        assets that compound in value.</p>
      <p className="text-md text-white shadow-text pt-3">
        By automating research, planning, and competitive analysis, MarketMuse returns hours to the team each
        week. The platform does in minutes what used to take days, mapping opportunities, scoring topics, and
        building content plans that are grounded in data, not hunches. For a small business, this means more
        content actually gets published, fewer mistakes slip through, and every dollar spent on marketing goes
        further. The team can focus on strategy and creativity, knowing that the system is handling the heavy
        lifting of analysis and prioritization.</p>
      <p className="text-md text-white shadow-text pt-3">
        In short, MarketMuse removes the invisible costs of manual content planning. It gives small teams the
        power to act with the confidence and precision of a much larger operation, without adding headcount or
        complexity. The cycle of wasted effort and invisible results is replaced by a clear, actionable
        roadmap that builds authority, exploits competitor blind spots, and delivers measurable outcomes every
        week.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-marketmuse-removes-the-guesswork-from-intelligent-content-planning" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How MarketMuse removes the guesswork from Intelligent Content Planning
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
              <h2 id="how-marketmuse-removes-the-guesswork-from-intelligent-content-planning-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How MarketMuse removes the guesswork from Intelligent Content Planning
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
