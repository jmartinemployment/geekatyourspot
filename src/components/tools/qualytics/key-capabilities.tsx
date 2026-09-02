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
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Automated Data Quality Checks: Qualytics automates the process of checking data quality, ensuring that the
                  information used for <GlossaryLink slug="dynamic-creative-optimization">ad spend optimization</GlossaryLink> is accurate and reliable. This reduces the need for manual data
                  validation, saving time and reducing errors.</li>
                <li>Anomaly Detection: The platform uses <GlossaryLink slug="machine-learning">machine learning</GlossaryLink> algorithms to detect anomalies in data patterns. This
                  helps in identifying potential issues before they impact ad spend decisions, ensuring that campaigns are
                  based on consistent and correct data.</li>
                <li>Seamless Integration: Qualytics integrates smoothly with existing ad management tools like Smartly.io and
                  AdCreative.ai, enhancing their capabilities by providing high-quality data inputs.</li>
                <li>Data Governance: The platform provides comprehensive data governance features, ensuring compliance with data
                  standards and protocols. This is crucial for maintaining trust in the data used for automated ad spend
                  optimization.</li>
                <li>Customizable Alerts: Users can set up alerts for specific data quality issues, allowing for quick action to
                  be taken when anomalies are detected. This proactive approach helps in maintaining the integrity of
                  <GlossaryLink slug="analytics">data-driven</GlossaryLink> decisions.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">Qualytics enhances the effectiveness of automated ad spend optimization tools by ensuring that the underlying data
                is of the highest quality. By integrating with platforms like HubSpot and Advantage, it provides a unified view of
                data quality across various marketing channels. This holistic approach ensures that marketing strategies are based
                on reliable data, leading to more effective campaigns and better allocation of ad budgets.</p>
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
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Automated Data Quality Checks: Qualytics automates the process of checking data quality, ensuring that the
                  information used for ad spend optimization is accurate and reliable. This reduces the need for manual data
                  validation, saving time and reducing errors.</li>
                <li>Anomaly Detection: The platform uses machine learning algorithms to detect anomalies in data patterns. This
                  helps in identifying potential issues before they impact ad spend decisions, ensuring that campaigns are
                  based on consistent and correct data.</li>
                <li>Seamless Integration: Qualytics integrates smoothly with existing ad management tools like Smartly.io and
                  AdCreative.ai, enhancing their capabilities by providing high-quality data inputs.</li>
                <li>Data Governance: The platform provides comprehensive data governance features, ensuring compliance with data
                  standards and protocols. This is crucial for maintaining trust in the data used for automated ad spend
                  optimization.</li>
                <li>Customizable Alerts: Users can set up alerts for specific data quality issues, allowing for quick action to
                  be taken when anomalies are detected. This proactive approach helps in maintaining the integrity of
                  data-driven decisions.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">Qualytics enhances the effectiveness of automated ad spend optimization tools by ensuring that the underlying data
                is of the highest quality. By integrating with platforms like HubSpot and Advantage, it provides a unified view of
                data quality across various marketing channels. This holistic approach ensures that marketing strategies are based
                on reliable data, leading to more effective campaigns and better allocation of ad budgets.</p>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
