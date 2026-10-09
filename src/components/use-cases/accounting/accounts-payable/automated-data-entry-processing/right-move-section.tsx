import Link from "next/link";

export default function RightMoveSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Automating accounts payable (AP) can be transformative for businesses that struggle with
        time-consuming manual processes, frequent data entry errors, and delayed invoice approvals. If your
        business experiences these pain points, implementing automated solutions like&nbsp;
        <Link id="use-cases-accounting-automated-data-entry-processing-right-move-dext"
          href="/tools/accounting/accounts-payable/automated-data-entry-processing/dext" className="text-[#C83803] hover:underline">
          Dext
        </Link>,&nbsp;
        <Link id="use-cases-accounting-automated-data-entry-processing-right-move-bill"
          href="/tools/accounting/accounts-payable/automated-data-entry-processing/bill" className="text-[#C83803] hover:underline">
          Bill
        </Link>, and&nbsp;
        <Link id="use-cases-accounting-automated-data-entry-processing-right-move-avidxchange"
          href="/tools/accounting/accounts-payable/automated-data-entry-processing/avidxchange" className="text-[#C83803] hover:underline">
          AvidXchange
        </Link>&nbsp;could be the right decision. These tools offer automated data capture and streamlined
        workflows that reduce manual intervention and enhance accuracy.</p>
      <p className="text-md text-white shadow-text pt-3">
        Consider this approach if your team is overwhelmed with high volumes of invoices and struggles with
        maintaining accuracy under pressure. Automation can free your team from repetitive tasks, allowing
        them to focus on strategic initiatives that drive business growth. For example,&nbsp;
        <Link id="use-cases-accounting-automated-data-entry-processing-right-move-stampli"
          href="/tools/accounting/accounts-payable/automated-approval-workflows/stampli" className="text-[#C83803] hover:underline">
          Stampli
        </Link>&nbsp;excels at integrating with existing accounting systems to automate invoice approval and
        payment workflows, minimizing delays and errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, if your business handles a low volume of invoices or already has efficient manual processes
        in place, the cost and effort of automating may outweigh the benefits. Automation should be pursued
        when there&#39;s a clear return on investment, not just for the sake of technology adoption.</p>
      <p className="text-md text-white shadow-text pt-3">
        Before making a decision, assess your current process bottlenecks and the potential for improvement.
        Evaluate solutions like&nbsp;
        <Link id="use-cases-accounting-automated-data-entry-processing-right-move-melio"
          href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/melio" className="text-[#C83803] hover:underline">
          Melio
        </Link>&nbsp;for their capability to streamline processes without disrupting your existing workflows.
        Each tool has its own strengths, such as Melio&#39;s ability to handle multi-source invoice capture
        efficiently.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the right choice depends on your specific business needs and goals. Consider consulting
        with an AI implementation expert to tailor a solution that fits your organization. For a detailed
        assessment and to explore how automated solutions can benefit your business,&nbsp;
        <Link id="use-cases-accounting-automated-data-entry-processing-right-move-consultation"
          href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">
          book a free consultation
        </Link>&nbsp;to discuss the next steps.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-accounts-payable-automation-is-the-right-move" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Accounts Payable Automation is the Right Move
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-accounts-payable-automation-is-the-right-move" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Accounts Payable Automation is the Right Move
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
