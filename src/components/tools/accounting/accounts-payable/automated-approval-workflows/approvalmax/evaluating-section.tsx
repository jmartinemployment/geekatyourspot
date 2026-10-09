import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When evaluating ApprovalMax for your business, consider how well it aligns with your current needs
        and future goals. ApprovalMax is particularly suited for small to medium-sized businesses looking to
        automate their approval workflows. This tool integrates seamlessly with major accounting platforms
        like Xero, QuickBooks Online, and Oracle NetSuite, providing robust capabilities for managing complex
        financial approval processes. The integration ensures that all approved documents are synchronized
        back into your accounting system, maintaining a complete audit trail and enhancing transparency and
        compliance.</p>
      <p className="text-md text-white shadow-text pt-3">
        ApprovalMax offers a flexible pricing model that caters to various business sizes and requirements.
        While specific pricing details are not publicly disclosed, ApprovalMax provides plans that
        include&nbsp;
        <GlossaryLink slug="api">API</GlossaryLink>&nbsp;integration, custom workflows, and premium support.
        Volume discounts are available, making it a cost-effective option for larger teams or those with
        extensive approval needs. Businesses should contact ApprovalMax directly to discuss their specific
        needs and obtain a tailored pricing plan.</p>
      <p className="text-md text-white shadow-text pt-3">
        When considering ApprovalMax, it&#39;s essential to weigh it against other automation tools like
        Ramp and Bill. Each of these tools offers unique features that might better suit different business
        models. For instance, Ramp provides real-time tracking and compliance checks, which might be more
        beneficial for businesses focused on financial oversight. On the other hand, Bill offers automated
        invoice routing and approval workflows that ensure efficiency and accuracy in processing
        invoices.</p>
      <p className="text-md text-white shadow-text pt-3">
        The decision to implement ApprovalMax should also consider the specific challenges your business
        faces. If your team is overwhelmed by the volume of invoices or if there are frequent delays in
        approvals, ApprovalMax&#39;s automated workflows could provide significant relief. It reduces manual
        errors by up to 80%, as demonstrated in the case of Paddle Australia, and frees up time for more
        strategic initiatives.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the choice of tool should align with your business&#39;s operational goals and budget.
        ApprovalMax&#39;s ability to streamline approval workflows, integrate with existing accounting
        systems, and offer customizable solutions makes it a strong contender for businesses looking to
        enhance their financial processes. However, it&#39;s crucial to evaluate the potential gains against
        the costs and disruption of implementation to ensure it delivers the desired return on
        investment.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-approvalmax-fit-and-pricing-considerations">
                Evaluating ApprovalMax: Fit and Pricing Considerations
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-approvalmax-fit-and-pricing-considerations">
                Evaluating ApprovalMax: Fit and Pricing Considerations
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
