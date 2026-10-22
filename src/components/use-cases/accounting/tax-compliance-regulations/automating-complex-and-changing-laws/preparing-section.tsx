import Link from "next/link";

export default function PreparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Once you&#39;ve determined that&nbsp;tax
        compliance&nbsp;automation is the right path for your business, the next steps involve
        careful planning and execution. Start by conducting a thorough review of your current tax processes to
        identify specific areas where automation can provide the most benefit. This assessment should include an
        analysis of your transaction volume, the number of jurisdictions you operate in, and the complexity of
        your tax filings.</p>
      <p className="text-base text-white shadow-text pt-3">
        With a clear understanding of your needs, you can begin selecting the appropriate tools and partners.
        Solutions like Quaderno and TaxJar offer robust platforms for automating tax calculations and compliance
        across multiple jurisdictions. Quaderno excels in handling international VAT and GST, making it ideal
        for businesses with a global reach, while TaxJar&#39;s
        SmartCalcs&nbsp;API&nbsp;provides precise sales tax calculations
        for businesses with complex multi-state operations.</p>
      <p className="text-base text-white shadow-text pt-3">
        As you move forward, it&#39;s crucial to engage with a partner who can assist with the integration of
        these tools into your existing systems. This step ensures that your automation platform works seamlessly
        with your current accounting software and sales channels. For instance, TaxCloud&#39;s ability to
        consolidate data from various e-commerce platforms can be particularly beneficial in maintaining an
        audit-ready format across different sales channels.</p>
      <p className="text-base text-white shadow-text pt-3">
        After integration, the focus should shift to training your team to use these new systems effectively.
        While automation reduces manual workload, understanding how to leverage these tools to their full
        potential is crucial. Training should cover the basics of navigating the software, managing exceptions,
        and interpreting automated reports. This empowers your team to address issues swiftly and ensures that
        your compliance strategy remains robust.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, establish a routine for regular reviews and updates. Tax laws are continuously evolving, so
        your systems and processes must adapt to stay compliant. Regularly scheduled reviews will help you
        identify any necessary adjustments in your automation setup and ensure that your business remains
        aligned with current regulations. With these steps, you can expect a smoother, more efficient tax
        compliance process that supports your business growth while minimizing risk.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<Link href="#consultationAppointment2xl" id={`use-cases-accounting-complex-changing-laws-preparing-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</Link>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>How does the software handle different sales tax rates between Miami-Dade, Broward, and Palm Beach?</li>
        <li>Can it manage municipal-specific taxes, like the Miami Beach resort tax?</li>
        <li>How does the system track remote workers across different South Florida zip codes?</li>
        <li>How quickly does the system update when Florida changes its corporate or sales tax rates?</li>
        <li>Does the automation adapt to localized Florida Sales Tax Holidays?</li>
        <li>How does the software shield us from audit risk if compliance laws change mid-year?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="next-steps-for-implementing-tax-compliance-automation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Next Steps for Implementing Tax Compliance Automation
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="next-steps-for-implementing-tax-compliance-automation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Next Steps for Implementing Tax Compliance Automation
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
