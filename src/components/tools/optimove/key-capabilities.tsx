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
              <p className="text-md text-white shadow-text pt-3">Optimove offers a range of capabilities that are crucial for effective automated ad spend optimization. These
                features are designed to provide businesses with the tools they need to maximize their marketing efforts while
                minimizing unnecessary costs.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Predictive Analytics: Optimove uses AI-driven predictive analytics to forecast customer behavior and
                  preferences. This allows businesses to tailor their ad campaigns more effectively, ensuring that they reach
                  the right audience with the right message at the right time.</li>
                <li>Customer Segmentation: The platform enables detailed customer segmentation, allowing businesses to target
                  specific groups with personalized marketing strategies. This leads to more efficient ad spend and higher
                  conversion rates.</li>
                <li>Multi-Channel Campaign Management: Optimove supports the management of advertising campaigns across multiple
                  channels, ensuring consistent messaging and strategy. This capability helps businesses maintain a cohesive
                  brand presence while optimizing their ad spend across different platforms.</li>
                <li>Real-Time Data Analysis: With real-time data analysis, Optimove provides actionable insights that help
                  businesses make informed decisions quickly. This feature is essential for adapting to market changes and
                  optimizing ad spend in real-time.</li>
                <li>Automated Campaign Optimization: The platform automates the process of adjusting and optimizing ad campaigns
                  based on performance metrics. This reduces the need for manual intervention and helps businesses focus on
                  strategic planning.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">These capabilities make Optimove a comprehensive solution for businesses looking to enhance their ad spend
                efficiency. By automating complex processes and providing deep insights, Optimove helps companies achieve better
                results with less effort.</p>
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
              <p className="text-md text-white shadow-text pt-3">Optimove offers a range of capabilities that are crucial for effective automated ad spend optimization. These
                features are designed to provide businesses with the tools they need to maximize their marketing efforts while
                minimizing unnecessary costs.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Predictive Analytics: Optimove uses AI-driven predictive analytics to forecast customer behavior and
                  preferences. This allows businesses to tailor their ad campaigns more effectively, ensuring that they reach
                  the right audience with the right message at the right time.</li>
                <li>Customer Segmentation: The platform enables detailed customer segmentation, allowing businesses to target
                  specific groups with personalized marketing strategies. This leads to more efficient ad spend and higher
                  conversion rates.</li>
                <li>Multi-Channel Campaign Management: Optimove supports the management of advertising campaigns across multiple
                  channels, ensuring consistent messaging and strategy. This capability helps businesses maintain a cohesive
                  brand presence while optimizing their ad spend across different platforms.</li>
                <li>Real-Time Data Analysis: With real-time data analysis, Optimove provides actionable insights that help
                  businesses make informed decisions quickly. This feature is essential for adapting to market changes and
                  optimizing ad spend in real-time.</li>
                <li>Automated Campaign Optimization: The platform automates the process of adjusting and optimizing ad campaigns
                  based on performance metrics. This reduces the need for manual intervention and helps businesses focus on
                  strategic planning.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">These capabilities make Optimove a comprehensive solution for businesses looking to enhance their ad spend
                efficiency. By automating complex processes and providing deep insights, Optimove helps companies achieve better
                results with less effort.</p>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
