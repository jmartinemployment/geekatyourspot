import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Plai automates the entire cycle of ad copy validation and message testing for small businesses by handling
        setup, targeting, creative production, and ongoing optimization without constant manual work. The platform’s
        workflow removes the need for technical expertise, so even a small team can launch, test, and refine
        campaigns across multiple channels with minimal overhead.</p>
      <p className="text-base text-white shadow-text pt-3">
        The process starts with campaign setup, which Plai streamlines using proven templates tailored for different
        ad platforms and objectives. Instead of building each campaign from scratch, users pick a template that
        matches their goal, <GlossaryLink slug="lead-generation" className="text-[#0B162A] hover:underline">lead
        generation</GlossaryLink>, local awareness, or product promotion. Plai’s templates carry the structure,
        targeting, and creative frameworks that have worked for similar businesses, so setup moves quickly and
        mistakes are less likely.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once a campaign is live, Plai’s AI takes over the heavy lifting for message validation. The system generates
        ad copy and creative variations, then runs real-time tests across audiences and placements. This means every
        message goes through continuous A/B testing, with the platform measuring which version drives more clicks,
        leads, or sales. Instead of waiting a week to see what works, small teams see results and optimizations
        daily.</p>
      <p className="text-base text-white shadow-text pt-3">
        Audience targeting is handled through Plai’s segmentation engine. Rather than relying on broad, default
        settings that waste budget on out-of-market impressions, Plai recommends tightly defined audiences based on
        historical small business success patterns. The platform leverages demographic, behavioral, and engagement
        data to suggest the best audience segments for each campaign, narrowing the focus to those most likely to
        convert. This immediately cuts out wasted spend on the wrong clicks and ensures every dollar goes further.</p>
      <p className="text-base text-white shadow-text pt-3">
        Plai deploys automated schedules and budget adjustments using live data. The system watches for performance
        changes by day of week, time of day, and channel, then shifts spend toward the highest-value combinations.
        When a campaign or ad variant underperforms, Plai reallocates budget instantly, so money is never tied up in
        dead traffic. This real-time optimization is what keeps small-budget campaigns from burning out on junk
        clicks or running stale ads that no longer convert.</p>
      <p className="text-base text-white shadow-text pt-3">
        For tracking and analytics, Plai removes the complexity of pixel setup and reporting. The platform automates
        conversion tracking across Google, Meta, and other supported channels, so every lead or sale is attributed
        correctly without the user needing to write code or manage tags. The reporting dashboard translates
        performance data into simple, visual summaries, no jargon or confusing metrics, so non-technical owners can
        see exactly what’s working and what needs attention.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative fatigue and message drift are solved by Plai’s automated creative refresh. The system monitors ad
        performance signals and, when engagement drops, it generates new creative variants or rotates in fresh copy.
        This keeps campaigns from stalling and ensures that ads stay relevant to local audiences. For businesses
        running multiple campaigns, Plai’s dashboard lets them duplicate and adapt winning ads across different
        accounts or locations in minutes, not hours.</p>
      <p className="text-base text-white shadow-text pt-3">
        Plai’s validation process is not a one-off check but a continuous cycle. The platform keeps testing,
        learning, and optimizing as new data comes in. This always-on approach means campaigns improve over time
        without needing a human to manually review and adjust every detail. For a small business owner, this is the
        difference between spending every morning in the ad manager and having a system that quietly protects and
        grows their ad budget in the background.</p>
      <p className="text-base text-white shadow-text pt-3">
        Taken together, Plai’s step-by-step mechanics, template-driven setup, automated targeting, real-time
        creative testing, dynamic budget shifts, and simple reporting, replace the need for manual validation and
        reduce the risk of wasted spend. For a Miami-Dade or Broward small business with a $500 monthly ad budget,
        this workflow means more leads, fewer errors, and a clear path from spend to sales, all without hiring an
        agency or learning a new technical skillset (<a id={`tools-marketing-budget-ad-copy-message-validation-plai-how-it-works-source-plai-io${idSuffix}`} href="https://www.plai.io/features/saas-configurator" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Plai</a>,
        as of Oct 23, 2026).</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-plai-drives-automated-validation-and-optimization-step-by-step" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Plai Drives Automated Validation and Optimization Step by Step
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-plai-drives-automated-validation-and-optimization-step-by-step-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Plai Drives Automated Validation and Optimization Step by Step
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
