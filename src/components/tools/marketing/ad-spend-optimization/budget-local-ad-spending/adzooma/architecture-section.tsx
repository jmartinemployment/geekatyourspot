import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma’s architecture is designed for multi-channel ad management, unifying Google Ads, Meta (Facebook)
        Ads, and Microsoft Ads into a single operational hub. The platform’s integration layer connects directly to
        the <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">APIs</GlossaryLink> of each
        supported ad network, pulling live account data and campaign metrics into one normalized dashboard. This
        eliminates the need for separate logins and scattered spreadsheets, giving small teams a central place to
        monitor spend, performance, and opportunities.</p>
      <p className="text-base text-white shadow-text pt-3">
        The system stores and organizes data from every connected account, including active and paused campaigns, ad
        groups, individual ads, keywords, budgets, conversion tracking status, and performance history. Adzooma’s
        data model is built to handle unlimited ad accounts on all plans, so a business can manage multiple brands,
        locations, or product lines without hitting platform limits. Each account’s structure, campaigns, ad sets,
        assets, and budgets, is mapped into Adzooma’s dashboard, maintaining the hierarchy and relationships found
        in the original platforms.</p>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma’s backend continuously syncs this data, updating at a frequency that matches the user’s subscription
        tier: monthly for Free, weekly for Silver, and daily for Gold. This means that the insights,
        recommendations, and alerts are always based on the most recent available data. The platform keeps a full
        history of changes, alerts, and actions, so users can review what was done and when, supporting
        accountability and compliance needs for regulated industries or agency clients.</p>
      <p className="text-base text-white shadow-text pt-3">
        The architecture also supports advanced diagnostics and health checks. Adzooma analyzes product feed quality
        for Shopping campaigns, checks for missing attributes, budget gaps, negative keyword opportunities, and
        audience signals. It verifies that tracking pixels and conversion APIs are correctly placed and working,
        flagging any issues that could affect reporting accuracy or campaign optimization. For each connected
        account, the platform identifies disapproved, paused, or inactive ads, broken tracking, missing conversion
        data, budget pacing errors, and low ad relevance, all mapped to the exact campaign or asset affected.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cross-platform reporting is a core function. Adzooma aggregates performance metrics across Google, Meta, and
        Microsoft Ads, allowing users to compare results, track overall spend, and spot trends that would be missed
        in channel-specific dashboards. Reports can be customized and white-labeled, with Silver and Gold plans
        supporting branded exports for agencies or client-facing teams. The system’s reporting engine filters data
        by channel, campaign, or time period, making it easy to drill down to the exact insight needed without
        exporting raw data.</p>
      <p className="text-base text-white shadow-text pt-3">
        Custom rules and alert logic are stored within Adzooma’s own configuration store. Users can define
        thresholds for spend, performance, or delivery issues, and the platform will monitor live data for any
        breaches. Alerts are delivered by email or Slack, and can be set to run in the user’s preferred timezone,
        aligning with local business hours and reporting cycles. The system tracks which alerts have triggered,
        when, and what action was taken, ensuring full visibility into the health and responsiveness of every
        campaign.</p>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma’s Opportunity Engine is the intelligence layer that turns raw data into prioritized recommendations.
        This engine uses account structure, performance history, and current settings to identify which fixes will
        have the biggest impact with the least effort. Suggested actions include pausing underperforming ads,
        reallocating budget, fixing tracking issues, and updating ad copy. The platform queues these recommendations
        so users can review, approve, or apply them in bulk, with a single click for most supported changes.</p>
      <p className="text-base text-white shadow-text pt-3">
        For Shopping and <GlossaryLink slug="performance-max" className="text-[#0B162A] hover:underline">Performance
        Max</GlossaryLink> campaigns, Adzooma holds and analyzes product feed data, campaign settings, and
        performance metrics. It supports both Google and Microsoft Ads Shopping formats, centralizing insights and
        recommendations for teams managing multiple storefronts or brands. The system’s feed analysis checks for
        missing product attributes, budget gaps, and <GlossaryLink slug="retargeting" className="text-[#0B162A] hover:underline">remarketing</GlossaryLink> setup,
        helping small businesses avoid compliance issues and maximize visibility.</p>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma does not replace the original ad platforms. Instead, it sits alongside them, ingesting data,
        surfacing opportunities, and allowing direct action where supported. Changes made in Adzooma are synced back
        to the ad accounts, and any actions taken outside are reflected in the next data refresh. This two-way sync
        ensures that the platform’s view is always accurate, and that users never lose track of what’s live, paused,
        or pending in their campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, Adzooma’s architecture is purpose-built for the realities of small business advertising: it
        connects to every major ad channel, holds the full structure and history of every campaign, and structures
        data so that optimization, validation, and reporting can happen from one screen. For micro-budget teams in
        South Florida, this means no more missed logins, no more dead budgets running unchecked, and no more
        guessing which part of the ad operation is leaking money. The platform is the control center that brings
        order, transparency, and speed to digital ad management.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-adzooma-connects-what-data-it-holds-and-how-it-structures-your-ad-operations" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Adzooma Connects, What Data It Holds, and How It Structures Your Ad Operations
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-adzooma-connects-what-data-it-holds-and-how-it-structures-your-ad-operations-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Adzooma Connects, What Data It Holds, and How It Structures Your Ad Operations
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
