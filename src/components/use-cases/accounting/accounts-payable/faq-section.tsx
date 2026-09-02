import { GlossaryLink } from "@/components/glossary/glossary-link";
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
            <p className="pt-5 text-md font-normal text-white shadow-text">Automated <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink> (AP) refers to the use of technology to streamline and optimize the AP process, reducing
              manual tasks and errors. It involves utilizing software solutions to automate tasks such as invoice processing,
              approval workflows, and payments, thereby increasing efficiency and accuracy.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What does AP mean in invoicing?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">In invoicing, AP stands for <GlossaryLink slug="accounts-payable">Accounts Payable</GlossaryLink>, which is the department responsible for managing outgoing payments to
              vendors and suppliers. It involves processing invoices, verifying transaction details, and ensuring timely payments.
            </p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What is the AP process in accounts payable?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">The AP process in <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink> includes several steps: invoice receipt, verification of details, approval
              routing, and payment execution. By automating these processes, organizations can reduce processing time and minimize
              errors, ensuring that vendors are paid accurately and on time.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What is invoicing in accounts payable?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">Invoicing in accounts payable involves the receipt and processing of invoices from suppliers for goods and services
              received. It requires verification of invoice details against purchase orders and contracts, followed by approval
              and payment authorization.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">Does AP pay invoices?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">Yes, the Accounts Payable department is responsible for paying invoices. This involves verifying the accuracy of
              invoices, ensuring that they match purchase orders and delivery receipts, and processing payments according to the
              organization&#39;s payment terms.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What are typical AP interview questions?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">Typical AP interview questions may include inquiries about experience with AP software, understanding of invoice
              processing, problem-solving in payment discrepancies, and knowledge of financial regulations. Candidates might also
              be asked about their ability to handle high volumes of transactions and maintain accuracy.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What are 3-way accounts payable?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">3-way accounts payable refers to the three-way matching process used to verify invoice accuracy. It involves
              matching the invoice with the corresponding purchase order and receiving report to ensure that the billed amount is
              correct and the goods or services were received as ordered.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">Is accounts payable difficult?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">Accounts payable can be challenging due to the need for accuracy, attention to detail, and timely processing of a
              high volume of transactions. However, with automation tools and efficient processes, these challenges can be
              significantly mitigated, enhancing overall efficiency.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What are the two types of accounts payable?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">The two types of accounts payable are trade payables and non-trade payables. Trade payables are obligations to
              suppliers for goods and services, while non-trade payables include liabilities such as taxes, wages, and other
              expenses not directly related to inventory purchases.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What is the best way to automate accounts payable processes?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">The best way to automate accounts payable processes is by implementing comprehensive AP automation software that
              integrates with existing financial systems. This software should support electronic invoicing, workflow automation,
              and seamless integration with payment systems to optimize efficiency and accuracy.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What skills do you need for accounts payable?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">Skills needed for accounts payable include attention to detail, proficiency with accounting software, strong
              analytical abilities, and effective communication skills. An understanding of financial regulations and the ability
              to manage time efficiently are also crucial.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">Is AI replacing accounts payable?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">AI is not replacing accounts payable but is transforming it by automating routine tasks such as data entry and
              invoice processing. This allows AP professionals to focus on more strategic activities, such as analysis and vendor
              management, enhancing the overall efficiency of the department.</p>
          </div>
        </div>
      </section>
  );
}
