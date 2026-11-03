
export default function TransformsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        TaxCloud transforms the daunting task of&nbsp;tax
        compliance&nbsp;into a manageable process, removing the heavy lifting from business
        owners&#39; shoulders. By automating tax calculations and filings, TaxCloud saves hours each week that
        would otherwise be spent on manual updates and error corrections. This automation is crucial for small
        businesses that lack the resources to maintain a dedicated tax compliance team.</p>
      <p className="text-base text-white shadow-text pt-3">
        One of the standout features of TaxCloud is its real-time tax calculation capability. This ensures that
        sales tax is accurately applied at the point of sale, based on the customer&#39;s specific location.
        With coverage across more than 13,000 U.S. jurisdictions, TaxCloud eliminates the need for manual rate
        lookups and updates, reducing the risk of errors and ensuring compliance with local tax laws.</p>
      <p className="text-base text-white shadow-text pt-3">
        TaxCloud also offers automated filing and remittance services, which drastically cut down on the time
        spent preparing and submitting tax returns. This feature is particularly beneficial for businesses
        operating in multiple states, where filing requirements can vary significantly. By automating this
        process, TaxCloud not only reduces the administrative burden but also minimizes the risk of late filings
        and associated penalties.</p>
      <p className="text-base text-white shadow-text pt-3">
        Moreover, TaxCloud&#39;s integration capabilities with popular e-commerce platforms like Shopify and
        WooCommerce allow businesses to consolidate their sales data in one place. This integration supports
        accurate nexus tracking across all sales channels, providing businesses with a clear view of their tax
        obligations and ensuring that they remain compliant as they grow.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses concerned about the complexities of tax compliance, TaxCloud&#39;s user-friendly
        dashboard provides comprehensive insights into economic nexus thresholds and filing deadlines. This
        proactive approach helps businesses stay ahead of their compliance obligations, avoiding the costly
        penalties associated with non-compliance.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, TaxCloud&#39;s automation of tax compliance processes not only saves time and reduces errors
        but also provides peace of mind for business owners. By handling the intricacies of tax laws and
        filings, TaxCloud allows businesses to focus on their core operations, driving growth without the
        distraction of compliance challenges.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-taxcloud-simplifies-complex-and-changing-laws" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How TaxCloud Simplifies Complex and Changing Laws
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-taxcloud-simplifies-complex-and-changing-laws-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How TaxCloud Simplifies Complex and Changing Laws
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
