import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why am I paying for ads without knowing which ones actually bring in customers, or if I&rsquo;m just wasting
        money? Most small businesses in South Florida face this every month. Platform dashboards like Google and Meta
        split credit, double-count sales, and show numbers that never match your real bank deposits. <Link id={`tools-marketing-precision-lead-acquisition-triplewhale-overview-precision-lead-acquisition${idSuffix}`} href="/use-cases/marketing/ad-spend-optimization/ai-precision-lead-acquisition" className="text-[#C83803] hover:underline">Ad
        Spend Optimization</Link> should tell you exactly which ads drive sales, so you stop guessing and start investing
        with confidence. Instead, unclear tracking and conflicting reports push you to keep spending on campaigns that
        look good on paper but do nothing for your bottom line.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real cost is more than a few wasted clicks. When you rely on fragmented reporting, you make budget decisions
        blind: you might double down on an ad that is only winning in one dashboard, or keep running tired creative
        because you can&rsquo;t see which one truly converts. That means dollars tied up in underperforming campaigns,
        missed chances to scale winners, and no way to prove what&rsquo;s working to your team or accountant. For a small
        business, those missed signals add up to lost sales, lost time, and a marketing budget that works half as hard
        as it should.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ad Spend Optimization with the right tools gives you one clean, trusted number for each campaign, deduplicated,
        mapped to actual revenue, and updated in near real-time. That means you can shift budget faster, cut off losing
        ads before they drag you down, and spot the creative that brings in actual paying customers. You stop paying for
        impressions and clicks that never turn into sales and start growing your business on data you can trust. The
        difference is clarity at every step, so your marketing dollars work as hard as you do.</p>
      <p className="text-base text-white shadow-text pt-3">
        This page is for small businesses in Miami-Dade, Broward and Palm Beach counties who are done wasting money on
        ads that do not deliver. You get a plain-English explanation of how Ad Spend Optimization works, and how
        <GlossaryLink slug="predictive-analytics"> predictive analytics</GlossaryLink>, unified dashboards, and real
        financial tracking can put you in control, not your ad platforms. If you are tired of guessing and ready for
        proof, you are in the right place.</p>
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
