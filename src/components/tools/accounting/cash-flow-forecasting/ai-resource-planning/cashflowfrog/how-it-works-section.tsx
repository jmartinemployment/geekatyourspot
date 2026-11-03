
export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Cashflowfrog is built to automate
        the&nbsp;cash flow
        forecasting&nbsp;process from the ground up. It connects directly to accounting software
        or bank feeds, pulls in real-time data, and generates rolling forecasts that update automatically as new
        transactions are recorded. There is no manual data mapping, no spreadsheet juggling, and no need for a
        dedicated finance specialist to get started. The mechanics are designed for speed and accuracy,
        returning hours each week to small teams who cannot afford to babysit their numbers.</p>
      <p className="text-base text-white shadow-text pt-3">
        The process begins with a direct sync to your accounting system, QuickBooks Online, QuickBooks Desktop,
        Xero, Sage Intacct, Odoo, Zoho Books, or FreshBooks are all supported out of the box. If you do not use
        accounting software, you can connect your bank accounts through Plaid or import transactions from Excel.
        This flexibility means Cashflowfrog can cover the full range of setups found in small businesses across
        South Florida, from cloud accounting to legacy desktop apps and even pure bank-driven operations.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once connected, Cashflowfrog immediately analyzes your transaction history and builds a cash flow
        timeline that stretches up to three years ahead. This is not a static snapshot. The forecast rolls
        forward every day, automatically incorporating new invoices, bills, receipts, and payments as they are
        entered in your system. The platform uses AI-driven suggestions and rule-based logic to predict future
        cash movements, such as projecting ad spend as a percentage of revenue, or rolling forward recurring
        expenses based on recent trends. These projections are surfaced for review, not hidden in a black box,
        so you can see exactly how each forecast line is built.</p>
      <p className="text-base text-white shadow-text pt-3">
        Scenario planning is a core part of the workflow. With Cashflowfrog, you can create named scenarios,
        such as a delayed customer payment, a spike in payroll, or a planned equipment purchase, and see the
        impact on your cash position instantly. These scenarios do not overwrite your base forecast. They run in
        parallel, letting you switch between them and compare outcomes side by side. For teams juggling multiple
        what-if questions, Can we afford to hire? What if a key client pays late? this removes the guesswork and
        the risk of making decisions on outdated or incomplete data.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another critical mechanic is the planned-vs-actual tracker. Cashflowfrog continuously compares your
        projected cash flow to actual results as new data comes in. Deviations are flagged in real time, so you
        catch shortfalls or windfalls early enough to act. This is not just a month-end report. The system
        highlights variances as soon as they appear, helping you refine your assumptions and respond to changes
        before they become problems. For example, if a vendor payment hits earlier than expected or a customer
        misses a due date, the forecast and dashboard reflect it immediately.</p>
      <p className="text-base text-white shadow-text pt-3">
        Customer payment behavior is tracked and scored automatically. Cashflowfrog ranks customers by payment
        punctuality, collections history, and sales volume. This insight is more than a convenience. It lets you
        identify which clients are likely to pay late and adjust your terms or follow-up accordingly. For small
        businesses that cannot afford long receivable cycles, this feature helps prioritize collections and
        avoid surprises.</p>
      <p className="text-base text-white shadow-text pt-3">
        The dashboard is built for clarity. Every figure in the forecast can be drilled down to the underlying
        transaction, three levels deep, if needed. You see not just the projected balance but the specific
        invoices, bills, or bank entries that drive it. The view can be toggled between daily, weekly, monthly,
        or quarterly perspectives, and you can group results by entity, location, department, project, or even
        custom dimensions pulled from your accounting system.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation extends to data entry and reconciliation. Cashflowfrog matches payments to invoices and bank
        transactions to ledger entries automatically, reducing manual effort and cutting down on errors. Alerts
        flag low balances, unusual payment spikes, or late receipts as soon as they are detected. For businesses
        that have struggled with bounced checks or missed payroll due to hidden cash drops, these warnings are
        early enough to take action, not just explain what went wrong after the fact.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams that run consolidated operations, multiple companies, entities, or currencies, Cashflowfrog
        pulls everything into one view. It supports unlimited entity consolidation and native multi-currency
        conversion, so you can see a true, up-to-date cash position across the whole business without manual
        spreadsheet work.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cashflowfrog also supports export and import of projections via spreadsheet, letting you edit forecasts
        offline and re-upload changes as needed. This keeps the workflow flexible for teams that still rely on
        Excel for some tasks but want the automation and accuracy of a live forecasting tool.</p>
      <p className="text-base text-white shadow-text pt-3">
        AI assistant access is built in. You can query and update your forecast directly from tools like Claude
        or ChatGPT, thanks to integration through MCP. This means you can ask questions, add projections, or run
        scenarios using plain language, and see the results reflected in your dashboard in real time.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, Cashflowfrog replaces the manual, error-prone steps of
        traditional&nbsp;cash
        flow forecasting&nbsp;with a set of automated, real-time processes. It is not just a
        reporting tool. It is a live system that adapts as your business changes, surfaces risks before they
        become crises, and frees your team to focus on decisions, not data entry. The mechanics are tuned for
        the real-world pressures of small businesses, speed, clarity, and the ability to act on today’s numbers,
        not last month’s.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-cashflowfrog-produces-live-accurate-forecasts-with-zero-manual-setup" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Cashflowfrog Produces Live, Accurate Forecasts With Zero Manual Setup
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
              <h2 id="how-cashflowfrog-produces-live-accurate-forecasts-with-zero-manual-setup-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Cashflowfrog Produces Live, Accurate Forecasts With Zero Manual Setup
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
