import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing Cashflowfrog in your business environment is a straightforward process, especially when you
        leverage its pre-built connectors and templated setups. These elements significantly shorten the go-live
        timeline, allowing your team to start using the tool effectively without extensive downtime. The
        implementation follows a phased rollout, ensuring each step is manageable and aligned with your existing
        systems.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first phase involves the integration of Cashflowfrog with your existing accounting software. This is
        facilitated by its compatibility with platforms like QuickBooks, Xero, and Zoho Books. The seamless
        connection means that your financial data is pulled directly into Cashflowfrog, eliminating the need for
        manual data entry and reducing the risk of errors. This integration is not only quick but also ensures that
        your financial forecasts are built on real-time data, enhancing accuracy and reliability.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the integration is complete, the next step is configuring the system to reflect your business&#39;s
        unique needs. This includes setting up custom tracking categories, which allow you to break down forecasts
        by vendor, customer, and department. This level of customization is crucial for businesses that need
        detailed insights into specific segments of their operations. By using Cashflowfrog&#39;s intuitive
        interface, these configurations can be adjusted with minimal technical expertise, making the tool accessible
        to small business owners without a dedicated IT team.</p>
      <p className="text-md text-white shadow-text pt-3">
        The final phase of the implementation is the training and onboarding of your team. Cashflowfrog provides
        one-on-one onboarding sessions as part of its 14-day free trial, ensuring that your staff is well-equipped
        to use the software effectively from day one. This training focuses on key features such as scenario
        planning and drill-down capabilities, empowering your team to leverage the full potential of Cashflowfrog
        for strategic decision-making.</p>
      <p className="text-md text-white shadow-text pt-3">
        Overall, the implementation of Cashflowfrog is designed to be as seamless as possible, with each phase
        building on the last to create a robust&nbsp;<GlossaryLink slug="cash-flow-forecasting">cash flow
        forecasting</GlossaryLink>&nbsp;system. By the end of the process, your business will have a powerful tool
        that not only simplifies financial forecasting but also enhances your ability to make informed, data-driven
        decisions.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="streamlining-cashflowfrog-implementation">
                Streamlining Cashflowfrog Implementation
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="streamlining-cashflowfrog-implementation">
                Streamlining Cashflowfrog Implementation
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
