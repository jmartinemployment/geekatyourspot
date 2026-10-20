
export default function DataIntegrationSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A real Intelligent Resource Planning solution lives and dies on the quality and completeness of its
        data. You cannot automate&nbsp;cash flow
        forecasting&nbsp;or resource planning if your systems only talk once a month, or if half
        the numbers live in a spreadsheet no one trusts. The right foundation is not a wish list of features, it
        is a clear map of what must connect, and what data must flow, so the business gets a live, reliable
        picture every day.</p>
      <p className="text-md text-white shadow-text pt-3">
        The backbone is the accounting ledger, typically QuickBooks for most South Florida small businesses.
        This is where every sale, bill, payment, and payroll transaction ends up. But the ledger alone is not
        enough. For planning that actually works, you need to see not just what happened last week, but what is
        coming next. That means pulling in open invoices, unpaid bills, scheduled payroll, and any recurring
        spend or income that shapes your cash position. If your intelligent resource planning tool cannot sync
        with QuickBooks and pick up every change as it happens, forecasts will always trail reality.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integrating accounts receivable and payable is the first step toward real-time clarity. Take the Helm,
        for example, links directly to your accounting software to pull open AR and AP balances automatically.
        No one has to re-enter invoice dates or amounts. When a client pays, or a bill is added, that change
        appears instantly in the cash forecast. This connection is not just a convenience, it is how you avoid
        the classic Friday surprise, where payroll is due but the real cash balance is hidden behind stale data.
        Take the Helm’s drag-and-drop timeline lets you shift payment dates and see the impact, so the business
        can react before a cash pinch becomes a crisis.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next layer is scenario planning and rolling forecasts. Jirav stands out by connecting
        payroll,&nbsp;CRM, and expense data to its driver-based models.
        This lets you model what happens if you hire a new salesperson next month, or if a major client pays 30
        days late. Jirav’s integration goes beyond just pulling numbers; it recalibrates forecasts as new
        actuals come in, so you are never stuck with a static plan that is out of date by the time the month
        closes. For a South Florida firm managing seasonal swings, this is the difference between guessing and
        knowing when to conserve cash or when to invest in growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        Some teams will try to glue this together with spreadsheets, but as soon as you have more than one data
        source, or more than one person entering numbers, errors creep in. Cashflowfrog and Fathom both attack
        this problem by acting as live dashboards, connecting to QuickBooks and other sources to build a single
        view of cash, upcoming obligations, and payment behaviors. Cashflowfrog, in particular, scores customer
        payment speeds, so you can see which clients are slow to pay and adjust your terms or collections
        strategy before a pattern becomes a problem. Fathom consolidates this across entities and locations, so
        a business with multiple sites or divisions does not have to guess which area is draining cash or
        performing above plan.</p>
      <p className="text-md text-white shadow-text pt-3">
        What matters is not just connecting systems, but connecting the right data, at the right frequency, with
        no manual handoffs. Every credible rollout starts with a
        full&nbsp;data quality&nbsp;assessment. This means
        checking that every system, accounting, payroll,&nbsp;CRM,
        banking, can export or sync the data you need, in a format your planning tool can read. It means
        cleaning up old records, standardizing categories, and validating that what is in QuickBooks matches
        what is in your bank. Where possible, integrations should be tested in a sandbox first, so any mapping
        or validation errors show up before the numbers drive real decisions.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a team still living in spreadsheets, the first time all this data comes together can be eye-opening,
        and sometimes uncomfortable. You may find duplicate vendors, old invoices that never got cleared, or
        categories that do not line up. That is normal, and it is why
        the&nbsp;data quality&nbsp;phase is not just a box to
        tick, but a real operational filter. The tools, Jirav, Take the Helm, Cashflowfrog, Fathom, and
        QuickBooks, do not fix bad data by themselves. They automate what you already track; the work is making
        sure what you track is right.</p>
      <p className="text-md text-white shadow-text pt-3">
        In short: if your environment cannot provide live, accurate accounting data, open receivables and
        payables, payroll schedules, and (where
        relevant)&nbsp;CRM&nbsp;or sales pipeline data, then true
        Intelligent Resource Planning is not just hard, it is impossible. Integration is not about checking a
        feature box. It is about eliminating the lag, double entry, and uncertainty that keep you guessing
        instead of planning. The businesses that get this right see the value in hours saved, errors avoided,
        and the confidence to make decisions with numbers that are always current.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-data-and-integration-are-needed-for-true-real-time-planning" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data and Integration Are Needed for True Real-Time Planning
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-data-and-integration-are-needed-for-true-real-time-planning-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data and Integration Are Needed for True Real-Time Planning
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
