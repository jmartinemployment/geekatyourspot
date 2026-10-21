export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Getting Gusto to work right in a South Florida small business is about more than loading in names and
        pay rates. The data structure and mapping decisions you make up front will decide whether payroll runs
        smoothly or triggers compliance headaches down the road. This is not a technicality. Mapping the wrong
        field or skipping a required data point can mean misclassified workers, missed tax filings, or a roster
        that cannot handle the realities of gig-heavy, multi-county operations.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first decision is how you define and separate worker types. Gusto’s platform requires you to map
        every person as either a W-2 employee or a 1099 contractor. This mapping is not just a label. It drives
        which tax forms the system generates, which deductions apply, and whether the worker is included in
        state new-hire reporting. For a business that swings between full-time staff in the high season and a
        rotating cast of contractors, getting this mapping wrong is the fastest way to invite an IRS audit.
        Gusto’s setup forces you to review each worker’s role, schedule, and payment type, and blocks you from
        running payroll if the classification does not fit IRS and state rules.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next is location data. In South Florida, workers often report from different locations week to week,
        and some work remotely from other states. Gusto’s tax engine uses home and work addresses to assign the
        right state and federal tax rates. If you map a worker to the wrong state, you risk under-withholding or
        missing a state registration, which can trigger penalties that far outweigh the cost of the software. The
        platform’s mapping interface prompts for both home and work addresses and validates them against the
        latest tax tables, so you do not have to guess which rate applies.</p>
      <p className="text-base text-white shadow-text pt-3">
        Banking and payment data are another critical mapping step. Gusto allows direct deposit setup for both
        employees and contractors, but the routing of payments (weekly, biweekly, or project-based) depends on how
        you map pay schedules and job types. For businesses juggling multiple pay rates and schedules, Gusto’s
        data model supports unlimited job types and payroll runs, but only if the initial mapping is complete
        and accurate. If you miss mapping a pay rate or assign the wrong schedule, you risk late payments or
        compliance failures.</p>
      <p className="text-base text-white shadow-text pt-3">
        Tax ID and compliance fields are not optional. Gusto’s system requires Social Security numbers or EINs
        for every worker, and cross-checks these against IRS and state databases before allowing payroll to
        process. If a field is missing or mapped incorrectly, the platform flags it and halts the pay run. This
        is not just a technical check. It is a compliance guardrail that stops you from filing incomplete or
        incorrect returns, which is a common cause of penalties for small businesses in the region.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integration mapping matters, too. If you are syncing Gusto with QuickBooks or Xero, the way you map
        departments, job codes, and classes will affect how payroll data flows into your accounting system. A
        mismatch here can lead to financial reports that do not reconcile, or worse, to misallocated payroll
        expenses that make tax time a nightmare. Gusto’s integration setup walks you through mapping each
        payroll field to your chart of accounts, with templates for common small business structures in Florida.
        Geek @ Your Spot LLC helps review these mappings to make sure payroll costs land in the right buckets from
        day one.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, benefits and deduction mappings cannot be skipped. For businesses offering health insurance,
        401(k), or other benefits, Gusto’s data structure ties each deduction to the right worker and pay
        period. If you map a deduction to the wrong person or leave a required field blank, the system will
        either miscalculate take-home pay or fail to withhold the right amounts, which can create compliance
        issues with federal and state agencies. The platform’s setup wizard prompts for each benefit and
        deduction, and checks for missing data before payroll is approved.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, the data mapping phase is where most payroll errors start, or are prevented. With Gusto, the
        goal is a one-time, thorough mapping that locks down compliance and keeps payroll running smoothly even
        as your team grows or shifts. Geek @ Your Spot LLC’s job is to walk through each mapping decision, test the
        setup with sample pay runs, and confirm that every worker, rate, and tax ID is in the right place. That
        way, when the owner of that Miami HVAC company logs in on Friday, she sees a payroll summary that
        matches her books, her tax filings, and her real obligations, with no surprises, no last-minute scrambles, and
        no risk of a penalty letter arriving in the mail.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-mapping-choices-that-make-or-break-a-gusto-payroll-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data Mapping Choices That Make or Break a Gusto Payroll Deployment
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-mapping-choices-that-make-or-break-a-gusto-payroll-deployment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data Mapping Choices That Make or Break a Gusto Payroll Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
