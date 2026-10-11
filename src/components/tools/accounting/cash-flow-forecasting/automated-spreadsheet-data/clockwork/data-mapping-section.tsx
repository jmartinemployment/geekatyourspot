import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Clockwork involves crucial decisions about data structure and mapping, which are foundational to
        its effective operation. At the outset, ensuring that your chart of accounts is accurately mapped is vital.
        Clockwork&#39;s integration with systems like QuickBooks and Xero allows it to automatically map your
        accounts, but initial verification and adjustments may be necessary to align with your specific financial
        reporting needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another critical decision involves defining the drivers for your financial models. These drivers include
        elements such as headcount, pricing, and payment timing, which are essential for creating accurate
        forecasts. By setting these parameters correctly, Clockwork can generate reliable models that reflect the
        real dynamics of your business.</p>
      <p className="text-md text-white shadow-text pt-3">
        The setup also requires attention to how non-financial data is integrated. Clockwork allows you to import
        datasets that live outside traditional financial systems, such as sales pipelines and product details. This
        capability expands the scope of your financial models, providing a more comprehensive view of business
        performance.</p>
      <p className="text-md text-white shadow-text pt-3">
        It&#39;s also important to establish custom cash timing rules during the setup phase. These rules determine
        how financial projections impact cash flow forecasts, allowing for precise financial planning. By
        customizing these settings, you ensure that Clockwork&#39;s forecasts align closely with your actual cash
        flow patterns.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, consider the role of&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>-driven insights in your data
        mapping strategy. Clockwork&#39;s AI analyst, Mira, provides variance commentary and flags anomalies,
        turning raw data into actionable insights. Ensuring that your data structure supports these AI capabilities
        is key to unlocking the full potential of Clockwork&#39;s forecasting tools.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-data-structure-and-mapping-decisions-for-clockwork-deployment">
                Key Data Structure and Mapping Decisions for Clockwork Deployment
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-data-structure-and-mapping-decisions-for-clockwork-deployment">
                Key Data Structure and Mapping Decisions for Clockwork Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
