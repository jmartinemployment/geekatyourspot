
export default function DataIntegrationSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A payroll tax and worker misclassification solution is only as strong as the data and integrations
        behind it. In South Florida, with its churn of part-time, seasonal, and remote workers, any gap in your
        systems quickly turns into a compliance risk. The tools (Gusto, Rippling, Deel, Justworks, ADP) do not
        create data out of thin air. They automate what you feed them, and what you let them connect to. If a
        worker’s job site, pay rate, or employee/contractor status is missing, out of date, or stuck in
        someone’s inbox, the software can’t protect you from an audit or a late filing penalty.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is a business-wide&nbsp;data
        quality&nbsp;assessment. Every worker’s type (W-2 or 1099), location, tax ID, pay
        structure, and department assignment has to be both accurate and current. In practice, that means
        pulling from your point-of-sale, scheduling, HR, and accounting systems, not just a single payroll
        spreadsheet. For a landscaping crew running across Miami-Dade, Broward, and Palm Beach, this could mean
        tracking which county each job happens in, who is driving, who is clocked in, and where the work hours
        go. Miss a field, and an overtime rule gets missed with it.</p>
      <p className="text-md text-white shadow-text pt-3">
        Most small businesses in South Florida do not have a single source of truth. Timesheets may be scribbled
        on paper, tax IDs are emailed in, job sites are tracked in a manager’s phone, and invoices might be in
        QuickBooks but not tied to a worker’s tax profile. This is where integration comes in. Gusto, for
        example, pulls in data from QuickBooks and can flag missing Social Security numbers or mismatched
        contractor information before a pay run completes. Rippling goes further, pulling job codes, locations,
        and roles from your HRIS or scheduling apps to run real-time compliance checks. Deel can ingest, store,
        and validate W-9s and other tax documents for a distributed freelance pool, but only if you actually
        connect your accounting and onboarding flows to it.</p>
      <p className="text-md text-white shadow-text pt-3">
        The integration requirements are not a one-time project. They are a living part of your business. As soon
        as you bring on a new worker, open a second location, or switch accountants, your data flows change.
        ADP’s approach is to combine its automated payroll tax engine with human review, ensuring that data from
        multiple offices, job sites, and pay codes all reconcile before filings go out. Justworks lets you
        manage everything (payroll, tax, HR, compliance) from one dashboard, but still needs clean imports from
        your time-tracking and scheduling tools.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real risk is in the seams: when a worker’s status changes mid-pay period, when a contractor becomes
        an employee, when jobs cross county lines. If your payroll system is not integrated with your HR,
        scheduling, and accounting tools, the handoff gets missed. For instance, Gusto and Rippling both
        automate W-2 and 1099 filings, but only if worker types and payment records are kept current and
        accessible. Deel’s Compliance Hub delivers real-time updates on regulatory changes, but those alerts
        only matter if your contractor data is actually synced. ADP tracks wage rates and overtime across
        divisions, but needs every team’s hours and job codes to be in sync.</p>
      <p className="text-md text-white shadow-text pt-3">
        A real-world example: It’s Friday, and the Miami business owner in the opening story finishes payroll,
        but two crew members worked more than 40 hours this week, split across jobs in two counties.
        The hours, job locations, and pay rates are in three separate spreadsheets. If those details aren’t
        integrated into the payroll system, the overtime is missed, the wrong taxes get paid, and a letter from the Department of
        Revenue is coming. The software can only automate what’s already there.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Centralize worker data: Make sure every team member’s tax ID, employment type, and work location are in one system.</li>
        <li>Integrate time, scheduling, and payroll: Automate the flow of hours, roles, and rates from your scheduling and accounting tools to your payroll system.</li>
        <li>Automate document collection: Use platforms like Deel or Gusto to collect and validate required forms (W-9s, W-2s, I-9s) at onboarding.</li>
        <li>Sync compliance updates: Ensure tools like Rippling’s Compliance 360 or ADP’s update feeds are connected to your actual worker records, not just a generic mailbox.</li>
        <li>Test with real pay runs: Before going live, run a pay cycle using actual data to catch missing fields, integration errors, or misclassified workers.</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        The bottom line: the data and integrations you set up are not background details. They are the foundation
        of compliance. Miss a connection, and no amount of software will keep the state or IRS from finding an
        error. Get the integrations right, and the automation tools do what they promise: keep payroll and
        worker classification running smoothly, with fewer errors and no nasty surprises.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-data-and-integration-are-needed-for-payroll-tax-worker-misclassification-automation-to-succeed" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data and Integration Are Needed for Payroll Tax &amp; Worker Misclassification Automation to Succeed
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
              <h2 id="what-data-and-integration-are-needed-for-payroll-tax-worker-misclassification-automation-to-succeed-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data and Integration Are Needed for Payroll Tax &amp; Worker Misclassification Automation to Succeed
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
