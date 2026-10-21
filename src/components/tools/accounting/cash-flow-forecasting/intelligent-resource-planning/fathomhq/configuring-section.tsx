import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Fathom is built for configuration, not code. The platform’s strength is in letting small business teams
        set up the rules and workflows that match how they actually run, without needing a developer or a custom
        script. Geek @ Your Spot LLC’s job is to translate your spreadsheet chaos and ad-hoc reporting into Fathom’s
        automation logic, so the system pulls the right numbers, applies the right rules, and shows the right
        story on every dashboard.</p>
      <p className="text-base text-white shadow-text pt-3">
        Fathom’s core configuration centers on three
        areas:&nbsp;KPI&nbsp;tracking, multi-entity consolidation, and
        scenario-based forecasting. Each of these is built for direct setup in the platform’s own interface.
        There is no open&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;or scripting layer for custom
        extensions; instead, Fathom relies on its own deep configuration tools and native integrations to cover
        most business needs. This means the real work is in mapping your business’s actual data and logic into
        the platform’s model, not in writing code.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>KPI&nbsp;Tracking: Fathom lets you build out a full set of financial and non-financial KPIs. You can use over 50 default metrics or define custom ones with its formula builder. The configuration is not just a pick-list: you set thresholds, assign importance (from &quot;low&quot; to &quot;critical&quot;), and define alerts when a&nbsp;KPI&nbsp;moves outside a set range. For small businesses that have always tracked sales, margin, or headcount in separate places, Geek @ Your Spot LLC works with you to define these KPIs in one place and set up the logic that drives real alerts and trend analysis.</li>
        <li>Multi-Entity Consolidation: Fathom supports consolidating up to 300 entities in a single-currency group or 50 in a multi-currency setup. Each entity can have its own year-end, and the platform handles intercompany eliminations directly in the interface, no spreadsheet patchwork needed. Configuration here means mapping each entity’s accounts and policies, then setting up rules for eliminations (like management fees or intercompany loans). Geek @ Your Spot LLC helps you sort out which entities should roll up together, how to handle eliminations, and how to present the consolidated result so it matches what your board or bank expects.</li>
        <li>Scenario-Based Forecasting: Fathom’s three-way forecasting links P&amp;L, balance sheet, and cash flow in one model. You configure scenarios (good, medium, bad), set drivers (like sales growth or cost increases), and use the Goal Seek tool to model what it would take to hit a specific outcome. The platform’s scenario tools are all point-and-click, no scripting or formula hacking required. Geek @ Your Spot LLC’s role is to help you translate your real business questions (&quot;What happens if payroll jumps by 10%?&quot; or &quot;Can we afford a new hire in Q3?&quot;) into the right scenario logic, so your forecasts answer the questions that matter.</li>
        <li>Automated Reporting Logic: Fathom’s reporting engine uses templates for monthly management packs, board-ready outputs, and custom dashboards. You can design layouts, group KPIs, and add narrative commentary. The automation comes from scheduling reports for delivery, setting up recurring packs, and using commentary tools to add context. Geek @ Your Spot LLC configures these templates so every report lands with the right level of detail, tailored to each audience, owners, managers, or lenders.</li>
        <li>Data Sync and Mapping: Fathom natively integrates with Xero, QuickBooks (Online and Desktop), MYOB, Sage 50, Excel, and Google Sheets. The setup involves connecting the right accounts, mapping chart of accounts fields, and configuring daily or on-demand syncs. Geek @ Your Spot LLC handles the initial mapping (which fields to pull, which to ignore, how to handle non-financial data), then tests the sync to make sure the dashboards update as expected.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        There is no scripting or SDK layer in Fathom. All automation is configured through its own interface,
        formula builders, mapping tools, and rule-based logic. This is a strength for small teams: less risk of
        breakage, no hidden code, and a setup that is as transparent as the reports it produces.</p>
      <p className="text-base text-white shadow-text pt-3">
        Where most DIY setups fall short is not in the interface, but in the translation from messy, real-world
        data to clean, actionable dashboards. Geek @ Your Spot LLC’s expertise is in making Fathom fit your business
        as it is, not as a textbook case. That means working through edge cases (like a retail group with two
        fiscal calendars, or a service firm with both cash and accrual reporting), handling data clean-up, and
        building reporting flows that match how your managers actually use information. The platform gives you
        the tools; the configuration is what makes them work for you.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business in South Florida, this means you do not need to hire a developer or IT consultant
        to get started. What you do need is a partner who understands both your business and Fathom’s logic,
        someone who can sit with your team, map your current workflows, and turn them into a set of rules,
        alerts, and dashboards that actually drive decisions. That is where Geek @ Your Spot LLC closes the gap
        between what the tool can do and what your business needs it to do.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="configuring-fathom-rules-automation-and-where-geek-your-spot-adds-value" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring Fathom: Rules, Automation, and Where Geek @ Your Spot LLC Adds Value
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
              <h2 id="configuring-fathom-rules-automation-and-where-geek-your-spot-adds-value-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring Fathom: Rules, Automation, and Where Geek @ Your Spot LLC Adds Value
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
