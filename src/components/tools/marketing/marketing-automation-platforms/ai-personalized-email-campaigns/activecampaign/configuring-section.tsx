import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        ActiveCampaign lets you set up automation rules, segmentation criteria, and lead scoring logic that match
        your sales and marketing process. The platform is built around configuration, not custom code, so you define
        how contacts move from inquiry to deal, what triggers a follow-up, and how emails are personalized based on
        real customer data. Geek @ Your Spot configures these controls to fit your workflow, ensuring ActiveCampaign
        runs with your existing systems and data.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core of ActiveCampaign’s automation is its visual workflow builder. Here, you set up sequences that
        react to customer actions, like submitting a form, clicking a link, or reaching a certain lead score. Each
        workflow starts with a trigger: a new subscriber, a purchase, or a custom event from your CRM or e-commerce
        system. You then define actions, send a targeted email, assign a task to sales, move a deal in the pipeline,
        or update a contact’s segment. This structure means your team does not have to remember to send the next
        message or update a spreadsheet; the system does it as soon as the data changes.</p>
      <p className="text-base text-white shadow-text pt-3">
        Segmentation in ActiveCampaign is granular. You can group contacts by behavior (like recent purchases or web
        visits), demographics, lead score, or any custom field you define. Tags and dynamic segments update
        automatically as contacts interact with your business. For example, a lead who visits your pricing page and
        opens three emails can be routed into a high-priority segment for sales follow-up, while a customer who has
        not engaged in six months can trigger a re-engagement sequence. This means your campaigns only go to the
        right people, with content that matches their stage and intent.</p>
      <p className="text-base text-white shadow-text pt-3">
        Lead scoring is set up with rules based on what matters for your business. You assign points for actions,
        opening emails, clicking links, visiting key pages, or completing forms. You can also set thresholds: when a
        contact’s score crosses a line, ActiveCampaign can automatically create a deal, notify a rep, or shift the
        contact into a new segment. This keeps your team focused on the most promising leads and ensures no one
        slips through the cracks because someone missed a signal.</p>
      <p className="text-base text-white shadow-text pt-3">
        ActiveCampaign’s automation logic extends to sales pipeline management. You define pipeline stages, deal
        values, and tasks. The system can move deals between stages based on completed actions, automatically assign
        tasks, and even trigger emails or texts at key points. For example, after a proposal is sent, ActiveCampaign
        can schedule a follow-up email and remind the sales rep to call in three days. This removes the risk of
        forgetting key steps and keeps every opportunity moving forward.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s integrations are set up through configuration, not custom development. ActiveCampaign
        connects natively to Shopify, Salesforce, Facebook Custom Audiences, Typeform, and over 900 other platforms
        (<a id={`tools-marketing-personalized-email-campaigns-activecampaign-configuring-source-activecampaign-com${idSuffix}`} href="https://www.activecampaign.com/compare/salesforce" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">ActiveCampaign</a>,
        as of Oct 26, 2026). This means your customer data, order history, and engagement signals flow automatically
        into the system, powering real-time personalization and reporting. Geek @ Your Spot handles the mapping and
        configuration, so your business logic is reflected in every automation without manual data wrangling.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses with unique needs, ActiveCampaign offers an <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink> for
        deeper integration. Most small teams in Miami-Dade, Broward, and Palm Beach do not need to write code
        because the core automation builder and integrations cover typical marketing and sales workflows. Where a
        custom trigger or data sync is needed, Geek @ Your Spot configures the connection to your other systems so
        that ActiveCampaign acts on every relevant data point.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting and optimization are also configurable. You set up dashboards to track <GlossaryLink slug="open-rate" className="text-[#0B162A] hover:underline">open
        rates</GlossaryLink>, click-throughs, deals won, and campaign ROI. The platform’s AI tools flag trends and
        suggest changes, but you decide which metrics matter and how they are displayed. This gives your team a live
        view of what is working and what needs attention, without waiting for end-of-month reports or wrestling with
        spreadsheets.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, ActiveCampaign is a configuration-driven platform that adapts to your business rules, not the
        other way around. Geek @ Your Spot’s role is to translate your sales and marketing process into automation
        logic, segmentation, and triggers that run in ActiveCampaign, so you get consistent, relevant email
        campaigns with less manual effort and fewer missed opportunities.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-activecampaign-for-personalized-automation-and-how-it-adapts-to-your-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What gets configured in ActiveCampaign for personalized automation and how it adapts to your business
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
              <h2 id="what-gets-configured-in-activecampaign-for-personalized-automation-and-how-it-adapts-to-your-business-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What gets configured in ActiveCampaign for personalized automation and how it adapts to your business
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
