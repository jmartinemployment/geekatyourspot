export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Going live with Gusto in a South Florida small business environment is not just about switching on a new
        payroll system. It is about replacing a patchwork of spreadsheets, manual data entry, and error-prone
        compliance checks with a platform that runs payroll, tracks worker types, and handles tax filings
        without constant human oversight. What shortens the time from first login to a stable, compliant payroll
        cycle is Gusto’s combination of pre-built connectors, templated setup flows, and the ability to phase in
        features as a business is ready.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is getting the right data out of your current systems. Most owners in Miami-Dade,
        Broward, and Palm Beach start with QuickBooks or Xero, and Gusto’s direct integrations with these
        platforms mean you do not have to export, clean, and re-import payroll data by hand. This cuts days off
        the process compared to tools that require manual mapping or CSV uploads. Gusto’s integrations are not
        just for payroll runs. They sync worker classifications, pay rates, and tax IDs, so you can spot
        misclassified contractors or missing Social Security numbers before the first pay run.</p>
      <p className="text-md text-white shadow-text pt-3">
        From there, Gusto’s setup flow guides you through a checklist that is tailored to your business size and
        state. For a 15-person HVAC company, this means you do not have to wade through features built for
        500-employee operations. The system asks for only what is needed: business tax IDs, a list of employees
        and contractors, their work locations (critical when someone works in another state), and their
        payment details. The platform’s templates for Florida payroll laws, such as minimum wage, overtime, and
        reemployment tax, are already built in, so you are not left searching for the latest state forms or tax rates.</p>
      <p className="text-md text-white shadow-text pt-3">
        The order of operations matters. Gusto’s onboarding starts with worker classification. Before you run a
        single payroll, you must tag each person as a W-2 employee or a 1099 contractor. The platform blocks you
        from running payroll if this step is incomplete, which is a guardrail against the most common audit
        trigger in South Florida: treating regular, full-time workers as contractors. The system’s checks
        against IRS and state requirements are built into the workflow, not left as a warning buried in
        documentation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the roster is set, Gusto’s phased rollout lets you start with core payroll and add features like
        benefits, time tracking, or compliance reporting as you go. This is not all-or-nothing. A business can
        go live with payroll and tax filings in week one, then layer on automated new-hire state reporting,
        overtime tracking, or ACA compliance as the team grows. This phased approach avoids the “big bang” risk
        of launching everything at once and missing a key deadline or rule.</p>
      <p className="text-md text-white shadow-text pt-3">
        What actually shortens go-live is not just the technology, but the way Gusto’s platform removes manual
        steps at each stage. For example, the owner of that HVAC company does not need to figure out which local
        agency to send payroll taxes to. Gusto files with the right federal, state, and local authorities each
        pay run, using the data provided in setup. If a worker’s status or pay rate changes, the system prompts
        for an update and handles the downstream tax impact automatically.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC’s role is to close the last mile: mapping your existing data, reviewing the
        classification and tax setup, and training your team on what to expect in the first payroll cycle. For
        teams used to patchwork systems, the biggest gain is the removal of the “unknowns.” There is no more guessing if a
        new hire has been reported to the state, or if the reemployment tax rate has changed. The platform’s
        compliance guardrails and automation mean you spend less time in the weeds and more time running your
        business.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, a clean go-live with Gusto is about more than importing a list of workers. It is a sequence:
        connect your accounting tools, classify every worker up front, validate tax IDs and locations, and let
        the platform’s built-in rules handle the rest. Each step is designed to catch the errors that lead to
        tax penalties or audits before they happen. With Geek @ Your Spot LLC guiding the setup, the odds of a
        missed classification or a late tax filing drop to near zero, and that is what separates a quick, quiet
        launch from the kind of payroll chaos that can stall a business in South Florida’s tight markets.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-shortens-the-path-to-a-clean-go-live-with-gusto" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Shortens the Path to a Clean Go-Live with Gusto
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-shortens-the-path-to-a-clean-go-live-with-gusto-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Shortens the Path to a Clean Go-Live with Gusto
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
