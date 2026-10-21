export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        ADP automates the core work of payroll tax calculation, worker status tracking, and compliance
        monitoring so small businesses do not have to. The process starts with collecting and verifying worker
        data, W-2 employees, 1099 contractors, and anyone in between, all in one system. ADP’s platform checks
        US tax IDs and captures W-9s for contractors, ensuring every worker is classified and reported
        accurately from the start.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once workers are in the system, ADP applies the relevant pay and compliance rules. For each pay period,
        the platform records hours, applies overtime rates based on Fair Labor Standards Act (FLSA) guidelines
        and any state-specific requirements, and flags anomalies before payroll is finalized. This means that if
        someone logs overtime in Miami-Dade, but their status or location triggers a different rule, the system
        catches it automatically. Managers only need to review and approve timecards, the system handles the
        calculations and compliance checks.</p>
      <p className="text-base text-white shadow-text pt-3">
        ADP’s automation extends to payroll tax deposits and filings. The software calculates all required
        taxes, federal, state, and local, and handles remittances and agency notices. When a business operates
        in multiple states, ADP tracks registration requirements and ensures filings go to every jurisdiction
        where employees work, not just where the business is based. The platform’s institutional tracking system
        monitors thousands of local and state tax laws, automatically applying updates and changes so the
        business stays compliant. This is critical in South Florida, where a contractor might work across county
        lines or for out-of-state clients. ADP’s real-time sync and automated updates mean the business owner
        does not have to chase down every new rule or deadline.</p>
      <p className="text-base text-white shadow-text pt-3">
        For independent contractors, ADP generates and electronically files 1099-NEC forms with the IRS and
        state agencies. It maintains an audit trail for every transaction, which is essential if a
        classification question comes up during an audit. The system also allows for non-statutory deductions,
        like insurance or child support, from contractor payments, following best practices for compliance.</p>
      <p className="text-base text-white shadow-text pt-3">
        The heart of ADP’s step-by-step process is its combination of automation and expert support. If the
        system flags a classification risk or a payroll tax issue, owners get 24/7 access to certified payroll
        and compliance practitioners. This is not a generic help desk; it is live, dedicated support that can
        walk through a payroll crisis in real time. If the Miami HVAC owner from the opening example runs into a
        sudden audit or a flagged overtime payment, ADP’s team is ready to step in and resolve it, not just
        point to a help article.</p>
      <p className="text-base text-white shadow-text pt-3">
        ADP’s workflow brings everything together in a single, connected environment. Worker data, time
        tracking, pay rules, compliance checks, and tax filings all flow through one system, reducing manual
        entry and the risk of double work. The platform’s real-time sync across workforce data means that a
        change in one place, like a new address, a change in worker status, or an updated pay rate, propagates
        everywhere it needs to be. This reduces the hours spent on rework and the risk of missed compliance
        steps.</p>
      <p className="text-base text-white shadow-text pt-3">
        For South Florida small businesses, the step-by-step mechanics of ADP mean fewer surprises and less time
        spent firefighting payroll errors. The system is designed to flag issues before they become penalties,
        automate the routine, and bring expert help into the process when it matters most. The result: business
        owners can focus on growing their teams and serving clients, not on second-guessing every classification
        or tax deadline.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="step-by-step-how-adp-handles-payroll-tax-and-worker-classification" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Step-by-Step: How ADP Handles Payroll Tax and Worker Classification
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
              <h2 id="step-by-step-how-adp-handles-payroll-tax-and-worker-classification-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Step-by-Step: How ADP Handles Payroll Tax and Worker Classification
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
