export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        MarketMuse is not a CMS and does not replace one. It sits beside your existing publishing and
        analytics stack, acting as a layer of intelligence that audits, analyzes, and guides content
        decisions. The foundation is its proprietary data engine and patented topic modeling algorithms. These
        do not pull from the same public APIs as most keyword tools. Instead, MarketMuse collects and
        processes its own data, combining it with open-source algorithms to classify parts of speech and
        calculate relevance at scale.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the core is the automated content inventory. MarketMuse scans your live site, indexing every page,
        topic, and their combinations. This inventory is updated regularly and requires no manual uploads or
        spreadsheet imports. The platform stores this structured data, mapping each topic to its authority,
        coverage, and performance over time. For every tracked topic, MarketMuse calculates several
        personalized metrics, including Personalized Difficulty, Topic Authority, Competitive Advantage, and
        Content Score. These metrics are unique to your site and are not shared across the user base, so your
        recommendations are tailored, not generic.</p>
      <p className="text-base text-white shadow-text pt-3">
        MarketMuse’s architecture is designed for scale. It can process millions of articles on demand,
        analyzing both your domain and your competitors’. This enables deep competitive analysis, cluster
        mapping, and gap identification at a level that is not feasible with manual workflows. The platform’s
        topic models are built to reflect real relationships between subjects, not just surface-level keyword
        co-occurrence. This is what allows MarketMuse to recommend content clusters that build structural
        authority, rather than chasing disconnected short-term wins.</p>
      <p className="text-base text-white shadow-text pt-3">
        The system includes a suite of AI-powered applications: the Content Inventory, Research, Compete,
        Optimize, and Content Briefs modules. Each module shares a common data layer, so insights and
        recommendations flow across the platform. For example, a gap spotted in the Compete tool feeds
        directly into a new Content Brief, which then passes its completed draft into the Optimize editor for
        live feedback. The architecture is modular, but tightly integrated around the core inventory and topic
        models.</p>
      <p className="text-base text-white shadow-text pt-3">
        MarketMuse does not manage publishing or content changes directly. It provides the data,
        recommendations, and blueprints, but leaves final publishing and workflow management to your existing
        CMS and project tools. The platform is built to plug into the way your team already works, not to
        force a new system from scratch. This means you can export briefs, share research, and collaborate
        using your preferred channels, while MarketMuse handles the heavy lifting of analysis and planning in
        the background.</p>
      <p className="text-base text-white shadow-text pt-3">
        For integrations, MarketMuse is designed to operate as a standalone intelligence layer. It does not
        require deep technical setup and does not force you to migrate content or data. The system’s outputs,
        briefs, reports, scores, are exportable and can be brought into your workflow as needed. This keeps
        technical overhead low and allows small teams to get started quickly without a heavy IT lift.</p>
      <p className="text-base text-white shadow-text pt-3">
        Under the hood, the platform’s architecture is built to handle continuous change. As your site grows
        and the search landscape shifts, MarketMuse’s inventory and topic models update in real time. This
        ensures that recommendations are always based on current data, not static snapshots. The platform is
        built for teams who need to adapt fast, spot new opportunities, and avoid the lag that comes from
        outdated or manual systems.</p>
      <p className="text-base text-white shadow-text pt-3">
        The result is a system that gives you a live, always-updated map of your content authority and
        competitive landscape, without ever requiring you to become a data scientist or SEO specialist.
        MarketMuse does the heavy analysis, so your team can focus on execution and strategy, confident that
        every move is grounded in real, up-to-date evidence. For small businesses in South Florida, this means
        plugging a world-class AI engine into your existing marketing stack, with no disruption to your
        day-to-day publishing or approval workflows.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-marketmuse-is-built-architecture-data-and-what-it-connects" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How MarketMuse Is Built: Architecture, Data, and What It Connects
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-marketmuse-is-built-architecture-data-and-what-it-connects-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How MarketMuse Is Built: Architecture, Data, and What It Connects
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
