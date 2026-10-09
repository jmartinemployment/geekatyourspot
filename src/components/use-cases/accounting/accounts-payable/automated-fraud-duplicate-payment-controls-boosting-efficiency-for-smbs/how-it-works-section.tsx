import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Automated Fraud &amp; Duplicate Payment Controls revolutionize the way businesses handle&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>. At the core of this solution
        is the integration of <GlossaryLink slug="ai">AI</GlossaryLink> and&nbsp;
        <GlossaryLink slug="machine-learning">machine learning</GlossaryLink>&nbsp;technologies that
        streamline processes and enhance accuracy. The system operates through several key components, each
        designed to tackle specific pain points in AP management.</p>
      <p className="text-md text-white shadow-text pt-3">
        First, AI-Powered OCR Capture technology transforms the way invoices are processed. This tool
        automatically reads incoming invoice PDFs, extracting key data fields with precision. Gone are the
        days of manual entry errors caused by typos or misread figures. This technology ensures that the data
        captured is consistent and accurate, reducing the likelihood of errors that lead to fraud or
        duplicate payments.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, Algorithmic Fuzzy Matching comes into play. This advanced feature goes beyond basic exact-match
        logic by using algorithms to identify similarities in financial data. It detects near-identical
        dollar amounts, matching dates, and slight vendor name variations that could otherwise pass through
        unnoticed until it&#39;s too late. By catching these discrepancies early, businesses can prevent
        unauthorized payments before they occur.</p>
      <p className="text-md text-white shadow-text pt-3">
        The Automated Three-Way Matching Loops further fortify the system. This process cross-references
        incoming invoices against purchase orders and warehouse receipts in real time. If there is a mismatch
        in line items or quantities, the system immediately quarantines the invoice and alerts management.
        This proactive approach prevents errors from escalating into costly financial discrepancies.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tools like&nbsp;
        <Link id="use-cases-accounting-fraud-controls-how-medius"
          href="/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/medius" className="text-[#C83803] hover:underline">
          Medius
        </Link>,&nbsp;
        <Link id="use-cases-accounting-fraud-controls-how-tipalti"
          href="/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/tipalti" className="text-[#C83803] hover:underline">
          Tipalti
        </Link>,&nbsp;
        <Link id="use-cases-accounting-fraud-controls-how-stampli"
          href="/tools/accounting/accounts-payable/automated-approval-workflows/stampli" className="text-[#C83803] hover:underline">
          Stampli
        </Link>,&nbsp;
        <Link id="use-cases-accounting-fraud-controls-how-bill"
          href="/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/bill" className="text-[#C83803] hover:underline">
          Bill
        </Link>, and&nbsp;
        <Link id="use-cases-accounting-fraud-controls-how-ramp"
          href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp" className="text-[#C83803] hover:underline">
          Ramp
        </Link>&nbsp;are pivotal in implementing these controls. Each offers unique functionalities tailored
        to enhance fraud detection and streamline payment processes. For instance, Medius uses AI-driven
        anomaly detection to identify suspicious patterns, while Tipalti ensures compliance and security
        through robust verification workflows. Stampli&#39;s intuitive interface aids in managing invoices
        seamlessly, and Bill&#39;s predictive algorithms detect potential duplicates before they become
        issues. Ramp excels in automating entire workflows, ensuring that payments are processed efficiently
        and securely.</p>
      <p className="text-md text-white shadow-text pt-3">
        By integrating such technologies, businesses can shift from a reactive to a proactive stance on
        financial management. The system not only prevents fraud and errors but also enhances overall
        efficiency, allowing staff to focus on strategic initiatives rather than administrative burdens.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-automated-fraud-duplicate-payment-controls-work" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Automated Fraud &amp; Duplicate Payment Controls Work
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
              <h2 id="how-automated-fraud-duplicate-payment-controls-work" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Automated Fraud &amp; Duplicate Payment Controls Work
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
