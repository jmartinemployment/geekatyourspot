/**
 * Questions buyers ask about capturing invoice data. They moved here from the approval workflows
 * pillar, which had carried them by mistake. The page builds its FAQPage
 * structured data from this same list, so the markup can never drift from what the page shows.
 */
export const DATA_ENTRY_QUESTIONS = [
  {
    question: "What is automated invoice data entry?",
    answer:
      "Automated invoice data entry uses AI to capture and input invoice details into your accounting system without manual typing. This saves time and reduces errors, letting your team focus on more valuable tasks.",
  },
  {
    question: "What is the difference between invoice capture and AP automation?",
    answer:
      "Invoice capture focuses on extracting data from invoices and entering it into your system. AP automation goes further by streamlining the entire accounts payable process, including approvals and payments.",
  },
  {
    question: "Can it process emailed PDFs, scanned invoices, and photos?",
    answer:
      "Yes, automated data entry tools can handle emailed PDFs, scanned invoices, and even photos. This flexibility means you can process various invoice formats without extra work.",
  },
  {
    question: "Can it extract individual invoice line items?",
    answer:
      "Yes, the software can extract individual line items from invoices. This feature helps maintain detailed records and simplifies tracking expenses against specific budget lines.",
  },
  {
    question: "How accurate is automated invoice extraction?",
    answer:
      "Automated invoice extraction is highly accurate, often exceeding 90%. However, some complex invoices may require manual review to ensure complete accuracy.",
  },
  {
    question: "Will it eliminate all manual data entry?",
    answer:
      "While it significantly reduces manual data entry, some oversight is still needed. The software handles most entries, but human checks ensure data integrity for complex invoices.",
  },
  {
    question: "What happens when the software reads an invoice incorrectly?",
    answer:
      "If the software misreads an invoice, it flags the item for review. Your team can then correct the error, ensuring the data entered is accurate and reliable.",
  },
  {
    question: "Can it automatically assign expense categories or GL codes?",
    answer:
      "Yes, the system can automatically assign expense categories or GL codes based on predefined rules. This reduces the time spent on manual coding and ensures consistency.",
  },
  {
    question: "Can it compare invoices with purchase orders?",
    answer:
      "Yes, automated workflows can match invoices to purchase orders to verify accuracy. This helps prevent overpayments and ensures compliance with purchasing agreements.",
  },
  {
    question: "Does it integrate with QuickBooks, Xero, or Sage?",
    answer:
      "Dext and Bill both sync with QuickBooks, Xero, and Sage. Which connections a tool offers varies, so we confirm the connector for your accounting system before setup.",
  },
  {
    question: "Will the original invoice remain attached to the accounting record?",
    answer:
      "Yes, the original invoice stays attached to the accounting record. This makes it easy to reference the original document when needed, ensuring transparency and traceability.",
  },
  {
    question: "Is line-item extraction included in the price?",
    answer:
      "Yes, line-item extraction is typically included in the package price. This feature allows for detailed data capture without additional costs, making it budget-friendly for small businesses.",
  },
  {
    question: "What must be configured before going live?",
    answer:
      "Before going live, settings like invoice templates, approval workflows, and integration with existing software need configuration. Proper setup ensures the system runs smoothly from day one.",
  },
] as const;

export default function PAASection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="people-also-ask" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              People Also Ask
            </h2>
          </div>
          <div className="col-span-12">
            {DATA_ENTRY_QUESTIONS.map(({ question, answer }) => (
              <div key={question}>
                <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
                <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                  {question}
                </h3>
                <p className="text-base text-white shadow-text pt-3">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
