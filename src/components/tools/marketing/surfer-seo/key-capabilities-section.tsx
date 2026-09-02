import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function KeyCapabilitiesSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Surfer SEO is equipped with a variety of features that make it a standout tool for <GlossaryLink slug="search-engine-optimization">SEO blog</GlossaryLink> and article generation. Its capabilities are tailored to help users create content that is not only engaging but also optimized for search engines.
      </p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Content Editor: Surfer SEO&apos;s Content Editor is designed to guide users in crafting articles that align with SEO best practices. It analyzes top-ranking pages for a given keyword and provides real-time feedback on content structure, keyword usage, and overall optimization.</li>
        <li>SERP Analyzer: This feature allows users to examine the search engine results pages (SERPs) for their target keywords. By understanding what is currently ranking, users can tailor their content to meet or exceed the standards of the top-performing pages.</li>
        <li><GlossaryLink slug="keyword-density">Keyword Research</GlossaryLink>: Surfer SEO provides robust keyword research capabilities, enabling users to identify high-potential keywords that can drive traffic and engagement. The tool offers insights into search volume, keyword difficulty, and related queries.</li>
        <li>Content Planner: With the Content Planner, users can organize their content strategy by identifying content gaps and opportunities. This feature suggests topics and outlines based on current trends and user interests.</li>
        <li>Audit Tool: Surfer SEO&apos;s Audit Tool is designed to help users improve existing content by providing actionable recommendations. It analyzes the content against top competitors and suggests changes to enhance its SEO performance.</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-capabilities">
                Key Capabilities
              </h2>
            </div>
            <div className="col-span-5"></div>
            <div className="col-span-12">
              {body}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-capabilities-desktop">
                Key Capabilities
              </h2>
              {body}
            </div>
            <div className="col-span-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
