import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsWeekSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        ApprovalMax is designed to take the hassle out of approval processes, freeing up valuable time and
        resources for small business teams. By automating approval workflows, it removes the need for manual
        data entry and reduces the risk of human error. This automation is particularly beneficial for&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;teams who often find
        themselves buried under a pile of invoices, each requiring meticulous attention. With ApprovalMax,
        these teams can focus on more strategic tasks, as the system handles the routine work.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the key benefits of ApprovalMax is its ability to automate low-risk, recurring invoices,
        freeing up time that would otherwise be spent on manual approvals. This feature is crucial for
        businesses that handle a large volume of invoices and need to ensure that routine transactions do not
        clog up the system. By automating these processes, businesses can significantly reduce the time spent
        on approvals, allowing staff to focus on higher-value activities.</p>
      <p className="text-md text-white shadow-text pt-3">
        ApprovalMax also provides a clear audit trail for all transactions, capturing approval comments, time
        stamps, and decision histories. This feature not only ensures compliance but also simplifies audits
        by providing a complete record of all actions taken. Moreover, the system&#39;s integration with
        platforms like QuickBooks Online, Xero, and NetSuite means that approved transactions are
        automatically pushed into these accounting systems, eliminating the need for duplicate data
        entry.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another advantage is the system&#39;s flexibility in handling approvals. Managers can approve or
        reject invoices through email, web, mobile, or Slack, making it easier to keep the approval process
        moving even when they are out of the office. For businesses where the owner is often the bottleneck,
        this flexibility allows routine, policy-compliant invoices to continue through the system without
        delay, ensuring that critical payments are not held up due to unavailability.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform also includes features like substitute approvers, ensuring that the approval process
        does not stall during vacations or absences. This capability is particularly useful for small
        businesses where a single person&#39;s absence can significantly disrupt operations. By automating
        these elements, ApprovalMax not only streamlines the approval process but also enhances overall
        operational efficiency, allowing teams to focus on growth-driving activities rather than getting
        bogged down in administrative tasks.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-approvalmax-transforms-your-week-by-removing-manual-tasks">
                How ApprovalMax Transforms Your Week by Removing Manual Tasks
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-approvalmax-transforms-your-week-by-removing-manual-tasks">
                How ApprovalMax Transforms Your Week by Removing Manual Tasks
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
