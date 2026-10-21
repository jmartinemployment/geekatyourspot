export default function MechanicsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A real Intelligent Resource Planning setup for a small business in South Florida runs on one principle:
        every bit of data moves from sale to ledger without manual copying. The process starts at the point of
        sale or the first invoice. As soon as a transaction happens, the information flows straight into the
        accounting system, no one re-enters amounts, dates, or customer names. This is the backbone that
        eliminates the error-prone, time-sapping double entry that used to eat Friday afternoons.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once the transaction lands in the ledger, it triggers a chain of automation. Dashboards update in real
        time, showing cash on hand, bills due, and which customers are dragging their feet. These dashboards are
        not passive, they drive daily decisions. Instead of waiting for a quarterly review to spot a cash
        crunch, the owner sees the risk as soon as a large invoice goes overdue. Fathom stands out here by
        turning dense ledgers into visual dashboards and micro-forecasts. It consolidates all locations or
        departments so a business with two shops in Miami and a third in Fort Lauderdale can see the whole
        picture, not just the sum of its parts.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next, the system moves from reporting to action. Automated invoice reminders go out to late-paying
        clients. QuickBooks supports this by generating instant payment links and scheduling reminders that
        chase down receivables without staff intervention. If a client pays, the ledger updates automatically,
        and the cash position on the dashboard shifts in real time. Take the Helm takes it further for local
        businesses dealing with unpredictable payment cycles. It provides a live, drag-and-drop timeline, so the
        owner can see exactly when cash is expected to land and what happens if a client pays late or a surprise
        bill comes in. Try dragging a major expense two weeks forward or moving a customer payment back a month,
        the downstream cash impact is visible instantly.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next step is reconciliation, the part that used to mean hours hunting down missing amounts or
        matching bank statements. Cashflowfrog makes this painless, syncing with the accounting system and
        generating visual cash charts that flag when actual performance drifts from the plan. The real value
        here is that it runs in the background. The system highlights gaps and trends, and even grades customers
        by payment speed. That means staff are not spending time checking numbers, they’re acting on what the
        numbers show.</p>
      <p className="text-base text-white shadow-text pt-3">
        Jirav comes in for the bigger picture: planning ahead. Instead of building next year’s plan in a
        spreadsheet that only one person can update, Jirav links payroll, sales, and operations data right into
        the forecast. It handles rolling forecasts and what-if scenarios. If the business is considering a new
        hire or a second location, the model shows how those changes ripple through cash flow. The result is a
        single source of truth, the numbers everyone sees are always current, and the assumptions are
        transparent. The owner, the bookkeeper, and the external accountant work from the same dashboard, not
        three different versions of the truth.</p>
      <p className="text-base text-white shadow-text pt-3">
        All of this means that as the business grows, more sales, more locations, more complexity, the admin
        time does not have to grow with it. Staff who spent days on manual entry or chasing down late payers can
        now focus on higher-value work: negotiating better payment terms, building new client relationships, or
        finding ways to cut costs. The system scales with the business, not against it. When something does
        change, a sudden bill, a new customer, or a delayed payment, the impact is visible now, not at
        month-end. Intelligent Resource Planning is not just about speed; it is about clarity and control,
        letting a small business act before a cash crunch, not after.</p>
      <p className="text-base text-white shadow-text pt-3">
        The mechanics break down this way:</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>A sale, bill, or payment enters the system at the source, point of sale, invoice, or bank feed.</li>
        <li>Data flows automatically into the accounting ledger (QuickBooks, Take the Helm, or Jirav handle this depending on setup).</li>
        <li>Dashboards update live, showing cash, receivables, payables, and profitability (Fathom and Cashflowfrog provide the visuals and scenario modeling).</li>
        <li>Automated reminders and payment links chase down overdue invoices (QuickBooks and Take the Helm).</li>
        <li>Bank reconciliation and cash flow tracking run in the background, flagging issues early (Cashflowfrog).</li>
        <li>Rolling forecasts and what-if analysis guide decisions on hiring, expansion, or expenses (Jirav).</li>
        <li>Staff focus on exceptions and strategy, not routine data entry or error checking.</li>
      </ol>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-intelligent-resource-planning-changes-the-day-to-day-the-mechanics-step-by-step" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Intelligent Resource Planning Changes the Day-to-Day: The Mechanics, Step by Step
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
              <h2 id="how-intelligent-resource-planning-changes-the-day-to-day-the-mechanics-step-by-step-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Intelligent Resource Planning Changes the Day-to-Day: The Mechanics, Step by Step
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
