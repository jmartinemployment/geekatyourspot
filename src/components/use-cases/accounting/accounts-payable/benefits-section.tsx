import Image from "next/image";

export default function BenefitsSection() {


  return (
      <section className="min-h-screen bg-[#8C4E2A] text-white">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
            <div className="col-span-5">
              <Image
                width="460"
                height="460"
                src="/images/accounting/use-cases/accounts-payable/automated-accounts-payable-pillar-h2-benefits-of-automating-accounts-payable.avif"
                alt="Benefits of Automating Accounts Payable" />
            </div>
            <div className="col-span-7">
              <h2 className="text-white pt-3 lg:text-4xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Benefits of Automating Accounts Payable</h2>
              <p className="pt-5 text-md font-normal text-white shadow-text">Incorporating automation into the accounts payable (AP) process offers a multitude of advantages that can
                significantly enhance business operations. By leveraging AI-powered AP automation, companies can realize substantial
                gains in efficiency, accuracy, and overall financial health. Geek At Your Spot, as an AI implementation consultancy,
                specializes in unlocking these benefits for enterprises, ensuring that the transition to automated systems is
                seamless and aligned with organizational goals.</p>
            </div>
            <div className="col-span-12">
              <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">Increased Efficiency and Productivity</h3>
              <p className="pt-5 text-md font-normal text-white shadow-text">Automating AP processes accelerates the entire workflow, from invoice receipt to payment authorization. By
                eliminating manual data entry and paper-based processes, businesses can handle a higher volume of invoices with the
                same resources. Geek At Your Spot assists clients by designing and implementing data models that streamline these
                processes, thereby reducing processing times and freeing up staff to focus on more strategic tasks. In a
                representative scenario, a mid-sized company could hypothetically see a 40% reduction in invoice processing time,
                allowing staff to focus on strategic financial planning instead of repetitive tasks.</p>
              <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">Reduced Errors and Fraud Prevention</h3>
              <p className="pt-5 text-md font-normal text-white shadow-text">Manual AP processes are prone to human error, which can lead to costly mistakes and increased risk of fraud.
                Automated systems, equipped with AI, minimize these errors by ensuring accurate data capture and validation. Geek At
                Your Spot provides consultation on governance and change management, ensuring that automated solutions are not only
                robust but also compliant with industry standards. This proactive approach helps in significantly reducing the risk
                of fraud by incorporating advanced anomaly detection algorithms.</p>
              <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">Improved Vendor Relationships</h3>
              <p className="pt-5 text-md font-normal text-white shadow-text">Timely payments and transparent communication are key factors in maintaining strong vendor relationships. Automated
                AP systems enable faster invoice processing and provide real-time status updates, which help in fostering trust and
                reliability with vendors. Geek At Your Spot aids businesses in configuring these workflows to ensure that the system
                meets specific vendor management requirements, promoting smoother interactions and negotiations with suppliers.</p>
            </div>
          </div>
        </div>
      </section>  );
}
