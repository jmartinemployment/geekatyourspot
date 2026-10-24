export default function ConfiguringSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Configuring Anyword for Budget Ad Copy &amp; Message Validation means setting up rules and automation logic
        that let your ad copy generate, score, and adapt itself before it ever goes live. Anyword’s own platform is
        built for configuration, not custom scripting. It is a rules-driven system: you define your brand voice,
        audience personas, and campaign goals, and the software automates copy generation, predictive scoring, and
        message validation across your channels. Geek @ Your Spot handles the setup so these rules and automations
        fit your small business, not a generic template.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is defining your brand’s tone of voice and your audience segments inside Anyword. The
        platform asks for your basic product information, industry, and the channels you plan to advertise on,
        Google, Facebook, LinkedIn, or others. You select or train your tone of voice, so every line of copy matches
        how you want to sound. Anyword lets you build detailed personas, down to pain points and demographics, so
        the copy it generates is tuned for your real buyers in Miami-Dade, Broward, or West Palm Beach, not a
        generic national audience. Geek @ Your Spot guides you through this, making sure that each persona and tone
        matches what your team already knows about your customers.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next, you set up the automation logic for copy generation and validation. Anyword’s engine generates
        multiple ad copy variations for each channel and audience segment, using frameworks like AIDA and PAS. It
        does this with a few clicks: you pick your campaign goal, provide a short prompt, and the platform produces
        headlines, descriptions, and calls to action for each target persona. Each copy variant is scored by
        Anyword’s Predictive Performance Score, which is based on conversion data from millions of dollars in ad
        spend. This score predicts how well each message will perform, so you can filter out weak options before
        spending a dollar. Geek @ Your Spot configures these automation rules for you, linking the scoring logic to
        your campaign objectives and making sure that only high-scoring copy moves forward.</p>
      <p className="text-base text-white shadow-text pt-3">
        Anyword also lets you automate compliance and channel fit. Its rules engine checks that your copy meets the
        technical requirements of each ad network, whether that is character limits, tone, or format. You can set up
        guardrails so that every message is compliant and ready to publish, without manual review. Geek @ Your Spot
        tailors these checks to your campaigns, so you do not waste time fixing rejected ads or running copy that
        gets flagged by Google or Meta. For local businesses, this means your ads are always tuned to your real
        audience and never wasted on out-of-area clicks.</p>
      <p className="text-base text-white shadow-text pt-3">
        The extension mechanism in Anyword is integration-focused. The platform connects directly to tools you
        already use, including Google Ads, Microsoft Dynamics 365, X (Twitter), and Google Drive (<a id={`tools-marketing-budget-ad-copy-message-validation-anyword-configuring-source-anyword-com${idSuffix}`} href="https://www.anyword.com/integrations" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Anyword</a>,
        as of Oct 19, 2026). This means your copy, scores, and reports flow automatically into your existing
        workflows. There is no open scripting or SDK for custom automation, the system is designed for
        configuration, not code. Geek @ Your Spot manages these integrations during deployment, mapping your account
        structure, connecting your ad networks, and setting up data syncs so that your team can work in one place.
        This is not a developer project; it is a business process, and the configuration is handled so you do not
        need IT support.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once the rules and automations are live, Anyword’s continuous optimization features keep tuning your
        messaging based on real-world results. The platform runs ongoing tests of copy variations, benchmarks them
        against your past campaigns, and highlights which messages perform best for each persona and channel. Geek @
        Your Spot sets up these optimization cycles, so your ad copy keeps improving without manual intervention.
        The process is hands-off for your team: you approve the initial logic, and the system keeps learning from
        your results.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, this means your ad copy workflow is now rules-driven and automated. You do not have to write or
        test every headline by hand, or guess what will work in your market. The platform generates, scores,
        filters, and publishes your copy, all within the rules you set. Geek @ Your Spot ensures the configuration
        matches your business objectives, so you get the benefits of Anyword’s AI without the risk of wasting your
        budget on unproven messages. The result is a copy validation process that runs in hours, not weeks, and
        adapts to your real audience with every campaign.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-anyword-and-how-geek-your-spot-makes-it-work-for-your-team" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What gets configured in Anyword, and how Geek @ Your Spot makes it work for your team
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-anyword-and-how-geek-your-spot-makes-it-work-for-your-team-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What gets configured in Anyword, and how Geek @ Your Spot makes it work for your team
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
