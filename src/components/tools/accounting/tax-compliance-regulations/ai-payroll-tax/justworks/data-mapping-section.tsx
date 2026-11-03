export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Getting Justworks to deliver on its promise (removing payroll tax risk and worker misclassification
        headaches) depends on the data you bring in and how you map it at the start. The system is only as
        accurate as the details you load, and small errors here can ripple out into compliance problems down the
        line. For South Florida businesses with a mix of full-timers, part-timers, and contractors, the upfront
        data structure is not a technical afterthought. It is the foundation for every payroll, tax filing, and
        worker classification decision the platform will automate.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first and most critical mapping decision is how you structure your worker roster. Justworks expects
        a clean separation between W-2 employees and 1099 contractors, each with their own set of required
        fields. For employees, you need names, addresses, Social Security numbers, job titles, pay rates, and
        work locations. For contractors, you need business names (if applicable), tax identification numbers,
        payment terms, and service categories. Mixing these up or skipping fields will cause the system to flag
        errors and, worse, can lead to misclassification that the IRS or Florida DOR will catch later.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next decision is mapping work location versus residence. In South Florida, it is common for a worker
        to live in one county but perform services in another, or even cross state lines for gigs. Justworks
        uses both residence and work location to determine which state and local taxes apply, so you must map
        each worker to both a home address and a primary worksite. This is not just a technicality, because
        state unemployment insurance is triggered by where the work is done, not just where the
        worker lives. If you skip this mapping, you risk under- or over-withholding and triggering a compliance
        review.</p>
      <p className="text-base text-white shadow-text pt-3">
        Pay structure mapping is another upfront step that matters. Justworks supports multiple pay rates,
        custom payroll periods, and complex arrangements like tips or commissions. You need to define these for
        each worker at import. Hourly, salaried, and piecework arrangements are all supported, but you must
        specify which applies for each person. If you have tipped employees or commission-based agents, which are common in
        Miami-Dade hospitality and real estate, you need to map these pay types and link them to the right tax
        treatment from the start. Otherwise, overtime calculations and payroll tax withholdings will be off.</p>
      <p className="text-base text-white shadow-text pt-3">
        Benefits eligibility and deductions are also mapped at this stage. For employees, you need to specify
        who is eligible for health insurance, retirement plans, and other benefits. Justworks uses this
        information to automate benefit deductions and ensure the right amounts are withheld from each paycheck.
        If you do not map this correctly, you risk missing deductions or, worse, failing to offer required
        benefits to eligible employees, both of which can lead to compliance penalties.</p>
      <p className="text-base text-white shadow-text pt-3">
        Time tracking and PTO management depend on accurate mapping of employment status and pay type. If you
        use an external time tracking system, you need to ensure it syncs cleanly with Justworks, with each
        employee’s hours mapped to the correct worker ID. For contractors, time tracking is generally not
        required, but you do need to map payment terms (per project, per hour, or per milestone) so the system
        knows when and how to trigger payments and filings.</p>
      <p className="text-base text-white shadow-text pt-3">
        Accounting integration is another key mapping decision. Justworks connects directly to platforms like
        QuickBooks, NetSuite, Xero, and Sage Intacct. Upfront, you need to map your payroll accounts, expense
        categories, and vendor payments so that every payroll run posts to the right place in your general
        ledger. If this mapping is off, you will be stuck reconciling payroll and tax payments by hand, which defeats
        the purpose of automation.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, compliance alerts and automated reminders depend on your initial data structure. Justworks uses
        the information you provide (worker classifications, locations, pay structures, and benefits
        eligibility) to trigger alerts for upcoming filings, expiring documents, and regulatory changes. If your
        data is incomplete or mapped incorrectly, you will miss these alerts and risk falling out of compliance
        as your team grows or shifts.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, the upfront mapping phase is where Geek @ Your Spot LLC closes the gap for South Florida
        businesses. The consultancy works with you to clean and structure your data before it ever hits the
        Justworks platform, making sure every worker is mapped to the right status, location, and pay structure.
        This is not just about getting payroll right for the next pay period. It is about building a data
        foundation that keeps you compliant with IRS, Florida DOR, and local rules as your team shifts between
        employees and contractors, or as you expand into new states.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business owner who has spent years patching together payroll records and guessing at tax
        withholdings, this upfront data work is the difference between a system that just runs and one that
        needs constant manual fixes. Get the mapping right, and Justworks takes over the grunt work, handling
        filings, withholding, and compliance alerts automatically. Get it wrong, and you are back to chasing
        down errors, fixing misclassifications, and risking penalties every time you run payroll. In the end,
        the upfront data structure is not a technical hurdle. It is the step that makes Justworks deliver on its
        promise of risk-free, automated compliance for South Florida’s most dynamic teams.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-upfront-data-structure-and-mapping-choices-that-make-or-break-justworks-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Upfront Data Structure and Mapping Choices That Make or Break Justworks Deployment
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
              <h2 id="the-upfront-data-structure-and-mapping-choices-that-make-or-break-justworks-deployment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Upfront Data Structure and Mapping Choices That Make or Break Justworks Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
