
export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Quaderno simplifies the complex world
        of&nbsp;tax
        compliance&nbsp;by automating critical processes, reducing manual intervention, and
        ensuring accuracy across multiple jurisdictions. The platform is designed to handle the entire tax
        compliance cycle, from tracking sales thresholds to generating compliant invoices and reports. This
        seamless automation is particularly beneficial for small businesses in South Florida, who often struggle
        with the intricate and evolving tax laws of over 12,000 jurisdictions.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step in Quaderno&#39;s process is real-time sales tracking. The platform continuously monitors
        sales across different regions, providing proactive alerts when a business is nearing a tax registration
        threshold. This feature is crucial for businesses expanding globally, as it helps avoid unexpected tax
        liabilities and penalties. By keeping a close watch on sales data, Quaderno ensures that businesses
        remain compliant without the need for constant manual oversight.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, Quaderno automates the identification and verification of business transactions. It distinguishes
        between B2B and B2C sales, validates VAT numbers through the VIES system, and calculates the correct tax
        for each transaction. This precision is vital for maintaining compliance with varying tax regulations
        across different countries and regions. By integrating with popular selling and payment platforms,
        Quaderno ensures that tax calculations are accurate and up-to-date, minimizing the risk of errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        Invoicing is another area where Quaderno shines. The platform automatically generates and delivers
        tax-compliant invoices, receipts, and credit notes. These documents include the correct tax identifiers
        for each buyer&#39;s jurisdiction, ensuring that all transactions are compliant with local tax laws.
        This automation not only saves time but also reduces the likelihood of human error, which can lead to
        costly compliance issues.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, Quaderno provides detailed tax reports by jurisdiction, with totals ready to be entered into
        filing forms. These reports are essential for businesses that need to file taxes in multiple regions, as
        they simplify the preparation and submission of tax returns. By offering a comprehensive view of tax
        obligations, Quaderno helps businesses manage their compliance requirements efficiently and effectively.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="quaderno-s-core-functionality-streamlining-tax-compliance" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Quaderno&#39;s Core Functionality: Streamlining Tax Compliance
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="quaderno-s-core-functionality-streamlining-tax-compliance-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Quaderno&#39;s Core Functionality: Streamlining Tax Compliance
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
