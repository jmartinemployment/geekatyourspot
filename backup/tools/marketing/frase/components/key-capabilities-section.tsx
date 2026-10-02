import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function KeyCapabilitiesSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-capabilities">
              Key Capabilities
            </h2>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Frase offers a range of features that make it a valuable tool for <GlossaryLink slug="search-engine-optimization">SEO blog</GlossaryLink> and article generation. These capabilities are designed to enhance productivity and ensure that the content produced is both engaging and optimized for search engines.
            </p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
              <li>Content Briefs: Frase allows users to create detailed content briefs that guide the writing process. These briefs include essential SEO elements such as target keywords, questions to address, and competitor insights, ensuring that the content is comprehensive and aligned with SEO best practices.</li>
              <li><GlossaryLink slug="machine-learning">AI-Powered</GlossaryLink> Writing: The tool leverages AI to assist in drafting content, providing suggestions and enhancements that improve the quality and relevance of the articles. This feature helps reduce the time spent on writing and editing, allowing teams to publish content faster.</li>
              <li>SEO Optimization: Frase integrates SEO recommendations into the <GlossaryLink slug="marketing-automation">content creation</GlossaryLink> process. It analyzes existing content and suggests improvements to enhance search engine visibility, helping businesses achieve better rankings.</li>
              <li>Content Analytics: Users can track the performance of their content through analytics provided by Frase. This feature offers insights into how well the content is performing in terms of engagement and SEO, enabling <GlossaryLink slug="analytics">data-driven</GlossaryLink> decisions for future content strategies.</li>
              <li>Integration Capabilities: Frase can be integrated with other tools, enhancing its utility by allowing seamless data exchange and workflow automation.</li>
            </ul>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              These capabilities make Frase an indispensable tool for businesses looking to enhance their content marketing efforts. By automating and optimizing various aspects of content creation, Frase ensures that businesses can produce high-quality, SEO-friendly content consistently.
            </p>
          </div>
          <div className="col-span-5"></div>
        </div>
      </div>
    </section>
  );
}
