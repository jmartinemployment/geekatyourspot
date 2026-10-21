export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        MarketMuse does not start with keywords or a blank content calendar. It begins by crawling your entire
        published site, mapping every page, topic, and their connections. This scan is not just a
        surface-level scrape. The platform builds a full content inventory, linking each page to the topics it
        covers and measuring how well it performs in search. This is the foundation for all later decisions.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once the inventory is in place, MarketMuse’s AI analyzes both your site and your competitors. It does
        not rely on generic keyword APIs. Instead, it uses its own proprietary data and patented topic
        modeling to calculate which subjects you already have authority on, which are weak, and where your
        rivals have left clear gaps. For every topic, it assigns a Personalized Difficulty score, unique to
        your site, not a generic market average. This tells you, with a number from 1 to 100, how hard it is
        for your business to rank for that specific subject, factoring in your site’s history and breadth of
        coverage.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next step is cluster analysis. MarketMuse groups related topics into clusters, showing you where
        you have the best chance to build or expand authority. It does this for both your site and your
        competitors, surfacing quick wins and long-term opportunities. The platform highlights technical
        topics that your South Florida rivals have overlooked, giving you a map of the ground you can take
        without fighting uphill battles for high-competition phrases.</p>
      <p className="text-base text-white shadow-text pt-3">
        Intelligent content planning moves from theory to execution with MarketMuse’s Content Briefs. These
        are not just outlines. Each Brief spells out the objective, user intent, must-answer questions, title
        options, recommended subheadings, and the specific subtopics to cover. The Briefs are built from the
        platform’s analysis, so every assignment is structured to fill a real gap, not just to publish for the
        sake of activity. Writers and editors work from these blueprints, cutting out the guesswork and the
        endless rounds of revision that come from unclear direction.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real-time text editor is where the writing happens. As your team drafts, MarketMuse scores the
        content against its topic model, showing live feedback on how well the piece covers the ground needed
        to demonstrate expertise. It tracks internal and external linking, keyword coverage, and structure,
        all mapped to what the top-ranking competitors are doing, but goes further by flagging opportunities
        they missed. This means your team does not just copy what is already out there; they leapfrog it.</p>
      <p className="text-base text-white shadow-text pt-3">
        After publishing, MarketMuse continues to monitor performance. The platform’s inventory updates
        automatically, tracking changes in authority, visibility, and ranking decay. It flags thin or
        underperforming content that could be harming your site, and it identifies which pieces are now ripe
        for repurposing or expansion. The cycle is continuous: inventory, analysis, planning, execution, and
        review, all run from one central command center.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small team, this means no more spreadsheet chaos, no more wasted hours on manual audits, and no
        more hunch-based assignments. Every step is built to show exactly what to write, when to update, and
        where to focus effort for the largest return. The same Miami-Dade team that started the week lost in a
        sea of disconnected ideas now works from a live blueprint, with each member knowing their role and
        every published piece tracked for real impact. MarketMuse is not just a research tool or a writing
        assistant, it is the operational backbone for Intelligent Content Planning that ties strategy to daily
        execution.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-happens-inside-marketmuse-the-real-process-step-by-step" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Happens Inside MarketMuse: The Real Process, Step by Step
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
              <h2 id="what-happens-inside-marketmuse-the-real-process-step-by-step-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Happens Inside MarketMuse: The Real Process, Step by Step
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
