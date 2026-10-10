export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing Upflow in a client&#39;s existing environment is a well-orchestrated process designed to
        minimize disruption and maximize efficiency. The journey to going live with Upflow is significantly
        shortened by its pre-built connectors and templated setup options, which allow for a phased rollout tailored
        to the business&#39;s specific needs. This means that businesses can start benefiting from automated
        accounts receivable processes without the lengthy delays often associated with software implementations.</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Initial Consultation: The process begins with an in-depth consultation to understand the specific needs and existing systems of the client. This step is crucial for tailoring the implementation to fit seamlessly into their current operations.</li>
        <li>System Integration: Upflow&#39;s architecture supports integration with a variety of ERP and accounting tools. This flexibility ensures that data flows smoothly between systems, reducing manual entry and the risk of errors.</li>
        <li>Data Migration and Mapping: Once integration points are established, data migration is meticulously planned. Upflow’s ability to map data accurately ensures that all historical and current accounts receivable data is captured and ready for processing.</li>
        <li>Configuration and Customization: The next phase involves configuring Upflow to align with the client&#39;s specific business processes. This includes setting up automated workflows, approval chains, and any necessary customizations to meet unique business requirements.</li>
        <li>Testing and Validation: Before going live, rigorous testing is conducted to validate the system’s performance and ensure all processes function as intended. This phase is critical to catching any potential issues before full deployment.</li>
        <li>Go Live and Training: With testing complete, the system goes live. Comprehensive training sessions are conducted to ensure that the client’s team is fully equipped to leverage Upflow’s capabilities effectively from day one.</li>
      </ol>
      <p className="text-md text-white shadow-text pt-3">
        The phased rollout approach ensures that each step is completed thoroughly, minimizing risks and ensuring a
        smooth transition to automated accounts receivable management. By leveraging Upflow’s pre-built connectors
        and templated setups, Geek @ Your Spot ensures that businesses can quickly adapt to the new system with
        minimal downtime, allowing them to focus on strategic growth rather than operational hurdles.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="going-live-with-upflow-streamlined-implementation">
                Going Live with Upflow: Streamlined Implementation
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="going-live-with-upflow-streamlined-implementation">
                Going Live with Upflow: Streamlined Implementation
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
