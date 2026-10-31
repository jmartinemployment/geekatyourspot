import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why am I paying for ads but still have no idea which ones are bringing in customers, or whether my budget is
        just getting wasted? This is the core frustration behind ad spend optimization for small businesses in South
        Florida. The truth is, most ad accounts bleed money every month because the reporting is fragmented,
        performance is unclear, and the link between each ad dollar and an actual sale is broken. The result: you keep
        spending, but you never know which campaigns are working or why.</p>
      <p className="text-base text-white shadow-text pt-3">
        Here&rsquo;s what is at stake. When you cannot see which ads are driving sales and which are just burning
        budget, you make decisions in the dark. Budgets get stuck on underperforming ads, while the few campaigns that
        actually deliver customers are left underfunded. Over time, this compounds, every week you miss a chance to
        reallocate spend is another week your competitors get ahead. Small businesses in West Palm Beach, Broward, and
        Miami-Dade face this problem head-on: too many platforms, not enough clarity, and no clear workflow to fix
        it.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ad Spend Optimization solves this at the root. First, it surfaces where your ad dollars are going, and which of
        those dollars are bringing real leads or sales. Second, it puts automated rules in place, so wasted spend gets
        cut quickly and funds are redirected to ads that prove their worth. Third, it connects your ad data with actual
        business outcomes, not just clicks or <GlossaryLink slug="impressions">impressions</GlossaryLink>, so you know
        every month what worked and what did not. For a small business, this is not a nice-to-have, it is the
        difference between growing on purpose and just hoping for the best.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you manage your own ads or run a small team in South Florida, you are probably tired of dashboard fatigue,
        manual reporting, and the constant question: are we spending in the right place? This page lays out exactly
        what goes wrong, what it costs, and how a focused, step-by-step optimization process puts you back in control.
        You will see what needs to change, how to get there, and how to stop guessing where your ad budget is going.
        For owners who want clarity, control, and real results, this is how you finally get it.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a shorter overview, read <Link id={`use-cases-marketing-precision-lead-acquisition-lede-blog${idSuffix}`} href="/blog/marketing/ad-spend-optimization/how-local-miami-small-businesses-can-stop-wasting-ad-budget-and-start-seeing-real-returns" className="text-[#C83803] hover:underline">How
        Local Miami Small Businesses Can Stop Wasting Ad Budget and Start Seeing Real Returns</Link> on our blog.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-small-businesses-lose-track-of-ad-spend-and-what-to-do-instead" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Small Businesses Lose Track of Ad Spend and What to Do Instead
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
              <h2 id="why-small-businesses-lose-track-of-ad-spend-and-what-to-do-instead-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Small Businesses Lose Track of Ad Spend and What to Do Instead
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
