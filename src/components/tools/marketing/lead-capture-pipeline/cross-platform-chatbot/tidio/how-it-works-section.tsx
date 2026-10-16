import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Tidio works by bringing every customer message, no matter the channel, into a
        single,&nbsp;<GlossaryLink slug="unified-inbox">unified inbox</GlossaryLink>. That means live chat on
        your website, WhatsApp, Instagram, Messenger, and email all land in the same dashboard. The platform
        ties each message to a customer profile, so your team always sees the full conversation history, tags,
        and order data in context. This is not a patchwork of integrations; it’s a system built to keep every
        thread together from start to finish.</p>
      <p className="text-md text-white shadow-text pt-3">
        When someone reaches out, Tidio’s AI agent Lyro kicks in first. Lyro instantly reads your support
        content, FAQs, help center articles, even product catalogs, and answers using natural language. If the
        question is routine, Lyro responds right away, pulling details from your own materials. If the
        customer asks something Lyro cannot answer, or if the conversation gets complex, the chat is handed
        off to a human agent with the full transcript attached. No repeated questions, no lost context.</p>
      <p className="text-md text-white shadow-text pt-3">
        The automation layer is called Flows. Flows are built in a visual, drag-and-drop editor, no code
        needed. You set up triggers (like a first visit, a specific page, or an abandoned cart), then design
        the automation: greet the visitor, collect their contact info, answer common questions, or offer a
        discount. Flows can route leads based on answers, escalate to a person, or pass data straight into
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or email tool. For online stores, Flows can
        preview a customer’s cart or order history right inside the chat, and even trigger workflows like
        order edits or refunds on Shopify from the same screen.</p>
      <p className="text-md text-white shadow-text pt-3">
        Here’s the sequence a typical lead follows in Tidio:</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>A customer messages you on WhatsApp, Instagram, or your website chat.</li>
        <li>Tidio’s&nbsp;<GlossaryLink slug="unified-inbox">unified inbox</GlossaryLink>&nbsp;matches the message to a customer profile, pulling in past conversations, tags, and order data.</li>
        <li>Lyro, the AI agent, tries to answer using your help docs or product catalog. If it can answer, the customer gets an instant reply.</li>
        <li>If the question is outside Lyro’s knowledge, the chat is handed to a team member with the full transcript and customer history visible.</li>
        <li>Flows automation may trigger, collecting emails, offering a discount, or routing the conversation based on the customer’s answers.</li>
        <li>All interactions (even from different channels) are tracked in one place, so your team can follow up, assign tags, and see analytics on response time and resolution rates.</li>
      </ol>
      <p className="text-md text-white shadow-text pt-3">
        Lyro learns from more than just FAQs. You can point it at your website, upload PDFs or CSVs, import
        Zendesk articles, or sync product data from Shopify and WooCommerce. This means the AI agent can
        answer detailed, business-specific questions, like order status or product availability, without
        manual scripting.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small teams, the mechanics matter most in two ways. First, you don’t need to hire a developer to
        launch or adjust your chatbot. The visual builder and templates let you set up, test, and tweak
        automations yourself. Second, Tidio’s routing rules keep conversations moving: assign by language,
        topic, or agent availability, so the right person always picks up the thread. Macros (saved replies)
        and proactive triggers (like exit intent or cart abandonment) speed up every step.</p>
      <p className="text-md text-white shadow-text pt-3">
        Reporting is continuous. Tidio tracks first response time, resolution time, and repeat contacts per
        channel and for the customer journey as a whole. You can see how many customer problems Lyro solves,
        where handoffs happen, and which automations drive the most conversions. For e-commerce, the platform
        shows live previews of carts and order histories next to each chat, letting your team act without
        switching tools.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tidio’s mechanics are built for the real world of small business: fast setup, no-code automation, and
        a clear path from first message to qualified lead, across every channel your customers use. The system
        keeps your team focused on high-value conversations, while the AI and automations handle the rest.
        That’s how the mechanics translate into fewer dropped leads, faster replies, and more sales, all
        without growing your headcount.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="every-step-inside-tidio-how-conversations-flow-from-first-ping-to-crm" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Every Step Inside Tidio: How Conversations Flow From First Ping to CRM
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="every-step-inside-tidio-how-conversations-flow-from-first-ping-to-crm" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Every Step Inside Tidio: How Conversations Flow From First Ping to CRM
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
