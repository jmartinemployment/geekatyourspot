export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        TaxCloud automates the entire process of tracking, calculating, collecting, and filing sales tax across
        state lines, removing the need for manual intervention at every step. The engine is built to handle the
        full compliance cycle, from the moment an order is placed to the day a return is filed. The platform is
        not just a calculator or a reporting tool. It is a system that works in real time, pulling data from
        your sales channels, checking every transaction against state-by-state rules, and taking action the
        instant you cross a threshold that triggers new obligations.</p>
      <p className="text-base text-white shadow-text pt-3">
        The process starts with monitoring. TaxCloud connects to your storefronts and accounting platforms,
        Shopify, BigCommerce, WooCommerce, Magento, QuickBooks Online, Stripe, Chargebee, and others, so it can
        see every sale as it happens. Unlike tools that only track sales on a single platform, TaxCloud pulls in
        orders from all connected channels and marketplaces. This means you get a complete, up-to-date view of
        your cumulative sales and transaction counts in each state, not just what one marketplace reports.</p>
      <p className="text-base text-white shadow-text pt-3">
        As each sale comes in, TaxCloud’s engine checks the customer’s shipping address down to the rooftop
        level, not just the ZIP code. This matters because tax rates can change from one side of a street to the
        other, especially in home-rule states like Colorado or Louisiana. The platform applies the exact rate
        for that address, factoring in state, county, city, and special district taxes. There is no need to
        update tables or worry about missing a local rate change, TaxCloud’s database stays current
        automatically.</p>
      <p className="text-base text-white shadow-text pt-3">
        When your sales approach a state’s economic nexus threshold, $100,000 in revenue, 200 transactions, or
        whatever the local rule is, TaxCloud alerts you. These alerts are not just numbers on a dashboard. The
        platform tells you exactly which state is at risk, how close you are, and what the next steps are. If
        you cross the line and trigger a new registration requirement, TaxCloud can automate the registration
        process in that state. For the 24 Streamlined Sales Tax (SST) member states, registration, calculation,
        and filing can be handled at no cost for eligible businesses. For non-SST states, TaxCloud manages the
        process but normal filing fees apply.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once you are registered, TaxCloud takes over the heavy lifting of compliance. Every order is tagged with
        the correct tax code, and exemption logic is applied based on state rules. For B2B sales, TaxCloud can
        store and validate exemption certificates, so you are not left scrambling during an audit. At the end of
        each month or quarter (depending on the state), TaxCloud prepares the required returns using your actual
        transaction data. It submits filings and remits payments directly to the tax authorities, keeping you on
        schedule and reducing the risk of late fees or missed deadlines.</p>
      <p className="text-base text-white shadow-text pt-3">
        The system also keeps a full audit trail. All records, sales, filings, exemption certificates, payment
        confirmations, are stored and can be retrieved instantly if a state tax authority asks for
        documentation. This is critical for audit defense: you have every supporting document in one place,
        ready to go.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business in South Florida, this means the Friday afternoon scramble to check if you owe tax
        in New York or Texas is gone. TaxCloud’s automation ensures you never miss a threshold, never collect
        the wrong rate, and never file late. The staff that used to spend days on compliance can now focus on
        sales and operations, with the confidence that the tax side is handled.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-actually-happens-when-taxcloud-runs-your-multi-state-sales-tax" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Actually Happens When TaxCloud Runs Your Multi-State Sales Tax
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
              <h2 id="what-actually-happens-when-taxcloud-runs-your-multi-state-sales-tax-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Actually Happens When TaxCloud Runs Your Multi-State Sales Tax
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
