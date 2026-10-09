import Link from "next/link";

export default function InPracticeSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rolling out Automated Payment Execution in a real-world setting involves a detailed sequence of steps.
        Each phase requires careful planning and execution to ensure success. Begin with a thorough assessment
        of your current processes. Identify areas that will benefit most from automation, such as invoice
        receipt and data entry. This assessment lays the groundwork for a targeted implementation plan.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next step is data migration. Ensure that all existing data is accurate and ready to be integrated
        into the new system. This process can be time-consuming but is crucial for maintaining data integrity.
        Using tools like&nbsp;
        <Link id="use-cases-accounting-payment-execution-practice-bill"
          href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/bill" className="text-[#0B162A] hover:underline">
          Bill
        </Link>&nbsp;and&nbsp;
        <Link id="use-cases-accounting-payment-execution-practice-melio"
          href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/melio" className="text-[#0B162A] hover:underline">
          Melio
        </Link>, which offer seamless data transfer capabilities, can significantly ease this transition.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration with existing systems is the backbone of Automated Payment Execution. The goal is to
        create a unified workflow that connects seamlessly with your accounting software. This ensures that
        data flows smoothly without the need for manual intervention. Platforms like&nbsp;
        <Link id="use-cases-accounting-payment-execution-practice-avidxchange"
          href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/avidxchange" className="text-[#0B162A] hover:underline">
          AvidXchange
        </Link>&nbsp;and&nbsp;
        <Link id="use-cases-accounting-payment-execution-practice-tipalti"
          href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/tipalti" className="text-[#0B162A] hover:underline">
          Tipalti
        </Link>&nbsp;support a variety of integrations, making them ideal choices for businesses with complex
        accounting needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        As the system goes live, training becomes essential. Equip your team with the knowledge to use the new
        tools effectively. This includes understanding how to manage the Automated Payment Execution process
        and troubleshoot common issues. Training should be comprehensive, covering everything from basic
        operations to advanced features. This step is crucial for maximizing the benefits of automation and
        ensuring that your team is comfortable with the new processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, monitor and adjust. After implementation, continuously track the system&#39;s performance.
        Look for areas where efficiency could be improved and make adjustments as necessary. Regularly review
        your goals and metrics to ensure they align with business objectives. This iterative process helps
        refine the system, ensuring it continues to deliver value over time.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="implementing-automated-payment-execution-in-practice" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Implementing Automated Payment Execution in Practice
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="implementing-automated-payment-execution-in-practice" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Implementing Automated Payment Execution in Practice
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
