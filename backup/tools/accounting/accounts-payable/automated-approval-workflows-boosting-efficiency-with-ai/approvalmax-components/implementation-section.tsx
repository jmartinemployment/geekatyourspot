export default function ImplementationSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying ApprovalMax is a straightforward process, especially when supported by experienced
        consultants like <strong>Geek At Your Spot</strong>. The implementation involves connecting
        ApprovalMax to your existing accounting platform, configuring workflows to match your business&#39;s
        specific approval hierarchy, and setting up automated notifications to keep all stakeholders informed
        of approval status.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the key advantages of ApprovalMax is its pre-built connectors for popular accounting
        platforms, which significantly reduce the time required to go live. These connectors ensure that
        integration is seamless and that data flows smoothly between systems. Additionally, ApprovalMax
        offers the ability to create custom workflows, allowing businesses to tailor the solution to their
        unique needs without extensive coding or IT intervention.</p>
      <p className="text-md text-white shadow-text pt-3">
        Configuration of ApprovalMax involves mapping out existing processes and identifying areas where
        automation can provide the most benefit. This includes setting up rules for approval routing based on
        criteria such as vendor, amount, or department, and establishing escalation paths to handle
        exceptions quickly. By automating these processes, businesses can reduce approval cycle times and
        improve overall efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses looking to extend the capabilities of ApprovalMax, the platform supports advanced
        features like API integration, which allows for further customization and integration with other
        business systems. This flexibility ensures that ApprovalMax can grow with your business, adapting to
        new challenges and requirements as they arise.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek At Your Spot provides comprehensive support throughout the implementation process, ensuring that
        your team is fully trained and that the system is configured to deliver maximum value. Their
        expertise in workflow configuration and data mapping ensures a smooth transition to automated
        approval processes, freeing up your team to focus on strategic initiatives rather than administrative
        tasks.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-approvalmax-in-your-business-environment">
                Implementing ApprovalMax in Your Business Environment
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-approvalmax-in-your-business-environment">
                Implementing ApprovalMax in Your Business Environment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
