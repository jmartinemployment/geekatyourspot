export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Writesonic is built as a modular, cloud-based platform that connects directly to the tools and data
        sources small businesses already use. The architecture is designed for flexibility, whether you run a
        single WordPress blog or manage a multi-language catalog with thousands of listings, Writesonic adapts
        to your environment without a heavy IT lift. Its core is a set of AI engines, research modules, and
        workflow automation layers that communicate through secure APIs and direct platform integrations.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the foundation, Writesonic’s content engine ingests data from multiple sources. It integrates with
        Ahrefs for keyword research, backlink analysis, and competitor gap detection. With Sanity, it stays in
        sync with your CMS, refreshing content blocks when your visibility drops or when you need to update
        old articles. The system can also connect to Google Keyword Planner to assess query competition and
        search volume, so your content plan is always grounded in live market data.</p>
      <p className="text-base text-white shadow-text pt-3">
        These integrations are not just for initial setup, they power ongoing operations. For example, if a
        local competitor in Miami-Dade starts ranking for a set of keywords you are missing, Writesonic
        identifies the gap and surfaces it in your dashboard. The Action Center module automates discovery and
        creates a prioritized list of tasks, like fixing weak pages or targeting new prompts. Citation
        outreach workflows are built in, so you can earn mentions on third-party blogs and review sites that
        AI engines are already pulling from.</p>
      <p className="text-base text-white shadow-text pt-3">
        Writesonic’s data handling is structured for both scale and compliance. Every piece of content runs
        through a quality-controlled pipeline. Research modules pull only verified facts and real data, never
        fabricating statistics or claims. The system stores brand voice profiles, editorial standards, and
        banned phrase lists per client or per business unit, so you maintain control over how your brand is
        represented. Internal and external linking is managed by domain and relevance, not just by keyword, to
        ensure your site architecture stays healthy as you scale.</p>
      <p className="text-base text-white shadow-text pt-3">
        Content governance is a core architectural feature. Approval workflows are built into the platform, so
        drafts move from AI generation through expert review to final sign-off without leaving the system.
        This is critical for small teams who cannot afford to lose track of versions or let off-brand content
        slip through. Each article, landing page, or product description is versioned and tracked, with schema
        markup and structured data attached for every major search and answer engine.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bulk scheduling and automated publishing are handled through direct CMS integrations and export
        options. You can push a month’s worth of posts, with all metadata and images included, to your site in
        a single session. The system supports multi-language output natively, so technical industries or
        businesses serving diverse local communities can generate content in Spanish, German, or other target
        languages without relying on brittle translation tools. Brand voice and editorial standards hold
        across every language and format.</p>
      <p className="text-base text-white shadow-text pt-3">
        Writesonic also tracks your content’s performance across AI engines like ChatGPT, Gemini, Claude, and
        Perplexity. It measures prompt-level visibility, share of voice, sentiment, and citation sources. If
        your brand is missing from key AI answers or if competitors are getting cited instead, the platform
        flags the gap and suggests concrete fixes. This is not just analytics, it is actionable intelligence
        that feeds directly into your content pipeline, so you can close gaps and reclaim lost ground.</p>
      <p className="text-base text-white shadow-text pt-3">
        For South Florida small businesses, this means you do not need to rip and replace your existing
        marketing stack. Writesonic connects to what you already use, holds your data securely, and gives you
        the controls to scale without losing sight of quality or compliance. The architecture is built for the
        realities of lean teams, minimal manual intervention, automated review cycles, and a clear, actionable
        dashboard that shows exactly where to focus next.</p>
      <p className="text-base text-white shadow-text pt-3">
        When the same business owner from the opening logs in after a long week, the system is waiting with a
        list of ready-to-publish articles, flagged updates, and clear next steps. No more chasing down files,
        no more guessing at what to fix, and no more wondering if the work is actually moving the needle.
        Writesonic’s architecture and integrations are what make this possible, turning a small team’s limited
        hours into a full-scale, always-on content operation.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="writesonics-architecture-integrations-and-data-handling-in-practice" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Writesonic’s Architecture, Integrations, and Data Handling in Practice
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
              <h2 id="writesonics-architecture-integrations-and-data-handling-in-practice-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Writesonic’s Architecture, Integrations, and Data Handling in Practice
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
