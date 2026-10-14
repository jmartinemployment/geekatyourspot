import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Take the Helm is built for hands-on configuration, not just plug-and-play. What makes it work for a
        small business is the way its rules and automation logic get set up to match your real cash flow cycles.
        Geek @ Your Spot handles this setup end to end, starting with the first data sync and carrying through
        to live scenario planning. This is not a generic process. Each step is about making Take the Helm
        reflect how your business actually runs, not how a software vendor thinks it should.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core of Take the Helm’s configuration is its forecasting rules. These are not abstract settings. In
        practice, they decide how your cash flow forecast responds to every invoice, bill, and payment. For
        example, when Geek @ Your Spot configures Take the Helm, they start by mapping your chart of accounts
        and connecting your accounting system, QuickBooks, Xero, or Sage. From there, they set up rules for how
        transactions import, which accounts to include in forecasts, and how to handle exceptions like loans or
        one-off expenses. This is all done through Take the Helm’s own setup wizard and dashboard, not through
        code or third-party scripts.</p>
      <p className="text-md text-white shadow-text pt-3">
        Take the Helm’s automation logic is visible in how it handles accounts receivable and payable. Once your
        accounting data is synced, the platform automatically pulls in all open invoices and bills. You can
        group receivables or payables by contact, filter by age, and use the Average Days Receivable (ADR) and
        Average Days Payable (ADP) metrics to predict when money will actually move. These predictions rely on
        your own historical data. The system lets you manually adjust dates, amounts, and inclusion in
        forecasts, but the default is to use real payment and receipt timing patterns from your business. This
        means the forecast reflects reality, not just due dates.</p>
      <p className="text-md text-white shadow-text pt-3">
        The drag-and-drop timeline is what sets Take the Helm apart for daily use. You can shift payment dates
        directly on a visual cash flow graph and see the impact instantly. This is not just a reporting feature,
        it is an interactive control panel. If a client is late or you want to test what happens if you pay a
        supplier early, you drag the transaction to a new date and the forecast updates on the spot. Scenario
        planning is equally hands-on. You can create unlimited side-by-side scenarios, each with its own color
        and description, and test what happens if you hire a new employee, delay a capital expense, or lose a
        big customer payment. This is all done in the main interface, not hidden in menus or requiring IT
        involvement.</p>
      <p className="text-md text-white shadow-text pt-3">
        Reporting and sharing are also configurable. Take the Helm lets you export forecasts and transaction
        details as PDF or CSV files. You can choose from three different viewing modes: a visual graph, a
        transaction detail table, or a cash flow summary similar to what you might build in a spreadsheet. Each
        view can be customized for date range and filtered for the data you care about. This is especially
        useful for teams that need to communicate with outside accountants, lenders, or partners who expect data
        in a certain format.</p>
      <p className="text-md text-white shadow-text pt-3">
        Take the Helm does not expose an&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;or scripting
        environment for custom extensions. All configuration is done within the platform’s own interface. For
        most small businesses, this is a strength. There is no need to maintain custom integrations or worry
        about breaking changes. Geek @ Your Spot’s role is to make sure every rule, scenario, and data mapping
        in Take the Helm matches your real business logic, so you do not have to translate your process into
        software-speak. This is what closes the gap between a tool that is merely installed and one that
        actually runs your week.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a team coming from scattered spreadsheets, the shift is immediate. Instead of updating formulas and
        chasing down missing numbers, you set the rules once with Geek @ Your Spot’s help and the system runs
        itself. If your business changes, you adjust the rules, no need for a new implementation. Take the
        Helm’s configuration is not a one-time event; it is an ongoing process that adapts as your cash flow
        patterns evolve. This is what makes it a fit for small businesses that need control without complexity.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="configuring-take-the-helm-rules-automation-and-what-actually-gets-set-up" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring Take the Helm: Rules, Automation, and What Actually Gets Set Up
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
              <h2 id="configuring-take-the-helm-rules-automation-and-what-actually-gets-set-up" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring Take the Helm: Rules, Automation, and What Actually Gets Set Up
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
