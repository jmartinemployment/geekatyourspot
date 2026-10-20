
export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When deploying TaxValet, one of the most critical steps is setting up the correct data structure and
        mapping. This ensures that the software can accurately process and manage
        sales&nbsp;tax compliance&nbsp;across multiple
        jurisdictions. The initial setup involves detailed planning to align TaxValet&#39;s capabilities with
        the business&#39;s existing data architecture.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first consideration is the nexus determination, which involves identifying where the business has
        tax obligations. TaxValet provides a comprehensive nexus analysis to pinpoint these obligations
        accurately. This analysis is crucial as it informs the mapping of sales data to the correct tax
        jurisdictions. Without accurate nexus mapping, businesses risk non-compliance and potential penalties.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another important aspect is the categorization of products and services. TaxValet requires precise
        product taxability mapping to ensure that each item is taxed correctly according to state-specific
        rules. This step involves defining product categories within TaxValet and linking them to the
        corresponding tax codes. Accurate product mapping prevents errors in tax calculation and ensures
        compliance with varying state laws.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration with existing sales channels is also essential. TaxValet&#39;s data mapping process includes
        linking sales data from platforms like Shopify or Amazon, ensuring that all transactions are captured
        and reported accurately. This integration is facilitated by TaxValet&#39;s ability to seamlessly connect
        with various e-commerce platforms, providing a comprehensive view of sales across all channels.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, ongoing data monitoring and updates are a part of the deployment process. As tax laws change,
        TaxValet&#39;s system needs to be updated to reflect these changes. This requires a robust data
        management strategy to ensure that all updates are implemented without disrupting business operations.
        TaxValet&#39;s proactive approach to monitoring ensures that businesses remain compliant with the latest
        regulations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC plays a vital role in this data setup process. Their expertise in data mapping and
        system integration helps businesses configure TaxValet to meet their specific needs. By ensuring that
        the data structure is correctly set up from the start, Geek @ Your Spot LLC helps businesses avoid costly
        errors and ensures that TaxValet operates smoothly and efficiently.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-structure-and-mapping-key-considerations-for-taxvalet-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Structure and Mapping: Key Considerations for TaxValet Deployment
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
              <h2 id="data-structure-and-mapping-key-considerations-for-taxvalet-deployment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Structure and Mapping: Key Considerations for TaxValet Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
