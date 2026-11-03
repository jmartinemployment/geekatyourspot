import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        AdCreative uses artificial intelligence to automate the full process of creating, testing, and validating ad
        copy and visuals, with every step focused on conversion performance. The platform is built for businesses
        that need high-performing ads but cannot afford a creative agency or full-time staff. It combines
        proprietary AI models, conversion-tested frameworks, and automated design logic to produce ad assets in
        seconds, not days.</p>
      <p className="text-base text-white shadow-text pt-3">
        The workflow begins when you enter your business details, your logo, brand colors, and a short description.
        AdCreative’s system instantly imports these elements and applies them to every creative it generates, so
        your ads always match your brand. There is no manual template editing or risk of off-brand visuals. This
        step alone removes a common friction point for small teams who lack a designer and need every ad to look
        professional.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once your brand assets are loaded, you select your campaign objective and the platforms you want to target,
        Meta, Google, LinkedIn, Pinterest, and more. The platform’s AI then scans your website or product page to
        extract key selling points and value propositions. This automated scan ensures the message in your ads
        matches your landing page, solving the bounce-rate problem that comes from mismatched ad copy and site
        content.</p>
      <p className="text-base text-white shadow-text pt-3">
        AdCreative’s headline and body copy are built using proven conversion frameworks like AIDA (Attention,
        Interest, Desire, Action) and PAS (Problem, Agitation, Solution). The AI is trained on hundreds of millions
        of high-performing ad texts, so it writes sharp, direct messaging that states your offer clearly and always
        includes a call to action. This is not a generic text generator; the system is tuned for the short, punchy
        format that paid ads require, and it adapts to each platform’s style and length constraints.</p>
      <p className="text-base text-white shadow-text pt-3">
        For visuals, AdCreative draws from one of the largest libraries of successful ad layouts and combines them
        with your brand’s colors, fonts, and images. The AI automatically chooses the right visual format for each
        platform, story, square, landscape, and can generate images in a wide range of styles, from realistic to
        cinematic. You can upload your own product images or let the system generate stock-style visuals tailored to
        your campaign. Automated background removal, color palette suggestions, and style matching are built in, so
        every ad looks polished and consistent.</p>
      <p className="text-base text-white shadow-text pt-3">
        Batch generation is a core feature. Instead of building one ad at a time, you can upload up to 25 product
        images and have the system create hundreds of creative variants in minutes. This is critical for small
        businesses running multiple offers or targeting different audiences, as it keeps campaigns fresh and reduces
        the risk of <GlossaryLink slug="ad-fatigue" className="text-[#0B162A] hover:underline">ad fatigue</GlossaryLink>.
        The platform’s AI also scores each creative for predicted conversion performance, letting you sort and
        prioritize the best options before you spend a dollar on traffic.</p>
      <p className="text-base text-white shadow-text pt-3">
        Validation is not an afterthought. AdCreative’s Creative Insights AI monitors your live campaigns and alerts
        you when an ad starts to underperform. It flags creative fatigue early, recommends when to refresh an asset,
        and helps you avoid the silent budget drain that happens when stale ads keep running. This <GlossaryLink slug="feedback-loop" className="text-[#0B162A] hover:underline">feedback
        loop</GlossaryLink>, generate, test, monitor, refresh, means you always have new, validated creative ready
        to launch, and you avoid the trap of running the same ad until results collapse.</p>
      <p className="text-base text-white shadow-text pt-3">
        The result is a system where every creative is data-backed, on-brand, and optimized for your specific
        business goals. There is no guesswork, no manual copywriting, and no need to hire outside help. For a small
        business in South Florida working with a $500 monthly budget, this means you can run professional, validated
        ads with the same sophistication as a much larger company, but without the overhead (<a id={`tools-marketing-budget-ad-copy-message-validation-adcreative-how-it-works-source-adcreative-ai${idSuffix}`} href="https://www.adcreative.ai/use-case/e-commerce" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">AdCreative</a>,
        as of Oct 23, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        A typical workflow for a local Miami-based service business might look like this: the owner enters their
        brand details and website, selects “<GlossaryLink slug="lead-generation" className="text-[#0B162A] hover:underline">lead
        generation</GlossaryLink>” as the objective, and chooses Meta and Google as channels. AdCreative scans the
        site, builds a batch of ad variants using the business’s own colors and value props, and generates both copy
        and visuals. The owner reviews the top-scoring options, pushes them directly to their ad accounts, and lets
        the system monitor results. When engagement drops, Creative Insights AI sends an alert and suggests a fresh
        batch, no agency, no downtime, no wasted spend.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-adcreative-generates-and-validates-ad-copy-and-visuals-for-small-budgets" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How AdCreative generates and validates ad copy and visuals for small budgets
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
              <h2 id="how-adcreative-generates-and-validates-ad-copy-and-visuals-for-small-budgets-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How AdCreative generates and validates ad copy and visuals for small budgets
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
