import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Jirav is not a black box that spits out generic forecasts. It is a rules-driven platform built for small
        business teams who need to automate what used to be hours of manual work in Excel, QuickBooks, and
        emails. What gets configured in Jirav is what makes it fit your business: the drivers, the logic, and
        the rules that turn raw data into cash flow forecasts, workforce plans, and actionable dashboards. Geek @ Your Spot LLC handles this configuration so your team does not have to learn the mechanics behind the
        dashboard, just use the live results.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first layer is driver-based budgeting. Jirav lets you define the operational drivers that actually
        move your business, like sales volume, headcount, or unit costs, instead of just copying last year’s
        numbers. These drivers are not hardcoded. Geek @ Your Spot LLC works with you to set up the rules: what
        triggers a new hire, how a change in sales pipeline affects cash flow, or what happens when overhead
        costs shift. This means your forecast is not just a static projection, but a living model that updates
        as the real numbers come in.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation logic in Jirav covers every step that used to be manual. For example, when a sale closes in
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, Jirav can pull that data and update revenue
        forecasts automatically. When payroll runs, those figures roll into expense projections and cash flow
        models without anyone re-entering the data. Jirav’s Auto Forecast engine uses past performance to
        predict future trends, updating projections as new actuals arrive. This is not a one-size-fits-all
        algorithm; Geek @ Your Spot LLC tunes the logic to your business’s seasonality, sales cycles, and cost
        structure so the forecast reflects what actually happens in your world, not a generic template.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rules for access, collaboration, and version control are also set up in Jirav. You decide who can view,
        edit, or comment on budgets and forecasts. Department heads can enter their own assumptions, while
        leadership sees the consolidated plan. No more chasing down the latest spreadsheet version, Jirav keeps
        everyone on the same page, and Geek @ Your Spot LLC configures these permissions so your team’s workflow is
        smooth and secure.</p>
      <p className="text-md text-white shadow-text pt-3">
        Jirav’s extension mechanism is not a developer toolkit or
        open&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;for custom scripting; it is a config-driven
        system. The platform integrates natively with over 200 accounting,
        payroll,&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, and reporting systems, including QuickBooks,
        NetSuite, Sage Intacct, ADP, Paychex, Salesforce, and HubSpot. This means Geek @ Your Spot LLC connects your
        existing tools directly to Jirav, there is no need for custom coding or middleware. Data flows
        automatically, and the platform’s mapping layer handles the translation between systems. If your process
        changes, Geek @ Your Spot LLC updates the configuration so your reports and forecasts stay accurate.</p>
      <p className="text-md text-white shadow-text pt-3">
        The automation logic extends to rolling forecasts and scenario planning. Jirav lets you set up rules for
        what-if analysis: what happens if a key client reduces spend, if you hire two more staff, or if costs
        spike during hurricane season. These scenarios are not built from scratch each time. Geek @ Your Spot LLC
        configures reusable templates in Jirav, so your team can run new scenarios in minutes, not days. This is
        how you move from reactive reporting to proactive planning, without needing an in-house data team.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, Jirav’s reporting and dashboard logic is tied directly to the same data model as your forecasts
        and budgets. There is no manual export or formatting step. Geek @ Your Spot LLC sets up dashboards that pull
        live data from your configured drivers, rules, and integrations. This means the numbers your team sees
        are always up to date, and you avoid the version-control chaos that comes from emailing spreadsheets
        around. If your reporting needs change, the configuration is updated, no rebuild required.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, what gets configured in Jirav is not just a set of fields or a menu of options. It is the
        logic that connects your real-world business drivers to your forecasts, the automation that keeps data
        flowing without manual entry, and the rules that make collaboration possible without chaos. Geek @ Your Spot LLC handles the setup, tuning, and ongoing adjustment, so your team can focus on decisions, not data
        wrangling.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-jirav-s-rules-automation-logic-and-configuration-work-in-practice" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Jirav’s Rules, Automation Logic, and Configuration Work in Practice
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
              <h2 id="how-jirav-s-rules-automation-logic-and-configuration-work-in-practice" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Jirav’s Rules, Automation Logic, and Configuration Work in Practice
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
