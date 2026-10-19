import Link from "next/link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A small HVAC company in Miami-Dade starts its busy season with a full slate of projects and a growing
        crew. The owner juggles paychecks, logs extra hours, and brings on two more technicians as contractors
        to keep up with demand. By August, the paperwork piles up. Classifying workers as W-2 or 1099 is
        guesswork. The team logs overtime, but who counts toward which rule changes every week. A routine review
        from the state exposes a payroll tax filing error, one misclassified technician triggers a cascade of
        back taxes, fines, and penalties.&nbsp;<Link id="tools-accounting-payroll-tax-worker-misclassification-adp-overview-payroll-tax-worker-misclassification" href="/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-smb-compliance" className="text-[#C83803] hover:underline">Payroll Tax &amp; Worker Misclassification</Link>&nbsp;is not an abstract
        compliance problem here. It is a direct threat to cash flow, reputation, and the owner’s ability to keep
        the business running.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is daily reality for small business owners across West Palm Beach, Broward, and Miami-Dade. In
        industries fueled by seasonal work and a steady churn of employees and contractors, the risk is
        constant. Even a single mistake, like marking a part-time bookkeeper as a contractor instead of an
        employee, can mean thousands in unexpected payroll taxes or a red flag for state auditors. Owners want
        flexibility to hire fast and scale up or down, but the legal maze of worker status, overtime rules, and
        multi-state reporting makes every decision a potential liability. Without a dedicated HR or legal team,
        these leaders spend hours each week trying to keep up with shifting state laws and federal guidance,
        hoping nothing slips through the cracks.</p>
      <p className="text-md text-white shadow-text pt-3">
        The answer is not just more paperwork or another manual checklist. Automated payroll tax software,
        backed by expert advisory, now gives small businesses a way to handle complex worker classification and
        multi-state compliance with confidence. Instead of scrambling to fix errors after the fact, owners can
        rely on real-time data checks, updated overtime rules, and automated filings that keep pace with
        changing laws. Smart systems flag risks before they become penalties. The result: fewer errors, less
        time spent on admin, and a lower risk of triggering audits. For South Florida’s small businesses, this
        is the difference between growth and sudden setbacks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot’s approach starts here, identifying the real cost of misclassification and manual
        compliance, then using AI-driven payroll solutions that plug into your existing systems. The goal is
        simple: let business owners focus on people and growth, not paperwork and penalties.</p>
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
