
export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        TaxJar&#39;s architecture is designed to support seamless integration with various e-commerce
        and&nbsp;ERP&nbsp;platforms.
        This is achieved through a
        robust&nbsp;API&nbsp;that
        connects with systems like Shopify, Salesforce, and QuickBooks. These integrations are tested and
        certified for quality, ensuring reliable performance and accurate data exchange.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform&#39;s cloud-based infrastructure allows it to handle large volumes of transactions without
        compromising on speed or accuracy. With a 99.99% uptime SLA, TaxJar ensures that businesses can rely on
        its services even during peak sales periods, such as Black Friday or Cyber Monday.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data management is a critical component of TaxJar&#39;s architecture. The platform aggregates
        transaction data from multiple sales channels, generating comprehensive, return-ready reports. These
        reports simplify the filing process by providing a clear overview of sales tax collected and due,
        organized by state and jurisdiction.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security is also a top priority for TaxJar. The platform complies with GDPR and SOC II frameworks,
        ensuring that customer data is protected. TaxJar&#39;s security measures include extensive monitoring
        for unusual activity and integration with AWS security analytics for cohesive data protection.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another key feature is TaxJar&#39;s Economic Nexus Insights dashboard. This tool not only tracks
        economic nexus across states but also provides recommendations for compliance actions. It combines sales
        data to automatically alert businesses when they are nearing nexus thresholds, helping them stay ahead
        of regulatory changes.</p>
      <p className="text-base text-white shadow-text pt-3">
        Overall, TaxJar&#39;s architecture is built to provide a seamless, reliable, and
        secure&nbsp;tax
        compliance&nbsp;solution for small businesses. By integrating with existing systems and
        offering comprehensive data management, TaxJar simplifies the complexities of tax compliance, allowing
        businesses to focus on growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="taxjar-s-architecture-integrations-and-data-management" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                TaxJar&#39;s Architecture: Integrations and Data Management
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="taxjar-s-architecture-integrations-and-data-management-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                TaxJar&#39;s Architecture: Integrations and Data Management
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
