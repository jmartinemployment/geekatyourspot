import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Choosing the right tool for Automated Approval Workflows involves understanding Melio&#39;s fit for
        your business. Melio is designed specifically for US businesses, offering end-to-end&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;automation. It simplifies
        the approval process by routing invoices automatically, reducing the need for manual follow-ups. This
        automation is crucial for businesses looking to minimize errors and streamline operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Melio&#39;s pricing model is flexible, accommodating various payment methods like ACH, card, and wire
        transfers. While specific pricing details are not provided, the platform&#39;s flexibility suggests it
        can adapt to different business scales and needs. This flexibility is particularly beneficial for
        small to medium-sized enterprises that require scalable solutions without a hefty upfront investment.
        By automating tasks and reducing manual intervention, Melio can help lower operational costs over
        time.</p>
      <p className="text-md text-white shadow-text pt-3">
        When considering adjacent approaches, businesses might also evaluate other tools like ApprovalMax,
        Ramp, and Bill. Each of these tools offers unique features that could complement or compete with
        Melio. For instance, ApprovalMax provides multi-level and customizable approval processes, which can
        be a significant advantage for businesses with complex approval hierarchies. Ramp offers real-time
        tracking and compliance checks, enhancing visibility and control over financial operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, Melio stands out with its quick setup and integration capabilities. It syncs seamlessly with
        QuickBooks Online, eliminating the risk of human errors in data entry. This integration ensures that
        businesses can maintain accurate records without additional manual effort. The ability to automate
        invoice processing and approval workflows means businesses can save hours each week, allowing staff
        to focus on more strategic tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, when evaluating Melio for Automated Approval Workflows, consider its adaptability to your
        existing systems, the potential cost savings, and the time it can save your team. The platform&#39;s
        ability to automate and streamline processes makes it a strong contender for businesses looking to
        enhance their accounts payable operations. While other tools might offer similar features,
        Melio&#39;s comprehensive approach to automation and integration could provide the edge your business
        needs.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-melio-for-your-business-needs">
                Evaluating Melio for Your Business Needs
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-melio-for-your-business-needs">
                Evaluating Melio for Your Business Needs
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
