
export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Clockwork operates by automating the financial forecasting process, transforming how small businesses manage
        their cash flow. At its core, Clockwork pulls data directly from your existing financial systems like
        QuickBooks or Xero. This eliminates the need for manual data entry and keeps your financial models updated
        in real-time. Within minutes, Clockwork can build a 52-week cash flow forecast and a 5-year financial model,
        all without the need for manual intervention.</p>
      <p className="text-base text-white shadow-text pt-3">
        The process starts with a simple connection to your accounting software. Clockwork reads your general
        ledger, mapping the chart of accounts automatically. This means that every transaction, invoice, and bill is
        captured and integrated into the model. The automation doesn&#39;t stop there;
        Clockwork&#39;s&nbsp;AI,
        named Mira, provides variance commentary and flags anomalies, offering insights that would traditionally
        require a financial analyst.</p>
      <p className="text-base text-white shadow-text pt-3">
        Re-forecasting is another critical feature. Instead of rebuilding a model from scratch when business
        conditions change, Clockwork allows you to adjust drivers. This flexibility means that when a new hire is
        planned or a major expense is anticipated, the model can be updated instantly to reflect these changes. This
        dynamic approach ensures that your financial plans remain relevant and actionable.</p>
      <p className="text-base text-white shadow-text pt-3">
        Clockwork&#39;s scenario engine is another powerful tool. It enables businesses to explore various financial
        scenarios without needing to manually adjust spreadsheets. Whether you&#39;re considering a price increase,
        a new location, or a funding round, Clockwork models these scenarios quickly, providing a clear view of
        potential outcomes. This capability transforms strategic planning from a static exercise into a dynamic and
        interactive process.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses, this means less time spent on manual data management and more time on strategic
        decision-making. By automating the tedious aspects of financial forecasting, Clockwork frees up resources,
        allowing teams to focus on growth and innovation.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-clockwork-operates-step-by-step">
                How Clockwork Operates: Step by Step
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-clockwork-operates-step-by-step-lg">
                How Clockwork Operates: Step by Step
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
