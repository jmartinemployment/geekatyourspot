export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Gusto automates the most error-prone parts of payroll tax and worker classification for small businesses
        handling both W-2 employees and 1099 contractors. The platform is designed to keep each worker type
        separate from the start, so every payroll run follows the right rules for each person on your team. This
        is not just a matter of convenience—missteps here are the root cause of the biggest penalties South
        Florida business owners face. Gusto’s workflow is built to close those gaps before they ever open.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process starts when you set up your team. Gusto requires you to enter each worker as either a W-2
        employee or a 1099 contractor, and the system keeps these records distinct at every stage. For
        employees, Gusto prompts for all the details needed to calculate withholdings—filing status, allowances,
        and direct deposit info. For contractors, it collects the information needed for 1099 filings, including
        W-9 data. This upfront separation means the system never mixes up how taxes are handled for each group.</p>
      <p className="text-md text-white shadow-text pt-3">
        Each pay cycle, Gusto calculates wages, taxes, and deductions for every employee, drawing on the latest
        federal, state, and local tax rates. The platform updates these rates automatically—so when the Social
        Security wage base or Florida’s local surtax rules change, you don’t have to lift a finger. For
        contractors, Gusto issues payments without withholding taxes, as required by law. The system tracks
        contractor payments year-round, flagging when you cross the $600 threshold for 1099-NEC reporting (and,
        starting in 2026, the $2,000 threshold).</p>
      <p className="text-md text-white shadow-text pt-3">
        Gusto handles all payroll tax filings in the background. Every time you run payroll, the system
        calculates, files, and remits federal, state, and local payroll taxes to the right agencies. This
        includes Social Security, Medicare, FUTA, and SUI, plus any local taxes owed in Miami-Dade, Broward, or
        Palm Beach. You don’t need to remember deposit schedules or filing deadlines—Gusto does it for you, and
        covers multi-state filings at no extra cost if your team crosses county or state lines.</p>
      <p className="text-md text-white shadow-text pt-3">
        At year-end, Gusto generates and files W-2s for employees and 1099s for contractors. The platform checks
        for missing or incorrect identification numbers before you complete a pay run, so you avoid the IRS’s
        harsh late-filing penalties. Employees and contractors receive electronic copies of their forms, and if
        you switch to Gusto mid-year, the system gathers prior wage data to file full-year W-2s. This means you
        get a complete, audit-ready paper trail without scrambling for old records.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout the year, Gusto’s workflow includes built-in checks to prevent common errors. If a payroll
        amount looks off, the system flags it before you submit. If a timecard is irregular, Gusto suggests a
        fix. Approved timesheets sync automatically to payroll, so you’re not re-entering hours or risking a
        mismatch between what’s worked and what’s paid. For restaurants and hospitality, Gusto can automatically
        adjust wages to comply with tip credit and minimum wage rules, and it supplies the reports needed to
        claim the FICA tip credit at tax time.</p>
      <p className="text-md text-white shadow-text pt-3">
        If you hire new staff, Gusto automatically files new hire reports with the state and helps you complete
        all the federal forms—like I-9s, W-4s, and the right mix of W-2 or 1099 paperwork. The system keeps
        electronic copies of pay stubs and payroll records, so you meet IRS, FLSA, and EEOC retention rules
        without extra work. For every payroll run, you get a summary to review and approve before anything is
        submitted or paid.</p>
      <p className="text-md text-white shadow-text pt-3">
        In South Florida, where teams flex with the season and workers may cross county lines every week, these
        mechanics matter. Gusto’s step-by-step workflow is built to stop small errors before they become audit
        triggers. You don’t need to memorize the IRS’s latest rules or track which team member is a contractor
        this month and an employee the next. The software walks you through every step, keeps the records
        straight, and files every required form on time, every time.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-gusto-handles-payroll-tax-and-worker-classification-step-by-step" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Gusto Handles Payroll Tax and Worker Classification Step by Step
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
              <h2 id="how-gusto-handles-payroll-tax-and-worker-classification-step-by-step" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Gusto Handles Payroll Tax and Worker Classification Step by Step
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
