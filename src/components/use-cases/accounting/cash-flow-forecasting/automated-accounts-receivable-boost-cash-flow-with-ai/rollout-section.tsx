export default function RolloutSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rolling out an automated accounts receivable solution involves a structured sequence of steps to ensure a
        smooth transition and successful implementation. The process begins with a detailed assessment of current
        workflows and financial processes. This step identifies bottlenecks and inefficiencies that the new system
        can address, providing a tailored solution rather than a one-size-fits-all approach.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the assessment is complete, the next step is selecting the right technologies that align with your
        business needs. Tools like Chaserhq and Invoiced are evaluated based on their capabilities to handle
        existing challenges, such as automating payment reminders or integrating with current accounting software.
        The selection phase is critical, as the chosen tool will directly impact the efficiency gains and user
        experience.</p>
      <p className="text-md text-white shadow-text pt-3">
        Following the selection, the implementation phase begins, which typically involves setting up the software
        to match your specific business requirements. This includes configuring automated workflows, such as
        scheduling reminders or setting up dashboards for real-time tracking. A pilot test often precedes full
        deployment, allowing you to observe the system&#39;s performance in a controlled environment.</p>
      <p className="text-md text-white shadow-text pt-3">
        During this phase, training sessions are conducted to familiarize staff with the new system. This is crucial
        for ensuring that the team is comfortable with the technology and can leverage its full potential. Training
        should focus not only on operational aspects but also on interpreting data outputs to make informed
        financial decisions.</p>
      <p className="text-md text-white shadow-text pt-3">
        The final step involves going live with the system across the entire organization. Continuous monitoring and
        feedback loops are established to track the system&#39;s effectiveness against predefined KPIs. Adjustments
        and optimizations are made based on this feedback to enhance performance and address any unforeseen issues.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-real-world-rollout-of-automated-accounts-receivable" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Real-World Rollout of Automated Accounts Receivable
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-real-world-rollout-of-automated-accounts-receivable" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Real-World Rollout of Automated Accounts Receivable
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
