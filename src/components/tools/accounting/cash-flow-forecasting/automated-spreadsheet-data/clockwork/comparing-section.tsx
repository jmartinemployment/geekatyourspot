import Link from "next/link";

export default function ComparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        When considering tools for automating spreadsheet data, Clockwork stands out among its peers due to its
        unique approach to financial modeling. Unlike many other platforms that rely heavily on manual spreadsheet
        manipulation, Clockwork automates the creation of financial models and forecasts directly from your general
        ledger. This means no more manually updating spreadsheets or worrying about formula errors.</p>
      <p className="text-base text-white shadow-text pt-3">
        Clockwork&#39;s integration capabilities are a significant advantage. It connects with QuickBooks, Xero, and
        major payroll providers, ensuring that your financial data is always up to date. This automatic syncing
        means that you can trust the numbers you see without having to double-check them manually. In contrast, many
        other tools require frequent manual updates and checks to maintain accuracy.</p>
      <p className="text-base text-white shadow-text pt-3">
        One of the critical differentiators for Clockwork is
        its&nbsp;AI-powered
        analyst, Mira. Mira provides insights and answers to complex financial questions in plain English, which can
        be a game-changer for small businesses that may not have a dedicated financial analyst on staff. This
        feature shifts the focus from maintaining spreadsheets to understanding and acting on financial data.</p>
      <p className="text-base text-white shadow-text pt-3">
        In the competitive landscape, tools like LiveFlow and&nbsp;<Link id={`tools-accounting-spreadsheet-data-clockwork-comparing-fathomhq${idSuffix}`} href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq" className="text-[#0B162A] hover:underline">Fathom</Link>&nbsp;offer their own strengths but often require
        more manual input and maintenance. LiveFlow, for example, is excellent for integrating live data into
        spreadsheets but leaves the burden of creating and maintaining the financial models on the user. Fathom
        provides detailed reporting but often relies on spreadsheet logic for forecasts, which can be cumbersome.</p>
      <p className="text-base text-white shadow-text pt-3">
        Clockwork&#39;s pricing is transparent and competitive. Starting at $599 per month for the Predict plan, it
        offers a clear cost structure that can be easily budgeted for. This is in contrast to some competitors that
        require a quote for pricing, adding an additional layer of complexity to the decision-making process.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in Miami-Dade, Broward, and West Palm Beach counties looking for a tool that minimizes
        manual effort and maximizes insight, Clockwork provides a compelling option. It allows businesses to move
        away from the constraints of traditional spreadsheet management and towards a more automated, insightful
        approach to financial forecasting.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="clockwork-in-the-landscape-of-financial-forecasting-tools">
                Clockwork in the Landscape of Financial Forecasting Tools
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="clockwork-in-the-landscape-of-financial-forecasting-tools-lg">
                Clockwork in the Landscape of Financial Forecasting Tools
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
