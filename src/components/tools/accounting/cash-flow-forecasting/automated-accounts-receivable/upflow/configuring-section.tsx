import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Upflow&#39;s configuration is a critical step in optimizing your automated accounts receivable management.
        By setting up approval chains, routing logic, and automation, businesses can streamline their invoicing and
        collections processes. This section explores how Geek @ Your Spot customizes Upflow to fit the unique needs
        of small businesses in Miami-Dade, Broward, and West Palm Beach counties.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval chains in Upflow allow businesses to automate the routing of invoices through the necessary stages
        of approval. This means that invoices are automatically sent to the right person based on pre-defined
        criteria, such as invoice amount or department. By doing so, Upflow reduces manual oversight and speeds up
        the approval process, ensuring that invoices do not get stuck in bottlenecks. Geek @ Your Spot configures
        these chains to reflect each client&#39;s internal hierarchy and approval thresholds, allowing for a
        seamless flow of documents.</p>
      <p className="text-md text-white shadow-text pt-3">
        Routing logic is another powerful feature of Upflow. It dictates how invoices and payment reminders are
        directed through the system. By automating this process, Upflow ensures that reminders reach the right
        contacts at the right time, reducing the risk of missed payments. Geek @ Your Spot tailors this logic to
        match the business&#39;s customer relationship management strategy, ensuring that communications are
        consistent with the company&#39;s brand voice and customer expectations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation logic in Upflow handles repetitive tasks, freeing up valuable time for finance teams. By
        automating follow-up emails, payment reminders, and escalation processes, Upflow minimizes the manual
        workload associated with automated accounts receivable. Geek @ Your Spot sets up these automations to run on
        a schedule that aligns with the business&#39;s cash flow needs, ensuring timely collections without
        overburdening the team.</p>
      <p className="text-md text-white shadow-text pt-3">
        Upflow&#39;s extension mechanism is limited to configuration, meaning that it does not offer
        an&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;or SDK for custom development. However, its robust
        integration capabilities with major ERPs like NetSuite and QuickBooks ensure that it fits seamlessly into
        existing financial systems. Geek @ Your Spot leverages these integrations to provide a comprehensive
        solution that addresses all aspects of accounts receivable management.</p>
      <p className="text-md text-white shadow-text pt-3">
        By configuring Upflow to automate and streamline accounts receivable processes, Geek @ Your Spot helps small
        businesses manage their cash flow more effectively. This not only reduces the administrative burden on
        finance teams but also improves the predictability of cash inflows, enabling businesses to focus on growth
        and strategic initiatives.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="configuring-upflow-for-effective-accounts-receivable-management">
                Configuring Upflow for Effective Accounts Receivable Management
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="configuring-upflow-for-effective-accounts-receivable-management">
                Configuring Upflow for Effective Accounts Receivable Management
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
