
export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When deploying Quaderno, the data structure and mapping decisions you make upfront are critical to
        ensuring a smooth integration and effective&nbsp;tax
        compliance. These decisions involve determining how your existing sales and financial
        data will be organized and connected within Quaderno&#39;s system.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is to map out your existing data sources and how they will interface with Quaderno. This
        includes identifying all platforms and payment processors you currently use, such as WooCommerce, Amazon
        FBA, or custom integrations. Quaderno&#39;s&nbsp;API&nbsp;and
        CSV import capabilities allow you to bring in sales data from these sources, ensuring that all
        transactions are accounted for and tax calculations are accurate.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, you need to define the data fields that Quaderno will use to automate tax calculations and
        generate reports. This includes customer location data, product types, and sales amounts. Accurate
        mapping of these fields is essential for Quaderno to apply the correct tax rates and generate compliant
        invoices. It&#39;s important to ensure that all necessary data is captured and correctly formatted to
        avoid compliance issues.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another important decision is how to handle multi-currency transactions. Quaderno supports
        multi-currency handling, allowing you to manage sales from different regions without manual conversion.
        This feature is particularly useful for businesses with international customers, as it simplifies the
        process of applying the correct tax rates based on the customer&#39;s location and currency.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, consider how you will manage data updates and maintenance. Quaderno&#39;s system is designed to
        automatically sync with your sales platforms, but regular checks are necessary to ensure data integrity.
        Establishing a routine for data validation and updates will help maintain accurate tax reporting and
        compliance over time.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-structure-and-mapping-decisions-for-quaderno-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Structure and Mapping Decisions for Quaderno Deployment
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-structure-and-mapping-decisions-for-quaderno-deployment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Structure and Mapping Decisions for Quaderno Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
