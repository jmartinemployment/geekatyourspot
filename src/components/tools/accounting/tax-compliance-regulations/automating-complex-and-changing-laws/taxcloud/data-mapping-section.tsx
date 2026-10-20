export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When deploying TaxCloud, getting the data structure and mapping right from the start is crucial for
        seamless operation. This process begins with an in-depth analysis of your existing data architecture.
        Geek @ Your Spot LLC works closely with you to understand how your data is currently organized and how it
        interacts with your sales processes. This understanding is vital for aligning your data with
        TaxCloud&#39;s requirements.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first decision involves mapping your product categories and tax codes. TaxCloud requires precise
        categorization to apply the correct tax rates across different jurisdictions. Geek @ Your Spot LLC aids in
        translating your current product listings into TaxCloud&#39;s format, ensuring that each item is
        accurately categorized for tax purposes. This mapping process is essential for maintaining compliance
        and avoiding potential tax discrepancies.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, you need to consider how your sales data is captured and stored. TaxCloud integrates with various
        e-commerce platforms, so it&#39;s important to ensure that your sales data flows seamlessly into the
        system. Geek @ Your Spot LLC assists in setting up these integrations, ensuring that data from platforms
        like Shopify or WooCommerce is accurately captured and processed by TaxCloud. This integration is key to
        maintaining real-time tax calculations and reporting.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another critical aspect is nexus tracking. TaxCloud&#39;s ability to monitor economic nexus across
        multiple states depends on accurate data input. Geek @ Your Spot LLC configures your data systems to track
        sales activity against state-specific thresholds, ensuring that you are notified when you approach or
        exceed nexus requirements. This proactive approach helps prevent compliance issues and potential
        penalties.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, the mapping process includes setting up reporting structures. TaxCloud generates detailed
        reports that provide insights into your tax obligations and compliance status. Geek @ Your Spot LLC
        configures these reports to match your business&#39;s reporting needs, allowing you to access the
        information required for decision-making and regulatory compliance. This tailored reporting ensures that
        you have a clear view of your tax landscape at all times.</p>
      <p className="text-md text-white shadow-text pt-3">
        In conclusion, effective data structure and mapping are foundational to a successful TaxCloud
        deployment. By working with Geek @ Your Spot LLC, you ensure that your data is correctly aligned with
        TaxCloud&#39;s systems, enabling accurate tax calculations and compliance across all sales channels.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-structure-and-mapping-for-taxcloud-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Structure and Mapping for TaxCloud Deployment
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
              <h2 id="data-structure-and-mapping-for-taxcloud-deployment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Structure and Mapping for TaxCloud Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
