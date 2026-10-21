export default function DecisionsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The earliest decisions in a payroll tax and worker misclassification project shape everything that
        follows. The costliest mistakes are the ones you don’t see until months later, when an auditor asks why a
        worker was classified as a contractor, or a payroll deposit deadline is missed because a process was
        never mapped. These first calls set the boundaries for what can (and cannot) be fixed later. Even the
        right platform cannot recover from the wrong foundation.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first non-negotiable is how you define your workforce. In South Florida, where the mix of W-2
        employees and 1099 contractors shifts with the season, you need to draw a bright line on classification
        that matches IRS and state law. Gusto’s worker classification workflows are built for this: they
        separate payroll tax tracking for employees from contractor management at the start, not after the fact.
        If you fudge this line by classifying an ongoing, supervised worker as a contractor to cut costs, you invite
        back taxes, fines, and lawsuits that can’t be undone by re-classifying later. The decision you make here
        is what the IRS will audit against.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next point of no return is the structure and cleanliness of your data. If you migrate a payroll
        mess (spreadsheet rosters, missing Social Security numbers, incomplete addresses) into a new system, the
        errors just get faster. Rippling’s compliance modules only catch what you feed them; if your historical
        records are muddy, you’ll automate mistakes instead of preventing them. The initial data assessment is
        not an afterthought. It is the point where you decide whether the system is built on solid ground or
        quicksand.</p>
      <p className="text-base text-white shadow-text pt-3">
        You also set the rules for how payroll tax is calculated and remitted. This means aligning how overtime,
        tips, and multi-county work are tracked. Once you configure overtime rates or tip reporting in a tool
        like ADP, you lock in how every pay run is calculated going forward. If you allow a manual override
        here, or skip local compliance rules for the sake of speed, you will spend the next year untangling
        errors and overpayments. Automated calculation engines like ADP’s are only as accurate as the local
        rules you set up front.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another early call that cannot be walked back is how compliance responsibilities are distributed. Some
        owners want to keep everything in-house, trusting their bookkeeper or office manager to own payroll.
        Others want full indemnification, which is legal protection if the government finds a misclassified worker. Deel’s
        Contractor of Record service is the right answer for businesses that want to transfer liability; it
        legally assumes the compliance risk from day one. If you try to split the difference (some contractors
        managed in-house, others through a third-party), you create a patchwork of accountability that will not
        hold up to scrutiny.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, these decisions are not just about software. They are about the people and processes you build
        around it. Justworks and Rippling both offer platforms that automate payroll tax filings and compliance
        monitoring, but if you do not decide, up front, who is responsible for verifying data, handling
        exceptions, or responding to tax notices, you’ll find that automation only moves the bottleneck from one
        desk to another. The system’s reliability starts with a clear division of roles and a process for
        escalation, before the first dollar is paid.</p>
      <p className="text-base text-white shadow-text pt-3">
        A real example: the Miami landscaping owner from earlier decides to bring on a new crew for hurricane
        cleanup. If the onboarding process is ad hoc (one worker fills out a W-4, another just texts their
        details, a third is paid cash), there’s no tool that can clean up the consequences. The system you build
        is only as strong as the early decisions you make about classification, data, rules, and accountability.
        Once set, you live with them. Changing course after payroll is running means rework, risk,
        and sometimes starting over.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-decisions-that-are-made-early-and-cannot-be-unmade-in-payroll-tax-worker-misclassification-projects" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Decisions That Are Made Early and Cannot Be Unmade in Payroll Tax &amp; Worker Misclassification Projects
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-decisions-that-are-made-early-and-cannot-be-unmade-in-payroll-tax-worker-misclassification-projects-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Decisions That Are Made Early and Cannot Be Unmade in Payroll Tax &amp; Worker Misclassification Projects
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
