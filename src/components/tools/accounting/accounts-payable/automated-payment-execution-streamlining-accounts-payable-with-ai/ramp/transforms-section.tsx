import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Ramp revolutionizes Automated Payment Execution by removing the burdens that typically bog down small
        business finance teams. The platform automates the entire accounts payable process, from invoice
        receipt to payment execution, drastically reducing the time and effort required to manage these tasks.
        By eliminating manual data entry and repetitive tasks, Ramp allows your team to focus on strategic
        initiatives that drive business growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of Ramp&#39;s standout features is its ability to automatically code and match invoices with
        purchase orders. This ensures that every transaction is accurately recorded without manual
        intervention, reducing errors and enhancing the accuracy of your financial records. The
        platform&#39;s&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>-powered tools analyze historical coding patterns and invoice
        details to map expenses to the correct general ledger codes instantly. This capability not only speeds
        up the reconciliation process but also ensures compliance and reduces the risk of fraud.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ramp&#39;s automated workflows further streamline the approval process. By routing invoices and
        expense requests to the appropriate approvers, the platform reduces approval times and minimizes the
        risk of unauthorized spending. Notifications and automated reminders ensure that approvals are timely,
        which helps in maintaining cash flow and avoiding late payment fees. The real-time tracking of
        invoices from receipt through payment provides transparency and control over the entire payment
        process.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform also offers flexible payment options, allowing you to pay vendors via ACH, corporate
        card, check, or wire transfer. This flexibility means you can choose the most cost-effective and
        efficient method for each transaction, optimizing your cash flow and reducing transaction costs.
        Ramp&#39;s batch payment feature lets you process multiple vendor payments in a single transaction,
        cutting down on transaction fees and simplifying reconciliation.</p>
      <p className="text-md text-white shadow-text pt-3">
        By transforming Automated Payment Execution into a seamless, touchless process, Ramp not only saves
        time but also enhances the accuracy and reliability of your financial operations. The platform&#39;s
        integration capabilities ensure that all financial data is synced with your existing accounting
        systems, providing a comprehensive view of your financial health. With Ramp, you gain a powerful tool
        that not only automates routine tasks but also empowers your team to focus on strategic
        decision-making.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-ramp-transforms-automated-payment-execution">
                How Ramp Transforms Automated Payment Execution
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-ramp-transforms-automated-payment-execution">
                How Ramp Transforms Automated Payment Execution
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
