import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Stampli revolutionizes the traditional&nbsp;
        <GlossaryLink slug="accounts-payable" className="text-[#0B162A] hover:underline">accounts payable</GlossaryLink>&nbsp;process
        with its robust architecture designed for Automated Approval Workflows. At its core, Stampli
        integrates seamlessly with existing&nbsp;
        <GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;systems,
        eliminating the need for extensive manual data entry. This integration ensures that purchase orders
        and invoices are automatically routed to the correct approvers, reducing the risk of errors and
        delays.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s predefined approval routing is a standout feature. It automatically directs
        procurement documents to the appropriate reviewers based on business rules and spending authority.
        This means your team no longer has to manually track who needs to approve what, saving countless hours
        each week. Moreover, Stampli&#39;s structured approval workflows for corporate card issuance and spend
        limit changes ensure that all financial activities are documented and authorized properly.</p>
      <p className="text-md text-white shadow-text pt-3">
        Stampli also excels in automating the generation of predictable vendor invoices. By setting defined
        schedules, the platform maintains approval workflows and ERP validation, ensuring systematic control
        over your accounts payable. This automation not only speeds up the approval process but also reduces
        the administrative burden on your staff, allowing them to focus on more strategic tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of Stampli&#39;s most advanced features is its dynamic approval workflows. These workflows adapt to
        changes in your business processes without requiring IT intervention or custom code. This flexibility
        is crucial for small businesses that need to scale their operations without the hassle of constant IT
        support. Stampli leverages machine learning to make workflows smarter, suggesting approvers for
        invoices and reducing the time your AP team spends on manual tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Additionally, Stampli provides configurable invoice approval routing with sequential chains and
        authority controls. This feature allows for mobile actions and audit trails, giving your AP teams the
        tools they need to manage approvals efficiently from anywhere. By centralizing communication and
        streamlining approval processes, Stampli significantly reduces the time and headaches associated with
        manual approval workflows.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses dealing with high volumes of invoices, Stampli&#39;s automated routing and reminders
        ensure that no invoice is forgotten. If an approver is unavailable, the system can easily modify the
        routing to accommodate changes, ensuring that approvals continue without interruption. This capability
        is particularly beneficial for businesses experiencing rapid growth or those with complex approval
        hierarchies.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="stamplis-architecture-and-workflow-mechanics">
                Stampli&#39;s Architecture and Workflow Mechanics
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="stamplis-architecture-and-workflow-mechanics">
                Stampli&#39;s Architecture and Workflow Mechanics
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
