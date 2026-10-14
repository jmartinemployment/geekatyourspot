import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Most small businesses in Miami-Dade, Broward, and West Palm Beach looking at Intelligent Resource
        Planning are stuck between two extremes: sticking with spreadsheets and basic accounting software, or
        making a risky leap to a full
        enterprise&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>.
        QuickBooks sits in the middle, designed for teams who have outgrown manual work but are not ready for
        the cost, risk, and complexity of
        big&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;platforms.</p>
      <p className="text-md text-white shadow-text pt-3">
        Spreadsheets start as a quick fix, but as soon as you need live numbers across accounts, departments,
        and projects, they turn into a bottleneck. Each month, leaders spend hours checking for errors, chasing
        down the latest version, and patching broken formulas. Reporting lags behind reality. Audit trails are
        weak or missing. The cost is not just time wasted, but decisions made on unreliable data. QuickBooks
        replaces this patchwork with a single, live source of truth. Data flows in automatically. Reports update
        in real time. Approvals and edits are tracked by user. The interface stays familiar, so staff do not
        need weeks of training to adapt.</p>
      <p className="text-md text-white shadow-text pt-3">
        On the other side,
        full&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;systems
        promise deep integration, inventory, finance, HR, and operations under one roof. But for most small
        businesses, the reality is a year of consulting bills, months of data mapping, and a new layer of daily
        admin.&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;projects
        often stall when teams realize they need to redesign their processes just to fit the software. For a
        business with 10 to 25 employees, the cost and disruption can swamp the benefits. QuickBooks takes a
        different path. It brings in
        core&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;features,
        batch processing, workflow automation, multi-location inventory, and custom reporting, without forcing a
        ground-up rebuild of your operations. You get the controls, the audit trails, and the forecasting tools,
        but you keep the pace of a small business, not a Fortune 500.</p>
      <p className="text-md text-white shadow-text pt-3">
        QuickBooks also stands out against basic accounting competitors. Many entry-level tools cap users, limit
        automation, or lock reporting into canned templates. As soon as you need to delegate approvals, restrict
        sensitive data, or automate recurring tasks, these tools force you back into manual workarounds.
        QuickBooks gives you up to 25 users with granular, role-based permissions. You can set exactly who sees
        payroll, who enters expenses, and who approves vendor bills. This is not just a security upgrade. It
        means audit trails are built in, and compliance does not depend on trust alone.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams that need to move data in and out of Excel, QuickBooks offers live sync and batch processing.
        You can build reports that pull current numbers, filter by department or location, and export them for
        further analysis. Unlike tools that break when you scale up, QuickBooks is built to handle higher
        transaction volumes and deeper reporting without losing the speed or flexibility small teams need.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real test comes on Friday afternoon, when the HVAC owner from the opening story tries to close out
        the week. In a spreadsheet world, she is copying numbers from three different files and hoping nothing
        was missed. In a
        heavy&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>, she
        might wait for IT to fix a permissions issue or for a consultant to finish a workflow update. With
        QuickBooks, she sees the latest cash flow, outstanding invoices, and open approvals in one dashboard. If
        something looks off, she can drill down, by project, by location, by user, and fix it herself. The
        software adapts to her business, not the other way around.</p>
      <p className="text-md text-white shadow-text pt-3">
        QuickBooks is not a fit for every scenario. If you run a multi-entity operation with advanced
        manufacturing, complex international tax, or need to automate every process from procurement to HR, you
        may hit its limits. For those cases, the transition to a
        full&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;may
        be justified. But for most small businesses in South Florida who need to modernize without losing months
        to migration or blowing the budget, QuickBooks is the practical middle path. It automates what matters,
        keeps the interface your team already knows, and gives you live, accurate numbers to run the business.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-quickbooks-compares-to-erp-and-spreadsheet-alternatives-for-resource-planning" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How QuickBooks Compares to ERP and Spreadsheet Alternatives for Resource Planning
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-quickbooks-compares-to-erp-and-spreadsheet-alternatives-for-resource-planning" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How QuickBooks Compares to ERP and Spreadsheet Alternatives for Resource Planning
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
