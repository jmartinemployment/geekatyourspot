import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The first decisions you make about data structure and mapping in ADP have a direct impact on whether
        your payroll&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>&nbsp;is solid or
        shaky. For small businesses in South Florida, where worker rosters shift seasonally and the mix of W-2
        employees and 1099 contractors can change every pay period, getting this right is not just a technical
        detail, it is the difference between smooth payrolls and audit-triggering errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        ADP’s system is built around a connected view of your workforce data. That means every employee,
        contractor, pay rate, and deduction type has to be mapped correctly from the start. If you are moving
        from a spreadsheet, a basic payroll app, or even another HR system, the first step is to standardize
        your data fields: names, addresses, Social Security numbers, worker type, pay structure, and tax
        jurisdiction. ADP’s integration tools can pull this data in bulk, but the mapping must be checked line
        by line to ensure that no worker is left in the wrong category or with missing details. A misclassified
        worker record at this stage can cascade into a tax filing error months later.</p>
      <p className="text-md text-white shadow-text pt-3">
        Worker classification is where mapping errors are most costly. ADP requires that every worker be tagged
        as either W-2 or 1099, with supporting fields for state of residence, work location, and any special
        status (such as seasonal or part-time). This is not just for reporting, ADP’s compliance engine uses
        these fields to apply the right tax rules, overtime policies, and benefits eligibility. If a technician
        working in Miami is entered as a contractor but should be an employee, ADP will not withhold payroll
        taxes or apply overtime, and the business is exposed to penalties. The mapping process is where these
        errors are caught and fixed before they become liabilities.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tax jurisdiction mapping is another critical step. ADP supports multi-state payroll, but it relies on
        accurate mapping of each worker’s tax location. For South Florida businesses that hire across county
        lines or bring in contractors from other states, every address and worksite must be assigned to the
        correct local, state, and federal tax codes. This allows ADP’s engine to apply the latest tax rates and
        reporting rules automatically, without manual overrides or last-minute corrections. If a worker’s state
        code is wrong, the system may file taxes in the wrong jurisdiction or miss a required deposit,
        triggering notices or audits.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pay rules and deduction mapping come next. ADP’s templates cover common scenarios, hourly wages,
        overtime, child support, insurance deductions, but every business has its own quirks. The mapping
        process is where you define which pay codes apply to each worker group, how overtime is calculated for
        different job types, and what deductions should be withheld. This is also where you set up non-standard
        deductions for contractors, such as rent or insurance, which ADP can withhold and report as needed. Each
        rule is tied to a data field, and mapping errors here can result in missed deductions or overpayments.</p>
      <p className="text-md text-white shadow-text pt-3">
        Audit trails and data validation round out the process. ADP automatically creates a record of every
        mapping change, import, or manual edit, so you have a clear trail for compliance reviews. The system
        flags any missing or inconsistent data before payroll runs, giving you a chance to correct errors in
        real time. This is especially important for businesses that change workforce structure often; each new
        hire, role change, or contractor engagement needs to be mapped promptly to avoid compliance gaps.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a business owner, the difference shows up the first time a payroll cycle runs without a hitch. The
        Miami HVAC team from earlier no longer has to worry about whether a new technician is set up correctly
        or if last week’s overtime will trigger a tax issue. ADP’s data structure and mapping decisions, made
        upfront, keep every pay run clean and every compliance box checked. The risk of payroll tax errors
        drops, the time spent on manual corrections shrinks, and the business is ready to scale without fear of
        an audit.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-data-structure-and-mapping-decisions-set-the-stage-for-payroll-compliance-in-adp" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Data Structure and Mapping Decisions Set the Stage for Payroll Compliance in ADP
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
              <h2 id="why-data-structure-and-mapping-decisions-set-the-stage-for-payroll-compliance-in-adp" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Data Structure and Mapping Decisions Set the Stage for Payroll Compliance in ADP
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
