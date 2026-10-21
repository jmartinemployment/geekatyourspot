export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deel is built for small businesses that need to manage both W-2 employees and 1099 contractors without a
        full-time HR or legal team. If your company is in Miami-Dade, Broward, or Palm Beach and you face the
        weekly challenge of classifying workers, tracking payroll taxes, and keeping up with changing
        regulations, Deel is designed for your environment. It is especially relevant for firms in construction,
        hospitality, real estate, and services. These are sectors where seasonal hiring and project-based work are common,
        and the risk of misclassification is highest.</p>
      <p className="text-md text-white shadow-text pt-3">
        If your workforce is simple (just a few full-time employees, no contractors, and no plans to scale or
        hire out of state), you may not need the full depth of what Deel offers. A basic payroll provider can
        likely handle your needs, and the additional compliance automation and liability coverage in Deel may be
        more than you require. But if you have ever had to track down a missing W-9, worried about whether a
        worker is truly a contractor, or scrambled to update payroll when a tax rule changes mid-year, the risk
        profile changes. Deel’s automation and compliance features are built for businesses that cannot afford a
        single mistake to become a major financial event.</p>
      <p className="text-md text-white shadow-text pt-3">
        Deel is not the right fit for businesses that want to keep everything manual or are deeply invested in
        custom, legacy payroll systems with no desire to change. It is also not for those looking for a human
        consultant to make every classification or compliance decision for them on a weekly basis. Deel is a
        platform, not a replacement for legal advice in edge cases or a substitute for having some internal
        process discipline. It automates and assumes risk for standard, well-defined scenarios, but the owner
        still needs to set up the system, review exceptions, and stay engaged with the business’s workforce
        strategy.</p>
      <p className="text-md text-white shadow-text pt-3">
        For most small businesses in South Florida, the biggest value comes from moving the risk and
        administrative burden off the owner’s plate. Deel’s Contractor of Record service is the strongest option
        for those who routinely hire freelancers or project workers and want to sleep at night knowing that a
        misclassification claim will not wipe out a year’s profit. Its Compliance Hub and automated document
        collection mean you are not chasing forms or updating spreadsheets every time the law changes. If your
        business is growing, hiring in multiple states, or facing pressure from lenders or investors to prove
        compliance, Deel’s audit-ready records and real-time integration with accounting systems like QuickBooks
        and Xero remove the last manual bottlenecks.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next step for a business considering Deel is to get clear about its own risk and workflow needs. Map
        out how many workers you have in each category, how often you add or change team members, and what your
        current process is for collecting tax forms and tracking compliance. If you find that you are spending
        hours each month on manual updates, or if you have ever paid a late penalty or lost sleep over an audit
        risk, those are signs that your current approach is not sustainable. Deel is not a magic wand, but it is
        a platform that, when set up correctly, can automate the most painful and risky parts of your payroll
        and classification process.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC specializes in configuring Deel for small businesses in South Florida, making sure the
        platform fits your actual workflows and connects with your existing accounting tools. They do not build
        Deel, but they do close the gap between the software and your unique business needs by mapping data,
        setting up automated rules, and training your team so you get the full value of the platform from day
        one. The result is a system that runs in the background, flags issues before they become problems, and
        lets you focus on growing your business instead of fighting fires every Friday afternoon.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<button type="button" data-scheduler-link id={`tools-accounting-payroll-tax-worker-misclassification-deel-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</button>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>How do you currently determine whether a new team member should be onboarded as a W-2 employee or a 1099 independent contractor?</li>
        <li>Do you have 1099 contractors who use your company equipment, have set schedules, or perform the exact same core services as your W-2 staff?</li>
        <li>How are you managing, collecting, and verifying Form W-9s and tracking annual thresholds for your independent contractors?</li>
        <li>Are you currently employing any remote workers, out-of-state contractors, or staff who split time between different states?</li>
        <li>How much time does your team spend calculating, withholding, and filing quarterly federal (941) and Florida Reemployment taxes (RT-6)?</li>
        <li>Have you ever had to pay an IRS or state penalty due to a delayed payroll tax deposit or a clerical filing error?</li>
        <li>When you onboard a new worker, how does their payroll and tax documentation sync up with your core accounting or&nbsp;ERP&nbsp;system?</li>
        <li>How does your current system track and adjust for changing local, state, and federal labor laws or payroll tax caps?</li>
        <li>If the state or the IRS audited your contractor workforce tomorrow, how long would it take you to produce signed agreements, W-9s, and clear payment trails for every single worker?</li>
        <li>What is your current monthly or annual budget for payroll processing and&nbsp;tax compliance&nbsp;legal advice?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-should-use-deel-who-should-not-and-what-to-do-next" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Should Use Deel, Who Should Not, and What to Do Next
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
              <h2 id="who-should-use-deel-who-should-not-and-what-to-do-next-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Should Use Deel, Who Should Not, and What to Do Next
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
