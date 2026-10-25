import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function MechanicsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Automating Measured Lead Generation turns your ad spend from a guessing game into a controlled, data-driven
        process. Instead of your budget leaking away on outdated creative and manual bidding, every dollar now flows
        through a tested system. Your campaigns scale only when the data shows an actual win, not when someone feels
        optimistic. Every creative, every bid, and every audience segment is managed by algorithmic guardrails, not
        by gut.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first shift is in budget control and pacing. Before automation, you raise your spend and hope for the
        best, usually triggering sudden cost-per-lead spikes and wasted <GlossaryLink slug="impressions" className="text-[#0B162A] hover:underline">impressions</GlossaryLink>.
        With automated scaling, tools such as <Link id={`blog-marketing-measured-lead-generation-mechanics-performance-max${idSuffix}`} href="/tools/marketing/ad-spend-optimization/budget-local-ad-spending/google-performance-max" className="text-[#0B162A] hover:underline">Performance
        Max</Link> react to live conversion data across all your channels. Instead of leaving <GlossaryLink slug="daily-budget" className="text-[#0B162A] hover:underline">daily
        budgets</GlossaryLink> set in stone, Performance Max can shift micro-budgets between Google Search, Maps,
        and Meta in real time, capitalizing on local conversion spikes and pulling back when demand drops. Every
        adjustment is backed by live results, not a manual guess.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next improvement is in targeting. Even a strong creative offer fails if you are buying clicks from
        outside your service zone or running ads to the wrong audience. Performance Max solves this by narrowing
        delivery to high-intent zip codes and specific radii, so every impression is within your true market. No
        more wasted budget on irrelevant clicks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Now, creative fatigue is tackled at the root. Instead of running the same ad text and images for months,
        letting your results collapse, Performance Max and <Link id={`blog-marketing-measured-lead-generation-mechanics-marpipe${idSuffix}`} href="/tools/marketing/ad-spend-optimization/measured-lead-generation/marpipe" className="text-[#0B162A] hover:underline">Marpipe</Link> work
        together to generate and rotate hundreds of creative variations. This is not just swapping a headline or
        tweaking a button color. Marpipe’s system automatically builds, tests, and deploys new combinations across
        your feed, identifying the winners and pausing the losers instantly. If a creative starts to drop in
        performance, the system kills it before your cost-per-lead balloons.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bid optimization and ad account safety are handled by <Link id={`blog-marketing-measured-lead-generation-mechanics-optmyzr${idSuffix}`} href="/tools/marketing/ad-spend-optimization/measured-lead-generation/optmyzr" className="text-[#0B162A] hover:underline">Optmyzr</Link>.
        Where manual oversight fails, like when a competitor spikes their bid or your site breaks, Optmyzr’s rule
        engine reacts immediately. It monitors landing page health, pauses <GlossaryLink slug="ad-set" className="text-[#0B162A] hover:underline">ad
        sets</GlossaryLink> if a 404 error pops up, and adjusts bids when <GlossaryLink slug="impression-share" className="text-[#0B162A] hover:underline">impression
        share</GlossaryLink> is threatened (<a id={`blog-marketing-measured-lead-generation-mechanics-source-optmyzr-com${idSuffix}`} href="https://www.optmyzr.com/blog/are-your-adwords-ads-losing-money-on-bad-landing-pages/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Optmyzr</a>,
        as of Oct 24, 2026). That means you do not wake up to discover half your budget was spent driving traffic to
        a broken page, or that you lost your top search slot overnight.</p>
      <p className="text-base text-white shadow-text pt-3">
        <GlossaryLink slug="audience-segmentation" className="text-[#0B162A] hover:underline">Audience segmentation</GlossaryLink> and
        exclusion is no longer a manual, error-prone process. <Link id={`blog-marketing-measured-lead-generation-mechanics-wrench${idSuffix}`} href="/tools/marketing/ad-spend-optimization/measured-lead-generation/wrench" className="text-[#0B162A] hover:underline">Wrench</Link> cleans
        and syncs your CRM data, auto-scoring contacts by conversion probability and <GlossaryLink slug="customer-lifetime-value" className="text-[#0B162A] hover:underline">lifetime
        value</GlossaryLink>. If someone just bought from you, Wrench will exclude them from retargeting instantly.
        If a contact is high-potential, it moves them into the right ad funnel. No more burning budget on cold
        prospects or past buyers who should not see the same intro offer.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, every optimization runs without downtime or designer overhead. The system you put in place does not
        need you to check dashboards at midnight or scramble to swap out creatives over the weekend. It is always
        on, always refining. When a campaign wins, the system scales it up safely. When it loses, it is paused
        before it can do damage. Instead of playing catch-up, your business is in control, using Measured Lead
        Generation as an operational advantage, not a chore.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-changes-when-measured-lead-generation-is-automated-step-by-step" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What changes when Measured Lead Generation is automated, step by step
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
              <h2 id="what-changes-when-measured-lead-generation-is-automated-step-by-step-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What changes when Measured Lead Generation is automated, step by step
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
