import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        ActiveCampaign is built as a unified platform that brings together CRM, marketing automation, and reporting
        tools, with a focus on connecting all customer data in one place. Its architecture is designed to centralize
        information from every channel, email, web, e-commerce, and sales, so that personalization and automation
        are always based on the latest data. For a small business, this means every customer interaction, from the
        first website visit to a repeat purchase, is tracked and available to trigger a tailored response.</p>
      <p className="text-base text-white shadow-text pt-3">
        The backbone of ActiveCampaign is its integrated CRM. All contact records, deal histories, and engagement
        data live in a single system, so there is no need to sync or reconcile information across multiple
        databases. This centralization allows automations to pull in real-time context, like purchase history, lead
        score, or last touchpoint, when deciding what message to send or what action to take. The CRM is not a
        bolt-on; it’s deeply connected to the automation and reporting layers, so segmentation and follow-up are
        always grounded in the full customer picture.</p>
      <p className="text-base text-white shadow-text pt-3">
        ActiveCampaign’s segmentation engine can group contacts by any field in the CRM, including <GlossaryLink slug="custom-field" className="text-[#0B162A] hover:underline">custom
        fields</GlossaryLink>, <GlossaryLink slug="contact-tagging" className="text-[#0B162A] hover:underline">tags</GlossaryLink>,
        and behavioral data. Segments update automatically as new data comes in, so a contact who makes a purchase
        or fills out a form is immediately moved into the right group for follow-up. This architecture means that
        personalized email campaigns are always current, without the risk of sending outdated or irrelevant
        messages.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integration is a core strength. ActiveCampaign connects natively to platforms like Shopify, Salesforce,
        Typeform, and Facebook Custom Audiences, and offers over 900 integrations in total (<a id={`tools-marketing-personalized-email-campaigns-activecampaign-architecture-source-activecampaign-com${idSuffix}`} href="https://www.activecampaign.com/compare/salesforce" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">ActiveCampaign</a>,
        as of Oct 26, 2026). These connections allow the system to pull in e-commerce activity, sync leads from
        forms, and even coordinate ad campaigns with email sequences. For example, the Shopify integration enriches
        contact records with order data, enabling post-purchase follow-ups and personalized offers based on real
        buying behavior. The Facebook integration lets you sync audiences for coordinated ad and email outreach, so
        customers see your message across channels before and after an email lands.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation logic in ActiveCampaign is not limited to email. The platform can trigger <GlossaryLink slug="sms-marketing" className="text-[#0B162A] hover:underline">SMS</GlossaryLink> messages,
        assign tasks in the CRM, update deal stages, or send notifications to your team. Its workflows can branch
        based on any data point, segment, score, purchase, or custom field, making it possible to build multi-step
        journeys that adapt in real time to each contact’s journey. This flexibility is key for small businesses
        with unique processes or local requirements.</p>
      <p className="text-base text-white shadow-text pt-3">
        The reporting layer is tightly linked to both the CRM and automation engines. Every campaign, automation,
        and deal feeds into a dashboard that tracks engagement, conversions, and pipeline movement. ActiveCampaign’s
        Autonomous Insights feature uses this data to flag trends, suggest optimizations, and recommend next
        actions, so you do not have to dig through spreadsheets or wait for a specialist to interpret results. The
        system’s architecture is designed to turn every interaction into a measurable, actionable signal.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and compliance are built in, with support for HIPAA-compliant workflows when needed. The
        architecture allows for granular control over data access and permissions, so your team can work confidently
        with sensitive customer information.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses in South Florida, ActiveCampaign’s architecture means you can start small and scale as your
        needs grow. The unified data layer and deep integrations make it possible to add new channels, automate more
        complex journeys, or connect additional tools without reworking your whole system. This is not a patchwork
        of disconnected apps, it’s a single platform designed to deliver real-time, personalized email campaigns
        that keep up with your business, not slow it down.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="activecampaigns-system-architecture-and-integrations-for-real-time-personalization" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                ActiveCampaign’s system architecture and integrations for real-time personalization
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="activecampaigns-system-architecture-and-integrations-for-real-time-personalization-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                ActiveCampaign’s system architecture and integrations for real-time personalization
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
