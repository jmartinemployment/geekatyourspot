
export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Jirav runs resource planning by tying together every key data stream, accounting, payroll, sales, and
        operational metrics, into a single, always-current model. The platform’s core is a driver-based
        financial engine. Instead of building static budgets or forecasts in Excel, you define the real-world
        drivers that move your business: headcount, sales pipeline, expense categories, and operational KPIs.
        Jirav pulls these drivers directly from your connected systems, so every forecast and scenario runs on
        live numbers, not last month’s exports.</p>
      <p className="text-base text-white shadow-text pt-3">
        The process starts with data integration. Jirav connects to your accounting system (QuickBooks,
        NetSuite, Sage Intacct, and over 200 others), payroll providers like ADP and Paychex, and CRMs such as
        Salesforce and HubSpot. Once linked, it automatically imports actuals, revenue, expenses, headcount, and
        operational data, without manual uploads. This means the numbers in your financial model always match
        what’s in your books and systems. No more reconciling spreadsheets at month-end just to get a baseline.</p>
      <p className="text-base text-white shadow-text pt-3">
        With live data in place, Jirav’s modeling engine takes over. You build your plan using real operational
        drivers. For example, if payroll is your biggest cost, you can model the impact of hiring or raises
        instantly. If sales cycles shift, you see the downstream effect on cash flow and staffing needs right
        away. The platform’s Auto Forecast feature uses historical patterns to project future results, so you
        get rolling forecasts that update as new data comes in. You can see your expected cash runway, breakeven
        points, and the effect of new deals or delayed payments in real time.</p>
      <p className="text-base text-white shadow-text pt-3">
        Scenario planning is built in, not bolted on. You can run what-if analyses, like &quot;What if a key
        client cuts spend by 30%?&quot; or &quot;When can we afford to hire next?&quot;, across the entire
        three-statement model (Income Statement, Balance Sheet, Cash Flow). Each scenario runs on the same live
        data and driver logic, so the results are consistent and actionable. You don’t have to rebuild models
        for each new question; you adjust the drivers and see the impact instantly.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting and dashboards are not an afterthought. Jirav’s reporting pulls directly from the same data
        model used for planning and forecasting. This means your team and leadership see the same numbers,
        whether they’re looking at a cash flow forecast, a department budget, or a board report. Dashboards
        update as soon as new data arrives, without extra effort. You can share reports as live dashboards,
        Excel exports, or read-only links, making collaboration simple and version control automatic.</p>
      <p className="text-base text-white shadow-text pt-3">
        For South Florida small businesses, this approach means you spend less time patching together old
        numbers and more time acting on what’s happening now. Instead of waiting for the finance team to close
        the books and update a spreadsheet, department heads and owners can see the current state of the
        business and plan with confidence. Jirav removes the lag between action and insight, so you can move
        faster, whether that’s covering payroll, planning a new hire, or preparing for a seasonal dip.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, the steps look like this:</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Connect Jirav to your accounting, payroll, and&nbsp;CRM&nbsp;systems. The platform pulls in actuals and operational data automatically.</li>
        <li>Define the drivers that matter for your business, headcount, revenue streams, expense categories, operational KPIs.</li>
        <li>Build your model using these drivers. Jirav’s templates and industry frameworks speed up setup, but every model is fully customizable.</li>
        <li>Run rolling forecasts and what-if scenarios. Adjust drivers to see the impact of hiring, sales changes, or cost shifts in real time.</li>
        <li>Share dashboards and reports with your team. Everyone works from the same live numbers, so decisions are based on the latest data.</li>
        <li>Update plans as the business moves. Jirav’s model updates automatically as new actuals come in, keeping forecasts current without manual work.</li>
      </ol>
      <p className="text-base text-white shadow-text pt-3">
        This is not just a technical upgrade. It’s a shift from reactive, backward-looking reporting to
        proactive, real-time planning. For small teams, it means fewer mistakes, less time lost to manual entry,
        and a planning process that matches the pace of your business, not the other way around.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-jirav-actually-runs-resource-planning-the-real-steps-behind-the-dashboard" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Jirav Actually Runs Resource Planning: The Real Steps Behind the Dashboard
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
              <h2 id="how-jirav-actually-runs-resource-planning-the-real-steps-behind-the-dashboard-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Jirav Actually Runs Resource Planning: The Real Steps Behind the Dashboard
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
