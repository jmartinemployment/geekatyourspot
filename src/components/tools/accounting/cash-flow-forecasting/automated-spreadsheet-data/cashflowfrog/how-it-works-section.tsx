export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Cashflowfrog operates as a forecasting layer that integrates seamlessly with existing accounting systems. It
        reads real-time financial data to predict future cash positions, offering a dynamic view of cash flow. This
        is not a static model; it updates as new transactions sync from your accounting software, such as QuickBooks
        or Zoho Books. By leveraging reconciled bank balances, outstanding invoices, and supplier bills,
        Cashflowfrog constructs a comprehensive forecast that anticipates financial needs and opportunities.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process begins with data extraction. Cashflowfrog connects to your accounting system and extracts
        relevant financial data. This includes invoices, bills, and bank transactions. The tool uses this data to
        build a baseline forecast, projecting cash flow based on historical patterns and current financial
        commitments. Users can also input manual adjustments to reflect anticipated changes, such as new contracts
        or expected expenses.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the data is in place, Cashflowfrog employs its forecasting algorithms. These algorithms analyze past
        financial activity and apply predictive models to estimate future cash positions. This includes identifying
        trends, such as seasonal fluctuations or recurring expenses, which might affect cash flow. The forecast can
        be broken down by various dimensions, including vendor, customer, department, or project, providing granular
        insights into financial health.</p>
      <p className="text-md text-white shadow-text pt-3">
        Cashflowfrog&#39;s unique drill-down capability allows users to explore the details behind any forecasted
        figure. By clicking on a specific number, you can trace it back to the original invoices and bills, offering
        transparency and clarity. This feature is especially useful for identifying unexpected outflows or verifying
        the accuracy of projections. It transforms the forecasting process from a high-level overview to a detailed
        financial analysis.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scenario planning is another critical component of Cashflowfrog. Users can create multiple scenarios to test
        different financial strategies, such as increasing marketing spend or delaying a major purchase. These
        scenarios help businesses understand potential impacts on cash flow and make informed decisions.
        Cashflowfrog allows for side-by-side comparison of these scenarios, making it easier to evaluate the best
        course of action.</p>
      <p className="text-md text-white shadow-text pt-3">
        Overall, Cashflowfrog&#39;s forecasting mechanics provide a robust framework for financial planning. By
        integrating real-time data with advanced forecasting tools, it enables businesses to anticipate cash flow
        challenges and opportunities, ensuring they are always prepared for what&#39;s next.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-mechanics-of-cashflowfrogs-forecasting">
                The Mechanics of Cashflowfrog&#39;s Forecasting
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-mechanics-of-cashflowfrogs-forecasting">
                The Mechanics of Cashflowfrog&#39;s Forecasting
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
