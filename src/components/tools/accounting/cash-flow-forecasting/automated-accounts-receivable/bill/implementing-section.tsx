export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing Bill into your existing environment is a streamlined process, thanks to its pre-built
        connectors and phased rollout approach. This makes the transition smoother and faster, minimizing disruption
        to your daily operations. The process begins with an assessment of your current systems to identify
        integration points. Bill&#39;s pre-built connectors for platforms like QuickBooks, Xero, and Sage Intacct
        mean less custom coding and quicker integration. This significantly reduces the time to go live, allowing
        you to start reaping the benefits of automation sooner.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once integration points are identified, the next step is data migration. Bill supports a phased data
        migration strategy, which allows you to move data incrementally rather than all at once. This reduces the
        risk of errors and ensures that critical data is accurately transferred. During this phase, Bill’s team
        works closely with your IT staff to map data correctly, ensuring seamless transition and minimal downtime.</p>
      <p className="text-md text-white shadow-text pt-3">
        After data migration, a phased rollout is implemented. This involves deploying Bill in stages, starting with
        a pilot program. The pilot phase allows you to test the system in a controlled environment, addressing any
        issues before a full-scale deployment. This step-by-step rollout helps in fine-tuning the system to meet
        your specific needs and ensures that your team is comfortable with the new processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Training is an integral part of the implementation process. Bill provides comprehensive training sessions
        tailored to your team’s needs. These sessions cover everything from basic navigation to advanced features,
        ensuring that your staff can effectively use the software from day one. Ongoing support is also available to
        address any questions or issues that arise post-implementation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, continuous monitoring and optimization ensure that Bill operates at peak efficiency. Regular
        check-ins and system audits help identify any areas for improvement, allowing you to adapt and optimize your
        processes as your business grows. This proactive approach not only maximizes the benefits of Bill but also
        ensures that your automated accounts receivable process remains efficient and effective.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-bill-in-your-existing-environment">
                Implementing Bill in Your Existing Environment
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-bill-in-your-existing-environment">
                Implementing Bill in Your Existing Environment
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
