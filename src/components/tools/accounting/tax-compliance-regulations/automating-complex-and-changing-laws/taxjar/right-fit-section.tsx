import Link from "next/link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        TaxJar is ideally suited for small to mid-sized businesses that operate across multiple states and need
        to manage complex sales tax obligations. Its automation capabilities are particularly beneficial for
        businesses without a dedicated tax team, allowing them to offload the burdensome task
        of&nbsp;tax compliance&nbsp;to a reliable system. The
        platform&#39;s ability to integrate seamlessly with popular e-commerce platforms makes it an excellent
        choice for online retailers looking to streamline their operations.</p>
      <p className="text-base text-white shadow-text pt-3">
        However, TaxJar may not be the best fit for businesses that operate solely within a single state with
        straightforward tax requirements. For these companies, the comprehensive features of TaxJar might be
        more than necessary, and a simpler solution could suffice. Additionally, businesses that have highly
        customized sales processes or niche requirements might need to explore whether TaxJar&#39;s integrations
        can accommodate their specific needs.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses considering TaxJar, the next step is to evaluate how its features align with their
        specific tax compliance challenges. Geek @ Your Spot LLC, located in West Palm Beach, Broward, and
        Miami-Dade counties, offers expert implementation services to ensure that TaxJar is configured to meet
        the unique needs of your business. This local expertise is invaluable in navigating the nuances of
        regional tax laws and ensuring a smooth transition to automated compliance.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot LLC provides a comprehensive implementation strategy that includes data mapping, system
        integration, and training for your team. This ensures that your business can fully leverage TaxJar&#39;s
        capabilities without the typical growing pains associated with new software adoption. By partnering with
        Geek @ Your Spot LLC, businesses gain access to a wealth of local knowledge and technical expertise, making
        the transition to TaxJar as seamless as possible.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ultimately, the decision to implement TaxJar should be based on a thorough assessment of your
        business&#39;s current tax compliance processes and future needs. For those ready to embrace automation
        and reduce the time spent on tax-related tasks, TaxJar offers a compelling solution that can
        significantly enhance operational efficiency and compliance accuracy.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<Link href="#consultationAppointment2xl" id={`tools-accounting-complex-changing-laws-taxjar-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
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
              <h2 id="is-taxjar-the-right-fit-for-your-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Is TaxJar the Right Fit for Your Business?
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
              <h2 id="is-taxjar-the-right-fit-for-your-business-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Is TaxJar the Right Fit for Your Business?
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
