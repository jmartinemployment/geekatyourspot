export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        ApprovalMax is designed to streamline the approval processes for accounts payable by automating
        workflows and reducing manual errors. It integrates with popular accounting platforms like Xero,
        QuickBooks Online, and Oracle NetSuite, allowing businesses to manage approvals without disrupting
        existing systems. This integration means that approved documents are automatically synced back to the
        accounting platform with their approval records attached, ensuring a seamless operation for users.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform supports multi-level and customizable approval workflows, which can be tailored to fit
        the unique needs of any organization. This flexibility is crucial for businesses that require
        specific approval paths based on factors such as amount, vendor, or department. By setting the rules
        once, each request follows the defined path automatically, eliminating the need for manual
        intervention and reducing the risk of bottlenecks.</p>
      <p className="text-md text-white shadow-text pt-3">
        ApprovalMax also provides a robust tracking system. Each approved document generates an immutable,
        time-stamped record detailing who approved it, what they saw, and when the approval occurred. This
        feature enhances transparency and accountability, making it easier for businesses to comply with
        auditing requirements. Additionally, the system includes substitution rules to prevent workflow
        stalls when an approver is unavailable, ensuring that approvals continue without delay.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        Each approved document carries an audit report showing who approved it, what they saw and when,
        attached to the transaction in your accounting platform.</p>
      <p className="text-md text-white shadow-text pt-3">
        The architecture of ApprovalMax is designed for scalability, allowing it to handle complex, multi-step
        approval processes without giving approvers direct access to the accounting system itself. This
        separation ensures that sensitive financial data remains secure while still providing the necessary
        oversight and control over financial operations.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="understanding-approvalmaxs-architecture-and-mechanics">
                Understanding ApprovalMax&#39;s Architecture and Mechanics
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="understanding-approvalmaxs-architecture-and-mechanics">
                Understanding ApprovalMax&#39;s Architecture and Mechanics
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
