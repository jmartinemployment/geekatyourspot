
export default function ComparingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A small business owner in South Florida weighing Take the Helm is not choosing in a vacuum. They are
        looking at the chaos of their current spreadsheets, maybe eyeing a
        full&nbsp;ERP, or
        considering point tools for accounts receivable or cash flow. Each path has its own cost, risk, and
        learning curve. Take the Helm sits in the middle: it is not a generic spreadsheet template, and it does
        not require the heavy lift of a
        full&nbsp;ERP&nbsp;rollout.
        It is built to automate and
        clarify&nbsp;cash
        flow forecasting&nbsp;for small teams who need answers fast, not a long implementation
        project.</p>
      <p className="text-base text-white shadow-text pt-3">
        Spreadsheets are the default for most small businesses. They are cheap, flexible, and already there. But
        flexibility comes at a price. As the business grows, so does the tangle of files, tabs, and manual
        updates. Owners spend hours copying numbers from bank statements, invoices, and payroll reports, only to
        end up with a forecast that is out of date by the end of the week. Errors creep in. One missed formula
        or a copy-paste mistake can throw off the whole cash plan. There is no built-in logic to warn you when a
        big bill is about to land, or a customer payment is late. Spreadsheets do not connect directly to
        accounting software, so every update is another round of manual work.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the other end,
        full&nbsp;ERP&nbsp;systems
        promise to bring everything under one roof: accounting, inventory, payroll, project management, and
        more. For a small business, these platforms are often overkill. The setup alone can take months and
        require outside consultants. The cost is not just the software, it is the lost time and the risk of a
        failed rollout. Many ERPs are designed for companies with dedicated finance teams and IT support. For a
        twelve-person operation, the learning curve and the ongoing admin are a barrier, not a benefit. And even
        then, the forecasting modules in many ERPs are built for broad use, not the kind of near-term cash
        visibility a small business needs to survive a slow month or a surprise expense.</p>
      <p className="text-base text-white shadow-text pt-3">
        Then there are point solutions: tools that do one thing well, like invoice tracking, automated
        reminders, or simple cash dashboards. These can help, but they rarely connect the full picture. A tool
        for accounts receivable might flag overdue invoices, but it does not show how a delayed payment will
        affect payroll next week. A cash dashboard might show the current balance, but not the impact of a new
        equipment lease or a tax payment due next month. Small businesses end up with a patchwork of apps, each
        solving a piece of the problem, but none giving a clear, live view of the whole cash runway.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Take the Helm automates the hard part: it pulls live data from QuickBooks Online, Xero, or Sage, so there is no more double entry or copying numbers into a spreadsheet.</li>
        <li>It gives a visual, drag-and-drop timeline where users can shift invoice and bill dates and immediately see the impact on cash flow. This is not a static report, it is a working model that updates as the business changes.</li>
        <li>Scenario planning is built in. A business can test what happens if a client pays late, if a big bill hits early, or if they add a new hire. Every scenario runs side by side, so teams make decisions with eyes open.</li>
        <li>Accounts payable&nbsp;and receivable are managed together, not in isolation. Take the Helm tracks invoice timing, predicts likely payment dates using historical data, and highlights risks before they hit the bank account.</li>
        <li>Reporting is not a separate chore. PDF and CSV exports are ready for sharing, and the dashboard gives a health score that flags trouble spots without needing to dig through numbers.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Compared to ERPs, Take the Helm is focused. It does not try to be everything, no inventory, no HR, no
        supply chain. What it does is give a small business owner a tool they can actually use, with a setup
        measured in hours, not months. Compared to spreadsheets, it removes the manual work and the risk of
        hidden errors. Compared to point apps, it connects the full cash picture, not just a slice.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real difference shows up on a Friday afternoon when payroll is due and a big client payment has not
        yet cleared. With Take the Helm, the owner sees the cash runway in real time, not as a guess. They can
        test moving a bill, see the impact of waiting a week, and decide with confidence. No more hoping the
        numbers add up, now the numbers are live, and the plan is clear.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business in Miami-Dade, Broward, or West Palm Beach, the choice is not between Take the Helm
        and nothing. It is between living with the pain of scattered, manual systems or moving to a tool that
        fits their size, plugs into what they already use, and gives them control over cash flow without the
        overhead of a
        full&nbsp;ERP. Take
        the Helm is not a silver bullet, but it is a real fix for the specific pain points that spreadsheets,
        ERPs, and point solutions leave behind.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-take-the-helm-compares-to-spreadsheets-erps-and-point-solutions-for-small-business-cash-flow" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Take the Helm Compares to Spreadsheets, ERPs, and Point Solutions for Small Business Cash Flow
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
              <h2 id="how-take-the-helm-compares-to-spreadsheets-erps-and-point-solutions-for-small-business-cash-flow-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Take the Helm Compares to Spreadsheets, ERPs, and Point Solutions for Small Business Cash Flow
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
