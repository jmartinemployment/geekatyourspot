export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Deploying MarketMuse for Intelligent Content Planning means making a handful of critical data
        decisions upfront. These choices define how well the platform can map your real content strengths,
        spot gaps, and hand you actionable recommendations. Geek @ Your Spot LLC guides this process, translating
        your local business needs into a structure that MarketMuse’s AI can work with from day one.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first and most important decision is how to define your content inventory. MarketMuse does not
        simply index every page on your site as equal. Instead, the platform relies on a structured inventory
        that separates out key content types, core landing pages, evergreen blog posts, resource articles, and
        any other assets that drive authority for your brand. Geek @ Your Spot LLC works with your team to tag and
        categorize these assets, so MarketMuse’s AI can analyze them in the right context. This step is
        crucial: a poorly mapped inventory leads to noisy recommendations and missed opportunities, while a
        clean, well-structured inventory lets MarketMuse pinpoint exactly where your authority is strong and
        where you are exposed.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next is the mapping of tracked topics and clusters. MarketMuse is built to go beyond keyword lists. It
        operates on clusters, groups of related topics that, when covered together, build structural authority
        in the eyes of search engines and AI discovery tools. Geek @ Your Spot LLC helps you define these clusters
        based on your business goals, local market, and existing strengths. This is not a static list. As your
        site grows and your business priorities shift, the tracked clusters are updated to reflect new
        opportunities or changes in the competitive landscape. This dynamic mapping is what lets MarketMuse
        surface quick wins and long-term plays that generic keyword tools miss.</p>
      <p className="text-base text-white shadow-text pt-3">
        Personalized Difficulty and Topic Authority metrics require careful calibration. MarketMuse uses your
        site’s historical data, how well you cover a topic, how your pages have performed over time, and how
        you stack up against competitors, to assign a difficulty score for each tracked topic. Geek @ Your Spot LLC ensures that these metrics are grounded in your real content footprint, not in generic industry
        benchmarks. This means that the recommendations you receive are actionable: you know exactly which
        topics are within reach this quarter, and which ones will require sustained investment to win.</p>
      <p className="text-base text-white shadow-text pt-3">
        The way MarketMuse handles page-topic combinations is another key mapping decision. Each page in your
        inventory is mapped to one or more target topics, allowing the AI to assess whether it meets the
        standard for authority and depth. Geek @ Your Spot LLC helps you define these mappings, ensuring that
        every important page is evaluated against the right set of topics. This prevents the common failure of
        misaligned content, where a blog post meant to build authority on one topic is never recognized for
        it, simply because the mapping was off.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, integration with your approval workflows and editorial process is mapped at the start.
        MarketMuse’s research and briefing tools are configured to match your existing review chains, so that
        every recommendation or brief fits into your team’s real-world process. Geek @ Your Spot LLC sets up the
        routing logic, user permissions, and notification triggers to keep your workflow running smoothly.
        This upfront mapping eliminates bottlenecks and ensures that MarketMuse’s insights are acted on, not
        lost in a dashboard no one checks.</p>
      <p className="text-base text-white shadow-text pt-3">
        These data structure and mapping decisions are not one-off setup tasks. They are the foundation for
        continuous, automated content planning that adapts as your business grows. Geek @ Your Spot LLC manages
        this mapping as an ongoing service, updating your inventory, clusters, and metrics as your site
        evolves. This ensures that MarketMuse remains a living, responsive system, one that always reflects
        the real opportunities and risks in your content environment, and never leaves your team guessing
        about what to do next.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-data-structure-and-mapping-decisions-matter-most-at-the-start" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data Structure and Mapping Decisions Matter Most at the Start
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-data-structure-and-mapping-decisions-matter-most-at-the-start-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data Structure and Mapping Decisions Matter Most at the Start
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
