import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rippling’s configuration for payroll tax and worker misclassification is about setting up live rules
        that work with your actual team, not just filling out a checklist. Geek @ Your Spot handles the
        technical setup so that every compliance rule, worker classification decision, and tax calculation runs
        automatically and correctly for South Florida’s small business reality. This is not a static
        setup—Rippling’s system is built to update as your workforce shifts, your team grows, or the law
        changes. The result is a platform that doesn’t just track compliance but enforces it in real time, with
        every payroll run and every new hire.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is building out Rippling’s compliance logic. This means configuring the Worker
        Classification Analyzer, which checks each person’s role, location, and work pattern against state and
        federal rules. For South Florida, where a single worker might cross county lines or switch between
        contractor and employee status, Rippling’s built-in 90-second classification quiz is essential. It’s not
        a generic tool: it uses up-to-date legal tests (like the IRS behavioral, financial, and
        type-of-relationship standards) to decide whether someone is a W-2 employee or a 1099 contractor. Every
        answer feeds directly into how payroll, taxes, and compliance are handled for that individual. Geek @
        Your Spot makes sure this logic is correctly mapped to your business’s real-world structure—so the
        system doesn’t just run, but runs in a way that actually protects you.</p>
      <p className="text-md text-white shadow-text pt-3">
        Payroll tax automation in Rippling is configured to handle the full range of federal, state, and local
        requirements. For a business with workers in Miami-Dade, Broward, and Palm Beach, that means setting up
        the system to automatically register for, calculate, and file the right taxes for each location.
        Rippling’s automation covers FICA, FUTA, and state unemployment, which Florida calls reemployment tax,
        removing the
        guesswork and manual spreadsheet tracking that so often leads to missed filings or penalties. When an
        employee moves or a new contractor is onboarded, Rippling updates tax accounts and withholdings
        automatically—no manual intervention, no risk of the wrong rate being applied. This is a major step up
        from legacy payroll tools that require you to spot and enter every change yourself.</p>
      <p className="text-md text-white shadow-text pt-3">
        The Compliance 360 Management module is where Rippling’s automation goes beyond alerts. This module is
        configured to run continuous checks for compliance risks—flagging potential misclassification, overtime
        violations, or missed tax deadlines as soon as they occur. Instead of waiting for an annual audit or a
        quarterly review, business owners and office managers get real-time notifications and clear guidance on
        what needs to be fixed. Geek @ Your Spot ensures these alerts are set up to match your actual workflow,
        so the right person gets notified, and the fix can be made directly in Rippling without jumping between
        systems or relying on outside consultants.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rippling’s automation logic also extends to contractor management. The platform is configured to
        automate the onboarding of contractors, generate legally vetted contracts tailored to the worker’s
        location and status, and centralize invoice approvals and payments. This means invoices from contractors
        are submitted, reviewed, and paid out through a single dashboard—no paper trails, no lost emails, and no
        confusion about which payments go with which worker or project. Each invoice approval is tied to the
        compliance logic set up at the start, so you can prove, at any time, that every contractor was handled
        according to the rules.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses that want to connect Rippling to other systems—like QuickBooks, Xero, or
        NetSuite—Rippling offers over 650 pre-built integrations. These are not just data exports; they allow
        for real-time, two-way syncing so payroll, HR, and accounting data stay up to date everywhere. There is
        no open&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;or developer SDK for building custom
        modules, but the Workflow Studio gives Geek @ Your Spot the ability to automate nearly any process
        within Rippling’s environment. This includes custom approval chains, automated evidence collection for
        audits, and one-click remediation for compliance issues. The result is a system that adapts to your
        business’s way of working, not the other way around.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real work Geek @ Your Spot does during implementation is mapping your business’s policies and
        exceptions into Rippling’s automation engine. This might mean defining which managers approve contractor
        invoices, setting up rules for when overtime triggers automatic alerts, or customizing onboarding flows
        for different types of workers. Each logic block is tested against real scenarios—like a contractor
        moving from Broward to Palm Beach, or a new hire who splits time between sites—to ensure nothing slips
        through the cracks. This is not a one-time setup: as your business changes, Geek @ Your Spot can update
        these rules, so Rippling’s automation always matches your current reality.</p>
      <p className="text-md text-white shadow-text pt-3">
        In practice, this means a Friday afternoon in the Miami construction firm from the opening: a new worker
        is onboarded, and within minutes, Rippling’s classification quiz determines status, generates a
        contract, and sets the right payroll tax rules. When the project shifts to a new state, tax accounts
        and compliance checks update automatically. If a contractor’s invoice comes in late, the approval and
        payment process is triggered with a click—no one has to chase paperwork or check compliance by hand.
        Rippling’s automation, when configured by Geek @ Your Spot, is not just a timesaver but a shield against
        the kind of errors that lead to audits and penalties in South Florida’s complex landscape.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="configuring-rippling-for-real-world-payroll-tax-and-worker-classification-rules-automation-and-extensibility" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring Rippling for Real-World Payroll Tax and Worker Classification: Rules, Automation, and Extensibility
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
              <h2 id="configuring-rippling-for-real-world-payroll-tax-and-worker-classification-rules-automation-and-extensibility" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring Rippling for Real-World Payroll Tax and Worker Classification: Rules, Automation, and Extensibility
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
