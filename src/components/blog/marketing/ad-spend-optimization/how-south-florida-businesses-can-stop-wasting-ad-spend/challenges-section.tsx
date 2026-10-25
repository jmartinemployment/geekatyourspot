import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Most South Florida small businesses first recognize their measured lead generation problem when their cost
        per lead jumps, but their sales pipeline does not. This spike is not a warning to spend less, it is a sign
        that manual campaign management has hit its operational ceiling. The more you try to scale your ad spend,
        moving from $16 a day to $50, the less predictable your results become (<a id={`blog-marketing-measured-lead-generation-challenges-source-wrench-ai${idSuffix}`} href="https://wrench.ai/products/sneak-peek-of-the-wrench.ai-platform" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Wrench</a>,
        as of Oct 24, 2026). You do not just burn money, you burn opportunity.</p>
      <p className="text-base text-white shadow-text pt-3">
        This happens because every manual step in your process multiplies the chance for things to break. When you
        increase budgets by hand, ad platform algorithms react by moving your campaigns into higher-cost auctions.
        Suddenly, your cost per lead explodes and your margins shrink. You try to keep up by refreshing creative,
        new images, copy, layouts, but there is never enough time or staff. Ad fatigue sets in, performance tanks,
        and what worked last month stops working altogether.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is the scaling trap for local businesses aiming for a predictable monthly sales pipeline. Unlike large
        brands, you cannot afford to run dozens of tests or hire a team to <GlossaryLink slug="customer-churn">churn</GlossaryLink> out
        creative daily. Instead, your team gets stuck in a loop: manually updating ads, scrambling to respond to
        performance drops, and falling behind as each platform changes the rules. The cost is not just in dollars,
        it is in wasted hours, lost leads, and the stress of knowing that every manual fix is only a stopgap.</p>
      <p className="text-base text-white shadow-text pt-3">
        The creative bottleneck is real. Ad platforms now demand high creative velocity, punishing stale ads with
        lower reach and higher costs. You need fresh content, fast. But every new variant requires copywriting,
        design, approvals, and uploads. For most teams, this means running the same ad far longer than you should
        and watching performance drop week after week. The more you try to do by hand, the more you fall behind
        competitors using automated <GlossaryLink slug="creative-testing">creative testing</GlossaryLink> and
        deployment.</p>
      <p className="text-base text-white shadow-text pt-3">
        Meanwhile, the technical side is even less forgiving. Without the right scripts and automation, you cannot
        respond to sudden bid spikes from competitors, nor can you pause campaigns the moment a landing page breaks.
        Even if you spot the problem, you are fixing it hours or days too late. And your data, trapped in
        spreadsheets or a CRM that does not sync with your ad platform, means you keep targeting the wrong people,
        wasting budget on cold leads or past buyers who should be excluded.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every day spent in this manual loop compounds the damage. Costs rise, leads dry up, and your team gets stuck
        fighting fires instead of building a real pipeline. This is not a problem you can solve by working harder or
        spending more. Until you break the cycle with automation and process, you are locked into a system that
        penalizes growth and rewards only those who can outspend or out-staff you. The longer you wait, the further
        ahead your competitors get, and the more money you leave on the table.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="why-the-manual-approach-to-lead-generation-traps-small-teams-in-rising-costs-and-lost-pipeline" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why the manual approach to lead generation traps small teams in rising costs and lost pipeline
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
              <h2 id="why-the-manual-approach-to-lead-generation-traps-small-teams-in-rising-costs-and-lost-pipeline-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why the manual approach to lead generation traps small teams in rising costs and lost pipeline
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
