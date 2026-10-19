import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Cashflowfrog’s architecture is designed for seamless integration, robust security, and flexible data
        handling. The platform is cloud-based, with direct connections to the accounting and banking tools that
        small businesses in South Florida actually use. Its structure is built to minimize setup time, eliminate
        data silos, and ensure that every forecast is based on live, accurate numbers, never a lagging snapshot.</p>
      <p className="text-md text-white shadow-text pt-3">
        At its core, Cashflowfrog connects to a wide range of accounting platforms. These include QuickBooks
        Online, QuickBooks Desktop, Xero, Sage Intacct, Odoo, Zoho Books, and FreshBooks. For businesses that do
        not use any of these, Cashflowfrog can pull bank transactions directly via Plaid or process imported
        Excel files. The system does not require a
        full&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;migration
        or data reformatting project. Instead, it reads the data where it lives, syncing invoices, bills,
        payments, and balances into a unified dashboard.</p>
      <p className="text-md text-white shadow-text pt-3">
        The integration layer is not limited to accounting systems. Cashflowfrog supports&nbsp;<Link id="tools-accounting-intelligent-resource-planning-cashflowfrog-architecture-zapier" href="/tools/marketing/zapier" className="text-[#0B162A] hover:underline">Zapier</Link>, which means it
        can receive data from thousands of other apps, including CRMs, e-commerce platforms, payment processors,
        and spreadsheets. For example, a new deal in HubSpot or a payment in Stripe can trigger a projection in
        Cashflowfrog automatically. This keeps forecasts current as your business activity happens, not just
        when someone remembers to update a spreadsheet.</p>
      <p className="text-md text-white shadow-text pt-3">
        AI is woven into the core architecture, not bolted on. Cashflowfrog connects to AI assistants like
        Claude and ChatGPT through MCP, allowing users to query forecasts, add scenarios, and update projections
        using natural language. This integration means the tool can be operated by non-accountants and technical
        users alike, lowering the barrier to real financial insight.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data in Cashflowfrog is always read-only when it comes to your accounting system. The platform never
        writes back to QuickBooks, Xero, Odoo, or any other ledger. This reduces risk and preserves the
        integrity of your source data. For QuickBooks Desktop and Odoo, the connection is strictly read-only,
        ensuring that no accidental changes can be made to your books from the forecasting tool. This is a
        critical safeguard for small teams that cannot afford a data mishap.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security is enterprise-grade. Cashflowfrog holds ISO 27001 certification, follows GDPR compliance
        standards, and uses 256-bit encryption for data at rest and in transit. Role-based access controls and
        audit-friendly design mean that only authorized users can view or manage sensitive information.
        Two-factor authentication is available, and you can disconnect your data at any time, there is no
        lock-in or hidden data retention.</p>
      <p className="text-md text-white shadow-text pt-3">
        The data model inside Cashflowfrog is structured for cash flow planning, not just reporting. It supports
        daily, weekly, monthly, and quarterly views, rolling forecasts up to three years out, and scenario
        comparisons that run side by side. Forecasts can be broken down by vendor, customer, class, location,
        department, or project, depending on how your accounting system is set up. This level of granularity is
        essential for intelligent resource planning in businesses where cash flow drivers vary by client,
        product line, or business unit.</p>
      <p className="text-md text-white shadow-text pt-3">
        Multi-entity consolidation is native. Cashflowfrog can combine unlimited companies or divisions into a
        single forecast, with automatic currency conversion if needed. This is not just a reporting convenience,
        it makes it possible to see the true cash position of the whole business, across all entities, without
        manual merges or error-prone spreadsheet work.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bank data is handled with the same rigor as accounting data. When connected via Plaid or Excel,
        transactions are imported securely and mapped to the correct forecast lines. Payment matching and
        reconciliation are automated, reducing the chance of duplicate entries or missed transactions. For
        businesses that run outside traditional accounting platforms, this ensures the forecast is still
        grounded in real cash movement, not assumptions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scenario management is built into the architecture. You can create, duplicate, and compare scenarios
        without overwriting your base plan. Each scenario can be exported, edited offline, and re-uploaded, a
        workflow that supports both automated and manual planning styles. The tool keeps a clear record of what
        changed, when, and by whom, supporting audit trails and compliance needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        The dashboard aggregates data from all connected sources and presents it in real time. Key metrics, cash
        on hand, future cash position, liquidity, net debt, and variances, are available at a glance. Drill-down
        links take you from any headline figure to the underlying transaction, so you can always trace the
        source of a number. Alerts and warnings are surfaced based on live data, not static thresholds, so you
        are notified of risks as soon as they develop.</p>
      <p className="text-md text-white shadow-text pt-3">
        Cashflowfrog’s architecture is designed to be extensible. As new integrations and features are released,
        they are added to the platform without requiring a major upgrade or migration. This means your
        forecasting and planning tools stay current as your business and technology stack evolves.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Cashflowfrog’s platform is engineered for the realities of small business resource planning:
        fragmented systems, limited technical bandwidth, and the need for real-time, reliable numbers. Its
        architecture connects directly to the tools you already use, holds your data securely, and delivers a
        live, consolidated view of your financial future, without the manual work or risk that comes with
        traditional forecasting approaches.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="cashflowfrog-s-architecture-integrations-data-handling-and-security-for-modern-resource-planning" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Cashflowfrog’s Architecture: Integrations, Data Handling, and Security for Modern Resource Planning
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
              <h2 id="cashflowfrog-s-architecture-integrations-data-handling-and-security-for-modern-resource-planning" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Cashflowfrog’s Architecture: Integrations, Data Handling, and Security for Modern Resource Planning
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
