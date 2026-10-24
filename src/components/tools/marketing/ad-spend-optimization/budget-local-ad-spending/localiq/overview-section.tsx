import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why does running local ads on a budget so often burn through cash with little to show for it, especially
        when you’re spending under $500 a month (<a id={`tools-marketing-budget-ad-copy-message-validation-localiq-overview-source-localiq-com${idSuffix}`} href="https://localiq.com/blog/local-ppc/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">LocaliQ</a>,
        as of Oct 23, 2026)? For small businesses in West Palm Beach, Broward, and Miami-Dade counties, micro-scale
        ad campaigns are almost impossible to manage manually. The daily spend is tight, $10 to $16 a day, yet a
        single mistake can blow your whole week’s budget. Agency fees are out of reach, so you’re left to handle
        everything yourself. Without the right tools, you cannot track which clicks turn into real leads, or stop
        your ads from showing to the wrong people at the wrong time. The result: most of your ad spend is drained by
        junk traffic, accidental clicks, or low-intent browsers who will never become customers. Meanwhile,
        platforms like Meta and Google thrive on serving your ads to the cheapest clicks, not the best ones, unless
        you intervene.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is where <Link id={`tools-marketing-budget-ad-copy-message-validation-localiq-overview-budget-ad-copy-message-validation${idSuffix}`} href="/use-cases/marketing/ad-spend-optimization/ai-budget-ad-copy-message-validation" className="text-[#C83803] hover:underline">Budget
        Ad Copy &amp; Message Validation</Link> changes the game. Instead of guessing which copy, keywords, or
        geotargets work, this approach uses AI-driven validation to test every element, headlines, keywords, images,
        and offers, before you waste money on underperforming ads. It automatically optimizes your campaigns in real
        time, shifting your limited dollars to the messages and audiences that actually convert. That means your
        $500 monthly budget works harder, with less risk of blowing it on mistakes you cannot afford (<a id={`tools-marketing-budget-ad-copy-message-validation-localiq-overview-source-localiq-com-2${idSuffix}`} href="https://localiq.com/blog/local-ppc/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">LocaliQ</a>,
        as of Oct 23, 2026). No more watching your ad dollars disappear on <GlossaryLink slug="broad-match">broad-match</GlossaryLink> clicks
        or traffic from outside your service area. Every campaign adapts fast, so you only pay for the leads that
        matter.</p>
      <p className="text-base text-white shadow-text pt-3">
        What’s at stake is simple: every wasted dollar is a missed opportunity in a market where small businesses
        cannot afford to play catch-up. If you’re trying to grow in South Florida but keep hitting the wall of high
        lead costs, Budget Ad Copy &amp; Message Validation gives you a way to compete with bigger players without
        hiring an agency or adding headcount. You get better control, fewer errors, and more qualified leads,
        without the usual trial-and-error that drains micro-budgets dry.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is for owners and teams running local ads on a shoestring who need to make every click count. Geek @
        Your Spot brings a framework built for small business realities: clear steps, seamless integration with the
        tools you already use, and results you can track in dollars and leads. You keep your marketing consistent,
        avoid the cash-burn trap, and finally start seeing real sales from your local ad spend.</p>
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
