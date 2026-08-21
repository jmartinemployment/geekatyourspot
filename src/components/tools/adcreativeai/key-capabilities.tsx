import Image from "next/image";

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
              <p className="text-md text-white shadow-text pt-3">AdCreative.ai offers a suite of capabilities designed to optimize ad spend through intelligent automation and
                creative enhancement. These capabilities ensure that businesses can focus on strategic growth while the platform
                handles the complexities of ad management.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Automated Ad Creation: AdCreative.ai uses AI to generate ad creatives automatically, reducing the need for
                  manual design work. This feature ensures that ads are not only visually appealing but also tailored to the
                  target audience&#39;s preferences and behaviors.</li>
                <li>Real-Time Performance Analysis: The platform continuously monitors ad performance, providing insights and
                  recommendations for improvement. This allows marketers to make informed decisions quickly, adapting
                  campaigns to maximize effectiveness.</li>
                <li>Audience Targeting Optimization: By analyzing data patterns, AdCreative.ai identifies the most promising
                  audience segments and adjusts targeting parameters accordingly. This helps in reaching the most relevant
                  potential customers, enhancing conversion rates.</li>
                <li>Integration with Existing Tools: AdCreative.ai integrates seamlessly with other marketing platforms such as
                  HubSpot and Salesforce Einstein, ensuring that businesses can leverage their existing data and workflows
                  without disruption.</li>
                <li>Cost Efficiency: By automating the ad creation and optimization process, AdCreative.ai reduces the overall
                  cost of managing ad campaigns. This allows businesses to allocate more of their budget towards strategic
                  initiatives rather than operational overhead.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">These capabilities make AdCreative.ai a powerful tool for businesses looking to enhance their advertising strategies
                and achieve better results from their marketing investments.</p>
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
              <p className="text-md text-white shadow-text pt-3">AdCreative.ai offers a suite of capabilities designed to optimize ad spend through intelligent automation and
                creative enhancement. These capabilities ensure that businesses can focus on strategic growth while the platform
                handles the complexities of ad management.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Automated Ad Creation: AdCreative.ai uses AI to generate ad creatives automatically, reducing the need for
                  manual design work. This feature ensures that ads are not only visually appealing but also tailored to the
                  target audience&#39;s preferences and behaviors.</li>
                <li>Real-Time Performance Analysis: The platform continuously monitors ad performance, providing insights and
                  recommendations for improvement. This allows marketers to make informed decisions quickly, adapting
                  campaigns to maximize effectiveness.</li>
                <li>Audience Targeting Optimization: By analyzing data patterns, AdCreative.ai identifies the most promising
                  audience segments and adjusts targeting parameters accordingly. This helps in reaching the most relevant
                  potential customers, enhancing conversion rates.</li>
                <li>Integration with Existing Tools: AdCreative.ai integrates seamlessly with other marketing platforms such as
                  HubSpot and Salesforce Einstein, ensuring that businesses can leverage their existing data and workflows
                  without disruption.</li>
                <li>Cost Efficiency: By automating the ad creation and optimization process, AdCreative.ai reduces the overall
                  cost of managing ad campaigns. This allows businesses to allocate more of their budget towards strategic
                  initiatives rather than operational overhead.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">These capabilities make AdCreative.ai a powerful tool for businesses looking to enhance their advertising strategies
                and achieve better results from their marketing investments.</p>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
