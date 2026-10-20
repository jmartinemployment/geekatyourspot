export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Writesonic’s content pipeline is not a single AI prompt or a batch of templates. It is a multi-stage,
        research-driven process that transforms a content request, like a blog post or landing page, into a
        finished, publish-ready asset. The mechanics are built for teams who need scale, accuracy, and brand
        consistency, not just speed. Every step is designed to reduce manual review and deliver content that
        meets both search engine and AI engine standards.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process starts with research. Writesonic pulls live data from the web, including search engine
        results pages (SERPs), competitor content, and keyword gaps. Integrations like Ahrefs feed in keyword
        rankings, search volume, backlinks, and content gaps, so the system knows exactly what your
        competitors are doing and where your site is missing out. This is not generic scraping, Writesonic
        analyzes the structure, headings, and intent behind top-ranking pages to build a clear picture of what
        works for your target query.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, Writesonic generates an outline that is custom to your audience and the type of content you
        need. If you are creating a technical product description, the outline follows scientific conventions,
        mechanism, structure, application, and citation context. For a local service landing page, it aligns
        to conversion-focused layouts and the specific questions your buyers are asking. The outline is not
        just a skeleton; it locks in the angle, depth, and key talking points that the finished piece must
        cover.</p>
      <p className="text-md text-white shadow-text pt-3">
        Brand voice is loaded at this stage. Writesonic trains on your existing material, whether that is your
        blog, sales copy, or product sheets. It builds a profile that captures your tone, preferred phrases,
        and even banned words. Every draft passes through this filter, so the output sounds like your
        business, not a generic AI. For agencies or teams who manage multiple brands, each client gets a
        separate voice profile, so nothing gets mixed.</p>
      <p className="text-md text-white shadow-text pt-3">
        Drafting is section-by-section. Each part of the content is written using the research, outline, and
        brand voice as constraints. Writesonic pulls in real data and verified facts from the web or your own
        knowledge base. It does not invent numbers or make up claims, every fact is sourced or flagged for
        review. The system also detects the right format for the job, whether it is a LinkedIn post, a
        whitepaper, or a product page.</p>
      <p className="text-md text-white shadow-text pt-3">
        Review is not left to a single pass. Writesonic runs multiple expert-role reviews for each draft. One
        pass checks for technical accuracy, another for tone and SEO structure. A second expert or AI agent
        reviews the draft to catch what the first missed. Quality gates are set for factual accuracy, brand
        safety, and fluency. If a draft falls short, the system revises and re-checks it before you see it.
        This means less time spent fixing errors and more time spent publishing.</p>
      <p className="text-md text-white shadow-text pt-3">
        The last steps are polish and packaging. Writesonic adds schema markup (FAQ, HowTo, Article) and
        structured data so both search engines and AI engines can read and cite your content. It generates
        internal and external links, hero and section images, and alt text that match your brand style. Each
        article comes out ready to publish, no placeholder text, no missing sections. One-click export pushes
        the work into your CMS (WordPress, Sanity, Contentful, Webflow, Ghost), or you can copy it into your
        editor’s workflow.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams in South Florida who need to move fast, this pipeline cuts the content cycle from weeks to
        hours. A single owner or small team can push out blogs, landing pages, and product descriptions at a
        pace that matches much larger competitors. The review process is built in, so you do not have to
        babysit the AI or rewrite its output. The mechanics are tuned for scale, but the controls, brand
        voice, factual accuracy, structure, are strict enough to hold quality across hundreds or thousands of
        pieces.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is why Writesonic does more than just write. It closes the gap between research, drafting,
        review, and publishing. For a business owner who comes back to that blank screen on a Friday
        afternoon, the pipeline means the blog is not just started, it is finished, reviewed, and ready to go
        live before the weekend. No more bottlenecks, no more missed opportunities, and no more wasted hours
        on manual fixes.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-happens-inside-writesonics-content-pipeline" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Happens Inside Writesonic’s Content Pipeline
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
              <h2 id="what-happens-inside-writesonics-content-pipeline-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Happens Inside Writesonic’s Content Pipeline
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
