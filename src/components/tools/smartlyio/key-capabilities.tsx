import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function KeyCapabilitiesSection() {
  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5">
            <div className="col-span-7">
              <h2 className="text-white text-left text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Key Capabilities</h2>
            </div>
            <div className="col-span-5"></div>
            <div className="col-span-12">
              <p className="text-md text-white shadow-text pt-3">Smartly.io&#39;s capabilities are tailored to meet the needs of modern marketers who require efficient and effective
                ad spend optimization. Here are the key capabilities that set Smartly.io apart:</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Automated Bid Adjustments: Smartly.io uses <GlossaryLink slug="machine-learning">machine learning</GlossaryLink> algorithms to automatically adjust bids based on
                  real-time data. This ensures that ad budgets are allocated optimally, targeting the most promising audience
                  segments without manual intervention.</li>
                <li>Creative Optimization: The platform offers <GlossaryLink slug="dynamic-creative-optimization">dynamic creative optimization</GlossaryLink>, allowing marketers to test and
                  implement various ad creatives quickly. This feature helps in identifying which visuals and messages
                  resonate best with the target audience, enhancing engagement and <GlossaryLink slug="conversion-funnel">conversion rates</GlossaryLink>.</li>
                <li>Cross-Platform Management: With Smartly.io, businesses can manage ad campaigns across multiple social media
                  platforms from one centralized location. This simplifies the process of campaign management and ensures
                  consistent messaging across channels.</li>
                <li>Performance Analytics: Smartly.io provides comprehensive analytics tools that offer insights into campaign
                  performance. These analytics help marketers understand what strategies are working and where adjustments are
                  needed, supporting <GlossaryLink slug="analytics">data-driven</GlossaryLink> decision-making.</li>
                <li>Integration with Other Tools: Smartly.io integrates with other marketing and CRM tools like HubSpot and
                  Salesforce Einstein, enhancing the overall marketing ecosystem. This integration ensures that data flows
                  seamlessly between platforms, supporting a unified marketing strategy.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">These capabilities are designed to help businesses reduce wasted ad spend, improve ROI, and achieve better marketing
                outcomes. By automating key aspects of ad management, Smartly.io not only saves time but also enhances the precision
                and effectiveness of marketing efforts.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Key Capabilities</h2>
              <p className="text-md text-white shadow-text pt-3">Smartly.io&#39;s capabilities are tailored to meet the needs of modern marketers who require efficient and effective
                ad spend optimization. Here are the key capabilities that set Smartly.io apart:</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Automated Bid Adjustments: Smartly.io uses machine learning algorithms to automatically adjust bids based on
                  real-time data. This ensures that ad budgets are allocated optimally, targeting the most promising audience
                  segments without manual intervention.</li>
                <li>Creative Optimization: The platform offers dynamic creative optimization, allowing marketers to test and
                  implement various ad creatives quickly. This feature helps in identifying which visuals and messages
                  resonate best with the target audience, enhancing engagement and conversion rates.</li>
                <li>Cross-Platform Management: With Smartly.io, businesses can manage ad campaigns across multiple social media
                  platforms from one centralized location. This simplifies the process of campaign management and ensures
                  consistent messaging across channels.</li>
                <li>Performance Analytics: Smartly.io provides comprehensive analytics tools that offer insights into campaign
                  performance. These analytics help marketers understand what strategies are working and where adjustments are
                  needed, supporting data-driven decision-making.</li>
                <li>Integration with Other Tools: Smartly.io integrates with other marketing and CRM tools like HubSpot and
                  Salesforce Einstein, enhancing the overall marketing ecosystem. This integration ensures that data flows
                  seamlessly between platforms, supporting a unified marketing strategy.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">These capabilities are designed to help businesses reduce wasted ad spend, improve ROI, and achieve better marketing
                outcomes. By automating key aspects of ad management, Smartly.io not only saves time but also enhances the precision
                and effectiveness of marketing efforts.</p>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
