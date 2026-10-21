
export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The foundation of a smooth Zamp rollout is not just plugging in your sales channels, it is getting your
        data structure and mapping right from the start. For a South Florida business facing multi-state sales
        tax nexus, the stakes are high: one misclassified SKU or missing sales channel can mean missed
        registrations, incorrect filings, or costly audit exposure. Zamp’s approach is to make these decisions
        up front, with hands-on review and technical controls that prevent problems before they start.</p>
      <p className="text-base text-white shadow-text pt-3">
        First, Zamp imports your transaction history from every connected system, Shopify, Amazon, BigCommerce,
        Magento,&nbsp;ERP, or
        custom&nbsp;API. The system does not just take the latest data.
        It pulls prior-period orders, refunds, and adjustments to ensure that the nexus analysis is based on the
        full sales picture, not just a snapshot. This matters because economic and physical nexus are triggered
        by cumulative sales or transaction counts, which means that missing even a month of data can throw off
        compliance and registration timing.</p>
      <p className="text-base text-white shadow-text pt-3">
        Product mapping is next. Zamp’s onboarding team manually reviews your product catalog, mapping each SKU
        to the correct tax code for every state. This is not an automated guess. The team checks for products
        with special exemptions, bundled items, or digital goods that carry unique rules in different
        jurisdictions. For example, a&nbsp;SaaS&nbsp;product may be
        exempt in one state but taxable in another. Zamp’s team ensures that every product is classified
        accurately, so state-level exemptions and special rules are reflected in your filings. This is the
        safeguard against misclassifying custom SKUs, a common failure that leaves businesses exposed to
        penalties or overpaying tax.</p>
      <p className="text-base text-white shadow-text pt-3">
        Sales channel mapping is just as critical. Zamp tracks economic and physical nexus across all channels
        in real time. That means every sale, whether direct, through a marketplace, or via wholesale, is counted
        toward state thresholds. Marketplace transactions are identified and classified to align with
        facilitator rules so tax is not double-filed or missed. Zamp’s system syncs all channels into
        QuickBooks, giving you unified compliance and a single source of truth. There is no manual
        reconciliation at year-end, no risk of missing a sale that pushes you over a threshold.</p>
      <p className="text-base text-white shadow-text pt-3">
        Jurisdiction mapping comes into play when state and local rules overlap. Zamp’s platform assigns
        transactions to the correct jurisdiction, reflecting home-rule states and special local taxes. This
        level of detail means your filings are accurate down to the city or county, not just the state. Location
        accuracy is built in from the start, with the system using address data and tax code mapping to prevent
        errors that would otherwise go unnoticed until an audit.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, Zamp’s onboarding team validates all data imports and mappings before the system goes live.
        They use AI-enabled anomaly detection and manual checks to flag discrepancies, missing records, or data
        that does not reconcile with your general ledger. Any issues are resolved before the first filing, not
        after the fact. This upfront validation is what allows Zamp to promise audit-ready documentation and
        close-ready accuracy, with your team only needing to review and approve.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business, these data structure and mapping decisions are not just technicalities, they are
        the difference between a compliant, hands-off tax process and a cascade of notices and penalties. Zamp’s
        managed approach means you do not have to become a tax data expert. The platform and team handle the
        complexity, making sure every sale, product, and jurisdiction is mapped correctly from day one.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-data-mapping-and-structure-make-or-break-zamp-s-multi-state-setup" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Data Mapping and Structure Make or Break Zamp’s Multi-State Setup
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
              <h2 id="why-data-mapping-and-structure-make-or-break-zamp-s-multi-state-setup-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Data Mapping and Structure Make or Break Zamp’s Multi-State Setup
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
