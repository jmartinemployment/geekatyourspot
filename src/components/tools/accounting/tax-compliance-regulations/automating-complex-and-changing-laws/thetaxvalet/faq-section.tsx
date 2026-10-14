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
              How does TaxValet protect my business if a software integration fails during a regional tax rate change?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              TaxValet runs transaction audits to compare collected rates with the latest owed rates in all your
              business’s jurisdictions. If issues like misconfigured products are found, TaxValet immediately
              pushes fixes across your sales channels to correct tax calculations system-wide. Unlike DIY
              software, TaxValet provides guarantees and takes responsibility for any issues caused, offering
              maximum risk protection through continuous monitoring.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              We don&#39;t have a CPA on staff. How do we keep up with out-of-state &#39;Economic Nexus&#39; laws as they evolve?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              During TaxValet’s onboarding process, your business receives a complete nexus analysis to pinpoint
              past exposure. TaxValet maps out strategic options, such as executing a Voluntary Disclosure
              Agreement (VDA) to waive penalties. The team provides tailored advice based on your financial
              goals and executes the chosen plan to clean up liabilities and keep your business protected. This
              process ensures you stay compliant with evolving economic nexus laws without needing a CPA on
              staff.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Our product mix changes constantly (SaaS, physical goods, digital courses). How do we know we are mapping items to the right tax codes?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              TaxValet offers done-for-you taxability mapping, analyzing your specific offerings, features, and
              delivery methods to determine and configure the exact taxability in every state. This service
              ensures that your products are correctly mapped to the appropriate tax codes, reducing the risk of
              over-collecting or under-collecting taxes and avoiding penalties or back taxes.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What happens if a state sends us an aggressive audit notice regarding changing tax regulations?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              With TaxValet, your team becomes your advocate, handling all communication with state authorities.
              They decipher the notice, take the necessary steps to resolve the issue, and keep you informed
              throughout the process. This support ensures that you do not have to navigate confusing online
              portals or risk making costly mistakes on your own.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
