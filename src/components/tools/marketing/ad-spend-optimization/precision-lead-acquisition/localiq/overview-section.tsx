import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why am I spending on ads but still do not know which ones bring in real customers, or if my ad budget is just
        getting burned? The answer is that most small businesses in West Palm Beach, Broward and Miami-Dade face ad
        spend leaks because their reporting is fragmented and their data is scattered. Without clear connections
        between ad clicks and sales, you end up guessing which campaigns work and which are wasting your limited
        budget. This is the problem <Link id={`tools-marketing-precision-lead-acquisition-localiq-overview-precision-lead-acquisition${idSuffix}`} href="/use-cases/marketing/ad-spend-optimization/ai-precision-lead-acquisition" className="text-[#C83803] hover:underline">Ad
        Spend Optimization</Link> is built to solve: it gives you visibility into what actually drives results, lets
        you adjust budgets in real time, and reveals the hidden costs and missed opportunities that manual setups and
        weak data links create.</p>
      <p className="text-base text-white shadow-text pt-3">
        The usual approach leaves you juggling reports from Facebook, Google, and Instagram, with no single spot
        showing which ad or channel turned a click into a sale. If you run ads on different platforms, the numbers
        often do not add up, and you cannot see if a lead came from a paid campaign or just wandered in. Some small
        businesses pay for broad keywords, hoping for results, but end up attracting people who never buy, draining a
        daily budget on empty clicks. Others leave underperforming ads running for months because there is no easy
        way to spot and fix them. The result: limited budgets stretch even thinner, and the true <GlossaryLink slug="cost-per-lead">cost
        per lead</GlossaryLink> can quietly double or triple.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ad Spend Optimization powered by AI fixes these blind spots and wasted spend. It links ad activity directly
        to sales outcomes, so you can see which campaigns earn revenue and which just eat your budget. Instead of
        guessing where to put your next ad dollar, you get live reporting and automated adjustments that shift money
        away from dead-end ads and toward those driving real leads. With the right system, you cut wasted spend,
        lower your average lead cost, and get more sales out of the same budget, all with fewer manual hours and less
        risk of error.</p>
      <p className="text-base text-white shadow-text pt-3">
        This approach is for South Florida small businesses that are tired of spending on ads without proof of
        results. If you want your ad dollars working harder, want fewer mistakes and missed opportunities, and need
        marketing to make sense without a full-time data team, Ad Spend Optimization is your next step. You will see
        exactly where your money goes, what brings in customers, and how to grow on a budget you can control.</p>
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
