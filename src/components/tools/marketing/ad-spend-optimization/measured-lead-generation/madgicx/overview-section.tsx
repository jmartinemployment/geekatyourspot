import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        What happens when your <GlossaryLink slug="cost-per-lead">cost per lead</GlossaryLink> suddenly spikes just
        as you try to scale up, and your team cannot keep up with the content needed to sustain performance? For
        small businesses in Miami-Dade, Broward and West Palm Beach spending $500 to $1,500 a month, this is the
        wall you hit: the ad platforms’ algorithms stop working in your favor, and your cost to acquire each new
        lead jumps, sometimes overnight. This problem is not just about wasted dollars. It is about losing control
        of your monthly sales pipeline, missing targets, and watching your margins shrink as ad spend rises. <Link id={`tools-marketing-measured-lead-generation-madgicx-overview-measured-lead-generation${idSuffix}`} href="/use-cases/marketing/ad-spend-optimization/ai-measured-lead-generation" className="text-[#C83803] hover:underline">Measured
        Lead Generation</Link> exists to fix this exact pain: it applies automation and <GlossaryLink slug="predictive-analytics">predictive
        analytics</GlossaryLink> to stabilize your cost per lead and break the cycle of manual creative burnout, so
        you can scale with confidence and know what you will spend to get the next sale.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core challenge is not a lack of effort or intent; it is the real-world limits of manual management. When
        you try to drive more leads by raising your ad budget, algorithms that once helped now work against you,
        pushing your cost per lead far higher than you planned. At the same time, your team cannot keep up with the
        platform’s demand for new images, copy and layouts. Campaigns stall, <GlossaryLink slug="ad-fatigue">ad
        fatigue</GlossaryLink> sets in, and you waste money showing the wrong message to the wrong person. If your
        customer data sits in spreadsheets or locked <GlossaryLink slug="crm">CRMs</GlossaryLink>, you are also
        paying to show introductory ads to past buyers or cold leads who have already said no. Each of these
        mistakes is expensive, and none can be fixed with more hustle.</p>
      <p className="text-base text-white shadow-text pt-3">
        Measured Lead Generation solves this by automating your audience targeting, creative rotation and budget
        allocation using AI-driven systems that work 24/7. This means you stop burning cash on duplicate or
        overlapping audiences, instantly pause spend on unprofitable demographics, and always have fresh creative in
        the pipeline. The result: predictable lead flow, stable costs, and a sales pipeline you can actually
        forecast. You do not need to hire a data scientist or learn to write your own scripts. The system plugs into
        your existing tools and handles the complexity for you, so you get the results you want without adding
        headcount or risk.</p>
      <p className="text-base text-white shadow-text pt-3">
        This approach is built for South Florida small businesses ready to move past the limits of manual ad
        management and build a scalable, measurable <GlossaryLink slug="lead-generation">lead generation</GlossaryLink> engine.
        If you are spending between $500 and $1,500 per month and want to stop the cycle of unpredictable costs and
        creative burnout, Measured Lead Generation puts you back in control. You get time back, spend less per lead,
        and grow your pipeline with confidence that your results will match your investment.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
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
              <h2 id="overview-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
