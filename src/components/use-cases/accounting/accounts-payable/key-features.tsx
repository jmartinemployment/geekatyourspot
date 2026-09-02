import Image from "next/image";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function KeyFeaturesSection() {
  return (
      <section className="min-h-screen bg-[#8C2703] text-white">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
            <div className="col-span-7">
              <h2 className="text-white pt-3 lg:text-4xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Key Features of AP Automation Systems</h2>
              <p className="pt-5 text-md font-normal text-white shadow-text">As organizations increasingly seek to streamline their financial processes, automated <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink> (AP) systems
                have become indispensable. These systems leverage advanced technologies to enhance efficiency, accuracy, and control
                over the AP processes. Geek At Your Spot, as an AI implementation consultancy, focuses on tailoring these systems to
                meet specific client needs by addressing key features that ensure a seamless integration into existing workflows.
              </p>
              <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">Invoice Data Extraction and Validation</h3>
              <p className="pt-5 text-md font-normal text-white shadow-text">One of the foundational features of AP automation systems is the ability to accurately extract and validate invoice
                data. Traditional manual entry methods are prone to errors and inefficiencies, often leading to delayed payments and
                strained vendor relationships. Automated systems utilize optical character recognition (OCR) and <GlossaryLink slug="machine-learning">machine learning</GlossaryLink>
                algorithms to capture invoice details with precision, reducing the need for manual intervention.</p>
              <p className="pt-5 text-md font-normal text-white shadow-text">Geek At Your Spot specializes in optimizing these data extraction processes, ensuring that the algorithms are
                trained on client-specific invoice formats and business rules. This customization not only accelerates the
                deployment but also enhances the accuracy of data captured, which is critical for maintaining financial accuracy and
                compliance.</p>
              <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">Workflow Automation and Approval Processes</h3>
              <p className="pt-5 text-md font-normal text-white shadow-text">Automating the workflow and approval process is another essential feature of AP automation systems. These systems
                are designed to route invoices through a predefined approval hierarchy, ensuring that all necessary checks and
                balances are adhered to without manual intervention. This feature significantly reduces the cycle time for invoice
                approvals and minimizes bottlenecks.</p>
              <ul className="list-disc list-outside pl-3 space-y-2">
                <li>Customizable approval workflows tailored to specific organizational structures.</li>
                <li>Real-time tracking of invoice status to enhance visibility and accountability.</li>
                <li>Automated notifications to stakeholders to prevent delays in the approval process.</li>
              </ul>
            </div>
            <div className="col-span-5">
              <Image
                width="460"
                height="460"
                src="/images/accounting/use-cases/accounts-payable/automated-accounts-payable-pillar-h2-key-features-of-ap-automation-systems.avif"
                alt="Key Features of AP Automation Systems" />
            </div>
            <div className="col-span-12">
              <p className="pt-5 text-md font-normal text-white shadow-text">Geek At Your Spot assists clients in designing these workflows by mapping out existing processes and identifying
                opportunities for optimization. By configuring the system to align with the organization&#39;s unique approval
                requirements, clients can achieve a hypothetical 40% reduction in processing times, as seen in representative
                scenarios.</p>
              <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">
                Integration and Scalability</h3>
              <p className="pt-5 text-md font-normal text-white shadow-text">Integration with existing enterprise resource planning (<GlossaryLink slug="erp">ERP</GlossaryLink>) systems and scalability to accommodate growth are
                critical features for any AP automation solution. Seamless integration ensures that data flows smoothly between
                different systems, eliminating the need for duplicate data entry and reducing the risk of inconsistencies.</p>
              <p className="pt-5 text-md font-normal text-white shadow-text">Geek At Your Spot employs a comprehensive approach to integration, ensuring that AP automation systems are
                compatible with clients &apos; existing technology stacks. Additionally, we focus on creating scalable solutions that can
                grow as the organization expands, providing long-term value and flexibility.</p>
            </div>
          </div>
        </div>
      </section>
  );
}
