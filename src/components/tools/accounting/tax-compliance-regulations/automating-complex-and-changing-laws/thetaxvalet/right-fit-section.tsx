import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        TaxValet is particularly well-suited for small to mid-sized businesses that operate across multiple
        states and struggle with the complexities of sales&nbsp;tax
        compliance. Companies in e-commerce,&nbsp;<GlossaryLink slug="saas">SaaS</GlossaryLink>,
        and other sectors where sales tax regulations frequently change will find TaxValet’s comprehensive
        approach invaluable. Its managed service model is ideal for businesses that lack the internal resources
        to handle the intricate web of tax laws and filings.</p>
      <p className="text-base text-white shadow-text pt-3">
        However, TaxValet may not be the best fit for very small businesses or those operating in a single state
        with straightforward tax obligations. These businesses might find that simpler, less expensive solutions
        suffice for their needs. Additionally, businesses with annual revenues below $1 million might not be
        eligible for TaxValet&#39;s services, as the platform is tailored to handle more complex tax scenarios.</p>
      <p className="text-base text-white shadow-text pt-3">
        For those who do fit the profile, TaxValet offers a seamless transition from manual or semi-automated
        processes to a fully managed service. This transition is facilitated by Geek @ Your Spot LLC, which handles
        the implementation, ensuring that TaxValet integrates smoothly with existing systems. This partnership
        provides businesses with expert guidance and support throughout the setup process, reducing the learning
        curve and minimizing disruptions.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next step for businesses considering TaxValet is to assess their current tax compliance challenges
        and determine whether a managed service could alleviate these burdens. Engaging with Geek @ Your Spot LLC
        can provide valuable insights into how TaxValet can be tailored to meet specific business needs,
        offering a clear path to compliance and peace of mind.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ultimately, TaxValet is a strategic choice for businesses ready to offload the complexities of sales tax
        compliance to a trusted partner. By doing so, they can focus on core business activities, confident that
        their tax obligations are being managed by experts.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<button type="button" data-scheduler-link id={`tools-accounting-complex-changing-laws-thetaxvalet-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</button>.</p>
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
              <h2 id="who-benefits-most-from-taxvalet" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Benefits Most from TaxValet
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
              <h2 id="who-benefits-most-from-taxvalet-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Benefits Most from TaxValet
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
