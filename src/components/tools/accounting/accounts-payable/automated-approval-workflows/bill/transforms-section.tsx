import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Bill revolutionizes how small businesses handle automated approval workflows by eliminating the
        tedious manual tasks that consume valuable time. One of Bill&#39;s standout features is its ability
        to tailor approval workflows to fit specific business rules. This customization allows for the
        routing of invoices to the right people automatically, tracking every step, sending reminders, and
        enabling approvals from anywhere. This means less time spent managing approvals and more time
        focusing on strategic tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>-powered invoice intake and coding significantly reduce
        manual data entry. It captures invoice details automatically, assigning coding based on prior
        patterns or established rules. This capability not only speeds up the process but also enhances
        accuracy, allowing teams to focus on higher-value work rather than repetitive tasks. For businesses
        dealing with fluctuating work volumes, this automation provides a consistent and reliable
        solution.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bill&#39;s automated matching feature checks invoices against purchase orders and receipts, reducing
        errors and cutting down on manual work. This feature is particularly beneficial for businesses that
        handle large volumes of transactions, as it ensures that invoices are matched correctly, preventing
        costly mistakes. By automating these checks, Bill removes the need for constant oversight, freeing up
        time for more critical activities.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another advantage of using Bill is the seamless integration with popular accounting software like
        QuickBooks Online and Xero. This integration ensures that all approved invoices are synced, providing
        a clear and up-to-date view of the business&#39;s financial status. It eliminates the need for manual
        data entry and reduces the risk of errors, enhancing overall financial management and cash flow
        visibility.</p>
      <p className="text-md text-white shadow-text pt-3">
        Mobile accessibility is another key feature of Bill, allowing users to approve invoices on-the-go
        using the BILL app for Android and iPhone. This flexibility ensures that approvals are not delayed
        due to the absence of key personnel, maintaining the flow of operations even when team members are
        out of the office. It empowers businesses to maintain efficiency and responsiveness, critical for
        maintaining strong vendor relationships.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-bill-transforms-automated-approval-workflows">
                How Bill Transforms Automated Approval Workflows
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-bill-transforms-automated-approval-workflows">
                How Bill Transforms Automated Approval Workflows
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
