export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Most small business owners in South Florida do not set out to break the law when handling payroll tax or
        classifying workers. Yet, the reality is that the mix of W-2 employees and 1099 contractors, common in
        construction, hospitality, and seasonal services, turns every pay cycle into a risk. The manual approach,
        with spreadsheets and paper contracts, is not just slow; it’s a magnet for mistakes. Each one can mean
        missed payroll tax deposits, late filings, misclassified workers, and penalties that erase months of
        profit.</p>
      <p className="text-md text-white shadow-text pt-3">
        Take the Miami-Dade contractor who hires a crew for a six-week project. She tracks employee hours in one
        file and collects invoices from contractors by email. The crew includes people who live in Broward but
        work jobs in Miami. Some are paid as staff, some as freelancers. No one checks if the contractors are
        truly independent, or if the right state and local taxes are withheld. The job gets done, but the
        records are a mess. When tax season arrives (or worse, when the Department of Revenue calls), the business
        faces a scramble for paperwork and explanations it cannot give.</p>
      <p className="text-md text-white shadow-text pt-3">
        The biggest risk is not knowing where the line is. Worker misclassification is rarely obvious in the
        moment. A contractor who works set hours, uses company tools, or starts to look like a regular employee
        can trigger reclassification, sometimes months later, during an audit. The IRS and state agencies do not
        care if the mistake was accidental. Their job is to collect back taxes, penalties, and sometimes even
        pursue legal action. In South Florida, where workers move between counties and states, the rules shift
        fast, and the cost of missing a new requirement is steep.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual processes make it easy to miss deadlines. Payroll tax deposits must hit federal and state
        accounts on time, every time. A single late deposit can mean an immediate penalty. Multi-state reporting
        adds another layer: if a worker lives in one state but works in another, or travels for jobs, the
        business must track and file the right taxes in each place. Few small teams have the bandwidth to keep
        up with these details. The result is missed filings, late forms, and a growing risk of audit.</p>
      <p className="text-md text-white shadow-text pt-3">
        Trying to fix errors after the fact is even more expensive. If a worker is reclassified from contractor
        to employee, the business can owe back payroll taxes, unpaid overtime, benefits, and penalties. The IRS
        estimates that 40% of small businesses pay payroll tax penalties each year. In some cases, a single
        misclassification can trigger a chain reaction: retroactive taxes, eligibility for unemployment, workers’
        comp, and even lawsuits for unpaid benefits. The business owner is left trying to prove the intent
        behind every contract and payment, often with incomplete records.</p>
      <p className="text-md text-white shadow-text pt-3">
        Outdated contract templates and generic onboarding kits do not hold up in an audit. Many owners rely on
        free forms or copied agreements, assuming that a signed contract is enough. But classification is based
        on what the worker actually does, not what the paperwork says. Without a system that checks and
        documents each worker’s true status, the business is exposed. And for a business whose workers cross
        state lines, a one-size-fits-all approach is a liability.</p>
      <p className="text-md text-white shadow-text pt-3">
        The cost is not just in money. Every hour spent chasing down paperwork, re-entering data, or responding
        to a government notice is an hour lost to running the business. The uncertainty of never knowing if the
        next letter from the IRS or state will be a routine request or the start of an audit creates stress that
        bleeds into every decision. Owners hesitate to hire or expand, worried that a new worker could tip the
        balance into noncompliance. In the end, the business is stuck in survival mode, reacting to problems
        instead of growing.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rippling is designed to break this cycle by removing the guesswork, automating compliance, and giving
        business owners a system that adapts to local rules, changing teams, and real-world complexity. Where
        manual processes leave gaps (missed deadlines, misclassified workers, unfiled taxes), Rippling closes them
        with automation, real-time alerts, and built-in expertise. The next section covers how those
        capabilities remove the burden from your week, so you can focus on running your business instead of
        fearing the next audit.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing This by Hand
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
              <h2 id="what-it-costs-to-keep-doing-this-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing This by Hand
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
