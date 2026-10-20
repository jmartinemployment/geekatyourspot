import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Getting Quaderno live in a small business environment is direct, but only if you know what shortens the
        path. South Florida&nbsp;<GlossaryLink slug="saas">SaaS</GlossaryLink>&nbsp;and e-commerce teams face a
        real gap here: you cannot afford a
        multi-month&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;rollout, nor a parade of consultants.
        You need the compliance engine set up, mapped, and running before the next quarter’s filings. Quaderno’s
        approach is built for this reality.</p>
      <p className="text-md text-white shadow-text pt-3">
        The biggest time-saver is Quaderno’s set of pre-built connectors for the platforms you already use.
        Stripe, PayPal, Shopify, WooCommerce, Xero, and QuickBooks Online are all supported with native
        integrations. This means you do not start from a blank slate or need to code custom bridges. Once you
        authenticate your accounts, Quaderno pulls in sales, payment, and customer data directly. There is no
        spreadsheet shuffle or manual export step. For most small businesses, this eliminates the single largest
        source of go-live delay: waiting for a developer to wire up the data feeds.</p>
      <p className="text-md text-white shadow-text pt-3">
        The order matters. Start by connecting payment processors and storefronts first, Stripe, PayPal,
        Shopify, WooCommerce, Amazon FBA, so Quaderno can ingest real transaction data. This initial sync gives
        you a live view of where your sales are happening, which states or countries you are nearing a nexus
        threshold, and what your current exposure looks like. Only after the data is flowing do you configure
        tax rules, invoice templates, and reporting preferences. This sequence means you are working with real
        numbers, not hypothetical setups, and you can spot issues with data mapping or duplicate invoices right
        away.</p>
      <p className="text-md text-white shadow-text pt-3">
        For clients with a complex footprint, multiple channels, different product lines, or historical sales
        that need to be reviewed, Quaderno’s ability to aggregate and centralize tax data across all connected
        platforms is critical. You do not need to reconcile sales from WooCommerce and Shopify separately or
        track down missing PayPal payments. Quaderno totals your sales by state and country across every
        channel, so you can see at a glance where you stand against each jurisdiction’s rules. This is not just
        a reporting convenience; it means you catch exposure before it turns into a penalty.</p>
      <p className="text-md text-white shadow-text pt-3">
        Phased rollout is another shortcut. You do not need to set up every advanced rule or reporting template
        on day one. Most small teams start with core sales channels and default invoice logic, then extend to
        edge cases, like B2B reverse charge, digital product exemptions, or multi-currency handling, as real
        transactions surface those needs. Quaderno’s dashboard flags missing data, unclassified transactions, or
        incomplete mappings, so you can fix gaps as you go without blocking the entire rollout.</p>
      <p className="text-md text-white shadow-text pt-3">
        For South Florida clients, the difference is clear by the second week: the team that started with
        Quaderno’s connectors and a phased approach is already seeing live compliance alerts and tax-ready
        invoices, while the one stuck in manual mapping or waiting on a developer is still running test exports.
        Geek @ Your Spot LLC’s role is to keep the process short and focused, mapping your real sales flows to
        Quaderno’s connectors, validating that the data is flowing cleanly, and configuring the alerts and
        reports you actually need. No generic templates, no extra steps. The goal is live compliance in days,
        not months.</p>
      <p className="text-md text-white shadow-text pt-3">
        The critical path always runs through payment and sales channel integration, initial data sync, mapping
        validation, then incremental rule configuration. Skip the custom build, skip the manual exports, and let
        Quaderno’s connectors do the heavy lifting upfront. That is what shortens go-live for small teams facing
        Multi-State Sales Tax Nexus.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-shortens-go-live-with-quaderno-steps-order-and-the-role-of-pre-built-connectors" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Shortens Go-Live With Quaderno: Steps, Order, and the Role of Pre-Built Connectors
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-shortens-go-live-with-quaderno-steps-order-and-the-role-of-pre-built-connectors" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Shortens Go-Live With Quaderno: Steps, Order, and the Role of Pre-Built Connectors
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
