
export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Getting Quaderno to deliver reliable compliance starts with the right data structure decisions. This is
        not a generic tax software install: Quaderno’s strength is in how it maps your real sales, products, and
        customer data to the tax logic of each state or country. The first week is where you set the foundation,
        get it right and everything downstream (invoicing, threshold alerts, filing reports) runs without
        friction.</p>
      <p className="text-base text-white shadow-text pt-3">
        The most important mapping is transaction-level detail. Quaderno does not just total your sales; it
        tracks each sale by channel, product, customer location, and payment method. The system needs to know
        exactly where each customer is (state, city, sometimes zip code), what product or service was sold (with
        the correct tax code), and which payment processor handled the transaction. If your data comes in with
        missing or ambiguous fields, like a customer address that is only a country, or a product marked as
        “miscellaneous”, Quaderno cannot apply the right tax rule or flag the correct nexus thresholds. This is
        where most DIY setups fail: the data is not granular enough for the compliance engine to do its job.</p>
      <p className="text-base text-white shadow-text pt-3">
        Product mapping is the next critical step. States differ wildly in how they tax digital
        products,&nbsp;SaaS, physical goods, or services. Quaderno lets
        you assign tax codes to each product type, so sales of a
        Florida-exempt&nbsp;SaaS&nbsp;subscription are not taxed
        incorrectly in Texas, and vice versa. For businesses selling a mix of goods, physical, digital,
        services, this mapping is what prevents both over-collection (charging tax where it is not due) and
        under-collection (missing tax where it is required). The system supports multiple tax codes per product
        line, and you can set exceptions or overrides for edge cases as needed.</p>
      <p className="text-base text-white shadow-text pt-3">
        Customer type mapping also matters. Quaderno distinguishes between B2B and B2C sales, and can apply
        reverse charge logic or zero-rate taxes for validated business customers. For this to work, your data
        feed must include VAT numbers or tax exemption certificates where applicable. If you skip this step, you
        risk sending the wrong invoice type or charging tax on exempt sales. The platform can validate VAT
        numbers through VIES and handle B2B/B2C logic automatically, but only if the source data is present and
        mapped.</p>
      <p className="text-base text-white shadow-text pt-3">
        Historical data import is another upfront decision point. If you are coming to Quaderno mid-year or
        after crossing a nexus threshold, you need to import past sales to get a true compliance picture. The
        platform can ingest historical transactions via&nbsp;API&nbsp;or
        CSV, but the same mapping rules apply: each record must carry the right fields (date, product, customer
        location, payment method) for Quaderno to back-calculate exposure and generate accurate audit trails.
        This is especially important for businesses that discover they crossed a threshold months ago and need
        to file retroactive returns.</p>
      <p className="text-base text-white shadow-text pt-3">
        Channel mapping ties it all together. Quaderno aggregates sales across Stripe, PayPal, Shopify,
        WooCommerce, Amazon FBA, and more, but only if you match each incoming data stream to the correct
        business entity and jurisdiction. For companies with multiple brands, stores, or legal entities, this
        mapping prevents double-counting or missed revenue in the compliance reports. You can link several
        WooCommerce stores to one Quaderno account if they share a legal entity, but you must keep the mapping
        clean to avoid compliance gaps.</p>
      <p className="text-base text-white shadow-text pt-3">
        The last key mapping is to your accounting system. Quaderno integrates with Xero and QuickBooks Online,
        feeding tax-compliant data directly into your general ledger. Here, the mapping ensures that invoice
        records, payments, and tax liabilities flow into the right accounts, no manual reconciliation or risk of
        duplicating transactions. This is what lets a small finance team handle
        multi-state&nbsp;tax compliance&nbsp;without adding
        headcount or running into end-of-month chaos.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, the upfront data structure and mapping decisions, transaction detail, product codes, customer
        types, historical data, channel mapping, and accounting sync, are what make Quaderno deliver on its
        promise. Geek @ Your Spot LLC’s job is to guide you through each mapping, validate your feeds, and make sure
        the structure fits both Quaderno’s logic and your real-world sales. Get this right, and the compliance
        engine runs clean. Miss it, and you are back to manual fixes and compliance risk.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-structure-and-mapping-choices-that-matter-when-deploying-quaderno" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data Structure and Mapping Choices That Matter When Deploying Quaderno
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
              <h2 id="the-data-structure-and-mapping-choices-that-matter-when-deploying-quaderno-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data Structure and Mapping Choices That Matter When Deploying Quaderno
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
