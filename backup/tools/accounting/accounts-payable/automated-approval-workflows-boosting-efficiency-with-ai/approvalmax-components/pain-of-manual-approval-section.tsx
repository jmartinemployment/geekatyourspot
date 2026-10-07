export default function PainOfManualApprovalSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small and medium-sized businesses often face significant challenges with accounts payable (AP)
        approval workflows. These processes typically span across emails, paper documents, spreadsheets, and
        accounting systems without a clear, controlled path from invoice receipt to authorization and
        payment. This lack of structure leads to delayed approvals, poor cash visibility, payment mistakes,
        and dependency on business owners for final decisions.</p>
      <p className="text-md text-white shadow-text pt-3">
        One common issue is that approvals get stuck with one person, often the owner or a manager, who might
        be traveling, busy, or simply miss an email. This results in late payments, late fees, strained
        supplier relationships, and rushed payment decisions. Additionally, bookkeepers frequently find
        themselves chasing approvers via emails, texts, or calls, which increases administrative workload and
        reduces time for important tasks like reconciliation and cash planning.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another problem is the lack of a single view of an invoice&#39;s status. Staff cannot easily
        determine whether an invoice was received, coded, disputed, waiting for approval, or paid. This
        confusion leads to duplicate follow-ups, vendor inquiries, and payment delays. Furthermore, invoices
        arrive through various channels—email, paper mail, vendor portals, and even text messages—causing
        some to be lost, entered late, or sent to the wrong approver.</p>
      <p className="text-md text-white shadow-text pt-3">
        Email-based approvals are often unstructured, with approvals given verbally or implied in a thread,
        sometimes without the necessary invoice attachments or coding details. This lack of accountability
        results in rework and difficulty proving who approved what and when. Employees are often unclear
        about which invoices require approval, who owns a department budget, or what dollar thresholds apply,
        leading to inconsistent control and oversight.</p>
      <p className="text-md text-white shadow-text pt-3">
        The workflow can also break during exceptions, such as when an invoice has the wrong amount, a
        missing receipt, or no purchase order. Without a defined escalation route, payments sit unresolved,
        and staff make ad hoc decisions, resulting in inconsistent supplier communication. Limited mobile and
        out-of-office approval capabilities further stall approval queues when key people are unavailable,
        and multiple approvals can create bottlenecks, especially near month-end.</p>
      <p className="text-md text-white shadow-text pt-3">
        Many small businesses mistakenly assume their accounting system&#39;s basic user permissions
        constitute a complete approval workflow. In reality, this often leads to managers approving purchases
        after the fact, bills being entered without documented authorization, or owners spending hours
        manually approving routine transactions that could be delegated under clear rules.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-pain-of-manual-approval-processes">
                The Pain of Manual Approval Processes
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-pain-of-manual-approval-processes">
                The Pain of Manual Approval Processes
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
