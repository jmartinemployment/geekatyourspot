import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The fastest path to a working, compliant TaxCloud setup is built around what the platform already knows
        how to do. TaxCloud has pre-built integrations for the systems that small businesses in Miami-Dade,
        Broward, and West Palm Beach actually use: Shopify, WooCommerce, BigCommerce, Magento, QuickBooks
        Online, Stripe, Chargebee, and several&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;platforms.
        These connectors mean you do not need custom development or weeks of technical back-and-forth. For most
        teams, going live is a matter of connecting the right accounts and mapping data fields, not building
        something from scratch.</p>
      <p className="text-md text-white shadow-text pt-3">
        A typical deployment starts with a phased approach. The first step is to connect your main sales
        channels, Shopify, WooCommerce, or BigCommerce, using TaxCloud’s plug-and-play connectors. This brings
        in order data and tax details automatically. Next, you connect your accounting
        or&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;platform, such as QuickBooks Online or Odoo.
        The system pulls in invoices, payments, and customer records needed for compliance reporting. If you
        have subscription billing through Stripe or Chargebee, those integrations come next. Each connector is
        designed for minimal manual mapping. For most small businesses, the integration process is measured in
        days, not weeks.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real time-saver is that TaxCloud does not require you to reformat or re-enter historical data. It
        can import transaction history from CSV files or directly from your system, so you get full compliance
        coverage from day one. For teams switching from a tool like Avalara or&nbsp;<Link id="tools-accounting-multi-state-sales-tax-nexus-taxcloud-implementing-taxjar" href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar" className="text-[#C83803] hover:underline">TaxJar</Link>, TaxCloud supports guided
        migration, moving your historical sales data into the new platform, aligning it to state-by-state nexus
        rules, and ensuring your filings start clean. This avoids the usual pain of missing records or
        mismatched transactions that can trigger audit flags later.</p>
      <p className="text-md text-white shadow-text pt-3">
        TaxCloud’s templated setup for each connector covers the most common use cases, but it is flexible
        enough to handle exceptions. For example, if you sell both taxable and exempt products, or if you have
        B2B and B2C sales, the platform can be configured to apply the right taxability rules and exemption
        logic per channel. The system includes built-in support for exemption certificate management, so you do
        not have to bolt on a separate tool or track certificates in spreadsheets.</p>
      <p className="text-md text-white shadow-text pt-3">
        Most deployments follow this order:</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Connect ecommerce, billing, and accounting platforms using TaxCloud’s pre-built integrations.</li>
        <li>Import historical sales and tax data, either by direct sync or CSV upload.</li>
        <li>Map product categories and customer types to TaxCloud’s tax codes.</li>
        <li>Review and test tax calculations in a sandbox environment (using the 30-day free trial if needed).</li>
        <li>Enable live calculation and filing, with TaxCloud monitoring nexus exposure and filing deadlines.</li>
        <li>Configure exemption certificate logic and reporting, if needed.</li>
        <li>Go live with automated calculation, registration, and filing across all required states.</li>
      </ol>
      <p className="text-md text-white shadow-text pt-3">
        What shortens the timeline? Using platforms already on TaxCloud’s supported list, having clean sales and
        customer data, and keeping your product catalog mapped to standard categories. The more your business
        has standardized SKUs and well-structured records, the less time you spend on manual mapping or
        exception handling. For most small businesses, the full process, connection, mapping, testing, and
        go-live, can be completed in under two weeks, with no downtime for your storefront or accounting
        operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout, TaxCloud’s onboarding and support teams are available by phone and email. If you need to
        move from another provider, they can guide you through the migration. For more complex environments,
        like multi-entity or multi-channel setups, TaxCloud’s templated rollout supports phased launches,
        bringing one channel live at a time, validating calculations, and then expanding coverage. This staged
        approach keeps risk low and lets your team see results fast, without taking on all states or all
        channels at once.</p>
      <p className="text-md text-white shadow-text pt-3">
        The key to a smooth deployment is letting TaxCloud’s automation do the heavy lifting. Manual compliance
        processes, like tracking state-by-state rules, updating tax rates, or calculating home-rule district
        taxes, are replaced by real-time, rooftop-level calculations and automated filing. The only manual work
        left is reviewing exception reports and responding to alerts if a new nexus threshold is about to be
        crossed. For a small business with limited staff, this means you can expand into new states or channels
        without adding headcount or risking non-compliance.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, going live with TaxCloud is not a traditional IT project. It is a business process change
        that leverages automation, pre-built connectors, and templated rollout to remove hours of manual work
        and eliminate compliance risk. For South Florida businesses, this means selling across state lines no
        longer brings the threat of hidden tax bills or surprise audits. It is a fast, structured process that
        gets you compliant and keeps you there, with minimal disruption to your existing systems.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="getting-taxcloud-live-what-speeds-deployment-and-what-to-expect-in-your-stack" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Getting TaxCloud Live: What Speeds Deployment and What to Expect in Your Stack
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
              <h2 id="getting-taxcloud-live-what-speeds-deployment-and-what-to-expect-in-your-stack" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Getting TaxCloud Live: What Speeds Deployment and What to Expect in Your Stack
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
