export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rippling manages payroll tax and worker classification by translating complex compliance rules into
        automated steps that run in real time, not just at year-end. For a small business in South Florida, this
        means the process starts the moment a new worker enters the system—not after the first pay run or when a
        spreadsheet gets updated. Rippling’s workflow is built to prevent misclassification and payroll tax
        errors before they happen.</p>
      <p className="text-md text-white shadow-text pt-3">
        Here’s how it works, step by step:</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>When you add a new worker—employee or contractor—Rippling triggers a built-in classification assessment. This isn’t a static checklist; the platform uses a 90-second quiz that covers the behavioral, financial, and relationship factors that the IRS and state agencies use to determine worker status. It’s not just a formality: the answers drive how the platform treats the worker across payroll, tax, and benefits modules.</li>
        <li>As soon as the worker is classified, Rippling generates the right contract. For contractors, the system pulls a locally vetted template that matches the rules for Miami-Dade, Broward, or Palm Beach. For employees, the onboarding flow includes all statutory notices and compliance steps. This contract isn’t just for show—Rippling stores it alongside the worker’s profile and uses its data to drive downstream automation.</li>
        <li>Rippling then sets up payroll tax accounts and registration for every state and locality where the worker will be paid. The minute a worker’s home or work location changes, the system updates tax withholdings and registers new accounts if needed. There’s no waiting for a quarterly review or manual spreadsheet update—Rippling’s sync is immediate.</li>
        <li>During each pay run, Rippling automatically calculates, withholds, and files all required payroll taxes—federal, state, and local. It includes complex cases like workers splitting time between counties, or contractors who become employees mid-year. The system generates and files W-2s and 1099s at year-end, storing every form in the worker’s record for audit defense.</li>
        <li>Rippling’s Compliance 360 module monitors the workforce in real time. If a worker’s status or pay pattern triggers a compliance risk—like a contractor who starts working full-time hours or an employee who crosses into overtime territory—the system alerts the admin and recommends a fix, which can be executed in one click. This is where Rippling moves beyond detection: it lets you fix the issue inside the platform, updating contracts, pay schedules, and tax accounts automatically.</li>
        <li>For contractors, Rippling automates invoice submission, approval, and payment. Contractors can submit invoices directly in the system, which routes them to the right manager for approval. Payments are tracked against contracts and project codes, and the platform maintains a clear audit trail. This reduces the risk of blurring contractor and employee boundaries, since every payment is tied to a documented agreement and approval.</li>
        <li>Throughout the year, Rippling keeps a running audit log of every action—classification decisions, contract versions, tax filings, and payment approvals. If an audit comes, everything is in one place, and you can see exactly how each worker was handled from day one.</li>
      </ol>
      <p className="text-md text-white shadow-text pt-3">
        This process is not theoretical. In the Miami construction firm from the opening, when a new job opens
        up and a crew member is added on Friday afternoon, Rippling’s onboarding flow asks the right questions,
        generates a compliant contract, and sets up tax accounts before the first hour is billed. If the
        worker’s status changes—say, the contractor starts working 40 hours a week—Rippling flags the risk and
        prompts the admin to reclassify, update the contract, and adjust payroll tax filings, all in the same
        dashboard. There’s no lag, and no need to pull in outside legal or accounting help for every hire.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rippling’s mechanics are built for the real world of small business, where roles shift, workers move
        between counties, and the same person may be a contractor one month and an employee the next. The
        platform’s step-by-step workflow means compliance is not a one-time project but a continuous, automated
        process that adapts as your business changes.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="inside-rippling-how-the-platform-actually-handles-worker-classification-and-payroll-tax-compliance" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Inside Rippling: How the Platform Actually Handles Worker Classification and Payroll Tax Compliance
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
              <h2 id="inside-rippling-how-the-platform-actually-handles-worker-classification-and-payroll-tax-compliance" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Inside Rippling: How the Platform Actually Handles Worker Classification and Payroll Tax Compliance
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
