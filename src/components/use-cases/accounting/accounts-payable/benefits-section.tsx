import Image from "next/image";

export default function BenefitsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">Incorporating automation into the accounts payable (AP) process offers a multitude of advantages that can
        significantly enhance business operations. By leveraging AI-powered AP automation, companies can realize substantial
        gains in efficiency, accuracy, and overall financial health. Geek @ Your Spot LLC, as an AI implementation consultancy,
        specializes in unlocking these benefits for enterprises, ensuring that the transition to automated systems is
        seamless and aligned with organizational goals.</p>
      <h3 id={`increased-efficiency-and-productivity${idSuffix}`} className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Increased Efficiency and Productivity</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">Automating AP processes accelerates the entire workflow, from invoice receipt to payment authorization. By
        eliminating manual data entry and paper-based processes, businesses can handle a higher volume of invoices with the
        same resources. Geek @ Your Spot LLC assists clients by designing and implementing data models that streamline these
        processes, thereby reducing processing times and freeing up staff to focus on more strategic tasks. In a
        representative scenario, a mid-sized company could hypothetically see a 40% reduction in invoice processing time,
        allowing staff to focus on strategic financial planning instead of repetitive tasks.</p>
      <h3 id={`reduced-errors-and-fraud-prevention${idSuffix}`} className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Reduced Errors and Fraud Prevention</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">Manual AP processes are prone to human error, which can lead to costly mistakes and increased risk of fraud.
        Automated systems, equipped with AI, minimize these errors by ensuring accurate data capture and validation. Geek @ Your Spot LLC provides consultation on governance and change management, ensuring that automated solutions are not only
        robust but also compliant with industry standards. This proactive approach helps in significantly reducing the risk
        of fraud by incorporating advanced anomaly detection algorithms.</p>
      <h3 id={`improved-vendor-relationships${idSuffix}`} className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Improved Vendor Relationships</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">Timely payments and transparent communication are key factors in maintaining strong vendor relationships. Automated
        AP systems enable faster invoice processing and provide real-time status updates, which help in fostering trust and
        reliability with vendors. Geek @ Your Spot LLC aids businesses in configuring these workflows to ensure that the system
        meets specific vendor management requirements, promoting smoother interactions and negotiations with suppliers.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center">
              <Image
                width="211"
                height="211"
                src="/images/accounting/use-cases/accounts-payable/automated-accounts-payable-pillar-h2-benefits-of-automating-accounts-payable.avif"
                alt="Benefits of Automating Accounts Payable" />
            </div>
            <div className="col-span-7">
              <h2 id="benefits-of-automating-accounts-payable" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Benefits of Automating Accounts Payable</h2>
            </div>
            <div className="col-span-12">
              {body()}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center">
              <Image
                width="460"
                height="460"
                src="/images/accounting/use-cases/accounts-payable/automated-accounts-payable-pillar-h2-benefits-of-automating-accounts-payable.avif"
                alt="Benefits of Automating Accounts Payable" />
            </div>
            <div className="col-span-7">
              <h2 id="benefits-of-automating-accounts-payable-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Benefits of Automating Accounts Payable</h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
