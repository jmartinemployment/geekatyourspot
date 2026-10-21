import Link from "next/link";

export default function ComparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        When
        evaluating&nbsp;cash
        flow forecasting&nbsp;tools, businesses often consider several options, each with its own
        strengths and weaknesses. Cashflowfrog stands out due to its deep integration capabilities and detailed
        forecasting features. Unlike many tools that offer basic cash flow projections, Cashflowfrog provides a
        granular breakdown by vendor, customer, and department, allowing businesses to drill down to the source
        invoices and bills. This capability is crucial for companies that need detailed financial insights rather
        than just high-level overviews.</p>
      <p className="text-base text-white shadow-text pt-3">
        Many competitors, such as&nbsp;<Link id={`tools-accounting-spreadsheet-data-cashflowfrog-comparing-floatapp${idSuffix}`} href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/floatapp" className="text-[#0B162A] hover:underline">Float</Link>&nbsp;and QuickBooks Cash Flow Planner, offer simpler views that are adequate for
        basic forecasting needs. However, they often lack the depth of analysis and the ability to handle complex
        scenarios that Cashflowfrog offers. For instance, while QuickBooks Cash Flow Planner provides a clear
        monthly overview, it does not support the detailed breakdowns by class or project that Cashflowfrog excels
        in.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cashflowfrog&#39;s ability to integrate with various accounting systems like QuickBooks, Xero, and Sage
        Intacct is another significant advantage. This integration ensures that the forecasts are based on real-time
        data, reducing the risk of outdated information impacting financial decisions. In contrast, some tools
        require manual data entry or periodic updates, which can lead to errors and inefficiencies.</p>
      <p className="text-base text-white shadow-text pt-3">
        Moreover, Cashflowfrog&#39;s support for scenario planning and what-if analysis provides businesses with the
        flexibility to model different financial outcomes. This feature is particularly beneficial for companies
        looking to explore the impacts of potential decisions, such as hiring new staff or making significant
        purchases, before they commit. These advanced forecasting capabilities position Cashflowfrog as a more
        comprehensive solution compared to its peers.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses that require multi-entity consolidation and multi-currency support, Cashflowfrog offers these
        features natively, allowing for seamless financial management across different business units and
        geographical locations. Competing solutions often require additional modules or third-party integrations to
        achieve similar functionality, which can complicate the forecasting process and increase costs.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="cashflowfrogs-position-among-competing-solutions">
                Cashflowfrog&#39;s Position Among Competing Solutions
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="cashflowfrogs-position-among-competing-solutions-lg">
                Cashflowfrog&#39;s Position Among Competing Solutions
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
