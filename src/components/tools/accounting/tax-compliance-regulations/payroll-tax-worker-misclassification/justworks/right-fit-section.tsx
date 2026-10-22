import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Justworks is designed for small businesses that want to move payroll tax and worker classification risk
        off their own desk. If you are a founder or manager in Miami-Dade, Broward, or Palm Beach and you are
        tired of tracking every state’s rules, chasing down tax forms, or worrying about whether your mix of W-2
        and 1099 workers is set up correctly, this is who Justworks fits best.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform is built for teams without an internal HR or legal department. If you run a company with
        one to fifty employees and are spending hours each pay period on compliance, Justworks is meant to
        return that time to you. It is especially strong for businesses with workers in multiple states, remote
        employees, or seasonal and gig-based staffing models, the kind of setups that make manual compliance a
        minefield. If your business is growing and you want to add team members in new locations without
        learning each state’s tax and labor rules from scratch, Justworks is built for your needs.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the other hand, Justworks is not the right fit for every business. If you only hire in one state,
        have a single payroll schedule, and already have a full HR or finance team handling compliance, the
        overhead of a PEO may not be justified. Some businesses want to keep all HR, payroll, and tax filings
        in-house for control or cost reasons. Justworks is not a substitute for a full-service HR consultancy or
        a legal advisor for complex, one-off employment law questions. It is a compliance engine and
        operational partner, not a law firm.</p>
      <p className="text-base text-white shadow-text pt-3">
        Pricing is also a factor. Justworks charges $124 per employee per month for its PEO Plus plan. For very
        small teams or those with tight budgets, this is a real investment. But for teams that have lost hours
        to compliance tasks or faced penalties for errors, the cost is often offset by time saved and risk
        avoided. The platform includes payroll for all employees, multi-state payroll, contractor payments,
        off-cycle payments, tax filings, and compliance alerts at that price point. If your business model
        depends on running payroll for both employees and contractors, filing in multiple states, or offering
        competitive benefits to attract talent, the bundled approach may deliver more value than a basic payroll
        tool.</p>
      <p className="text-base text-white shadow-text pt-3">
        What about teams that are not sure if they need a PEO or just a payroll app? The decision comes down to
        the complexity of your workforce and your appetite for risk. If you are worried about misclassifying a
        worker, missing a state filing, or keeping up with changes in local labor law, Justworks provides a
        clear structure and direct support. If you are confident in your processes and want to keep costs
        minimal, a simpler payroll service may be enough, but you will carry the risk yourself.</p>
      <p className="text-base text-white shadow-text pt-3">
        For South Florida businesses in hospitality, construction, local services, or real estate, where the
        workforce changes with the season and compliance rules shift as workers cross county lines, Justworks
        closes the gap between what the law requires and what a small team can realistically manage. It is not a
        one-size-fits-all solution, but it is a fit for teams who want to put compliance on autopilot and focus
        on running their business.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next step for any business considering Justworks is to map your current payroll and worker
        classification setup against the platform’s capabilities. Look at where you are spending the most time,
        where errors or risks have surfaced, and what you want to offload. If your business is at the stage
        where manual compliance is holding you back, or if you have already faced a penalty or audit, Justworks
        is structured to take those problems off your list. If your setup is simple and your risk tolerance is
        high, it is worth weighing whether a lighter payroll tool could serve you just as well.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every business is different, but the dividing line is clear: Justworks is for owners and managers who
        want to stop worrying about payroll tax and worker classification risk, and who see value in a platform
        that takes on the complexity for them. If that is your situation, it is worth a closer look at how
        Justworks would work in your environment, including the upfront data mapping and configuration choices
        described earlier on this page.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<Link href="#consultationAppointment2xl" id={`tools-accounting-payroll-tax-worker-misclassification-justworks-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</Link>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>How do you currently determine whether a new team member should be onboarded as a W-2 employee or a 1099 independent contractor?</li>
        <li>Do you have 1099 contractors who use your company equipment, have set schedules, or perform the exact same core services as your W-2 staff?</li>
        <li>How are you managing, collecting, and verifying Form W-9s and tracking annual thresholds for your independent contractors?</li>
        <li>Are you currently employing any remote workers, out-of-state contractors, or staff who split time between different states?</li>
        <li>How much time does your team spend calculating, withholding, and filing quarterly federal (941) and Florida Reemployment taxes (RT-6)?</li>
        <li>Have you ever had to pay an IRS or state penalty due to a delayed payroll tax deposit or a clerical filing error?</li>
        <li>When you onboard a new worker, how does their payroll and tax documentation sync up with your core accounting or&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;system?</li>
        <li>How does your current system track and adjust for changing local, state, and federal labor laws or payroll tax caps?</li>
        <li>If the state or the IRS audited your contractor workforce tomorrow, how long would it take you to produce signed agreements, W-9s, and clear payment trails for every single worker?</li>
        <li>What is your current monthly or annual budget for payroll processing and&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>&nbsp;legal advice?</li>
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
              <h2 id="who-justworks-is-for-who-it-is-not-and-what-to-do-next" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Justworks Is For, Who It Is Not, and What to Do Next
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
              <h2 id="who-justworks-is-for-who-it-is-not-and-what-to-do-next-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Justworks Is For, Who It Is Not, and What to Do Next
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
