export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Choosing ADP for payroll tax and worker classification is not about picking the biggest brand or the
        longest feature list. The real test is whether ADP fits your business size, industry, and risk profile,
        and whether its pricing and service model align with your budget and needs. For small businesses in
        South Florida, the stakes are high: the wrong fit leads to wasted spend, compliance gaps, or a system
        that cannot keep up as your team grows or contracts.</p>
      <p className="text-md text-white shadow-text pt-3">
        ADP is designed to scale across a wide range of business sizes. According to ADP’s own published
        material, its Comprehensive Services serve small businesses with as few as 25 employees, midsized
        companies up to 999, and large enterprises beyond that. The same platform can flex to handle a seasonal
        team of 30 or a multi-location operation with hundreds of workers. This matters in South Florida, where
        business headcount fluctuates with the season and the mix of employees and contractors changes month to
        month.</p>
      <p className="text-md text-white shadow-text pt-3">
        ADP’s fit for your business is strongest if you need to manage both W-2 and 1099 workers, operate across
        multiple states, or face regular changes in workforce composition. The platform’s compliance engine and
        automation logic are built for environments where mistakes in worker classification or payroll tax
        filings can be catastrophic. If your business is highly stable, with only salaried employees and no
        out-of-state hires, a simpler tool might be enough, but as soon as you add complexity, ADP’s value
        increases.</p>
      <p className="text-md text-white shadow-text pt-3">
        Industry fit is another consideration. ADP is used across hospitality, construction, retail, real
        estate, and professional services, sectors where the risk of misclassification and payroll tax errors is
        highest. Its automation of overtime calculations, wage garnishments, and compliance monitoring is tuned
        for industries with variable schedules, hourly work, and a mix of employment types. If your business
        regularly brings on short-term help, needs to calculate project-based labor costs, or faces shifting
        state tax rules, ADP’s workflows are built for those realities.</p>
      <p className="text-md text-white shadow-text pt-3">
        When it comes to pricing, ADP does not publish a one-size-fits-all rate. The platform’s model is based
        on your business size, service level, and configuration needs. You do not pay for features you do not
        use, and support can be tailored to your own requirements, from basic compliance monitoring to a
        dedicated HR business partner. This is not a flat monthly fee for every user; it is a flexible model
        that can scale up or down as your workforce changes. For small businesses, this means you can start with
        core payroll and compliance, then layer on additional modules or integrations as your needs evolve.</p>
      <p className="text-md text-white shadow-text pt-3">
        Buyers should judge ADP on a few key criteria:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Does the platform handle both employees and contractors, with clear logic for each?</li>
        <li>Can it automate payroll tax filings and compliance across all relevant jurisdictions?</li>
        <li>Is there integration with your existing accounting, HR, or time tracking systems?</li>
        <li>How quickly can you add or remove users as your team changes?</li>
        <li>What level of support do you get, and is it available 24/7 when a crisis hits?</li>
        <li>Does the pricing structure match your business’s seasonality and growth plans?</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        Another point of evaluation is support and risk management. ADP’s model includes access to certified
        payroll and compliance experts, not just a generic help desk. This direct support is critical when
        facing a payroll tax deadline or a state audit. The platform also offers audit trails, document
        management, and automated alerts for compliance issues, reducing your exposure to penalties and fines.</p>
      <p className="text-md text-white shadow-text pt-3">
        ADP’s extension mechanism is another differentiator. The platform’s APIs and pre-built integrations mean
        you can connect it to most business-critical systems without custom development. This keeps your data
        flowing cleanly, reduces manual errors, and ensures that compliance logic is enforced everywhere, not
        just in payroll, but across HR, accounting, and even point-of-sale.</p>
      <p className="text-md text-white shadow-text pt-3">
        For buyers comparing ADP to other payroll tax automation tools, the main differences are scale, support,
        and depth of compliance features. ADP is not the cheapest solution for the simplest use cases, but it is
        the safest bet for businesses that cannot afford payroll mistakes or compliance gaps. If your business
        is growing, changing, or facing regulatory scrutiny, ADP’s flexible model and deep compliance logic are
        built to keep you protected as you scale.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, judging ADP is about more than ticking boxes on a feature list. It is about fit for your
        business’s complexity, the flexibility to grow or contract without penalty, and the assurance that you
        will not be left alone when a compliance issue arises. The right fit is the one that keeps your business
        running, your team paid, and your risks covered, no matter how your workforce changes from one season to
        the next.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="judging-adp-fit-flexibility-and-what-to-know-about-its-pricing-model" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Judging ADP: Fit, Flexibility, and What to Know About Its Pricing Model
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
              <h2 id="judging-adp-fit-flexibility-and-what-to-know-about-its-pricing-model" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Judging ADP: Fit, Flexibility, and What to Know About Its Pricing Model
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
