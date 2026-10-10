import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Versapay&#39;s configuration capabilities allow small businesses to tailor the platform to their specific
        accounts receivable needs. At the core of this customization is the ability to set up approval chains and
        routing paths that streamline the payment process. Businesses can define who needs to approve invoices at
        each stage, ensuring that payments are processed only after the necessary checks are completed. This not
        only reduces errors but also speeds up the overall workflow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Routing within Versapay is designed to be intuitive and flexible. It allows payments and invoices to be
        directed automatically to the appropriate team members based on predefined criteria. For example, invoices
        above a certain amount can be routed to senior management for approval, while smaller amounts might be
        handled by junior staff. This ensures that all payments are handled with the appropriate level of scrutiny
        without unnecessary delays.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation logic in Versapay is another powerful feature that eliminates manual intervention in repetitive
        tasks. Businesses can automate actions such as sending reminders for overdue invoices or triggering
        follow-ups on unpaid bills. This logic can be configured to handle exceptions as well, such as flagging
        discrepancies between invoice amounts and received payments for further review. By automating these
        processes, businesses can significantly reduce the time spent on routine tasks and focus on more strategic
        activities.</p>
      <p className="text-md text-white shadow-text pt-3">
        Versapay extends its functionality through seamless integration with
        existing&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;systems,
        using&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;connectors. This integration ensures that all
        data flows smoothly between systems, maintaining a single source of truth. While Versapay does not offer a
        scripting or SDK extension mechanism, its configurability and integration capabilities are robust enough to
        meet the needs of most small businesses without additional coding.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot plays a crucial role in configuring Versapay for local businesses. They help set up these
        approval chains, routing paths, and automation logic to align with each client&#39;s unique operational
        requirements. This includes mapping out the necessary workflows and ensuring that all integrations are
        correctly implemented. By doing so, Geek @ Your Spot ensures that Versapay operates efficiently within the
        existing business environment, maximizing the platform&#39;s potential to improve cash flow and reduce
        errors.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="configuring-versapay-approval-chains-routing-and-automation-logic">
                Configuring Versapay: Approval Chains, Routing, and Automation Logic
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="configuring-versapay-approval-chains-routing-and-automation-logic">
                Configuring Versapay: Approval Chains, Routing, and Automation Logic
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
