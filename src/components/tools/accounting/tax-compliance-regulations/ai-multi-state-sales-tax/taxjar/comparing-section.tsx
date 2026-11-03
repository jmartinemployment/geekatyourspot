
export default function ComparingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Small businesses in South Florida weighing TaxJar for multi-state
        sales&nbsp;tax
        compliance&nbsp;are usually comparing it to three things: manual spreadsheet tracking,
        do-it-all accounting platforms, and other specialized tax automation tools. Each approach has its own
        ceiling and its own blind spots. TaxJar sits in the middle: it is not an all-purpose accounting tool,
        and it is not a full-service tax advisory firm. It is a purpose-built engine for automating the most
        error-prone and time-consuming parts of sales tax compliance across many states, especially where
        economic nexus thresholds are a moving target.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual tracking is where most small e-commerce teams start. It is familiar, but it falls apart fast.
        Spreadsheets cannot keep up with orders coming in from multiple channels or with the constant changes in
        state thresholds and tax rules. Businesses miss new nexus triggers, apply the wrong rates, or
        double-count marketplace sales. The cost is not just time, it is real audit risk and, often, paying
        taxes out of pocket after the fact. TaxJar’s cloud-native platform addresses this by ingesting
        transaction data in real time, applying up-to-date state-by-state rules, and surfacing alerts as soon as
        a threshold is close. This is a direct answer to the spreadsheet bottleneck: no more waiting until
        quarter-end to realize you crossed a line months ago.</p>
      <p className="text-base text-white shadow-text pt-3">
        Accounting platforms like QuickBooks or Xero offer some tax features, but they are not built for
        multi-state sales tax complexity. They may calculate basic sales tax or generate reports, but they do
        not track economic nexus across all 11,000 jurisdictions, nor do they provide real-time alerts as you
        approach new thresholds. They also do not handle marketplace facilitator laws cleanly, meaning a
        business can end up paying tax twice on the same transaction. TaxJar, by contrast, is designed to split
        out marketplace-facilitated sales, recognize when a platform like Amazon or Etsy is already remitting
        tax, and ensure you only pay what you owe. This prevents double-payment, which is a common and expensive
        error for growing e-commerce businesses.</p>
      <p className="text-base text-white shadow-text pt-3">
        Other tax automation tools exist, some with broader international reach or deep enterprise features. For
        a small or mid-sized business in Miami-Dade, Broward or Palm Beach, the question is not just feature
        count, but fit. TaxJar is built for speed and reliability,
        its&nbsp;API&nbsp;delivers
        sub-25ms response times and 99.99% uptime, which matters for e-commerce checkouts that cannot afford a
        delay. It also integrates directly with platforms like Shopify, Salesforce, Amazon, Squarespace, Square,
        and Woo, so businesses can connect their sales channels without custom development. Where a business has
        unique needs, the
        TaxJar&nbsp;API&nbsp;allows
        for custom integrations, but the majority of small teams will not need to build from scratch.</p>
      <p className="text-base text-white shadow-text pt-3">
        TaxJar’s core differentiator is its focus on economic nexus and the automation of compliance as sales
        scale. The Economic Nexus Insights dashboard is not just a report, it is an active system that tracks
        exposure in every state, issues alerts before a threshold is crossed, and compiles all sales data into a
        single, return-ready dashboard. When a state changes its rules or a new local tax is introduced,
        TaxJar’s research team updates the engine behind the scenes. This means the business is always working
        with the current law, not last quarter’s spreadsheet. For filing, TaxJar’s AutoFile submits returns
        automatically to each state, on time and in the right format, removing the need for a staff member to
        manage deadlines and paperwork.</p>
      <p className="text-base text-white shadow-text pt-3">
        There are limits. TaxJar is not a replacement for a CPA or a tax attorney when a business faces an audit
        or a legal dispute. It does not provide bespoke tax planning or handle payroll taxes. It automates what
        can be automated: calculation, aggregation, threshold tracking, and filing. For businesses that need
        international VAT, GST, or payroll compliance, TaxJar may not be the only tool required. But for the
        specific problem of US multi-state sales tax nexus, especially as triggered by e-commerce growth, it is
        a focused, reliable solution.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, TaxJar is not a generic accounting add-on or a high-touch consulting service. It is a
        specialized automation platform for multi-state sales tax compliance, built for the volume and
        complexity that overwhelm manual processes and outstrip general-purpose accounting tools. It is best
        suited to businesses that have outgrown spreadsheets but are not looking for a full-service outsourced
        tax department. For those aiming to automate compliance, reduce audit risk, and keep sales moving
        without adding headcount, TaxJar is a direct fit.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-taxjar-compares-what-you-get-what-you-don-t-and-where-it-sits-among-adjacent-approaches" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How TaxJar Compares: What You Get, What You Don’t, and Where It Sits Among Adjacent Approaches
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-taxjar-compares-what-you-get-what-you-don-t-and-where-it-sits-among-adjacent-approaches-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How TaxJar Compares: What You Get, What You Don’t, and Where It Sits Among Adjacent Approaches
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
