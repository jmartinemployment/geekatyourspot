import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Configuring Wrench for Measured Lead Generation means setting up <GlossaryLink slug="automation-rules" className="text-[#0B162A] hover:underline">automated
        rules</GlossaryLink> for lead scoring, segmentation, and campaign optimization that work directly on your
        live CRM and marketing data. Geek @ Your Spot makes Wrench fit your current stack by mapping your data,
        connecting integrations like HubSpot or Salesforce, and tuning automation logic so it matches your
        real-world sales cycles and ad budgets.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wrench’s automation starts with connecting your CRM and ad platforms. The system pulls in your contact and
        performance data, then applies its own segmentation and lead scoring models to sort prospects by their
        likelihood to convert. This is not a generic scoring engine: Wrench analyzes behavioral signals, purchase
        history, and engagement to create dynamic segments. For a South Florida small business, this means your next
        campaign targets the right prospects, no more sending the same broad offer to everyone on your list.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wrench’s core logic is built around a set of configurable automation steps. These include:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Ingesting and cleaning CRM and lead data automatically, fixing formatting so every record can be matched to
          ad networks without manual cleanup.</li>
        <li>Dynamic segmentation, where Wrench groups your contacts by behaviors, preferences, and value, so you can run
          campaigns tailored to each segment’s readiness to buy.</li>
        <li>Predictive lead scoring, which assigns a conversion probability to each contact and updates it as new data
          comes in. This lets your team focus only on the highest-value leads.</li>
        <li>Automated campaign exclusions: Wrench removes converted clients from active ad sets the moment a sale is
          logged, preventing wasted retargeting spend.</li>
        <li>Timing logic for retargeting: Wrench calculates the best windows to re-engage past leads, so you reach them
          when they are most likely to buy again.</li>
        <li>Personalized creative generation: The system can generate and test new ad concepts, images, and copy
          tailored to each audience segment, reducing creative fatigue.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Wrench does not require you to write custom scripts or manage code. All automation logic is configured
        through its interface, with Geek @ Your Spot handling the mapping of your business rules to Wrench’s models.
        If your business uses custom objects or has unique segmentation needs, Wrench can validate and test these
        requests within its own framework, but the platform is not a low-level scripting environment, its extension
        mechanism is configuration-based, not open-code or SDK-driven.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot’s role is to translate your sales and marketing processes into Wrench’s automation. If your
        data is spread across multiple tools or you have legacy systems, they handle the integration work,
        connecting HubSpot, Salesforce, Meta, or Instagram as needed. They also set up data hygiene routines, so
        your contact lists stay clean and ready for activation. This is what closes the gap between a tool that
        claims automation and a system that actually works for your pipeline.</p>
      <p className="text-base text-white shadow-text pt-3">
        The biggest value comes from how Geek @ Your Spot adapts Wrench’s logic to your own sales cycles and local
        market. For example, if your business sees seasonal spikes or has a mix of B2B and B2C clients, the
        segmentation and scoring models are tuned to reflect those realities. They configure Wrench to spot when a
        past client is ready for an upsell or to block ad spend on contacts who have already converted, so your
        budget is never wasted on the wrong audience.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wrench’s automation is also designed to scale with your business. As you add new channels or change your ad
        strategy, Geek @ Your Spot can update the configuration to include new data sources or campaign types. The
        platform supports native integrations with key marketing tools, and custom integrations are available if
        your environment requires them. This means you are not locked into a static setup, your automation grows as
        your needs change.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small team in Miami-Dade, Broward, or Palm Beach, the difference is hours returned each week and fewer
        errors from manual handoffs. Wrench’s automation logic is not just about speed, it is about precision. Every
        rule is there to make sure your spend goes to the prospects most likely to convert, your creative stays
        fresh, and your team is free to focus on closing deals instead of cleaning data or chasing down leads that
        are never going to buy.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="wrenchs-configuration" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Wrench’s configuration
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
              <h2 id="wrenchs-configuration-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Wrench’s configuration
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
