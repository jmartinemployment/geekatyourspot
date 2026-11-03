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
              How does TaxValet pinpoint where a business owes sales tax?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              TaxValet runs a detailed Nexus Review during onboarding. They look at your business’s history to
              find out exactly which states you owe sales tax in. This clears up confusion and helps you avoid
              noncompliance.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What happens if a business has historical sales tax exposure before signing up?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              TaxValet creates an AuditReady action plan to address any past sales tax exposure. They also
              handle registering your business for the right state permits.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Why choose a managed service like TaxValet over automated tax software?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Automated software can lose connection or miss complex changes as your business grows. TaxValet
              gives you a team of real experts who use judgment and experience to make strategic tax decisions,
              not just automated calculations.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is the onboarding and setup process for multi-state tracking?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              TaxValet uses a four-step process: a free consultation, building an AuditReady plan with a nexus
              review, setting up tax collection across your storefronts, and then moving to ongoing filing and
              state notice management.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does the pricing scale if a business expands into more states or processes more transactions?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              TaxValet charges a flat rate that covers unlimited transactions. You will not see surprise fees as
              your sales or state exposure increases.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
