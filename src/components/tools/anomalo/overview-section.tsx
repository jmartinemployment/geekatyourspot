import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function OverviewToolSection() {
  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white text-right text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview</h2>
                </div>
            <div className="col-span-12">
              <p className="text-md text-white shadow-text pt-3">Anomalo is an advanced data quality platform designed to ensure the integrity and reliability of your data, which is
                crucial for effective automated <GlossaryLink slug="dynamic-creative-optimization">ad spend optimization</GlossaryLink>. In the realm of digital marketing, where every cent counts,
                having accurate and trustworthy data is essential. Anomalo automatically detects and diagnoses data issues, enabling
                businesses to make informed and timely decisions. This tool is particularly beneficial for companies striving to
                optimize their ad spend by ensuring that the data driving their AI tools, such as Google Ads Smart Bidding, is
                accurate and actionable.</p>
              <p className="text-md text-white shadow-text pt-3">Anomalo works by continuously monitoring datasets to identify anomalies that could impact marketing performance.
                This proactive approach helps businesses in Palm Beach and Broward counties, and beyond, to prevent ineffective ad
                campaigns caused by flawed data. Anomalo&#39;s automated system eliminates the need for manual data checks, saving
                time and reducing the risk of human error. This means that marketing teams can focus on strategic tasks rather than
                getting bogged down by data discrepancies.</p>
              <p className="text-md text-white shadow-text pt-3">In addition to preventing ad spend inefficiencies, Anomalo integrates seamlessly with existing data ecosystems.
                Whether you&#39;re using platforms like Tableau AI / Adobe <GlossaryLink slug="analytics">Analytics</GlossaryLink> or HubSpot, Anomalo ensures that the data
                feeding into these systems is clean and reliable. This integration capability is crucial for businesses looking to
                leverage other <GlossaryLink slug="machine-learning">AI-driven</GlossaryLink> marketing tools effectively. By maintaining high data quality, Anomalo supports the entire
                ad spend optimization process, from data analysis to decision-making.</p>
              <p className="text-md text-white shadow-text pt-3">Overall, Anomalo empowers businesses to optimize their ad spend by providing a robust foundation of accurate data.
                This not only enhances the performance of AI tools like Salesforce Einstein and Omneky, but also ensures that
                marketing budgets are used efficiently, driving better results and maximizing <GlossaryLink slug="kpi">ROI</GlossaryLink>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview</h2>
              <p className="text-md text-white shadow-text pt-3">Anomalo is an advanced data quality platform designed to ensure the integrity and reliability of your data, which is
                crucial for effective automated ad spend optimization. In the realm of digital marketing, where every cent counts,
                having accurate and trustworthy data is essential. Anomalo automatically detects and diagnoses data issues, enabling
                businesses to make informed and timely decisions. This tool is particularly beneficial for companies striving to
                optimize their ad spend by ensuring that the data driving their AI tools, such as Google Ads Smart Bidding, is
                accurate and actionable.</p>
              <p className="text-md text-white shadow-text pt-3">Anomalo works by continuously monitoring datasets to identify anomalies that could impact marketing performance.
                This proactive approach helps businesses in Palm Beach and Broward counties, and beyond, to prevent ineffective ad
                campaigns caused by flawed data. Anomalo&#39;s automated system eliminates the need for manual data checks, saving
                time and reducing the risk of human error. This means that marketing teams can focus on strategic tasks rather than
                getting bogged down by data discrepancies.</p>
              <p className="text-md text-white shadow-text pt-3">In addition to preventing ad spend inefficiencies, Anomalo integrates seamlessly with existing data ecosystems.
                Whether you&#39;re using platforms like Tableau AI / Adobe Analytics or HubSpot, Anomalo ensures that the data
                feeding into these systems is clean and reliable. This integration capability is crucial for businesses looking to
                leverage other AI-driven marketing tools effectively. By maintaining high data quality, Anomalo supports the entire
                ad spend optimization process, from data analysis to decision-making.</p>
              <p className="text-md text-white shadow-text pt-3">Overall, Anomalo empowers businesses to optimize their ad spend by providing a robust foundation of accurate data.
                This not only enhances the performance of AI tools like Salesforce Einstein and Omneky, but also ensures that
                marketing budgets are used efficiently, driving better results and maximizing ROI.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
