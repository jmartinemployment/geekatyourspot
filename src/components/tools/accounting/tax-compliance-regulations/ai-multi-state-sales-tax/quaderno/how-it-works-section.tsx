
export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Quaderno automates the
        entire&nbsp;tax
        compliance&nbsp;cycle for small businesses selling across state lines. Its core workflow
        starts with real-time monitoring of your sales volume and transaction counts in every US state and more
        than 150 countries. The system pulls sales data directly from your payment processors and sales
        channels, Stripe, PayPal, Braintree, Shopify, WooCommerce, Amazon FBA, and others, so you get a live
        view of where your business stands against every state’s economic nexus threshold.</p>
      <p className="text-base text-white shadow-text pt-3">
        Each time you process a sale, Quaderno checks the latest tax rules for that product or service in the
        buyer’s jurisdiction. This includes digital
        goods,&nbsp;SaaS,
        and physical products, even when rules change mid-year or differ by state. The platform identifies
        whether the sale is B2B or B2C, validates VAT numbers where needed, and applies the right rate, no more
        guessing or overcharging out-of-state buyers. This is not just a one-time setup: Quaderno updates its
        tax engine as regulations change, so you stay compliant without manual intervention.</p>
      <p className="text-base text-white shadow-text pt-3">
        When you approach a new state’s revenue or transaction threshold, Quaderno sends proactive alerts. You
        can see at a glance which states you’re close to triggering nexus in, and the system emails you when you
        hit 90% and again at 100%. This gives you time to register and collect tax before you are out of
        compliance. For businesses selling internationally, the same process applies to VAT and GST thresholds
        in the EU, UK, and other markets.</p>
      <p className="text-base text-white shadow-text pt-3">
        After each sale, Quaderno generates a tax-compliant invoice. The invoice is fully localized, right down
        to the buyer’s language, currency, and the required tax fields for their state or country. For states
        and countries with e-invoicing mandates, Quaderno creates the invoice in the correct digital format and
        transmits it as required, so you do not need to rebuild your process every time a new digital reporting
        rule comes into effect. Credit notes for refunds are created automatically when you process a return in
        your commerce system.</p>
      <p className="text-base text-white shadow-text pt-3">
        All of this data feeds into Quaderno’s reporting dashboard. Here, you can download jurisdiction-specific
        tax reports with totals broken down by state, country, or local authority, ready to file or hand to your
        accountant. Reports update daily and cover all connected sales channels. For businesses that want to
        automate filing, Quaderno supports direct filing in more than 50 countries and prepares single-click
        filing-ready reports for US states, so you or your CPA can submit them without rework.</p>
      <p className="text-base text-white shadow-text pt-3">
        The system is built for recurring billing and subscription businesses as well. Quaderno tracks free
        trials, mid-cycle upgrades or downgrades, discounts, and refunds, and updates tax calculations and
        invoices automatically as the subscription changes. This removes the need for manual corrections or
        tracking plan changes in spreadsheets.</p>
      <p className="text-base text-white shadow-text pt-3">
        For South Florida small businesses, this means you no longer have to manually reconcile sales from
        multiple gateways or worry about missing a threshold in a new state. The weekly burden of checking
        spreadsheets, researching state rules, and preparing compliance paperwork is replaced with a single
        platform that tracks, calculates, and documents everything as you sell. The team that once spent Friday
        afternoons on tax checks now gets instant, audit-ready reports, and can focus on growth instead of
        compliance firefighting.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-quaderno-automates-multi-state-tax-compliance-step-by-step" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Quaderno Automates Multi-State Tax Compliance, Step by Step
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
              <h2 id="how-quaderno-automates-multi-state-tax-compliance-step-by-step-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Quaderno Automates Multi-State Tax Compliance, Step by Step
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
