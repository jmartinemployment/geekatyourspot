import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Launching AdCreative for Budget Ad Copy &amp; Message Validation in a small business is a rapid, structured
        process with clear steps that shorten setup time. AdCreative’s pre-built integrations, templated onboarding,
        and automated creative workflows mean most teams spend hours, not weeks, getting real ads live. The order
        and speed of go-live depend on how well your current data and brand assets are organized, and how you
        approach rollout.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business in South Florida with a limited budget, the main concern is minimizing downtime and
        avoiding complex migrations. AdCreative’s account setup starts with connecting your existing ad accounts,
        Meta, Google, LinkedIn, Pinterest, Microsoft, and others, through direct connectors. No custom code or
        manual exports are required. Once connected, you import your brand assets (logo, color palette, fonts, and
        style guide) in a single step. AdCreative’s interface pulls these details in automatically, ensuring every
        creative matches your brand from day one.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next stage is creative generation. AdCreative’s AI leverages its proprietary large language model,
        trained on over 500 million high-performing ad texts, to generate conversion-focused headlines and body copy
        (<a id={`tools-marketing-budget-ad-copy-message-validation-adcreative-implementing-source-adcreative-ai${idSuffix}`} href="https://www.adcreative.ai/use-case/e-commerce" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">AdCreative</a>,
        as of Oct 23, 2026). It also draws from a massive database of successful ad layouts to build images and
        video variants that are ready to deploy. The platform’s batch generation feature lets you upload up to 25
        product images at once, producing dozens or hundreds of ad variants in a single session. This batch approach
        is critical for small teams that cannot afford to write or design each creative by hand.</p>
      <p className="text-base text-white shadow-text pt-3">
        Campaign launch is streamlined by AdCreative’s ability to push creatives directly to your connected ad
        accounts. There’s no need to download files or re-upload assets to each platform. The system’s native
        integrations mean you can select the best-performing creatives and send them live to Meta, Google, and
        LinkedIn in seconds. This eliminates the friction of manual uploads and reduces the risk of version
        mismatches or outdated files going live.</p>
      <p className="text-base text-white shadow-text pt-3">
        One of the main accelerators for go-live is AdCreative’s use of proven copywriting frameworks like AIDA
        (Attention, Interest, Desire, Action) and PAS (Problem, Agitation, Solution). These frameworks are built
        into the AI, so even users without marketing experience can produce sharp, direct copy that drives action.
        The platform also provides templated styles for different industries, letting you skip the blank-canvas
        problem and start with layouts already optimized for conversion.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses that want to phase their rollout, AdCreative supports incremental adoption. You can
        start with one campaign or product line, validate results, and then expand to more assets or channels as you
        see early wins. This phased approach is especially useful for teams with limited resources or those who want
        to test the platform’s output before committing to a full switch.</p>
      <p className="text-base text-white shadow-text pt-3">
        Go-live is further shortened by AdCreative’s automated creative refresh and performance monitoring. The
        platform’s Creative Insights AI scans your campaigns for underperforming ads, sending alerts when a refresh
        is needed. This means you’re not left guessing when to update creative or risking wasted spend on stale ads.
        Instead, you get proactive recommendations and can generate new variants in minutes, keeping campaigns fresh
        without manual oversight.</p>
      <p className="text-base text-white shadow-text pt-3">
        Throughout the process, Geek @ Your Spot acts as the implementer, configuring AdCreative to fit your
        existing marketing stack, training your team on best practices, and handling any integration challenges that
        arise. Their approach follows a four-phase plan: defining your objectives, assessing your <GlossaryLink slug="data-quality">data
        quality</GlossaryLink>, selecting the right tools, and building an implementation strategy that fits your
        systems. This structure ensures that AdCreative is not just installed, but fully embedded into your workflow
        with zero downtime and continuous scaling.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, going live with AdCreative is a matter of connecting accounts, importing brand assets,
        generating creatives, and launching campaigns, all supported by automation and pre-built integrations. The
        main factors that speed up go-live are the readiness of your brand materials, the use of batch creative
        generation, and the platform’s direct publishing features. With Geek @ Your Spot managing the rollout, most
        small businesses move from setup to live campaigns in days, not weeks, and avoid the typical pain points of
        manual ad creation or agency handoffs.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-going-live-with-adcreative-looks-like-for-a-small-business-and-what-speeds-it-up" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What going live with AdCreative looks like for a small business and what speeds it up
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
              <h2 id="what-going-live-with-adcreative-looks-like-for-a-small-business-and-what-speeds-it-up-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What going live with AdCreative looks like for a small business and what speeds it up
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
