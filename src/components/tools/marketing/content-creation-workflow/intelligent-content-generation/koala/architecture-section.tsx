
export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Koala’s core is built around structured business knowledge, persistent context, and seamless
        integrations. Every feature is designed to ensure that content is not just produced quickly, but also
        stays true to your business and connects directly with your existing marketing stack.</p>
      <p className="text-md text-white shadow-text pt-3">
        At the heart of Koala is the Brand DNA knowledge base. This is more than a simple profile, it is a
        living store of your services, credentials, FAQs, brand tone, and audience details. Koala builds this
        knowledge base by crawling your website, importing data from Google Maps, or letting you fill in a
        structured template. For multi-location companies, each branch can have its own Brand DNA, so content
        for your Miami office never gets mixed up with what you do in Fort Lauderdale.</p>
      <p className="text-md text-white shadow-text pt-3">
        Koala’s persistent memory is brand-scoped, not user-scoped. This means if you manage several sites or
        service lines, each one’s context stays separate. The platform remembers your business’s goals and
        past recommendations, so you never have to repeat yourself or risk context bleed between projects.
        This is a direct fix for the pain point where a Palm Beach accountant has to retype their credentials
        for every new article or a landscaping company ends up with conflicting descriptions across pages.</p>
      <p className="text-md text-white shadow-text pt-3">
        Koala’s agent connects directly to your Google Search Console and Analytics accounts. This live data
        connection means the system can see what keywords are driving traffic, what gaps exist in your
        coverage, and how your competitors are performing. It uses this information to suggest what to publish
        next and where to focus your efforts. The integration is browser-based, no manual
        exports,&nbsp;API&nbsp;keys,
        or third-party logins to manage.</p>
      <p className="text-md text-white shadow-text pt-3">
        For publishing, Koala integrates natively with WordPress, Shopify, Webflow, and Ghost. This lets you
        push content live with one click, without copying and pasting drafts or fixing formatting errors. For
        businesses with custom needs, Koala supports webhooks and a
        public&nbsp;API, so
        you can deliver content wherever you need it. The
        same&nbsp;API&nbsp;allows
        you to automate content creation workflows at scale, connecting Koala’s generation engine to your own
        applications or tools.</p>
      <p className="text-md text-white shadow-text pt-3">
        KoalaWriter, the main content engine, is built to produce full, publish-ready articles with real-time
        SERP analysis, internal linking, and brand-aware writing. KoalaImages generates high-quality,
        brand-matched visuals in multiple styles, and can scale across many prompts for batch production.
        KoalaLinks handles internal linking and schema markup, ensuring your site structure supports SEO and
        that every new page is connected from day one.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform’s architecture is browser-first, there is nothing to install, and every feature runs on
        any operating system. Model costs are included in the plan, with credits for OpenAI, Anthropic, and
        Google models metered inside Koala. This means you see your usage and costs upfront, with no hidden
        provider fees or separate invoices. For teams, Koala supports organizing content by folders and
        streamlining collaboration, so related articles stay grouped and team members can work together
        efficiently.</p>
      <p className="text-md text-white shadow-text pt-3">
        Koala’s entity-focused schema markup is built into every article, helping search engines establish the
        topical relevance of your content. The system identifies entities discussed in each piece and adds
        structured data, making it easier for AI search and traditional SEO to understand your site’s context
        and relationships. This is especially valuable for local businesses, where neighborhood-specific
        landing pages, real service area details, and up-to-date credentials matter for both trust and
        visibility.</p>
      <p className="text-md text-white shadow-text pt-3">
        The architecture also supports a strategy layer on top of content grading. Koala’s agent grades
        content not just for keyword coverage, but for strategic fit against your business goals and current
        market position. This helps ensure your content plan is always aligned with what will actually drive
        growth, not just what fills a calendar.</p>
      <p className="text-md text-white shadow-text pt-3">
        For advanced users,
        Koala’s&nbsp;API&nbsp;access
        exposes the same powerful AI models used in the web interface. You can generate complete articles with
        a
        single&nbsp;API&nbsp;call,
        maintain quality across programmatically generated content, and connect AI assistants to the same
        tools through Koala’s Multi-Channel Platform (MCP). This flexibility means Koala can fit into both
        simple and complex content operations, scaling as your business grows.</p>
      <p className="text-md text-white shadow-text pt-3">
        This architecture is what makes Koala more than a writing tool. It is a full content operating system
        built to store your real business knowledge, connect to your live marketing data, and power automated
        content workflows that keep your brand consistent and visible across every channel you use.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="koalas-platform-architecture-what-it-stores-connects-and-powers" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Koala’s Platform Architecture: What It Stores, Connects, and Powers
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
              <h2 id="koalas-platform-architecture-what-it-stores-connects-and-powers-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Koala’s Platform Architecture: What It Stores, Connects, and Powers
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
