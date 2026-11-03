
export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Snitcher’s value depends on the quality and structure of the data it surfaces and how cleanly that
        data maps into your existing sales and marketing systems. The upfront decisions you make about data
        structure, field mapping, and filtering are what determine whether your team gets a daily hit-list of
        real opportunities or just another stream of noise.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first decision is which fields matter for your sales process. Snitcher identifies companies by
        matching visitor IPs to business profiles, then enriches each visit with firmographic details,
        industry, company size, location, revenue range, and tech stack. If your team works accounts by
        vertical, industry tags are critical. If you segment by size or geography, those fields must be mapped
        to the right fields in your&nbsp;CRM. Geek @ Your Spot LLC works
        with you to define which attributes are required, optional, or should be ignored entirely. This avoids
        cluttering your&nbsp;CRM&nbsp;with irrelevant data and keeps
        your lead views focused on what actually drives conversion.</p>
      <p className="text-base text-white shadow-text pt-3">
        Snitcher’s integrations with HubSpot, Salesforce,
        Zoho&nbsp;CRM, and Pipedrive allow for custom field mapping at
        setup. You decide which Snitcher fields land in
        which&nbsp;CRM&nbsp;properties. For example, you might map
        ‘company size’ to a standard&nbsp;CRM&nbsp;field, while ‘last
        visited page’ becomes a custom property. The mapping process is not just technical, it is strategic.
        Geek @ Your Spot LLC helps you align these decisions with your sales playbook, ensuring that reps see the
        most actionable information at a glance.</p>
      <p className="text-base text-white shadow-text pt-3">
        Filtering is just as important as enrichment. Snitcher lets you filter out visits from students,
        competitors, and non-ICP (ideal customer profile) traffic before any data hits
        your&nbsp;CRM. This is not a generic filter; it is built
        around your own ICP definition, by revenue, industry, region, or custom tags. For a South Florida
        services firm, that might mean surfacing only companies in Miami-Dade, Broward, and West Palm Beach,
        or excluding visits from outside your service area. The result is
        a&nbsp;CRM&nbsp;that reflects real market opportunities, not
        vanity metrics or dead-ends.</p>
      <p className="text-base text-white shadow-text pt-3">
        The structure of behavioral data is the next key piece. Snitcher tracks which pages a visitor viewed,
        how long they stayed, and what actions they took. This behavioral history is not just a list of URLs,
        it is a timeline that shows buying intent. Mapping this data into
        your&nbsp;CRM&nbsp;means your sales team can see, for each
        account, whether they just skimmed the homepage or spent ten minutes on your pricing sheet. Geek @ Your Spot LLC configures the mapping so that high-intent actions (like repeat visits to a proposal page)
        flag the account for immediate outreach, while low-intent bounces are filtered out.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams using Slack or Microsoft Teams, Snitcher can route alerts to dedicated channels based on
        data structure decisions. For instance, all pricing-page visits from companies over a certain size can
        trigger a real-time alert to your sales channel, while lower-value visits go to a marketing review
        queue. This routing is set up during implementation, not as an afterthought, so your team is not
        overwhelmed by noise.</p>
      <p className="text-base text-white shadow-text pt-3">
        Contact enrichment is another area where mapping matters. When Snitcher identifies a company, it can
        also surface decision-maker names, job titles, emails, phone numbers, and LinkedIn profiles. Deciding
        which of these are pushed into your&nbsp;CRM, and under what
        conditions, is an upfront call. Geek @ Your Spot LLC guides you through these choices, balancing the need
        for actionable data with privacy and compliance requirements. For example, business emails and phone
        numbers are mapped only for verified decision-makers, and only when your outreach playbook calls for
        direct contact.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, Snitcher’s scoring logic uses both firmographics and behavior to rank leads. The scoring
        model is configurable: you can weight pricing-page visits more heavily, or prioritize companies that
        match your ICP exactly. The mapping of these scores into
        your&nbsp;CRM&nbsp;affects how leads are routed, how
        follow-ups are triggered, and how marketing measures campaign performance. Geek @ Your Spot LLC helps you
        tune these rules so that only the highest-potential accounts reach your sales team, and every
        follow-up is backed by real data, not guesswork.</p>
      <p className="text-base text-white shadow-text pt-3">
        The upfront work on data structure and mapping is what separates a Snitcher deployment that delivers
        daily, qualified leads from one that just adds another dashboard to ignore. For the Miami-based team
        in the opening story, this is the difference between
        a&nbsp;CRM&nbsp;full of anonymous visits and a live, ranked
        list of local companies who are actually ready to buy. With the right mapping, every sales call starts
        with context, every campaign is measured against real engagement, and every hour spent chasing leads
        is an hour spent on the deals that matter.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="getting-data-structure-and-mapping-right-the-decisions-that-shape-your-results" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Getting Data Structure and Mapping Right: The Decisions That Shape Your Results
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
              <h2 id="getting-data-structure-and-mapping-right-the-decisions-that-shape-your-results-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Getting Data Structure and Mapping Right: The Decisions That Shape Your Results
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
