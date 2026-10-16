import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Tidio’s architecture is designed around the reality that small businesses use many tools and channels.
        At its core, Tidio is a cloud-based platform that connects website chat, social messaging apps
        (WhatsApp, Instagram, Messenger), and email into one system. Every channel is wired into the same
        backend, so a message from any source lands in the&nbsp;<GlossaryLink slug="unified-inbox">unified
        inbox</GlossaryLink>. The system matches users across channels using email, phone, or login, building
        a single customer profile that carries conversation history, order data, tags, and custom properties.</p>
      <p className="text-md text-white shadow-text pt-3">
        This approach means your team never has to switch between apps to see the full customer journey.
        Tidio’s customer panel sits next to every chat, showing contact details, location, previous messages,
        and (for online stores) a live preview of the customer’s cart. That’s not just a convenience, it’s how
        a small team can answer like a much larger one, keeping context and history at their fingertips.</p>
      <p className="text-md text-white shadow-text pt-3">
        The AI engine, Lyro, is tightly integrated with the knowledge sources you control. You feed it with
        articles from your help center, website content, Q&amp;A pairs, CSV or PDF files, or even a direct
        import from Zendesk. For Shopify and WooCommerce, Tidio syncs product catalogs and order data, so the
        AI can answer detailed questions, like what’s in stock, where an order is, or how to handle a return,
        without human intervention. Lyro’s knowledge base updates instantly when you change your support
        content, so answers stay current.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tidio’s automation builder, Flows, sits on top of this architecture. Flows are built visually and can
        be triggered by events across any channel, a new visitor, a specific page, an abandoned cart, or a
        keyword. Automations can collect contact details, qualify leads,
        trigger&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;actions, or route chats to the right
        team member. For every action, Flows can push data into other systems through integrations or APIs, so
        leads and customer details flow downstream without manual re-entry.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integrations are a core part of Tidio’s platform. The system connects directly with tools like
        HubSpot, Drip, Front, ActiveCampaign, Pipedrive, AWeber, Google Ads, and more. For e-commerce, it
        hooks into Shopify and WooCommerce for real-time product and order management. The Premium plan lets
        you integrate with almost any app on the market, so you can sync leads,
        update&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;records, trigger email campaigns, or feed
        chat data into analytics tools. Tidio’s integrations are built to keep your marketing, sales, and
        support stack connected, without needing middleware or custom development.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data is organized around the customer. Every message, tag, order, and automation event is attached to
        the profile, not just the channel. That means you can see and report on the full journey: where a lead
        came from, how they engaged, what they asked, and how the conversation moved across channels.
        Analytics cover response times, resolution rates, conversion metrics, and the performance of both
        human and AI agents. For compliance and quality, Tidio keeps a complete record of every conversation,
        including handoffs and escalations.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams that want to go deeper, Tidio’s Flows and Lyro Actions can trigger
        custom&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;calls, update external databases, or
        automate tasks across your stack. This gives you the flexibility to adapt the system to your workflow,
        whether that’s pushing leads into Salesforce, updating a Google Sheet, or triggering a workflow in
        Zapier.</p>
      <p className="text-md text-white shadow-text pt-3">
        The architecture is built for scale, but stays simple for small teams. You get multilanguage support,
        desktop and mobile apps for on-the-go alerts, and a seat cap that matches the needs of small and
        mid-sized businesses (10 seats on the free plan). Advanced features, like analytics, macros, and
        routing rules, are available as you grow, but don’t add complexity at the start. The focus is on
        keeping everything connected, visible, and actionable, so you can run a real cross-platform chatbot
        pipeline without adding more tools or manual work.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-architecture-behind-tidio-channels-integrations-and-the-data-it-holds" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Architecture Behind Tidio: Channels, Integrations, and the Data It Holds
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
              <h2 id="the-architecture-behind-tidio-channels-integrations-and-the-data-it-holds" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Architecture Behind Tidio: Channels, Integrations, and the Data It Holds
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
