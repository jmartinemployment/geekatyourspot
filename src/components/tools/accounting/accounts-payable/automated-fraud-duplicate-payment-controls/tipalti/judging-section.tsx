import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function JudgingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering Tipalti for Automated Fraud &amp; Duplicate Payment Controls, it&#39;s crucial to
        assess how well it aligns with your business needs. Tipalti is designed to streamline&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;processes by automating
        tasks that are typically manual and error-prone. This includes supplier onboarding, invoice processing,
        and payment reconciliation. For small businesses in Miami-Dade, Broward, and West Palm Beach counties,
        the key is to evaluate whether Tipalti&#39;s capabilities match your operational scale and
        complexity.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tipalti offers a comprehensive solution that integrates various functions into a single platform. This
        integration is particularly beneficial for businesses that handle a high volume of transactions and
        need to ensure compliance with international payment standards. The platform&#39;s&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>-driven features, such as the Duplicate Bill Detection Agent,
        enhance fraud controls by identifying anomalies early. This not only reduces the risk of fraud but also
        minimizes overpayments, safeguarding your financial operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing is a critical factor for small businesses. While specific pricing details for Tipalti are not
        provided in the research, it&#39;s important to weigh the cost against the potential savings from
        reduced errors and improved efficiency. Businesses should consider the total cost of ownership, which
        includes setup, integration, and ongoing support. Tipalti&#39;s ability to automate complex processes
        can lead to significant time savings, which is a tangible benefit that can offset initial investment
        costs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another consideration is the scalability of Tipalti. As your business grows, the platform can scale
        with you, accommodating more complex workflows and larger transaction volumes. This is particularly
        important for businesses planning to expand their operations or enter new markets. Tipalti&#39;s
        unified global infrastructure supports multi-currency transactions and compliance with local
        regulations, making it a viable option for businesses with international dealings.</p>
      <p className="text-md text-white shadow-text pt-3">
        Businesses evaluating Tipalti should also consider how it compares to other solutions in the market.
        While some platforms may offer lower upfront costs, they might not provide the same level of
        integration and automation. Tipalti&#39;s end-to-end automation and built-in compliance features set
        it apart by reducing the need for multiple third-party plugins, which can complicate processes and
        increase costs.</p>
      <p className="text-md text-white shadow-text pt-3">
        In conclusion, when judging Tipalti, focus on the alignment of its features with your business needs,
        the scalability of the platform, and the potential return on investment. While the initial cost might
        be a consideration, the long-term benefits of streamlined operations and reduced fraud risk can provide
        substantial value. For small businesses in the specified counties, Tipalti offers a robust solution to
        enhance financial operations and control.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="judging-tipalti-fit-and-pricing-considerations">
                Judging Tipalti: Fit and Pricing Considerations
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="judging-tipalti-fit-and-pricing-considerations">
                Judging Tipalti: Fit and Pricing Considerations
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
