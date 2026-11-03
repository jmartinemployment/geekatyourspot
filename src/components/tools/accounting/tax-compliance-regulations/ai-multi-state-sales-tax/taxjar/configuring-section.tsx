
export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Configuring TaxJar for multi-state sales&nbsp;tax
        compliance&nbsp;is not just about turning on a switch. The platform requires careful
        setup to match the unique footprint of a small business selling across state lines, especially in
        high-growth environments like South Florida. Geek @ Your Spot LLC’s job is to close the gap between TaxJar’s
        automation and your real-world sales channels. Every rule, threshold, and exception must reflect your
        actual business activity, not just the defaults.</p>
      <p className="text-base text-white shadow-text pt-3">
        The heart of TaxJar’s configuration is its Economic Nexus Insights dashboard. This tool tracks your
        transaction volume and revenue by state, monitoring for the $100,000 or 200-transaction triggers that
        create new filing obligations. The dashboard issues alerts when you are close to crossing a threshold,
        so you know before you are exposed. This real-time monitoring replaces the manual spreadsheet checks
        that catch problems months too late. Geek @ Your Spot LLC configures your state-by-state thresholds and
        notification preferences, ensuring you see only what matters to your business, not a flood of irrelevant
        alerts.</p>
      <p className="text-base text-white shadow-text pt-3">
        TaxJar’s automation logic extends to how it handles product taxability. States do not agree on what is
        taxable: some treat digital goods or shipping as taxable, others do not. The platform’s product
        classification engine lets you assign tax codes to each SKU or service. This is not a one-time task. As
        you add new products or change your catalog, these codes need review. Geek @ Your Spot LLC maps your catalog
        to TaxJar’s codes, checks for mismatches, and sets up regular reviews. If you sell on multiple
        platforms, Shopify, Amazon, Squarespace, Square, WooCommerce, each integration must send clean,
        consistent product data. The mapping must be right from the start, or you risk over-collecting,
        under-collecting, or misreporting taxes.</p>
      <p className="text-base text-white shadow-text pt-3">
        For shipping, TaxJar’s calculation engine applies rooftop-accurate rates based on full street addresses,
        not just zip codes. This matters because many states tax shipping differently depending on the city,
        county, or even special district. The platform’s rules engine determines whether to tax shipping,
        handling, or gift wrap based on the destination’s laws. Geek @ Your Spot LLC configures these rules for each
        channel and trains your team to flag exceptions, like free shipping promos or bundled items that require
        special handling.</p>
      <p className="text-base text-white shadow-text pt-3">
        Marketplace sales add another layer. TaxJar can distinguish between sales where a marketplace
        facilitator (like Amazon or Etsy) already collects and remits tax, and direct-to-consumer sales where
        you are responsible. This prevents double-counting and double-paying. The setup involves mapping each
        marketplace to its own integration and confirming how each state treats facilitator sales. Geek @ Your Spot LLC audits your existing sales flows, ensures each marketplace is connected, and validates the logic
        that separates marketplace and direct sales. This is critical for businesses that sell both through
        their website and third-party platforms.</p>
      <p className="text-base text-white shadow-text pt-3">
        TaxJar’s core automation is its AutoFile feature. Once configured, AutoFile submits returns to state
        authorities on your behalf, on time and in the correct format for each jurisdiction. The configuration
        process includes entering your state registration numbers, selecting which states to AutoFile, and
        setting up payment methods. Geek @ Your Spot LLC reviews your registration status, helps you obtain missing
        permits, and tests the AutoFile process in a sandbox before going live. For states where you still file
        manually, TaxJar generates return-ready reports that match the state’s requirements, including
        breakdowns for city, county, and special district taxes.</p>
      <p className="text-base text-white shadow-text pt-3">
        Extension is possible through the TaxJar&nbsp;API, which allows
        for custom integrations beyond the standard connectors. This is relevant for businesses with unique
        workflows or custom-built carts. The&nbsp;API&nbsp;supports
        real-time tax calculation, product classification, and transaction ingestion. Geek @ Your Spot LLC works
        with your developers to connect custom systems,
        test&nbsp;API&nbsp;calls, and ensure that every transaction
        flows into TaxJar cleanly. For most small businesses, the default integrations with Shopify, Salesforce,
        Amazon, and others are enough. But when you need more,
        the&nbsp;API&nbsp;is the path.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and compliance settings are also part of configuration. TaxJar supports GDPR and SOC II
        frameworks, and its platform includes security monitoring and AWS analytics integration. Geek @ Your Spot LLC reviews your data flows, ensures sensitive information is handled according to your compliance
        requirements, and documents the setup for audit readiness.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, configuring TaxJar is a hands-on process. Every rule, nexus thresholds, product tax codes,
        shipping logic, marketplace handling, filing frequency, must be tuned to your business. Geek @ Your Spot LLC’s role is to translate your sales footprint into TaxJar’s automation logic, validate every
        integration, and document the process so you can scale without adding compliance risk. For small
        businesses in West Palm Beach, Broward, and Miami-Dade, this is the difference between a tool that works
        and one that leaves you exposed.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-taxjar-rules-automation-and-extension" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in TaxJar: Rules, Automation, and Extension
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-taxjar-rules-automation-and-extension-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in TaxJar: Rules, Automation, and Extension
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
