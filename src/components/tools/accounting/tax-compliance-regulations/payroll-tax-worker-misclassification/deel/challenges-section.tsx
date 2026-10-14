export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every Friday afternoon, the same South Florida business owner looks at the spreadsheet and feels the
        weight of risk. Managing a mix of W-2 employees and 1099 contractors without a dedicated HR or legal
        team means every payroll cycle is a gamble. The rules change often, but the penalties for getting them
        wrong never shrink. One misclassified worker, one late payroll tax deposit, and the business is exposed
        to audits, fines, and lawsuits. The cost isn’t just money—it’s time, stress, and the constant fear of
        missing something critical.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is not a problem unique to one office. Across Miami-Dade, Broward, and Palm Beach, small businesses
        in construction, hospitality, and services hire for flexibility but find themselves tangled in
        compliance. Payroll taxes have to be calculated, withheld, and deposited on time for every W-2 employee.
        At the same time, every 1099 contractor must be vetted, tracked, and paid without crossing the line into
        employment. The distinction between employee and contractor is not just paperwork. It determines who
        gets benefits, who triggers unemployment tax, and who brings the risk of a federal or state audit if
        misclassified.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual tracking and spreadsheets make this worse. Human error creeps in when you have to juggle
        timesheets, overtime calculations, and tax deposits for a workforce that changes project by project. The
        IRS and Department of Labor have increased audits in gig-heavy markets, and Florida’s own laws require
        quarterly reporting, new hire verification, and re-employment tax payments. Miss a deadline, and the
        penalties start to add up. Miss a classification, and the business can owe back taxes, retroactive
        benefits, and face lawsuits. Even a contractor who signs a waiver or NDA does not shield the business
        from liability if the relationship looks like employment under the law.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real cost is not just the fines or back taxes. It’s the hours spent trying to keep up with changing
        rules, the stress of never knowing if the books are audit-ready, and the lost opportunities when the
        business can’t scale because compliance feels too risky. Owners spend time gathering W-9s, tracking down
        missing tax forms, and manually updating records. When regulations change mid-year—like a new 1099
        threshold or a change to state reporting—manual systems often miss the update, exposing the business to
        penalties months later. Fragmented payment processes, with dozens of manual transfers to contractors’
        bank accounts, increase the risk of errors, missed payments, and reconciliation headaches at month-end.</p>
      <p className="text-md text-white shadow-text pt-3">
        During investor or lender due diligence, these gaps come to the surface. If payroll records are
        incomplete or classification is questionable, the business faces delays, higher scrutiny, or even failed
        funding. The cost is not hypothetical. In the worst cases, one audit can wipe out a year’s profit. The
        spreadsheet system that worked for five people breaks down at scale, but the risk grows with every new
        hire, every new project, and every new state line crossed. For small businesses that want to grow
        flexibly, the administrative complexity of getting payroll tax and worker classification right is a
        constant drag on time, energy, and growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-payroll-and-classification-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Payroll and Classification by Hand
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
              <h2 id="what-it-costs-to-keep-doing-payroll-and-classification-by-hand" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Payroll and Classification by Hand
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
