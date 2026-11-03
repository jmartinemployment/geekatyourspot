
export default function TransformsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        QuickBooks tackles the real problems that block small businesses from scaling their Intelligent Resource
        Planning. Instead of fighting with spreadsheets, disconnected apps, and manual processes, QuickBooks
        brings everything into one place, giving you live numbers, smart automation, and controls that fit your
        team. What matters is not the feature list, but what it takes off your plate.</p>
      <p className="text-base text-white shadow-text pt-3">
        First, QuickBooks replaces manual reporting with live dashboards and custom financial views. You see
        where your cash stands, what invoices are outstanding, and which vendors are waiting for payment, all in
        real time. No more exporting data into Excel and patching together reports. The drag-and-drop report
        builder lets you track the metrics that matter most, from cash flow to profitability, without waiting
        for the end of the month. This means decisions get made on today’s numbers, not last quarter’s.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bulk data entry becomes a thing of the past. QuickBooks automates the capture, routing, and approval of
        invoices and bills. Instead of entering each transaction by hand, the system pulls in data, matches it
        to the right accounts, and routes it for sign-off based on your rules. High-volume operations, like
        sending batch invoices or recording expenses, run on triggers, not manual effort. The result: your team
        spends less time typing and more time on work that grows the business.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and control are built in. QuickBooks lets you set precise user permissions by role. Each person
        sees only what they need, whether it is sales data, expenses, or payroll. Sensitive information stays
        locked down, and audit trails track every change. This closes the gaps that come from shared logins and
        generic admin accounts. You can add up to 25 users, each with their own access, so the system grows with
        your team without exposing you to new risks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Inventory management moves from guesswork to clarity. QuickBooks tracks stock levels, locations, and
        costs across warehouses in real time. You can follow inventory as it moves, catch variances before they
        become losses, and tie every transaction back to your financials. This live view means you avoid
        overstocking, catch shortages early, and keep your balance sheet accurate without extra spreadsheets.</p>
      <p className="text-base text-white shadow-text pt-3">
        The close process speeds up because reconciliations, allocations, and error checks are automated.
        QuickBooks uses AI to flag anomalies, catching mistakes before they distort your books. Restoring data
        to a previous point is simple, so you can fix errors fast without days of detective work. Month-end
        stops being a fire drill and becomes a routine task.</p>
      <p className="text-base text-white shadow-text pt-3">
        For the owner who was up late reconciling numbers, QuickBooks means more evenings off. The same team
        that used to spend Friday afternoons fixing broken formulas now reviews a dashboard that shows cash
        flow, AR aging, and profitability in one place. Vendor bills are routed, approved, and paid without a
        single email chase. Payroll data flows from time tracking to payment without manual re-entry. The
        business runs on live numbers, not on hope.</p>
      <p className="text-base text-white shadow-text pt-3">
        QuickBooks does not require a
        disruptive&nbsp;ERP&nbsp;migration. You keep the interface your
        staff already knows, but unlock deeper automation and reporting. Data from your old systems migrates in,
        and workflows adjust to your real processes, not the other way around. You get the muscle of enterprise
        resource planning without the cost or complexity of a
        full-scale&nbsp;ERP. For a small business, that means scaling up
        without scaling your admin team.</p>
      <blockquote cite="https://quickbooks.intuit.com/r/midsize-business/accounting-problems/" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Bookkeeping and accounting workflows that work at $1M often start breaking down long before a business
        reaches $5M, creating permission gaps, buried errors, and reconciliation delays that carry a measurable
        cost.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        The shift is not just about saving time. It is about gaining control. QuickBooks’ automation means fewer
        errors, faster closes, and more confidence in your numbers. Staff focus on high-value work, not
        low-value admin. Audit trails and permissions keep your data safe as your team grows. And when you need
        to see where you stand, the answer is always a click away, not buried in last month’s spreadsheet.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in Miami-Dade, Broward, and West Palm Beach, QuickBooks is the practical way to
        modernize Intelligent Resource Planning. You do not need to overhaul your business to get results. You
        need a system that fits the way you work, removes manual headaches, and gives you the clarity to grow.
        That is what QuickBooks delivers.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-quickbooks-removes-hours-of-manual-work-from-intelligent-resource-planning" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How QuickBooks removes hours of manual work from Intelligent Resource Planning
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-quickbooks-removes-hours-of-manual-work-from-intelligent-resource-planning-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How QuickBooks removes hours of manual work from Intelligent Resource Planning
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
