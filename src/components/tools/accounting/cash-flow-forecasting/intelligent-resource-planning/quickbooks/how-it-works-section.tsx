import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        QuickBooks works by centralizing the financial data and workflows that small businesses in South Florida
        struggle to keep organized. Each step, from invoice capture
        to&nbsp;<GlossaryLink slug="cash-flow-forecasting" className="text-[#0B162A] hover:underline">cash flow
        forecasting</GlossaryLink>, is built to eliminate manual effort and reduce errors. The process starts
        the moment a transaction enters the system, whether it is a customer invoice, a vendor bill, or a
        payroll run. QuickBooks pulls this data into a single environment, where it is immediately available for
        reporting, approvals, and reconciliation.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Automated Data Entry: QuickBooks captures transactions from multiple sources, uploaded invoices, bank feeds, or integrated apps. It maps each entry to the right chart of accounts, so the numbers land where they belong without a person moving them by hand.</li>
        <li>Role-Based Workflow Routing: Every user in QuickBooks has a defined role with specific permissions. When a bill or expense is submitted, QuickBooks routes it to the right person for approval based on dollar amount, department, or project. This stops the old problem where approvals go missing in email chains or get held up when someone is out. Sensitive information, like payroll or bank balances, is only visible to those who need it.</li>
        <li>Batch Processing and Automation: High-volume tasks, like sending invoices, recording expenses, or updating inventory, run in batches. QuickBooks lets you process hundreds of entries in one go, with rules that automate reminders, late fees, or approvals. Instead of keying each transaction, the system applies logic you set once and runs it every time.</li>
        <li>Live Reporting and Dashboards: As transactions post, QuickBooks updates dashboards and reports in real time. Owners and managers see cash flow, outstanding receivables, and payables as they stand, no waiting for a manual close. Custom report builders let you group, filter, and drill down into the details that matter for your business, from department-level spend to project profitability.</li>
        <li>Inventory and Cost Tracking: For businesses that manage stock across locations, QuickBooks tracks inventory levels, assembly builds, and cost of goods sold. It updates these figures as sales, purchases, and transfers happen, so you always know what is on hand and what it is worth.</li>
        <li>Error Detection and Reversal: QuickBooks uses AI to flag anomalies, a missing approval, a duplicate entry, or a transaction that does not match the pattern. When errors do slip through, you can restore the books to a previous state, so a mistake does not ripple through the entire period.</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        The mechanics behind these steps are not just about moving numbers. QuickBooks is designed to keep the
        business running even as transaction volume grows. A service company in Miami-Dade that adds new techs
        or opens a second location does not need to overhaul its accounting process. Instead, it adds users,
        sets roles, and continues using the same interface. As more data comes in, the system scales, handling
        approvals, automating repetitive work, and updating forecasts without slowing down.</p>
      <p className="text-md text-white shadow-text pt-3">
        For&nbsp;cash flow
        forecasting, QuickBooks uses up-to-the-minute financial data. The platform pulls from all
        posted transactions, sales, bills, payroll, and inventory changes, to project future balances. These
        forecasts update as soon as new data enters the system, so the owner can see if payroll will clear next
        week or if a late-paying customer is about to cause a shortfall. This is not a static report built in
        Excel and forgotten. It is a live view, always current, always actionable.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval workflows are another core mechanic. Instead of generic admin accounts, QuickBooks lets you
        assign granular permissions. A department manager can approve expenses without seeing payroll. Field
        staff can submit receipts but cannot edit the books. These rules are set once, then enforced by the
        system, so you do not worry about someone accessing sensitive data they should not see. When a user
        changes roles or leaves, you can update or remove their access in minutes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk data entry is handled with batch tools. Need to send a hundred invoices or record dozens of
        expenses? QuickBooks lets you do it in a few clicks, applying the same rules and logic across each
        entry. This cuts days of manual work to an hour. The same goes for inventory, when stock moves between
        warehouses or a new shipment comes in, the system updates all locations and cost figures instantly.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout, QuickBooks keeps a full audit trail. Every transaction, approval, and edit is logged with a
        user and timestamp. If you need to trace a change or prepare for an audit, the system shows exactly who
        did what and when. This is especially important for growing teams, where more hands in the books mean a
        higher risk of errors or fraud.</p>
      <p className="text-md text-white shadow-text pt-3">
        The end result is a financial workflow that adapts as your business grows. QuickBooks does not force a
        disruptive&nbsp;ERP&nbsp;migration
        or a new interface. Instead, it layers automation, security, and forecasting onto the familiar tools
        your team already uses. For a small business ready to move past spreadsheets but not ready for a
        full&nbsp;ERP, this
        is how you get real Intelligent Resource Planning, step by step, with each process working together to
        save time, reduce risk, and keep the business in control.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="every-step-inside-quickbooks-how-data-moves-approvals-flow-and-forecasts-update" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Every Step Inside QuickBooks: How Data Moves, Approvals Flow, and Forecasts Update
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="every-step-inside-quickbooks-how-data-moves-approvals-flow-and-forecasts-update-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Every Step Inside QuickBooks: How Data Moves, Approvals Flow, and Forecasts Update
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
