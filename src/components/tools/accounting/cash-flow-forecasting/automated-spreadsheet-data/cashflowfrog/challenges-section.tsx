export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Imagine a business owner in West Palm Beach trying to make sense of their cash flow. They have spreadsheets
        filled with numbers, but the real picture is hard to see. This is common for many small businesses dealing
        with fragmented business metrics. The problem is clear: operational forecasting fails when users can&#39;t
        drill down into specifics like tracking classes, locations, or customer behaviors.</p>
      <p className="text-base text-white shadow-text pt-3">
        One major issue is subsidizing unprofitable parts of the business with funds from healthier segments.
        Without detailed insights, businesses might unknowingly pour resources into failing departments or
        locations. This misallocation can drain capital that could be better used elsewhere.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another challenge is misunderstanding customer concentration risks. Without evaluating cash inflows by
        individual customer weight, businesses might miss the warning signs of over-reliance on a few key clients.
        This can lead to sudden cash shortages if those clients delay payments or cut back orders.</p>
      <p className="text-base text-white shadow-text pt-3">
        Businesses also risk messing up their core financials while experimenting with operational changes.
        Attempting to run alternative internal experiments without a clear view of their financial impact can lead
        to errors in the main books, creating a ripple effect of inaccuracies.</p>
      <p className="text-base text-white shadow-text pt-3">
        Moreover, businesses often fail to cross-reference immediate cash needs with long-term forecasts. This
        oversight can lead to liquidity issues, especially during economic downturns or unexpected expenses. The
        inability to trace transaction origins quickly during audits further complicates this, slowing down variance
        analysis and decision-making.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cash Flow Frog offers a solution by allowing businesses to break down forecasts by class, project, and
        department. This tool provides a comprehensive 36-month operational window with instant transaction-level
        drill-downs. By using Cash Flow Frog, businesses can stop guessing which parts of their operation are
        supporting others, leading to more informed and strategic financial decisions.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-fragmented-metrics-in-cash-flow-forecasting">
                The Cost of Fragmented Metrics in Cash Flow Forecasting
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-fragmented-metrics-in-cash-flow-forecasting-lg">
                The Cost of Fragmented Metrics in Cash Flow Forecasting
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
