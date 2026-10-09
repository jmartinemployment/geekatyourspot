import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Bill transforms the traditionally cumbersome process of managing&nbsp;
        <GlossaryLink slug="accounts-payable" className="text-[#0B162A] hover:underline">accounts payable</GlossaryLink>&nbsp;into
        a streamlined operation through its robust architecture. At the heart of Bill&#39;s platform is its&nbsp;
        <GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>-driven capabilities
        that automate key tasks, reducing manual intervention and minimizing errors. This system not only
        processes invoices but also performs critical functions like invoice matching and purchase order
        verification. Such features ensure that duplicate payments are flagged before they occur, safeguarding
        your business against unnecessary financial losses. By automating these processes, Bill allows your
        team to focus on more strategic tasks rather than getting bogged down with repetitive manual work.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bill&#39;s architecture is designed to integrate seamlessly with popular accounting software like
        QuickBooks and Xero. This integration ensures that your general ledger is always up-to-date, reflecting
        real-time financial data without the need for manual input. Such connectivity is crucial for
        maintaining accurate financial records and provides a single source of truth for all payment-related
        activities. With these integrations, businesses can avoid the pitfalls of data discrepancies and ensure
        that their financial operations run smoothly.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another standout feature of Bill is its customizable approval workflows. These workflows allow
        businesses to set specific rules for invoice approvals, ensuring that every transaction is reviewed and
        authorized according to company policies. This not only enhances security but also speeds up the
        approval process, reducing the time invoices spend waiting for approval. The ability to configure these
        workflows to match your business&#39;s unique needs means that you can maintain control over your
        financial processes without compromising on efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bill&#39;s AI capabilities extend to its expense management features as well. By auto-categorizing
        transactions and analyzing payment histories, Bill helps reduce the time spent on reconciliation while
        improving accuracy. This automation is particularly beneficial for small businesses that may not have
        the resources to dedicate full-time staff to manage these tasks. By leveraging AI, Bill minimizes the
        risk of human error and ensures that financial records are consistently accurate.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security is a paramount concern for any financial system, and Bill addresses this with robust fraud
        prevention measures. The platform uses predictive AI to monitor transactions in real-time, detecting
        and flagging suspicious activities before they can impact your business. This proactive approach to
        security not only protects your financial data but also provides peace of mind knowing that your
        accounts payable processes are safeguarded against potential threats.</p>
      <p className="text-md text-white shadow-text pt-3">
        In addition to these features, Bill also offers a comprehensive audit trail for all transactions. Every
        action taken within the platform is logged and time-stamped, creating a detailed record that is
        invaluable for audits and compliance purposes. This transparency ensures that you can track every
        payment from initiation to completion, providing a clear picture of your financial activities at all
        times.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-bills-architecture-streamlines-accounts-payable">
                How Bill&#39;s Architecture Streamlines Accounts Payable
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-bills-architecture-streamlines-accounts-payable">
                How Bill&#39;s Architecture Streamlines Accounts Payable
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
