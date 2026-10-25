import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Madgicx removes the bottlenecks and manual errors that hold back small businesses trying to scale their
        measured lead generation. Instead of spending hours each week building new audience segments, launching
        fresh creative, and watching for budget spikes, you let Madgicx automate these jobs so you can focus on
        strategy and sales. The result is more predictable lead flow, lower cost per lead, and a team freed from
        repetitive manual work.</p>
      <p className="text-base text-white shadow-text pt-3">
        Madgicx automates your audience targeting. It maps your entire ad account into structured, multi-tiered
        funnel paths. Rather than bidding the same amount for every prospect, it segments cold leads from warm ones,
        and adjusts bids to match their stage in the journey. This alone prevents wasted spend on low-intent traffic
        and ensures your best prospects get the right message at the right price. You no longer have to manually
        create dozens of custom audiences or worry about missing key segments.</p>
      <p className="text-base text-white shadow-text pt-3">
        <GlossaryLink slug="audience-overlap" className="text-[#0B162A] hover:underline">Audience overlap</GlossaryLink> and
        self-competition are eliminated. Madgicx detects when your own ads are bidding against each other and
        automatically restructures your campaigns to avoid these costly overlaps. This means every dollar you spend
        is working toward acquiring new customers, not fighting for the same eyeballs twice. With pre-built
        audiences and automatic exclusions, you do not have to spend time managing lists or checking for duplicates,
        Madgicx handles it in the background.</p>
      <p className="text-base text-white shadow-text pt-3">
        Strict customer targeting exclusions are handled without manual effort. Madgicx ensures that past buyers do
        not receive top-of-funnel introduction ads, protecting your budget from redundant impressions. When your
        audience moves through the funnel, the platform updates their status and adjusts targeting rules
        automatically. This keeps your campaigns efficient and your messaging relevant, without constant oversight
        from your team.</p>
      <p className="text-base text-white shadow-text pt-3">
        Predictive analytics drive real-time optimization. Madgicx uses AI to monitor performance data and pause
        unprofitable demographic groups as soon as they stop converting. Instead of waiting for a weekly report or
        digging through spreadsheets, you get instant adjustments that keep your campaigns lean. This not only saves
        money but also returns hours each week that would have gone to manual analysis and campaign tweaks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative bottlenecks disappear with Madgicx’s AI Ad Generator. You can bulk-generate dozens of ad variations
        from a single product image or a winning past ad. This means you always have fresh creative to feed the ad
        platform’s algorithms, preventing ad fatigue and keeping performance high. Your team no longer needs to
        spend late nights building new graphics or writing copy just to keep campaigns alive. <GlossaryLink slug="creative-testing" className="text-[#0B162A] hover:underline">Creative
        testing</GlossaryLink> and rotation happen automatically, so you can focus on higher-level marketing tasks.</p>
      <blockquote cite="https://madgicx.com/blog/ai-ad-generation" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Stop the creative bottleneck and scale your agency with AI ad generation.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        Budget management moves from guesswork to automation. Madgicx’s Autonomous Budget Optimizer monitors your ad
        spend 24/7, scaling up winning campaigns and cutting back on underperformers without manual intervention.
        Daily spend caps and safety boundaries are enforced automatically, so you never risk blowing through your
        budget on a bad day. This means you can step away from the dashboard and trust that your campaigns are
        running efficiently.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting and analysis are simplified. Madgicx brings together performance data from Meta, Google, TikTok,
        Shopify, and more into a single dashboard. You get real-time updates on what is working, where your spend is
        going, and which audiences or creatives are driving results. This removes the need to export data to
        spreadsheets or patch together reports from different platforms. You see what matters, when it matters, and
        make decisions faster.</p>
      <p className="text-base text-white shadow-text pt-3">
        Madgicx’s predictive audience targeting goes beyond basic demographics. The system analyzes historical data,
        current trends, and real-time user behavior to find the audiences most likely to convert. It builds <GlossaryLink slug="lookalike-audience" className="text-[#0B162A] hover:underline">lookalike
        models</GlossaryLink> based on your highest-value customers, not just anyone who clicked your ad. As a
        result, you reach prospects who are more likely to buy, and you stop spending on segments that never
        convert. Over time, Madgicx learns from your results and refines its targeting, so performance keeps
        improving with less manual input.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses without deep technical teams, Madgicx levels the playing field. It handles the
        automation, audience analysis, and creative rotation that would otherwise require expensive hires or outside
        agencies. You get the benefit of a sophisticated media buying operation, but without the overhead or
        complexity. This means you can scale your measured lead generation reliably, keep your costs under control,
        and free up your team to focus on growing the business.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, Madgicx cuts out the manual work, reduces errors, and delivers a more stable, scalable pipeline of
        leads. It is not just a set of features, it is a system that removes the week-to-week grind of campaign
        management, so every hour your team saves can go back into strategy, customer service, or sales. For South
        Florida small businesses trying to break through the scaling ceiling, Madgicx is the difference between
        running to stand still and building a lead engine that grows with you.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-madgicx-actually-does-for-measured-lead-generation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Madgicx actually does for Measured Lead Generation
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
              <h2 id="what-madgicx-actually-does-for-measured-lead-generation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Madgicx actually does for Measured Lead Generation
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
