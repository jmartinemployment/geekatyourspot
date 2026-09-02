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
              <p className="text-md text-white shadow-text pt-3">Salesforce Einstein offers a suite of capabilities designed to optimize ad spend through intelligent automation and
                data analysis. These capabilities are essential for businesses looking to enhance their marketing strategies and
                achieve better <GlossaryLink slug="kpi">ROI</GlossaryLink>.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li><GlossaryLink slug="analytics">Predictive Analytics</GlossaryLink>: Salesforce Einstein uses <GlossaryLink slug="machine-learning">machine learning</GlossaryLink> algorithms to predict future trends and
                  customer behaviors. This capability allows businesses to anticipate market changes and adjust their ad
                  strategies accordingly, minimizing wasted spend and maximizing impact.</li>
                <li>AI-Powered Insights: The platform provides actionable insights by analyzing customer data and identifying
                  key patterns. These insights help marketers make informed decisions about where to allocate their ad budgets
                  for the greatest effect.</li>
                <li>Seamless Integration: Salesforce Einstein integrates with other marketing tools like Advantage, Omneky, and
                  Smartly.io, enhancing its ability to optimize ad campaigns across multiple platforms. This interoperability
                  ensures that businesses can leverage existing tools alongside Salesforce Einstein for a more comprehensive
                  approach to <GlossaryLink slug="dynamic-creative-optimization">ad spend optimization</GlossaryLink>.</li>
                <li>Automated Campaign Management: By automating the management of ad campaigns, Salesforce Einstein reduces the
                  need for constant manual adjustments. This feature is particularly beneficial for businesses with limited
                  resources, as it saves time and reduces the risk of human error.</li>
                <li>Real-Time Data Processing: The platform processes data in real-time, allowing businesses to respond quickly
                  to changes in the market. This capability ensures that ad strategies remain relevant and effective, even in
                  rapidly changing environments.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">These capabilities make Salesforce Einstein a powerful tool for businesses looking to optimize their ad spend and
                achieve better marketing outcomes. By leveraging AI, businesses can focus on strategic goals rather than getting
                bogged down in the details of campaign management.</p>
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
              <p className="text-md text-white shadow-text pt-3">Salesforce Einstein offers a suite of capabilities designed to optimize ad spend through intelligent automation and
                data analysis. These capabilities are essential for businesses looking to enhance their marketing strategies and
                achieve better ROI.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Predictive Analytics: Salesforce Einstein uses machine learning algorithms to predict future trends and
                  customer behaviors. This capability allows businesses to anticipate market changes and adjust their ad
                  strategies accordingly, minimizing wasted spend and maximizing impact.</li>
                <li>AI-Powered Insights: The platform provides actionable insights by analyzing customer data and identifying
                  key patterns. These insights help marketers make informed decisions about where to allocate their ad budgets
                  for the greatest effect.</li>
                <li>Seamless Integration: Salesforce Einstein integrates with other marketing tools like Advantage, Omneky, and
                  Smartly.io, enhancing its ability to optimize ad campaigns across multiple platforms. This interoperability
                  ensures that businesses can leverage existing tools alongside Salesforce Einstein for a more comprehensive
                  approach to ad spend optimization.</li>
                <li>Automated Campaign Management: By automating the management of ad campaigns, Salesforce Einstein reduces the
                  need for constant manual adjustments. This feature is particularly beneficial for businesses with limited
                  resources, as it saves time and reduces the risk of human error.</li>
                <li>Real-Time Data Processing: The platform processes data in real-time, allowing businesses to respond quickly
                  to changes in the market. This capability ensures that ad strategies remain relevant and effective, even in
                  rapidly changing environments.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">These capabilities make Salesforce Einstein a powerful tool for businesses looking to optimize their ad spend and
                achieve better marketing outcomes. By leveraging AI, businesses can focus on strategic goals rather than getting
                bogged down in the details of campaign management.</p>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
