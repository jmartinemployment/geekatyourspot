
export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses in South Florida looking to fix their lead capture pipeline have no shortage of tools
        to consider. The market is crowded with platforms that promise to identify anonymous website visitors,
        enrich leads with more data, and score them by intent. But the real test is what these tools actually
        deliver for a small team working with limited budget and time. Factors stands out because it closes
        the gap between raw traffic numbers and actionable, revenue-driving insights, while most alternatives
        either leave you guessing or require enterprise-level spend.</p>
      <p className="text-md text-white shadow-text pt-3">
        Most common approaches fall into three camps. First, there are manual or legacy methods, Google
        Analytics, simple form fills, and spreadsheet-based tracking. These give you surface-level numbers but
        do nothing to tell you who is visiting or what actions signal real buying intent. As soon as Google
        Analytics 4 dropped visitor IP mapping, many teams lost their only bridge between web activity and
        real leads, leaving them blind to who actually engages. Factors sidesteps this by resolving anonymous
        visits into named company profiles in real time, so you see which local businesses are actually on
        your site, without waiting for a form fill.</p>
      <p className="text-md text-white shadow-text pt-3">
        Second, there are point solution tools that focus on a single piece of the puzzle, visitor
        identification, lead enrichment, or scoring, but not the full journey. Many tools in this category
        identify only 20-40% of anonymous visitors, and often at a price that simply does not fit a small
        business budget. Even when they do surface a name, most do not connect that data to campaign
        performance or pipeline attribution. Factors, by contrast, unifies visitor identification with
        multi-channel intent signals, firmographic enrichment, and predictive scoring, all mapped to a
        timeline that shows which campaigns actually move accounts through the funnel.</p>
      <p className="text-md text-white shadow-text pt-3">
        The third camp is enterprise ABM platforms. These promise a full stack, identification, enrichment,
        scoring, attribution, but at a price and complexity level that rules them out for most small teams.
        Platforms that start at $60,000 or more a year may bring a deep feature set, but most of those
        features are overkill for a ten- or twenty-person sales and marketing team. Factors delivers the core
        capabilities, identifying up to 75% of anonymous visitors, scoring by real buying signals, and mapping
        engagement to revenue, without the overhead, the long rollout, or the need for a dedicated analytics
        engineer. It is built to give you the enterprise brain without the enterprise headcount.</p>
      <p className="text-md text-white shadow-text pt-3">
        The difference is not just in what Factors identifies, but in how it acts on that data. Where most
        tools stop at showing a list of companies, Factors scores and segments accounts by live behavior,
        firmographics, and pipeline stage. It then syncs those high-intent segments straight into LinkedIn and
        Google for targeted ad campaigns, and triggers real-time alerts to your sales team through Slack or
        Teams when an account shows spike intent. This means you do not just see the data, you work from it.
        The sales team gets a daily, prioritized list of accounts who are actually in-market, with direct
        contact details and a full engagement history.</p>
      <p className="text-md text-white shadow-text pt-3">
        The impact is clear in cases where teams have switched from legacy methods or point solutions to
        Factors. AudienceView, for example, moved from simply tracking anonymous web traffic to surfacing
        high-intent accounts, running intent-based LinkedIn campaigns, and alerting sales when it is time to
        reach out. Their pipeline now reflects real engagement, not just form fills. Cacheflow used Factors to
        cut their unknown lead sources from 30% to 10% and directly attribute 30% more closed deals to
        LinkedIn campaigns. These outcomes are not theoretical, they come from the platform’s ability to
        connect the dots between web activity, ad engagement, and real sales conversations.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses, the real comparison is not just with other tools, but with the cost of doing
        nothing. Every week spent guessing at which leads matter, or cold-calling lists with no intent
        signals, is time and money lost. Factors is designed to fit the way small teams work, quick to set up,
        easy to use, and focused on surfacing the accounts that are most likely to buy now. It does not drown
        you in dashboards or require a new hire to run. It simply puts the most important signals in front of
        the people who need them, when they need them, and ties every campaign back to real revenue. That is
        the difference between another reporting tool and a platform that actually drives pipeline.</p>
      <p className="text-md text-white shadow-text pt-3">
        If you want to see how these approaches work in practice, the publisher’s own Lead Capture Pipeline
        page already covers the role of smart chatbots, AI-driven&nbsp;lead
        scoring, and voice assistants in building a modern pipeline. Factors is the tool that
        brings those strategies together, giving you one place to see, score, and act on every lead that
        matters.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-factors-stacks-up-against-other-lead-enrichment-and-scoring-approaches" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Factors Stacks Up Against Other Lead Enrichment and Scoring Approaches
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-factors-stacks-up-against-other-lead-enrichment-and-scoring-approaches-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Factors Stacks Up Against Other Lead Enrichment and Scoring Approaches
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
