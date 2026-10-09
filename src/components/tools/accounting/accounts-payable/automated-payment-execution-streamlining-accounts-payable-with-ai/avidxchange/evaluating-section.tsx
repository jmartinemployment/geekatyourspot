export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering AvidXchange for Automated Payment Execution, small businesses need to weigh fit,
        pricing, and alternative approaches. AvidXchange is designed to streamline accounts payable processes
        by automating payment workflows, reducing manual work, and enhancing efficiency. This platform suits
        businesses seeking to eliminate the inefficiencies of manual payment processes, such as printing
        checks and managing paper invoices.</p>
      <p className="text-md text-white shadow-text pt-3">
        AvidXchange supports multiple payment methods, including virtual cards, AvidPay Direct, and checks,
        allowing suppliers to choose their preferred method. This flexibility reduces payment delays and
        improves supplier relationships. For businesses that rely heavily on supplier satisfaction, this
        feature is a significant advantage. The platform&#39;s ability to integrate with existing accounting
        systems ensures that businesses maintain control over their financial data while automating payment
        processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing for AvidXchange varies based on the payment method. For instance, virtual card payments incur
        standard processing fees, while AvidPay Direct involves a small, capped fee. Check payments remain
        free for vendors. Understanding these costs is crucial for businesses to evaluate the financial impact
        of adopting AvidXchange. The pricing model is transparent, with fees disclosed during enrollment,
        aiding in financial planning.</p>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses should also consider the integration capabilities of AvidXchange. The platform
        offers extensive integrations with popular accounting systems like QuickBooks and NetSuite, enabling
        seamless data flow and reducing the need for manual data entry. This integration capability is vital
        for businesses seeking to maintain accurate financial records while automating their payment
        processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        While AvidXchange offers robust payment automation features, businesses should weigh it against other
        solutions like Melio and Tipalti. Each platform has unique strengths, such as Melio&#39;s ease of use
        for smaller teams and Tipalti&#39;s extensive global payment capabilities. AvidXchange stands out for
        its comprehensive integration options and supplier-focused features, making it a strong contender for
        businesses prioritizing supplier relationships and workflow efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the decision to implement AvidXchange should be based on a thorough evaluation of its fit
        within your business&#39;s existing systems and processes. Consider the time savings, error
        reduction, and improved supplier relationships that AvidXchange can offer. By comparing these benefits
        with the costs and features of alternative solutions, small businesses can make an informed decision
        that aligns with their operational goals.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-avidxchange-for-your-business">
                Evaluating AvidXchange for Your Business
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-avidxchange-for-your-business">
                Evaluating AvidXchange for Your Business
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
