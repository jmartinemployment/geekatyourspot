export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="frequently-asked-questions" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How do I know if I have nexus in Florida?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              You have nexus in Florida if your business has a physical presence like an office, warehouse,
              employees, or inventory stored in an Amazon FBA center. Additionally, if your taxable remote sales
              into Florida exceeded $100,000 in the previous calendar year, you have nexus. Note that Florida’s
              threshold is based on taxable sales, so exempt items like SaaS do not count. Marketplace sales
              where the facilitator collects tax are also excluded. Use TaxCloud’s nexus tracking to monitor
              your exposure across all states in real time.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Florida charge sales tax on shipping?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Florida does not charge sales tax on separately stated shipping charges for the delivery of
              tangible personal property. However, if shipping is bundled into the product price or combined
              with handling charges that include taxable components, the entire charge is taxable.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What happens if I miss a Florida sales tax filing deadline?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              If you miss a Florida sales tax filing deadline, the state assesses a late filing penalty of 10%
              of the tax due, with a minimum penalty of $50, plus interest. This penalty applies even if you
              have no tax due.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does TaxCloud track real-time tax changes across Florida&#39;s local municipalities?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              TaxCloud automates the process of calculating sales tax in Florida by applying the correct
              combined tax rate based on the buyer’s location. It regularly updates tax rates and regulations to
              ensure that businesses use current tax data. This helps businesses remain compliant with Florida’s
              state and local tax laws, saving time and reducing the risk of errors.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is Streamlined Sales Tax (SST), and how does it save money when out-of-state rules change?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              The Streamlined Sales Tax (SST) program is designed to simplify and reduce the costs of sales tax
              compliance for businesses. TaxCloud, as a Certified Service Provider of the SST Program, can save
              businesses time and money on state registration and filing costs in 24 SST-member states. This is
              particularly beneficial when out-of-state rules change, as it helps businesses manage compliance
              efficiently.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does TaxCloud alert local businesses when they cross &quot;Economic Nexus&quot; lines?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              TaxCloud monitors sales against each state’s economic nexus thresholds and sends alerts when a
              business is approaching a threshold. This proactive alert system allows businesses to register and
              adjust their tax collection practices before crossing a threshold, ensuring compliance and
              avoiding potential legal issues.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does TaxCloud handle changing tax rules for specialized categories like SaaS or manufacturing?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              TaxCloud stays updated on the varying taxability rules for SaaS and manufacturing, which can
              change frequently by state. By keeping track of these changes, TaxCloud ensures that businesses
              remain compliant as they grow, applying the correct tax rules to specialized categories without
              manual interpretation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
