import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The foundation of a reliable TaxCloud deployment is the way your sales, product, and customer data are
        structured and mapped to the platform’s tax engine. Upfront, this means making decisions about how your
        SKUs, product categories, customer types, and exemption statuses are defined and connected to TaxCloud’s
        compliance logic. These choices determine whether the system can calculate and file tax accurately in
        every state where you trigger nexus.</p>
      <p className="text-base text-white shadow-text pt-3">
        Start with your product catalog. TaxCloud requires each product to be mapped to a taxability code (TIC)
        that matches how states classify goods and services. If your catalog is already organized by standard
        categories, such as taxable retail, exempt medical devices,
        or&nbsp;SaaS&nbsp;subscriptions, the mapping can be mostly
        automated. If your products are custom or span multiple categories, you will need to review and assign
        codes so TaxCloud knows which tax rules to apply in each state. This is especially important for
        businesses with mixed offerings, such as physical goods and digital services, or those selling both to
        consumers and resellers.</p>
      <p className="text-base text-white shadow-text pt-3">
        Customer data is the next critical layer. TaxCloud needs to know which buyers are taxable, which are
        exempt, and which may need certificates on file. For B2B sales, this means capturing exemption
        certificate data and linking it to the right customer records. The platform can store, manage, and
        validate exemption certificates, but only if your customer records are complete and accurate. Incomplete
        or inconsistent customer data will lead to tax being charged when it should not, or worse, tax not being
        collected when it should, exposing your business to audit risk.</p>
      <p className="text-base text-white shadow-text pt-3">
        Sales channel mapping is another key decision. If you sell on Shopify, WooCommerce, Amazon, and your own
        site, TaxCloud needs to consolidate all transactions to track cumulative sales by state. This is how the
        system monitors economic nexus thresholds across all channels, not just one. The integration setup must
        ensure that orders from every platform are imported without duplication or gaps. For teams using
        multiple payment processors (for example, Stripe for subscriptions and Shopify Payments for ecommerce),
        it is essential to reconcile all sales in TaxCloud’s dashboard so nothing gets missed.</p>
      <p className="text-base text-white shadow-text pt-3">
        Address&nbsp;<GlossaryLink slug="data-quality">data quality</GlossaryLink>&nbsp;directly impacts tax
        calculation accuracy. TaxCloud calculates sales tax at the rooftop level, which means it uses the
        precise shipping or service address to determine the correct rate for each order. If your address data
        is incomplete or contains errors, the system may default to zip-level rates or flag the transaction for
        manual review. Clean, standardized address records ensure that each sale is taxed correctly, especially
        in states with complex local taxes or home-rule jurisdictions.</p>
      <p className="text-base text-white shadow-text pt-3">
        When mapping data, think ahead to reporting and audit readiness. TaxCloud generates return-ready reports
        that align with your order data, so any mismatch between your records and what the system sees can lead
        to filing errors or audit vulnerabilities. Upfront mapping should include:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Assigning each product to the correct taxability code for every state where you sell.</li>
        <li>Ensuring customer records are complete, with exemption status and certificates attached where needed.</li>
        <li>Consolidating all sales channels and payment sources into a unified transaction log.</li>
        <li>Standardizing address data to enable rooftop-level tax calculation.</li>
        <li>Setting up alerts for when sales approach or cross economic nexus thresholds in any state.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        For businesses migrating from another platform, data mapping also involves translating existing codes,
        categories, and statuses to TaxCloud’s logic. This can be done through guided migration tools or with
        support from TaxCloud’s onboarding team. The goal is to avoid gaps, no missed transactions, no
        unclassified products, no orphaned exemption certificates. The more complete the mapping, the fewer
        manual corrections are needed after go-live.</p>
      <p className="text-base text-white shadow-text pt-3">
        For South Florida businesses with lean teams, the upfront investment in data structure and mapping pays
        off in reduced errors, faster filings, and lower risk of audit penalties. TaxCloud’s automation is only
        as accurate as the data it receives. By focusing on&nbsp;data
        quality&nbsp;and clear mapping at the start, you set up a system that can handle
        multi-state compliance with minimal intervention. As your sales grow and you enter new states or
        channels, the mapped structure makes it easy to scale, new products, customers, or platforms can be
        added without reworking your compliance logic from scratch.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, this means that the same South Florida retailer from the opening can add a new Shopify
        store or launch a subscription product and know that TaxCloud will apply the right tax rate, track
        cumulative sales for nexus, and file in every state required, without a single spreadsheet or manual
        lookup. The upfront work in structuring and mapping data is the difference between a system that
        delivers zero-surprise compliance and one that creates new risks as the business grows.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-data-structure-and-mapping-shape-a-successful-taxcloud-implementation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Structure and Mapping Shape a Successful TaxCloud Implementation
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
              <h2 id="how-data-structure-and-mapping-shape-a-successful-taxcloud-implementation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Structure and Mapping Shape a Successful TaxCloud Implementation
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
