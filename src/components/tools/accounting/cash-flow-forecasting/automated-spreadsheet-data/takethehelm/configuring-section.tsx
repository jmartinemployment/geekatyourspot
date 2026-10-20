
export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Take the Helm offers a powerful suite of configuration options that enable small businesses to tailor
        their&nbsp;cash flow forecasting&nbsp;and
        management processes. At its core, Take the Helm allows users to set up specific forecasting rules and
        automation logic. These rules dictate how financial data is processed and presented, providing a
        customized experience that aligns with the unique needs of each business.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s configuration begins with its forecasting rules. Users can define how cash inflows
        and outflows are categorized and forecasted. This includes setting parameters for transaction amounts,
        dates, and recurrence. Businesses can also choose to include or exclude certain transactions from
        forecasts, ensuring that only relevant data is considered. This level of customization helps businesses
        maintain accurate and actionable cash flow projections.</p>
      <p className="text-md text-white shadow-text pt-3">
        Take the Helm&#39;s automation logic extends to scenario planning, which allows businesses to test various
        financial scenarios without altering their base data. This feature is crucial for businesses that need
        to anticipate the impact of potential changes in the market or their operations. By configuring
        different scenarios, businesses can visualize how changes in revenue or expenses might affect their cash
        flow, providing insights that inform strategic decisions.</p>
      <p className="text-md text-white shadow-text pt-3">
        For those concerned with&nbsp;accounts
        payable&nbsp;and receivable, Take the Helm offers tools to manage these transactions
        effectively. Users can automate the tracking of invoice timing, payment dates, and amounts, reducing the
        manual effort involved in managing these processes. This automation not only saves time but also
        minimizes the risk of errors, ensuring that financial records are always up-to-date.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC plays a pivotal role in configuring these elements for small businesses in South
        Florida. By understanding the specific needs and existing systems of a business, Geek @ Your Spot LLC can
        ensure that Take the Helm is set up to maximize efficiency and accuracy. This includes mapping data from
        existing systems into Take the Helm, integrating it with platforms like QuickBooks or Xero, and setting up
        the automation rules that align with the business&#39;s financial strategies.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="configuring-takethehelm-rules-and-automation">
                Configuring Take the Helm: Rules and Automation
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="configuring-takethehelm-rules-and-automation-lg">
                Configuring Take the Helm: Rules and Automation
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
