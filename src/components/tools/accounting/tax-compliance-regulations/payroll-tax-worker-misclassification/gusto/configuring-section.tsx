import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Gusto’s configuration is about setting up precise rules for how payroll, tax, and worker classification
        are handled in a small business that mixes W-2 employees and 1099 contractors. The platform is designed
        for owners who do not have a full HR or legal department. It lets you automate compliance with federal,
        state, and local tax laws, so you do not have to track every change or remember every deadline yourself.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core of Gusto’s automation is its built-in logic for classifying workers, calculating payroll taxes,
        and generating required forms. You start by entering each worker’s details: whether they are a W-2
        employee or a 1099 contractor, their location, pay type, and schedule. Gusto walks you through
        collecting the right tax forms: W-4s for employees, W-9s for contractors. It then uses this information
        to set up payroll runs that keep employee and contractor payments strictly separate, which is the first
        guardrail against misclassification risk.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s configuration covers:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Worker type assignment: You select W-2 or 1099 for each person. Gusto’s workflows ensure you can’t pay a contractor as an employee or vice versa by mistake.</li>
        <li>Automated tax calculations: Gusto pulls the latest federal, state, and local tax tables. It calculates Social Security, Medicare, and unemployment taxes for employees, and flags when a contractor crosses the annual 1099-NEC filing threshold.</li>
        <li>Form generation and filing: Gusto issues and files W-2s and 1099s electronically, sending copies to workers and the IRS. It handles the full filing process for both types, including state-level reporting where required.</li>
        <li>Multi-state logic: For businesses with workers who cross state lines, Gusto tracks each work location and applies the correct state tax rates automatically.</li>
        <li>Error checks: Before each payroll run, Gusto checks for missing tax IDs, incomplete forms, and out-of-date worker information. It flags these issues so you can fix them before they turn into penalties.</li>
        <li>Automated updates: When tax laws change (like new wage bases or IRS thresholds), Gusto updates its calculations without you having to do anything.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        There is no scripting or open&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;for custom payroll
        logic. Gusto is a configuration-driven platform: you set your rules by filling out forms and toggling
        options, not by writing code. This is by design. The goal is to remove the risk of manual setup errors
        and keep the process accessible to non-technical users. If your business has unique needs, such as
        multiple pay rates or schedules, Gusto supports these through its interface, not through custom
        programming.</p>
      <p className="text-base text-white shadow-text pt-3">
        Extensions are handled through integrations, not direct code. Gusto connects natively to QuickBooks and
        Xero, so payroll data syncs to your accounting system without manual exports. For R&amp;D tax credits,
        the Ardius integration automates the required studies and filings. These integrations are
        point-and-click: you connect accounts, map your data, and Gusto manages the sync. There is no SDK or
        scripting language for building custom extensions; you work within the platform’s supported
        integrations.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot LLC’s role is to get these configurations right for South Florida’s complex environment.
        This means mapping your real workforce (seasonal, cross-county, and hybrid roles) into Gusto’s logic so every
        worker is classified and paid correctly from day one. They audit your existing records, set up the right
        tax accounts, configure pay schedules, and test the system with real data before you go live. They also
        ensure your QuickBooks or Xero setup is mapped to Gusto’s payroll categories, so your accountant gets
        clean, ready-to-file data with every pay run.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you try to DIY, the biggest risk is missing a configuration detail, like entering the wrong Florida
        reemployment tax rate or setting a contractor’s pay schedule to match employees, because the platform
        will automate
        whatever you tell it to, right or wrong. Geek @ Your Spot LLC’s implementation closes those gaps by walking
        through every edge case: out-of-state workers, job code mapping, tip credits for restaurants, and
        multi-location reporting. They know where South Florida payrolls get tripped up and set Gusto to catch
        those mistakes before the IRS or the Florida Department of Revenue does.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, Gusto’s configuration is not about custom code or DIY logic. It’s about setting the right
        rules in a platform that knows the difference between W-2 and 1099 from the ground up, and automating
        every deadline, filing, and payment so you do not have to. Geek @ Your Spot LLC brings the local know-how to
        make sure those rules match your real-world team, so you get the benefit of automation without the risk
        of a misstep.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="configuring-gusto-s-payroll-tax-and-worker-classification-logic-for-local-compliance" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring Gusto’s Payroll Tax and Worker Classification Logic for Local Compliance
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
              <h2 id="configuring-gusto-s-payroll-tax-and-worker-classification-logic-for-local-compliance-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring Gusto’s Payroll Tax and Worker Classification Logic for Local Compliance
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
