import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Google Performance Max replaces the guesswork and manual grind of precision lead acquisition with
        AI-driven automation designed for small budgets. Instead of forcing you to watch every dollar and every
        click, it acts as a tireless guardrail that keeps your spend focused on high-intent local buyers. The
        platform does not just automate tasks, it removes the jobs that drain your week, so you can focus on running
        your business, not running your ads.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first change you notice is that Google Performance Max stops your budget from leaking out to junk clicks
        and irrelevant audiences. It narrows ad delivery to the exact zip codes and neighborhoods you serve. No more
        paying for out-of-area impressions or accidental mobile clicks. Every dollar now goes to prospects who can
        actually become customers. This geographic precision means you stop wasting time and money on leads you can
        never convert.</p>
      <p className="text-base text-white shadow-text pt-3">
        Google Performance Max also solves the problem of ad fatigue and message testing. Its native asset
        mix-and-match capability constantly generates and rotates fresh creative variations, headlines,
        descriptions, calls to action, so your local audience never tunes you out. The system automatically tests
        which combinations work best, adapts as soon as performance drops, and pauses underperforming ads before
        they can drain your spend. You do not have to write, schedule, or monitor each message variation by hand.
        The process is continuous, and the results are visible in your campaign metrics.</p>
      <p className="text-base text-white shadow-text pt-3">
        When it comes to budget allocation, Google Performance Max uses historical auction-time <GlossaryLink slug="machine-learning" className="text-[#0B162A] hover:underline">machine
        learning</GlossaryLink> to secure the best possible cost-per-click for your local market. You no longer have
        to tweak bids manually or risk resetting the platform’s learning algorithms. The system shifts your
        micro-budget between search feeds, local maps, and social networks based on real-time conversion signals.
        This means you stay visible when local search spikes, and you never miss out because your budget was set in
        the wrong place at the wrong time. The AI responds to what is happening now, not what happened last week.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual oversight becomes a thing of the past. Google Performance Max detects when an ad variation starts to
        underperform and pauses it instantly, there is no need to check dashboards every day or worry about losing
        money over the weekend. The platform’s automation frees you from the constant vigilance that manual
        management demands. You get time back, and your campaigns stay efficient even when you are away from the
        screen.</p>
      <p className="text-base text-white shadow-text pt-3">
        For message validation, Google Performance Max does more than just test copy. It analyzes your website and
        existing ads to ensure every headline and description matches user intent. The platform uses generative AI
        to create new variations that fit your brand and your audience, then measures which ones actually drive
        results. You see deeper insights into what works, reports on search terms, <GlossaryLink slug="landing-page" className="text-[#0B162A] hover:underline">landing
        pages</GlossaryLink>, and creative assets, so you can make informed adjustments without guesswork.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget management is no longer a daily struggle. Google Performance Max lets you set campaign budgets over a
        specific period, whether it is a few days or a few weeks. The system optimizes your spend to make sure you
        do not overspend or miss out on opportunities. It aims to fully use your budget by your end date, without
        constant manual tweaks. This approach gives you the confidence to run short-term promotions or longer
        campaigns, knowing your spend is under control.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real impact is in what you get back: hours each week that used to go to manual bid adjustments, ad copy
        rewrites, and dashboard checks. Errors from manual oversight, like letting a bad ad run too long or missing
        a spike in local search, no longer cost you money. You can run effective campaigns without hiring an agency
        or spending your nights in the ad manager. For a local business with a budget under $500 a month, that is
        the difference between burning through cash and building a steady pipeline of qualified leads.</p>
      <p className="text-base text-white shadow-text pt-3">
        Google Performance Max is not just a toolkit. It is a system that adapts to your market, learns what works,
        and keeps your budget focused on real buyers. The platform’s AI powers every part of the process, from
        narrowing your audience, to mixing creative, to shifting spend in real time. You do not need to be a
        marketing expert or a data analyst. The heavy lifting is handled for you, and your results improve as the
        system learns from your actual performance.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in South Florida, this is how you compete with larger players without the overhead.
        Google Performance Max gives you the tools to protect every dollar, reach the right prospects, and validate
        your message continuously. You no longer have to choose between wasting time and wasting money. The platform
        makes sure that every week, your ad spend works harder, your message lands better, and your business grows,
        without the stress and uncertainty that manual management brings.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-google-performance-max-actually-does-for-budget-ad-copy-message-validation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Google Performance Max actually does for Precision Lead Acquisition
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
              <h2 id="what-google-performance-max-actually-does-for-budget-ad-copy-message-validation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Google Performance Max actually does for Precision Lead Acquisition
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
