import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every month, small business owners and fractional CFOs find themselves buried in a &quot;spreadsheet
        sandbox,&quot; manually coding formulas, building three-statement structures, and cleaning ledger data. This
        routine is more than just a time sink; it&#39;s a barrier to growth, wasting over 20 hours that could be
        spent on strategic analysis and decision-making. Instead of gaining insights to steer their businesses
        forward, they&#39;re stuck reconciling rows and columns, often leading to errors and outdated information
        that can derail financial planning.</p>
      <p className="text-md text-white shadow-text pt-3">
        Imagine a world where automated&nbsp;<Link id={`tools-accounting-spreadsheet-data-clockwork-overview-spreadsheet-data${idSuffix}`} href="/use-cases/accounting/cash-flow-forecasting/ai-spreadsheet-data" className="text-[#C83803] hover:underline">spreadsheet data</Link>&nbsp;handles these tasks for you. This is where Clockwork comes
        in. By integrating directly with your financial systems, Clockwork eliminates the need for manual data entry
        and formula maintenance. It automatically generates a 52-week cash flow forecast and a 5-year financial
        model from your existing data. This allows you to focus on what truly matters: analyzing numbers, making
        informed decisions, and driving your business forward. With Clockwork, you stop maintaining spreadsheets and
        start leveraging them as powerful tools for insight and growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview-lg">
                Overview
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
