export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="frequently-asked-questions" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Scalenut help a business discover and plan new content topics?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Scalenut uses automated Topic Discovery to map out entire niches at once. It builds Topic
              Clusters by grouping related keywords, so small businesses can quickly see and plan which areas
              to cover to build topical authority.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Scalenut’s topic planning look at competitor and search engine data?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. Scalenut’s Long-Form Assistant creates content outlines by pulling real-time competitor
              data from search engine results. This helps ensure your planning is based on what is already
              working in your market.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How is Scalenut&#39;s topic planning structured to target conversational AI engines?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Scalenut is built for Generative Engine Optimization. Its GEO Action Center formats topics and
              outlines so they are easy for large language models to read and cite. This helps your content
              get picked up not just by Google, but also by AI tools like ChatGPT, Perplexity, Gemini, Claude,
              and Grok.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can a business track how effectively their planned topics are appearing in AI search results?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Cruise Mode is Scalenut’s automated content creation assistant. After planning, it uses
              competitor and search data to quickly create SEO blogs that are ready to perform in both
              traditional and AI-powered search results.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does the software integrate with other parts of the content optimization process?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. Scalenut is a full GEO stack. It covers topic discovery, GEO Scoring, Content Optimization,
              Internal Link Mapping, and offers an automated Backlinks Marketplace. This means small teams can
              manage their whole content strategy in one place.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
