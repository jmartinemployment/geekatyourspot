export default function CostOfManualSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        In many small businesses, the approval process for invoices and payments is a cumbersome task that
        often leads to inefficiencies. The typical workflow involves invoices arriving through various
        channels like email or mail, and bookkeepers manually entering or forwarding them for approval. Often,
        managers give verbal approvals, leaving no formal record. This lack of documentation can result in
        late payments or invoices being processed without proper review. The absence of a structured approval
        system turns what should be a financial control into mere communication, which is a major failure
        point.</p>
      <p className="text-md text-white shadow-text pt-3">
        ApprovalMax addresses these issues by transforming verbal, inbox-based approvals into documented
        workflows that are easy for managers to use from email or mobile devices. This ensures a permanent
        audit trail, which is crucial for maintaining financial controls. Unlike traditional methods where
        every invoice follows the same path, ApprovalMax allows for risk-based approval designs. For example,
        low-risk, recurring invoices can be automatically approved, while higher-value or non-standard
        invoices are flagged for management review. This targeted approach reduces unnecessary queue times and
        prevents employees from bypassing the process.</p>
      <p className="text-md text-white shadow-text pt-3">
        A common issue in small businesses is the owner being the bottleneck in the approval process. Owners
        often want visibility and control over costs, but this can delay approvals when they are unavailable.
        ApprovalMax provides visibility into all spending, allowing owners to focus only on high-risk or
        high-value items. Routine, policy-compliant invoices continue through the system without requiring
        the owner&#39;s direct involvement, thus preserving control while eliminating low-value
        administrative tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Without a centralized workflow, AP teams often discover issues too late, such as missing approvals
        when a due date is near or when a vendor calls. ApprovalMax solves this by assigning each invoice an
        owner, stage, due date, and automated next steps. This proactive system prevents delays, missed
        early-payment discounts, and strained supplier relationships. The platform includes reminders,
        escalation paths, and dashboards to ensure nothing is left to chance.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, many businesses only implement controls reactively, after experiencing a loss or audit
        problem. ApprovalMax preemptively provides these controls by mapping spending authority and creating
        approval flows tailored to the business&#39;s needs. It supports multi-level approvals, allows
        approvals via various platforms like email and Slack, and ensures that vacations or absences
        don&#39;t freeze the AP process. By capturing approval comments, timestamps, and decision histories,
        ApprovalMax offers a complete audit record, integrating seamlessly with accounting systems like
        QuickBooks Online, Xero, and NetSuite.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-approval-workflows-and-how-approvalmax-solves-it">
                The Cost of Manual Approval Workflows and How ApprovalMax Solves It
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-approval-workflows-and-how-approvalmax-solves-it">
                The Cost of Manual Approval Workflows and How ApprovalMax Solves It
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
