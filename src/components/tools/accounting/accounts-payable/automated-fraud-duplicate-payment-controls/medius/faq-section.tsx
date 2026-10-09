import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#025E73] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="frequently-asked-questions" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What&#39;s the difference between statement reconciliation and invoice matching?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Invoice matching checks a single invoice against a purchase order and sometimes a receipt.
              Statement reconciliation examines the entire supplier statement, including every invoice,
              credit, and payment the supplier claims is outstanding, against your AP records. This process
              identifies missing invoices or duplicate payments, which invoice matching alone might miss, as
              it compares the whole picture rather than one invoice at a time.</p>
            <p className="text-md text-white shadow-text pt-3">
              Source:&nbsp;
              <a id="tools-accounting-fraud-controls-medius-faq-statement-reconciliation"
                href="https://www.medius.com/solutions/medius-accounts-payable-automation/statement-reconciliation/"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Medius Accounts Payable Automation
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does AI-driven statement reconciliation software work?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              <GlossaryLink slug="ai">AI</GlossaryLink>-driven statement reconciliation software automatically
              reads a supplier statement, regardless of format, and matches each line against your existing
              invoice and payment records. Lines that
              match require no further action, while exceptions like missing invoices, duplicates, or
              mismatched amounts are flagged for review, eliminating the need for manual line-by-line
              checks.</p>
            <p className="text-md text-white shadow-text pt-3">
              Source:&nbsp;
              <a id="tools-accounting-fraud-controls-medius-faq-statement-reconciliation-2"
                href="https://www.medius.com/solutions/medius-accounts-payable-automation/statement-reconciliation/"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Medius Accounts Payable Automation
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can accounts payable reconciliation software prevent duplicate payments?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, it can. Duplicate payments typically occur when invoices are processed manually, leading to
              errors. Reconciliation software identifies these duplicates by cross-referencing all payment
              records, ensuring each invoice is only paid once.</p>
            <p className="text-md text-white shadow-text pt-3">
              Source:&nbsp;
              <a id="tools-accounting-fraud-controls-medius-faq-statement-reconciliation-3"
                href="https://www.medius.com/solutions/medius-accounts-payable-automation/statement-reconciliation/"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Medius Accounts Payable Automation
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What currencies does Medius support for payouts?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Medius supports over 180 currencies by default. Additional currencies can be added manually or
              synced from your&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;if needed.</p>
            <p className="text-md text-white shadow-text pt-3">
              Source:&nbsp;
              <a id="tools-accounting-fraud-controls-medius-faq-payments"
                href="https://www.medius.com/solutions/medius-payments/how-payments-work/"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Medius Payments
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What are the benefits or tradeoffs of each payment method?
            </h3>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
              <li>ACH / Direct Deposit: Low-cost electronic transfer to U.S. bank accounts. May take a few days.</li>
              <li>Check: Sent via postal mail. Slower delivery. Available in USD and CAD. Reliability varies by country. Overnight shipping is available for urgent checks.</li>
              <li>Wire Transfer: Fast and reliable for domestic and international payments. Higher cost per transaction.</li>
              <li>Virtual card (Vcard): Secure, one-time-use card for supplier payments. Offers better control and rebates. Supplier acceptance may vary.</li>
              <li>SEPA: Cost-effective Eurozone bank transfer. Fast within Europe. Supports EUR only.</li>
              <li>BACS (UK): Low-cost UK domestic transfer. Slower (2–3 days) compared to CHAPS.</li>
              <li>CHAPS (UK): High-speed, same-day UK domestic transfer. Higher fees than BACS.</li>
              <li>BankGiro (Nordics): Common low-cost local payment method in Sweden. Region-specific.</li>
            </ul>
            <p className="text-md text-white shadow-text pt-3">
              Source:&nbsp;
              <a id="tools-accounting-fraud-controls-medius-faq-payments-2"
                href="https://www.medius.com/solutions/medius-payments/how-payments-work/"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Medius Payments
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What types of anomalies can Medius Fraud Detection Software identify?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Medius Fraud Detection Software can identify various anomalies through its advanced risk
              detection capabilities. These include duplicate invoices, discrepancies in payment amounts,
              changes in supplier information, and mismatched invoice details. The software also flags unusual
              patterns that may indicate potential fraud, helping businesses to prevent financial losses
              before they occur.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does it catch fraud before a payment goes out?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Medius uses intelligent anomaly detection to identify potential fraud and duplicate payments
              before money leaves the business. It flags unusual invoice amounts, supplier-detail changes, and
              patterns that deserve a closer look. This proactive approach ensures that suspicious
              transactions are caught early, reducing the risk of financial losses.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What kind of security measures does the software provide?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Medius provides enterprise-grade security measures, including encryption and role-based access
              controls. It also ensures compliance with global standards such as GDPR and SOC, safeguarding
              sensitive financial information and maintaining data integrity.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does this software require a completely separate integration?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Medius integrates with existing systems, allowing businesses to enhance their&nbsp;
              <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;processes without
              requiring a completely separate integration. This seamless integration helps streamline
              operations and improve efficiency.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
