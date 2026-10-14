export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Justworks is designed to take the risk and heavy lifting of payroll tax and worker classification off
        your plate. For a small business owner in South Florida, this means no more late nights spent
        deciphering tax codes or second-guessing whether a contractor should be on payroll. Instead, Justworks
        automates the essentials—payroll, tax filing, and compliance checks—so you get back hours every week and
        avoid the errors that trigger audits.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform handles payroll for both W-2 employees and 1099 contractors. Every payment run includes
        automatic calculations for FICA, federal and state taxes, and any local requirements. Justworks files
        and remits these taxes directly with the right agencies, so you never have to track deposit calendars or
        worry about missing a deadline. With every pay period, the system checks that withholdings and
        allocations are set up correctly—reducing the chance of a costly mistake. Year-end forms like W-2s and
        1099s are generated and filed, so you’re covered for both your full-time staff and your flexible
        workforce.</p>
      <p className="text-md text-white shadow-text pt-3">
        Worker classification is one of the toughest areas for small businesses, especially when roles change or
        projects come up fast. Justworks brings built-in guidance and operational checks to help you classify
        each team member correctly. When you onboard a new worker, the platform walks you through the questions
        that matter—role, hours, supervision, and job duties—so you avoid the trap of misclassifying someone as
        a contractor when the law says they’re an employee. If you need to correct a past mistake, Justworks
        gives you tools to update classifications and fix filings, so you can respond to issues before they
        become penalties.</p>
      <p className="text-md text-white shadow-text pt-3">
        Multi-state compliance is a major headache for businesses in South Florida, where workers may live in
        one county and work in another, or travel for jobs. Justworks tracks each worker’s location and applies
        the right tax rules for that jurisdiction. The platform manages state tax registrations, closes out
        states when you no longer have team members there, and keeps you up to date as laws change. This means
        you don’t have to be an expert in every state’s requirements—Justworks does the tracking and filing, so
        you stay compliant without the research.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams with no dedicated HR or payroll staff, Justworks replaces the manual processes that eat up
        your week. Time tracking, overtime calculations, and deductions are automated and visible in one place.
        If you have tipped employees, commission-based pay, or seasonal schedules, the platform supports
        flexible pay types and ensures that each payment meets legal requirements. You don’t have to remember
        when to file or what forms to use—Justworks keeps the calendar, files the paperwork, and alerts you to
        any missing information.</p>
      <p className="text-md text-white shadow-text pt-3">
        Support is not just a help desk. When questions come up—about a tax notice, a classification issue, or a
        new hire in another state—Justworks connects you to real HR specialists. They help you interpret rules,
        update your settings, and resolve problems fast. This is critical when an audit or agency letter
        arrives; you’re not left on your own to figure out what went wrong.</p>
      <p className="text-md text-white shadow-text pt-3">
        For business owners who want to grow without adding administrative overhead, Justworks means you can
        scale your team—across roles, states, or even internationally—without taking on new compliance risks.
        You get a single platform for payroll, HR, and compliance, backed by ongoing updates as laws change. The
        result is a business that runs smoother, with fewer errors, less stress, and more time for growth.</p>
      <blockquote cite="https://www.justworks.com/solutions/staying-compliant" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Access the compliance support and resources you need to make maintaining compliance for your business
        less complicated.</blockquote>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-justworks-actually-does-for-payroll-tax-worker-misclassification" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Justworks Actually Does for Payroll Tax &amp; Worker Misclassification
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-justworks-actually-does-for-payroll-tax-worker-misclassification" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Justworks Actually Does for Payroll Tax &amp; Worker Misclassification
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
