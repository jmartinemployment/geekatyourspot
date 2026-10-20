import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        MarketMuse stands apart from typical content planning tools by focusing on the unique challenges small
        marketing teams face. Most alternatives in this space offer keyword research, basic content scoring,
        or template-driven writing, but they rely on the same generic data sources and force teams to build
        strategy from scratch. MarketMuse, by contrast, uses proprietary AI to map a business’s entire content
        footprint, identify gaps that competitors missed, and calculate the exact difficulty of ranking for a
        topic based on the site’s current authority. This is not just a technical difference, it changes the
        way a team plans and executes every week.</p>
      <p className="text-md text-white shadow-text pt-3">
        Many small businesses in Miami-Dade, Broward, and West Palm Beach counties start with
        spreadsheet-driven keyword lists, often pulled from public APIs or SEO tools. The result is a cycle of
        manual research, copying what larger competitors are already doing, and spreading effort across too
        many high-difficulty topics. Tools that simply automate keyword research or outline creation do not
        solve the core problem: they reinforce a losing strategy by encouraging teams to chase the same
        crowded topics. MarketMuse breaks this pattern by showing exactly where a business already has
        authority, where quick wins exist, and which topics are mathematically out of reach. Its content
        inventory and personalized difficulty metrics are built on the site’s own data, not on industry
        averages.</p>
      <p className="text-md text-white shadow-text pt-3">
        Where other platforms offer a one-size-fits-all approach, MarketMuse delivers a custom roadmap. Its
        patented topic modeling technology analyzes not just the keywords, but the full context of a
        business’s content and how it stacks up against local and national competitors. This means a team can
        see, in minutes, which topics are worth investing in and which are a waste of time. Instead of
        spending dozens of hours on manual audits or guessing which blog post might perform, MarketMuse
        automates the research and delivers a prioritized plan. The result is a shift from reactive publishing
        to proactive, data-driven content strategy.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams that have tried other AI writing tools or bulk content generators, the difference is clear.
        MarketMuse does not just generate text or fill in templates. It provides detailed, prescriptive
        content briefs that outline exactly what should be included in each piece, headings, subtopics,
        related questions, and even internal linking opportunities. This structure removes the ambiguity that
        often leads to wasted drafts and missed deadlines. Writers and editors know what is needed before they
        start, and managers can track progress against a clear set of criteria. The platform’s real-time
        feedback and scoring ensure that content meets the standards for authority and relevance before it
        ever goes live.</p>
      <p className="text-md text-white shadow-text pt-3">
        When compared to other intelligent content planning solutions, MarketMuse is the only platform in this
        segment that combines automated inventory, personalized ranking difficulty, and deep competitive gap
        analysis in one place. While some tools offer integrations with CMS or bulk publishing, they do not
        address the strategic layer that determines what actually gets seen. MarketMuse sits at the core of
        the planning process, guiding every subsequent step, from ideation to optimization, based on what will
        deliver real results for a small team. This is why it is used not just by agencies and publishers, but
        by in-house marketing leads who need to do more with less.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a small team, the real test comes on Friday afternoon, when the numbers are in and it is time to
        see what moved the needle. MarketMuse gives them a way to track what content is working, what needs to
        be updated, and where new opportunities have opened up. Instead of a static spreadsheet or a dashboard
        full of vanity metrics, they get actionable insights tied directly to their own site’s authority and
        performance.
        This&nbsp;<GlossaryLink slug="feedback-loop" className="text-[#0B162A] hover:underline">feedback
        loop</GlossaryLink>&nbsp;is what sets MarketMuse apart from every generic content tool on the market,
        and it is why teams that switch rarely go back to manual planning.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-marketmuse-compares-to-other-content-planning-approaches-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How MarketMuse Compares to Other Content Planning Approaches for Small Teams
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-marketmuse-compares-to-other-content-planning-approaches-for-small-teams-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How MarketMuse Compares to Other Content Planning Approaches for Small Teams
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
