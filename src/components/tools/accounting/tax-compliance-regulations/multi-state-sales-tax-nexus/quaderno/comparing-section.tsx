
export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses in South Florida
        weighing&nbsp;tax
        compliance&nbsp;tools for Multi-State Sales Tax Nexus find themselves choosing between
        three main approaches: manual tracking with spreadsheets and basic accounting software, single-gateway
        tax solutions tied to a payment platform, and independent compliance engines like Quaderno. Each method
        claims to solve the compliance burden, but the differences in scope, integration, and automation make
        the outcomes very different.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual tracking, still the default for many teams, relies on a patchwork of spreadsheets, ad hoc
        calendar reminders, and late-night research into state tax rules. This approach works only until the
        first threshold is crossed in an unfamiliar state. Spreadsheets do not update when Texas changes digital
        product taxability, nor do they warn you when a surge in sales tips you over New York’s line of
        $500,000 and 100 sales. The cost is hidden at first: missed deadlines, uncollected tax, and
        the risk of a penalty landing months after the fact. Teams spend hours each week checking numbers that
        could be flagged automatically.</p>
      <p className="text-md text-white shadow-text pt-3">
        Single-gateway solutions, like those built into Stripe or Shopify, offer a more automated experience, if
        your business runs entirely through one platform. Stripe Tax, for example, tracks transactions within
        Stripe and can apply tax rates at checkout. But as soon as a business adds PayPal, Braintree, or a
        WooCommerce storefront, these tools lose visibility. Transactions outside the main gateway are not
        tracked, so the business risks missing a nexus trigger in any state where sales flow through a different
        processor. This is not a hypothetical gap. The evidence from Quaderno’s own comparison with Stripe Tax
        shows that Stripe Tax cannot aggregate data from alternate billing solutions, leading to compliance
        blind spots.</p>
      <p className="text-md text-white shadow-text pt-3">
        Quaderno’s position in this landscape is as an independent, stack-agnostic compliance engine. It
        connects to Stripe, PayPal, Braintree, WooCommerce, Shopify, and other platforms at once, pulling in
        every transaction in real time. This centralization is not just a convenience, it is what makes accurate
        nexus tracking possible. With Quaderno, a business can see its total sales by state and channel, not
        just by payment provider. This means the team in the Friday afternoon scenario from the opening is not
        forced to guess whether a spike in Shopify sales plus a steady trickle from PayPal has pushed them over
        the line in California or Texas. The system tracks both, alerts the team when they approach a threshold,
        and generates the reports needed to register or file on time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Where manual methods and single-gateway solutions struggle with fragmented data and limited scope,
        Quaderno’s architecture is built for multi-channel, multi-jurisdiction compliance. Its integrations do
        not just pull in sales data, they also allow for automated, localized invoice generation, correct tax
        application based on product type and buyer location, and real-time alerts for approaching thresholds.
        This is a step beyond what accounting software or payment platform add-ons provide, as those tools are
        not built to interpret the nuances of economic nexus or to handle edge cases like B2B reverse charges or
        digital product exceptions.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses that sell digital products, subscriptions,
        or&nbsp;SaaS, the
        difference is even sharper. Many states tax digital goods differently, and a manual or single-gateway
        approach cannot keep up with these changes. Quaderno’s tax engine is updated for every jurisdiction, so
        when a state changes its rules, the system applies the new rates and requirements automatically. This is
        not just about accuracy at checkout, it is about audit protection and operational continuity as the
        business grows into new markets.</p>
      <p className="text-md text-white shadow-text pt-3">
        Quaderno also stands apart in how it handles reporting and historical compliance. If a business
        discovers it crossed a nexus threshold months ago, Quaderno can generate CPA-ready summaries and
        breakdowns by state, product, and rate, structured exactly as state filing forms require. This is a
        concrete advantage over tools that only summarize transactions or require manual report assembly. The
        team does not have to reconstruct history from spreadsheets or incomplete exports; the data is already
        compiled and audit-ready.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, Quaderno’s open approach to integrations and its transparent pricing model allow businesses to
        scale without getting locked into a single payment provider or platform. This is a key difference from
        tools that tie compliance to one gateway, which can become a bottleneck as the business diversifies its
        sales channels.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Quaderno’s independent, multi-channel approach closes the compliance gaps left by both
        manual processes and platform-tied tax solutions. For a small business in South Florida growing across
        state lines, this means fewer late nights, less manual checking, and a clear, automated path to
        compliance, no matter how the sales mix shifts over time.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-quaderno-stands-apart-from-adjacent-tax-compliance-approaches" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Quaderno Stands Apart from Adjacent Tax Compliance Approaches
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
              <h2 id="how-quaderno-stands-apart-from-adjacent-tax-compliance-approaches-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Quaderno Stands Apart from Adjacent Tax Compliance Approaches
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
