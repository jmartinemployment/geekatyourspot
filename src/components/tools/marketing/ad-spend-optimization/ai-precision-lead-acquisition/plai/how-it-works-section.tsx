import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Plai automates ad spend optimization by actively monitoring campaigns, analyzing live performance signals, and
        shifting budget in real time to maximize results. It does not wait for a weekly report or require manual
        intervention, its optimization engine works continuously, applying rules and machine learning to keep spend
        focused on what is working right now.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core of Plai&rsquo;s approach is constant feedback and adjustment. The platform ingests data from every
        connected campaign across Meta, Google, TikTok, and other major channels. It tracks metrics like click-through
        rate, conversion rate, and <GlossaryLink slug="cost-per-lead" className="text-[#0B162A] hover:underline">cost per
        lead</GlossaryLink> as they happen, not just as a daily or weekly rollup. When a campaign starts to outperform
        others, whether that means lower cost per lead, higher conversion rate, or even better engagement, Plai&rsquo;s
        optimization logic moves more budget to that campaign automatically. Underperforming ads get less spend or are
        paused outright, so wasted budget is minimized without someone having to log in and make changes by hand.</p>
      <p className="text-base text-white shadow-text pt-3">
        Plai&rsquo;s automation rules do more than just shift dollars. The engine can refresh creative assets when ad
        fatigue sets in, adjust audience targeting as user behavior changes, and change bid strategies based on
        performance trends. This cycle of test, measure, and optimize runs continuously, so campaigns stay aligned with
        real market conditions instead of lagging behind. For a small business in South Florida, this means you do not
        need to hire a full-time analyst or spend your own evenings watching dashboards, Plai handles the heavy lifting,
        making small adjustments as soon as the data calls for them.</p>
      <p className="text-base text-white shadow-text pt-3">
        A key strength of Plai is its ability to group related campaigns into what it calls Optimization Folders. These
        folders let the platform manage budgets not just within a single channel, but across every connected platform at
        once. If a Facebook ad set is driving strong results this week but Google search slows down, Plai can reallocate
        budget instantly, so the overall spend delivers more for every dollar. This cross-platform optimization is what
        separates Plai from tools that only automate within one ad network.</p>
      <p className="text-base text-white shadow-text pt-3">
        Plai&rsquo;s optimization engine also learns from ongoing A/B tests and creative variations. When you test
        different ad formats, images, or messages, Plai tracks which combinations perform best and prioritizes them. It
        does not just pick a winner and stop; it keeps testing and refining, so your campaigns keep improving instead of
        stalling out after the first round of changes. This is especially important for small teams who cannot afford to
        spend weeks running manual tests or rebuilding campaigns from scratch.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another practical benefit is the way Plai automates routine campaign management tasks. Scheduling updates,
        adjusting bids, and segmenting audiences, all of this can be triggered by performance data, so you do not need to
        check in every day to keep campaigns on track. For instance, if engagement data shows your audience is most
        active on certain days or times, Plai will schedule posts and ad pushes for those windows, maximizing exposure
        and return on spend. When performance drops, it can refresh creative or adjust targeting automatically, keeping
        results steady without manual oversight.</p>
      <p className="text-base text-white shadow-text pt-3">
        For reporting, Plai does not just collect data, it turns it into actionable insights. Its dashboards show you, in
        plain English and clear visuals, which campaigns are working, where spend is going, and what adjustments have
        been made. Non-technical users get a simple view of performance, so they can make decisions quickly without
        needing to interpret complex metrics. This is crucial for small businesses that do not have a data analyst on
        staff.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, Plai&rsquo;s optimization engine means you spend less time fighting with ad managers and more time
        on the parts of marketing that actually grow your business. You get the benefit of machine-driven precision
        without giving up control, rules and thresholds can be set to fit your goals, and you can always override or
        adjust as needed. For a South Florida small business, that means more efficient spending, faster results, and
        less risk of wasted budget or missed opportunities.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="plais-optimization-engine" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Plai&rsquo;s optimization engine
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="plais-optimization-engine-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Plai&rsquo;s optimization engine
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
