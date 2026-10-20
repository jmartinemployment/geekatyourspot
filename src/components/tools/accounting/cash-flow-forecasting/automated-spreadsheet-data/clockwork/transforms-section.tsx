
export default function TransformsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Clockwork revolutionizes the way small businesses handle financial forecasting by automating what once
        required hours of manual work. By integrating directly with financial systems like QuickBooks and Xero,
        Clockwork eliminates the need for manual data entry and formula maintenance. This integration allows for the
        automatic generation of a 52-week cash flow forecast and a 5-year financial model, all built from your
        existing data.</p>
      <p className="text-md text-white shadow-text pt-3">
        What this means for your team is substantial. The hours spent on maintaining and updating spreadsheets are
        returned, freeing up time for more strategic tasks. The risk of human error is drastically reduced, as
        Clockwork ensures that all data is current and accurate, pulling directly from your financial systems. This
        means no more manually updating cells or worrying about broken formulas.</p>
      <p className="text-md text-white shadow-text pt-3">
        Clockwork&#39;s&nbsp;AI-powered financial analyst, Mira, takes this a
        step further by providing insights and answers to complex financial questions. Whether you&#39;re wondering
        why cash flow dropped last month or what the financial implications of hiring two new employees are, Mira
        provides data-backed answers in plain English. This shifts the focus from data entry to data analysis,
        allowing teams to make informed decisions quickly.</p>
      <p className="text-md text-white shadow-text pt-3">
        Additionally, Clockwork&#39;s ability to build scenarios instantly means that businesses can proactively
        model various financial strategies. Whether it&#39;s considering the impact of a price increase or a new
        location, Clockwork enables businesses to see the potential outcomes before making decisions. This proactive
        approach to financial planning is a game-changer for small businesses looking to navigate uncertainties with
        confidence.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;It replaces the spreadsheet with an automatically built 5-year driver-based financial model, a 52-week
        cash flow forecast, and an AI analyst, so nobody maintains formulas.&quot;&nbsp;
        <a id={`tools-accounting-spreadsheet-data-clockwork-transforms-source${idSuffix}`}
          href="https://www.clockwork.ai/vs/liveflow"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Clockwork
        </a></p>
      <p className="text-md text-white shadow-text pt-3">
        By removing the need for manual spreadsheet management, Clockwork transforms how businesses operate.
        It&#39;s not just about saving time; it&#39;s about empowering businesses to make smarter, data-driven
        decisions without the overhead of traditional financial management. This transformation allows businesses to
        focus on growth and strategic initiatives, rather than getting bogged down in the minutiae of financial data
        management.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-clockwork-transforms-automated-spreadsheet-data">
                How Clockwork Transforms Automated Spreadsheet Data
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-clockwork-transforms-automated-spreadsheet-data-lg">
                How Clockwork Transforms Automated Spreadsheet Data
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
