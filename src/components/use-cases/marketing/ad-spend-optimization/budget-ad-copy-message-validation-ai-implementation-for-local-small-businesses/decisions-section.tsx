import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DecisionsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The decisions you make before your first ad launches, targeting, message validation, copy approval, and
        budget controls, lock in the results you get for the entire campaign. Once you set these foundations,
        changing direction midstream costs you both money and learning time, and most small teams never catch up.
        This is why Geek @ Your Spot’s approach insists on getting these choices right at the start, not as a patch
        after budget is already leaking.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first non-negotiable decision is location targeting. For a Miami-Dade, Broward, or Palm Beach business,
        the temptation is to cast a wide net and hope for more leads. In practice, each extra ZIP code or county you
        open up creates budget bleed: platforms will spend your limited daily cap in the cheapest places, not where
        your buyers are. Google Performance Max addresses this head-on by locking delivery to only the high-intent
        radius you serve, ensuring not a dollar goes to out-of-market clicks. Once those boundaries are set, pulling
        them in later means you’ve already spent on the wrong audience and have no learning data for your real
        prospects.</p>
      <p className="text-base text-white shadow-text pt-3">
        Message validation comes next. Here, most small teams guess which headline or offer will convert, then test
        it live, paying the platform to learn what works. Anyword flips this: it scores ad copy variants before
        spend even starts, using predictive AI to filter out weak messages. Once you run a headline that flops,
        audience fatigue sets in and future tests are tainted by past exposure. You get one clean shot at a first
        impression with your local market, so pre-launch validation is not optional if you want to avoid burning
        your micro-budget on copy that people scroll past.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget structure is another point of no return. If you split your $500 monthly cap across every channel and
        campaign equally, you guarantee that some of that spend will go to underperformers (<a id={`use-cases-marketing-budget-ad-copy-message-validation-decisions-source-localiq-com${idSuffix}`} href="https://localiq.com/blog/local-ppc/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">LocaliQ</a>,
        as of Oct 23, 2026). LocaliQ solves this with automated optimization, constantly shifting your spend toward
        the highest-performing channels and message-audience pairs. But for this to work, you must allow the system
        to reallocate in real time; if you fix your budgets at the start, you lock in waste and miss out on the
        compounding effect of data-driven learning. Manual overrides and daily tweaks only reset the learning
        algorithms, slowing down your results and raising costs.</p>
      <p className="text-base text-white shadow-text pt-3">
        Copy approval and brand guardrails are another early decision that can’t be walked back. AdCreative ensures
        your ads always match your brand’s fonts, colors, and tone, but these must be set before you generate your
        first round of creative. Once an ad goes live with mismatched branding or unclear <GlossaryLink slug="call-to-action">calls
        to action</GlossaryLink>, you cannot erase those impressions from your audience’s memory. High-performing
        small teams document their brand assets and approve them up front, letting the AI generate variations that
        stay on-message every time. Retroactive fixes only add confusion and inconsistency.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams managing multiple campaigns or locations, dashboard structure is the final fork in the road.
        Adzooma lets you unify every account, Google, Meta, Microsoft, on a single screen, tracking spend and
        performance in real time. If you launch with disconnected dashboards and scattered reporting, you lose the
        ability to spot leaks, shift budgets, or pause underperforming assets before they drain your cap. This is
        not something you can fix by exporting spreadsheets later; the structure of your management environment
        decides whether your oversight is proactive or reactive.</p>
      <p className="text-base text-white shadow-text pt-3">
        A small business that tries to “just get started” and clean up these basics later will find itself stuck in
        a cycle of wasted spend, unclear results, and campaign resets that never recover the lost ground. Plai’s
        platform solves this by automating conversion pixel setup, narrowing targeting, and translating results into
        plain dashboards, if and only if these are set up before the first dollar is spent. Once a campaign launches
        without these controls, the learning data is polluted and the wasted budget is unrecoverable. For this
        reason, Geek @ Your Spot’s methodology insists on a hard pre-launch review: every foundational choice is
        made deliberately, with the right tools in place, so the automation you build does its job from day one.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-early-decisions-that-lock-in-your-campaigns-fate" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Early Decisions That Lock In Your Campaign’s Fate
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-early-decisions-that-lock-in-your-campaigns-fate-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Early Decisions That Lock In Your Campaign’s Fate
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
