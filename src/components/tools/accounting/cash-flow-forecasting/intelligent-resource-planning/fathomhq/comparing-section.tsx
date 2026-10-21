import Link from "next/link";

export default function ComparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Small businesses in South Florida often find themselves stuck between two extremes: legacy spreadsheets
        that never match up, and
        heavyweight&nbsp;ERP&nbsp;systems
        that promise control but deliver months of setup and a steep learning curve. In this landscape, Fathom
        sits in the middle, offering the core benefits of intelligent resource planning, live cash flow
        visibility, entity consolidation, and actionable KPIs, without the cost, complexity, or disruption of a
        full&nbsp;ERP&nbsp;rollout.</p>
      <p className="text-base text-white shadow-text pt-3">
        Traditional ERPs like NetSuite, Acumatica, or Microsoft Dynamics 365 Business are built for scale, but
        that scale comes with overhead. They require strict data schemas, long implementation timelines, and
        ongoing IT support. For a twelve-person finance team, the process of cleaning up years of spreadsheet
        history, mapping it into a
        rigid&nbsp;ERP&nbsp;structure,
        and getting everyone trained can take months and cost well into the five figures before the first live
        report is produced. Even then, the system may not flex to the real-world messiness of a small company’s
        books, multiple entities, mixed currencies, and non-financial data like headcount or unit sales that
        never made it into the ledger.</p>
      <p className="text-base text-white shadow-text pt-3">
        Fathom, by contrast, is designed for teams who want the insight and automation of
        an&nbsp;ERP, but need
        to move faster and with less friction. It connects directly to the accounting and operational systems
        you already
        use,&nbsp;<Link id={`tools-accounting-intelligent-resource-planning-fathomhq-comparing-quickbooks${idSuffix}`} href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks" className="text-[#0B162A] hover:underline">QuickBooks</Link>,
        Xero, MYOB, Excel, Google Sheets, pulling in real-time data and making it available for live dashboards,
        scenario planning, and consolidated reporting. There is no need to rebuild your entire chart of accounts
        or migrate every historic transaction. Fathom’s strength is in its ability to map and merge messy,
        multi-source data into one clear story, then visualize it for the decision-makers who need it.</p>
      <p className="text-base text-white shadow-text pt-3">
        Where spreadsheet-driven processes fall apart is in the handoff between systems. Data is exported,
        emailed, and rekeyed, introducing errors and delays. Each time a number changes in QuickBooks, someone
        has to update the spreadsheet, then adjust the PowerPoint, then double-check the totals. In Fathom,
        syncing happens automatically, daily or on demand, so dashboards and reports always reflect the latest
        position. For a small business, this means less time chasing numbers and more time acting on what the
        numbers say.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real gap Fathom fills is not just in automation, but in making financial data usable for the people
        who run the business.
        Most&nbsp;ERP&nbsp;systems
        and spreadsheet setups bury the story in pages of line items and formulas. Fathom’s approach is to
        surface the drivers that matter: cash inflows and outflows, breakeven points, gross margin trends, and
        custom KPIs that reflect both financial and non-financial metrics. It brings these into visual
        dashboards, scenario models, and board-ready reporting packs that can be shared with directors, lenders,
        or staff.</p>
      <p className="text-base text-white shadow-text pt-3">
        For groups managing multiple entities, whether that’s different locations, brands, or business units,
        Fathom stands out for its consolidation capabilities. It can roll up results from up to 300 entities in
        a single-currency group, or 50 in a multi-currency group, handling eliminations and group-level
        benchmarking within the same workflow. Most small business ERPs either cannot do this at all, or require
        costly custom configuration. Fathom makes it a standard feature, with the flexibility to maintain each
        entity’s own year-end and reporting structure.</p>
      <p className="text-base text-white shadow-text pt-3">
        Compared to other mid-market tools, Fathom’s advantage is the completeness of its platform. It combines
        consolidation, reporting, forecasting,
        and&nbsp;KPI&nbsp;tracking
        in one interface. There is no need to buy separate modules for budgeting or scenario planning, nor to
        export data for analysis in another tool. For finance teams who want to move away from spreadsheets but
        do not want to take on a
        full&nbsp;ERP, this
        is the practical, affordable middle ground.</p>
      <p className="text-base text-white shadow-text pt-3">
        The main trade-off is that Fathom is not a transactional system, you cannot run payroll or process AP/AR
        directly inside it. Instead, it is the layer that sits on top of your existing systems, pulling together
        the data you already have and turning it into insight. For small businesses who want to keep their
        operational tools but need better visibility, this is a strength, not a weakness.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, Fathom is not a replacement for a
        full&nbsp;ERP, nor is
        it just another reporting add-on. It is the tool that makes sense for small businesses who need to see
        the real picture, fast, without the pain of a multi-quarter technology project. For teams who are tired
        of spreadsheet chaos but cannot justify the cost and rigidity of a
        big&nbsp;ERP, Fathom
        is the platform that lets them move forward.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-fathom-compares-to-traditional-erps-and-spreadsheet-driven-workflows" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Fathom Compares to Traditional ERPs and Spreadsheet-Driven Workflows
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-fathom-compares-to-traditional-erps-and-spreadsheet-driven-workflows-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Fathom Compares to Traditional ERPs and Spreadsheet-Driven Workflows
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
