import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function WhenToUseSection() {
  return (
    <section className="min-h-screen bg-[#8C4E2A] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="when-to-use">
              When to Use
            </h2>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Keyword Insights is particularly beneficial for businesses that are looking to enhance their <GlossaryLink slug="search-engine-optimization">SEO blog</GlossaryLink> and article generation processes. If you find that your current <GlossaryLink slug="marketing-automation">content creation</GlossaryLink> efforts are not yielding the desired search engine rankings, it may be time to consider integrating Keyword Insights into your strategy.
            </p>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Businesses facing challenges in identifying effective keywords and content gaps will benefit from the tool&apos;s automated research capabilities. Companies aiming to outperform competitors in search rankings can leverage the tool&apos;s competitor analysis features to refine their SEO strategies.
            </p>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Organizations that wish to streamline their content creation workflow and reduce the time spent on manual <GlossaryLink slug="keyword-density">keyword research</GlossaryLink> will find Keyword Insights invaluable. Small businesses with limited resources seeking to maximize their content marketing <GlossaryLink slug="kpi">ROI</GlossaryLink> can use Keyword Insights to focus efforts on high-impact areas.
            </p>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              In summary, Keyword Insights is a powerful tool for any business looking to optimize their content creation process and improve their SEO performance. By automating keyword research and providing actionable insights, it allows businesses to focus more on strategic content development and less on the technical intricacies of SEO management.
            </p>
          </div>
          <div className="col-span-5"></div>
        </div>
      </div>
    </section>
  );
}
