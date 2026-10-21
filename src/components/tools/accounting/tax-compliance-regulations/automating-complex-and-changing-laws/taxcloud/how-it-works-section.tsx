
export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        TaxCloud operates by automating the intricate processes
        of&nbsp;tax
        compliance, making it seamless for businesses to manage sales tax across multiple
        jurisdictions. At its core, TaxCloud automates tax calculations, filings, and remittances, significantly
        reducing the manual workload and minimizing errors. This automation is particularly beneficial for
        businesses operating in states with complex tax laws, such as Florida, where staying compliant can be a
        daunting task.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform begins by integrating with a business&#39;s existing e-commerce systems, such as Shopify,
        WooCommerce, or BigCommerce, to capture transaction data in real-time. This integration ensures that
        sales tax is calculated accurately at the point of sale, based on the customer&#39;s location.
        TaxCloud&#39;s real-time calculation engine applies the correct sales tax rate by considering state,
        county, and local district taxes, which is crucial for businesses selling across multiple states.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once sales tax is calculated, TaxCloud automatically prepares and submits tax returns to the appropriate
        state tax agencies. This automated filing process includes generating the necessary reports and ensuring
        that all filings are done on time, thus avoiding penalties. TaxCloud&#39;s AutoFile feature guarantees
        that tax remittance is handled efficiently, ensuring that payments are made accurately and punctually.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another critical aspect of TaxCloud&#39;s mechanics is its nexus tracking capability. The platform
        continuously monitors sales activity against state nexus thresholds, alerting businesses when they are
        approaching or have crossed these thresholds. This proactive approach allows businesses to register and
        comply with tax obligations before any legal issues arise.</p>
      <p className="text-base text-white shadow-text pt-3">
        TaxCloud&#39;s system also supports exemption certificate management, which streamlines the process of
        collecting, validating, and storing customer exemption certificates. This feature reduces the risk of
        audit penalties by ensuring that all exemption documentation is accurate and up-to-date.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="taxcloud-s-operational-mechanics" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                TaxCloud&#39;s Operational Mechanics
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="taxcloud-s-operational-mechanics-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                TaxCloud&#39;s Operational Mechanics
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
