
export default function EvaluatingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering Floatapp for your business, evaluating its fit and pricing model is crucial. Floatapp is
        designed for small businesses that need a
        reliable&nbsp;cash
        flow forecasting&nbsp;tool integrated with platforms like Xero and QuickBooks Online. Its
        suitability depends on your specific financial management needs and the complexity of your operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        The fit of Floatapp largely hinges on your current accounting setup. If your business uses Xero or
        QuickBooks Online, Floatapp integrates seamlessly, pulling real-time data to provide accurate forecasts.
        This integration is a significant advantage for businesses looking to eliminate manual data entry and reduce
        errors. However, if your accounting system is not supported, Floatapp may not be the right choice at this
        time.</p>
      <p className="text-md text-white shadow-text pt-3">
        As of October 20, 2026, Floatapp&#39;s&nbsp;<a id={`tools-accounting-spreadsheet-data-floatapp-evaluating-pricing-source${idSuffix}`} href="https://floatapp.com/pricing/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">pricing page</a>&nbsp;lists the Growth plan at $265 per
        month, or $215 per month billed annually, and the Scale plan at $389 per month, or $315 per month billed
        annually, with a 14-day free trial. It is important to consider the value it brings against its cost. For many businesses, the time saved and the reduction in errors
        justify the investment. Geek @ Your Spot LLC can help you assess whether Floatapp&#39;s capabilities align with
        your budget and operational goals.</p>
      <p className="text-md text-white shadow-text pt-3">
        In terms of scalability, Floatapp is well-suited for small to medium-sized businesses that require robust
        cash flow management. Its features, such as scenario planning and automation, provide the tools needed to
        manage complex financial situations effectively. If your business anticipates growth, Floatapp can scale
        with you, offering more advanced features as your needs evolve.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, the decision to implement Floatapp should consider the support and expertise available from Geek @ Your Spot LLC. Their guidance ensures that the tool is configured correctly and that your team is trained to use
        it effectively, maximizing the return on your investment. By leveraging their local expertise, you can
        ensure that Floatapp is not just a tool, but a strategic asset in your financial management toolkit.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-floatapp-fit-and-pricing-model">
                Evaluating Floatapp: Fit and Pricing Model
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-floatapp-fit-and-pricing-model-lg">
                Evaluating Floatapp: Fit and Pricing Model
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
