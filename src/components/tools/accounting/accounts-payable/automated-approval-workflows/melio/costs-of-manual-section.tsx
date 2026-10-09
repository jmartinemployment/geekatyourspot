export default function CostsOfManualSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses often struggle with manual processes in their Automated Approval Workflows. These
        workflows are crucial for maintaining control over financial transactions, yet they frequently become
        cumbersome and inefficient. When approval processes are informal, such as relying on verbal
        confirmations or email chains, the risk of errors and delays increases. For instance, a bookkeeper
        might manually enter an invoice, only for it to be approved verbally by a manager. Without a recorded
        authorization, invoices can be paid late or without proper review. This lack of formal structure turns
        approval into a mere communication exercise rather than a robust financial control.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another issue arises when every invoice follows the same approval path. A small recurring expense
        might sit in line with a large equipment purchase, waiting for the same level of approval. This not
        only wastes time but also encourages employees to bypass the process altogether. A risk-based design,
        where low-risk invoices are automatically approved, can alleviate this bottleneck. For example,
        invoices under $250 might be auto-approved, while those over $10,000 require multiple reviews. This
        tailored approach ensures that the right invoices receive the necessary scrutiny without holding up
        the entire process.</p>
      <p className="text-md text-white shadow-text pt-3">
        The bottleneck often lies with the business owner, who might insist on approving every invoice to
        maintain visibility and control. However, this can lead to delays, especially when the owner is
        unavailable. By automating the process, owners can retain oversight of significant expenditures while
        allowing routine invoices to proceed unimpeded. This shift not only speeds up operations but also
        reduces the administrative burden on business leaders.</p>
      <p className="text-md text-white shadow-text pt-3">
        Without a centralized workflow, approval problems often surface too late. Bookkeepers might only
        discover missing approvals when a payment is due or a vendor follows up. This reactive approach leads
        to missed deadlines and strained vendor relationships. Implementing a system where each invoice has a
        designated owner, stage, and due date—with automated reminders and escalations—can prevent these
        issues. Such a system ensures that approvals are proactive, not reactive, minimizing the risk of late
        payments and maintaining healthy supplier relationships.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, many small businesses only add controls after experiencing a loss or audit issue. This
        reactive stance often results in the owner handling every payment, as delegation seems risky without
        proper guardrails. However, this approach is unsustainable and can stall payments when the owner is
        unavailable. By establishing a structured approval workflow, businesses can delegate with confidence,
        ensuring that payments are both timely and secure. This not only protects against fraud and errors but
        also streamlines operations, freeing up valuable time for strategic activities.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-costs-of-manual-automated-approval-workflows-for-small-businesses">
                The Costs of Manual Automated Approval Workflows for Small Businesses
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-costs-of-manual-automated-approval-workflows-for-small-businesses">
                The Costs of Manual Automated Approval Workflows for Small Businesses
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
