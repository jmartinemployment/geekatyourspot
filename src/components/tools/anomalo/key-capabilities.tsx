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
              <p className="text-md text-white shadow-text pt-3">Anomalo offers a range of key capabilities that are instrumental in supporting automated <GlossaryLink slug="dynamic-creative-optimization">ad spend optimization</GlossaryLink>.
                These features are designed to ensure data accuracy and integrity, which are foundational for any <GlossaryLink slug="analytics">data-driven</GlossaryLink>
                marketing strategy. Here are some of the standout capabilities of Anomalo:</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Automated Data Monitoring: Anomalo continuously monitors datasets for anomalies. This capability allows
                  businesses to detect issues before they impact marketing campaigns, ensuring that data-driven decisions are
                  based on accurate information.</li>
                <li>Flexible Integration: Anomalo integrates with various data platforms, including Adobe Mix Modeler and Basis
                  Technologies. This flexibility ensures that businesses can maintain data quality across all their tools,
                  enhancing the effectiveness of their ad spend optimization efforts.</li>
                <li>Root Cause Analysis: When anomalies are detected, Anomalo provides detailed insights into the root causes.
                  This feature is crucial for quickly addressing data issues and minimizing their impact on marketing
                  performance.</li>
                <li>Customizable Alerts: Users can set up alerts tailored to their specific needs, ensuring that they are
                  notified of any critical data issues. This proactive approach helps in maintaining the integrity of
                  marketing datasets.</li>
                <li>Scalability: Anomalo is built to handle datasets of all sizes, making it suitable for both small businesses
                  and large enterprises. This scalability ensures that as your marketing efforts grow, Anomalo can continue to
                  provide reliable data monitoring.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">These capabilities make Anomalo a critical component for businesses focused on optimizing their ad spend. By
                ensuring data quality, Anomalo supports the effective use of AI tools like Madgicx and Advantage, which rely on
                accurate data to drive marketing success.</p>
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
              <p className="text-md text-white shadow-text pt-3">Anomalo offers a range of key capabilities that are instrumental in supporting automated ad spend optimization.
                These features are designed to ensure data accuracy and integrity, which are foundational for any data-driven
                marketing strategy. Here are some of the standout capabilities of Anomalo:</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Automated Data Monitoring: Anomalo continuously monitors datasets for anomalies. This capability allows
                  businesses to detect issues before they impact marketing campaigns, ensuring that data-driven decisions are
                  based on accurate information.</li>
                <li>Flexible Integration: Anomalo integrates with various data platforms, including Adobe Mix Modeler and Basis
                  Technologies. This flexibility ensures that businesses can maintain data quality across all their tools,
                  enhancing the effectiveness of their ad spend optimization efforts.</li>
                <li>Root Cause Analysis: When anomalies are detected, Anomalo provides detailed insights into the root causes.
                  This feature is crucial for quickly addressing data issues and minimizing their impact on marketing
                  performance.</li>
                <li>Customizable Alerts: Users can set up alerts tailored to their specific needs, ensuring that they are
                  notified of any critical data issues. This proactive approach helps in maintaining the integrity of
                  marketing datasets.</li>
                <li>Scalability: Anomalo is built to handle datasets of all sizes, making it suitable for both small businesses
                  and large enterprises. This scalability ensures that as your marketing efforts grow, Anomalo can continue to
                  provide reliable data monitoring.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">These capabilities make Anomalo a critical component for businesses focused on optimizing their ad spend. By
                ensuring data quality, Anomalo supports the effective use of AI tools like Madgicx and Advantage, which rely on
                accurate data to drive marketing success.</p>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
