import Link from "next/link";

export default function HowItTransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing automated approval workflows in accounts payable (AP) is not just about installing
        software; it&#39;s a transformative process that redefines how invoices are handled from start to
        finish. This approach begins with defining business objectives to align AP processes with the
        company&#39;s strategic goals. The first step is to identify specific inefficiencies—such as manual
        data entry or delayed approvals—and set measurable Key Performance Indicators (KPIs) to address
        them.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once objectives are clear, a data quality assessment ensures that all necessary information is
        accurate and up-to-date. This involves cleansing data, removing duplicates, and standardizing formats
        to ensure consistency across the board. With clean data, the next phase involves selecting the right
        technology. Tools such as&nbsp;
        <Link id="use-cases-accounting-approval-workflows-transform-bill"
          href="/tools/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/bill" className="text-[#C83803] hover:underline">
          Bill
        </Link>,&nbsp;
        <Link id="use-cases-accounting-approval-workflows-transform-ramp"
          href="/tools/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/ramp" className="text-[#C83803] hover:underline">
          Ramp
        </Link>, and&nbsp;
        <Link id="use-cases-accounting-approval-workflows-transform-approvalmax"
          href="/tools/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/approvalmax" className="text-[#C83803] hover:underline">
          ApprovalMax
        </Link>&nbsp;are integrated to automate various stages of the workflow, from invoice capture to
        approval routing. Each tool is chosen based on its ability to work seamlessly with existing systems,
        ensuring a smooth transition.</p>
      <p className="text-md text-white shadow-text pt-3">
        The implementation strategy involves launching a pilot program to test the new system in a controlled
        environment. This allows the business to measure the return on investment and make necessary
        adjustments before full-scale deployment. During this phase, the AP team is trained to use the new
        tools, ensuring they are comfortable with the technology and understand how it enhances their
        workflow.</p>
      <p className="text-md text-white shadow-text pt-3">
        As invoices enter the system, tools like&nbsp;
        <Link id="use-cases-accounting-approval-workflows-transform-stampli"
          href="/tools/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/stampli" className="text-[#C83803] hover:underline">
          Stampli
        </Link>&nbsp;and&nbsp;
        <Link id="use-cases-accounting-approval-workflows-transform-melio"
          href="/tools/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/melio" className="text-[#C83803] hover:underline">
          Melio
        </Link>&nbsp;take over, automating data entry and routing invoices to the appropriate approvers based
        on pre-set rules. These systems maintain a comprehensive audit trail, ensuring every action is logged
        and easily accessible for review. The automation not only speeds up the approval process but also
        provides real-time visibility into invoice status, allowing for proactive management and timely
        decision-making.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, ongoing monitoring and optimization ensure the system continues to meet the business&#39;s
        needs. Regular reviews of KPIs and feedback from the AP team help identify areas for improvement,
        ensuring the system remains efficient and effective in the long term. This holistic approach to
        implementing automated approval workflows transforms the AP process from a manual, error-prone system
        into a streamlined, efficient operation that supports the business&#39;s strategic goals.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-automated-approval-workflows-transform-ap-processes" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Automated Approval Workflows Transform AP Processes
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
              <h2 id="how-automated-approval-workflows-transform-ap-processes" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Automated Approval Workflows Transform AP Processes
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
