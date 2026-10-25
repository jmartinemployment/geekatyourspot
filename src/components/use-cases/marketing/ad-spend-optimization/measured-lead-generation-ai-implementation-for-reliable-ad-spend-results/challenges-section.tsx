import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Measured lead generation at a small scale runs into hard limits the moment you try to grow past basic local
        ads. The process breaks down for one reason: the manual work that holds together a $500-a-month campaign
        cannot keep pace as you try to scale to $1,500 or more. This is not about poor effort or lack of hustle,
        it&apos;s about complexity and delay that the human eye cannot track once the volume of decisions, assets,
        and data points multiplies.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first breakdown is in budget control. Manually setting daily ad spends on Meta and Google makes sense
        when you have only a handful of campaigns and a low, fixed spend. But as soon as local search volume spikes,
        or a competitor increases their spend, your fixed settings mean you either miss out on opportunity or burn
        through your budget with no way to shift funds to what is working. <Link id={`use-cases-marketing-measured-lead-generation-challenges-performance-max${idSuffix}`} href="/tools/marketing/ad-spend-optimization/budget-local-ad-spending/google-performance-max" className="text-[#C83803] hover:underline">Performance
        Max</Link> solves this by shifting micro-budgets between search feeds, maps, and social networks based on
        live conversion signals, removing the guesswork and delay of manual adjustments.</p>
      <p className="text-base text-white shadow-text pt-3">
        Audience targeting also falls apart. When you try to expand your reach, it&apos;s easy to accidentally show
        ads to people outside your real service area or to audiences who are not likely to buy. The system needs to
        narrow ad delivery to high-intent zip codes within a precise radius, not just a broad city or county.
        Performance Max handles this, where manual targeting too often leads to wasted spend.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative fatigue is next. Running the same ad text or imagery for months leads to your local audience tuning
        you out. Yet most teams cannot produce new variations fast enough, so old creative stays live long past its
        shelf life. Performance Max leverages asset mix-and-match to keep the content fresh and relevant. <Link id={`use-cases-marketing-measured-lead-generation-challenges-marpipe${idSuffix}`} href="/tools/marketing/ad-spend-optimization/measured-lead-generation/marpipe" className="text-[#C83803] hover:underline">Marpipe</Link> takes
        this even further by automatically generating hundreds of ad variations from a few uploaded assets, making
        it possible to find what resonates without endless design work.</p>
      <p className="text-base text-white shadow-text pt-3">
        The problem compounds with manual bidding. Updating micro-bids by hand not only eats up hours but also
        resets the platform algorithms, which can stop your ads from showing at all. Business sidesteps this by
        using historical auction-time <GlossaryLink slug="machine-learning">machine learning</GlossaryLink>, keeping
        your visibility high at the lowest possible <GlossaryLink slug="cost-per-click">cost-per-click</GlossaryLink>.
        For the small business owner, this means staying in the game against larger competitors who can afford to
        let the algorithm run on bigger data sets.</p>
      <p className="text-base text-white shadow-text pt-3">
        Neglect is another silent killer. When no one is monitoring the dashboard over the weekend, low-performing
        ad variations keep running, draining budget and hurting your results. Performance Max responds by pausing
        failing <GlossaryLink slug="ad-placement">placements</GlossaryLink> instantly, without a human needing to
        check in every day. <Link id={`use-cases-marketing-measured-lead-generation-challenges-optmyzr${idSuffix}`} href="/tools/marketing/ad-spend-optimization/measured-lead-generation/optmyzr" className="text-[#C83803] hover:underline">Optmyzr</Link> brings
        a similar safety net to Google and Microsoft ads, using <GlossaryLink slug="automation-scripts">automated
        scripts</GlossaryLink> to pause keywords that cross your <GlossaryLink slug="cost-per-acquisition">cost-per-acquisition</GlossaryLink> limits,
        so a bad run cannot spiral into a budget crisis.</p>
      <p className="text-base text-white shadow-text pt-3">
        Then there is the data wall. Customer lists are often stuck in outdated CRMs or spreadsheets, making it
        impossible to target the right people or build <GlossaryLink slug="lookalike-audience">lookalike audiences</GlossaryLink> that
        actually convert. <Link id={`use-cases-marketing-measured-lead-generation-challenges-wrench${idSuffix}`} href="/tools/marketing/ad-spend-optimization/measured-lead-generation/wrench" className="text-[#C83803] hover:underline">Wrench</Link> connects
        directly with your operational tools to score and segment contact data by conversion probability, cleaning
        and refreshing lists dynamically so you are not guessing who to target. It also ensures that buyers who just
        made a purchase are excluded from <GlossaryLink slug="retargeting">retargeting</GlossaryLink>, so you
        don&apos;t waste dollars hitting the same people twice.</p>
      <p className="text-base text-white shadow-text pt-3">
        <GlossaryLink slug="audience-overlap">Audience overlaps</GlossaryLink> are a hidden drain. Without
        automation, your own ads can bid against each other, driving up your costs and lowering your efficiency. <Link id={`use-cases-marketing-measured-lead-generation-challenges-madgicx${idSuffix}`} href="/tools/marketing/ad-spend-optimization/measured-lead-generation/madgicx" className="text-[#C83803] hover:underline">Madgicx</Link> solves
        this by mapping out multi-tiered funnel paths and eliminating cross-audience bidding overlaps, so every ad
        dollar goes where it can do the most good.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, most teams get stuck in a <GlossaryLink slug="creative-testing">creative testing</GlossaryLink> rut.
        Testing only two ads at a time means you never find the best combination of copy, imagery, and offers.
        Marpipe enables true <GlossaryLink slug="multivariate-testing">multivariate testing</GlossaryLink>,
        isolating which design elements drive results and removing the ones that do not. This lets you move beyond
        random trial-and-error and build a system that continuously improves.</p>
      <p className="text-base text-white shadow-text pt-3">
        These failures are not rare edge cases. They are the everyday reality for small businesses trying to scale
        Measured Lead Generation with the tools and processes that worked when the stakes were smaller. The more you
        spend, the more these cracks widen. Without automation and integration, across budget management, creative
        production, data hygiene, and audience targeting, the system breaks down under its own weight, and no amount
        of manual effort can fix it.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="why-manual-lead-generation-breaks-down-as-budgets-scale-up" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Manual Lead Generation Breaks Down as Budgets Scale Up
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="why-manual-lead-generation-breaks-down-as-budgets-scale-up-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Manual Lead Generation Breaks Down as Budgets Scale Up
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
