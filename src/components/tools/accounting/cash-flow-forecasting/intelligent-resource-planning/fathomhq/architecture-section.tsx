
export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Fathom is designed as a cloud-based platform that connects directly to the accounting and operational
        systems small businesses already use. Its architecture centers on integrations, real-time data sync, and
        a flexible data model that supports both financial and non-financial metrics. The result is a system
        that does not require businesses to rip out their existing tools, instead, it sits on top, pulling data
        from sources like Xero, QuickBooks, MYOB, Sage 50, Excel, and Google Sheets. This integration-first
        approach is what makes Fathom practical for teams with mixed or legacy systems.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first layer is the integration engine. Fathom supports native connections to popular accounting
        platforms, with daily automated syncs that keep numbers up to date. For QuickBooks Online and Desktop,
        Xero, and MYOB, the sync happens automatically, but users can also trigger a manual refresh if they need
        the latest figures for a meeting or report. For Excel and Google Sheets, Fathom imports data directly,
        so teams that still track some metrics outside their accounting software can bring it into the same
        dashboard. This means you do not have to rebuild your entire process to use Fathom, you connect what you
        have, and it works with your data as it is.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once connected, Fathom builds a unified data store that holds financial transactions, account
        structures, and custom KPIs. The system can map complex chart of accounts, handle multiple financial
        year-ends, and consolidate results across up to 300 entities in a single-currency group or 50 in a
        multi-currency setup. Each entity’s data stays separate for local reporting, but Fathom rolls everything
        up for group-level analysis. The platform handles currency conversion using default rates or
        user-specified ones, so international businesses can see consolidated numbers in a single reporting
        currency. Intercompany eliminations are built in, Fathom lets you remove internal transactions to avoid
        double-counting revenue or expenses.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the analytics side, Fathom’s architecture supports both out-of-the-box and custom metrics. The
        platform includes over 50 standard KPIs, but users can define their own using a formula builder. This is
        not limited to financial data, the architecture allows importing operational or non-financial data (such
        as headcount, square footage, or customer satisfaction scores) via spreadsheet or Google Sheets. All
        these metrics are stored in the same system, so dashboards and reports can blend financial and
        non-financial drivers in a single view. For businesses that want to track performance across sales,
        operations, and customer service, this flexibility is essential.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting and visualization are core to how Fathom is built. The platform’s reporting engine uses
        pre-built templates that can be customized and reused across entities, periods, or clients. Visual
        storytelling is a focus, charts, graphs, and dashboards are designed for clarity, not just data
        completeness. Reports can be scheduled for automatic delivery, and every version is stored for audit
        trails or future reference. For teams that need to present to boards, banks, or investors, Fathom
        outputs polished, branded packs with AI-generated commentary and variance analysis. These are not just
        static PDFs, interactive dashboards are available in the platform for real-time exploration.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and scalability are built in from the start. Fathom is cloud-hosted, so teams can access it
        from anywhere, with role-based permissions to control who sees what. The architecture supports scaling
        from a single entity to hundreds, with no change in how the system is set up. For businesses that grow
        by acquisition or open new locations, adding an entity is a matter of connecting the accounting data,
        Fathom handles the rest. The platform’s data model means each entity can have its own reporting
        calendar, but group-level dashboards and KPIs always stay in sync.</p>
      <p className="text-base text-white shadow-text pt-3">
        Fathom’s architecture is built to reduce friction. It does not force small businesses to change how they
        work; instead, it brings order and visibility to the systems they already have. For South Florida teams
        with a mix of cloud and desktop tools, or those who still rely on spreadsheets for some processes, this
        is a practical path to Intelligent Resource Planning. Fathom brings all the data into one place, makes
        it live and actionable, and scales as the business grows, without the pain of a
        full&nbsp;ERP&nbsp;overhaul.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="fathom-s-architecture-what-it-integrates-where-data-lives-and-how-it-scales" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Fathom’s Architecture: What It Integrates, Where Data Lives, and How It Scales
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
              <h2 id="fathom-s-architecture-what-it-integrates-where-data-lives-and-how-it-scales-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Fathom’s Architecture: What It Integrates, Where Data Lives, and How It Scales
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
