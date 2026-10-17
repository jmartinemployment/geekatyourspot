import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Factors changes the workweek for small business teams by making the invisible visible. Instead of
        chasing cold lists and hoping for a response, sales and marketing teams get a daily, prioritized list
        of real companies already showing interest. Factors identifies over 75% of the anonymous accounts
        visiting your website, far above the industry average, so the warmest leads do not slip away. This
        means the team no longer wastes hours building lists or calling companies that have never engaged with
        the brand. Every rep starts the day with a clear, actionable hit-list.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform pulls together every touchpoint, website visits, ad engagement, email opens, and even
        silent research on third-party sites, into a single timeline for each account. No more guessing which
        campaign mattered or which channel actually drove pipeline. With Factors, every interaction is mapped
        and scored in real time. The system uses AI to weigh firmographics, live behavior, and pipeline stage,
        ranking accounts by actual purchase readiness. Sales teams stop playing detective and focus only on
        the accounts that matter.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is not just about saving time. It is about removing the manual, error-prone work that keeps teams
        from growing. With Factors, the process of lead enrichment is fully automated. The platform matches
        anonymous visitors to detailed company data, name, size, industry, location, and pushes enriched
        profiles straight into your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>. There’s no more double
        entry, spreadsheet wrangling, or waiting for marketing to hand off a lead. The system syncs with tools
        like Salesforce, HubSpot, LinkedIn, and Google Ads, so the data is always current and always where you
        need it.</p>
      <p className="text-md text-white shadow-text pt-3">
        The impact is immediate. Sales reps get real-time alerts when a high-intent account spikes in
        activity, like a local business returning to your pricing page or downloading a whitepaper. Instead of
        cold outreach, reps reach out with context, referencing the exact content or product features the
        account engaged with. This makes every conversation more relevant and more likely to convert.
        Marketing teams, meanwhile, see exactly which campaigns and channels move accounts down the funnel,
        with multi-touch attribution that ties every dollar spent to real revenue. No more arguing over which
        ad or email worked. The numbers are clear, and the pipeline is visible.</p>
      <blockquote cite="https://www.factors.ai/clp/leedfeeder" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        With Factors, uncover more than 75% of accounts visiting your website, map the buyer journey, activate
        sales &amp; marketing campaigns, and measure what works.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        For teams running local campaigns, Factors closes the loop. It alerts you instantly when a Tier 1
        account shows spike intent, so you can shift budgets or outreach in real time. Ad spend is no longer
        wasted on broad demographics or cold lists. Instead, campaigns target only the accounts that are
        actually in-market, based on live intent signals. This means fewer dollars wasted, higher conversion
        rates, and a faster-moving pipeline. The system even automates frequency capping and audience
        management, so large accounts do not burn through your budget while others go untouched.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real change is in predictability and control. With
        Factors,&nbsp;<GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink>&nbsp;is no longer a
        static, manual process. The AI adjusts scores based on real engagement and historical conversion
        patterns, surfacing high-intent accounts weeks before anyone fills out a form. The team can see which
        accounts are moving from research to validation, and which ones need a nudge. For the business owner,
        this means more deals, less wasted effort, and a clear path from marketing activity to closed revenue.</p>
      <p className="text-md text-white shadow-text pt-3">
        Factors also removes the guesswork from outreach. The platform suggests the right message and timing
        for every account, based on their actual journey. Sales and marketing stay aligned because both work
        from the same set of signals and priorities. The system even tracks silent buying signals from
        existing clients, so you can spot upsell and cross-sell opportunities before a competitor does. The
        result is a week that moves faster, with fewer dead ends and more wins.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in South Florida, this is the difference between surviving and growing. Factors
        gives you the tools to compete with much larger companies, without the overhead or complexity. The
        manual detective work, the cold calls, the endless spreadsheets, all of it goes away. Instead, your
        team spends their time where it counts: talking to the right accounts, at the right moment, with the
        right message. That is what lead enrichment and predictive scoring should feel like.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-factors-removes-from-your-week-lead-enrichment-and-predictive-scoring-that-works" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Factors Removes from Your Week: Lead Enrichment and Predictive Scoring That Works
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-factors-removes-from-your-week-lead-enrichment-and-predictive-scoring-that-works" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Factors Removes from Your Week: Lead Enrichment and Predictive Scoring That Works
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
