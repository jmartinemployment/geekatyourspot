export default function KeyFactorsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing automated spreadsheet data systems can revolutionize cash flow management, but not all
        implementations are successful. The difference between a seamless integration and a stalled project often
        lies in the attention to detail during setup and ongoing management. Here are the critical factors that can
        make or break the implementation process.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Thorough Planning and Clear Objectives
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        A clear roadmap is essential. This includes defining what success looks like from the very beginning.
        Businesses should set clear, achievable goals, such as reducing data entry errors by a specific percentage
        or slashing the time spent on manual processes. This clarity helps guide the implementation process and
        keeps the team focused on the end goals. Without a clear vision, projects can easily lose direction,
        resulting in wasted resources and frustration.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Continuous Monitoring and Tweaking
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Automation is not a set-it-and-forget-it solution. Continuous monitoring is crucial to ensure that the
        system is delivering the expected results. Regular audits can help in identifying any discrepancies or areas
        for improvement. Tools like Cashflowfrog excel at breaking down forecasts by dimensions such as vendor or
        customer, providing insights that help in fine-tuning the system for better accuracy and performance. This
        ongoing adjustment ensures the system remains aligned with business needs and external changes.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Scalability and Flexibility
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Successful implementations are built with growth in mind. They should be scalable to accommodate increased
        data loads and flexible enough to adapt to evolving business requirements. For instance, Dryrun offers
        transaction-level precision, allowing businesses to manage cash flow at a granular level. This scalability
        ensures that as the business grows, the system can handle the increased complexity without needing a
        complete overhaul.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Strong Support and Training
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        A well-trained team is essential for the success of any automated system. Providing thorough training
        ensures that all users understand how to use the tools effectively. Moreover, having a reliable support
        system in place is crucial for addressing any issues that may arise. Whether it’s troubleshooting technical
        glitches or refining processes, support from experienced professionals can make a significant difference in
        maintaining the momentum of the implementation.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="key-factors-for-a-successful-implementation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Key Factors for a Successful Implementation
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="key-factors-for-a-successful-implementation" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Key Factors for a Successful Implementation
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
