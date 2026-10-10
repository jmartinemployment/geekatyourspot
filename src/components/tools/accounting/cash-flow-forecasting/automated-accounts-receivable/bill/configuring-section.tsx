import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Bill offers a robust configuration environment that allows businesses to tailor approval chains and routing
        to their specific needs. This is crucial for small businesses in South Florida aiming to streamline their
        automated accounts receivable processes. Approval chains in Bill can be set up to ensure that invoices are
        reviewed by the right people at each stage, minimizing errors and ensuring compliance with internal
        policies. This flexibility allows businesses to define who needs to approve what and when, based on criteria
        such as invoice amount or vendor type.</p>
      <p className="text-md text-white shadow-text pt-3">
        Routing in Bill is equally customizable. Businesses can automate the flow of invoices through different
        departments, ensuring that each invoice reaches the appropriate decision-maker without unnecessary delays.
        This not only speeds up the approval process but also reduces the manual intervention required, freeing up
        valuable time for staff to focus on more strategic tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation logic in Bill extends beyond simple routing. Businesses can set up rules that trigger specific
        actions based on predefined conditions. For example, if a payment is overdue, Bill can automatically send a
        reminder to the client. Similarly, if an invoice exceeds a certain threshold, it can be flagged for
        additional review. These automated workflows reduce the risk of human error and ensure that critical tasks
        are never overlooked.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bill&#39;s extension mechanism further enhances its configurability. While it does not offer a
        traditional&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;or SDK, it provides integration
        capabilities with popular accounting software such as QuickBooks, Xero, and Oracle NetSuite. This means
        businesses can seamlessly sync their financial data across platforms, ensuring consistency and accuracy.
        Geek @ Your Spot specializes in setting up these integrations, ensuring that Bill works smoothly within your
        existing tech stack.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses unsure about handling these configurations themselves, Geek @ Your Spot offers expert
        guidance. They help assess your current processes, identify areas for automation, and configure Bill to
        align with your business goals. This tailored approach not only optimizes Bill&#39;s functionality but also
        ensures that your team is trained to leverage its full potential, making the transition to automated
        accounts receivable as smooth as possible.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="configuring-approval-chains-and-automation-in-bill">
                Configuring Approval Chains and Automation in Bill
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="configuring-approval-chains-and-automation-in-bill">
                Configuring Approval Chains and Automation in Bill
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
