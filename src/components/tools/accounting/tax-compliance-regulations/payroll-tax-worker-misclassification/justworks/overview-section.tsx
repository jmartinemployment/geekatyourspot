import Link from "next/link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every month, a small business owner in Miami-Dade sits down to run payroll, sifting through a stack of
        timesheets and contracts. Some team members are full-time, others pick up shifts as needed, and a few
        are paid as independent contractors to cover busy weekends. With no dedicated HR staff, she tracks it
        all herself—checking off names, calculating hours, and guessing which taxes need to be withheld. She
        spends hours making sure each payment looks right on paper. But one unchecked box or misfiled tax form
        can lead to a costly mistake: a worker misclassified, a missed state filing, or a payroll tax deposit
        that doesn’t match what the IRS expects.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is a daily reality for small businesses across South Florida’s gig-heavy and seasonal industries.&nbsp;<Link id="tools-accounting-payroll-tax-worker-misclassification-justworks-overview-payroll-tax-worker-misclassification" href="/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-compliance" className="text-[#C83803] hover:underline">Payroll Tax &amp; Worker Misclassification</Link>&nbsp;isn’t just a paperwork headache—it’s a risk that can bring
        audits, penalties, and months of distraction. With teams that shift between W-2 employment and 1099
        contracting as business needs change, each pay period becomes a minefield. One wrong step—classifying a
        worker as a contractor when their job fits the employee test, or missing a local payroll filing for
        someone who works across county lines—can trigger a federal or state audit. The owner who was focused on
        growth is now scrambling to pull together records and defend every decision made in a rush.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real cost isn’t just fines or back taxes. Most small teams don’t have the depth to absorb a
        compliance crisis. A single penalty can wipe out months of profit. Delays in fixing errors mean lost
        time, missed opportunities, and a hit to trust—both from employees who expect their paychecks to be
        right, and from clients who count on steady service. In this environment, relying on spreadsheets and
        memory is a gamble, not a strategy.</p>
      <p className="text-md text-white shadow-text pt-3">
        AI-driven payroll tax and compliance solutions change this by automating calculations, tracking the
        latest rules, and flagging potential misclassification issues before they become problems. For South
        Florida’s small businesses, this means less time wrestling with forms and more time focused on running
        the business. The right system reduces the risk of human error, keeps you ahead of regulatory changes,
        and gives you the certainty that payroll tax and worker status are handled—no matter how your team
        changes week to week.</p>
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
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
