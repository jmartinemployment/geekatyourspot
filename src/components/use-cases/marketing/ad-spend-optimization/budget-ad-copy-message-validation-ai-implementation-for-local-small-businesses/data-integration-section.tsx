export default function DataIntegrationSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Automated ad copy and message validation depends on the right data flowing into, and out of, the system,
        plus clean integration with your existing platforms. The goal is not to create another silo but to wire
        smart validation into the channels and dashboards your team already uses. If your environment cannot supply
        the specific signals these validation engines need, your automation will fail to deliver reliable results
        and you will keep burning budget on the wrong messages.</p>
      <p className="text-base text-white shadow-text pt-3">
        A working setup starts with reliable conversion data. This means every click, form fill, call, and message
        from your ad campaigns must land in a unified pipeline. For a small business in South Florida, this is not
        just a matter of plugging in Google Analytics and hoping for the best. In practice, you need cross-channel
        attribution that covers Google, Meta, and any local directory ads you run. Tools like LocaliQ are built to
        unify lead forms, call tracking, and digital touches into one dashboard, so you can see whether a new
        inquiry came from Google, Facebook, or an organic listing. Without this cross-channel view, you simply
        cannot know which message or offer is working.</p>
      <p className="text-base text-white shadow-text pt-3">
        Second, accurate location and audience data must be present at the point of validation. Local campaigns live
        and die on the ability to target by zip code, neighborhood, or even a ten-mile driving radius. Google
        Performance Max, for example, narrows ad delivery down to high-intent zip codes, and Plai recommends tightly
        focused audience targets based on what has worked for other small businesses. If your CRM or website cannot
        provide clean, up-to-date location fields, you cannot lock down your ads to the areas that actually produce
        sales. This is not just about avoiding waste on out-of-area clicks, it is about ensuring that the AI’s
        learnings reflect your real market, not a noisy sample from dozens of counties away.</p>
      <p className="text-base text-white shadow-text pt-3">
        Third, your environment must allow for live feedback loops between ad performance and creative assets.
        AdCreative generates conversion-optimized graphics and headlines, but those outputs only improve if
        performance data flows back into the system. The same applies to Anyword, which assigns predictive
        performance scores to copy variants before you spend money. The integration must support pulling in results,
        impressions, clicks, conversions, so the next round of creative is based on what actually happened, not just
        a theoretical score. A disconnected design tool or a social scheduler that cannot ingest real ad data is a
        dead end here.</p>
      <p className="text-base text-white shadow-text pt-3">
        Fourth, real-time budget and pacing signals need to pass between your ad accounts and the validation engine.
        Adzooma unifies operations across Google, Meta, and Microsoft, scanning for budget errors and serving up
        fixes instantly. This only works if your integration allows for continuous monitoring, no manual exports, no
        waiting a week for a spreadsheet. If your ad accounts do not push spend and pacing data in real time, you
        are back to chasing problems after they have already cost you money.</p>
      <p className="text-base text-white shadow-text pt-3">
        Fifth, your environment must support automated adjustment of campaign parameters, copy, creative, budget,
        and targeting, without requiring a person to touch every lever. Plai automates conversion pixel setup and
        allows multi-channel budget shifts based on live results; Google Performance Max can move micro-budgets
        between search feeds, maps, and social networks as soon as conversion signals appear. The integration must
        allow the validation engine to make these changes directly, not just suggest them in a report. Otherwise,
        the feedback loop slows to a crawl and you lose the main efficiency benefit.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, every integration must respect your data quality baseline. Automated validation is only as good as
        the information it is built on. If your CRM, website, or ad accounts are riddled with duplicates, missing
        fields, or non-standard formats, the AI cannot do its job. Before you connect any validation layer, run a
        data quality assessment, clean up schema, standardize address fields, and make sure every source feeds into
        a single, consistent pipeline. The tools can automate a lot, but they cannot fix a broken foundation on
        their own.</p>
      <p className="text-base text-white shadow-text pt-3">
        A real-world rollout means mapping every data source, lead forms, calls, chat, CRM entries, into a single
        pipeline, then wiring in validation and adjustment logic that can operate on live data. The integrations
        must be two-way: pulling real performance data for analysis and pushing validated changes back into your ad
        accounts. If you are missing even one of these links, you risk automating the wrong things or, worse, making
        decisions on stale or incomplete inputs.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short: automated validation is not a bolt-on script or a one-click install. It is a set of tightly
        coupled integrations, each supplying the right data at the right time. When the work is done right, you can
        finally trust that every dollar in your ad budget is protected by a closed-loop system, one that learns from
        real outcomes and adjusts your campaigns in real time, not just after the money is gone.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-data-and-integration-are-really-needed-for-automated-ad-copy-and-message-validation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data and Integration Are Really Needed for Automated Ad Copy and Message Validation
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
              <h2 id="what-data-and-integration-are-really-needed-for-automated-ad-copy-and-message-validation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data and Integration Are Really Needed for Automated Ad Copy and Message Validation
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
