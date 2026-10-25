import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why does your <GlossaryLink slug="cost-per-lead">cost-per-lead</GlossaryLink> keep surging every time you
        try to grow your monthly pipeline, and why does your team hit a wall with content creation just when you
        need more leads? The answer is that small businesses in West Palm Beach, Broward and Miami-Dade counties
        face an operational ceiling. When you push your ad budget above $500 a month and try to scale, ad platform
        algorithms break down, sending your cost-per-lead through the roof. At the same time, the demand for fresh
        creative outpaces what your team can deliver, so performance tanks. <Link id={`tools-marketing-measured-lead-generation-wrench-overview-measured-lead-generation${idSuffix}`} href="/use-cases/marketing/ad-spend-optimization/ai-measured-lead-generation" className="text-[#C83803] hover:underline">Measured
        Lead Generation</Link> fixes both problems by automating the analysis, segmentation and creative cycles that
        manual workflows cannot keep up with.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most local businesses at this spend level are not just chasing basic visibility anymore. They need a stable,
        predictable stream of <GlossaryLink slug="qualified-lead">qualified leads</GlossaryLink> every month. But
        manual processes fail in two ways: first, by letting ad costs spiral out of control when you try to grow,
        and second, by creating a bottleneck where your team cannot produce enough new ads, images or copy
        variations to stop <GlossaryLink slug="ad-fatigue">ad fatigue</GlossaryLink>. Even worse, data is often
        scattered across spreadsheets or locked in outdated <GlossaryLink slug="crm">CRM</GlossaryLink> systems, so
        you waste budget showing ads to cold prospects or people who already bought from you.</p>
      <p className="text-base text-white shadow-text pt-3">
        Measured Lead Generation brings discipline and automation to the chaos. It monitors your spend, refreshes
        creative dynamically, and cleans up your contact data so you only pay to reach high-potential leads. This
        means lower cost-per-lead, less wasted budget, and a campaign that adjusts in real time, not after the fact.
        You stop guessing and start acting on what actually works, so your sales pipeline grows without the usual
        pain.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you run a small business anywhere in South Florida and you are tired of manual marketing, unpredictable
        ad costs and slow growth, this approach is built for you. Measured Lead Generation gives you what the big
        firms have: control, speed, and real results from your ad spend.</p>
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
