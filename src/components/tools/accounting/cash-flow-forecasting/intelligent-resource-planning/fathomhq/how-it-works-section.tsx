import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Fathom processes raw accounting and operational data from small businesses and turns it into live
        dashboards, forecasts, and reports. The platform is built to replace the patchwork of spreadsheets,
        emails, and desktop software that most South Florida teams rely on today. Instead of waiting for a
        month-end scramble, Fathom pulls data directly from your accounting system and connected sources,
        updating figures as transactions happen. This means cash flow, accounts receivable, and profitability
        metrics are always current, not weeks out of date.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process starts with connecting Fathom to your accounting software, Xero, QuickBooks (Online or
        Desktop), MYOB, Sage 50, Excel, or Google Sheets. Once connected, Fathom syncs data daily, pulling in
        every new invoice, payment, and expense. This eliminates the need for manual data entry or error-prone
        spreadsheet imports. The platform maps your chart of accounts and financial periods, so every
        transaction lands in the right place automatically. For teams that manage multiple entities or
        locations, Fathom consolidates all of them into a single view, handling up to 300 entities in one group
        (or 50 if you need multi-currency support). Each entity can keep its own year-end, but the group view
        stays consistent.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the data is in, Fathom builds live dashboards that show exactly where cash is moving. The cash flow
        waterfall chart breaks down inflows and outflows, so you see how every sale, payment, and bill affects
        your cash position. The dashboard does not just show totals, it highlights trends, outliers, and risks.
        For example, a sudden spike in overdue invoices or a dip in cash reserves triggers a visual alert. These
        dashboards are not static, they update as new transactions come in, so the numbers you see on Friday
        afternoon match what is in your accounts.</p>
      <p className="text-md text-white shadow-text pt-3">
        Fathom goes deeper than surface-level reporting. The platform includes scenario planning tools that let
        you model what happens if sales dip, costs rise, or a big customer delays payment. You can build
        &quot;what-if&quot; scenarios and see the impact on cash flow, profit, and breakeven points in real
        time. The Goalseek tool lets you set a target, like a minimum cash balance or profit margin, and Fathom
        calculates what changes are needed to hit that goal. For multi-entity businesses, you can run these
        scenarios across the whole group or drill down to a single location.</p>
      <p className="text-md text-white shadow-text pt-3">
        Custom KPIs are central to how Fathom works. The platform ships with over 50 standard financial and
        operational KPIs, but you can build your own using a formula builder. You can track non-financial
        metrics, like headcount, occupancy, or customer satisfaction, by importing them from spreadsheets or
        Google Sheets. These KPIs show up alongside financial ones in dashboards, letting you see how
        operational drivers connect to cash flow and profit. Fathom lets you assign importance levels to
        each&nbsp;<GlossaryLink slug="kpi" className="text-[#0B162A] hover:underline">KPI</GlossaryLink>, so
        your team knows which metrics need attention first.</p>
      <p className="text-md text-white shadow-text pt-3">
        Reporting in Fathom is not just about tables and numbers. The platform uses visual storytelling to turn
        data into clear, actionable insights. You can create board-ready reporting packs with charts,
        commentary, and variance analysis. These reports can be scheduled for automatic delivery, so directors
        and managers get fresh numbers without chasing the finance team. Visualizations, like trend graphs,
        breakeven charts, and segment breakdowns, make it easy for non-financial staff to spot problems and
        opportunities. For teams that need to explain results to banks, investors, or division heads, Fathom’s
        reports package the story behind the numbers, not just the numbers themselves.</p>
      <p className="text-md text-white shadow-text pt-3">
        All of this happens in one interface. Users do not have to switch between tools or copy data out of the
        system. Fathom keeps the numbers consistent and secure, with every update tracked and every scenario
        saved. For small businesses that have struggled with inconsistent, error-prone reporting, this is a step
        change. It is not just about seeing where the money went last month, it is about knowing what is
        happening now, what will happen next, and what needs to change to hit your goals. That is the real shift
        Fathom brings to Intelligent Resource Planning.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-fathom-turns-raw-data-into-live-resource-planning" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Fathom Turns Raw Data into Live Resource Planning
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-fathom-turns-raw-data-into-live-resource-planning" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Fathom Turns Raw Data into Live Resource Planning
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
