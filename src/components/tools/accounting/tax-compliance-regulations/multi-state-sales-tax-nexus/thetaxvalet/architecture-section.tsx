import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        TaxValet is not just a filing engine or a bolt-on reporting tool. Its architecture is built to handle
        the real-world complexity of multi-state sales tax, with a focus on data integrity, channel coverage,
        and audit resilience. Here’s how the platform is structured and what that means for your business.</p>
      <p className="text-base text-white shadow-text pt-3">
        At its core, TaxValet is built around a data aggregation and reconciliation engine. It connects to all
        major sales channels, e-commerce storefronts, marketplaces, and accounting platforms, so it can pull
        transaction data from every source. This is not a one-way sync. TaxValet actively checks for gaps or
        mismatches, ensuring that no sales are missed and that returns, refunds, and adjustments are handled
        with full visibility. Data from Amazon, Shopify, and other platforms is combined, not siloed, so you get
        a complete, accurate picture of your sales footprint in every state.</p>
      <p className="text-base text-white shadow-text pt-3">
        For inventory and physical nexus, TaxValet tracks where your products are stored and moved, including
        third-party fulfillment centers like Amazon FBA and regional 3PLs. Many platforms miss this entirely,
        but TaxValet’s system is set up to monitor asset locations, so you know when inventory triggers new tax
        obligations. This is critical for businesses that do not have direct control over where inventory is
        warehoused, as even a single pallet in a new state can create a filing requirement.</p>
      <p className="text-base text-white shadow-text pt-3">
        TaxValet’s architecture also handles permit management and local filings at the granular level. It does
        not just file at the state level and leave you exposed to local or home-rule jurisdictions. The platform
        keeps a live register of every permit, closing those that are no longer needed and correcting any that
        are set up incorrectly. This reduces the compliance footprint and cuts down on unnecessary filings.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the compliance side, TaxValet maintains a record of every filing, payment, and correspondence with
        tax authorities. This audit-ready archive is structured for fast retrieval if a state initiates an
        audit, so your business can produce proof of compliance without scrambling through old emails or
        spreadsheets. The system logs every adjustment, every return, and every response to a state notice, so
        you have a defensible trail if challenged.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and data control are central to the design. TaxValet keeps collected sales tax funds separate
        from operational capital, using dedicated accounts to ensure that money is always available for filings.
        This prevents the cash flow crunch that comes from mixing tax collections with business revenue, a
        common failure point for small businesses managing sales tax manually.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integration is handled with a mix of direct connections and guided data uploads. If a sales channel
        supports&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;access,
        TaxValet connects directly to pull transactions. If not, their team works with you to download and
        format data for import, so no sales are left out of the compliance process. This flexibility is
        important for businesses with a mix of modern and legacy systems, or those that add new channels as they
        grow.</p>
      <p className="text-base text-white shadow-text pt-3">
        TaxValet’s architecture is also designed for ongoing monitoring. As state laws change or as your sales
        patterns shift, the platform updates its compliance engine, so you do not fall out of compliance as you
        expand. This is not just about updating tax rates; it covers new nexus thresholds, local rule changes,
        and changes in how states define taxable products or services.</p>
      <p className="text-base text-white shadow-text pt-3">
        For audit defense, TaxValet’s system is built to provide instant access to all data and filings for any
        period under review. If an auditor requests transaction logs or proof of registration, TaxValet delivers
        it directly, without requiring you to assemble records from multiple sources. The platform’s guarantee
        covers penalties or interest if an error is found in filings they managed, so the risk does not fall
        back on your team.</p>
      <p className="text-base text-white shadow-text pt-3">
        The result is a platform that does not just automate filings, but gives you control and visibility over
        your entire compliance landscape. For a small business in South Florida expanding across state lines,
        this means you can add sales channels or enter new markets without risking surprise tax obligations or
        compliance gaps. TaxValet’s architecture is designed to adapt as you grow, keeping your compliance
        footprint clean and your audit risk low, without requiring you to become a tax expert or hire an
        internal team.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-taxvalet-s-architecture-means-for-data-integrations-and-control" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What TaxValet’s Architecture Means for Data, Integrations, and Control
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
              <h2 id="what-taxvalet-s-architecture-means-for-data-integrations-and-control-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What TaxValet’s Architecture Means for Data, Integrations, and Control
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
