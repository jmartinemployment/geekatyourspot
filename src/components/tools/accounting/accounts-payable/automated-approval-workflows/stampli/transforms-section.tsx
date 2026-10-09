import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Stampli revolutionizes Automated Approval Workflows by eliminating many of the manual tasks that
        consume time and resources. One of its key features is the automation of invoice routing based on
        predefined rules. This means invoices are automatically directed to the appropriate approvers,
        ensuring that each document is reviewed by the right person without unnecessary delays. The result is
        a streamlined process that saves hours each week and reduces the risk of errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        By using&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;to suggest approvers based on historical data, Stampli
        removes the guesswork from the approval process. This not only speeds up decisions but also increases
        transparency, as every step is documented and easily accessible. Employees can override or adjust
        these suggestions as needed, providing flexibility while maintaining efficiency. This adaptability is
        crucial for businesses that need to respond quickly to changing circumstances without sacrificing
        control.</p>
      <p className="text-md text-white shadow-text pt-3">
        Stampli&#39;s integration with existing systems further enhances its utility. By seamlessly connecting
        with an organization&#39;s&nbsp;
        <GlossaryLink slug="erp">ERP</GlossaryLink>, Stampli ensures that all financial data is synchronized
        and up-to-date. This reduces the need for manual data entry and minimizes the chances of
        discrepancies. The platform&#39;s ability to handle complex PO requirements, such as multi-currency
        transactions, further simplifies the approval process, allowing businesses to operate more smoothly
        and with fewer interruptions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another significant advantage is Stampli&#39;s capability to enforce budget controls and provide
        real-time visibility into purchase commitments. This ensures that spending is tracked against budgets
        accurately, preventing overspending and ensuring financial discipline. The centralized system also
        allows for easy access to all invoice-related information, making it simpler for teams to manage
        approvals and resolve any issues that arise.</p>
      <p className="text-md text-white shadow-text pt-3">
        Overall, Stampli&#39;s Automated Approval Workflows transform the AP function from a bottleneck into a
        streamlined operation. By reducing manual intervention and enhancing control, businesses can focus on
        strategic growth rather than administrative tasks. This not only boosts productivity but also improves
        compliance and financial accuracy, making Stampli an invaluable tool for small businesses looking to
        optimize their AP processes.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-stampli-transforms-automated-approval-workflows">
                How Stampli Transforms Automated Approval Workflows
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-stampli-transforms-automated-approval-workflows">
                How Stampli Transforms Automated Approval Workflows
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
