export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Getting Justworks up and running in a small business environment is not a drawn-out IT project. You do
        not need a custom integration team or a year of process mapping. The platform is built for small
        teams—especially those in South Florida with a mix of W-2 employees and 1099 contractors—who need to
        move quickly from spreadsheets and manual payroll to a system that locks down compliance from day one.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process starts with a focused setup session. You bring your current payroll lists, worker
        classifications, and state registrations. Justworks comes with pre-built templates for onboarding both
        employees and contractors, so you do not have to design workflows from scratch. For most small teams,
        the first step is importing your people data—names, roles, pay rates, and tax details—into the Justworks
        platform. This is not a manual entry job. Justworks supports bulk uploads and has direct integrations
        for accounting software like QuickBooks, Xero, NetSuite, and Sage Intacct, so you can pull in your
        existing records without re-keying every line.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the roster is loaded, the next step is mapping each worker to the correct classification for
        payroll and tax purposes. This is where Justworks’ operational guidance matters. The system walks you
        through the key decisions—W-2 employee or 1099 contractor, state of residence, work location, and any
        special pay arrangements like tips or commissions. For businesses that have struggled to keep track of
        who is eligible for overtime or which workers trigger state tax registration, this step alone can save
        hours of back-and-forth. The platform’s built-in compliance checks flag missing details and prompt you
        to fix them before you run your first payroll.</p>
      <p className="text-md text-white shadow-text pt-3">
        Payroll setup comes next. Justworks provides a guided workflow for setting up pay schedules, pay rates,
        and deductions. If you pay hourly, salaried, or a mix, the platform supports all structures. You can
        define custom payroll periods, set up off-cycle or bonus payments, and assign multiple pay rates where
        needed. The system also automates direct deposit setup and digital pay stub delivery, so you do not have
        to manage paper checks or separate email notifications.</p>
      <p className="text-md text-white shadow-text pt-3">
        State and local tax registrations are often the slowest part of launching a new payroll
        system—especially if you have workers in multiple states or counties. Justworks shortens this step with
        built-in tools for state tax registration, and it can automate the closing of registrations in states
        where you no longer have employees. For businesses hiring in new states, the platform guides you through
        the required registrations, filings, and local compliance rules. This is a major time-saver for South
        Florida businesses that may have workers crossing county or state lines for gigs or projects.</p>
      <p className="text-md text-white shadow-text pt-3">
        The last step before going live is a test payroll run. Justworks offers a sandbox environment where you
        can preview payroll calculations, tax withholdings, and benefit deductions before anything is finalized.
        This lets you catch misclassifications or missing data without risking a real payroll error. The
        system’s automated compliance alerts flag anything that would cause a problem with IRS or state filings,
        so you can fix it before you run your first live payroll.</p>
      <p className="text-md text-white shadow-text pt-3">
        What actually speeds up go-live with Justworks is the combination of templated onboarding, bulk data
        upload, and proactive compliance checks. There is no need to build custom scripts or manual checklists.
        The platform’s integrations with accounting and time tracking systems mean you can keep your existing
        workflows for expense management and hours tracking, pulling that data straight into payroll without
        duplicate entry. For teams that have struggled with manual spreadsheets and last-minute tax filings,
        this is a clear shift: the setup is a matter of days, not months.</p>
      <p className="text-md text-white shadow-text pt-3">
        The order is simple: import your data, map your people, configure payroll and compliance, run a test,
        and go live. Each step is supported by Justworks’ own documentation and, when needed, direct support
        from their team. For South Florida small businesses who cannot afford a long transition or a missed
        payroll, this structure means you can move from risk-prone manual processes to a compliant, automated
        system in a single payroll cycle. The platform does not require you to rip out your existing accounting
        or HR tools—integration is built-in, so you can layer Justworks on top of what already works for you.</p>
      <p className="text-md text-white shadow-text pt-3">
        In short, going live with Justworks is about speed, accuracy, and reducing the risk of payroll and
        classification mistakes. You get a step-by-step rollout that is both guided and flexible, with the key
        accelerators being pre-built templates, bulk imports, and compliance automation. For a South Florida
        team juggling seasonal hires and shifting contractor rosters, this is what makes the difference between
        another quarter of manual risk and a payroll process that you can trust every Friday afternoon.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-get-justworks-live-in-your-existing-setup-and-what-actually-speeds-it-up" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Get Justworks Live in Your Existing Setup—And What Actually Speeds It Up
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
              <h2 id="what-it-takes-to-get-justworks-live-in-your-existing-setup-and-what-actually-speeds-it-up" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Get Justworks Live in Your Existing Setup—And What Actually Speeds It Up
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
