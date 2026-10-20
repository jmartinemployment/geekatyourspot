export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Take the Helm does not just collect numbers. It turns chaotic, scattered business data into a single,
        live source of truth for cash flow. Every step in its process is designed to move a small business from
        disconnected spreadsheets and emails to a clear, interactive cash forecast. The goal is simple: make
        sure owners and managers know exactly what money is coming in, what is going out, and when, so they can
        plan with confidence instead of guessing.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process starts with connecting Take the Helm to your accounting software. It supports QuickBooks
        Online, Xero, and Sage, so most small businesses in South Florida can plug in without changing their
        core systems. Once connected, Take the Helm automatically pulls in all relevant data: invoices, bills,
        bank accounts, and transaction histories. This immediate sync means you do not have to manually upload
        files or re-enter numbers, which cuts out a major source of errors and wasted time.</p>
      <p className="text-md text-white shadow-text pt-3">
        After importing the data, Take the Helm analyzes your historical payment patterns. It looks at how long
        customers actually take to pay (not just what the invoice says), and how quickly your business settles
        bills. This is where its Average Days Receivable (ADR) and Average Days Payable (ADP) calculations come
        in. Instead of relying on guesswork, the system uses your real payment history to estimate when cash
        will actually move. You can see this in the accounts receivable and payable tabs, where every open
        invoice and bill is listed with predicted clearance dates based on your past experience.</p>
      <p className="text-md text-white shadow-text pt-3">
        The heart of Take the Helm’s process is its visual, drag-and-drop timeline. Every transaction, whether
        it is an expected customer payment, a scheduled supplier bill, or a loan draw, appears on a live graph.
        You can drag these items forward or back in time to see, in real terms, how a change in timing will
        affect your cash position. This is not just a pretty chart. It is an interactive tool that lets you test
        what happens if a client pays late, if you move payroll up a week, or if you have to cover a surprise
        expense. The impact on your cash runway is visible instantly, so you can adjust before a problem hits.</p>
      <p className="text-md text-white shadow-text pt-3">
        Take the Helm does not treat forecasts as a one-time setup. You can update, adjust, and filter
        transactions at any time. Want to exclude a one-off bill from your forecast? Just hide it. Need to add a
        new recurring expense or a planned equipment purchase? Create a rule with the date, amount, and
        frequency, and Take the Helm folds it into all future projections. This flexibility means your forecast
        stays current as your business changes, not just at month-end.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scenario planning is built in. You can create unlimited side-by-side scenarios to test what happens if
        sales drop, costs rise, or a major client delays payment. Each scenario is color-coded and can be
        toggled on or off in the main view, helping you compare best-case, worst-case, and most likely outcomes
        in real time. This is especially useful for small businesses facing seasonal swings, project-based
        revenue, or sudden growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, Take the Helm’s reporting tools let you export any view as a PDF or CSV file. Whether you need
        to share a summary with your team, send a detailed forecast to your bank, or keep a record for
        compliance, you can pull the exact data you need in a few clicks. There is no need to rebuild reports in
        Excel or chase down missing numbers. The system is always up to date, so your reports match your actual
        situation, not last month’s guess.</p>
      <p className="text-md text-white shadow-text pt-3">
        In practice, this process means a South Florida business owner can walk into a Friday meeting with a
        live forecast that reflects every invoice, every bill, and every planned expense. They can show the team
        what happens if a client pays late, if a new hire starts next month, or if a supplier bill is pushed
        out. Decisions move from gut feel to data-driven, and the business stops running from one cash surprise
        to the next. Take the Helm’s process is not about adding another layer of software. It is about removing
        the blind spots that come from disconnected tools and manual updates, so small businesses can plan, act,
        and grow with less risk.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Connects directly to QuickBooks Online, Xero, and Sage for instant data import.</li>
        <li>Analyzes real payment histories to predict when cash will actually move.</li>
        <li>Displays every transaction on a live, interactive timeline for immediate scenario testing.</li>
        <li>Lets users adjust, filter, and create rules for any transaction, keeping forecasts current.</li>
        <li>Enables unlimited scenario planning, allowing direct comparison of different business futures.</li>
        <li>Exports reports in PDF or CSV formats, always reflecting the latest data.</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="take-the-helm-s-process-from-raw-data-to-live-cash-flow-forecasts" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Take the Helm’s Process: From Raw Data to Live Cash Flow Forecasts
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
              <h2 id="take-the-helm-s-process-from-raw-data-to-live-cash-flow-forecasts-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Take the Helm’s Process: From Raw Data to Live Cash Flow Forecasts
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
