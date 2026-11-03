import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Configuring Mailchimp for personalized email campaigns means setting up rules for when emails send, who gets
        them, and what content each segment sees. Mailchimp’s own automation logic covers triggers, segmentation,
        timing, and dynamic content, no custom scripting or <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink> work
        is required for most small business use-cases. The real work is in mapping these features to your audience
        and business process, not in technical development.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mailchimp’s automation flows are the backbone of its personalization engine. You set up triggers based on
        actions (like a sign-up, a purchase, or a specific page view), then define what happens next: which email
        goes out, to whom, and with which content blocks. Triggers can be as simple as a new subscriber joining your
        list or as specific as a customer abandoning a cart with a certain product. The platform’s visual workflow
        builder lets you see and adjust these flows without code, so you can add or change steps as your business
        evolves.</p>
      <p className="text-base text-white shadow-text pt-3">
        Segmentation is configured through rules that use any data point Mailchimp holds, purchase history,
        engagement level, location, or custom fields you import from your CRM or e-commerce platform. You can build
        static segments for one-off campaigns or dynamic segments that update in real time as customer data changes.
        Predictive segmentation, available on paid tiers, lets Mailchimp’s AI group contacts by their likelihood to
        buy, churn, or engage, so you can focus effort where it’s most likely to pay off.</p>
      <p className="text-base text-white shadow-text pt-3">
        Personalization in Mailchimp is handled by inserting <GlossaryLink slug="merge-tag" className="text-[#0B162A] hover:underline">merge
        tags</GlossaryLink> and dynamic content blocks in your templates. Merge tags pull in data like first name,
        recent purchase, or custom fields, while dynamic blocks show or hide content based on segment membership.
        This means you can send one campaign with different offers or images to different groups, all in a single
        send. For small teams, this takes the manual editing out of campaign prep, no more duplicating emails for
        every segment.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation logic is set through Mailchimp’s Customer Journey Builder, which lets you map out a sequence of
        emails and actions triggered by specific events. For example, a welcome series might send an intro email on
        sign-up, a follow-up three days later if unopened, and a discount offer a week later if the contact hasn’t
        purchased. Each step can branch based on engagement or data, so you can build out as much complexity as your
        process needs. Pre-built templates for common flows like abandoned cart, re-engagement, or post-purchase
        follow-up make it easy to get started and then customize as you learn what works for your audience.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mailchimp integrates with over 300 platforms, including Shopify, WooCommerce, QuickBooks, Salesforce, and
        Zapier (<a id={`tools-marketing-personalized-email-campaigns-mailchimp-configuring-source-mailchimp-com${idSuffix}`} href="https://mailchimp.com/pricing/marketing/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Mailchimp</a>,
        as of Oct 25, 2026). These integrations let you pull in customer, order, and behavioral data to drive your
        automations. For example, connecting Shopify means Mailchimp can trigger emails based on cart events,
        product views, or completed purchases, and syncs customer details including tags and custom fields. This is
        all managed through Mailchimp’s integration settings, not custom code.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mailchimp’s own extension mechanism is integration-driven, not developer-driven. While Mailchimp has an API
        for advanced users, most small businesses never need it. The platform is designed for configuration, not
        custom development. You connect your data sources, set up your automation and segmentation rules, and adjust
        templates, all through the web interface. Where a custom workflow is needed, tools like Zapier or Make can
        bridge the gap without writing code, connecting Mailchimp to thousands of apps for event-based automation.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot’s role is to translate your business process into Mailchimp’s configuration. That means
        mapping your data fields, defining your segments, setting up the right triggers, and building out the
        automation flows that match your customer journey. For a team in South Florida, this might mean syncing your
        Shopify store, setting up a welcome series for new sign-ups, configuring abandoned cart flows for your most
        popular products, and building dynamic content blocks that swap in local offers based on ZIP code. The work
        is in understanding what matters to your customers and making sure Mailchimp’s automation logic delivers it,
        not in custom code or one-off scripts.</p>
      <p className="text-base text-white shadow-text pt-3">
        Limitations are clear: on the free plan, you’re capped at 250 contacts and one seat, and advanced features
        like predictive segmentation, A/B testing, and SMS marketing are gated to paid tiers (<a id={`tools-marketing-personalized-email-campaigns-mailchimp-configuring-source-mailchimp-com-2${idSuffix}`} href="https://mailchimp.com/resources/free-marketing-features-overview/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Mailchimp</a>,
        as of Oct 25, 2026). If you need more seats, higher send limits, or advanced automation, you’ll need to
        upgrade. But for most small businesses starting out, the configuration work is about connecting your data,
        setting up the right rules, and letting Mailchimp’s built-in logic do the heavy lifting. You can always
        export your data or move up to more complex automation as your needs grow, but the core setup is about
        mapping your business to Mailchimp’s built-in tools.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-you-actually-configure-in-mailchimp" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What you actually configure in Mailchimp
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
              <h2 id="what-you-actually-configure-in-mailchimp-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What you actually configure in Mailchimp
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
