
export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Configuring TaxCloud is about making sure every step of your multi-state sales tax process is automated,
        accurate, and tailored to your business. Geek @ Your Spot LLC handles the setup, but the value comes from
        what TaxCloud itself can automate and how it adapts to your sales environment. This is not a generic set
        of toggles or a one-size-fits-all template. TaxCloud’s own rules and automation logic get set up for
        your real sales flows, products, and channels, so compliance is handled without manual intervention.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first layer of configuration is nexus tracking. TaxCloud monitors your sales across every state and
        channel, Shopify, WooCommerce, Amazon, QuickBooks, Stripe, and more. It tracks both revenue and
        transaction counts, not just for your main site but for every connected platform. The system sends
        alerts when you’re getting close to a state’s economic nexus threshold, so you know exactly when you
        need to register. This is a live, automated dashboard, not a static report. Geek @ Your Spot LLC maps your
        sales data into TaxCloud’s engine, ensuring nothing is missed, and the logic reflects the latest state
        rules.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once a threshold is hit, registration rules trigger. TaxCloud can automate registration in states where
        you now have nexus, especially in the 24 Streamlined Sales Tax (SST) states. Here, the platform’s
        automation logic handles the paperwork, so you don’t have to. Geek @ Your Spot LLC configures these triggers
        and ensures the right information flows from your systems into TaxCloud’s registration module, reducing
        the risk of missed deadlines or incomplete filings.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tax rate calculation is where TaxCloud’s automation stands out. Instead of relying on flat-rate tables
        or basic ZIP code lookups, TaxCloud calculates sales tax down to the rooftop level. This means the exact
        rate for the customer’s street address, accounting for every city, county, and special district tax that
        applies. Geek @ Your Spot LLC configures the taxability codes for your products, mapping them to each
        state’s definitions, so the right rate is used every time. For non-SST states, TaxCloud’s granular ZIP
        code data ensures you stay compliant even where local rates change frequently.</p>
      <p className="text-md text-white shadow-text pt-3">
        Filing automation is another critical piece. TaxCloud prepares, packages, and submits returns on the
        right schedule for every state where you’re registered, monthly, quarterly, or annually. The system
        knows each state’s deadlines and formats, so filings go in on time and in the right structure. Geek @ Your Spot LLC sets up the schedule and ensures the data flows from your sales channels into TaxCloud’s
        reporting engine, so you never have to chase down missing transactions or correct mismatched numbers.
        When returns are due, the system submits them directly to the state, and remits the collected tax,
        closing the loop without manual intervention.</p>
      <p className="text-md text-white shadow-text pt-3">
        Exemption certificate management is built in. TaxCloud stores, validates, and applies exemption
        certificates for B2B sales, so you don’t have to track paper forms or risk invalid exemptions during an
        audit. Geek @ Your Spot LLC configures the rules for when exemptions apply, sets up certificate collection
        workflows, and ensures every exemption is tied to the right customer and transaction in TaxCloud’s
        system.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is core to every configuration. TaxCloud offers plug-and-play connections for platforms like
        Shopify, BigCommerce, WooCommerce, Magento, QuickBooks Online, Stripe, Chargebee, and Odoo. On the
        Starter plan, hands-off data movers automate syncing with your main sales channels. Premium users get
        access to real-time integrations and custom APIs, so high-volume or multi-channel businesses can push
        and pull sales data without custom coding. Geek @ Your Spot LLC’s role is to connect these systems, map the
        data fields, and ensure every transaction lands in TaxCloud’s compliance workflow. If your stack is more
        complex, custom&nbsp;API&nbsp;endpoints are available for deeper
        automation.</p>
      <p className="text-md text-white shadow-text pt-3">
        TaxCloud is not a scripting or workflow automation platform, you configure its compliance logic, not
        arbitrary business rules. There is no scripting language or custom workflow builder. The extensibility
        comes from its&nbsp;API&nbsp;and the range of prebuilt
        integrations. Where your process needs to go beyond those, Geek @ Your Spot LLC handles the mapping and any
        middleware needed to bridge systems, but the core compliance logic always lives in TaxCloud itself.</p>
      <p className="text-md text-white shadow-text pt-3">
        Audit readiness is the last piece. TaxCloud keeps a full audit trail of every transaction, exemption,
        filing, and payment. All records are accessible and exportable, so you can respond to state inquiries or
        audits without scrambling for documents. Geek @ Your Spot LLC ensures the right users have access, and the
        data retention matches your risk profile.</p>
      <p className="text-md text-white shadow-text pt-3">
        The end result: TaxCloud’s configuration is about removing manual work and closing every compliance gap.
        Geek @ Your Spot LLC’s implementation ensures the rules, mappings, and integrations are set up for your real
        business, not just the demo. Once live, you can trust the system to handle registration, calculation,
        filing, exemption management, and audit support, so your team gets out of the compliance business and
        back to growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-taxcloud-rules-automation-and-extensions" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in TaxCloud: Rules, Automation, and Extensions
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
              <h2 id="what-gets-configured-in-taxcloud-rules-automation-and-extensions-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in TaxCloud: Rules, Automation, and Extensions
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
