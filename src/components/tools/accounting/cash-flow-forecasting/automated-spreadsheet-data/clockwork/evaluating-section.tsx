export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering Clockwork for your business, it&#39;s crucial to evaluate its fit and pricing model to
        ensure it aligns with your financial forecasting needs. Clockwork is designed to cater to small and
        medium-sized businesses, accounting firms, and fractional CFOs. Its pricing structure is transparent, with
        rates clearly published, making it easier for businesses to plan their budgets without unexpected costs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Clockwork&#39;s pricing model is tiered, offering different levels of service to match the complexity and
        needs of your business. The &#39;Predict&#39; plan starts at $599 per month, providing essential forecasting
        capabilities. For more advanced features, businesses can opt for higher tiers such as &#39;Advance&#39; or
        &#39;Ultimate,&#39; which offer additional functionalities like more detailed financial modeling and
        scenario planning. This tiered approach allows businesses to choose a plan that fits their specific
        requirements and budget constraints.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another factor to consider is how Clockwork integrates with your existing systems. Its seamless integration
        with QuickBooks and Xero is a significant advantage, as it ensures that your financial data is always
        up-to-date and accurate. This integration reduces the need for manual data entry and helps maintain
        consistency across your financial reports. For businesses already using these platforms, Clockwork offers a
        natural extension of their capabilities.</p>
      <p className="text-md text-white shadow-text pt-3">
        The fit of Clockwork also depends on the specific needs of your financial team. If your team struggles with
        manual spreadsheet management and needs a tool that automates forecasting, Clockwork is an ideal choice. It
        not only automates the generation of cash flow forecasts but also provides real-time insights, allowing your
        team to focus on strategic analysis rather than data entry.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the decision to implement Clockwork should be based on its ability to simplify your financial
        processes and enhance decision-making. Geek @ Your Spot plays a crucial role in this evaluation process by
        providing expert guidance on how to configure Clockwork to meet your unique business needs. By understanding
        your specific challenges and goals, they ensure that Clockwork is set up to deliver the maximum benefit to
        your organization.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-clockwork-fit-and-pricing-model">
                Evaluating Clockwork: Fit and Pricing Model
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-clockwork-fit-and-pricing-model">
                Evaluating Clockwork: Fit and Pricing Model
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
