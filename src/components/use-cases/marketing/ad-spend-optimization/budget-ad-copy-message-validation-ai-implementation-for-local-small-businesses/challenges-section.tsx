import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Most small business ad campaigns get derailed by a handful of recurring failures that drain budgets, kill
        momentum, and leave owners frustrated before they see a single real lead. The core problem is that the ad
        platforms, from Google to Meta, are set up for high-volume spenders and agency teams, not for a single owner
        running a $500-a-month campaign for a local service in Miami or Fort Lauderdale (<a id={`use-cases-marketing-budget-ad-copy-message-validation-challenges-source-localiq-com${idSuffix}`} href="https://localiq.com/blog/local-ppc/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">LocaliQ</a>,
        as of Oct 23, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual micromanagement is the first trap. Owners and office managers spend hours fiddling with keyword bids
        and location settings, hoping to squeeze more value from their daily spend. Every time they touch a setting,
        they reset the platform’s learning algorithm. This means any small gain is wiped out, and the ads fall out
        of favor in the auction. Manual tweaks are not surgical, they are blunt instruments that often make things
        worse, not better. The result is a campaign that never gets a chance to stabilize, always stuck in the
        “learning” phase, where costs are highest and performance weakest.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next failure is letting the platforms run on autopilot, trusting that Google and Facebook will optimize
        for your best interests. The reality is, their default settings are designed to spend your budget as quickly
        as possible, not as effectively as possible. Broad-match keywords, loose location targeting, and default
        audiences mean your ads show up for the wrong people, DIYers, out-of-area clicks, customers who will never
        buy. If you are not actively watching for this, your daily budget is gone by noon, and you have nothing to
        show for it but a handful of junk leads.</p>
      <p className="text-base text-white shadow-text pt-3">
        One of the biggest hidden failures is creative fatigue. Most owners write a single ad headline and let it
        run for months. The local audience sees the same message over and over until they stop noticing it
        altogether. The platform notices the drop in engagement and starts giving your ad fewer impressions, driving
        costs up and results down. Without a system to refresh creative, your campaign is dead in the water before
        you realize what happened.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another common point of failure is a lack of real message validation. Owners are forced to guess which
        headline, image, or offer will work, then pay out of pocket to run it live and see what happens. There is no <GlossaryLink slug="feedback-loop">feedback
        loop</GlossaryLink> before launch, no predictive scoring, no persona testing, no way to filter out weak copy
        before it burns budget. This means every new campaign is a gamble, and most lose.</p>
      <p className="text-base text-white shadow-text pt-3">
        Tracking and <GlossaryLink slug="marketing-attribution">attribution</GlossaryLink> break down next. Without
        automated <GlossaryLink slug="call-tracking">call tracking</GlossaryLink> or unified lead dashboards, it’s
        impossible to know which ad or channel actually drove a customer to pick up the phone or fill out a form.
        This is especially painful for small businesses that run ads across both search and social. Leads fall
        through the cracks, calls go unanswered, and nobody knows which campaign is actually working.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, the burden of multi-channel management overwhelms small teams. Running ads on Google, Meta, and
        Microsoft means logging into multiple dashboards, each with its own quirks and reporting gaps. The more
        platforms you add, the more likely you are to miss wasted spend, outdated creatives, or broken tracking.
        Without a centralized control panel and real-time optimization, it’s easy to let one account bleed money for
        weeks before anyone notices.</p>
      <p className="text-base text-white shadow-text pt-3">
        These failures are not just technical, they are structural. The current way of working stacks the deck
        against any small business trying to compete for local attention. The result is predictable: budgets burn
        out, leads dry up, and the owner is left with less than they started with. Until these core problems are
        addressed with automated copy validation, predictive scoring, and real-time optimization built for the
        realities of micro-budgets, small business advertising will keep repeating the same cycle of waste and
        frustration.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="why-small-business-ad-campaigns-fail-before-they-start" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Small Business Ad Campaigns Fail Before They Start
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
              <h2 id="why-small-business-ad-campaigns-fail-before-they-start-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Small Business Ad Campaigns Fail Before They Start
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
