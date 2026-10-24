import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        How much money do small businesses in Miami-Dade, Broward and West Palm Beach lose each month trying to
        manage their own ad copy and message validation on a budget under $500? The answer is: most of it, and fast.
        Manual trial-and-error eats through $10 to $16 a day before you can spot what works (<a id={`tools-marketing-budget-ad-copy-message-validation-google-performance-max-overview-source-business-google-com${idSuffix}`} href="https://business.google.com/aunz/think/ai-excellence/remaster-retail-strategy-ai/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Google</a>,
        as of Oct 24, 2026). A single <GlossaryLink slug="broad-match">broad-match</GlossaryLink> search or an ad
        shown outside your service area can wipe out a week’s budget on clicks that never become sales. The risk is
        real: one slip and your spend is gone, with nothing to show for it.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business owner, this is not just a line item. It is hours of late-night dashboard tweaks,
        chasing platforms that seem to work against you. You want every dollar to count, but you cannot afford a
        professional ad manager or agency, the retainer costs more than your total monthly spend. Platforms like
        Google and Meta default to wide targeting and generic keywords, draining your cash on junk clicks or showing
        your ads to people far outside your local area. When you finally get a good lead, it drops off because there
        is no team on hand to reply instantly or sort the serious buyers from the browsers.</p>
      <p className="text-base text-white shadow-text pt-3">
        <Link id={`tools-marketing-budget-ad-copy-message-validation-google-performance-max-overview-budget-ad-copy-message-validation${idSuffix}`} href="/use-cases/marketing/ad-spend-optimization/ai-budget-ad-copy-message-validation" className="text-[#C83803] hover:underline">Budget
        Ad Copy &amp; Message Validation</Link> with the right AI-supported workflow changes the equation. Instead
        of burning through budget by guessing which message will land, you get systematic, real-time testing of
        headlines, descriptions and <GlossaryLink slug="call-to-action">calls to action</GlossaryLink>. The system
        automatically narrows your audience to high-intent local buyers, pauses losing ads before they drain your
        spend, and adapts your message as soon as <GlossaryLink slug="ad-fatigue">ad fatigue</GlossaryLink> sets in.
        You stop paying for clicks that go nowhere. You see which creative actually works, and you act before the
        money is gone.</p>
      <p className="text-base text-white shadow-text pt-3">
        This approach is built for the reality of South Florida small businesses running on micro-budgets. If you
        are tired of losing control to the platforms, tired of wasting time on endless manual tweaks, and ready to
        see your ad dollars bring in real customers instead of dashboard noise, this is the step-change you have
        been looking for. Geek @ Your Spot brings a four-phase plan, define clear goals, assess your data, pick
        tools that fit your business, and build an implementation you can trust. No big agency fees, no guesswork,
        and no more runaway spend.</p>
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
