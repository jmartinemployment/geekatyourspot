import Link from "next/link";

export default function ComparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Jirav is not just another name in a crowded field of intelligent resource planning software. It is built
        for small businesses that need to move past the limits of spreadsheets, disconnected accounting apps,
        and manual forecasting, but do not have the time or budget for a
        heavyweight&nbsp;ERP&nbsp;overhaul.
        Where most platforms force you to pick between flexibility and structure, Jirav is designed to give you
        both: driver-based financial modeling that adapts to your business, with a foundation that keeps all
        your numbers in sync.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most small business owners in South Florida start their search with a shortlist that includes all-in-one
        ERPs like NetSuite, accounting-focused tools
        like&nbsp;<Link id={`tools-accounting-intelligent-resource-planning-jirav-comparing-quickbooks${idSuffix}`} href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks" className="text-[#0B162A] hover:underline">QuickBooks</Link>,
        and spreadsheet replacement apps. Each has its own strengths, but also real tradeoffs when it comes
        to&nbsp;cash flow
        forecasting&nbsp;and intelligent resource planning.</p>
      <p className="text-base text-white shadow-text pt-3">
        Traditional ERPs promise a single source of truth, but getting there is a long haul. Mapping your
        records into a
        strict&nbsp;ERP&nbsp;schema
        is slow, expensive, and rarely fits the messy, real-world data small businesses actually have. Even
        after launch, changes to your business model or reporting needs mean more consulting hours and more
        cost. For a twelve-person team, that is often overkill, and most of the features go unused.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the other side, spreadsheet-based workflows give you control and flexibility, but at the cost of
        manual work and risk. Every new hire, every change in sales pipeline, every surprise invoice means
        another round of copying, pasting, and double-checking. Errors creep in. Version control breaks down.
        When a lender asks for a line-of-credit package, you scramble to rebuild the numbers and hope they tie
        out. The cost is not just time, it is missed opportunities, late pivots, and sometimes real cash
        shortfalls.</p>
      <p className="text-base text-white shadow-text pt-3">
        Jirav sits in the middle, but with a real edge: it automates the flow of data from your accounting,
        payroll,&nbsp;CRM,
        and operational systems into a live, always-current model. Unlike generic spreadsheet replacements,
        Jirav’s driver-based forecasting lets you build models that actually reflect how your business runs,
        tying revenue, costs, and headcount to the real drivers that move your numbers. Every scenario you run,
        every forecast you update, is built from the same data model as your reports and dashboards. That means
        no more reconciling three different versions of the truth.</p>
      <p className="text-base text-white shadow-text pt-3">
        Where other tools ask you to choose between speed and depth, Jirav gives you both. You get rolling
        forecasts that update as soon as new actuals come in, not weeks after the fact. You can model what-if
        scenarios, like losing a key client or expanding your team, across income, balance sheet, and cash flow
        in minutes, not days. When you need to see the impact of a new hire or a big client payment, you do not
        wait for your accountant to rebuild the spreadsheet. The answer is in your dashboard, live.</p>
      <p className="text-base text-white shadow-text pt-3">
        Jirav’s integrations go deep. It connects out of the box with QuickBooks, NetSuite, Sage Intacct, ADP,
        Paychex, Salesforce, Hubspot, and over 200 other systems. This is not just about pulling in balances, it
        means your forecasts, your scenario models, and your reports all update as soon as the underlying data
        does. You do not have to worry about manual imports, broken formulas, or missing updates.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform also stands out in how it handles reporting. Most tools split your historicals from your
        forecasts, forcing you to run two sets of reports and stitch them together by hand. Jirav’s reporting
        pulls from the same data model as its forecasts, so you can see actuals, budgets, and projections in one
        view. This is key when you need to answer a board question, prep for a loan application, or just check
        if you are on track for payroll next month.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses that need to keep pace with change, seasonal swings, new contracts, staff turnover,
        Jirav’s rolling forecast engine is a real differentiator. You do not build a plan once and hope it
        holds. As new data flows in, your forecasts adjust automatically. You can spot cash crunches before they
        hit, see the impact of a slow-paying client, and plan hiring around real numbers instead of best
        guesses.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, this means your Friday afternoon does not end with a scramble to patch together numbers
        from three different sources. You get one dashboard, one set of numbers, and the confidence to make
        decisions without waiting for the next close. For South Florida businesses that have outgrown
        spreadsheets but do not want the pain or cost of a
        full&nbsp;ERP, Jirav
        is not just another tool, it is the right-sized answer to the real problem: getting everyone on the same
        page, using the same data, in real time.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-jirav-stands-apart-from-other-resource-planning-tools" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Jirav Stands Apart from Other Resource Planning Tools
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
              <h2 id="how-jirav-stands-apart-from-other-resource-planning-tools-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Jirav Stands Apart from Other Resource Planning Tools
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
