export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Floatapp operates by integrating directly with your existing accounting platforms, such as Xero and
        QuickBooks Online. It imports data every 24 hours, ensuring your cash flow forecasts are always based on the
        latest information. This integration means that every bank transaction, invoice, and bill is automatically
        synced, removing the need for manual data entry and reducing the risk of errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        At the heart of Floatapp&#39;s functionality is its ability to create a live, rolling cash flow forecast.
        This forecast is built from four primary data sources: actual bank balances, outstanding invoices, upcoming
        bills, and budgeted costs. By combining these elements, Floatapp generates a visual cash position graph that
        updates automatically as new data comes in. This live view allows businesses to stay on top of their
        financial health without the need for constant manual updates.</p>
      <p className="text-md text-white shadow-text pt-3">
        Floatapp offers two distinct forecast views to cater to different business needs. The 13-week rolling view
        is designed for short-term cash management, providing a detailed week-by-week outlook. This is particularly
        useful for monitoring near-term cash movements, preparing for payment runs, and ensuring liquidity. On the
        other hand, the monthly view offers a longer-term perspective, ideal for budgeting and performance tracking.
        This dual-view approach ensures that both immediate and strategic financial planning needs are met.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the standout features of Floatapp is its Intelligent Suggestions capability. This feature analyzes
        historical transaction data to identify recurring cost patterns, which are then suggested as entries in the
        cash flow forecast. Users can review and confirm these suggestions, significantly reducing setup time and
        minimizing the risk of missing costs in the forecast. Additionally, Floatapp&#39;s Auto-budgets feature
        automatically generates budget figures from historical data, keeping forecasts current without manual
        intervention.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scenario planning is another integral part of Floatapp, allowing businesses to test different financial
        outcomes without altering their base forecast. Users can toggle budget lines on and off to see the impact of
        potential decisions, such as delaying a cost or adding a new expense. This real-time adjustment capability
        provides businesses with the flexibility to respond quickly to changing financial situations.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-floatapp-works-the-mechanics-of-real-time-cash-flow-forecasting">
                How Floatapp Works: The Mechanics of Real-Time Cash Flow Forecasting
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-floatapp-works-the-mechanics-of-real-time-cash-flow-forecasting-lg">
                How Floatapp Works: The Mechanics of Real-Time Cash Flow Forecasting
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
