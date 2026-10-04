export default function TransformsWorkflowSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        ApprovalMax offers a robust solution to the challenges of manual AP approval processes by automating
        and streamlining approval workflows. This tool is particularly effective for businesses that need to
        maintain their existing accounting platforms like QuickBooks Online, Xero, or NetSuite while
        enhancing authorization and audit-trail capabilities.</p>
      <p className="text-md text-white shadow-text pt-3">
        With ApprovalMax, businesses can map spending authority by role, department, vendor type, project,
        and dollar threshold. This allows for the creation of approval flows for purchase orders, bills,
        expense requests, and payment requests, tailored to the specific needs of the organization. The
        software supports both sequential and multi-level approval paths for larger commitments, ensuring
        that each step of the approval process is well-defined and efficient.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the standout features of ApprovalMax is its ability to integrate with existing accounting
        systems, pushing approved transactions directly into QuickBooks Online, Xero, or NetSuite. This
        integration not only streamlines the approval process but also ensures that all transactions are
        recorded with their approval history, providing a clear audit trail. By doing so, ApprovalMax
        enhances visibility into financial data and approval processes, enabling informed financial
        decisions.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform also offers flexibility in how approvers can interact with the system. Approvals can be
        made through email, web, mobile, or Slack, providing convenience and reducing the likelihood of
        bottlenecks caused by unavailability. Substitute approvers can be enabled to ensure that vacations
        and absences do not freeze the AP process. Additionally, approval comments, time stamps, and decision
        histories are captured in a single audit record, enhancing accountability and transparency.</p>
      <p className="text-md text-white shadow-text pt-3">
        By automating these workflows, ApprovalMax significantly reduces the administrative burden on finance
        teams. For instance, Paddle Australia, a not-for-profit organization, experienced an 80% reduction in
        errors and saved approximately 28 hours per month by implementing ApprovalMax. This allowed their
        finance team to redirect efforts towards strategic initiatives, driving the organization&#39;s
        growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        ApprovalMax eliminates the cleanup so every client interaction starts at the advisory layer.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-approvalmax-transforms-your-workflow">
                How ApprovalMax Transforms Your Workflow
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-approvalmax-transforms-your-workflow">
                How ApprovalMax Transforms Your Workflow
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
