import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Cashflowfrog stands out for how much of the heavy lifting it automates the moment it is connected to
        your accounting data. Most of the setup is about telling it what to watch, what to automate, and how to
        handle the real quirks of your business, rather than building a forecasting model from scratch. Geek @
        Your Spot’s job is to make sure every rule and automation logic in Cashflowfrog lines up with the way
        your business actually runs, not just how the software expects a textbook company to behave.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first thing to configure is which accounts, entities, and cash streams Cashflowfrog should pull into
        its rolling forecast. You select which bank accounts, general ledger accounts, and business units matter
        for your cash flow picture. This is not just a one-time setup; the system is built to let you adjust
        perspectives, daily, weekly, monthly, or quarterly, so you can see cash position at any level of detail,
        from a single project to the whole business. For multi-entity or multi-currency businesses, Cashflowfrog
        allows consolidation across unlimited entities and currencies in a single dashboard, so there is no need
        to keep separate files or run manual merges.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation logic in Cashflowfrog is rule-based and covers both recurring and one-off projections. You
        can set up rules that tie expenses directly to income, such as projecting ad spend as a percentage of
        revenue, or carrying forward a rolling average of the last few months’ costs. The tool also supports
        growth assumptions, like modeling revenue increases month over month, and flags future cash dips or
        spikes based on those settings. These rules keep the forecast live and relevant without the need for
        constant manual updates. For businesses that rely on regular contracts or see seasonal swings, recurring
        projections and scenario planning are configured to test what happens if a customer pays late, a big
        bill lands, or a new hire is added. Each scenario is built on real transaction data and can be
        duplicated, compared, and switched on the fly.</p>
      <p className="text-md text-white shadow-text pt-3">
        Cashflowfrog’s automation is not limited to internal logic. It integrates directly with accounting
        software (QuickBooks Online and Desktop, Xero, Sage Intacct, Odoo, Zoho Books, FreshBooks), bank feeds
        via Plaid, and allows for manual entry or spreadsheet import for businesses not yet on a full accounting
        platform. These integrations are configured so data flows in automatically, eliminating duplicate entry.
        For businesses with more complex needs, a Zapier integration lets you push projections from thousands of
        other tools,&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, billing platforms, spreadsheets, directly
        into the forecast. This is especially useful when you need to connect sales data or contract wins from
        outside your accounting system.</p>
      <p className="text-md text-white shadow-text pt-3">
        AI-driven automation is another layer that Geek @ Your Spot configures for clients who want forecasting
        to get smarter as they grow. Cashflowfrog’s AI projection suggestions learn from your transaction
        history, spotting new patterns after each data sync and prompting you to review or adjust projections.
        The platform also connects to AI assistants like Claude and ChatGPT through MCP, allowing you to query
        and update the forecast in plain English. This means you can ask for a scenario, add a future cost, or
        check the impact of a revenue dip by talking to your AI, and Cashflowfrog updates the numbers in real
        time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Cashflowfrog is a configuration-driven platform, not a code-first tool. There is no open scripting
        interface or developer SDK. All extension happens through supported integrations, accounting software,
        bank feeds, Zapier, and AI connectors. This makes deployment simpler for small businesses: there is less
        risk of a misconfigured custom script breaking the forecast, and Geek @ Your Spot can focus on mapping
        your business logic to the platform’s built-in rules and automations.</p>
      <p className="text-md text-white shadow-text pt-3">
        The final step is configuring alerts and exception handling. Cashflowfrog can flag low balance warnings,
        unusual payment spikes, late receipts, and covenant triggers. These alerts are set up based on your real
        cash thresholds and typical payment cycles, so you see risks before they hit. For teams that need audit
        trails or segmented access, role-based permissions and audit-friendly design are available, supporting
        secure collaboration across finance and operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        In practice, Geek @ Your Spot spends the most time upfront on mapping your data structure and process
        flows to Cashflowfrog’s configuration panels. The goal is to eliminate manual steps, automate as much as
        possible, and make sure every forecast and alert reflects your actual operating reality. Once
        configured, Cashflowfrog becomes a live, always-current cash planning system that adapts as your
        business changes, without needing a full-time analyst to keep it running.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-cashflowfrog-rules-automation-and-extension-points" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Cashflowfrog: Rules, Automation, and Extension Points
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
              <h2 id="what-gets-configured-in-cashflowfrog-rules-automation-and-extension-points" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Cashflowfrog: Rules, Automation, and Extension Points
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
