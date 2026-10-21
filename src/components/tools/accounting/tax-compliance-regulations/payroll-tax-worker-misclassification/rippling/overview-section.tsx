import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Picture a small construction firm in Miami-Dade, juggling a dozen jobs across three counties. The owner
        needs workers on short notice for a big project, so she brings on a mix of W-2 employees and 1099
        independent contractors. The job gets done, but the paperwork lags behind. Payroll taxes for staff are
        tracked in one spreadsheet, but invoices from freelancers pile up, some with local addresses and some from out of
        state. No one double-checks if the right taxes are withheld, or if those workers are even classified
        correctly. When a state auditor comes knocking six months later, the business faces questions it can’t
        answer, and the fines are bigger than last quarter’s profits.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is not rare in South Florida’s hospitality, seasonal services, and construction sectors. Owners
        want to grow fast and keep costs low, but the rules around&nbsp;<Link id={`tools-accounting-payroll-tax-worker-misclassification-rippling-overview-payroll-tax-worker-misclassification${idSuffix}`} href="/use-cases/accounting/tax-compliance-regulations/ai-payroll-tax" className="text-[#C83803] hover:underline">Payroll Tax &amp; Worker Misclassification</Link>&nbsp;keep shifting. There’s no dedicated HR team, so the owner or office manager guesses at each new hire.
        One mistake, such as treating a regular worker as a contractor or missing a multi-state tax filing, can
        trigger penalties that put the whole operation at risk. Tax deadlines get missed, required forms are
        late, and the IRS or state revenue department flags the business for review. The process is slow,
        manual, and full of risk.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real pain is not just the paperwork or the hours lost. It’s the uncertainty and the fear that even a
        small error can lead to a penalty or lawsuit. A business can’t afford to lose a week of revenue or have
        its accounts locked while it tries to explain who was an employee and who was a contractor. In South
        Florida, where workers move across counties and states, and where the line between gig and full-time
        shifts with each project, this risk grows fast. Most small businesses simply don’t have the bandwidth or
        in-house expertise to keep up.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated solutions now exist that handle payroll tax deposits, track overtime, and help correctly
        classify every worker, reducing manual work, cutting the chance of error, and flagging compliance risks
        before they become fines. For small businesses in South Florida, this means fewer surprises at tax time,
        less time spent on admin, and far less risk of being caught out in an audit. Payroll Tax &amp; Worker
        Misclassification no longer need to be the problem that keeps owners up at night.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
