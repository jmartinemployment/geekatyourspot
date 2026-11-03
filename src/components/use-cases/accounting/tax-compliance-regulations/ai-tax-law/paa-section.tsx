export default function PAASection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="people-also-ask" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              People Also Ask
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does the software handle different sales tax rates between Miami-Dade, Broward, and Palm Beach?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              The software uses a combination of Florida&#39;s statewide rate and local discretionary surtaxes
              imposed by each county. For example, Miami-Dade County charges a 1% surtax on top of the state
              rate, while Palm Beach County has its own additional local taxes. This means the total sales tax
              rate can vary between counties and even within cities. The software automatically applies these
              rates based on the customer&#39;s location, ensuring accurate tax calculations.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does the automation adapt to localized Florida Sales Tax Holidays?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes, the automation adapts to Florida&#39;s sales tax holidays by automatically applying the
              holiday rules, including specific price thresholds and eligible product categories. This
              eliminates the need for manual adjustments to your catalog or checkout process, ensuring
              compliance with state regulations during these periods.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
