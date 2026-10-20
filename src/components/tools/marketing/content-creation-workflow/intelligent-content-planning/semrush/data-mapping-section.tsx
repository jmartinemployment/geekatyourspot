export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The success of Semrush in a small business hinges on how data is structured and mapped from the start.
        Unlike generic content tools, Semrush pulls live data from integrated platforms, Google Analytics,
        Search Console, and Google Ads, so the initial mapping is about more than just connecting accounts.
        The team must decide what data matters for their goals: which keywords signal real buying intent in
        South Florida, which traffic sources drive conversions, and which competitor benchmarks are relevant
        for their market.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first mapping decision is keyword structure. Semrush’s database covers over 26 billion keywords,
        but only a fraction will matter to a local business. The team, with Geek @ Your Spot LLC’s help, narrows
        the focus to topics and queries that match the region, service lines, and buying signals that drive
        business locally. This means filtering out national or irrelevant terms and prioritizing those with
        high demand and low competition in Miami-Dade, Broward, and West Palm Beach. The result: the content
        plan is built on data that reflects the real search landscape, not a generic list that wastes effort
        on impossible targets.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next is mapping the content workflow itself. Semrush structures content by asset type, blogs, emails,
        social posts, Google Business Profile updates, and each has its own data requirements. For example,
        when repurposing a blog into an email campaign, Semrush uses the original post’s metadata, topic tags,
        and performance metrics to tailor the email for the right audience segment. Mapping these fields at
        the start means every repurposed asset pulls the right context, keeping messaging consistent and
        reducing manual edits. The same mapping lets the team schedule posts in bulk, with platform-specific
        tweaks handled by the system based on the mapped data.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval workflows and user permissions are also defined at this stage. Semrush lets the team set
        rules for who can create, edit, approve, and publish content. Mapping these roles upfront is critical
        for small teams that need to keep control without slowing down. Geek @ Your Spot LLC works with the
        business to define thresholds, who signs off on what, and at what step in the workflow. This mapping
        prevents bottlenecks and ensures compliance without endless back-and-forth or missed deadlines.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, there is the mapping of performance data. Semrush’s reporting and analytics tools visualize
        everything from keyword rankings to AI-generated brand sentiment. For this to work, the team must
        decide what metrics matter: is it organic traffic, local map pack visibility, or email click rates?
        Geek @ Your Spot LLC helps structure dashboards and reports so the business sees the numbers that drive
        decisions, not a flood of irrelevant stats. This tailored mapping means the team can act quickly, if a
        content piece underperforms, they know exactly where to look and what to adjust.</p>
      <p className="text-md text-white shadow-text pt-3">
        A strong data structure up front does not just make Semrush easier to use, it is what turns the
        platform from a generic toolkit into a business-specific engine. When the mapping is right, content is
        routed, repurposed, and scheduled automatically, approvals move smoothly, and the team gets real-time
        feedback on what is working. The payoff is clear: fewer errors, faster turnaround, and a content plan
        that actually moves the needle for local growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-structure-and-mapping-what-matters-most-when-setting-up-semrush" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Structure and Mapping: What Matters Most When Setting Up Semrush
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-structure-and-mapping-what-matters-most-when-setting-up-semrush-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Structure and Mapping: What Matters Most When Setting Up Semrush
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
