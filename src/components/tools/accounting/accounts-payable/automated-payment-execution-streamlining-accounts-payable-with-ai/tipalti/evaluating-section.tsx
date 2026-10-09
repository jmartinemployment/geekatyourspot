export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Choosing the right tool for Automated Payment Execution involves examining how well Tipalti fits your
        business needs. Tipalti excels in automating accounts payable, offering a significant reduction in
        manual workload. For small businesses, this means fewer errors and faster processing times. The
        platform integrates seamlessly with existing systems like QuickBooks Online, making it a strong
        candidate if you already use such tools. Its ability to handle multi-currency transactions also makes
        it ideal for businesses dealing with international suppliers.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tipalti&#39;s pricing model is based on a SaaS subscription with a monthly fee, as noted in its
        integration with QuickBooks. This structure allows businesses to scale their use of the platform as
        they grow, without the need for large upfront investments. For small businesses, this can translate
        into predictable budgeting and cost management. However, if your business processes a high volume of
        transactions, it&#39;s important to weigh these costs against potential savings from reduced manual
        labor and improved efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        When considering Tipalti, also weigh its fit against other platforms. Competitors like AvidXchange and
        Bill offer similar services, but Tipalti stands out with its extensive support for over 200 countries
        and 120 currencies, which is crucial for businesses with a global reach. Its compliance features, such
        as automated tax form collection, further enhance its appeal by reducing the risk of regulatory
        penalties.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another aspect to consider is how Tipalti&#39;s features align with your business operations. Its
        automation of supplier onboarding and payment reconciliation can free up significant time for your
        finance team, allowing them to focus on strategic activities rather than administrative tasks. This
        capability is particularly beneficial for small businesses with limited staff, where every minute saved
        can be redirected towards growth activities.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the decision to adopt Tipalti should be based on a careful assessment of your current
        processes and future needs. Consider the potential for reduced errors, faster payment cycles, and
        improved supplier relationships. If these align with your goals, Tipalti could be a valuable addition
        to your financial operations, providing both immediate and long-term benefits.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-tipalti-fit-and-pricing-considerations">
                Evaluating Tipalti: Fit and Pricing Considerations
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-tipalti-fit-and-pricing-considerations">
                Evaluating Tipalti: Fit and Pricing Considerations
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
