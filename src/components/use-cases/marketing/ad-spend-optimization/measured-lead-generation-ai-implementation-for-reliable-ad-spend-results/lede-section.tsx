import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why does <GlossaryLink slug="lead-generation">lead generation</GlossaryLink> get so expensive and
        unpredictable when a small business in South Florida tries to scale past basic local ads? The answer is that
        Measured Lead Generation hits a wall at $500 to $1,500 a month in ad spend because manual work and platform
        algorithms combine to punish growth. When you raise your budget, your <GlossaryLink slug="cost-per-lead">cost-per-lead</GlossaryLink> (CPL)
        jumps, <GlossaryLink slug="ad-fatigue">creative fatigue</GlossaryLink> sets in, and your team cannot keep up
        with the demand for fresh content, while your data is too fragmented for smart targeting. The result is
        wasted spend, hidden risks, and a sales pipeline that never stabilizes.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you are spending $16 to $50 a day on ads, you are not just fighting for visibility anymore (<a id={`use-cases-marketing-measured-lead-generation-lede-source-wrench-ai${idSuffix}`} href="https://wrench.ai/products/sneak-peek-of-the-wrench.ai-platform" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Wrench</a>,
        as of Oct 24, 2026). You need leads to flow predictably, but every time you try to ramp up, the ad platforms
        break your cost controls and your own team burns out trying to make new graphics, headlines, and offers fast
        enough to avoid ad fatigue. Without dedicated scripts and automation, you cannot defend your bids from
        sudden price spikes, and your campaigns waste money on the wrong audiences because your <GlossaryLink slug="crm">CRM</GlossaryLink> and
        spreadsheets cannot keep up with the real world.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is not just a technical problem. It is the operational ceiling that stops most small businesses in
        Miami-Dade, Broward, and West Palm Beach from building a reliable <GlossaryLink slug="sales-funnel">sales
        funnel</GlossaryLink>. The cost of inaction is clear: you pay more for every lead, your team spends more
        time on manual fixes, and your growth stalls while the competition, using automated systems, spends the same
        budget to get more <GlossaryLink slug="qualified-lead">qualified leads</GlossaryLink> and fewer wasted
        clicks. You cannot outwork a broken system with more hustle and late nights.</p>
      <p className="text-base text-white shadow-text pt-3">
        With Measured Lead Generation, Geek @ Your Spot installs an advanced scaling system that acts like an
        automated media buyer for your business. It steps up your ad budgets when it detects real wins, not just
        clicks. It pauses or destroys underperforming ads before they waste your money, and it generates and tests
        hundreds of creative variations so you never lose ground to ad fatigue, all without needing a designer for
        every asset. The system connects to your existing stack, cleans up your data, and uses algorithmic
        guardrails so you can scale lead flow, not just spend. This page is for small business owners and marketing
        leads in South Florida who are ready to break through the scaling trap, cut wasted spend, and build a sales
        pipeline that grows without manual chaos.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you have ever watched your cost-per-lead spike the moment you tried to grow your ad budget, you are not
        alone. This is the moment when the limits of manual campaign management show themselves. Ad platforms are
        built for automation, and when a business relies on daily tweaks and manual creative updates, the system
        quickly turns against you. Instead of more leads, you get higher costs and more volatility, with no clear
        path to improvement.</p>
      <p className="text-base text-white shadow-text pt-3">
        The cause is not just rising competition or seasonal swings. It is the lack of automated scaling and
        data-driven controls. When the creative process cannot keep up with ad fatigue, every extra dollar spent
        works less hard than the last. When your CRM and spreadsheets are out of sync with your campaigns, you end
        up spending money on audiences who have already said no, or who need a different message entirely. Without
        automation, you are left trying to plug leaks with manual work that never ends.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot addresses these problems directly with a four-phase approach built for small businesses in
        West Palm Beach, Broward, and Miami-Dade. We align your business goals with measurable outcomes, assess and
        clean your data for real-time use, select automation tools that integrate with your existing systems, and
        launch in a way that protects your budget while validating every change. This is not a generic automation
        pitch. It is a local, hands-on process that lets you scale your ad spend safely, with clear controls and no
        downtime. What is at stake is not just your next campaign, but your ability to build a reliable,
        cost-effective sales pipeline that grows with your business, not against it.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a shorter overview, read <Link id={`use-cases-marketing-measured-lead-generation-lede-blog${idSuffix}`} href="/blog/marketing/ad-spend-optimization/how-south-florida-businesses-can-stop-wasting-ad-spend" className="text-[#C83803] hover:underline">How
        South Florida Businesses Can Stop Wasting Ad Spend</Link> on our blog.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-small-businesses-see-their-lead-costs-spike-when-they-try-to-scale-up" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Small Businesses See Their Lead Costs Spike When They Try to Scale Up
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-small-businesses-see-their-lead-costs-spike-when-they-try-to-scale-up-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Small Businesses See Their Lead Costs Spike When They Try to Scale Up
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
