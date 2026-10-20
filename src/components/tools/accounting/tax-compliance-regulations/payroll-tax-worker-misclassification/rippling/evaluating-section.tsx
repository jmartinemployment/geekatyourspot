export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Assessing Rippling for your small business in South Florida comes down to two questions: will it fit
        your compliance and payroll complexity, and is the pricing model predictable enough for a lean
        operation? Rippling is built for companies that need to manage both employees and contractors across
        multiple locations, handle shifting work statuses, and stay current with tax and labor law changes. If
        your team is mostly local, but you occasionally hire out-of-state or remote workers, Rippling’s
        automation is designed to keep your compliance airtight without needing a dedicated HR or legal
        department.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rippling’s fit is strongest for businesses with a mix of W-2 employees and 1099 contractors who need to
        be classified, onboarded, and paid under different rules. If you are running a construction crew, a
        hospitality group, or any operation where workers move between counties or states, Rippling’s real-time
        tax account management and classification tools remove the guesswork. The system’s Compliance 360
        Management module actively monitors for risks—like a contractor who starts working full-time hours, or
        an employee who moves to a new tax jurisdiction—and flags issues before they become costly mistakes.
        This level of automation is not overkill for small teams; it is what keeps you from spending weekends on
        paperwork or losing sleep over audit threats.</p>
      <p className="text-md text-white shadow-text pt-3">
        For very small businesses that operate in only one state, with a stable set of employees and no
        contractors, Rippling may be more system than you need. The platform’s strengths—dynamic compliance,
        multi-state tax handling, and automated onboarding—are most valuable when your workforce or tax
        footprint is in flux. If you are only running payroll for a handful of people in one location, a simpler
        tool might be enough. But as soon as you add a contractor, hire out of state, or need to handle
        different tax rates, Rippling’s automation pays for itself in time saved and errors avoided.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rippling’s pricing model is per-employee, per-month (PEPM), which means you pay a fixed amount for each
        person on the system each month. This covers the core automation for payroll, compliance, and
        onboarding—there are no hidden fees for running payroll more often, generating W-2s or 1099s, or
        handling multi-state tax filings. For small businesses, this makes budgeting straightforward: you know
        what each new hire or contractor will cost, and you don’t get surprised by extra charges for features
        you need to stay compliant. The model is designed to scale with your team, so you only pay for what you
        use.</p>
      <p className="text-md text-white shadow-text pt-3">
        When comparing Rippling to other payroll and compliance tools, the key difference is in how much manual
        work is removed. Many platforms alert you to compliance risks but require you to fix them in another
        system or call in outside help. Rippling lets you resolve most issues—like misclassification or tax
        account setup—directly inside the platform, often in a single step. This is especially important in
        South Florida, where a worker’s status or location can change quickly and tax rules are not always
        clear. The platform’s integrations with accounting tools like QuickBooks, Xero, and NetSuite mean you do
        not have to replace your existing systems to get the benefit; Rippling fits into your current workflow
        and extends it with real-time compliance automation.</p>
      <p className="text-md text-white shadow-text pt-3">
        A buyer should weigh Rippling’s fit by looking at:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>How often you need to classify or onboard new workers (especially contractors or remote staff)</li>
        <li>Whether you operate in more than one county or state, or expect to</li>
        <li>How much time you currently spend on payroll tax filings, compliance checks, and fixing errors</li>
        <li>Whether you need real-time alerts for compliance risks, or can afford to wait for quarterly reviews</li>
        <li>How well your current payroll tools integrate with your accounting and HR systems</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        If the answer to any of these is that you spend hours every month on manual checks, or you have been
        caught out by a tax or classification mistake before, Rippling is likely a strong fit. The pricing model
        means you can start with a small team and add more as your business grows, without worrying about
        escalating costs or outgrowing the system.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC’s role is to make sure Rippling’s setup matches your actual business rules, not just
        the defaults. That means mapping your approval chains, customizing compliance alerts, and building out
        onboarding flows so they fit your process. The goal is to make Rippling’s automation invisible—so
        payroll, compliance, and worker classification just happen, and you only get involved when something
        needs your attention. In practice, that’s what lets the Miami construction owner from the opening focus
        on the next job, not the last payroll cycle.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="evaluating-rippling-fit-for-small-businesses-and-how-the-pricing-model-works" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Evaluating Rippling: Fit for Small Businesses and How the Pricing Model Works
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="evaluating-rippling-fit-for-small-businesses-and-how-the-pricing-model-works" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Evaluating Rippling: Fit for Small Businesses and How the Pricing Model Works
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
