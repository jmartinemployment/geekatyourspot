import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function KeyFactorsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A successful Ad Spend Optimization project holds up because it is grounded in reality, builds on sound data, and
        runs on routines, not hope or last-minute heroics. The difference shows up in the first month: a strong
        implementation makes problems visible, fixes them fast, and keeps you in control. A weak one leaves you
        guessing, reacting, and stuck with the same old leaks, no matter how much automation you bolt on.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first sign of a strong implementation is a clear, shared definition of what success looks like. Teams that
        skip this step end up chasing vanity metrics, clicks, impressions, or &ldquo;engagement&rdquo;, instead of
        leads or sales. When you and your team agree on a dollar target, a cost per result, or a lead volume goal,
        every optimization decision has a benchmark. This is where most projects fall apart: if your goals are fuzzy,
        your tools will optimize toward the wrong outcomes. Plai is built to translate complex metrics into plain
        dashboards, so you always know if you are on track.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data discipline is the next make-or-break factor. If your <GlossaryLink slug="conversion-tracking" className="text-[#0B162A] hover:underline">conversion
        tracking</GlossaryLink> is broken, your reports will lie, and every automation rule risks scaling up the wrong
        campaign. Cometly and Triplewhale solve this by installing reliable, server-side tracking, no more missing
        conversions due to ad blockers or browser updates. Triplewhale&rsquo;s deduplication ensures you do not
        double-count leads across Google and Meta, so your budget only rewards channels that actually deliver.</p>
      <p className="text-base text-white shadow-text pt-3">
        Routine is what makes optimization stick. Many businesses set up smart rules, then never check if they are
        firing, or lose track of what the rules actually do. Bir stands out here: its automation scripts audit ad
        accounts every 15 minutes, catching budget spikes or creative fatigue before they spiral (<a id={`use-cases-marketing-precision-lead-acquisition-key-factors-source-bir-ch${idSuffix}`} href="https://bir.ch/case-studies/nothink" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Bir</a>,
        as of Oct 25, 2026). Wask brings weekly structure, requiring a regular review of every account, so there is
        always a next step, not just a backlog of alerts. Adzooma keeps the team organized by showing all channels in
        one dashboard, reducing the risk of missing a critical drop in performance on a forgotten account.</p>
      <p className="text-base text-white shadow-text pt-3">
        A robust optimization setup is also built to handle exceptions and edge cases. Optmyzr&rsquo;s scripts pause
        campaigns if your site goes down, defends your bids against sudden competitor surges, and drops keywords that
        quietly drain spend but never convert. LocaliQ locks your targeting to your actual service area, so you do not
        waste dollars on clicks from outside your market. These are the guardrails that keep a project on the rails
        when the unexpected hits.</p>
      <p className="text-base text-white shadow-text pt-3">
        The last key is transparency and approval control. Owners need to see, approve, and understand the changes
        before the software acts. Each step, pausing a campaign, increasing a budget, shifting spend, should be
        surfaced for review, not applied blindly. Most platforms, including Plai and Adzooma, make it easy to see what
        changes are proposed and why, so you remain in control and can stop or reverse any action that does not fit
        your business reality.</p>
      <p className="text-base text-white shadow-text pt-3">
        A failed implementation does not fail all at once, it drifts off course because no one checks the data, reviews
        the rules, or stops to ask if the current spend lines up with the business&rsquo;s real priorities. The
        difference is not about which tool you choose, but about whether you build a process that keeps surfacing
        issues, acting on them, and learning from the results. When you do, you get continuous improvement; when you do
        not, you get a dashboard that looks busy but never delivers the growth you want.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-difference-between-ad-spend-optimization-that-works-and-one-that-fails" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Difference Between Ad Spend Optimization That Works and One That Fails
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-difference-between-ad-spend-optimization-that-works-and-one-that-fails-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Difference Between Ad Spend Optimization That Works and One That Fails
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
