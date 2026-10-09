import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function CostOfManualSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        In many small businesses, the&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;(AP) team is burdened with
        manual approval processes that are both time-consuming and prone to errors. Each invoice that comes in
        requires multiple steps before payment can be processed. This often starts with the invoice arriving
        through various channels, such as email or mail, and ends with a verbal approval from a manager.
        However, this informal process lacks a recorded authorization, leading to potential issues like late
        payments or unapproved invoices being paid. This approach treats approval as mere communication rather
        than a crucial financial control.</p>
      <p className="text-md text-white shadow-text pt-3">
        One major issue is that every invoice, regardless of its amount or risk, follows the same approval
        path. A small, recurring expense might sit in the same queue as a large, one-time purchase, creating
        unnecessary delays. Without a risk-based approach, employees might bypass the process altogether,
        leading to further inefficiencies. Stampli addresses this by automating low-risk invoices and
        reserving managerial review for those that truly require it. This ensures that resources are focused
        where they are needed most, without compromising on control or visibility.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another challenge is that in many small businesses, the owner becomes the bottleneck. They often
        insist on approving every invoice to maintain visibility and control over expenses. However, this can
        lead to delays, especially when the owner is unavailable. Stampli offers a solution by allowing owners
        to maintain visibility into all spending while only requiring their approval for high-risk or
        high-value items. This frees up the owner from routine administrative tasks, allowing them to focus on
        more strategic activities.</p>
      <p className="text-md text-white shadow-text pt-3">
        Without a centralized workflow, AP teams often discover issues only when they become urgent, such as
        when a payment is due or a vendor calls to inquire about a late payment. This lack of proactive
        monitoring can harm supplier relationships and obscure where invoices are stuck. Stampli provides a
        centralized command center that assigns each invoice an owner, a stage, and a due date, ensuring that
        nothing falls through the cracks. Automated reminders and escalations help prevent bottlenecks, while
        dashboards provide visibility into pending approvals.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, many small businesses only implement controls after experiencing a loss or audit issue.
        Approvals often lack consistent guardrails, leading to ad hoc processes that vary by invoice.
        Stampli&#39;s solution creates fixed approval paths based on various criteria, such as vendor, amount,
        or department, and enforces these paths to prevent unauthorized changes. This structured approach not
        only streamlines the approval process but also enhances accountability and compliance, making the AP
        function more robust and reliable.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;By streamlining workflows between procurement and AP teams, Stampli speeds up approval processes
        and improves control across all financial processes.&quot;&nbsp;
        <a id="tools-accounting-approval-workflows-stampli-cost-of-manual-source"
          href="https://www.stampli.com/erp-purchase-orders/"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Stampli
        </a></p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-automated-approval-workflows">
                The Cost of Manual Automated Approval Workflows
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-automated-approval-workflows">
                The Cost of Manual Automated Approval Workflows
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
