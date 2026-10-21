import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Quaderno is built to end the cycle of manual tracking, late nights, and compliance panic that comes with
        Multi-State Sales Tax Nexus. For a small team in West Palm Beach, Broward, or Miami-Dade, the biggest
        change is time: hours spent checking spreadsheets, reconciling sales, and preparing state-by-state
        filings drop away. Quaderno connects directly to your billing and e-commerce platforms, Stripe, PayPal,
        WooCommerce, Shopify, Amazon FBA, and more, so every sale, refund, and subscription event is captured in
        real time. There is no need to export, import, or piece together data from separate systems. The
        software pulls all transactions into one dashboard, giving a full view of where you stand in every
        state, every day.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core of Quaderno’s value is real-time threshold monitoring. The platform watches sales and
        transaction volume for each state and country, alerting you as soon as you approach a registration
        requirement. This means no more guessing if you are close to the $500,000 mark in Texas or
        California. The system checks every sale against the rules for that market, so you know
        exactly when you need to register and start collecting tax. This removes the risk of accidental
        noncompliance and the scramble to fix things after the fact.</p>
      <p className="text-base text-white shadow-text pt-3">
        Quaderno’s automation does not stop at tracking. It calculates the correct tax for every transaction, no
        matter where your customer is. Digital products,&nbsp;SaaS,
        physical goods, each is taxed according to the latest rules in each jurisdiction. The software applies
        the right rate automatically, so you never overcharge or undercharge a customer. For businesses that
        sell across multiple channels, this is a game changer. You do not have to worry about charging the wrong
        rate on a PayPal sale versus a Stripe subscription. Quaderno centralizes all tax data, making sure every
        invoice and receipt matches the exact requirements for each state.</p>
      <p className="text-base text-white shadow-text pt-3">
        Invoicing is fully automated and always compliant. Every sale triggers an invoice that meets the buyer’s
        local rules, right down to language, currency, and required tax fields. Refunds and credit notes are
        handled automatically as well. If you run multiple WooCommerce stores or sell through several platforms,
        Quaderno lets you link them all to a single account, provided they are managed by the same legal entity.
        This means you can scale up sales channels without multiplying your compliance workload.</p>
      <p className="text-base text-white shadow-text pt-3">
        For filing, Quaderno generates instant, jurisdiction-specific tax reports. Every report breaks down
        gross sales, taxable sales, and tax collected by state, country, or local authority. You can download
        these reports in one click and hand them to your accountant or use them to file returns yourself. The
        reports update daily and cover all connected sales channels, so you are always ready for an audit or a
        filing deadline. No more piecing together numbers from different systems or worrying about missing a
        transaction. Quaderno’s reports are structured exactly the way state forms require, drastically reducing
        the time and stress of tax season.</p>
      <p className="text-base text-white shadow-text pt-3">
        Quaderno’s approach is stack-independent. It can ingest data from
        any&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>, database, gateway, or marketplace platform. This
        means your business is not locked into a single payment processor or e-commerce tool. If your setup
        changes as you grow, Quaderno adapts with you. For developers, the platform offers a clean,
        transaction-first RESTful&nbsp;API&nbsp;with dedicated sandbox
        access, making it easy to integrate and test without disrupting your live environment. This flexibility
        is crucial for growing brands that need to add or change systems without breaking compliance.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and privacy are built in. Quaderno is GDPR compliant, with bank-grade encryption for all
        financial data, both at rest and in transit. Multi-factor authentication and role-based permissions keep
        sensitive information restricted to the right people on your team. For small businesses worried about
        audit risk or customer privacy, this is not a luxury, it is a necessity.</p>
      <p className="text-base text-white shadow-text pt-3">
        The result is a week that looks different. The team that used to spend Friday afternoons checking
        thresholds now sees alerts in real time. Invoices that once took hours to customize for each state are
        generated and delivered automatically. Filing that meant a week of stress at quarter-end becomes a
        matter of downloading a report and submitting it. Mistakes, overcharging tax, missing a registration,
        sending the wrong receipt, are caught before they happen, not after an audit. For
        the&nbsp;SaaS&nbsp;founder or e-commerce manager, this means
        more time spent on growth and less on compliance. The cost of manual tracking, lost hours, missed sales,
        audit risk, disappears.</p>
      <blockquote cite="https://quaderno.io/product/monitor/" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Quaderno checks every sale against the rules in each market you sell in, so you know where you stand
        long before a registration deadline.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        Quaderno’s automation is not just about saving time. It is about making sure every sale is compliant,
        every invoice is correct, and every filing is ready, no matter how quickly your business grows or how
        many states you sell into. For small businesses in South Florida, this is the difference between scaling
        with confidence and stalling out under the weight of compliance.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-quaderno-removes-the-weekly-burden-of-multi-state-sales-tax-nexus" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Quaderno Removes the Weekly Burden of Multi-State Sales Tax Nexus
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-quaderno-removes-the-weekly-burden-of-multi-state-sales-tax-nexus-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Quaderno Removes the Weekly Burden of Multi-State Sales Tax Nexus
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
