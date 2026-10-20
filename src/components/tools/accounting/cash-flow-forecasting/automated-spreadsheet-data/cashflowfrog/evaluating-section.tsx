import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Choosing the
        right&nbsp;<GlossaryLink slug="cash-flow-forecasting" className="text-[#0B162A] hover:underline">cash flow
        forecasting</GlossaryLink>&nbsp;tool involves evaluating its fit for your business size and needs, as well
        as understanding its pricing model. Cashflowfrog is designed to cater to small and medium-sized businesses,
        offering features that scale with your operations. It is essential to consider how its capabilities align
        with your current financial challenges and future growth plans.</p>
      <p className="text-md text-white shadow-text pt-3">
        Cashflowfrog&#39;s pricing model is straightforward, with a 14-day free trial available to new users. This
        allows businesses to explore its features without immediate financial commitment. The trial includes 1-on-1
        onboarding, which is particularly beneficial for small businesses that may not have extensive IT support.
        During this period, businesses can assess how well Cashflowfrog integrates with their existing systems and
        whether its features meet their forecasting needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        When evaluating Cashflowfrog, consider its ability to break down forecasts by vendor, customer, and
        department. This granularity is crucial for businesses that operate across multiple segments or locations,
        as it provides insights into specific areas of financial performance. Additionally, its scenario planning
        capabilities allow businesses to model different financial outcomes, helping them prepare for various market
        conditions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another factor to weigh is the integration capability with other financial tools. Cashflowfrog connects with
        popular accounting software like QuickBooks, Xero, and Zoho Books, which can streamline data flow and reduce
        manual entry errors. This integration is vital for maintaining real-time data accuracy and ensuring that
        forecasts reflect the most current financial information.</p>
      <p className="text-md text-white shadow-text pt-3">
        The decision to implement Cashflowfrog should also consider the support and resources available from Geek @ Your Spot LLC. Their expertise in configuring and optimizing the tool for your specific needs can significantly
        enhance its value. They provide ongoing support to address any issues and help maximize the return on your
        investment in Cashflowfrog. This partnership ensures that your business not only adopts a powerful
        forecasting tool but also leverages it effectively to drive financial clarity and strategic planning.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-cashflowfrog-fit-and-pricing-model">
                Evaluating Cashflowfrog: Fit and Pricing Model
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-cashflowfrog-fit-and-pricing-model">
                Evaluating Cashflowfrog: Fit and Pricing Model
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
