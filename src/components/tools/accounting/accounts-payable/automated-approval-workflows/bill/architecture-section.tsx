import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Bill is designed to streamline and automate&nbsp;
        <GlossaryLink slug="accounts-payable" className="text-[#0B162A] hover:underline">accounts payable</GlossaryLink>&nbsp;processes,
        particularly focusing on automated approval workflows. At its core, Bill uses&nbsp;
        <GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>-driven
        technology to reduce manual data entry and improve accuracy in invoice processing. This system
        captures invoice details automatically, applying coding based on historical patterns or predefined
        rules. This feature alone can cut down manual processing time by 20%, allowing staff to focus on more
        strategic tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the standout features of Bill is its ability to tailor approval workflows to fit specific
        business rules. This means that businesses can set up custom workflows that automatically route
        invoices to the correct approvers based on criteria like amount, vendor, or department. This
        automatic routing helps to ensure that invoices are processed efficiently, reducing the
        back-and-forth typically seen in manual processes. Each step is tracked and logged, providing a
        comprehensive audit trail that enhances compliance and visibility.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bill&#39;s architecture supports multi-line item billing, which is particularly useful for
        businesses dealing with complex invoices. The AI coding agent available on the Team plan and above
        automatically codes these multi-line items with 99% accuracy. This reduces the likelihood of errors
        and ensures that all necessary invoice details are captured accurately. The system also offers
        automated 2- and 3-way matching, comparing invoices against purchase orders and receipts to further
        minimize errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s payment capabilities are extensive, allowing payments via ACH, virtual card,
        credit card, check, and international wire transfers. Custom approval policies and discounts for
        approver-only users are available starting on the Corporate plan, making it scalable as businesses
        grow. Bill also offers mobile payment approvals, enabling users to approve invoices on the go through
        its mobile app, which is compatible with both Android and iPhone devices.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bill employs a robust&nbsp;
        <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;that
        facilitates seamless integration with other platforms, such as QuickBooks Online and Xero. This
        integration capability is crucial for businesses that rely on multiple software systems to manage
        their financial operations. By syncing data effortlessly between platforms, Bill ensures that all
        financial data is accurate and up-to-date, reducing the need for manual data transfers and minimizing
        the risk of errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses looking to maintain a high level of operational efficiency, Bill&#39;s architecture is
        designed to support scalability. The system can handle increasing volumes of invoices and approvals
        without compromising on speed or accuracy, making it an ideal choice for growing businesses. With its
        AI-driven capabilities and flexible workflow configurations, Bill provides a comprehensive solution
        for automating accounts payable processes, particularly in the realm of automated approval
        workflows.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="understanding-bills-architecture-and-functionality">
                Understanding Bill&#39;s Architecture and Functionality
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="understanding-bills-architecture-and-functionality">
                Understanding Bill&#39;s Architecture and Functionality
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
