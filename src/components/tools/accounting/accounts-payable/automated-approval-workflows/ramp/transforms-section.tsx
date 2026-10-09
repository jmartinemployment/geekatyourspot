export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Ramp revolutionizes Automated Approval Workflows by removing the burdens of manual processes and
        returning valuable time to your team. With Ramp, optical character recognition (OCR) technology
        extracts data directly from invoices, eliminating the need for manual data entry. This not only speeds
        up the process but also reduces errors, allowing your team to focus on more strategic tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Machine learning (ML) enhances this capability by matching invoices to purchase orders and receipts
        automatically. This automation ensures that invoices are accurately processed without the need for
        human intervention, cutting down on the time spent cross-referencing documents. By automating these
        repetitive tasks, Ramp frees up your team to concentrate on exceptions that require their
        expertise.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ramp&#39;s smart approval workflows further streamline processes by routing bills to the appropriate
        stakeholders based on predefined criteria such as amount, vendor type, or department. This intelligent
        routing ensures that invoices reach the right decision-makers without unnecessary delays. By
        automating these workflows, Ramp reduces the time spent waiting for approvals and minimizes the chance
        of bottlenecks.</p>
      <p className="text-md text-white shadow-text pt-3">
        The system also learns your business&#39;s preferences over time, recognizing regular vendors and
        understanding your approval chains. This learning capability allows Ramp to flag anything that
        deviates from the norm, such as duplicate invoices or unusual payment amounts, providing an additional
        layer of security and control.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ramp&#39;s Accounting Agent automatically codes transactions the moment they post, moving in-policy
        spend through a zero-touch lane. This feature ensures that only exceptions are surfaced for review,
        allowing your team to maintain control over financial decisions without being bogged down by routine
        tasks. By automating transaction coding, Ramp handles 3.5 times more transactions automatically than
        legacy systems, significantly reducing the workload on your team.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-ramp-transforms-automated-approval-workflows">
                How Ramp Transforms Automated Approval Workflows
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-ramp-transforms-automated-approval-workflows">
                How Ramp Transforms Automated Approval Workflows
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
