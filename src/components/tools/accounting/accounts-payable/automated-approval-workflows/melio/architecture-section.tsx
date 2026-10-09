import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Melio transforms the&nbsp;
        <GlossaryLink slug="accounts-payable" className="text-[#0B162A] hover:underline">accounts payable</GlossaryLink>&nbsp;process
        by automating approval workflows, which removes the manual chasing of approvals and reduces the risk
        of errors. Designed specifically for US businesses, Melio&#39;s platform routes invoices to the right
        approvers based on predefined rules, such as amount thresholds or specific vendors. This automation
        ensures that routine payments, like a $200 software renewal, proceed without unnecessary delays, while
        larger invoices, such as a $40,000 infrastructure bill, receive the requisite attention.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core of Melio’s architecture lies in its ability to set up customizable approval rules once,
        allowing the system to automatically route each bill to the appropriate approver. This capability is
        particularly beneficial for distributed teams, as it eliminates the need for constant follow-ups via
        email or Slack. For instance, a tech startup can configure its workflow so that approvals occur
        seamlessly, regardless of team members being in different time zones.</p>
      <p className="text-md text-white shadow-text pt-3">
        Melio&#39;s quick setup is another standout feature. Businesses can integrate their bank accounts and
        establish approval levels in minutes, not weeks. This rapid deployment is crucial for small businesses
        that cannot afford lengthy implementation periods. The platform is built to handle everything from
        invoice receipt to payment and recording, providing end-to-end coverage of the accounts payable
        workflow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Additionally, Melio offers powerful cash flow management capabilities. By providing real-time
        visibility into pending payments and cash flow status, businesses can make informed decisions about
        when to pay vendors. This feature helps maintain strong vendor relationships and prevents cash flow
        disruptions. Furthermore, Melio’s automated tasks and streamlined workflows minimize human error and
        increase operational efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security is another integral part of Melio&#39;s architecture. The platform supports digital trails
        and workflows, which enhance compliance and reduce the risk of fraud. Businesses can assign roles and
        permissions to digitize their approval processes, ensuring that all actions are traceable and
        auditable. This level of control is essential for maintaining compliance with industry standards and
        audit requirements.</p>
      <p className="text-md text-white shadow-text pt-3">
        Melio&#39;s integration with QuickBooks Online further enhances its functionality. This sync automates
        the process of entering payment information, increasing accuracy and eliminating the potential for
        human error. By automating invoice processing, Melio saves businesses hours each week, allowing them to
        focus on more strategic tasks rather than mundane data entry. This integration is a key component of
        Melio’s value proposition, providing a seamless experience for users who rely on QuickBooks for their
        accounting needs.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="melios-architecture-and-workflow-automation">
                Melio&#39;s Architecture and Workflow Automation
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="melios-architecture-and-workflow-automation">
                Melio&#39;s Architecture and Workflow Automation
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
