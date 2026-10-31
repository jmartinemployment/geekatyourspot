import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why do so many Miami small businesses see their ad budgets disappear without results, even when they try to
        keep costs tight? The answer is structural: when you run paid ads on less than $500 a month, every mistake
        drains your account (<a id={`blog-marketing-budget-ad-copy-message-validation-lede-source-localiq-com${idSuffix}`} href="https://localiq.com/blog/local-ppc/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">LocaliQ</a>,
        as of Oct 23, 2026). <Link id={`blog-marketing-budget-ad-copy-message-validation-lede-budget-ad-copy-message-validation${idSuffix}`} href="/use-cases/marketing/ad-spend-optimization/ai-precision-lead-acquisition" className="text-[#C83803] hover:underline">Precision Lead Acquisition</Link> matters because, at this level, your <GlossaryLink slug="daily-budget">daily
        budget</GlossaryLink> can be wiped out by just a handful of bad clicks, off-target <GlossaryLink slug="impressions">impressions</GlossaryLink>,
        or untested messages that never had a chance to convert.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most local advertisers in Miami-Dade, Broward, and West Palm Beach face the same three problems. First, you
        cannot afford a human ad manager or agency, since any retainer would eat up your entire spend. Second, ad
        platforms like Google and Meta will default to broad placements and generic search terms unless you actively
        control them, which means junk traffic eats your money before a real customer ever sees your offer. Third,
        if your <GlossaryLink slug="ad-copy">ad copy</GlossaryLink> is not tested and proven, you end up guessing
        which messages work, so you pay to run weak ads live, rather than filtering them out beforehand.</p>
      <p className="text-base text-white shadow-text pt-3">
        The cost of inaction is clear: a single day of the wrong clicks or impressions can blow your week’s budget,
        with nothing to show for it. Manual micromanagement is not practical at a micro-budget, and letting the
        platforms run on autopilot only guarantees that your limited budget goes to the lowest-value clicks. The
        real risk is not overspending, but spending every dollar on the wrong audience, wrong message, or wrong
        geography, no matter how careful you are with your total limits.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is why Budget Ad Copy &amp; Message Validation must do three things for Miami small businesses. It must
        align directly with your business goals, so you measure what matters, leads, calls, or booked appointments,
        not just clicks. It must screen your copy and creative before launch, using data-driven testing and instant
        scoring to avoid wasting budget on unproven ideas. And it must automate most of the heavy lifting: shifting
        budget, pausing underperformers, and matching your ads to the right local audience without you managing it
        all by hand. For small businesses in South Florida, the only way to stop the cash burn is to validate
        messages before they cost you, and to let AI handle the real-time tuning that no human can keep up with at
        this scale.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you are a small business owner in Miami-Dade, Broward, or Palm Beach, and you need every ad dollar to
        work harder, this approach gives you control and results where old methods fail. You end up with fewer
        wasted clicks, tighter targeting, and a budget that works for you, not for the ad platforms.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-keep-micro-ad-budgets-from-vanishing-overnight" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Keep Micro Ad Budgets from Vanishing Overnight
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
              <h2 id="how-to-keep-micro-ad-budgets-from-vanishing-overnight-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Keep Micro Ad Budgets from Vanishing Overnight
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
