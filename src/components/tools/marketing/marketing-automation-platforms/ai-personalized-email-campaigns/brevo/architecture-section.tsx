import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Brevo’s architecture is built to centralize customer data, automate messaging across channels, and provide a
        single source of truth for campaign performance. The platform is cloud-based, so your team accesses it from
        anywhere, and all updates, automations, and analytics happen in real time. This design supports both simple
        use cases, like a single-person marketing team, and more complex setups, such as multi-location businesses
        or organizations with several brands under one roof.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the core is Brevo’s contact database. Every email, phone number, and interaction is stored in a unified
        profile, with unlimited contacts even on the free tier. The database is not just a static list; it is a
        living record that tracks every touchpoint, segment membership, and behavioral trigger. You can store <GlossaryLink slug="custom-field" className="text-[#0B162A] hover:underline">custom
        fields</GlossaryLink> for each contact, such as preferred language, last purchase, or loyalty status, and
        use these attributes to drive segmentation, personalization, and automation.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data flows in and out of Brevo through direct integrations, <GlossaryLink slug="webhooks" className="text-[#0B162A] hover:underline">webhooks</GlossaryLink>,
        and <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">APIs</GlossaryLink>. The platform
        connects natively to dozens of popular tools, such as Shopify, Airtable, and Contentsquare, so you can sync
        customer, product, and order data automatically. For example, when you connect Shopify Markets, Brevo pulls
        in localized pricing, currencies, and purchase behavior for each region, letting you automate campaigns that
        reflect the right language and offer for every market. Webhooks and open APIs allow you to trigger messages
        or update contact records based on events in your other systems, without manual intervention.</p>
      <p className="text-base text-white shadow-text pt-3">
        Brevo supports multi-channel messaging from a single dashboard. Email is at the center, but the same data
        powers SMS, WhatsApp, Facebook Messenger, and live chat. This unified approach means that a customer’s
        engagement on one channel can trigger a follow-up on another, or that a single campaign can reach people on
        their preferred device. For businesses serving a diverse local market, this flexibility means you can meet
        customers where they are, without juggling multiple tools or risking inconsistent messaging.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation logic in Brevo is rules-based and fully configurable. You set the triggers, conditions, and
        actions, such as “send a <GlossaryLink slug="welcome-series" className="text-[#0B162A] hover:underline">welcome
        email</GlossaryLink> when someone joins the list,” “text a reminder if they have not opened in a week,” or
        “move a contact to a new segment after a purchase.” These workflows can grow as your business does, handling
        everything from basic <GlossaryLink slug="drip-marketing" className="text-[#0B162A] hover:underline">drip
        campaigns</GlossaryLink> to complex, branching <GlossaryLink slug="customer-journey" className="text-[#0B162A] hover:underline">customer
        journeys</GlossaryLink>. The logic is transparent and auditable, so you can see at a glance why a message
        was sent or a segment updated.</p>
      <p className="text-base text-white shadow-text pt-3">
        Analytics and reporting are native to the platform. Brevo tracks every open, click, conversion, and bounce,
        and aggregates these metrics in real time. You can view performance at the campaign, segment, or contact
        level and drill down by geography, device, or channel. AI-enhanced dashboards highlight trends and flag
        underperforming campaigns, so you know what is working and where to adjust. For businesses tracking <GlossaryLink slug="return-on-investment" className="text-[#0B162A] hover:underline">ROI</GlossaryLink>,
        Brevo’s reporting ties each conversion to the campaign and channel that drove it, making it easier to
        justify spend and optimize future efforts.</p>
      <p className="text-base text-white shadow-text pt-3">
        Deliverability and compliance are built into Brevo’s infrastructure. The platform handles authentication
        protocols (DKIM, SPF, DMARC) and offers dedicated IPs for high-volume senders who need to control their
        sender reputation. List hygiene tools, email warm-up, and bounce monitoring are available to keep your
        sender score high and your messages out of spam. The system monitors for throttling and other risks at the
        API layer, alerting you before a deliverability issue can impact results.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and privacy are addressed at every layer. Brevo’s client portal supports secure document uploads
        and proper management of sensitive files. Every request, document, and message is logged against the client
        record, so you have a full audit trail for compliance and customer service. The platform supports multiple
        user roles and permissions, so teams can collaborate without risking data leaks or unauthorized access.</p>
      <p className="text-base text-white shadow-text pt-3">
        Brevo’s architecture is designed for growth. The system can handle large volumes of contacts, emails, and
        triggers without slowing down. You can add users, connect new channels, and expand <GlossaryLink slug="automation-workflow" className="text-[#0B162A] hover:underline">automation
        workflows</GlossaryLink> as your business scales, all without migrating data or rebuilding your setup. For
        businesses that want to run multiple brands, locations, or business units, Brevo supports sub-accounts and
        centralized dashboards, keeping everything organized and visible.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, this means a local business in South Florida can start with basic <GlossaryLink slug="email-automation" className="text-[#0B162A] hover:underline">email
        automation</GlossaryLink> and grow into multi-channel, data-driven campaigns as needs evolve. The
        integrations, unified <GlossaryLink slug="data-model" className="text-[#0B162A] hover:underline">data model</GlossaryLink>,
        and automation engine work together to keep customer communications relevant, timely, and consistent,
        without the overhead of managing disconnected tools. With Brevo, your marketing stack is streamlined, your
        data is actionable, and your team can focus on strategy, not maintenance.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-sits-underneath-brevo" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What sits underneath Brevo
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-sits-underneath-brevo-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What sits underneath Brevo
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
