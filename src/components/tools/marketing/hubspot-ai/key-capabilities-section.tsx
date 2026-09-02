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
              HubSpot AI comes equipped with a range of features that empower businesses to create effective, <GlossaryLink slug="search-engine-optimization">SEO</GlossaryLink>-friendly content with less effort. Here are some of the key capabilities that make HubSpot AI a valuable tool for content creators:
            </p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
              <li>Automated <GlossaryLink slug="keyword-density">Keyword Research</GlossaryLink>: HubSpot AI simplifies the process of identifying relevant keywords by analyzing search trends and suggesting high-impact keywords that can enhance content visibility. This feature ensures that your content aligns with current search engine algorithms, increasing the likelihood of higher rankings.</li>
              <li>Content Drafting and Optimization: The tool assists in generating initial drafts of content, providing a solid foundation that can be further refined. It also offers optimization suggestions to ensure that the content is SEO-friendly, including recommendations for keyword placement, meta descriptions, and title tags.</li>
              <li>Performance <GlossaryLink slug="analytics">Analytics</GlossaryLink>: HubSpot AI provides insights into how your content is performing across various metrics. By tracking engagement rates, traffic, and <GlossaryLink slug="conversion-funnel">conversion rates</GlossaryLink>, businesses can make informed decisions on how to adjust their content strategy for better results.</li>
              <li>Integration with HubSpot CRM: The AI tool integrates seamlessly with HubSpot&apos;s CRM, allowing for a unified approach to marketing and sales. This integration helps ensure that content strategies are aligned with overall business goals, providing a cohesive experience for both marketers and customers.</li>
              <li>User-Friendly Interface: Designed with ease of use in mind, HubSpot AI offers an intuitive interface that makes it accessible to users with varying levels of technical expertise. This ensures that businesses can quickly adopt the tool and start seeing results without a steep learning curve.</li>
            </ul>
          </div>
          <div className="col-span-5"></div>
        </div>
      </div>
    </section>
  );
}
