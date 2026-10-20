import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        QuickBooks is built as a modular, cloud-based platform that brings together financial, operational, and
        inventory data for small businesses. Its architecture is designed to support both the day-to-day needs
        of a growing company and the complexity that comes with scale, without requiring a
        full&nbsp;ERP&nbsp;deployment.
        The core of QuickBooks is its unified data layer, which holds all transactions, approvals, and user
        actions in a single, structured environment. This structure is what allows for real-time reporting, deep
        automation, and secure access controls.</p>
      <p className="text-md text-white shadow-text pt-3">
        At its foundation, QuickBooks organizes data into ledgers, lists, and workflow objects. Every invoice,
        bill, payment, or inventory movement is an object with its own attributes, amount, date, vendor,
        approval status, and so on. These objects are linked to the chart of accounts, locations, classes, and
        projects, which means any transaction can be sliced and analyzed across multiple dimensions. This is not
        a flat spreadsheet or a collection of disconnected files. It is a relational structure that lets the
        platform update, report, and reconcile data as soon as it arrives.</p>
      <p className="text-md text-white shadow-text pt-3">
        User management is deeply embedded in the architecture. QuickBooks supports up to 25 users in the
        Advanced plan, each with configurable roles and permissions. The system enforces these roles at the
        database level, so a user with expense access cannot see payroll, and a field tech submitting receipts
        cannot edit the general ledger. This is not just a front-end control. Every access point, whether via
        the web interface, mobile app,
        or&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>, checks
        permissions before allowing a view or edit. When a user is added or removed, the system updates access
        instantly across all modules.</p>
      <p className="text-md text-white shadow-text pt-3">
        Connections to other systems are handled through direct integrations and data sync tools. QuickBooks
        includes Spreadsheet Sync, which links live financial data with Excel for custom reporting and analysis.
        This means you can build dashboards or reports in Excel, pulling current numbers directly from
        QuickBooks, without manual exports or data re-entry. For inventory and workflow automation, the platform
        integrates with barcode scanners and mobile data collection devices, updating stock levels and order
        status in real time. These integrations are native to the platform, no custom coding required.</p>
      <p className="text-md text-white shadow-text pt-3">
        The inventory engine is another key architectural piece. QuickBooks tracks inventory across multiple
        locations, down to the bin or pallet. Movement between sites, assembly builds, and inventory adjustments
        are all logged and linked to both financial and operational records. For businesses with complex needs,
        such as manufacturing or distribution, this means you can see stock levels, costs, and margin
        performance by location, product, or project. The system supports cycle counts, full physical inventory,
        and even lot and serial tracking for regulated goods.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security is built into every layer. QuickBooks uses bank-level encryption for data at rest and in
        transit. Multi-factor authentication is standard for user logins, and the platform monitors for
        suspicious activity, blocking unauthorized access. Every transaction, approval, and change is logged for
        audit purposes. When something goes wrong, whether a data entry error or a fraud attempt, the system can
        roll back to a previous state, so the business recovers quickly.</p>
      <p className="text-md text-white shadow-text pt-3">
        For reporting, QuickBooks’ architecture includes a custom report builder and real-time dashboards. The
        reporting engine pulls from the unified data store, allowing users to filter, group, and drill down
        across any dimension, by department, location, customer, or class. Reports can be saved as templates,
        exported, or shared with outside accountants or auditors using secure, role-based access. This
        flexibility means a business gets both the standard financial statements (balance sheet, P&amp;L, cash
        flow) and the custom views needed for operational decisions.</p>
      <p className="text-md text-white shadow-text pt-3">
        QuickBooks holds all historical data, not just the current period. This allows for trend analysis,
        forecasting, and scenario planning. The forecasting tools leverage both posted and pending transactions,
        updating projections as soon as new data hits the system. Cash flow forecasts, for example, pull from
        sales, payables, payroll, and inventory commitments, so the numbers reflect reality, not just what was
        true last month.</p>
      <p className="text-md text-white shadow-text pt-3">
        The architecture also supports non-disruptive scaling. As a business adds locations, users, or
        transaction volume, QuickBooks expands capacity without forcing a migration or interface change. The
        same applies to integrations, new data sources or tools can be connected as needed, without breaking
        existing workflows. For a small business in Broward that starts with a single user and grows to a
        multi-location operation, the system adapts in place.</p>
      <p className="text-md text-white shadow-text pt-3">
        All of this sits behind a familiar interface. QuickBooks keeps the user experience consistent, even as
        the underlying architecture handles more data, more users, and more complexity. This is what allows a
        small team to get the benefits of enterprise-grade automation, security, and reporting, without the pain
        of a
        full&nbsp;ERP&nbsp;rollout.
        For Intelligent Resource Planning, this architecture is what makes real-time insight, secure control,
        and effortless scaling possible.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-sits-under-the-hood-quickbooks-architecture-connections-and-data-structure" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Sits Under the Hood: QuickBooks’ Architecture, Connections, and Data Structure
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
              <h2 id="what-sits-under-the-hood-quickbooks-architecture-connections-and-data-structure-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Sits Under the Hood: QuickBooks’ Architecture, Connections, and Data Structure
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
