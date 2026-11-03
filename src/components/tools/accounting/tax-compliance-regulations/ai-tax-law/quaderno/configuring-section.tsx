
export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Quaderno is more than just a&nbsp;tax
        compliance&nbsp;tool; it&#39;s a comprehensive solution that automates and streamlines
        tax processes across various jurisdictions. At its core, Quaderno configures a range of rules and
        automation logic to ensure compliance with global tax laws. This configuration includes several critical
        elements, each tailored to automate complex tax scenarios efficiently.</p>
      <p className="text-base text-white shadow-text pt-3">
        One of the primary configurations in Quaderno is its real-time sales tracking. This feature allows
        businesses to monitor sales volumes across different regions, providing proactive alerts when
        approaching a registration threshold in any jurisdiction worldwide. This is particularly useful for
        small businesses expanding their reach, as it helps prevent unexpected tax obligations by keeping them
        informed of their nexus status.</p>
      <p className="text-base text-white shadow-text pt-3">
        Quaderno also automates the verification and calculation of taxes. It automatically identifies whether a
        transaction is B2B or B2C, validates VAT numbers through the VIES system, and calculates the correct tax
        amount for each transaction. This process integrates seamlessly with popular selling and payment
        platforms, reducing manual input and the risk of errors.</p>
      <p className="text-base text-white shadow-text pt-3">
        Invoicing is another area where Quaderno&#39;s automation shines. The platform generates and delivers
        tax-compliant invoices, receipts, and credit notes automatically, ensuring that each document includes
        the correct tax identifiers for the buyer&#39;s jurisdiction. This automation not only saves time but
        also enhances accuracy, ensuring that all invoices meet local tax requirements.</p>
      <p className="text-base text-white shadow-text pt-3">
        Quaderno extends its functionality through its&nbsp;API,
        allowing businesses to integrate tax compliance into their existing systems effortlessly.
        This&nbsp;API&nbsp;provides a lightweight and flexible solution
        for developers to add real-time tax calculations and compliant invoicing to their platforms. By doing
        so, businesses can customize their tax compliance processes to fit their unique operational needs
        without disrupting existing workflows.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot LLC plays a crucial role in configuring Quaderno to fit the specific needs of small
        businesses in South Florida. By leveraging their expertise, they ensure that the platform is set up to
        handle the unique tax compliance challenges these businesses face. This includes configuring data
        mapping, integrating existing systems, and providing training to ensure that users can fully capitalize
        on Quaderno&#39;s capabilities.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ultimately, configuring Quaderno is about enabling businesses to automate their tax compliance
        processes, thereby reducing the time and effort required to manage them manually. With Geek @ Your Spot LLC&#39;s guidance, businesses can ensure that Quaderno is not just a tool but a powerful ally in
        navigating the complex landscape of international tax laws.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="configuring-quaderno-automation-and-logic" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring Quaderno: Automation and Logic
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="configuring-quaderno-automation-and-logic-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring Quaderno: Automation and Logic
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
