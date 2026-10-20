
export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Factors is not a black box or a generic dashboard. Its value comes from how its rules, scoring models,
        and automation logic are set up for your own pipeline, not just installed out of the box. Geek @ Your Spot LLC handles this configuration so you get real results the first week, not a list of features you
        have to figure out yourself.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is defining what counts as a meaningful signal for your business. Factors can track
        dozens of engagement types: pricing page visits, repeated downloads, event attendance, ad views, and
        more. Geek @ Your Spot LLC works with you to set the thresholds that matter for your pipeline, like how
        many visits to a service page signals a real buyer, or how many ad impressions on LinkedIn mean it’s
        time for sales to reach out. This is not a universal setting. A business selling HR software to local
        companies in Miami-Dade will have a different pattern than a Broward fintech firm. The configuration
        is built around your funnel, not a template.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, Factors’ account scoring models get tuned to your own customer fit. The platform weighs
        firmographic data (industry, company size, revenue), behavioral signals (pages viewed, content
        downloaded), and pipeline stage. Geek @ Your Spot LLC maps your ideal customer profile (ICP) into Factors,
        so the system can rank and segment accounts into tiers, hot, warm, or cold, based on real buying
        signals. This means your sales team gets daily ranked lists that reflect your own market, not an
        industry average.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation is where Factors moves from reporting to action. Geek @ Your Spot LLC builds workflows in
        Factors that trigger alerts and tasks the moment a high-intent account crosses a threshold. For
        example, if a local business in Palm Beach returns to your pricing page three times in a week and
        clicks a LinkedIn ad, Factors can immediately alert your sales rep in Slack or Teams. The system can
        also push enriched contact data directly into your&nbsp;CRM,
        start a personalized email sequence, or update your ad audiences in LinkedIn and Google so you only
        target the accounts that are actually in-market.</p>
      <p className="text-md text-white shadow-text pt-3">
        Factors supports multi-channel workflows, not just web activity. It pulls in signals from your Google
        Ads, LinkedIn campaigns, G2 reviews, and even offline events if you track them. Geek @ Your Spot LLC
        connects these sources and sets up the rules for how they combine. This is critical for small
        businesses where every touchpoint counts and budgets are tight. If your best leads are coming from a
        mix of paid ads and organic visits, Factors can weight those together to surface the true high-intent
        accounts.</p>
      <p className="text-md text-white shadow-text pt-3">
        Weekly or daily segment digests are another key part of configuration. Geek @ Your Spot LLC sets up custom
        reports in Factors that show, for each segment, which accounts are most active, what signals they
        triggered, and which ones are ready for outreach. These digests can include the last 30 days of
        journey for each hot account, the top three pages they viewed, and any known contacts with direct
        emails and job titles. If an account has no known contacts, the report says so, so your team knows
        where to focus research.</p>
      <p className="text-md text-white shadow-text pt-3">
        Customization in Factors is done through its own interface, there is no open scripting or SDK for
        clients, but the platform has a robust set of integrations with tools like Salesforce, HubSpot,
        LinkedIn, Google Ads, Slack, Teams, and more. Geek @ Your Spot LLC handles the mapping, connection, and
        ongoing tuning of these integrations. If you use Segment CDP or pull contacts from Apollo or ZoomInfo,
        those connections are configured so all your data flows into Factors’ scoring and automation logic.</p>
      <p className="text-md text-white shadow-text pt-3">
        The extension mechanism in Factors is its integration layer. There is no
        open&nbsp;API&nbsp;for custom coding, so the work is in
        mapping your own data sources, tuning the scoring and automation rules, and building the right
        workflows for your sales and marketing teams. Geek @ Your Spot LLC takes care of the details, no CSV
        uploads, no manual list management, and no stale reports. Everything updates in real time based on
        what your accounts are actually doing.</p>
      <p className="text-md text-white shadow-text pt-3">
        In practice, this means your team in South Florida gets a platform that fits your own buying cycle,
        not a generic tool. The configuration is not a one-time job. Geek @ Your Spot LLC reviews adoption,
        identifies gaps, and adjusts the workflows as your pipeline evolves, so the system keeps surfacing the
        right accounts and triggers the right actions as your business grows.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-factors-rules-automation-and-how-geek-your-spot-makes-it-work-for-you" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Factors: Rules, Automation, and How Geek @ Your Spot LLC Makes It Work for You
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-factors-rules-automation-and-how-geek-your-spot-makes-it-work-for-you-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Factors: Rules, Automation, and How Geek @ Your Spot LLC Makes It Work for You
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
