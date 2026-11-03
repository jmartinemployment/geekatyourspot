
export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        When you are weighing Gusto for payroll tax and worker misclassification risk, the right fit comes down
        to how well the platform matches your business’s real complexity and how its cost model lines up with
        your cash flow. Gusto is designed for small and medium-sized businesses, including those with as few as
        two employees and up to 250, but its sweet spot is for owners who need compliance automation without
        hiring a full HR team. The platform’s logic is built for environments like South Florida, where you
        might have a mix of W-2 employees, 1099 contractors, and workers crossing county or state lines every
        week.</p>
      <p className="text-base text-white shadow-text pt-3">
        Gusto’s fit for your business is strongest when:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>You need to pay both W-2 employees and 1099 contractors, sometimes on different schedules, and want to keep their tax treatment and filings separate and correct.</li>
        <li>Your workers are spread across more than one state, and you do not want to track every change in each state’s tax law yourself.</li>
        <li>You want to remove manual steps from payroll, with no more calculating deductions or filing forms by hand and no more chasing missing tax IDs or deadlines.</li>
        <li>You use QuickBooks or Xero for accounting and want payroll data to sync automatically, not through spreadsheets or manual entry.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Gusto’s pricing model is built to match the way small teams scale up and down. Instead of a flat monthly
        fee for the whole company, you pay for the people you pay each month. If you have a seasonal workforce,
        or contractors who only work some months, you only pay for them when you run payroll for them. This
        keeps costs predictable and avoids paying for inactive workers during slow periods.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s automation is included in the base price. Tax calculations, filings, and form generation
        are not billed as add-ons. This is a key point of contrast with some competitors, who charge extra for
        local or multi-state filings, or for each W-2 or 1099 issued at year-end. With Gusto, you get unlimited
        payroll runs, so you can pay as often as you need without worrying about per-run fees adding up.</p>
      <p className="text-base text-white shadow-text pt-3">
        Flexibility is another factor in judging fit. Gusto supports multiple pay rates, schedules, and job
        codes, which is essential for businesses with hybrid roles or hourly and salaried staff. You can set up
        next-day direct deposit for qualifying businesses, and the platform handles bulk changes, like updating
        pay rates or adding new locations, without needing to call support. If your business grows past 50
        employees, Gusto’s stack expands to cover HR, benefits, time tracking, and compliance in one place,
        replacing the need for separate systems.</p>
      <p className="text-base text-white shadow-text pt-3">
        Where Gusto may not fit is if your business needs custom payroll logic beyond what the platform offers
        through configuration. There is no scripting or
        custom&nbsp;API&nbsp;for
        building new workflows. If you run a business with highly specialized payroll needs, like union rules,
        international currency payments, or custom benefit accruals that are not supported in the platform, you
        may need to look at more customizable, enterprise-grade solutions.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another consideration is support. Gusto’s support is designed for small business owners, not just
        accountants. You get access to customer service and a knowledge base, but if you want hands-on, local
        expertise, especially for South Florida’s seasonal workforce, working with Geek @ Your Spot LLC as your implementer means you get the configuration and data mapping right from the start.
        They make sure your Gusto setup fits your real payroll cycles and tax requirements, which is not
        something the platform’s generic onboarding covers.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, you judge Gusto on three main axes: does its logic match your real workforce, does its
        pricing let you scale up or down without penalty, and does it automate enough of the risk that you stop
        worrying about missed filings or misclassified workers. If your business fits those criteria, and you
        want to avoid the hidden costs and audit risks of DIY payroll, Gusto’s model is built to deliver. The
        rest is about getting the setup right, so the automation works for you, not against you.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="judging-gusto-fit-flexibility-and-how-its-pricing-works-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Judging Gusto: Fit, Flexibility, and How Its Pricing Works for Small Teams
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
              <h2 id="judging-gusto-fit-flexibility-and-how-its-pricing-works-for-small-teams-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Judging Gusto: Fit, Flexibility, and How Its Pricing Works for Small Teams
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
