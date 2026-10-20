import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Configuring Justworks starts with setting the payroll and worker classification rules that drive
        automation for small businesses managing both W-2 employees and 1099 contractors. The platform does not
        ask you to build custom scripts or code. Instead, it relies on built-in logic, clear settings, and
        guided workflows that map to real regulatory requirements and business rules. What you configure are the
        core compliance guardrails: who is paid, how they are classified, and which tax rules apply in each
        jurisdiction. This section walks through what actually gets set up, what is locked down by the platform,
        and what Geek @ Your Spot LLC does to tune it for South Florida’s complex, fluid workforce.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first configuration step in Justworks is defining your worker roster: who is an employee, who is a
        contractor, and where each person works. The platform’s onboarding workflow prompts you to enter or
        import names, addresses, Social Security numbers, and employment status. For each person, you select
        whether they are a W-2 employee or a 1099 contractor. This classification is not just a label; it drives
        which taxes are withheld, which filings are triggered, and whether benefits are assigned. Justworks
        follows IRS and state-level tests for worker status, and the system will flag mismatches or missing data
        that could put you at risk of a misclassification audit.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once your roster is set, Justworks walks you through configuring payroll schedules, pay rates, and tax
        jurisdictions. You choose pay periods (weekly, bi-weekly, monthly), assign pay rates (hourly, salary,
        commission, or tips), and map each worker to their work location. For South Florida businesses with
        staff crossing state lines, this step is critical: Justworks requires you to specify the
        physical work location for each pay period, so the correct local, state, and federal tax rules apply.
        The system then automatically calculates all required withholdings, such as federal income tax, Social
        Security, and Medicare, based on the latest published rates. There is no need to manually
        update tax tables; Justworks handles this in the background and pushes compliance alerts when laws
        change.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation logic in Justworks covers more than just paychecks. The platform handles state tax
        registration when you hire in a new jurisdiction, closes out tax accounts when you no longer have
        employees in a state, and manages the paperwork for unemployment insurance and workers’ comp. These
        workflows are not open-ended; they are structured in a way that prevents accidental omissions. For
        example, you cannot run payroll for a new state until the system confirms all registrations are in
        place. If a worker’s status or location changes, Justworks prompts you to review and approve any
        resulting tax or filing changes before payroll runs.</p>
      <p className="text-md text-white shadow-text pt-3">
        For overtime and wage-hour rules, Justworks provides automatic calculations based on state and federal
        law. You set up your overtime policy in the platform’s settings (daily, weekly, or both), and the system
        applies the right multipliers to each pay period. Overtime, double time, and special pay types (such as
        tips or commissions) are all handled in the same workflow, reducing the risk of underpayment or
        non-compliance. The platform also includes basic timekeeping tools and can accept data from third-party
        time tracking systems, as long as the format matches what Justworks expects.</p>
      <p className="text-md text-white shadow-text pt-3">
        If your business uses accounting software like QuickBooks, Xero, NetSuite, or Sage Intacct, Justworks
        offers built-in integrations. These are not open APIs in the sense of custom development, but rather
        direct connectors that sync payroll data, tax filings, and expense reports automatically. This reduces
        manual data entry and ensures that your books match your payroll records, which is critical for audit defense and
        monthly closes. Geek @ Your Spot LLC configures these integrations as part of the deployment, mapping your
        chart of accounts and ensuring each payroll transaction lands in the right place.</p>
      <p className="text-md text-white shadow-text pt-3">
        Justworks does not provide a scripting engine or
        developer&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;for custom automation. All automation is
        driven by the platform’s own logic and configuration settings. This is by design: the goal is to reduce
        the risk of human error or accidental non-compliance by limiting what can be changed outside of the
        guided workflows. For South Florida businesses, this means you get a system that locks in compliance
        guardrails, not a toolkit that can be broken by a missed update or a misapplied rule. Geek @ Your Spot LLC’s
        role is to ensure all your data, worker classifications, payroll schedules, and integrations are set up
        correctly from the start, and to train your team on how to manage changes through the platform’s own
        controls.</p>
      <p className="text-md text-white shadow-text pt-3">
        The final layer of configuration is compliance monitoring and alerts. Justworks monitors federal, state,
        and local employment law changes, and pushes alerts to your dashboard when action is required. If a new
        tax rule, minimum wage, or overtime regulation comes into effect, the system notifies you and walks you
        through any required updates. Geek @ Your Spot LLC reviews these alerts with your team during regular
        check-ins, making sure nothing is missed and that your payroll and classification logic stays current as
        your business evolves.</p>
      <p className="text-md text-white shadow-text pt-3">
        The result is a compliance-first payroll and HR platform where configuration is about setting up the
        right rules and mapping your people, not building custom automation. For small businesses in South
        Florida, this means less risk of missed filings, misclassified workers, or tax surprises. Geek @ Your Spot LLC brings the local knowledge and technical experience to make sure Justworks fits your specific
        workforce, integrates with your accounting, and scales as your team changes, without requiring you to
        become a payroll or compliance expert yourself.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-justworks-rules-automation-and-how-it-fits-your-environment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Justworks: Rules, Automation, and How It Fits Your Environment
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-justworks-rules-automation-and-how-it-fits-your-environment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Justworks: Rules, Automation, and How It Fits Your Environment
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
