import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        AdCreative is a platform built for automated, conversion-focused ad creative generation, and its
        configuration is about setting up the rules, brand parameters, and workflow automations that drive every
        asset it produces. The tool is not a blank canvas: it comes with its own logic for generating, scoring, and
        deploying ad copy and visuals, but it is highly configurable to fit your brand, campaign objectives, and
        channel needs. Geek @ Your Spot’s implementation work is about making sure every rule and automation in
        AdCreative matches your business reality.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first layer of configuration in AdCreative is brand control. You set your logo, color palette, fonts,
        and visual guidelines directly in the platform. AdCreative pulls these automatically into every creative it
        generates, so you never see off-brand colors or mismatched typography. This keeps all output visually
        consistent, which is critical for small businesses that need to look professional and trustworthy on a tight
        budget. The brand setup is not a one-time task, if you update your logo or adjust your brand colors,
        AdCreative’s settings can be updated in minutes, and all new assets will match the new standard immediately.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next, AdCreative’s automation logic handles both copy and design. The system uses built-in frameworks like
        AIDA (Attention, Interest, Desire, Action) and PAS (Problem, Agitation, Solution) to structure ad copy. You
        can specify which framework to prioritize for a campaign or let AdCreative test both and surface the
        best-performing variations. This means you do not have to write every headline or description yourself; the
        platform generates options that follow proven conversion principles, and you select or fine-tune what fits
        your offer and audience. For visuals, AdCreative’s automation draws from its proprietary database of
        high-performing ad layouts. It chooses layouts, image styles, and call-to-action placements that are
        statistically likely to convert, based on data from millions of successful ads.</p>
      <p className="text-base text-white shadow-text pt-3">
        AdCreative’s workflow automation covers the full process from creative generation to deployment. Once your
        ad accounts (Meta, Google, LinkedIn, and others) are connected, you can push new ad creatives directly into
        your campaigns without manual downloads or uploads. The system also automates batch generation: you upload a
        set of product images or URLs, and AdCreative creates multiple creative variations for each, ready for <GlossaryLink slug="a-b-testing" className="text-[#0B162A] hover:underline">A/B
        testing</GlossaryLink> or immediate launch. This is a major time-saver for small teams, removing the need to
        manually resize images or rewrite copy for different platforms.</p>
      <p className="text-base text-white shadow-text pt-3">
        A key part of AdCreative’s automation is its Creative Insights AI. This monitors live campaign performance
        and flags underperforming ads, prompting you to refresh creative before your results drop. The platform will
        suggest new variants or automatically generate fresh options using the same brand and campaign rules. This
        proactive approach means you are not left guessing when to update ads, and you avoid the conversion drop
        that comes with creative fatigue. For a small business with no dedicated marketing analyst, this is the
        difference between steady lead flow and wasted spend.</p>
      <p className="text-base text-white shadow-text pt-3">
        All of AdCreative’s configuration is done through its web interface, there is no scripting or custom <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink> required
        for standard use. If you need to integrate with additional tools or automate reporting, AdCreative supports
        account integrations for social and ad platforms, but it does not expose a developer SDK or scripting
        environment for custom extensions. The focus is on making advanced automation available through
        configuration, not code. This keeps deployment fast and accessible to non-technical teams.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot’s role is to set up these configurations for your real campaigns. That means mapping your
        product catalog or service list to AdCreative’s batch generation workflow, setting up your brand controls,
        connecting your ad accounts, and tuning the automation rules for your budget and objectives. For example, a
        local HVAC company in Miami-Dade might have Geek @ Your Spot configure AdCreative to generate direct-offer
        ads for emergency repair and testimonial ads for seasonal tune-ups, with visuals that always use the
        company’s colors and phone number. The team ensures that every automation is turned to your market, not left
        on generic defaults.</p>
      <p className="text-base text-white shadow-text pt-3">
        AdCreative does not require ongoing manual intervention once configured. Its automation logic continually
        generates, tests, and scores new ad variations, and its integration with ad platforms means you can launch
        or refresh campaigns with a few clicks. If your campaign goals change or you add a new service, you update
        the relevant configuration in AdCreative and the system adapts. For small businesses that cannot afford a
        full-time designer or copywriter, this is how you get professional-grade creative output and validation
        without the overhead.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, configuring AdCreative is about setting up brand controls, campaign rules, and workflow
        automations that let the platform generate, test, and deploy high-converting ad creative at scale. There is
        no custom code, and the extension mechanism is limited to platform integrations. Geek @ Your Spot’s
        expertise is in making these rules fit your business, so you get the full benefit of automation without
        losing control or wasting budget on the wrong message or look.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-adcreative-its-own-rules-and-automation-logic-and-its-extension-mechanism" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What gets configured in AdCreative, its own rules and automation logic, and its extension mechanism
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-adcreative-its-own-rules-and-automation-logic-and-its-extension-mechanism-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What gets configured in AdCreative, its own rules and automation logic, and its extension mechanism
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
