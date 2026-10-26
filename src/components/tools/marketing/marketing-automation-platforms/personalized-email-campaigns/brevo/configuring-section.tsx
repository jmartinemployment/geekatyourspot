import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Configuring Brevo for automated, personalized email campaigns means setting up rules that match your
        real-world customer journeys, not just dropping contacts into a one-size-fits-all drip. Brevo’s automation
        logic is built around triggers, segmentation, and dynamic content blocks, with everything managed through
        its visual workflow editor. Geek @ Your Spot helps you translate your business process into Brevo’s own
        automation flows, so each customer gets a message relevant to their behavior and the moment they are most
        likely to engage.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step in Brevo is mapping out the triggers that matter for your business. Brevo lets you trigger
        emails based on dates (like birthdays or anniversaries), customer actions (such as purchases, downloads, or
        abandoned carts), and engagement signals (like opening a previous email or clicking a link). These triggers
        are not limited to marketing blasts: you can automate <GlossaryLink slug="transactional-email" className="text-[#0B162A] hover:underline">transactional
        emails</GlossaryLink>, follow-up reminders, or re-engagement nudges, all from the same interface. For a
        hospitality business, for example, Brevo’s date-based triggers can handle everything from pre-arrival notes
        to post-stay review requests, with each step tied to fields in the customer profile.</p>
      <p className="text-base text-white shadow-text pt-3">
        Segmentation is the backbone of Brevo’s personalization. Instead of building static lists by hand, you set
        up rules that automatically group contacts by demographics, purchase history, engagement level, or even
        custom fields you define. Brevo’s dynamic segments update in real time as new data comes in, so when a
        customer moves from “prospect” to “buyer,” or from “active” to “lapsed,” their messaging changes without
        manual intervention. This is especially valuable for small teams that cannot afford to rebuild lists every
        week. Geek @ Your Spot works with you to define the segments that match your funnel, then configures Brevo
        to keep them current.</p>
      <p className="text-base text-white shadow-text pt-3">
        Personalization in Brevo goes beyond using a contact’s name. You can insert dynamic content blocks that
        change based on customer data, showing different products, offers, or messages to different segments within
        the same campaign. For example, a single newsletter can highlight accessories to recent buyers and
        introductory offers to new subscribers, all from one template. Brevo’s editor supports conditional logic, so
        you can set rules like “if last purchase was over $50, show premium offer (<a id={`tools-marketing-personalized-email-campaigns-brevo-configuring-source-brevo-com${idSuffix}`} href="https://www.brevo.com/blog/email-marketing-benchmarks/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Brevo</a>,
        as of Oct 26, 2026).” Geek @ Your Spot guides you in setting up these content rules so the automation feels
        tailored, not generic.</p>
      <p className="text-base text-white shadow-text pt-3">
        Send time optimization is another area where Brevo’s automation logic stands out. Rather than scheduling
        every campaign for the same hour, you can enable Brevo’s AI-powered send time feature, which analyzes
        engagement patterns for each contact and delivers messages at the moment they are most likely to open. Case
        data from Brevo shows this can drive open rates up by 15% or more, as seen with AMS’s use of the “Send at
        Best Time” function (<a id={`tools-marketing-personalized-email-campaigns-brevo-configuring-source-brevo-com-2${idSuffix}`} href="https://www.brevo.com/blog/best-voip-services/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Brevo</a>,
        as of Oct 26, 2026). Geek @ Your Spot configures this feature as part of your onboarding, so you get the
        benefit without needing to run manual tests or guess at timing.</p>
      <p className="text-base text-white shadow-text pt-3">
        Brevo’s automation rules also extend to multi-channel messaging. You can set up workflows that move between
        email, SMS, and even WhatsApp, depending on customer preferences or failover logic (for example, sending an
        SMS if an email goes unopened). This is managed from the same automation builder, so your team does not have
        to juggle separate tools or worry about conflicting schedules. Geek @ Your Spot maps your customer
        communication preferences into these workflows, ensuring consistency and reducing the risk of duplicate or
        missed messages.</p>
      <p className="text-base text-white shadow-text pt-3">
        Brevo’s extension mechanism is primarily configuration-based rather than custom scripting or SDKs.
        Integrations are handled through connectors and webhooks, such as triggering surveys from Contentsquare or
        syncing data from platforms like Shopify or Airtable. For most small businesses, this means you can connect
        your website forms, CRM, or e-commerce platform without writing code or hiring a developer. Geek @ Your Spot
        handles the mapping and setup so your data flows cleanly and your triggers fire as intended.</p>
      <p className="text-base text-white shadow-text pt-3">
        Deliverability and sender reputation are protected through built-in tools: Brevo supports DKIM, SPF, and
        DMARC authentication, offers optional dedicated IPs, and provides deliverability testing and inbox warm-up
        features. These are configured during onboarding, not left for later troubleshooting. Geek @ Your Spot
        ensures these technical settings are correct from day one, so your campaigns reach the inbox and your sender
        reputation is not put at risk by misconfiguration.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting and analytics are part of Brevo’s core configuration. You decide which metrics matter, opens,
        clicks, conversions, and Brevo’s dashboard tracks them in real time, with AI highlights for what is working
        and what is not. Geek @ Your Spot sets up your dashboards and reporting views so you can act on the data,
        not just collect it. This closes the loop from campaign setup to measurable business outcomes.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses that need to manage multiple brands or teams, Brevo allows for multi-user access and
        sub-account management. Permissions and roles are assigned in the platform, so you can control who sees or
        edits which campaigns and data. This is especially useful for franchises, agencies, or businesses with
        separate locations.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, getting Brevo working for your business is about matching its automation logic, triggers,
        segmentation, dynamic content, send time optimization, and deliverability tools, to your real customer
        journeys. Geek @ Your Spot’s role is to translate your workflow into Brevo’s configuration, integrate your
        data sources, and ensure your campaigns are both effective and compliant, so your team spends less time on
        manual work and more time on growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-brevo-for-automated-personalized-campaigns" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What gets configured in Brevo for automated, personalized campaigns
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
              <h2 id="what-gets-configured-in-brevo-for-automated-personalized-campaigns-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What gets configured in Brevo for automated, personalized campaigns
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
