
export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing Take the Helm in a small business environment involves a streamlined process designed to
        minimize disruption and maximize efficiency. The journey begins with a clear understanding of the
        client&#39;s existing systems, followed by a phased rollout that ensures smooth integration. The use of
        pre-built connectors with popular platforms like QuickBooks, Xero, and Sage significantly shortens the
        setup time, allowing businesses to start benefiting from Take the Helm&#39;s capabilities almost
        immediately.</p>
      <p className="text-md text-white shadow-text pt-3">
        The initial phase involves a thorough assessment of the client&#39;s current financial systems and
        processes. This step is crucial for identifying the specific needs and potential challenges that might
        arise during integration. Geek @ Your Spot LLC, the consultancy implementing Take the Helm, conducts this
        assessment to tailor the setup process to the client&#39;s unique requirements. This personalized
        approach ensures that the transition to automated&nbsp;cash
        flow forecasting&nbsp;is seamless and effective.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the assessment is complete, the next step is the actual setup of Take the Helm. Thanks to its
        intuitive interface and pre-configured templates, the setup process is quick and straightforward.
        Businesses can connect their accounting software with just a few clicks, and the system begins syncing
        data immediately. This rapid setup is further enhanced by the use of a setup wizard that guides users
        through each step, reducing the learning curve and ensuring that all necessary configurations are in
        place.</p>
      <p className="text-md text-white shadow-text pt-3">
        Following the initial setup, a phased rollout strategy is employed to ensure that all team members are
        comfortable with the new system. This approach allows for gradual integration, where users are
        introduced to the features of Take the Helm in stages. By focusing on one aspect of the system at a time,
        users can master each component before moving on to the next. This method not only builds confidence but
        also ensures that the system is used to its full potential, maximizing the return on investment.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout the implementation process, Geek @ Your Spot LLC provides ongoing support and training to address
        any issues that may arise. This support is critical for ensuring that the system is not only implemented
        correctly but also maintained and optimized over time. By offering expert guidance and practical
        solutions, Geek @ Your Spot LLC helps businesses leverage Take the Helm to its fullest, transforming their
        financial management processes and driving long-term success.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="going-live-with-takethehelm-streamlined-setup-and-integration">
                Going Live with Take the Helm: Streamlined Setup and Integration
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="going-live-with-takethehelm-streamlined-setup-and-integration-lg">
                Going Live with Take the Helm: Streamlined Setup and Integration
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
