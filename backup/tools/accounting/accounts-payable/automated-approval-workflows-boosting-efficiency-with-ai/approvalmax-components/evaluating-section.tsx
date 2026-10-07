export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering ApprovalMax for automating your accounts payable processes, there are key factors to
        weigh. ApprovalMax is designed to streamline approval workflows, offering features like multi-level
        and customizable approval processes. This flexibility allows businesses to tailor the system to their
        specific needs, whether it involves purchase orders, vendor bills, or expense reports.</p>
      <p className="text-md text-white shadow-text pt-3">
        ApprovalMax integrates seamlessly with major accounting platforms such as Xero, QuickBooks Online,
        and Oracle NetSuite. This integration ensures that approved documents are synchronized back into your
        accounting system with a complete audit trail, enhancing transparency and compliance. This feature is
        particularly beneficial for businesses that require rigorous financial controls and clear audit
        trails.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing for ApprovalMax is not explicitly detailed in the available data, but the platform does offer
        plans that include API integration, custom workflows, and premium support. Businesses should consider
        their specific needs and evaluate how these features align with their operational goals. Volume
        discounts are also available, which can be a cost-effective option for larger teams or those with
        extensive approval needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        In terms of adjacent approaches, businesses may also be considering manual approval processes or
        other automation tools. Manual processes often lead to inefficiencies, such as delayed approvals and
        increased errors. On the other hand, ApprovalMax automates these processes, reducing manual errors by
        up to 80%, as demonstrated in the case of Paddle Australia.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        Approval rules live in the workflow, not a policy document.</p>
      <p className="text-md text-white shadow-text pt-3">
        This embedded approach to approval rules means that the system enforces compliance consistently,
        without the need for manual oversight. This can be a significant advantage for businesses looking to
        minimize human intervention and ensure that all approvals adhere to company policies.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-approvalmax-for-your-business-needs">
                Evaluating ApprovalMax for Your Business Needs
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-approvalmax-for-your-business-needs">
                Evaluating ApprovalMax for Your Business Needs
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
