import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every month, Lisa Anderson, the owner of a boutique marketing agency in Miami, finds herself tangled
        in a web of invoices and approvals. Her small team spends hours each week manually sorting through
        payment requests, checking them against project budgets, and chasing down approvals from remote team
        members. The process is not only time-consuming but also fraught with errors and delays. This
        cumbersome system often results in missed deadlines and strained vendor relationships, costing the
        business valuable time and money.</p>
      <p className="text-md text-white shadow-text pt-3">
        Lisa&#39;s story is not unique. Many small businesses in West Palm Beach and beyond face similar
        challenges with their&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;processes. The traditional
        methods of handling approvals are slow and inefficient, hindering growth and productivity. As
        businesses scale, the volume of invoices increases, and the complexity of managing them does too. This
        is where&nbsp;
        <a id="tools-accounting-approval-workflows-bill-overview-approval-process"
          href="https://www.bill.com/blog/accounts-payable-approval-process"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          automated approval workflows
        </a>&nbsp;come into play, offering a seamless solution to streamline and modernize these outdated
        processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        With automated approval workflows, businesses can transform their accounts payable operations. Tools
        like&nbsp;
        <a id="tools-accounting-approval-workflows-bill-overview-bill"
          href="https://www.bill.com/product/accounts-payable"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          BILL
        </a>&nbsp;facilitate the routing of invoices to the right people, ensuring timely approvals without
        the manual back-and-forth. By implementing&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>-powered solutions, Lisa&#39;s agency could reduce manual
        entry time by up to 20% and capture key invoice fields with 99% accuracy. This automation not only
        saves time but also minimizes errors and enhances cash flow management, allowing businesses to focus
        on strategic tasks that drive growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated workflows are more than just a time-saver. They are a critical step toward greater
        efficiency, accuracy, and financial health. For small businesses like Lisa&#39;s, adopting such
        technology can mean the difference between staying afloat and thriving in a competitive market. As
        the landscape of business operations continues to evolve, embracing these innovations is key to
        maintaining a competitive edge and ensuring long-term success.</p>
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
