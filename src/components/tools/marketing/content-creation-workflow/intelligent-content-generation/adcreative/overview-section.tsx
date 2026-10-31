import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why do small businesses in South Florida see their ad budgets disappear with little to show for it, even
        after careful targeting and daily monitoring? The core problem is simple: when you spend under $500 a month,
        every dollar is exposed to waste from generic <GlossaryLink slug="ad-copy">ad copy</GlossaryLink>, untested
        messages, and platform defaults that treat your business like a rounding error (<a id={`tools-marketing-budget-ad-copy-message-validation-adcreative-overview-source-adcreative-ai${idSuffix}`} href="https://www.adcreative.ai/use-case/e-commerce" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">AdCreative</a>,
        as of Oct 23, 2026). <Link id={`tools-marketing-budget-ad-copy-message-validation-adcreative-overview-budget-ad-copy-message-validation${idSuffix}`} href="/use-cases/marketing/content-creation-workflow/ai-seo-content-generator" className="text-[#C83803] hover:underline">Intelligent Content Generation</Link> fixes this by making sure every line and image you pay to show is
        built to convert, not just fill space. With the right approach, you keep your spend tight, cut junk clicks,
        and see more qualified leads for the same money.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most small business owners in Miami-Dade, Broward and West Palm Beach have faced this: you try running local
        ads, but your <GlossaryLink slug="daily-budget">daily budget</GlossaryLink> of $10 to $16 gets chewed up by <GlossaryLink slug="broad-match">broad-match</GlossaryLink> clicks,
        accidental taps from outside your service area, or cheap <GlossaryLink slug="impressions">impressions</GlossaryLink> that
        never turn into sales. You cannot afford an agency, those fees alone would wipe out your budget. So you
        either go it alone, spending hours writing ad copy and picking images, or you trust the platforms’ automated
        tools, which quietly spend your money on the lowest-value traffic and default creative.</p>
      <p className="text-base text-white shadow-text pt-3">
        The cost is real: one unoptimized day can blow a week’s budget on junk traffic, and every friction point,
        like slow responses or clunky forms, kills leads before they get to you. Worse, most DIY ad tools give you
        no way to know if your copy is working or if your message matches what actually sells. The result is wasted
        spend, high frustration, and no clear way to fix it without spending even more on outside help.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget Ad Copy &amp; Message Validation is for small businesses who want every ad dollar to count. It
        replaces guesswork with data-backed copy, proven frameworks, and fast validation, so you stop the
        micro-budget cash burn and start seeing leads and sales that actually move your business. If you are tired
        of watching your budget vanish on ads that go nowhere, this is how you take control without adding agency
        fees or full-time hires.</p>
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
