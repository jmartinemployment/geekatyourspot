import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Versapay&#39;s architecture is designed to streamline Automated Accounts Receivable by integrating
        seamlessly with existing systems. At the core of Versapay&#39;s solution is its ability to connect with
        enterprise resource planning (<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>) systems,
        allowing businesses to automate the cash application process. This integration eliminates the need for
        manual data entry, saving time and reducing errors. Versapay captures remittance and payment data in
        various formats and uses advanced&nbsp;
        <GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>&nbsp;and optical
        character recognition (OCR) to match payments to open receivables automatically. This automation ensures
        that financial teams have greater control over cash flow, reducing reconciliation delays and enhancing
        accuracy.</p>
      <p className="text-md text-white shadow-text pt-3">
        One standout feature of Versapay is its collaborative accounts receivable capabilities. The platform
        combines automation with a cloud-based network that facilitates communication between teams and
        customers. This collaborative environment is crucial for resolving issues like short-pays or disputes
        quickly, ensuring that the reconciliation process is smooth and efficient. With built-in exception
        workflows, Versapay routes discrepancies to the appropriate team members for resolution, maintaining the
        flow of cash application without disruption.</p>
      <p className="text-md text-white shadow-text pt-3">
        Versapay&#39;s platform also includes a comprehensive dashboard that provides real-time insights into
        accounts receivable performance. Key performance metrics, such as days sales outstanding (DSO) and
        average days to pay (ADP), are readily available, allowing finance teams to monitor trends and adjust
        strategies proactively. This visibility into financial operations not only helps in maintaining cash
        flow but also improves customer satisfaction by ensuring timely and accurate payment processing.</p>
      <p className="text-md text-white shadow-text pt-3">
        Furthermore, Versapay supports a variety of payment methods, including credit cards, ACH, and virtual
        cards, all processed in real-time. This flexibility ensures that customers can choose their preferred
        payment method, enhancing the overall payment experience. By unifying invoicing, B2B payments, and cash
        application, Versapay eliminates system silos, accelerating cash flow and providing a seamless experience
        for both the accounts receivable team and their customers.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Versapay&#39;s architecture supports Automated Accounts Receivable by integrating with
        existing ERP systems, automating payment matching, and providing a collaborative platform for resolving
        payment issues. Its real-time dashboards and flexible payment options further enhance financial
        operations, making it a robust solution for businesses looking to improve their accounts receivable
        process.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-versapays-architecture-powers-automated-accounts-receivable">
                How Versapay&#39;s Architecture Powers Automated Accounts Receivable
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-versapays-architecture-powers-automated-accounts-receivable">
                How Versapay&#39;s Architecture Powers Automated Accounts Receivable
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
