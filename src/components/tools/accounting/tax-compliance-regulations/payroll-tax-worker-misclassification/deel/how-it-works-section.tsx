export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deel’s engine is designed to take the manual, error-prone work out of payroll tax and worker
        classification for small businesses managing both W-2 employees and 1099 contractors. Every step that
        typically requires a spreadsheet or a late-night Google search is baked into the platform’s workflow.
        From the moment a business enters a new worker, Deel’s system starts by collecting the right
        information: work location, employment type, contract terms, and payment details. This data feeds
        directly into its compliance logic, which is built around current federal, state, and local rules.</p>
      <p className="text-md text-white shadow-text pt-3">
        The classification process is not left to guesswork. Deel uses an AI-powered worker classifier that
        applies legal tests and precedent from the relevant jurisdiction to each new hire. The system reviews
        working relationship details, such as control, schedule, and exclusivity, to determine if a worker should
        be treated as an employee or a contractor. If the platform detects a risk that a contractor is being
        treated as an employee, it flags it for review and guides the business on next steps. This reduces the
        chance of misclassification before contracts are ever signed.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once a worker is classified, Deel generates the right contract, localized for the jurisdiction, with the
        correct clauses for tax, confidentiality, and compliance. For contractors, Deel’s Contractor of Record
        (CoR) service is a legal firewall: Deel becomes the official hiring entity on paper, assumes liability
        for misclassification, and handles all compliance paperwork. That means if a state agency or the IRS
        audits a business, Deel, not the business owner, is on the hook for defending the classification and
        handling any penalties tied to that worker.</p>
      <p className="text-md text-white shadow-text pt-3">
        Payroll tax is handled automatically. For employees, Deel calculates and withholds federal, state, and
        local payroll taxes, including Social Security, Medicare, and unemployment insurance. The system files
        the required forms (like W-2s) with the IRS and distributes them to employees at year’s end, all without
        manual intervention. For contractors, Deel collects and stores W-9s and issues 1099-NEC forms as
        required, adjusting for new federal and state thresholds. The platform keeps up with changing rules, such
        as shifting 1099 reporting minimums or new state-level requirements, so businesses don’t have to track
        them by hand.</p>
      <p className="text-md text-white shadow-text pt-3">
        Deel’s Compliance Hub is the ongoing checkpoint. It continuously monitors regulatory changes across 150+
        countries and sends real-time alerts if a new law, tax rule, or reporting requirement affects the
        business. This means that, if Florida’s re-employment tax rules change or a new local verification step
        is required, Deel updates its workflow right away. The Compliance Hub also provides guidance and
        actionable alerts, so business owners see what changed and what action, if any, is needed.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk payments and consolidated reporting are built in. Whether paying two W-2 employees and a dozen 1099
        contractors or running payroll across multiple states, Deel processes every payment in a single batch.
        The system supports payments in over 120 currencies and can pay out in cryptocurrency if needed. All
        payment and tax data is logged for audit readiness, and businesses can export detailed statements for
        due diligence, investor requests, or internal review. This single-data-source approach means that, when
        an audit or lender request comes in, the business can produce a complete, accurate payment and
        classification record in minutes, not days.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout the process, Deel replaces the most failure-prone manual steps (classification, contract
        drafting, tax filings, document collection, and payment reconciliation) with automated workflows. The
        business owner who once spent Friday afternoons wrestling with spreadsheets and compliance checklists
        now sees every worker, payment, and tax obligation managed in real time, with every risk flagged before
        it becomes a penalty.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-deel-automates-classification-compliance-and-tax-for-mixed-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Deel Automates Classification, Compliance, and Tax for Mixed Teams
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
              <h2 id="how-deel-automates-classification-compliance-and-tax-for-mixed-teams-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Deel Automates Classification, Compliance, and Tax for Mixed Teams
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
