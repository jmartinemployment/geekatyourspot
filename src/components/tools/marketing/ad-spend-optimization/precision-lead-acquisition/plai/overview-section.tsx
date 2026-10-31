import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why am I paying for ads without knowing which ones are actually bringing in customers, or if I am just wasting
        money? Most small businesses in Miami-Dade, Broward and Palm Beach counties struggle with <Link id={`tools-marketing-precision-lead-acquisition-plai-overview-precision-lead-acquisition${idSuffix}`} href="/use-cases/marketing/ad-spend-optimization/ai-precision-lead-acquisition" className="text-[#C83803] hover:underline">ad
        spend optimization</Link> for one reason: they cannot see clearly what is working, why a campaign is
        underperforming, or how to shift budget fast enough to make a difference. Manual reporting across platforms like
        Facebook, Google and TikTok takes hours each week, and even then, the data rarely lines up with real sales. That
        lack of visibility means you are making decisions in the dark, guessing which ad or channel to back, instead of
        moving dollars to what actually drives results.</p>
      <p className="text-base text-white shadow-text pt-3">
        The problem gets worse the more platforms you run. Each one shows different numbers, uses different targeting
        rules, and splits your budget in ways that make it almost impossible to compare performance side by side. If you
        do not have the analytical skills to set up complex tracking or the time to build optimized rules for every
        campaign, you end up spreading your spend thin and missing real opportunities. The result: budgets locked into
        underperforming ads, delayed adjustments, and an endless cycle of second-guessing whether your marketing is
        paying off.</p>
      <p className="text-base text-white shadow-text pt-3">
        An AI-assisted approach to ad spend optimization changes this. With the right system, you get a single dashboard
        that pulls in live data across your channels, applies <GlossaryLink slug="predictive-analytics">predictive
        analytics</GlossaryLink>, and reallocates budget to the best-performing campaigns automatically. This cuts wasted
        spend, saves hours of manual work, and gives you real visibility into what brings in customers. For South Florida
        small businesses, it means you do not need to be a data scientist or hire extra staff just to keep your marketing
        under control. Instead, you make faster, clearer decisions that drive more sales for every dollar spent.</p>
      <p className="text-base text-white shadow-text pt-3">
        This page is for small teams in Miami-Dade, Broward and Palm Beach who are tired of guessing and want a concrete
        way to take control of their ad budgets. You get a breakdown of how automated ad spend optimization works, what
        predictive analytics can actually do for your campaigns, and how to connect ad data to real business results, so
        you can stop wasting money and start seeing what works.</p>
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
