import Link from "next/link";

export default function SequenceSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A real rollout of Intelligent Resource Planning for a small business in South Florida is not a single
        &quot;go live&quot; day. It is a tightly structured sequence, each step building on the last. The order
        matters: skipping ahead or working out of sequence invites errors and frustration, and makes it hard to
        measure what is working. This is how it actually unfolds when done right.</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Set the measurable business objective. The team meets first to define what success is, down to the number. For example: &quot;Reduce the time to produce a rolling 90-day cash forecast from eight hours to one.&quot; This anchors every other step. Without it, the rest of the process loses focus.</li>
        <li>Assess&nbsp;data quality&nbsp;and availability. Before any tool is connected, every ledger and spreadsheet is mapped. Which system holds the real numbers for cash, payables, receivables? If the books are spread across QuickBooks, Excel, and a payroll service, this is when those gaps are resolved. The team checks for missing data, inconsistent coding, or old errors that would throw off a forecast. QuickBooks and Take the Helm both pull live data, but the quality of the output depends on this groundwork. Where Cashflowfrog or Fathom will sync with accounting data, the standard is set here for what gets imported and how often.</li>
        <li>Design the technical architecture. Now the real decisions about tools and integrations are made. The team weighs the fit: Jirav for driver-based forecasting and scenario planning, Take the Helm for real-time invoice and bill tracking, Fathom for multi-entity reporting, Cashflowfrog for quick cash projections, QuickBooks as the operational core. The selection is based on the workflow that needs automating, not just the feature list. Integration plans are drawn up, what syncs with what, how often, and who owns each process.</li>
        <li>Configure, connect, and test. Each tool is connected to the live data, but not yet in production. This is where smoke tests happen: does the forecast in Jirav match what is in QuickBooks? Can Take the Helm pull every open receivable and payable from the ledger? Are KPIs in Fathom showing the right trends? The team validates each report and dashboard against the old process. If numbers do not line up, the root cause is found and fixed before anyone starts using the new system for decisions.</li>
        <li>Pilot with a real workflow. Only after the tools are tested does the team roll out to a real, narrow use case. This might be &quot;build and review the weekly cash forecast&quot; or &quot;automate&nbsp;<Link id={`use-cases-accounting-intelligent-resource-planning-sequence-approval-workflows${idSuffix}`} href="/use-cases/accounting/accounts-payable/ai-approval-workflow" className="text-[#C83803] hover:underline">invoice approval</Link>&nbsp;and tracking.&quot; The pilot runs in parallel with the old process for a cycle or two. Every hiccup, confusion, or missing feature is logged and addressed. This is not a &quot;training period&quot;, it is live work, but with a safety net.</li>
        <li>Full rollout and scaling. Once the pilot proves itself, meaning the objective is met and the team trusts the numbers, the process expands. More workflows go live: inventory tracking, payables automation, sales dashboards. Only now is the old manual process retired. Training is targeted to the features actually in use, not the generic manual.</li>
        <li>Continuous monitoring and improvement. The work does not end with &quot;go live.&quot; The team reviews whether the original business objective is being met each month. Are forecasts faster? Are errors down? If something slips, the cause is traced back,&nbsp;data quality, process, or tool fit, and fixed. This is where tools like Cashflowfrog and Fathom stand out: dashboards reveal issues in real time, and the team can adjust before small problems become big ones.</li>
      </ol>
      <p className="text-base text-white shadow-text pt-3">
        Returning to the team from the opening, a Friday afternoon, the first month-end after rollout, now the
        numbers flow. Invoices that used to be missing from the forecast show up on Take the Helm’s live
        timeline. The cash position in QuickBooks matches what Cashflowfrog shows on the dashboard. The owner
        reviews a rolling scenario in Jirav, sees a payroll crunch coming two weeks out, and moves a planned
        expense. What took hours of double-checking and patching now happens in minutes, with the team confident
        they are steering by real numbers, not old guesses.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every step above happens in order. Starting with the end goal, then cleaning the data, then picking the
        right tool, then piloting a real workflow, then scaling, each one is a gate for the next. South Florida
        teams that try to shortcut this sequence end up with dashboards nobody trusts or workflows that collapse
        back into spreadsheets. The ones that follow it see the chaos of old month-ends replaced by calm,
        real-time insight that lets them act ahead of the next crunch.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-rolling-this-out-actually-involves-the-sequence-it-happens-in" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Rolling This Out Actually Involves: The Sequence It Happens In
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-rolling-this-out-actually-involves-the-sequence-it-happens-in-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Rolling This Out Actually Involves: The Sequence It Happens In
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
