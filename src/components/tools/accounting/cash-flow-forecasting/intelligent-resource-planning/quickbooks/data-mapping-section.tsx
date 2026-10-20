import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Moving a business onto QuickBooks for intelligent resource planning is not just a matter of copying data
        from one system to another. The value comes from how that data is structured, mapped, and connected
        inside the platform. This is where many small businesses either set themselves up for smooth reporting
        and automation, or lock in the same pain they had with spreadsheets. Getting these decisions right
        upfront is what makes the difference between a QuickBooks deployment that just digitizes old habits and
        one that actually drives better decisions and faster closes.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first decision is the chart of accounts structure. QuickBooks supports unlimited entries, so the
        temptation is to bring over every legacy account, code, and category. But more is not better. The right
        approach is to map only the accounts that the business actively uses, consolidating duplicative or
        outdated codes. This clean chart of accounts is the backbone for every report, dashboard, and automation
        rule that follows. If the old system had three different codes for the same expense, QuickBooks can
        merge them, so every dollar is tracked in one place.</p>
      <p className="text-md text-white shadow-text pt-3">
        Classes and locations are another critical mapping axis. QuickBooks allows unlimited classes and
        locations, which can be used to track revenue and costs by job, department, store, or region. Upfront,
        the business must decide what level of granularity it needs for management reporting. Tracking every job
        individually gives detailed margin analysis but can overwhelm staff with data entry. The best practice
        is to start with the most important divisions, say, by line of business or major project, and expand as
        needed. This keeps the interface clean and reporting meaningful without creating a burden.</p>
      <p className="text-md text-white shadow-text pt-3">
        Customer and vendor lists are often messy after years of spreadsheet or desktop use. QuickBooks’ import
        tools can pull in these lists, but mapping is needed to avoid duplicates and ensure each entity is
        linked to the right transactions. For accounts receivable automation, clean customer records mean that
        invoice reminders go to the right contact, and payment links are always current.
        For&nbsp;<GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>, vendor mapping ensures
        bills are routed to the correct workflow and approvals. Geek @ Your Spot LLC spends time upfront scrubbing
        these lists, using QuickBooks’ matching tools and manual review, so the business does not inherit years
        of errors into its new system.</p>
      <p className="text-md text-white shadow-text pt-3">
        Inventory data is where structure matters most for businesses with physical stock. QuickBooks can track
        inventory across multiple locations, down to individual bins or categories. The deployment team must
        decide how to group products, which attributes matter for reporting (such as SKU, lot, expiration date),
        and how to handle opening balances. Mapping inventory to the right structure means that stock levels,
        cost of goods sold, and margin reports are always accurate and up to date. It also enables automation,
        such as automatic reorder points or alerts for slow-moving stock.</p>
      <p className="text-md text-white shadow-text pt-3">
        Workflow rules and user permissions hinge on the data structure. QuickBooks lets the business define
        roles by job function, limiting what each user can see or do. This mapping is not just about security,
        it shapes how approvals flow, who gets notified of exceptions, and what data is visible to each team
        member. Setting this up at the start means sensitive payroll or bank data stays locked down, while
        project managers or sales leads see only what they need. The result is a system that supports
        decentralized operations without sacrificing oversight or auditability.</p>
      <p className="text-md text-white shadow-text pt-3">
        The final mapping step is connecting QuickBooks data to other tools in the workflow, Excel for
        reporting, bank feeds for reconciliation, or payroll for workforce management. QuickBooks provides
        spreadsheet sync and direct connections for most common needs, but the data must be mapped so that every
        field lines up. This is where Geek @ Your Spot LLC’s local expertise comes in: mapping the business’s unique
        data model to QuickBooks’ structures, testing the flows, and validating that reports match reality.
        Where a business used to spend hours every week fixing broken links or mismatched files, the right
        mapping means those problems disappear.</p>
      <p className="text-md text-white shadow-text pt-3">
        Getting data structure and mapping right is not a one-time task. As the business grows, new accounts,
        products, or users will require updates. But starting with a clean, well-mapped foundation in QuickBooks
        gives the business a system that scales, supporting new locations, higher transaction volume, and more
        complex reporting without losing control or clarity. For small businesses in South Florida, this is what
        turns QuickBooks from another accounting tool into the backbone of intelligent resource planning.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-structure-and-mapping-decisions-that-shape-a-quickbooks-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data Structure and Mapping Decisions That Shape a QuickBooks Deployment
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-structure-and-mapping-decisions-that-shape-a-quickbooks-deployment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data Structure and Mapping Decisions That Shape a QuickBooks Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
