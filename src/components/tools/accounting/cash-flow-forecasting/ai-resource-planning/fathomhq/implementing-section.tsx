import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Going live with Fathom is not a drawn-out&nbsp;ERP&nbsp;project
        that drags on for quarters. Small businesses in South Florida move faster because Fathom is designed for
        rapid setup, with pre-built connectors, templated reporting, and a phased rollout plan that matches the
        realities of a small team. The main thing that shortens the timeline is the way Fathom connects directly
        to accounting platforms like Xero, QuickBooks, MYOB, and Google Sheets. There is no need to rebuild your
        chart of accounts or manually re-enter data. Once the connection is established, the platform pulls in
        your existing financials and operational data automatically.</p>
      <p className="text-base text-white shadow-text pt-3">
        The order of deployment is structured to avoid the usual bottlenecks. First, Geek @ Your Spot LLC works with
        your team to define the business objectives and the KPIs that matter most. This is not a generic
        checklist. Each metric is mapped to a specific business goal, whether that is reducing reporting time,
        tracking cash flow by location, or benchmarking performance across entities. With Fathom, you can select
        from over 50 built-in KPIs and create custom ones with its formula builder, so you do not wait for
        custom development or workarounds.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next, the data integration phase begins. Fathom’s connectors handle the bulk of the heavy lifting,
        pulling transactions, balances, and even non-financial data from your systems. This eliminates double
        entry and the risk of data mismatches. For businesses with multiple entities, Fathom can consolidate up
        to 300 entities in a single-currency group or up to 50 in a multi-currency setup. Consolidation rules
        and intercompany eliminations are configured up front, not as an afterthought, so your first reports
        reflect the real structure of your business.</p>
      <p className="text-base text-white shadow-text pt-3">
        After the data flows in, setup moves to reporting and visual dashboards. Fathom comes with pre-built
        templates for management packs, board-ready reports, and scenario-based forecasts. These templates can
        be tailored quickly, no need to build from scratch. Geek @ Your Spot LLC configures the visuals and
        commentary tools to match your reporting cadence, so you get monthly, quarterly, or ad hoc packs
        delivered automatically to the right stakeholders. The system supports scheduled delivery, so you do not
        have to generate reports manually at month-end.</p>
      <p className="text-base text-white shadow-text pt-3">
        The phased rollout means your team can start with core financials and add complexity over time. Start
        with basic cash flow visibility, then layer on divisional KPIs, scenario planning, or advanced
        benchmarking as your needs evolve. Training is targeted: instead of learning a new system all at once,
        users get hands-on with the features that matter most for their role. Because Fathom is cloud-based,
        updates and changes do not require downtime or IT intervention, adjustments can be made on the fly as
        your business changes.</p>
      <p className="text-base text-white shadow-text pt-3">
        All of this is underpinned by Geek @ Your Spot LLC’s method: define objectives,
        assess&nbsp;<GlossaryLink slug="data-quality">data quality</GlossaryLink>, choose the right
        integrations, and launch with a clear implementation strategy. The consultancy handles the
        configuration, data mapping, and workflow automation, so your team can focus on running the business,
        not troubleshooting software. The result is a go-live process that takes days or weeks, not months, with
        measurable outcomes like reduced reporting time and fewer errors from the first cycle.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business in West Palm Beach or Miami-Dade, this means you do not have to overhaul your tech
        stack or hire extra staff to get live financial dashboards. Fathom is built to work within your
        environment, pulling in data from the tools you already use and delivering insights that your team can
        act on right away. The time to value is short, and the disruption to your operations is minimal.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-shortens-go-live-with-fathom-and-the-order-it-happens-in" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Shortens Go-Live with Fathom and the Order It Happens In
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
              <h2 id="what-shortens-go-live-with-fathom-and-the-order-it-happens-in-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Shortens Go-Live with Fathom and the Order It Happens In
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
