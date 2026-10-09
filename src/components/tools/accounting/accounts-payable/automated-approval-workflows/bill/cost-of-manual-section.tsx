import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function CostOfManualSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses, managing automated approval workflows often feels like a never-ending cycle of
        inefficiency. Vendor invoices arrive through various channels—email, mail, or vendor portals—and pile
        up in an owner&#39;s inbox. The approval process is informal and lacks structure, often leading to
        delays and errors. A bookkeeper might manually enter or forward an invoice, only to receive a verbal
        &quot;okay&quot; from a manager. This lack of a formalized process means that&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;(AP) has no recorded
        authorization, which can result in late payments or invoices being paid without appropriate
        review.</p>
      <p className="text-md text-white shadow-text pt-3">
        The informal nature of these workflows is a significant pain point. Approval is often treated as a
        casual communication rather than a critical financial control. This approach leaves businesses
        vulnerable to errors and inefficiencies. Without a documented approval workflow, managers struggle to
        keep track of what needs attention, leading to missed deadlines and strained vendor relationships.
        Geek @ Your Spot&#39;s implementation of Bill aims to transform these verbal, inbox-based approvals
        into documented workflows that are easy to use from email or mobile, maintaining a permanent audit
        trail.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another issue is the lack of a risk-based approval design. Every invoice, whether a low-risk $75
        software subscription or a high-value $12,000 equipment purchase, follows the same path. This creates
        unnecessary queue time and conditions employees to bypass the process. Bill automates low-risk,
        recurring, or PO-matched invoices, reserving management review for those that truly require
        judgment. By setting approval thresholds based on actual spending patterns, businesses can streamline
        their processes and focus on more critical financial decisions.</p>
      <p className="text-md text-white shadow-text pt-3">
        The owner often becomes a bottleneck in the approval process, especially in small businesses where
        they desire visibility and cost control. However, this centralized decision-making model is
        inefficient. When the owner is unavailable, invoices pile up, delaying payments and potentially
        damaging supplier relationships. Bill addresses this by providing visibility into all spending while
        requiring owner approval only for high-risk or high-value items. This approach preserves control
        while removing the owner from low-value administrative tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Without a centralized workflow, AP often discovers problems too late, such as missing approvals when
        a payment is due or when a vendor calls. This lack of active monitoring results in slow approvals and
        late payments. Bill&#39;s automated approval workflows ensure that every invoice has an owner, a
        stage, a due date, and an automated next step. Features like reminders, escalation to alternate
        approvers, and dashboards for invoices nearing due date help maintain control and efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses often implement AP controls reactively, after experiencing issues like duplicate
        payments or fraudulent requests. This reactive approach lacks the guardrails and records necessary
        for efficient operations. Bill&#39;s AP Approval and Bill-Pay Control Sprint centralizes invoices,
        defines approval thresholds, and routes bills automatically to the appropriate personnel. By syncing
        approved bills with accounting software like QuickBooks or Xero, businesses can maintain an
        audit-ready approval trail, answering critical questions about who approved what and when.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;With AI-powered AP automation, BILL erases the busywork from capturing invoices, routing
        approvals, and processing payments—syncing seamlessly with your accounting software so you can focus
        on growth.&quot;&nbsp;
        <a id="tools-accounting-approval-workflows-bill-cost-of-manual-source"
          href="https://www.bill.com/product/accounts-payable"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Bill
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
