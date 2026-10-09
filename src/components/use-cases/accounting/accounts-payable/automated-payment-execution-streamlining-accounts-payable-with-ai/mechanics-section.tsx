import Link from "next/link";

export default function MechanicsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Automated Payment Execution streamlines the entire accounts payable process from start to finish,
        transforming a traditionally manual workflow into an efficient, error-reducing system. This approach
        integrates several key phases that ensure accuracy and speed in payment processing.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process begins with automated data capture. Tools like&nbsp;
        <Link id="use-cases-accounting-payment-execution-mechanics-bill"
          href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/bill" className="text-[#C83803] hover:underline">
          Bill
        </Link>&nbsp;use optical character recognition (OCR) technology to extract invoice details, reducing
        the need for manual entry and minimizing errors. This step ensures that all relevant invoice data is
        accurately captured and ready for the next stage.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, the data is seamlessly integrated into the business&#39;s existing financial systems. This
        integration is crucial for maintaining consistent records and ensuring that all financial data is
        up-to-date. Platforms such as&nbsp;
        <Link id="use-cases-accounting-payment-execution-mechanics-avidxchange"
          href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/avidxchange" className="text-[#C83803] hover:underline">
          AvidXchange
        </Link>&nbsp;facilitate this integration, allowing for real-time data updates and minimizing
        discrepancies.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the data is in the system, the focus shifts to automated approval workflows. These workflows are
        configured to route invoices to the appropriate approvers based on predefined rules, such as
        department or payment threshold. This ensures that invoices are reviewed and approved in a timely
        manner, reducing bottlenecks and speeding up the payment process.&nbsp;
        <Link id="use-cases-accounting-payment-execution-mechanics-tipalti"
          href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/tipalti" className="text-[#C83803] hover:underline">
          Tipalti
        </Link>&nbsp;is one such tool that supports configurable approval processes, enhancing control and
        accountability.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, the execution of payments is automated. This includes scheduling payments to ensure they are
        made on time, avoiding late fees and maintaining good vendor relationships. Tools like&nbsp;
        <Link id="use-cases-accounting-payment-execution-mechanics-melio"
          href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/melio" className="text-[#C83803] hover:underline">
          Melio
        </Link>&nbsp;allow businesses to automate payment execution across multiple methods, including ACH,
        checks, and virtual cards, providing flexibility and efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout this process,&nbsp;
        <Link id="use-cases-accounting-payment-execution-mechanics-ramp"
          href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp" className="text-[#C83803] hover:underline">
          Ramp
        </Link>&nbsp;ensures that all transactions are tracked and recorded, providing a comprehensive audit
        trail. This not only helps in maintaining compliance but also offers valuable insights into spending
        patterns, enabling better financial decision-making.</p>
      <p className="text-md text-white shadow-text pt-3">
        By implementing Automated Payment Execution, businesses can achieve significant improvements in
        efficiency, accuracy, and control over their accounts payable processes. This approach not only
        reduces the time and resources needed to manage AP but also mitigates the risks associated with manual
        processes, paving the way for sustained business growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-mechanics-of-automated-payment-execution" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Mechanics of Automated Payment Execution
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-mechanics-of-automated-payment-execution" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Mechanics of Automated Payment Execution
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
