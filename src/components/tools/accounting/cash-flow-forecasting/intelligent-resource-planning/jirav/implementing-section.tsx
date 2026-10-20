
export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Going live with Jirav in a small business environment is not a multi-month slog or a risky all-at-once
        leap. The process is shaped by how Jirav handles integrations, the order of setup, and what Geek @ Your Spot LLC does to close the gaps between your current stack and the new platform. For a South Florida
        business running QuickBooks, spreadsheets, and payroll software, the difference is felt in weeks, not
        quarters.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first thing that shortens the path to go-live is Jirav’s library of pre-built connectors. Jirav
        integrates with over 200 accounting, payroll,
        and&nbsp;CRM&nbsp;systems out of the box. This means most
        businesses do not need to build custom data bridges or wait for a developer to map fields. QuickBooks,
        NetSuite, Sage Intacct, ADP, Paychex, Salesforce, and Hubspot are all covered. For a team that has
        struggled to keep desktop accounting files and cloud sales data in sync, this alone cuts out hours of
        manual export and import work.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next accelerator is Jirav’s templated setup for core financial models. Instead of building a new
        model from the ground up, Jirav provides industry-ready frameworks
        for&nbsp;cash flow forecasting, workforce
        planning, and scenario modeling. These templates are not rigid forms, they are starting points that Geek @ Your Spot LLC tunes to your business. For example, a company with seasonal cash swings can use a
        ready-made cash flow model and adjust the drivers for their real peaks and valleys. This avoids the
        spreadsheet sprawl and formula errors that come from copying last year’s files or patching together old
        templates.</p>
      <p className="text-md text-white shadow-text pt-3">
        Going live is phased, not a big-bang switch. Geek @ Your Spot LLC first connects your core accounting and
        payroll systems to Jirav. This gets the basics, historical transactions, open receivables, and payroll
        data, flowing into the platform. Next, operational drivers (like sales pipeline or headcount plans) are
        mapped in, so you see a real, working forecast in the dashboard. Only after the core numbers reconcile
        does the team layer on scenario planning, department-level access, or custom dashboards. This staged
        approach means you get value from live forecasts and error reduction early, while more advanced features
        roll in as your team is ready.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout setup, Jirav’s live data sync keeps the numbers current. There is no waiting for a month-end
        close or manual uploads. A sales invoice logged in
        your&nbsp;CRM&nbsp;updates cash flow projections in real time.
        Payroll changes, like a new hire or bonus, show up in workforce planning automatically. This is a break
        from the end-of-month scramble to update spreadsheets and chase down missing entries. It also means you
        can spot cash shortfalls or hiring needs before they become emergencies.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC’s role is to make this transition fit your real environment. That means mapping your
        existing chart of accounts to Jirav’s model, setting up user permissions so department heads see only
        what they need, and training your team on how to use dashboards without falling back on old habits.
        Where your current data is messy, multiple versions of spreadsheets, old payroll exports, or
        inconsistent naming, Geek @ Your Spot LLC handles the clean-up and mapping. This avoids the trap of
        importing bad data or freezing the rollout while waiting for perfect records.</p>
      <p className="text-md text-white shadow-text pt-3">
        A typical go-live runs like this: initial discovery of your current systems and data, connection of
        accounting and payroll platforms using Jirav’s pre-built connectors, mapping and import of historical
        data, setup of core models using Jirav templates, phased rollout of dashboards and departmental access,
        and hands-on training. For a team used to spending days each month just to get the numbers to line up,
        the change is immediate. Instead of patching together a forecast on Friday afternoon, you see live
        numbers and can plan the next week with confidence.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-shortens-jirav-go-live-steps-accelerators-and-what-to-expect-in-your-environment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Shortens Jirav Go-Live: Steps, Accelerators, and What to Expect in Your Environment
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
              <h2 id="what-shortens-jirav-go-live-steps-accelerators-and-what-to-expect-in-your-environment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Shortens Jirav Go-Live: Steps, Accelerators, and What to Expect in Your Environment
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
