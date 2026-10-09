import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Medius operates as a comprehensive&nbsp;
        <GlossaryLink slug="accounts-payable" className="text-[#0B162A] hover:underline">accounts payable</GlossaryLink>
        &nbsp;automation platform, specifically designed to tackle challenges like invoice fraud and duplicate
        payments. The software leverages advanced&nbsp;
        <GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>&nbsp;algorithms
        and&nbsp;
        <GlossaryLink slug="machine-learning" className="text-[#0B162A] hover:underline">machine learning</GlossaryLink>
        &nbsp;to analyze vast amounts of invoice data in real time. This capability allows Medius to identify
        patterns and anomalies that traditional methods might miss, ensuring that fraudulent activities are
        flagged before they can cause financial harm. The system is continuously learning from new data,
        enhancing its detection capabilities over time, which means it becomes more effective as it processes
        more transactions.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core of Medius&#39;s architecture is its ability to integrate seamlessly with existing enterprise
        resource planning (<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>)
        systems. This integration enables real-time data exchange, allowing Medius to capture and process
        invoices directly from multiple sources, whether they are paper, PDF, or through a supplier portal. The
        platform&#39;s AI-driven statement reconciliation feature automatically matches supplier statements to
        invoices, identifying discrepancies such as missing or duplicate invoices before payments are
        executed. This ensures that all transactions are accurate and that any anomalies are addressed
        promptly.</p>
      <p className="text-md text-white shadow-text pt-3">
        Medius&#39;s architecture also includes robust fraud detection mechanisms. These mechanisms utilize AI
        to monitor invoice data for unusual patterns and suspicious activities, such as unexpected changes in
        supplier information or duplicate invoice numbers. The platform provides real-time alerts and risk
        scoring, which helps accounts payable teams quickly identify and address potential fraud. This
        proactive approach not only reduces the risk of financial losses but also enhances the overall
        security of financial operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Additionally, Medius offers a market-leading three-way matching process that automatically matches
        invoices against purchase orders and goods receipts. This feature eliminates the need for manual
        matching, reducing errors and speeding up the approval process. By automating these tasks, Medius
        frees up valuable time for finance teams, allowing them to focus on more strategic activities rather
        than being bogged down by manual processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s architecture is designed to be scalable and adaptable, making it suitable for
        businesses of various sizes, including small businesses in West Palm Beach, Broward, and Miami-Dade
        counties. Medius&#39;s ability to handle complex, multi-PO invoices and its support for over 180
        currencies further demonstrate its flexibility and global reach. This scalability ensures that as a
        business grows, Medius can continue to meet its accounts payable needs without requiring significant
        changes to the existing infrastructure.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-medius-works-real-mechanics-and-architecture">
                How Medius Works: Real Mechanics and Architecture
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-medius-works-real-mechanics-and-architecture">
                How Medius Works: Real Mechanics and Architecture
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
