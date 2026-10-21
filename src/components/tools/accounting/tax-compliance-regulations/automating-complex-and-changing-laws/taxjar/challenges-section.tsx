
export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Small businesses in Miami-Dade, Broward, and West Palm Beach face a relentless challenge: keeping up
        with the complex and ever-changing landscape of local tax laws. The cost of non-compliance is high, with
        potential fines and penalties looming over every transaction. The engineering complexity required to
        maintain compliance, especially for custom e-commerce platforms, is a significant burden. Business
        owners often resort to hardcoding tax rates into their systems, a method that quickly becomes outdated
        and error-prone as tax rates change.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another common pitfall is relying on basic zip-code matching for tax calculations. This approach fails
        to account for the nuances of local tax jurisdictions, such as multi-district tax splits within a single
        town. The result is inaccurate billing, which can lead to dissatisfied customers and potential legal
        issues. Furthermore, many businesses are unaware of when they cross economic or physical nexus
        thresholds, which can happen when employing remote workers or using third-party fulfillment centers.</p>
      <p className="text-base text-white shadow-text pt-3">
        The administrative burden doesn&#39;t stop there. Tax records are often scattered across multiple
        spreadsheets, making it difficult to compile accurate reports for audits. This disorganization not only
        risks compliance but also consumes valuable time that could be better spent on growing the business.
        Additionally, slow tax calculation APIs can introduce latency at checkout, frustrating customers and
        potentially leading to lost sales.</p>
      <p className="text-base text-white shadow-text pt-3">
        TaxJar offers a solution to these challenges. By automating
        sales&nbsp;tax compliance, TaxJar eliminates the need
        for manual updates and hardcoding of tax rates. Its platform provides rooftop-accurate tax calculations,
        ensuring precise billing for every transaction. Businesses can also benefit from automatic nexus
        tracking, which alerts them when they are approaching thresholds in new states.</p>
      <blockquote cite="https://www.taxjar.com/solutions/small-business" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        From calculations and nexus tracking to filing and reporting, we simplify the entire sales tax lifecycle
        so you can focus on growing your business.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        With TaxJar, tax filing becomes effortless. The platform automatically compiles and submits tax returns,
        freeing business owners from the tedious task of manual filing. This automation not only saves time but
        also reduces the risk of errors, allowing businesses to focus on what truly matters: growth and customer
        satisfaction. TaxJar integrates seamlessly into existing tech stacks, making it an ideal choice for
        small businesses looking to streamline their tax compliance processes.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-cost-of-navigating-complex-and-changing-laws" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Cost of Navigating Complex and Changing Laws
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-cost-of-navigating-complex-and-changing-laws-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Cost of Navigating Complex and Changing Laws
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
