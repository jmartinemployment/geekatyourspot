import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why do so many South Florida small businesses burn through their ad spend with nothing to show for it, even
        when running focused local campaigns under $500 a month (<a id={`tools-marketing-budget-ad-copy-message-validation-plai-overview-source-plai-io${idSuffix}`} href="https://www.plai.io/features/saas-configurator" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Plai</a>,
        as of Oct 23, 2026)? The answer is simple: without <Link id={`tools-marketing-budget-ad-copy-message-validation-plai-overview-budget-ad-copy-message-validation${idSuffix}`} href="/use-cases/marketing/ad-spend-optimization/ai-budget-ad-copy-message-validation" className="text-[#C83803] hover:underline">Budget
        Ad Copy &amp; Message Validation</Link>, every dollar is exposed to waste from poor audience targeting,
        mismatched messaging, and runaway clicks that platforms are all too happy to take. A single day of <GlossaryLink slug="broad-match">broad-match</GlossaryLink> keyword
        mistakes or serving ads to people outside your service area can wipe out a week’s budget. The platforms’
        built-in tools are complex, and the skills needed to set up tracking, segment audiences, and test messaging
        are beyond what most owners have time to learn or manage.</p>
      <p className="text-base text-white shadow-text pt-3">
        These businesses face a hard limit: they cannot afford a human ad manager, but a do-it-yourself approach
        means constant risk of junk clicks, form drop-offs, and confusing analytics. With a daily ad budget of just
        $10 to $16, there is zero room for error. Even a few bad clicks or an ad shown to the wrong location drains
        money that cannot be recovered. And if you leave campaigns on autopilot, Google and Meta’s systems default
        to serving your ads to the cheapest clicks, not the right ones, often outside your true local market. The
        result is a cycle of low returns, confusion, and frustration. Owners see the spend, but not the sales.</p>
      <p className="text-base text-white shadow-text pt-3">
        A smart, automated approach to Budget Ad Copy &amp; Message Validation changes this. Instead of guessing
        which message will work or losing hours to manual performance checks, small teams can use AI-assisted
        validation to test and refine their <GlossaryLink slug="ad-copy">ad copy</GlossaryLink>, target the right
        local audience, and shift spend instantly based on real-time results. This cuts wasted budget, raises
        response rates, and makes sure every dollar counts, without the overhead of an agency. For small businesses
        in Miami-Dade, Broward, and West Palm Beach, the right validation means more qualified leads, fewer errors,
        and ad dollars that actually drive sales, not just clicks. The risk and guesswork get replaced by clear,
        repeatable results.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is for local business owners and small teams who need every advertising dollar to work harder. If you
        are tired of watching your budget drain away on the wrong clicks, or spending hours in dashboards with
        nothing to show for it, Budget Ad Copy &amp; Message Validation is the shift that puts control, and results,
        back in your hands.</p>
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
