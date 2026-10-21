import Link from "next/link";

export default function AutomatedRulesBiddingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Managing ad spend efficiently is a persistent challenge for marketers who need to balance budget constraints with the
        need for effective campaign performance. The manual adjustment of bids and campaign rules can be tedious and prone to
        human error, often leading to suboptimal results. Automated rules and bidding strategies address these issues by
        providing a way to streamline and enhance the management of digital advertising efforts.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Automated bidding tools like&nbsp;
        Google Ads Smart Bidding&nbsp;and&nbsp;
        Salesforce Einstein&nbsp;use AI to automatically adjust bids based on real-time data and pre-defined goals, such as maximizing
        conversions or achieving a target return on ad spend (ROAS). This not only ensures optimal bid strategies but also
        frees up marketers to focus on higher-level strategic planning, rather than day-to-day bid management.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        For example, a hypothetical e-commerce business might set rules to automatically increase bids during peak shopping
        hours. By using AI-driven bidding strategies, the business can ensure competitive ad placements without manual
        oversight, thereby reducing the risk of overspending while maximizing visibility and sales.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Ensure competitive ad placements with real-time bid adjustments.</li>
        <li>Reduce the risk of human error and overspending.</li>
        <li>Focus on strategic planning rather than manual bid management.</li>
      </ul>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Geek @ Your Spot LLC assists clients in configuring and managing these automated systems, ensuring that the tools are
        set up to align with specific business objectives and deliver measurable improvements in campaign performance and
        cost efficiency.</p>
      <h3 id={`setting-automated-rules${idSuffix}`} className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Setting Automated Rules</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Creating automated rules allows businesses to set predefined actions based on specific triggers or conditions, such
        as time of day, audience behavior, or performance metrics. This capability is crucial for maintaining control over ad
        campaigns while minimizing manual intervention.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Tools like&nbsp;
        HubSpot&nbsp;and&nbsp;
        <Link id={`automated-ad-spend-optimization-rules-madgicx${idSuffix}`}
        href="/tools/marketing/madgicx" className="text-[#C83803] hover:underline">
        Madgicx
      </Link>&nbsp;provide functionalities to create and manage these rules efficiently. They enable marketers to automate
        responses to changing market conditions, ensuring campaigns are always aligned with business goals.</p>
      <h4 id={`aligning-rules-with-business-goals${idSuffix}`} className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Aligning Rules with Business Goals</h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Aligning automated rules with business objectives requires a deep understanding of both the market and the specific
        goals of the organization. Geek @ Your Spot LLC works closely with clients to develop rules that reflect their strategic
        priorities, ensuring that automated systems not only enhance efficiency but also contribute to broader business
        success.</p>
      <h3 id={`optimizing-bid-strategies${idSuffix}`} className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Optimizing Bid Strategies</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Optimizing bid strategies is essential for achieving desired outcomes in digital advertising. Automated bidding tools
        analyze vast amounts of data to determine the most effective bid amounts for each auction, maximizing the impact of
        ad spend.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Tools like&nbsp;
        Basis Technologies&nbsp;provide advanced algorithms that adjust bids dynamically based on real-time market conditions and
        performance data. This ensures that every dollar spent is optimized for the highest possible return, providing
        marketers with a competitive edge in the digital landscape.</p>
      <h4 id={`implementing-advanced-algorithms${idSuffix}`} className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Implementing Advanced Algorithms</h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Implementing advanced algorithms requires careful planning and execution. Geek @ Your Spot LLC offers expertise in
        integrating these technologies, ensuring they are configured to deliver optimal results. By leveraging our
        experience, businesses can maximize their ad spend efficiency and achieve their marketing objectives without
        unnecessary complexity or cost.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 id="automated-rules-and-bidding" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Automated Rules &amp; Bidding:
              </h2>
            </div>
            <div className="col-span-12">
              {body()}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 id="automated-rules-and-bidding-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Automated Rules &amp; Bidding:
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
