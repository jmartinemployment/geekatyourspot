export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Scalenut is designed as a cloud-based platform with a modular, brand-centric architecture. At its core
        is the workspace system, each client can manage multiple brands, domains, or projects as separate
        environments. This is crucial for small businesses with more than one line of service or location, as
        it keeps content, brand voice, and data organized and isolated.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform’s Brand Kit is the anchor for content consistency. It stores tone of voice settings,
        brand summaries, preferred keywords, competitor lists, and even image preferences. When a user starts
        a new article or campaign, Scalenut applies these settings automatically, ensuring that every output
        matches the business’s identity. The Tone of Voice Library lets users build and save multiple styles,
        either by manual input or by analyzing existing content. This is the mechanism that solves
        inconsistent terminology and tone, especially for teams with rotating staff or part-time contributors.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scalenut’s data pipeline is built for SEO and discoverability across both traditional search engines
        and AI-powered answer platforms. The system pulls in SERP data, trending questions, and competitor
        outlines in real time. When generating content, it benchmarks drafts against the top 30 ranking URLs,
        extracting key terms, schema elements, and metadata that help the content rank and get cited by AI
        engines. The platform’s editor tracks content score, word count, and key term usage, giving users
        immediate feedback on optimization.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integrations are practical and focused on reducing manual work. Scalenut connects directly to
        WordPress for publishing, and to Copyscape and Word AI for plagiarism checking and content rewriting.
        These integrations allow a business owner to move from draft to published post without switching
        platforms or copying content between tools. The platform also supports exporting guidelines and
        outlines for collaboration, and sharing content with external stakeholders.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data handling in Scalenut is transparent. Administrative tools let users manage archives of all
        drafts, track changes with version history, and control domain permissions, useful for businesses that
        need to manage multiple websites or coordinate with outside consultants. Change logs provide an audit
        trail of every technical tweak, supporting accountability and compliance.</p>
      <p className="text-md text-white shadow-text pt-3">
        Content structure is a technical priority. Scalenut enforces logical hierarchies (H1, H2, H3 tags),
        schema markup, and metadata fields directly in the editor. This makes the resulting articles easy for
        both human readers and AI engines to scan and extract, increasing the odds of being cited in
        AI-generated answers. The platform’s keyword clustering and planning tools help businesses build
        topical authority, organize content into clusters, and cover all aspects of a subject systematically.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams that need to scale, Scalenut’s bulk draft creation and interlinking features allow for rapid
        production and site-wide optimization. The platform can generate multiple first drafts at once, all
        aligned to the same brand guidelines, then link related articles to boost SEO and user engagement.
        Collaboration is built in, with options to share briefs, add writer notes, and manage feedback in one
        place.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scalenut’s architecture is not just about features, it is about building a reliable, repeatable system
        that fits the real constraints of small teams. Everything from the workspace setup to the final export
        is designed to minimize manual effort, enforce brand consistency, and deliver content that is
        optimized for both Google and AI-powered search. For a business owner in South Florida, this means no
        more lost drafts, no more off-brand posts, and no more wasted time toggling between disconnected
        tools. The platform holds the entire workflow, so the team can focus on what actually moves the
        business forward.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="scalenuts-platform-architecture-integrations-and-data-handling" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Scalenut’s Platform Architecture, Integrations, and Data Handling
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
              <h2 id="scalenuts-platform-architecture-integrations-and-data-handling" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Scalenut’s Platform Architecture, Integrations, and Data Handling
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
