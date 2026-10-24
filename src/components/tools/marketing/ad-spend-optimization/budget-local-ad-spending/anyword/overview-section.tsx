import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        How much budget do you lose testing <GlossaryLink slug="ad-copy">ad copy</GlossaryLink> that never converts,
        even before you know if your message will work? For a small business in South Florida, every dollar counts.
        When you spend under $500 a month on ads, you cannot afford to guess (<a id={`tools-marketing-budget-ad-copy-message-validation-anyword-overview-source-anyword-com${idSuffix}`} href="https://www.anyword.com/blog/email-a-b-testing-a-practical-guide-for-marketing-teams" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Anyword</a>,
        as of Oct 19, 2026). Most teams run ad copy live with no real validation, hoping the message will stick. The
        result is wasted spend on clicks from the wrong audience, or no clicks at all, while your competitors pull
        ahead.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is the hard truth of <Link id={`tools-marketing-budget-ad-copy-message-validation-anyword-overview-budget-ad-copy-message-validation${idSuffix}`} href="/use-cases/marketing/ad-spend-optimization/ai-budget-ad-copy-message-validation" className="text-[#C83803] hover:underline">Budget
        Ad Copy &amp; Message Validation</Link> for local businesses in Miami-Dade, Broward, and West Palm Beach.
        You are forced to pick between writing your own best-guess copy (with no time to test) or leaving it to ad
        platform algorithms that burn through your <GlossaryLink slug="daily-budget">daily budget</GlossaryLink> in
        hours. One bad headline or generic message can wipe out a week’s advertising in a single day, especially
        when every <GlossaryLink slug="impressions">impression</GlossaryLink> or click comes at a real cost. Without
        validation, you are paying to find out what does not work.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual <GlossaryLink slug="a-b-testing">A/B testing</GlossaryLink> is out of reach for most small teams. The
        cost of a human ad manager or agency is higher than your whole ad budget. Even worse, running unproven ads
        live exposes you to platform defaults that drain your spend on accidental clicks and users outside your
        service area. If your copy is not tuned for your real local audience, you end up paying for junk traffic.
        And with no dedicated staff to follow up, hot leads vanish before you respond.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget Ad Copy &amp; Message Validation changes this equation. With the right AI-assisted approach, you can
        predict how well your messaging will perform before you spend a dollar, filter out weak copy, and tailor
        every headline or description to the way your audience actually speaks. That means less wasted spend, fewer
        dead clicks, and a real shot at making your budget work as hard as you do. For small businesses in South
        Florida, this is the only way to compete when the margin for error is zero.</p>
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
