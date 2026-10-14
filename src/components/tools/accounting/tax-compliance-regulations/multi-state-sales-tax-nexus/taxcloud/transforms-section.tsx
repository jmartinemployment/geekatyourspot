import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        TaxCloud changes the week for a small business in South Florida dealing with multi-state sales tax.
        Instead of spending hours tracking thresholds and due dates, the team sees real-time alerts as they
        approach nexus in any state. TaxCloud connects directly to Shopify, Amazon, QuickBooks, BigCommerce,
        WooCommerce, and more. It does not just import sales data, it consolidates transactions across every
        channel, so no state is missed and no report is left incomplete. This is not a dashboard that needs
        daily checking; it is a system that flags you the moment you are close to a threshold, so you never miss
        the point where registration is required.</p>
      <p className="text-md text-white shadow-text pt-3">
        When a business crosses a revenue or transaction line, TaxCloud automates the next steps. It registers
        the business with the right state agencies, sets up account numbers, and starts collecting the correct
        tax at checkout. There is no lag between compliance need and system response. TaxCloud’s engine
        calculates tax in real time, using rooftop-level geolocation, not just ZIP codes, so every order gets
        the exact rate required by state, city, and local district. This means no more under-collecting in
        home-rule states or missing a city surcharge. The risk of audit from rate errors drops to near zero.</p>
      <p className="text-md text-white shadow-text pt-3">
        Filing is where most teams lose time, and this is where TaxCloud gives it back. The platform packages
        and submits returns to every state where you are registered, on the schedule each state requires. You do
        not have to track whether a state is monthly, quarterly, or annual, TaxCloud does it. The system files
        zero returns when needed, so there are no surprise penalties for a quiet month. Remittance is handled
        automatically, so funds go to the right tax authority without manual intervention. Teams that used to
        spend entire days on filings now get those days back.</p>
      <p className="text-md text-white shadow-text pt-3">
        TaxCloud is not just for e-commerce.&nbsp;<GlossaryLink slug="saas">SaaS</GlossaryLink>&nbsp;businesses,
        manufacturers, and wholesale distributors all get the same automation. The system tracks economic nexus
        across all 50 states, alerting you when you cross a threshold, and handling the registration,
        collection, and filing that follows. It supports exemption certificate management, storing and
        validating certificates so B2B sellers do not get caught out in an audit. When an auditor comes, all
        records are accessible and can be exported in minutes, not days.</p>
      <p className="text-md text-white shadow-text pt-3">
        The Streamlined Sales Tax (SST) program is a major advantage for small businesses. TaxCloud is a
        Certified Service Provider, so eligible businesses get free registration, calculation, and filing in 24
        participating states. This is not a discount or a trial, it is a state-subsidized service that removes
        filing fees and cuts compliance costs to zero in those states. For the South Florida retailer, that
        means expanding into new markets without worrying about hidden tax bills or unexpected filing charges.
        Filing in non-SST states is pay-as-you-go, with clear, published pricing and no surprise add-ons.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is fast and does not require a developer. TaxCloud’s plug-and-play connections work with the
        sales platforms, ERPs, and accounting tools most small businesses already use. The system can process
        orders in real time or in batch, so whether you are running a flash sale or a steady stream of B2B
        invoices, tax is calculated and tracked without manual
        steps.&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;access and CSV uploads are available for
        custom workflows, and the platform supports both simple Shopify setups and multi-channel, multi-entity
        operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Audit support is built in. TaxCloud keeps a complete history of filings, payments, and certificates, so
        when a state requests documentation, the response is immediate. This is not just about compliance; it is
        about peace of mind. The owner and the team know that every sale, every exemption, and every filing is
        accounted for. No more scrambling for records or worrying about what an auditor might find.</p>
      <blockquote cite="https://taxcloud.com/blog/best-software-for-economic-nexus-tracking/" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        TaxCloud is the best mid-market software for economic nexus tracking because it offers tracking across
        your sales channels.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        For the team in Miami-Dade, the change is immediate. Instead of Friday afternoons spent reconciling
        sales reports and tracking due dates, they see a single dashboard that tells them where they stand in
        every state. When a threshold approaches, TaxCloud flags it. When it is time to register, the system
        handles the paperwork. Tax is calculated at checkout, returns are filed on schedule, and records are
        ready for any audit. The business can scale online and across state lines without adding headcount or
        risking compliance. Hours lost to compliance come back to the team. The anxiety of unknown obligations
        is replaced by the certainty of automated compliance. This is what it means to remove the pain of
        Multi-State Sales Tax Nexus, not just with features, but with time and risk taken off the table.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-taxcloud-removes-the-pain-of-multi-state-sales-tax-nexus-for-small-businesses" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How TaxCloud Removes the Pain of Multi-State Sales Tax Nexus for Small Businesses
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
              <h2 id="how-taxcloud-removes-the-pain-of-multi-state-sales-tax-nexus-for-small-businesses" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How TaxCloud Removes the Pain of Multi-State Sales Tax Nexus for Small Businesses
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
