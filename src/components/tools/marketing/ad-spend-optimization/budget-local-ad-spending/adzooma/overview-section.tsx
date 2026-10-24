import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why do small businesses in Miami-Dade, Broward, and West Palm Beach keep losing precious ad dollars, despite
        careful planning and tight controls on spend? The answer is simple: the current way of managing and
        validating budget ad copy and messages is built for bigger teams and bigger budgets. Small teams run into
        dashboard fatigue, miss key updates, and let platforms like Meta or Google quietly drain their micro-budgets
        on low-quality clicks, out-of-area <GlossaryLink slug="impressions">impressions</GlossaryLink>, or outdated
        copy. When you only have $10 to $16 a day to work with, one mistake can wipe out a week’s worth of spend.</p>
      <p className="text-base text-white shadow-text pt-3">
        The cost of this broken process is real. Manual checks across different ad platforms mean hours lost to
        repetitive, error-prone work. With no room for error, a single day with the wrong match type or a missed
        campaign setting can mean your entire budget goes to junk traffic. Small companies cannot afford a human ad
        manager, and agency fees quickly outpace the ad spend itself. Even worse, running ads on autopilot lets the
        platforms default to settings that favor their own revenue, not yours, serving your ads to broad, low-intent
        audiences and draining your cash before you see any real leads.</p>
      <p className="text-base text-white shadow-text pt-3">
        The frustration builds fast: scattered logins, missed alerts, and the constant risk of a campaign running
        wild overnight. If you are a small business in South Florida, you know it takes only one day of missed
        oversight to lose most of your month’s micro-budget. And with no dedicated sales staff, hot leads drop off
        when they hit a clunky web form or wait hours for a callback. Manual <Link id={`tools-marketing-budget-ad-copy-message-validation-adzooma-overview-budget-ad-copy-message-validation${idSuffix}`} href="/use-cases/marketing/ad-spend-optimization/ai-budget-ad-copy-message-validation" className="text-[#C83803] hover:underline">budget
        ad copy and message validation</Link> simply cannot keep up with the pace and complexity of today’s ad
        platforms.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is where an AI-assisted approach changes the game. Intelligent validation and optimization tools can
        scan every ad variation in real time, flag errors, and recommend fixes before you lose money. For small
        businesses in Miami-Dade, Broward, and West Palm Beach, this means tighter control, fewer wasted hours, and
        ad dollars that finally deliver. Budget Ad Copy &amp; Message Validation, done right, is your guardrail
        against cash burn, and your best chance at turning micro-budgets into steady growth.</p>
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
