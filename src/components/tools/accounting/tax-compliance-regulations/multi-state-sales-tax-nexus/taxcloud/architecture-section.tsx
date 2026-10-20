import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        TaxCloud’s architecture is designed for flexibility and scale, connecting to the platforms South Florida
        businesses already use and keeping every piece of compliance data in sync. The backbone is a real-time
        calculation engine that sits between your sales channels and your accounting
        or&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;system.
        This engine is built to process thousands of transactions per hour, flagging each one for taxability,
        rate, and exemption status as soon as it enters the system.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integrations are a core part of TaxCloud’s approach. The platform offers plug-and-play connections with
        Shopify, BigCommerce, WooCommerce, Magento, QuickBooks Online, Stripe, Chargebee, and other
        major&nbsp;SaaS&nbsp;tools.
        For platforms like Odoo, Adobe Commerce, Miva, and AcctVantage, TaxCloud supports both real-time and
        batch data flows. If your stack is built on QuickBooks, for example, TaxCloud can pull invoice data,
        apply the correct tax codes, and push back the results, no manual export or import required. For Shopify
        and Stripe, TaxCloud works alongside their native tax calculation, handling the filing, remittance, and
        audit support that those platforms do not cover on their own.</p>
      <p className="text-md text-white shadow-text pt-3">
        The system uses a single source of truth for transaction data. All sales, refunds, and adjustments flow
        into TaxCloud’s central database, which is structured to track every order by jurisdiction, product
        type, and customer status. This is what lets TaxCloud generate accurate, return-ready reports and keep
        your audit trail complete. Exemption certificates are managed in the same system, so B2B sellers can
        attach certificates directly to invoices and have them validated against state requirements.</p>
      <p className="text-md text-white shadow-text pt-3">
        TaxCloud’s rate engine is updated automatically. The platform maintains a database of more than 13,000
        tax jurisdictions, with rates adjusted in real time as states and cities update their laws. In non-SST
        states, TaxCloud uses granular ZIP code and rooftop-level data to ensure accuracy. In SST states, the
        system applies certified rates and rules, and handles the required boundary updates. This means you
        never have to worry about missing a new local tax or applying an out-of-date rate.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses that need more, TaxCloud exposes a
        developer-friendly&nbsp;API&nbsp;with
        full documentation and a sandbox for testing. This allows custom integrations or advanced workflows,
        such as syncing with in-house order management systems or building tailored dashboards.
        The&nbsp;API&nbsp;is
        included in the free trial, so you can prototype integrations before committing.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security and audit readiness are built in. All filings, payments, and certificates are stored securely,
        with access controls for different team members or outside accountants. During an audit, you can export
        the full history of filings, payment confirmations, and exemption documents in a format accepted by
        state authorities. This makes it possible to respond to an audit request in hours, not weeks.</p>
      <p className="text-md text-white shadow-text pt-3">
        TaxCloud’s architecture supports both small teams and growing companies. A business running a single
        Shopify store can get started with the Starter plan, connecting sales channels and automating basic
        compliance. As complexity grows, more channels, more states, higher sales volume, TaxCloud’s Premium
        plan adds real-time integrations, custom APIs, and more advanced reporting. For eligible businesses,
        joining the SST program through TaxCloud means free calculation and filing in 24 states, with no
        standard filing fees. In all cases, the system is designed to scale as you do, without requiring a
        rebuild or migration.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a South Florida business expanding into new states, TaxCloud’s architecture means you never have to
        stitch together spreadsheets, chase down missing certificates, or guess at which rates apply. Everything
        flows through one system, with every integration and data flow tuned to keep you compliant and
        audit-ready at all times.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="inside-taxcloud-integrations-data-flows-and-how-it-stays-accurate" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Inside TaxCloud: Integrations, Data Flows, and How It Stays Accurate
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="inside-taxcloud-integrations-data-flows-and-how-it-stays-accurate-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Inside TaxCloud: Integrations, Data Flows, and How It Stays Accurate
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
