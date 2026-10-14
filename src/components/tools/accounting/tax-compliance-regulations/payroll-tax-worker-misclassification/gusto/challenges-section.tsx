export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every Friday, the owner of that Miami HVAC company is back at her desk, staring down another round of
        payroll. With a team that shifts by the season and jobs that cross county lines, she faces a constant
        risk: one misstep on a tax form or a wrong worker type, and the business could be on the hook for
        thousands in penalties. The problem isn’t just the paperwork—it’s the relentless complexity. Payroll tax
        and worker misclassification are not theoretical risks in South Florida. They are the reason many small
        businesses lose sleep, and sometimes, their profit margin.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual payroll means every pay cycle is a fresh opportunity for error. The IRS and Florida’s Department
        of Revenue each have their own filing rules, deposit schedules, and forms. Miss a quarterly deposit or
        file a W-2 late and the penalties start at 2% and climb to 10% or more, plus interest. The owner who
        skips a local tax registration or misses a new employee state report can face hundreds or thousands in
        fines—often with no warning before the bill arrives. Even a single late payroll tax deposit can erase
        the profit from several jobs, and once the IRS sends a notice, there’s no negotiating the penalty away.</p>
      <p className="text-md text-white shadow-text pt-3">
        Misclassifying a worker—labeling a regular, full-time team member as a 1099 contractor to save on
        taxes—brings even higher stakes. The IRS and Florida both treat worker classification as a legal
        question, not a matter of paperwork or signed agreements. If the business controls how, when, and where
        work gets done, that person is almost always an employee, not a contractor. The cost of getting it wrong
        isn’t just back taxes: it’s unpaid overtime, missed benefits, unemployment insurance, and penalties that
        can stretch back years. The owner can’t rely on a contract or a handshake to protect against an audit;
        the only defense is getting the classification right, every time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Keeping up with changing rules adds a new layer of risk. The Social Security wage base rises annually,
        and federal, state, and local tax tables update without warning. A spreadsheet built last year can’t
        keep up with these changes. If the business misses an update—say, the 2026 wage base increase—it could
        mean under-withholding for months, only to discover the error at year-end. The result: amendments,
        interest, and a scramble to fix dozens of paychecks retroactively. For businesses with workers who cross
        county or state lines, the complexity multiplies. Each jurisdiction has its own rules, and a single
        error in multi-state or multi-county reporting can lead to compounding mistakes and audit exposure.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual processes also mean chasing down paperwork. At tax time, the owner needs to generate W-2s for
        employees and 1099s for contractors. If any identification number is missing or incorrect, the e-filing
        can fail, triggering non-negotiable IRS penalties. Delaying those filings—even by a day—means the
        business pays for the mistake, not the accountant. The same goes for local filings: one missed deadline,
        and the penalties stack up fast.</p>
      <p className="text-md text-white shadow-text pt-3">
        The cost isn’t just money. Every hour spent double-checking forms or tracking tax updates is an hour not
        spent on customers or growth. The business owner is forced to become a part-time compliance officer,
        constantly worried about making a mistake that could shut the doors for good. In South Florida’s
        gig-heavy, seasonal economy, where teams change often and jobs cross borders, the risk is never
        theoretical. Every payroll run is a chance for a small error to become a big problem. The reality:
        without automation and built-in compliance, the business owner is gambling with every pay cycle.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
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
