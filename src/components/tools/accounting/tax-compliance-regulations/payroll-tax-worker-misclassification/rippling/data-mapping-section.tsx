export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Rippling for Payroll Tax &amp; Worker Misclassification is not just a matter of flipping a
        switch and importing a list of workers. The system’s power—its ability to automate compliance, flag
        misclassification, and handle multi-state payroll—depends on how your data is structured and mapped from
        the start. Geek @ Your Spot’s job is to make sure every field, rule, and relationship in your business
        is set up to match the real world, so Rippling’s automation works as promised.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first big decision is how to define workers in Rippling. This goes beyond name and address. Every
        worker—W-2 employee, 1099 contractor, or hybrid—needs to be mapped with attributes that drive
        compliance: location, role, employment type, start date, pay rate, and tax jurisdiction. In South
        Florida, where a single worker might do jobs in Miami-Dade, Broward, and Palm Beach in the same month,
        getting location data right is critical. Rippling’s compliance engine uses this information to apply the
        correct tax rules, overtime laws, and reporting requirements for each pay run. If a worker’s status
        changes or they cross county lines, the platform updates their compliance profile automatically.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, Geek @ Your Spot works with you to map your existing payroll, HR, and contractor data into
        Rippling’s unified record structure. Unlike systems that keep employees and contractors in separate
        silos, Rippling brings everyone into a single platform. That means mapping not just names and pay rates,
        but onboarding dates, contract terms, work locations, and any historical compliance notes. If you have
        old spreadsheets or disconnected apps, this is where Geek @ Your Spot cleans and standardizes your
        records—removing duplicates, filling in missing fields, and flagging records that need legal review
        before they go live.</p>
      <p className="text-md text-white shadow-text pt-3">
        A key part of this mapping is linking worker records to the right tax accounts and compliance rules.
        Rippling handles federal, state, and local payroll taxes automatically—but only if each worker’s data is
        mapped to the right jurisdiction and reporting entity. For a business with staff in multiple counties or
        states, Geek @ Your Spot ensures that every worker’s location, tax status, and pay type are set up to
        trigger the correct withholding, filing, and reporting. This is what lets Rippling automate tax account
        registration, file the right forms (W-2, 1099-NEC, ACA), and keep your business in the clear even as
        workers move or your footprint grows.</p>
      <p className="text-md text-white shadow-text pt-3">
        Contractor administration is another place where data mapping matters. Rippling lets you onboard, pay,
        and track contractors alongside employees, but only if each contractor’s record includes the right legal
        agreements, compliance status, and payment terms. Geek @ Your Spot helps you gather and standardize
        these documents—so every contract is stored, every invoice is linked to the right worker, and every
        payment is tied to the correct compliance workflow. When a contractor submits an invoice, Rippling
        auto-checks it against the contract and payment schedule, then routes it for approval and tax reporting
        without manual intervention.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rippling’s Compliance 360 module depends on granular, accurate data to work. That means mapping every
        worker’s attributes—tenure, department, role, work location, and prior compliance events—so the system
        can flag risks as they arise. If a worker’s hours or duties change, or if their location triggers new
        tax or overtime rules, Rippling surfaces an alert in real time. Geek @ Your Spot configures these rules
        during setup, so you are not left tuning compliance logic after you go live. The system’s audit logs and
        reporting tools are only as good as the data you put in at the start, so this mapping work is not
        optional—it is foundational.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration with accounting and HR tools is the final mapping step. Geek @ Your Spot uses Rippling’s
        connectors for QuickBooks, Xero, and NetSuite to link payroll, contractor payments, and compliance data
        to your books. This is not just a one-way export—every field, code, and workflow is mapped to match your
        existing chart of accounts, approval flows, and reporting structure. If you have custom fields or unique
        approval chains, Geek @ Your Spot configures Rippling to match, so you do not lose visibility or create
        reconciliation headaches down the line.</p>
      <p className="text-md text-white shadow-text pt-3">
        For South Florida businesses with high turnover, seasonal spikes, or complex worker mixes, this upfront
        mapping is what keeps the system working as you grow. As new hires come on, as roles change, or as you
        expand into new counties, Rippling’s automation keeps pace—because every rule, field, and workflow was
        mapped to your business from day one. If you skip this step or treat it as a box to check, you risk
        missing compliance triggers, misclassifying workers, or losing track of tax obligations. Geek @ Your
        Spot’s approach is to get this right upfront, so Rippling’s automation does not just run—it runs exactly
        as your business needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        In short, the data structure and mapping decisions you make before go-live set the stage for every
        compliance, payroll, and worker classification outcome that follows. With Geek @ Your Spot guiding the
        process, Rippling becomes more than a payroll tool—it becomes the living record of your workforce, your
        compliance shield, and your business’s backbone for handling payroll tax and worker misclassification
        risk in South Florida.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-structure-and-mapping-work-that-sets-up-rippling-for-south-florida-payroll-tax-worker-misclassification" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data Structure and Mapping Work That Sets Up Rippling for South Florida Payroll Tax &amp; Worker Misclassification
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
              <h2 id="the-data-structure-and-mapping-work-that-sets-up-rippling-for-south-florida-payroll-tax-worker-misclassification" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data Structure and Mapping Work That Sets Up Rippling for South Florida Payroll Tax &amp; Worker Misclassification
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
