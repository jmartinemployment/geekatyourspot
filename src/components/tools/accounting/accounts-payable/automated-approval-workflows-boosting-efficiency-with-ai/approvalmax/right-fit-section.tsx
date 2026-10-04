import Link from "next/link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        ApprovalMax is well-suited for small to medium-sized businesses that are looking to enhance their
        accounts payable processes through automation. Its ability to integrate with popular accounting
        software makes it a versatile choice for companies that already use platforms like Xero or QuickBooks
        Online. However, businesses that are heavily reliant on manual processes or have complex approval
        hierarchies will find ApprovalMax particularly beneficial.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform is not limited to any specific industry, but it has proven effective in sectors such as
        sports and recreation, as evidenced by its successful implementation with Paddle Australia. For
        businesses that require a robust approval system with clear audit trails and reduced manual errors,
        ApprovalMax offers a compelling solution.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, it&#39;s important to note that ApprovalMax may not be the best fit for businesses that do
        not use one of its integrated accounting platforms. Additionally, those who require highly
        specialized approval processes that extend beyond the capabilities of ApprovalMax&#39;s customizable
        workflows might need to explore other options.</p>
      <p className="text-md text-white shadow-text pt-3">
        Before deciding, consider the following questions to assess your current approval processes: How many
        invoices per month require someone&#39;s approval? Where do invoices currently enter the business?
        Who approves spending, and what happens if they are unavailable? How often are invoices paid late,
        paid twice, disputed, or lost? How much time does the bookkeeper spend chasing approvals each week?
        Can the owner see all bills awaiting approval and all approved bills due in the next 7, 14, and 30
        days? Are approval requirements based on amount, department, job/project, entity, vendor, or expense
        type? Is there an audit trail sufficient to answer &ldquo;who approved this payment and
        why?&rdquo;</p>
      <p className="text-md text-white shadow-text pt-3">
        If these questions highlight inefficiencies in your current processes, ApprovalMax could be the right
        tool to streamline your operations. To explore how ApprovalMax can be tailored to your business
        needs,&nbsp;
        <Link id="tools-accounting-approvalmax-right-fit-consultation"
          href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">
          book a consultation
        </Link>&nbsp;with our team today.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-approvalmax-right-for-your-business">
                Is ApprovalMax Right for Your Business?
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-approvalmax-right-for-your-business">
                Is ApprovalMax Right for Your Business?
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
