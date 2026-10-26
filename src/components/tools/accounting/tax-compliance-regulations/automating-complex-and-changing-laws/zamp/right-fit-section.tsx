import Link from "next/link";
export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Zamp is ideally suited for small businesses in Miami-Dade, Broward, and West Palm Beach counties that
        are grappling with the complexities of multi-state&nbsp;tax
        compliance. Its managed service model is perfect for businesses that lack the resources
        to maintain an in-house tax team or those that find themselves overwhelmed by the ever-changing tax
        laws.</p>
      <p className="text-base text-white shadow-text pt-3">
        Businesses that benefit most from Zamp are those experiencing rapid growth, where the complexity of tax
        compliance scales quickly. For example, companies expanding their sales footprint across multiple states
        will find Zamp&#39;s end-to-end service invaluable. It eliminates the need to hire additional staff or
        invest in extensive training, allowing business owners to focus on growth and customer satisfaction.</p>
      <p className="text-base text-white shadow-text pt-3">
        However, Zamp might not be the best fit for businesses that prefer a DIY approach to tax compliance or
        those that already have a robust internal tax team. These companies might find more value in platforms
        that offer basic automation tools without the full-service management that Zamp provides.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses considering Zamp, the next step is to assess their current tax compliance processes and
        identify areas where Zamp can add the most value. This might involve evaluating the time spent on
        tax-related tasks, the frequency of errors, or the cost of outsourcing compliance tasks to third-party
        providers.</p>
      <p className="text-base text-white shadow-text pt-3">
        Engaging with Geek @ Your Spot LLC, an AI implementation consultancy, can help businesses transition
        smoothly to Zamp. Their expertise in deploying and configuring Zamp ensures that the platform is
        tailored to meet specific business needs, offering a seamless integration with existing systems.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<a href="#consultationAppointment2xl" id={`tools-accounting-complex-changing-laws-zamp-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>How does the software handle different sales tax rates between Miami-Dade, Broward, and Palm Beach?</li>
        <li>Can it manage municipal-specific taxes, like the Miami Beach resort tax?</li>
        <li>How does the system track remote workers across different South Florida zip codes?</li>
        <li>How quickly does the system update when Florida changes its corporate or sales tax rates?</li>
        <li>Does the automation adapt to localized Florida Sales Tax Holidays?</li>
        <li>How does the software shield us from audit risk if compliance laws change mid-year?</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Handing the compliance lifecycle to Zamp’s team is one of the early decisions our <Link id={`tools-accounting-tax-compliance-regulations-automating-complex-and-changing-laws-zamp-xlink-pillar${idSuffix}`} href="/use-cases/accounting/tax-compliance-regulations/ai-tax-law" className="text-[#C83803] hover:underline">AI Tax Law</Link> guide treats as setting the course for everything after it, alongside the scope of automation, integration with QuickBooks or Shopify, and objectives such as lower compliance cost or less audit risk that decide whether a full-service model is warranted. The guide’s rollout sequence shows where a managed service earns its place, in continuous monitoring after go-live and the regular reviews that keep registrations current as laws change, and its booking questions, from county rate differences to the Miami Beach resort tax, are the ones a growing team without a tax department stops being able to answer alone.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-should-choose-zamp-and-next-steps" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Should Choose Zamp and Next Steps
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
              <h2 id="who-should-choose-zamp-and-next-steps-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Should Choose Zamp and Next Steps
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
