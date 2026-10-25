import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr gives small businesses a way to automate the repetitive, error-prone work that kills lead generation
        at scale. Instead of hiring developers or spending hours every week on manual checks, you set the rules once
        and let the platform enforce them. The result is fewer wasted hours, more predictable costs, and a pipeline
        that grows without constant firefighting. Everything Optmyzr does is about removing manual effort from your
        week, so your team can focus on strategy, not spreadsheets.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core of Optmyzr is its Rule Engine. You do not need to know how to code. You define what matters, like
        pausing keywords that go over a safe <GlossaryLink slug="cost-per-acquisition" className="text-[#0B162A] hover:underline">cost-per-acquisition</GlossaryLink>,
        or scaling budgets up and down based on seasonal demand, and Optmyzr applies those rules automatically. When
        a competitor spikes their bids and threatens your search visibility, the system can adjust your bids in real
        time to protect your position. If a landing page goes down or starts throwing errors, Optmyzr can pause
        affected <GlossaryLink slug="ad-set" className="text-[#0B162A] hover:underline">ad sets</GlossaryLink> within
        the hour, saving you from burning budget on broken links. This is not just about convenience, it is about
        protecting your margins and keeping your campaigns healthy without constant manual oversight.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data fragmentation is handled with integrations and smart automation. Optmyzr lets you connect spreadsheets,
        CRM data, and other business sources directly to your ad optimization logic. That means your exclusion
        lists, <GlossaryLink slug="negative-keywords" className="text-[#0B162A] hover:underline">negative keywords</GlossaryLink>,
        and <GlossaryLink slug="retargeting" className="text-[#0B162A] hover:underline">retargeting</GlossaryLink> rules
        stay up to date without manual review. The platform can automatically add profit-draining phrases to
        negative lists and surface new keyword opportunities, all while keeping your targeting tight and your spend
        focused on high-value prospects. The hours you used to spend combing through <GlossaryLink slug="search-terms-report" className="text-[#0B162A] hover:underline">search
        term reports</GlossaryLink> are now handled by the system, with only the most important decisions flagged
        for your review.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative bottlenecks are eased by automation of routine <GlossaryLink slug="pay-per-click" className="text-[#0B162A] hover:underline">PPC</GlossaryLink> tasks.
        Optmyzr can automatically pause underperforming ads and keywords, flag ad fatigue, and keep your campaigns
        fresh by surfacing new opportunities. You can set up scheduled routines that swap out <GlossaryLink slug="creative-assets" className="text-[#0B162A] hover:underline">creative
        assets</GlossaryLink> or adjust <GlossaryLink slug="bid-cap" className="text-[#0B162A] hover:underline">bidding
        caps</GlossaryLink> as soon as performance drops, so your team is not stuck in a manual production loop.
        This means you can keep up with the ad platforms’ demand for new content without hiring more designers or
        burning out your staff.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget management is no longer a guessing game. Optmyzr’s automation lets you set guardrails that prevent
        overspending and keep your cost-per-lead within target. You can schedule automated budget adjustments based
        on local industry cycles, ensuring your spend matches actual demand. When a campaign starts to drift, the
        system can pause or scale back spend before it eats into your profit. This is not just about saving money,
        it is about freeing your team from <GlossaryLink slug="daily-budget" className="text-[#0B162A] hover:underline">daily
        budget</GlossaryLink> checks and letting them focus on bigger-picture growth.</p>
      <p className="text-base text-white shadow-text pt-3">
        The impact is measurable. In a published case, a digital marketing agency using Optmyzr saved over 240 hours
        per client each year, six full workweeks, by automating campaign monitoring, keyword cleanup, and <GlossaryLink slug="budget-pacing" className="text-[#0B162A] hover:underline">budget
        pacing</GlossaryLink> (<a id={`tools-marketing-measured-lead-generation-optmyzr-transforms-source-optmyzr-com${idSuffix}`} href="https://www.optmyzr.com/ai-info-page/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Optmyzr</a>,
        as of Oct 24, 2026). For one B2B client, this translated to a 36% decrease in <GlossaryLink slug="customer-acquisition-cost" className="text-[#0B162A] hover:underline">customer
        acquisition cost</GlossaryLink> without increasing ad spend. These are not hypothetical results, they are
        the direct outcome of removing manual work from every stage of the measured lead generation process.</p>
      <blockquote cite="https://www.optmyzr.com/solutions/rule-engine/" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Put repetitive tasks like weekly reporting and keyword management on autopilot, create intricate automated
        rules with custom data, and maintain full control over the destiny of your campaigns while saving time.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr also gives you full control over automation. Every strategy runs in preview first, so you see
        exactly what changes it will make before anything goes live. You can choose to automate changes fully,
        review them manually, or just receive alerts when something needs your attention. This flexibility means you
        get the benefits of automation without giving up oversight, critical for small teams that cannot afford
        surprises.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses in Miami-Dade, Broward, and West Palm Beach, Optmyzr is built to fit the way you work. You
        can manage campaigns across Google, Microsoft, Meta, and LinkedIn from a single dashboard, with unified
        reporting and cross-platform rules. Whether you are running search, social, or display, Optmyzr keeps your
        measured lead generation engine running smoothly without the need for specialized technical staff.</p>
      <p className="text-base text-white shadow-text pt-3">
        The end result: hours returned to your team, errors caught before they become expensive, and a lead pipeline
        that scales reliably. Optmyzr is not just a tool, it is a way to break out of the manual work cycle and
        build a measured lead generation system that works as hard as you do, every day of the week.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-optmyzr-removes-manual-work-from-measured-lead-generation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Optmyzr removes manual work from Measured Lead Generation
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-optmyzr-removes-manual-work-from-measured-lead-generation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Optmyzr removes manual work from Measured Lead Generation
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
