import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Jirav’s architecture is built for flexibility and speed, but it is not a
        generic&nbsp;<GlossaryLink slug="saas" className="text-[#0B162A] hover:underline">SaaS</GlossaryLink>&nbsp;shell.
        The platform’s core is a cloud-based FP&amp;A engine designed to pull in, standardize, and model
        financial and operational data from nearly any system a small business runs today. Its design solves the
        core pain point for South Florida businesses: too many disconnected sources, each with its own quirks,
        formats, and update cycles.</p>
      <p className="text-md text-white shadow-text pt-3">
        At the integration layer, Jirav connects out of the box to more than 200 accounting,
        payroll,&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>,
        and operational platforms. QuickBooks, NetSuite, Sage Intacct, ADP, Paychex, Salesforce, and HubSpot are
        all natively supported. This means your system-of-record data, revenue, expenses, headcount, pipeline,
        flows in automatically. Jirav also connects to Google Sheets and Excel, so if you have legacy data or
        operational metrics that live outside your main systems, you can still bring them into the model without
        manual entry.</p>
      <p className="text-md text-white shadow-text pt-3">
        The data model at the heart of Jirav is driver-based and three-way by default. Every plan, forecast, and
        scenario runs across the full set of financial statements: Income Statement, Balance Sheet, and Cash
        Flow. This is not a simple budget-vs-actuals report. Jirav’s integration logic ties each piece together,
        so changes in one area (like a new hire or a delayed invoice) flow through to cash and profitability
        automatically. The platform uses operational drivers, headcount, sales, expenses, KPIs, as the
        connective tissue, not just account codes. This is how it supports rolling forecasts that stay current
        as new actuals arrive.</p>
      <p className="text-md text-white shadow-text pt-3">
        The reporting layer is tightly coupled to the model. Dashboards and reports are not static exports; they
        pull directly from the live, unified data set. Any change in the underlying model, whether from a new
        data import, an updated forecast, or a scenario tweak, shows up instantly in dashboards and reports.
        This eliminates the old cycle of exporting, reformatting, and emailing spreadsheets that never quite
        match. Reports can be shared as live dashboards, branded PDF packages, or Excel files, depending on what
        your team or board needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Access control is granular. You can set permissions by user, department, or role, so department heads
        see only what’s relevant to them, while owners and finance leads get the full picture. Collaboration is
        built in: multiple users can comment, adjust, and review plans without risk of overwriting each other’s
        work. This makes it practical to bring department heads into the planning process, not just hand them a
        finished budget.</p>
      <p className="text-md text-white shadow-text pt-3">
        Jirav’s architecture is designed for repeatability and scale in small business environments. The
        platform’s standardized model templates and integration logic mean that setup does not require weeks of
        custom development. For most businesses, Geek @ Your Spot can map your data and configure your drivers
        in hours, not days, because the system expects messy, real-world data and handles the heavy lifting of
        normalization and mapping.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform also supports detailed operational modeling. You can build bottoms-up forecasts using real
        operational data, like deferred revenue, accounts receivable, or department-level metrics. This is
        especially useful for businesses with complex sales cycles or service delivery models, where a single
        revenue or cost line does not tell the whole story. Jirav’s scenario engine lets you layer in what-if
        analyses and rolling forecasts without breaking the model or creating a new spreadsheet every time plans
        change.</p>
      <p className="text-md text-white shadow-text pt-3">
        For South Florida businesses, the real advantage is that Jirav’s architecture allows you to scale up
        your planning and reporting without scaling up your finance team. The platform’s automation,
        driver-based logic, and live integration mean you can handle more complexity, more SKUs, more locations,
        more scenarios, without adding headcount. The data never leaves the platform for manual re-entry, so
        errors and version confusion drop sharply.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-sits-under-the-hood-jirav-s-architecture-integrations-and-data-model" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Sits Under the Hood: Jirav’s Architecture, Integrations, and Data Model
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-sits-under-the-hood-jirav-s-architecture-integrations-and-data-model" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Sits Under the Hood: Jirav’s Architecture, Integrations, and Data Model
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
