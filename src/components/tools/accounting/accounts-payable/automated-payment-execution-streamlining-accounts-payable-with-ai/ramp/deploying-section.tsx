export default function DeployingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing Ramp into an existing business environment involves several key steps that ensure a
        smooth transition and maximize the benefits of Automated Payment Execution. Geek @ Your Spot, as a
        consultancy specializing in AI implementation, plays a crucial role in this process, offering
        expertise and support tailored to small businesses.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the first steps in deploying Ramp is to assess the current accounts payable workflow and
        identify areas where automation can bring the most value. This involves mapping out existing processes
        and data structures to ensure that Ramp integrates seamlessly with the business&#39;s financial
        systems. Geek @ Your Spot assists in this phase by providing a detailed analysis and recommending
        optimizations that can enhance efficiency and accuracy.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data mapping and configuration are critical components of the deployment process. Ramp&#39;s
        integration capabilities allow it to connect with various accounting software, but it&#39;s essential
        to ensure that data flows correctly between systems. Geek @ Your Spot helps configure these
        connections, ensuring that all vendor details, GL codes, and payment statuses are accurately
        aligned.</p>
      <p className="text-md text-white shadow-text pt-3">
        Setting up approval workflows is another important aspect of deploying Ramp. The platform supports
        customizable approval chains, which can be tailored to match the organizational structure and specific
        business needs. By configuring these workflows, businesses can ensure that invoices are routed to the
        appropriate approvers, reducing bottlenecks and speeding up the payment process.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot also provides training and support to ensure that the client&#39;s team is fully
        equipped to use Ramp effectively. This includes educating staff on how to navigate the platform, manage
        invoices, and troubleshoot any issues that may arise. The goal is to empower the team to leverage
        Ramp&#39;s full capabilities, ultimately leading to more efficient and error-free Automated Payment
        Execution.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, ongoing support and monitoring are essential to ensure that Ramp continues to operate
        optimally within the client&#39;s environment. Geek @ Your Spot offers continuous support, helping to
        resolve any technical issues and providing updates on new features or enhancements that could benefit
        the business. This ensures that the client can focus on strategic goals while relying on a robust and
        reliable accounts payable system.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="deploying-ramp-in-your-existing-environment">
                Deploying Ramp in Your Existing Environment
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="deploying-ramp-in-your-existing-environment">
                Deploying Ramp in Your Existing Environment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
