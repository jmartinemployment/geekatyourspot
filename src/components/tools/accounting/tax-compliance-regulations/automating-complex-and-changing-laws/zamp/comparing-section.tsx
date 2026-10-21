import Link from "next/link";

export default function ComparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        When choosing a&nbsp;tax
        compliance&nbsp;solution, small businesses often weigh multiple options. Zamp stands out
        in the landscape by offering a fully managed service that combines automation with expert oversight.
        This contrasts with platforms
        like&nbsp;Avalara&nbsp;and&nbsp;<Link id={`tools-accounting-complex-changing-laws-zamp-comparing-taxjar${idSuffix}`} href="/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxjar" className="text-[#0B162A] hover:underline">TaxJar</Link>,
        which primarily focus on self-service models.</p>
      <p className="text-base text-white shadow-text pt-3">
        Avalara, for instance, provides a suite of tools for sales tax compliance but requires businesses to
        manage much of the setup and ongoing operations themselves. This can mean more internal resources are
        needed to ensure compliance, which can be a burden for small businesses without dedicated tax teams. In
        contrast, Zamp handles everything from nexus tracking to state filings, reducing the need for in-house
        expertise and freeing up valuable time.</p>
      <p className="text-base text-white shadow-text pt-3">
        TaxJar, another popular choice, offers automation but lacks the comprehensive service that Zamp
        provides. While TaxJar can automate calculations and filings, it does not offer the same level of
        hands-on support. Businesses might find themselves needing to interpret tax notices or manage audits on
        their own. Zamp, on the other hand, provides direct access to tax specialists who manage these tasks,
        ensuring compliance without the added stress.</p>
      <p className="text-base text-white shadow-text pt-3">
        Zamp also differentiates itself with its pricing model. Unlike the variable pricing seen with other
        platforms, Zamp offers predictable pricing that covers all aspects of sales tax compliance. This means
        no surprise fees for additional filings or registrations, which can be a significant advantage for
        businesses looking to budget accurately.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses operating across multiple states, Zamp&#39;s unified platform is particularly beneficial.
        It manages state, local, and home-rule filings in one service, unlike some competitors that require
        separate modules or add-ons. This integration simplifies compliance and reduces the risk of errors, a
        crucial factor for businesses that need to maintain compliance across various jurisdictions.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, Zamp&#39;s comprehensive approach, which includes full-service management and predictable
        pricing, positions it as a strong contender for small businesses facing complex tax compliance
        challenges. Its ability to integrate seamlessly with existing systems and provide expert support makes
        it a valuable choice for those looking to streamline their compliance processes.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="comparing-zamp-with-other-tax-compliance-solutions" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Comparing Zamp with Other Tax Compliance Solutions
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="comparing-zamp-with-other-tax-compliance-solutions-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Comparing Zamp with Other Tax Compliance Solutions
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
