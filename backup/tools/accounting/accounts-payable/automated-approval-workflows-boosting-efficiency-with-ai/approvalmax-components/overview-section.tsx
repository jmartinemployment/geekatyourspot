import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Picture this: your finance team is knee-deep in paperwork, spending hours each week manually tracking
        and approving invoices. Each document passes through multiple hands, and every step is an opportunity
        for errors. This isn&#39;t just frustrating—it&#39;s costly. Every mistake means more time spent on
        corrections, and every delay in approval slows down your entire operation. For small and medium-sized
        businesses, the inefficiency of manual processes can translate into significant financial drain.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is where ApprovalMax steps in, offering a streamlined solution that can transform your&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink> process. By automating
        approvals, ApprovalMax not only reduces the risk of errors but also speeds up the entire workflow.
        Imagine reallocating those wasted hours to more strategic tasks that drive growth. Automation
        isn&#39;t just about efficiency; it&#39;s about reclaiming valuable time and resources so your team
        can focus on what truly matters. With ApprovalMax, businesses like Paddle Australia have saved up to
        28 hours a month and reduced errors by 80%.</p>
      <p className="text-md text-white shadow-text pt-3">
        For companies aiming to scale, the visibility and control offered by automated workflows are
        invaluable. ApprovalMax integrates seamlessly with platforms like Xero, QuickBooks, and Oracle
        NetSuite, providing a comprehensive solution that fits into your existing systems. This integration
        ensures that all financial data is accurate and up-to-date, enabling informed decision-making at
        every level of your organization. As businesses grow, having robust financial controls in place
        becomes crucial, and ApprovalMax delivers just that.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
                Overview
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
