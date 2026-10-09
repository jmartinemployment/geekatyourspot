import Link from "next/link";

export default function CriticalDecisionsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing automated approval workflows is not just a technological upgrade; it&#39;s a strategic
        transformation that requires careful planning from the outset. The success of such an implementation
        often hinges on a few critical decisions made early in the process.</p>
      <p className="text-md text-white shadow-text pt-3">
        First, aligning the project with your business objectives is crucial. Define clear, measurable goals
        for what the automation should achieve. This could be reducing the time spent on manual invoice
        processing by a specific percentage or decreasing the error rate in approvals. These goals will guide
        the entire implementation process and help in measuring success post-deployment.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, assess your current data quality. Data is the backbone of any automated system, and poor data
        quality can derail the entire effort. Ensure that your data is accurate, complete, and up-to-date.
        This might involve cleaning existing records and setting up processes to maintain high data quality
        going forward. Tools like&nbsp;
        <Link id="use-cases-accounting-approval-workflows-decisions-bill"
          href="/tools/accounting/accounts-payable/automated-approval-workflows/bill" className="text-[#0B162A] hover:underline">
          Bill
        </Link>&nbsp;can assist with data validation and ensure that your approval workflows are fed with
        reliable information.</p>
      <p className="text-md text-white shadow-text pt-3">
        Selecting the right technology stack is another decision that cannot be taken lightly. You&#39;ll
        need to choose tools that not only meet your current needs but are also scalable as your business
        grows. Consider how these tools integrate with your existing systems, such as QuickBooks or Xero, to
        avoid creating silos of information.&nbsp;
        <Link id="use-cases-accounting-approval-workflows-decisions-ramp"
          href="/tools/accounting/accounts-payable/automated-approval-workflows/ramp" className="text-[#0B162A] hover:underline">
          Ramp
        </Link>, for example, offers robust integration capabilities that can seamlessly connect with various
        financial systems, ensuring a cohesive flow of information.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, the implementation strategy itself must be carefully planned. A phased rollout is often more
        manageable than a full-scale switch. Begin with a pilot program to test the system in a controlled
        environment. This approach allows you to identify potential issues and make necessary adjustments
        before a larger rollout. During the pilot phase, focus on gathering feedback from end-users to refine
        the system. Remember that the human element is as crucial as the technology itself; involve your team
        early and provide adequate training to ensure a smooth transition.</p>
      <p className="text-md text-white shadow-text pt-3">
        These decisions set the foundation for a successful implementation, transforming your accounts
        payable process from a bottleneck into a streamlined operation. With thoughtful planning and
        strategic execution, automated approval workflows can significantly enhance efficiency and accuracy
        in financial operations.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="critical-decisions-for-a-successful-implementation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Critical Decisions for a Successful Implementation
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="critical-decisions-for-a-successful-implementation" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Critical Decisions for a Successful Implementation
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
