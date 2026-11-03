
export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The value you get from Factors depends on the data you feed it and how you map that data into the
        platform. For small businesses, the most important decisions happen before the first lead is scored or
        the first alert fires. These early choices set the stage for whether the system delivers real buying
        signals or just another set of numbers to ignore.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first decision is which data sources to connect. Factors is strongest when it sits at the center
        of your sales and marketing stack. That means pulling in website
        activity,&nbsp;CRM&nbsp;records, ad platform signals, and
        communication channels like Slack or Teams. The more complete the picture, the more accurate the
        scoring and attribution. For many teams, this starts with connecting Salesforce or HubSpot, then
        layering in LinkedIn Ads, Google Ads, and website analytics. If you use Segment CDP, connecting it
        extends visitor identity enrichment and intent tracking across all digital touchpoints.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next comes mapping the right fields. Factors does not just ingest raw data; it needs to know which
        fields in your&nbsp;CRM&nbsp;or website events correspond to
        company name, industry, revenue band, job title, and pipeline stage. The system uses these mappings to
        enrich anonymous visitors, match them to known accounts, and build a unified timeline of every
        touchpoint. If a field is missing or mapped incorrectly, say, if &quot;Company Size&quot; is stored in
        a custom property but not linked in Factors, the scoring model can misfire, prioritizing the wrong
        accounts or missing key buying signals.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another critical mapping is between engagement events and funnel stages. Factors tracks every visit,
        ad impression, and email open, but it only counts as a &quot;high-intent&quot; action if it is mapped
        to the right funnel stage. For example, a repeat visit to the pricing page, a case study download, or
        a session on integration documentation should be mapped as late-stage buying signals, while a first
        visit to the blog sits earlier in the journey. The more granular and accurate these mappings, the
        better Factors can predict which accounts are moving toward a sale.</p>
      <p className="text-base text-white shadow-text pt-3">
        Enrichment provider selection is another early decision. Factors can layer firmographic data from
        sources like Demandbase, Clearbit, and Bombora, but the choice of provider and how you prioritize them
        affects match rates and the quality of the account profiles. For a small business focused on South
        Florida, it makes sense to prioritize providers with strong local coverage and to test match rates
        before rolling out automated scoring and alerts.</p>
      <p className="text-base text-white shadow-text pt-3">
        Scoring model setup is where mapping decisions start to impact daily workflow. Factors comes with
        templates that score accounts based on firmographic fit (industry, size, location), behavioral
        engagement (pages viewed, frequency, recency), and pipeline stage. The team needs to decide which
        signals matter most for their business. For example, if repeat visits to service pages are the
        strongest predictor of a sale, that event should carry more weight than a one-off blog read. If local
        companies are the priority, location data must be mapped and used as a filter in the scoring logic.</p>
      <p className="text-base text-white shadow-text pt-3">
        There is also the question of how to handle contacts and account hierarchies. Factors can pull in
        known contacts from Salesforce, Apollo, or ZoomInfo, then match them to account activity. The mapping
        here determines whether alerts go to the right rep and whether outreach is personalized to the right
        decision-maker. If your&nbsp;CRM&nbsp;has duplicate or
        fragmented account records, cleaning and mapping these in advance will save headaches and keep the
        pipeline clean.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, alert routing and workflow automation depend entirely on how you group and tag accounts.
        Factors lets you set up rules like &quot;alert the Miami sales team when a Tier 1 account spikes on
        intent,&quot; but only if the account is tagged with the right region, tier, or segment. Getting these
        mappings right upfront means the alerts are actionable, not just noise.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, the teams that get the most from Factors are the ones that spend time upfront on data
        mapping and field selection. They connect all core sources, map every key field, and test the scoring
        and alerting logic on live data before rolling it out to the full team. This up-front discipline pays
        off in more accurate lead scores, fewer missed opportunities, and a sales team that trusts the signals
        they get from the system.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business, the payoff is focus. Instead of cold-calling a list of names, your team gets a
        daily, prioritized list of local accounts who are actually in the market, because every data point,
        from website visit to ad click to&nbsp;CRM&nbsp;update, is
        mapped, enriched, and scored in one place. The heavy lifting happens at setup, but the result is a
        workflow where every rep knows who to call, when, and why.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-data-structure-and-mapping-decisions-matter-most-when-deploying-factors" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data Structure and Mapping Decisions Matter Most When Deploying Factors
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
              <h2 id="what-data-structure-and-mapping-decisions-matter-most-when-deploying-factors-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data Structure and Mapping Decisions Matter Most When Deploying Factors
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
