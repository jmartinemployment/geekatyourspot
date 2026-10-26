import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Launching ActiveCampaign in a small business environment means connecting your sales, marketing, and
        customer data so that personalized email campaigns run with less manual effort and fewer missed leads. The
        fastest go-lives happen when you use ActiveCampaign’s pre-built connectors, start with automation templates,
        and phase the rollout to match your team’s real workflow, not a one-size-fits-all launch plan.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most small businesses in Miami-Dade, Broward, and Palm Beach counties come to ActiveCampaign with existing
        systems: a CRM, an e-commerce platform like Shopify, and a patchwork of spreadsheets or basic email tools.
        The first step is to map out which of these systems hold the customer and engagement data that will drive
        your campaigns. ActiveCampaign’s direct integrations with platforms like Shopify, Salesforce, and Facebook
        Custom Audiences mean you can sync customer records and purchase data without writing code or building
        custom middleware. This cuts weeks off a traditional integration project, since the connectors are built and
        tested by ActiveCampaign itself.</p>
      <p className="text-base text-white shadow-text pt-3">
        A phased rollout is the difference between a project that gets stuck and one that delivers value fast. Geek
        @ Your Spot starts by connecting your core data sources, usually your CRM and e-commerce platform, then
        brings in marketing channels and lead capture forms as a second step. This lets your team see real results
        from automated, personalized follow-up within days, not months. For example, once Shopify is connected,
        ActiveCampaign can pull in order history to trigger post-purchase emails, segment customers by buying
        behavior, and set up Facebook retargeting audiences. Each layer adds more personalization and automation,
        but you do not have to wait for a “big bang” launch to see the impact.</p>
      <p className="text-base text-white shadow-text pt-3">
        The heavy lifting in setup is handled by ActiveCampaign’s automation templates and drag-and-drop workflow
        builder. Instead of designing every sequence from scratch, you start with proven templates for welcome
        emails, lead nurturing, and abandoned cart recovery. These templates come with built-in triggers and logic,
        so you only need to adjust them for your own products, timing, and branding. This approach means you spend
        less time learning the system and more time tuning campaigns to your audience.</p>
      <p className="text-base text-white shadow-text pt-3">
        One of the most common delays in going live is data cleanup and mapping. ActiveCampaign’s segmentation and
        tagging tools help here by letting you work with imperfect data, segmenting by tags, custom fields, or <GlossaryLink slug="engagement-score">engagement
        scores</GlossaryLink>, even if your lists are not yet pristine. You can launch with your current data, then
        improve it over time as the system collects new engagement signals and auto-updates segments. This “good
        enough to start” approach is critical for small teams who cannot spend weeks scrubbing lists before sending
        their first campaign.</p>
      <p className="text-base text-white shadow-text pt-3">
        A typical go-live sequence for ActiveCampaign with Geek @ Your Spot looks like this:</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Connect your CRM and e-commerce data using ActiveCampaign’s direct integrations (for example, Shopify or
          Salesforce).</li>
        <li>Import your existing contact lists and map key fields (email, name, purchase history, lead source).</li>
        <li>Apply automation templates for your most urgent use cases, such as post-purchase follow-up, lead nurturing,
          or re-engagement.</li>
        <li>Test the automations with a small segment to confirm triggers, content, and data mapping work as expected.</li>
        <li>Expand to full audience, adding more segments, tags, and personalized content as the system proves itself.</li>
        <li>Iterate, use ActiveCampaign’s reporting and AI-driven insights to refine timing, messaging, and segmentation
          without needing to rebuild workflows from scratch.</li>
      </ol>
      <p className="text-base text-white shadow-text pt-3">
        The real value of this process is not just speed, but confidence. By using ActiveCampaign’s pre-built
        connectors and templates, you cut down on trial-and-error and avoid the risk of sending off-brand or poorly
        targeted emails. Each step is visible and testable, so you can see which automations are working and which
        need adjustment before scaling up.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses, the option to start with a limited set of automations and add complexity over time is
        critical. ActiveCampaign does not force you to “boil the ocean” on day one. You can launch with basic
        personalized follow-up for new leads and returning customers, then layer in scoring, retargeting, and
        multi-channel orchestration as your team grows more comfortable with the platform. This keeps the project
        manageable and ensures you see <GlossaryLink slug="return-on-investment">ROI</GlossaryLink> early.</p>
      <p className="text-base text-white shadow-text pt-3">
        The most common pitfalls, delays due to data mapping, over-customization before launch, and lack of clarity
        on what triggers which message, are all reduced by sticking to the sequence above. Geek @ Your Spot’s role
        is to keep the project moving, handle the technical setup, and make sure your team knows how to use
        ActiveCampaign’s reporting to spot and fix issues quickly. The result is a system that fits your business,
        shortens the sales cycle, and gives every lead a follow-up that feels personal even when it is fully
        automated.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-going-live-with-activecampaign-actually-looks-like-for-a-small-business-and-what-shaves-weeks-off-the-timeline" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What going live with ActiveCampaign actually looks like for a small business and what shaves weeks off the timeline
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-going-live-with-activecampaign-actually-looks-like-for-a-small-business-and-what-shaves-weeks-off-the-timeline-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What going live with ActiveCampaign actually looks like for a small business and what shaves weeks off the timeline
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
