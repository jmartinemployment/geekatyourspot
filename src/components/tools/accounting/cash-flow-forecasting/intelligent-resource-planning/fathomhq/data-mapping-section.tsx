import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Getting the data structure right at the start is what makes Fathom deliver accurate, actionable insights
        rather than another layer of confusion. The first decision is how to map your existing chart of accounts
        and entities into Fathom’s structure. Because the platform connects directly to Xero, QuickBooks, MYOB,
        and spreadsheets, it can pull in your current setup as-is, but the quality of your mapping will
        determine how useful your dashboards and reports are from day one.</p>
      <p className="text-md text-white shadow-text pt-3">
        For multi-entity businesses, you need to decide which entities to consolidate and how to handle
        intercompany transactions. Fathom supports up to 300 entities in a group, with built-in tools for
        intercompany eliminations and flexible year-end alignment. You can set rules to exclude internal
        revenue, expenses, or balances so your consolidated reports reflect true performance. If you operate
        across currencies, Fathom supports up to 97 currencies in consolidation, letting you use standard or
        custom exchange rates for group reporting.</p>
      <p className="text-md text-white shadow-text pt-3">
        Mapping non-financial data is just as important as the financials. Fathom allows you to import
        operational metrics, like headcount, square footage, or units sold, via Excel or Google Sheets. These
        can be mapped to custom KPIs, so you see how operational drivers impact cash flow and profitability.
        Upfront, you need to decide which non-financial metrics matter for your business, and how often you want
        them updated. This is especially important for businesses with multiple locations, service lines, or
        divisions, where performance drivers vary.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next step is&nbsp;<GlossaryLink slug="kpi">KPI</GlossaryLink>&nbsp;selection and categorization.
        Fathom offers more than 50 default KPIs, but you can define your own using the formula builder. Upfront
        mapping means linking each&nbsp;<GlossaryLink slug="kpi">KPI</GlossaryLink>&nbsp;to specific accounts,
        departments, or business units, so when you drill into a dashboard, you see results that match your
        internal structure. Assigning importance levels to
        each&nbsp;<GlossaryLink slug="kpi">KPI</GlossaryLink>&nbsp;(critical, high, medium, low) helps
        prioritize what gets flagged in reports and what drives decision-making.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scenario modelling and forecasting require careful mapping as well. Fathom’s three-way forecasting tool
        integrates profit and loss, balance sheet, and cash flow into one model. To make this work, you need to
        map historical data, budget figures, and operational drivers into the forecasting engine. The more
        complete and accurate your mapping, the more reliable your scenario plans and sensitivity analyses
        become. This means thinking through not just what happened last month, but what variables will drive the
        next quarter, like sales pipeline, cost of goods, or planned hires.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data mapping is not a one-time task. As your business grows, adds new locations, or changes its
        structure, you will need to review and update your mappings. Fathom supports bulk updates and flexible
        mapping adjustments, so you can adapt without breaking your reports. Geek @ Your Spot LLC guides this
        process, making sure your system evolves with your needs and avoids the drift that turns dashboards into
        noise.</p>
      <p className="text-md text-white shadow-text pt-3">
        Upfront, the key is to focus on clarity and consistency. Clean, well-mapped data means your team spends
        less time reconciling numbers and more time acting on insights. Fathom’s approach lets you start with
        your existing structure and refine it over time, rather than forcing a complete overhaul before you see
        value. For South Florida small businesses, this means faster time to insight, fewer surprises at
        month-end, and a intelligent resource planning system that actually matches how you run the business.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-data-structure-and-mapping-decisions-matter-upfront-when-deploying-fathom" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data Structure and Mapping Decisions Matter Upfront When Deploying Fathom
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-data-structure-and-mapping-decisions-matter-upfront-when-deploying-fathom" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data Structure and Mapping Decisions Matter Upfront When Deploying Fathom
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
