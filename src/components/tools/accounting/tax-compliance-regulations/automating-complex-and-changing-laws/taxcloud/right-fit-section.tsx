import Link from "next/link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        TaxCloud is ideally suited for small to mid-sized businesses, particularly those in the e-commerce
        sector or those with multi-state sales operations. Its features are designed to
        simplify&nbsp;tax compliance&nbsp;for businesses that
        may not have the resources for dedicated tax teams or the budget for high-cost enterprise solutions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Businesses operating in the U.S. and Canada will find TaxCloud&#39;s capabilities particularly
        beneficial, as it supports compliance across thousands of jurisdictions with real-time updates and nexus
        tracking. Companies that frequently change their sales channels or expand into new states will
        appreciate TaxCloud&#39;s automated updates and alerts, which help avoid compliance pitfalls.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, TaxCloud may not be the best fit for businesses with a heavy focus on international sales or
        those requiring complex VAT solutions. For these companies, a platform with broader global capabilities
        or specific VAT management features might be more appropriate.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses considering TaxCloud, the next step is to assess their current tax compliance needs and
        how these align with TaxCloud&#39;s offerings. Geek @ Your Spot LLC can assist in this evaluation, providing
        insights into how TaxCloud can integrate with existing systems and improve compliance processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Engaging with Geek @ Your Spot LLC offers the advantage of a tailored implementation strategy, ensuring that
        TaxCloud is configured to meet specific business needs. This consultancy can guide businesses through
        data mapping, system integration, and staff training, ensuring a smooth transition to automated tax
        compliance.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, businesses should consider scheduling a consultation with Geek @ Your Spot LLC to explore how
        TaxCloud can address their tax compliance challenges and support their growth objectives. This step will
        provide clarity on the benefits and potential return on investment that TaxCloud can offer.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<Link id={`tools-accounting-complex-changing-laws-taxcloud-right-fit-booking-your-free-consultation${idSuffix}`} href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">booking
        your free consultation</Link>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
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
              <h2 id="who-should-use-taxcloud-and-what-to-do-next" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Should Use TaxCloud and What to Do Next
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
              <h2 id="who-should-use-taxcloud-and-what-to-do-next-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Should Use TaxCloud and What to Do Next
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
