import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Mailchimp’s platform is built as an all-in-one marketing hub that centralizes campaign management, audience
        data, and analytics. Its architecture supports seamless integration with popular business tools, making it a
        practical fit for small businesses that already rely on platforms like Shopify, QuickBooks, or Salesforce.
        The result is a system where your marketing, sales, and customer data come together in one place, reducing
        manual data entry and the risk of errors.</p>
      <p className="text-base text-white shadow-text pt-3">
        At its core, Mailchimp organizes everything around the concept of an audience. Each audience holds contact
        records, which can include names, email addresses, purchase history, engagement metrics, and <GlossaryLink slug="custom-field" className="text-[#0B162A] hover:underline">custom
        fields</GlossaryLink> like birthdays or preferences. You can tag and segment these records however you need,
        by source, behavior, or any other data point you sync in. The platform’s predictive segmentation and
        AI-driven analytics use this data to identify high-value customers, spot <GlossaryLink slug="customer-churn" className="text-[#0B162A] hover:underline">churn</GlossaryLink> risks,
        and suggest targeted campaigns, all from within the same dashboard.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mailchimp’s integrations are extensive and practical. You can sync customer, product, and order data from
        Shopify, WooCommerce, and Wix, pulling in real-time updates on purchases, cart actions, and browsing
        behavior. This allows you to trigger automations, like abandoned cart emails or product recommendations,
        without exporting or importing files. QuickBooks integration brings financial data into your marketing,
        letting you target campaigns based on invoice status or payment history. Salesforce and Stripe connections
        let you keep sales and payment data in sync, so your segments always reflect the latest activity.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform also connects to hundreds of other apps through <Link id={`tools-marketing-personalized-email-campaigns-mailchimp-architecture-zapier${idSuffix}`} href="/tools/marketing/zapier" className="text-[#0B162A] hover:underline">Zapier</Link>,
        Make, and direct integrations. This means you can automate email sends based on form submissions, calendar
        bookings, or <GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink> updates,
        building a workflow that matches your business’s unique processes. For example, a Typeform integration lets
        you add new leads directly to Mailchimp, triggering a welcome series without manual intervention.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mailchimp’s <GlossaryLink slug="data-model" className="text-[#0B162A] hover:underline">data model</GlossaryLink> is
        designed for flexibility and scale. The free plan supports up to 250 contacts and one audience, with limits
        on monthly sends and user seats (<a id={`tools-marketing-personalized-email-campaigns-mailchimp-architecture-source-mailchimp-com${idSuffix}`} href="https://mailchimp.com/resources/free-marketing-features-overview/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Mailchimp</a>,
        as of Oct 25, 2026). As you move to paid plans, you get more audiences, higher send limits, and advanced
        features like role-based access, custom-coded templates, and priority support. This tiered structure lets
        small teams start with a low commitment and grow into more complex setups as their needs change.</p>
      <p className="text-base text-white shadow-text pt-3">
        For managing content and design, Mailchimp offers a built-in email builder, a creative assistant for
        on-brand graphics, and deep integration with Canva for seamless design-to-send workflows. You can use
        prebuilt templates or code your own, and dynamic content blocks allow one campaign to serve multiple
        segments with personalized offers, images, or product recommendations. Alt-text generation and stock image
        suggestions help keep emails accessible and visually appealing, even for teams without a designer.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation logic in Mailchimp is handled through triggers and flows. You can set automations to fire based
        on any data point, like a purchase, a website visit, or a change in customer status. The Customer Journey
        Builder lets you map out multi-step workflows visually, and AI-driven recommendations suggest next actions
        based on your audience’s behavior. All of this operates inside Mailchimp’s own infrastructure, so you don’t
        need to string together multiple apps or worry about data getting out of sync.</p>
      <p className="text-base text-white shadow-text pt-3">
        Analytics and reporting are first-class features. Mailchimp’s Analytics AI automatically analyzes campaign
        performance, audience segments, and revenue impact, surfacing actionable insights without requiring you to
        build custom dashboards. Benchmarking tools let you see how your results stack up against industry peers,
        and every campaign’s data is available for export or further analysis if you need it.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and compliance are handled within the platform as well. Mailchimp supports role-based permissions,
        granular unsubscribe options, and age-gated signup forms for regulated industries. These features help small
        businesses stay compliant without adding extra steps or outside tools.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, Mailchimp’s architecture is built for integration, data-driven automation, and ease of use. It
        brings together the tools and data a small business needs to run effective, personalized email campaigns,
        while scaling up as your business grows. The platform’s focus on centralizing data, automating manual tasks,
        and connecting with the systems you already use makes it a practical choice for teams that want to do more
        with less effort.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="mailchimps-architecture-integrations-and-data-model-for-small-business-marketing" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Mailchimp’s architecture, integrations, and data model for small business marketing
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
              <h2 id="mailchimps-architecture-integrations-and-data-model-for-small-business-marketing-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Mailchimp’s architecture, integrations, and data model for small business marketing
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
