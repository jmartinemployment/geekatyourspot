import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function InPracticeSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The transition to Automated Fraud &amp; Duplicate Payment Controls requires careful planning and
        execution. Start by mapping out the entire&nbsp;
        <GlossaryLink slug="accounts-payable" className="text-[#0B162A] hover:underline">accounts payable</GlossaryLink>
        &nbsp;workflow. Identify each step from invoice receipt to payment execution. Understanding this
        sequence helps in pinpointing where automation can bring the most benefit. For example, automating
        the invoice matching process can drastically reduce errors and speed up approvals.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration with existing systems is a critical phase. Tools like&nbsp;
        <Link id="use-cases-accounting-fraud-controls-practice-bill"
          href="/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/bill" className="text-[#0B162A] hover:underline">
          Bill
        </Link>&nbsp;and&nbsp;
        <Link id="use-cases-accounting-fraud-controls-practice-ramp"
          href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp" className="text-[#0B162A] hover:underline">
          Ramp
        </Link>&nbsp;are designed to work seamlessly with platforms such as QuickBooks and other&nbsp;
        <GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;systems.
        This integration ensures that data flows smoothly between systems, maintaining accuracy and
        consistency. It also allows for real-time updates, giving you a clear picture of your financial
        status at any given moment.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data preparation is another key element. Ensure that all data is cleaned and standardized before
        entering the new system. This involves eliminating duplicates, correcting errors, and filling in
        missing information. Accurate data is fundamental for the&nbsp;
        <GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>&nbsp;algorithms
        to function correctly and detect anomalies effectively. Without clean data, the risk of false
        positives and negatives increases, compromising the system&#39;s reliability.</p>
      <p className="text-md text-white shadow-text pt-3">
        The rollout also involves significant changes for the people involved. Employees may need to shift
        from manual data entry to more analytical roles, focusing on interpreting data insights rather than
        inputting data. This shift often increases job satisfaction, as employees engage in more strategic
        tasks. However, it requires thorough training and support to ensure everyone is comfortable with the
        new processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, continuous monitoring and feedback loops are necessary to refine the system. Regularly
        review system performance and gather feedback from users. This helps in identifying any glitches or
        inefficiencies that need addressing. Over time, as the system learns from new data, its accuracy and
        effectiveness in detecting fraud and duplicate payments will improve. This ongoing improvement is
        essential for maintaining a robust and reliable accounts payable process.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="rolling-out-automated-controls-in-practice" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Rolling Out Automated Controls in Practice
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
              <h2 id="rolling-out-automated-controls-in-practice" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Rolling Out Automated Controls in Practice
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
