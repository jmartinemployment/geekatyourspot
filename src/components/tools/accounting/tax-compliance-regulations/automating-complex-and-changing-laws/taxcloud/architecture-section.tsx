import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        TaxCloud&#39;s architecture is designed to support seamless integration and robust performance across
        various platforms. At its foundation, TaxCloud is built on a cloud-based infrastructure that ensures
        scalability and reliability, allowing businesses to handle increased transaction volumes without
        performance degradation.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s architecture supports multiple integrations through APIs, enabling it to connect with
        popular e-commerce platforms like Shopify, WooCommerce, and BigCommerce. These integrations facilitate
        the automatic import of transaction data, ensuring that sales tax calculations and filings are based on
        the most current and comprehensive data available.
        TaxCloud&#39;s&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;also
        allows for custom integrations, providing flexibility for businesses with unique requirements.</p>
      <p className="text-md text-white shadow-text pt-3">
        TaxCloud&#39;s database architecture is optimized for handling large volumes of tax data across over
        13,000 U.S. jurisdictions. This extensive coverage ensures that businesses can accurately calculate and
        remit taxes regardless of where their sales occur. The platform&#39;s data management system is designed
        to update tax rates in real-time, reflecting any changes in tax laws or rates immediately.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security is a critical component of TaxCloud&#39;s architecture. The platform employs advanced
        encryption protocols to protect sensitive transaction and customer data. This focus on security not only
        ensures compliance with data protection regulations but also builds trust with users by safeguarding
        their information.</p>
      <p className="text-md text-white shadow-text pt-3">
        Additionally, TaxCloud&#39;s architecture includes a comprehensive reporting and analytics module. This
        feature provides businesses with detailed insights into their tax liabilities and compliance status,
        helping them make informed decisions about their tax strategies. The reporting tools are customizable,
        allowing businesses to generate reports that meet their specific needs.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="taxcloud-s-architectural-framework" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                TaxCloud&#39;s Architectural Framework
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
              <h2 id="taxcloud-s-architectural-framework-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                TaxCloud&#39;s Architectural Framework
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
