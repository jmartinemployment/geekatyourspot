import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Quaderno’s strength for small businesses in South Florida is its ability to centralize and automate the
        rules that trigger sales tax obligations across states. Geek @ Your Spot configures Quaderno to match
        your real-world sales flows, so the platform monitors changing thresholds, applies the right tax rates,
        and generates the correct documents for every sale, no matter how many states you cross into.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first layer is threshold monitoring. Quaderno tracks your sales volume and transaction count in
        every state, updating in real time as new sales come in. This is not a generic alert system. The
        platform’s rules engine compares your activity against each state’s economic nexus trigger, usually
        $100,000 in sales or 200 transactions, but varying by state. When you get close to a threshold, Quaderno
        issues proactive alerts so you can register before you are legally required to collect tax. These alerts
        are not just emails, they are workflow triggers. Geek @ Your Spot sets up the system so that as soon as
        a threshold is hit, your team knows exactly which state needs attention and what the next step is.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tax calculation is the next piece. Quaderno’s automation logic pulls live tax rules for each
        jurisdiction, so every invoice or receipt applies the right rate for the product and location. This
        covers not just state taxes, but also local city and county levels. For digital products
        and&nbsp;<GlossaryLink slug="saas">SaaS</GlossaryLink>, the tool handles the complexity of what is
        taxable in one state and exempt in another. Geek @ Your Spot configures product categories and tax
        codes, mapping your catalog to Quaderno’s rule set. This means a sale in Texas that is taxable, but
        exempt in Florida, is handled automatically, no manual override needed.</p>
      <p className="text-md text-white shadow-text pt-3">
        Invoicing and documentation are automated as well. Quaderno generates tax-compliant invoices for every
        transaction, in the buyer’s language and currency where needed, and structured to meet each state’s
        legal requirements. The system can handle recurring invoices for subscriptions, issue credit notes for
        refunds, and apply reverse-charge rules for B2B sales. Geek @ Your Spot ensures these document templates
        match your branding and legal needs, so you meet audit requirements without extra work.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses using multiple sales channels or payment processors, Stripe, PayPal, Braintree, Shopify,
        WooCommerce, Amazon FBA, Quaderno’s automation logic brings all sales data into one compliance
        dashboard. Geek @ Your Spot connects each platform using Quaderno’s built-in integrations
        and&nbsp;<GlossaryLink slug="api">API</GlossaryLink>. This centralizes your compliance view and prevents
        duplicate or missed invoices. The&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;also allows for
        custom workflows if your business has unique needs, such as syncing with custom-built checkout systems
        or importing sales data from CSV files.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security and access control are configured to match your team’s roles. Quaderno supports multi-factor
        authentication and granular permissions, so only authorized users can view or edit sensitive tax data.
        Geek @ Your Spot sets up these controls during onboarding, ensuring your financial data is protected at
        every step.</p>
      <p className="text-md text-white shadow-text pt-3">
        The extension mechanism is mainly through Quaderno’s&nbsp;<GlossaryLink slug="api">API</GlossaryLink>,
        which is designed for transaction-first data flows. This means your developers (or Geek @ Your Spot, if
        you outsource it) can push sales data, trigger compliance checks, or pull tax reports programmatically.
        The&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;is clean and decoupled, if your database
        schema changes, Quaderno’s compliance logic stays stable. For most small businesses, the pre-built
        connectors and self-serve onboarding cover the core needs, but
        the&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;is there if your workflow is more complex.</p>
      <p className="text-md text-white shadow-text pt-3">
        What Geek @ Your Spot does that a DIY setup cannot is in the details: mapping your product types to the
        right tax codes, configuring threshold alerts to match your risk tolerance, setting up invoice templates
        for every jurisdiction, and ensuring all integrations are tested before go-live. Most problems with tax
        automation come from missed details in configuration, not from the software itself. Geek @ Your Spot’s
        role is to close those gaps, so you get the full value of Quaderno’s automation without the risk of a
        silent compliance failure.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-quaderno-s-rules-and-automation-logic-get-configured-for-multi-state-sales-tax-nexus" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Quaderno’s Rules and Automation Logic Get Configured for Multi-State Sales Tax Nexus
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
              <h2 id="how-quaderno-s-rules-and-automation-logic-get-configured-for-multi-state-sales-tax-nexus" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Quaderno’s Rules and Automation Logic Get Configured for Multi-State Sales Tax Nexus
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
