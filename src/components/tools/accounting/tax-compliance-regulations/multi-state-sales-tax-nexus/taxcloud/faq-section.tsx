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
            <p className="text-md text-white shadow-text pt-3">
              You have nexus in Florida if your business has a physical presence in the state, such as an
              office, warehouse, employees, or inventory stored in an Amazon FBA center. You also have nexus if
              your taxable remote sales into Florida were over $100,000 in the previous calendar year. Florida
              only counts taxable sales for this threshold, exempt items like SaaS do not count. Marketplace
              sales where the facilitator collects tax are also excluded. TaxCloud’s nexus tracking helps you
              monitor your exposure across all states in real time.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Florida charge sales tax on shipping?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Florida does not charge sales tax on separately stated shipping charges for delivering tangible
              goods. If shipping is bundled into the product price or combined with handling charges that
              include taxable items, then the entire charge is taxable.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What happens if I miss a Florida sales tax filing deadline?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              If you miss a Florida sales tax filing deadline, the state charges a late filing penalty of 10% of
              the tax due, with a minimum of $50, plus interest. This penalty applies even if you had zero sales
              for the period, you still need to file a zero-return. Electronic filers have until the 20th of the
              month to file, while paper filers must file by the 1st.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Florida tax SaaS and digital products?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              No. Florida does not tax SaaS or digital products like eBooks, music downloads, or streaming
              services. SaaS delivered electronically is treated as an intangible service. However, prewritten
              software delivered on physical media, such as a CD or USB drive, is taxable at the standard 6%
              state rate plus any county surtax.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Do I need to collect Florida sales tax on Amazon FBA sales?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              If you store inventory in a Florida FBA warehouse, you have physical nexus and must register with
              the Department of Revenue. Amazon collects and remits tax for your marketplace sales, but you are
              still responsible for collecting tax on sales made through your own website (like Shopify or
              WooCommerce) to Florida customers. Amazon marketplace sales do not count toward your $100,000
              economic nexus threshold.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does TaxCloud handle Florida sales tax filing?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. TaxCloud manages Florida sales tax calculation, filing, and remittance for ecommerce and SaaS
              businesses selling into the state. Florida is not an SST member, but TaxCloud still handles
              Florida compliance alongside your SST-funded states.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does TaxCloud track economic nexus across multiple states?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              TaxCloud uses automated economic nexus tracking to watch your sales and transaction counts in
              every state. It alerts you as soon as you get close to or pass a state’s nexus threshold.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does TaxCloud handle the Streamlined Sales Tax (SST) program?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              TaxCloud is a certified SST Service Provider. Eligible businesses can use it for free sales tax
              calculation and free filing in 24 SST member states.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can TaxCloud help register my business in new states once nexus is established?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. TaxCloud manages state tax registrations and follow-ups so your sales tax permits are active
              and compliant before filings are due.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How accurate are calculations across complex local jurisdictions?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              TaxCloud gives real-time tax calculations for over 13,000 U.S. jurisdictions. It updates rates
              automatically for every order.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does TaxCloud automate monthly or quarterly state returns?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. TaxCloud prepares, files, and remits sales tax returns directly to state authorities on
              schedule. If you enroll through SST, it can cut your total filings by up to 60%.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
