import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why am I spending thousands on Google and Meta ads but still have no idea which campaigns are worth it, or if
        I&rsquo;m just burning money? Many South Florida small-business owners face this exact problem. Manual reviews
        are slow, reports are scattered, and there&rsquo;s no clear process to catch wasted spend. The result is hours
        lost to guesswork and budgets drained by underperforming ads, while the best opportunities pass by unnoticed.
        Most owners react only when results nosedive, by then, the damage is done.</p>
      <p className="text-base text-white shadow-text pt-3">
        <Link id={`tools-marketing-precision-lead-acquisition-wask-overview-precision-lead-acquisition${idSuffix}`} href="/use-cases/marketing/ad-spend-optimization/ai-precision-lead-acquisition" className="text-[#C83803] hover:underline">Ad
        Spend Optimization</Link> fixes that. With the right AI-assisted system, you get real-time visibility across
        Google and Meta, see exactly where each dollar goes, and spot wasted spend before it grows. Automatic rules flag
        weak ads and shift budget to what works, without waiting for a monthly report. Instead of chasing numbers, your
        team focuses on strategy, while day-to-day adjustments happen on their own. This is not a generic dashboard or
        another agency fee; it is a structured, owner-facing process that turns raw data into clear actions, so you
        always know which ads drive sales and which need to go.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in Miami-Dade, Broward, and Palm Beach, the stakes are real. Every wasted dollar cuts into
        your margin. Every delay in spotting a failing campaign means more budget lost. Fragmented reporting and
        scattered logins make it worse, if your sales and ad data do not connect, you are flying blind. <GlossaryLink slug="predictive-analytics">Predictive
        analytics</GlossaryLink> and automated rules replace hunches with evidence-backed decisions, so you move first,
        not last.</p>
      <p className="text-base text-white shadow-text pt-3">
        This page is for South Florida small businesses ready to stop guessing and start controlling their ad budgets.
        You get a clear, practical path to Ad Spend Optimization, tools, workflows, and expert support that fit your team
        and your numbers. The outcome is simple: less waste, more sales, and the confidence that your advertising dollars
        are working as hard as you do.</p>
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
