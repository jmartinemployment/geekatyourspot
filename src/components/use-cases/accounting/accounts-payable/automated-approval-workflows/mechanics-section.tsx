import Link from "next/link";

export default function MechanicsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Automated approval workflows transform the accounts payable process by using technology to streamline
        each stage, from invoice receipt to payment. The process typically begins with the electronic capture
        of invoices, using tools like&nbsp;
        <Link id="use-cases-accounting-automated-approval-workflows-mechanics-approvalmax"
          href="/tools/accounting/accounts-payable/approvalmax" className="text-[#C83803] hover:underline">
          ApprovalMax
        </Link>&nbsp;or&nbsp;
        <Link id="use-cases-accounting-automated-approval-workflows-mechanics-ramp"
          href="/tools/accounting/accounts-payable/ramp" className="text-[#C83803] hover:underline">
          Ramp
        </Link>. These tools use features like optical character recognition (OCR) to extract invoice data
        automatically, reducing the need for manual entry and minimizing errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the invoice data is captured, the workflow software assigns the invoice to the appropriate
        approver based on predefined rules. These rules can be customized to match the organization&#39;s
        unique approval hierarchy and spending policies. For instance, invoices below a certain amount might
        require a single approver, while larger invoices could need multiple levels of authorization. This
        ensures that every invoice follows the correct path without manual intervention.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout the approval process, automated reminders and notifications keep the workflow moving
        forward, reducing the likelihood of bottlenecks caused by human delay. If an approver is unavailable,
        the system can automatically reassign the task to another qualified individual, ensuring continuity.
        Additionally, platforms like&nbsp;
        <Link id="use-cases-accounting-automated-approval-workflows-mechanics-tipalti"
          href="/tools/accounting/accounts-payable/tipalti" className="text-[#C83803] hover:underline">
          Tipalti
        </Link>&nbsp;offer mobile access, allowing approvers to review and approve invoices on the go,
        further enhancing flexibility and speed.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, once approvals are secured, the system schedules the payment process according to the
        company&#39;s cash flow priorities and vendor terms. This end-to-end automation not only accelerates
        the payment cycle but also provides a clear audit trail for compliance and reporting purposes. By
        using a tool like&nbsp;
        <Link id="use-cases-accounting-automated-approval-workflows-mechanics-stampli"
          href="/tools/accounting/accounts-payable/stampli" className="text-[#C83803] hover:underline">
          Stampli
        </Link>, businesses can gain insights into their AP processes, identify areas for improvement, and
        ensure that payments are made accurately and on time.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="implementing-automated-approval-workflows-the-mechanics" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Implementing Automated Approval Workflows: The Mechanics
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="implementing-automated-approval-workflows-the-mechanics" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Implementing Automated Approval Workflows: The Mechanics
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
