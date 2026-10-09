export default function PitfallsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        In small businesses, managing Automated Approval Workflows can quickly become chaotic. Without a
        structured system, invoices arrive through various channels—email, mail, or vendor portals—and often
        land on the desk of a bookkeeper who manually enters or forwards them. This process is prone to errors
        and lacks a reliable record of authorization. A manager might verbally approve an invoice, leaving no
        trace for future reference. This informal approach turns approval into mere communication rather than
        a solid financial control, often resulting in late payments or unapproved transactions.</p>
      <p className="text-md text-white shadow-text pt-3">
        The absence of a risk-based approval design is another significant issue. Every invoice, whether a
        $75 software subscription or a $12,000 equipment purchase, follows the same approval path. This not
        only creates unnecessary delays but also encourages employees to bypass the process altogether. A
        small business might benefit from automating low-risk invoices while reserving manual review for
        those requiring judgment. Without this differentiation, the approval process becomes a bottleneck.</p>
      <p className="text-md text-white shadow-text pt-3">
        In many small businesses, the owner becomes the bottleneck in the approval chain. Seeking visibility
        and control, owners often insist on approving every invoice. However, this centralized approach
        falters when the owner is unavailable, leading to delays and missed opportunities for early payment
        discounts. The misconception that visibility requires centralized decision-making hampers
        efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, without a centralized workflow, problems often surface too late. The bookkeeper might only
        realize an invoice lacks approval when the due date looms or a vendor calls. This lack of active
        monitoring and deadlines means that invoices are left to languish without follow-up. Automation can
        address these issues by assigning each invoice an owner, a stage, and a due date, ensuring that
        nothing is left to chance.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, small businesses often implement controls only after experiencing a loss or audit issue.
        This reactive approach results in broad access permissions, where too many people can pay bills, or
        the owner is forced to approve everything, creating a bottleneck. This lack of separation of duties
        can lead to inefficiencies and increased risk.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;But when you match invoices automatically, process payments quickly, and flag fraud before it
        becomes a problem, your business benefits.&quot;&nbsp;
        <a id="tools-accounting-approval-workflows-ramp-pitfalls-source"
          href="https://ramp.com/blog/ai-in-payments"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Ramp
        </a></p>
      <p className="text-md text-white shadow-text pt-3">
        Ramp offers a solution with its Bill Pay system, which includes invoice capture, PO matching, approval
        workflows, vendor management, and payment capabilities. It ensures that bills are routed automatically
        to the right approver based on business rules, while roles and permissions support separation of
        duties. This setup not only streamlines the approval process but also strengthens financial controls,
        providing a clear audit trail and reducing the time spent chasing approvals.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-pitfalls-of-manual-automated-approval-workflows">
                The Pitfalls of Manual Automated Approval Workflows
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-pitfalls-of-manual-automated-approval-workflows">
                The Pitfalls of Manual Automated Approval Workflows
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
