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
              Keyword Insights offers a range of features that empower businesses to enhance their content creation processes effectively. Here are some of the key capabilities that make it a standout tool for SEO blog and article generation:
            </p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
              <li>Keyword Research Automation: Keyword Insights automates the process of identifying relevant keywords by analyzing search trends and competition. This feature saves significant time and effort compared to manual research methods.</li>
              <li>Content Gap Analysis: The tool helps identify content opportunities by highlighting gaps in existing content. This ensures that businesses can create content that fills these gaps, increasing the chances of ranking higher in search engine results.</li>
              <li>Performance Tracking: Keyword Insights allows users to track the performance of their chosen keywords over time. This helps in adjusting strategies based on what is working and what is not, ensuring continuous optimization of content.</li>
              <li>Competitor Analysis: By providing insights into competitors&apos; keyword strategies, Keyword Insights enables businesses to understand the competitive landscape better and refine their own SEO tactics accordingly.</li>
              <li>Integration Capabilities: The tool can integrate with other platforms, allowing for seamless data flow and enhanced functionality. This integration ensures that businesses can leverage multiple tools in their content strategy without redundancy.</li>
            </ul>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              These capabilities collectively help businesses not only create content more efficiently but also ensure that the content is aligned with the latest SEO best practices. By using Keyword Insights, businesses can achieve a more targeted approach to content creation, ultimately leading to better engagement and higher conversion rates.
            </p>
          </div>
          <div className="col-span-5"></div>
        </div>
      </div>
    </section>
  );
}
