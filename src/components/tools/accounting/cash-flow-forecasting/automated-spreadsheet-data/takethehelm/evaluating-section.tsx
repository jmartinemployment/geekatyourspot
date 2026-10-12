import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering Takethehelm, small businesses should evaluate its fit based on their specific financial
        management needs and the platform&#39;s pricing model. Takethehelm is designed to
        streamline&nbsp;<GlossaryLink slug="cash-flow-forecasting" className="text-[#0B162A]
        hover:underline">cash flow forecasting</GlossaryLink>&nbsp;and management, making it a suitable choice
        for businesses that require robust financial insights without the complexity of traditional systems.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the primary considerations is the platform&#39;s integration capabilities. Takethehelm seamlessly
        connects with popular accounting software like QuickBooks, Xero, and Sage. This integration ensures that
        businesses can easily sync their existing financial data with Takethehelm, minimizing the need for
        manual data entry and reducing the potential for errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another factor to consider is the scalability of Takethehelm. As businesses grow, their financial
        management needs become more complex. Takethehelm&#39;s flexible configuration options allow it to scale
        alongside a business, adapting to new requirements and expanding its capabilities as needed. This makes
        it a long-term solution for businesses planning for growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing is another crucial aspect. While specific pricing details are not provided in the available
        data, businesses should consider the overall value that Takethehelm offers. This includes the time saved
        through automation, the reduction in errors, and the improved financial insights that can lead to better
        business decisions. When evaluating the cost, it&#39;s important to weigh these benefits against the
        platform&#39;s pricing model to determine its overall value.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, the support and implementation services provided by Geek @ Your Spot are invaluable. Their
        expertise in deploying Takethehelm ensures that the platform is configured to meet the unique needs of
        each business. This support can be a deciding factor for businesses that lack the internal resources to
        manage such implementations on their own. By choosing Geek @ Your Spot, businesses can leverage their
        local expertise to ensure a smooth transition to automated cash flow management.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-takethehelm-fit-and-pricing-considerations">
                Evaluating Takethehelm: Fit and Pricing Considerations
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-takethehelm-fit-and-pricing-considerations">
                Evaluating Takethehelm: Fit and Pricing Considerations
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
