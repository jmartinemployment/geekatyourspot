import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        TaxCloud is built for small and mid-market businesses that need to automate
        sales&nbsp;<GlossaryLink slug="tax-compliance" className="text-[#0B162A] hover:underline">tax
        compliance</GlossaryLink>&nbsp;across multiple states without hiring a tax department. When you are
        deciding if TaxCloud fits your business, focus on three things: how well it matches your sales channels
        and data flows, how its pricing works for your transaction volume, and whether its automation logic
        covers your real compliance risks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Start with fit. TaxCloud is designed for
        ecommerce,&nbsp;SaaS,
        and retail businesses that sell across state lines. It handles both physical and economic nexus,
        tracking sales and transactions in real time across all connected platforms. If you are running Shopify,
        WooCommerce, BigCommerce, Magento, QuickBooks, Stripe, or Chargebee, TaxCloud has direct integrations,
        no custom development needed. For businesses using Odoo or
        other&nbsp;ERP&nbsp;systems,
        the platform supports plug-and-play
        or&nbsp;API&nbsp;connections.
        If your sales stack is outside these platforms, you can still import data via CSV or use
        the&nbsp;API, but
        more setup may be required. The platform is not aimed at global VAT or GST compliance, so if you sell
        primarily outside the US, another solution may be a better fit.</p>
      <p className="text-md text-white shadow-text pt-3">
        The strength of TaxCloud is in automating what small teams cannot do by hand: tracking every state’s
        nexus thresholds, registering as soon as you cross a line, calculating the exact rate for every order,
        and filing on time in every jurisdiction. The platform is a good fit if you are already spending hours a
        month reconciling Shopify, Amazon, and QuickBooks reports, or if you have been caught by surprise by a
        state’s $100,000 or 200-transaction threshold. It is less useful for a business that only sells in
        Florida or a single state, or that never crosses remote nexus thresholds.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing is straightforward and published. TaxCloud offers a Starter plan (from $19 per month) for
        simpler Shopify-based ecommerce, and a Premium plan (from $79 per month) for
        multi-channel,&nbsp;SaaS,
        or more complex compliance. Filing fees start at $39 per return and drop to $20 per return with volume.
        If you qualify for the Streamlined Sales Tax (SST) program and use the Premium plan, you can file for
        free in 24 participating states, this is a key cost advantage over platforms that charge for every
        filing regardless of state. For eligible businesses, TaxCloud’s SST support can drive the cost of
        returns as low as $23 per filing. A 30-day free trial is available, so you can see the automation in
        action before committing.</p>
      <p className="text-md text-white shadow-text pt-3">
        When judging value, compare TaxCloud’s automation and support against the cost of doing it by hand or
        using a CPA. The platform’s automation reduces the need for outside accountants, cuts the risk of missed
        deadlines, and eliminates the hours spent pulling data and preparing filings. Audit support and
        exemption certificate management are included, which reduces the risk of penalties during an audit. If
        you are already paying for manual filings or struggling to keep up with changing rates and rules, the
        monthly cost is often less than what you would spend on staff time or outside help.</p>
      <p className="text-md text-white shadow-text pt-3">
        TaxCloud’s model is transparent, there are no hidden fees for integrations, and support is US-based. The
        main costs are your monthly plan, per-return filing fees (except where SST covers them), and any
        additional audit defense if you want that level of backup. The platform does not charge for every
        transaction or user, so you can scale your sales without worrying about surprise bills. For businesses
        that expect to grow into new states or channels, this predictability is a real advantage.</p>
      <p className="text-md text-white shadow-text pt-3">
        TaxCloud is not the right tool for every business. If your company needs deep global tax compliance, or
        if you have custom tax rules that go beyond US sales tax, look elsewhere. If you need a platform that
        handles payroll tax, VAT, or GST, TaxCloud does not cover those areas. If your sales are entirely in one
        state and you never expect to cross a nexus threshold, the platform’s automation may be more than you
        need.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a small South Florida business expanding beyond state lines, TaxCloud’s fit comes down to two
        questions: does it connect to every sales channel you use, and does it automate every compliance step
        you want off your plate? If the answer is yes, the pricing model is simple, and the automation replaces
        days of manual work with a system that scales as you grow.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-taxcloud-fit-and-pricing-for-small-businesses" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge TaxCloud: Fit and Pricing for Small Businesses
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-taxcloud-fit-and-pricing-for-small-businesses-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge TaxCloud: Fit and Pricing for Small Businesses
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
