export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Justworks automates the messy mechanics of payroll tax and worker classification so small businesses in
        South Florida can step away from spreadsheets and manual checks. The system is built to handle the full
        cycle (onboarding, pay calculation, tax withholding, reporting, and compliance checks) without forcing the
        owner to track every detail themselves. Every step is mapped to reduce risk and free up time.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process starts with onboarding. When a business adds a new worker, Justworks walks through a
        structured intake: capturing legal name, address, Social Security number or EIN, and work location. The
        platform guides the user to enter work status, pay rate, and whether the person is a W-2 employee or a
        1099 contractor. This is not just a formality. Worker classification is flagged at the start, and the
        system prompts for the details that affect payroll tax treatment, with no guesswork or skipped steps. For
        remote or multi-state teams, Justworks asks for work location and residence to apply the right state and
        local tax rules.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once a team member is in the system, Justworks calculates payroll every pay period. The platform pulls
        in time data, either from its own time tracking tools or from integrated systems like QuickBooks or Xero.
        It then applies pay rules: hourly, salary, overtime, tips, and commissions, as needed. Overtime is
        calculated automatically to match state and local requirements, so a Miami restaurant owner with tipped
        staff or a contractor-based construction firm does not have to memorize local labor laws. The platform
        checks for errors, flags anything that does not add up, and lets the business review before finalizing.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core of Justworks’ compliance engine is its tax handling. For every payroll run, Justworks
        calculates federal, state, and local tax withholdings based on the worker’s classification and location.
        FICA, Medicare, Social Security, and unemployment taxes are all handled in the background. For
        contractors, the system tracks payments for 1099-NEC reporting and ensures no taxes are withheld unless
        required. For employees, the correct withholdings are applied and filed. The system generates and files
        W-2s, 1099s, and all required quarterly and annual payroll tax forms directly with the IRS and state
        agencies. There is no need to download forms or re-enter data elsewhere.</p>
      <p className="text-md text-white shadow-text pt-3">
        Justworks also manages compliance for multi-state teams, a common scenario in South Florida, where
        workforces are often distributed across county or state lines. The platform keeps up with changing state
        registration requirements, automatically registering new states as needed and closing out states when
        workers leave. This is not just a checklist; it means that when a business hires in a new state,
        Justworks prompts for the right information, handles the registration, and updates payroll tax filings
        to match. If a business stops employing in a state, Justworks closes out the tax accounts, so there are
        no lingering compliance risks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout the cycle, Justworks provides compliance alerts and reminders. If a tax law changes or a new
        filing is required, the system notifies the business and updates its calculations. The platform keeps a
        detailed record of every payroll run, tax filing, and compliance action, making it easy to respond if a
        state agency or the IRS ever questions a filing. For businesses that need to correct a past error, such
        as a misclassified worker or a missed tax rate, the system supports retroactive corrections and generates
        the right amended forms.</p>
      <p className="text-md text-white shadow-text pt-3">
        The end result is a step-by-step machine that removes manual risk. The owner who used to spend Friday
        afternoons cross-checking pay rates and tax tables now sees a dashboard with every worker classified,
        every tax filed, and every deadline met. The business can scale up or down, add contractors for busy
        weekends, or expand into new states without facing a compliance cliff. Justworks does not just automate
        payroll; it builds in the guardrails that keep small teams safe from the biggest risks of payroll tax
        and worker misclassification.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-justworks-runs-payroll-tax-and-worker-classification-behind-the-scenes" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Justworks Runs Payroll Tax and Worker Classification Behind the Scenes
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
              <h2 id="how-justworks-runs-payroll-tax-and-worker-classification-behind-the-scenes-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Justworks Runs Payroll Tax and Worker Classification Behind the Scenes
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
