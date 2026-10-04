export default function ImplementationSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Dext in a business environment involves several key steps to ensure successful integration
        and operation. One of the primary tasks is setting up the data structure and mapping decisions that
        align with the business&#39;s specific needs. This involves configuring the platform to accommodate
        the unique workflows and data management requirements of the organization.
        <strong> Geek At Your Spot</strong>, as an AI implementation consultancy, plays a crucial role in
        facilitating this process, ensuring that Dext is tailored to fit seamlessly into the existing
        systems.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek At Your Spot assists in configuring approval chains, routing, and automation logic, which are
        critical for optimizing workflows. This customization allows businesses to automate routine tasks
        while maintaining control over more complex decision-making processes. The consultancy also provides
        guidance on leveraging Dext&#39;s features such as AI Assist, which aids in applying
        organization-specific decisions consistently across similar transactions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Furthermore, Dext&#39;s integration capabilities are a significant advantage. With its ability to
        connect with multiple accounting solutions, Dext ensures that businesses can maintain their existing
        software ecosystem without interruption. This integration is essential for businesses that rely on
        various applications to manage their financial data efficiently.</p>
      <p className="text-md text-white shadow-text pt-3">
        The implementation process also involves training users to maximize the benefits of Dext&#39;s
        automation features. Geek At Your Spot provides training and support to ensure that users are
        comfortable with the platform and can fully utilize its capabilities. This support is crucial for
        achieving a smooth transition and realizing the full potential of Dext&#39;s automation in improving
        productivity and reducing manual workload.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, implementing Dext requires careful planning and configuration to align with business
        needs. Geek At Your Spot offers the expertise needed to customize and integrate Dext into existing
        environments, ensuring that businesses can leverage the platform&#39;s full capabilities for enhanced
        efficiency and productivity.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-dext-in-your-business-environment">
                Implementing Dext in Your Business Environment
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-dext-in-your-business-environment">
                Implementing Dext in Your Business Environment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
