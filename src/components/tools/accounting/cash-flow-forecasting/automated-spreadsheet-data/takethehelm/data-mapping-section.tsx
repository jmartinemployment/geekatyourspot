
export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Take the Helm successfully hinges on making informed decisions about data structure and mapping
        right from the start. This involves understanding how financial data flows through the system and
        ensuring that it aligns with the business&#39;s operational needs. The initial step is to map out the
        existing data structure, identifying key data points such as&nbsp;accounts payable&nbsp;and receivable, cash flow statements, and
        financial metrics.</p>
      <p className="text-md text-white shadow-text pt-3">
        The mapping process is crucial for ensuring that Take the Helm can accurately interpret and utilize the
        business&#39;s financial data. This involves setting up data connections with platforms like QuickBooks,
        Xero, and Sage, which Take the Helm integrates with seamlessly. By aligning the system&#39;s data
        structure with these platforms, businesses can ensure that their financial data is consistent, accurate,
        and up-to-date.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another important aspect of data mapping is defining the parameters for cash flow forecasts. Take the Helm
        allows businesses to customize their forecasts by selecting specific data points and timeframes. This
        flexibility enables users to tailor forecasts to their unique business needs, whether they require
        short-term projections or long-range planning. By setting these parameters correctly, businesses can
        gain valuable insights into their financial health and make informed decisions.</p>
      <p className="text-md text-white shadow-text pt-3">
        In addition to mapping financial data, businesses must also consider how Take the Helm will handle
        scenario planning. This feature allows users to create and compare multiple financial scenarios,
        providing a comprehensive view of potential outcomes. By mapping out different scenarios, businesses can
        test various strategies and identify the most effective approaches for managing their cash flow. This
        proactive planning capability is a key advantage of using Take the Helm, as it empowers businesses to
        navigate financial uncertainties with confidence.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, the data structure and mapping decisions should also take into account the need for ongoing
        data management and updates. As business conditions change, so too will the data inputs and assumptions
        used in cash flow forecasts. By establishing a robust data management framework, businesses can ensure
        that their financial data remains accurate and relevant, allowing Take the Helm to provide the insights
        needed for effective financial management.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-data-structure-and-mapping-decisions-for-takethehelm-deployment">
                Key Data Structure and Mapping Decisions for Take the Helm Deployment
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-data-structure-and-mapping-decisions-for-takethehelm-deployment-lg">
                Key Data Structure and Mapping Decisions for Take the Helm Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
