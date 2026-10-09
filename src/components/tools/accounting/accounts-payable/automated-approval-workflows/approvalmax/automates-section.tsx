export default function AutomatesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Approvalmax transforms the way small businesses manage their approval processes by automating
        workflows that traditionally consume significant time and resources. By integrating with popular
        accounting platforms like Xero, QuickBooks Online, and Oracle NetSuite, Approvalmax offers a seamless
        transition from manual approvals to automated systems. This integration ensures that businesses can
        maintain control over their financial processes while reducing the likelihood of human error.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core functionality of Approvalmax lies in its ability to automate multi-step approval workflows.
        These workflows can be customized to fit the specific needs of a business, whether it&#39;s for
        vendor bills, purchase orders, or expense reports. By setting up these workflows, businesses can
        ensure that each approval follows a predetermined path, reducing bottlenecks and speeding up the
        process. This capability is particularly beneficial for businesses that handle a large volume of
        transactions and need to maintain strict oversight over their financial operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approvalmax also offers features like three-way matching, which compares invoices, purchase orders,
        and receipts to identify discrepancies before approvals are finalized. This feature helps prevent
        errors and ensures that all financial records are accurate and up-to-date. Additionally, the
        platform&#39;s integration with accounting software allows for real-time visibility into financial
        data, enabling informed decision-making and improving overall financial management.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the standout features of Approvalmax is its ability to create and manage approval workflows
        without requiring approvers to have access to the underlying accounting software. This means that
        businesses can involve multiple stakeholders in the approval process without compromising the
        security of their financial data. The platform also supports mobile approvals, allowing
        decision-makers to approve requests on the go, further enhancing the efficiency of the approval
        process.</p>
      <p className="text-md text-white shadow-text pt-3">
        The architecture of Approvalmax is designed to be user-friendly and intuitive, making it accessible
        to businesses of all sizes. With its drag-and-drop interface, users can easily configure approval
        workflows to match their organizational structure. This flexibility allows businesses to adapt the
        platform to their specific needs, ensuring that the automated approval workflows align with their
        existing processes and policies.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Approvalmax provides a robust solution for automating approval workflows, offering
        features that enhance efficiency, accuracy, and control over financial processes. By leveraging its
        integrations with leading accounting platforms, Approvalmax ensures that businesses can streamline
        their operations and focus on strategic growth initiatives. Whether it&#39;s reducing errors through
        automated matching or enabling mobile approvals, Approvalmax stands out as a comprehensive tool for
        managing complex approval workflows efficiently.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-approvalmax-automates-approval-workflows">
                How Approvalmax Automates Approval Workflows
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-approvalmax-automates-approval-workflows">
                How Approvalmax Automates Approval Workflows
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
