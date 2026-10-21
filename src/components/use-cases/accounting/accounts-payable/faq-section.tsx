import Link from "next/link";
import { FAQItem } from "@/types/use-case";

interface FAQSectionProps {
  items: FAQItem[];
}

export default function FAQSection() {
  return (
      <section className="min-h-screen bg-[#0C1A26] text-white">
        <div className="container">
          <div className="grid min-h-screen grid-cols-1 gap-x-4 py-5">
            <div className="col-span-1"></div>
            <h2 className="text-white pt-3 lg:text-4xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              People Also Ask</h2>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What are automated accounts payable?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">Automated accounts payable (AP) refers to the use of technology to streamline and optimize the AP process, reducing
              manual tasks and errors. It involves utilizing software solutions to automate tasks such as invoice processing,
              approval workflows, and payments, thereby increasing efficiency and accuracy.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What does AP mean in invoicing?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">In invoicing, AP stands for Accounts Payable, which is the department responsible for managing outgoing payments to
              vendors and suppliers. It involves processing invoices, verifying transaction details, and ensuring timely payments.
            </p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What is the AP process in accounts payable?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">The AP process in accounts payable&nbsp;includes several steps: invoice receipt, verification of details, approval
              routing, and&nbsp;<Link id="use-cases-accounting-accounts-payable-faq-payment-execution" href="/use-cases/accounting/accounts-payable/ai-payment-execution" className="text-[#C83803] hover:underline">payment execution</Link>. By automating these processes, organizations can reduce processing time and minimize
              errors, ensuring that vendors are paid accurately and on time.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What is invoicing in accounts payable?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">Invoicing in accounts payable involves the receipt and processing of invoices from suppliers for goods and services
              received. It requires verification of invoice details against purchase orders and contracts, followed by approval
              and payment authorization.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">Does AP pay invoices?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">Yes, the Accounts Payable department is responsible for paying invoices. This involves verifying the accuracy of
              invoices, ensuring that they match purchase orders and delivery receipts, and processing payments according to the
              organization&#39;s payment terms.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What are 3-way accounts payable?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">3-way accounts payable refers to the three-way matching process used to verify invoice accuracy. It involves
              matching the invoice with the corresponding purchase order and receiving report to ensure that the billed amount is
              correct and the goods or services were received as ordered.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What are the two types of accounts payable?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">The two types of accounts payable are trade payables and non-trade payables. Trade payables are obligations to
              suppliers for goods and services, while non-trade payables include liabilities such as taxes, wages, and other
              expenses not directly related to inventory purchases.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What is the best way to automate accounts payable processes?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">The best way to automate accounts payable processes is by implementing comprehensive AP automation software that
              integrates with existing financial systems. This software should support electronic invoicing, workflow automation,
              and seamless integration with payment systems to optimize efficiency and accuracy.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">Is AI replacing accounts payable?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">AI is not replacing accounts payable but is transforming it by automating routine tasks such as data entry and
              invoice processing. This allows AP professionals to focus on more strategic activities, such as analysis and vendor
              management, enhancing the overall efficiency of the department.</p>
          </div>
        </div>
      </section>
  );
}
