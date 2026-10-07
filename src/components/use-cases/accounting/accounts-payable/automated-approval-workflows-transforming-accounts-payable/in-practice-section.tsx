import Link from "next/link";

export default function InPracticeSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rolling out automated approval workflows involves more than just flipping a switch. It&#39;s a
        structured process that requires careful coordination of technology, data, and people. Here&#39;s how
        it typically unfolds in a real-world business environment.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is to map out the existing approval processes. This involves documenting every step
        from invoice receipt to payment authorization. Understanding the current workflow is essential for
        identifying inefficiencies and areas where automation can add value. During this phase, tools
        like&nbsp;
        <Link id="use-cases-accounting-approval-workflows-practice-approvalmax"
          href="/tools/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/approvalmax" className="text-[#0B162A] hover:underline">
          ApprovalMax
        </Link>&nbsp;can be invaluable, as they allow you to visualize and configure complex approval pathways
        tailored to your organization&#39;s specific needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the current processes are mapped, the next stage is integration. This involves connecting the
        selected automation tools with your existing financial systems. It&#39;s crucial that these
        integrations are seamless to avoid disruptions.&nbsp;
        <Link id="use-cases-accounting-approval-workflows-practice-melio"
          href="/tools/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/melio" className="text-[#0B162A] hover:underline">
          Melio
        </Link>&nbsp;is known for its easy integration capabilities, especially with popular accounting
        software like QuickBooks, which can help maintain consistency across your financial operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        With systems integrated, data configuration comes next. Ensure that data flows correctly between
        systems, maintaining accuracy and integrity. This may include setting up data validation rules and
        automating data entry processes to minimize manual intervention. Tools like&nbsp;
        <Link id="use-cases-accounting-approval-workflows-practice-stampli"
          href="/tools/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/stampli" className="text-[#0B162A] hover:underline">
          Stampli
        </Link>&nbsp;can automate invoice data capture, reducing manual entry errors and speeding up the
        approval process.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout this rollout, the role of the people involved cannot be overstated. Change management is
        critical. Employees must understand the benefits of automation and be trained to use new systems
        effectively. Involving staff in the development process can increase buy-in and ease the transition.
        Regular feedback loops should be established to address any concerns and optimize the workflow
        continually.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, the implementation phase should conclude with a thorough evaluation of the system&#39;s
        performance against the initial objectives set. This includes measuring improvements in processing
        time, error rates, and compliance. Successful implementation of automated approval workflows not only
        streamlines operations but also positions your business for future scalability and efficiency.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="implementing-automated-approval-workflows-in-practice" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Implementing Automated Approval Workflows in Practice
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="implementing-automated-approval-workflows-in-practice" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Implementing Automated Approval Workflows in Practice
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
