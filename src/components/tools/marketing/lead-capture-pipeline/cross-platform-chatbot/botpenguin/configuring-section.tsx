import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        BotPenguin stands out for its direct, no-code configuration model. Every rule, trigger, and workflow
        is set up in the BotPenguin dashboard, there is no SDK or scripting layer to extend with code.
        Instead, all automation logic is built from the platform’s own menus, templates, and channel-specific
        settings. For a small business in South Florida, this means you get a system that can be launched and
        maintained by non-developers, but the real value comes from how those configuration choices are mapped
        to your business process by Geek @ Your Spot LLC.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first layer of configuration is channel setup. BotPenguin connects WhatsApp, Instagram DMs,
        Facebook Messenger, Telegram, SMS, website live chat, and even phone via voice AI. Each channel brings
        its own entry points, like WhatsApp opt-ins, Instagram post comments, or a website chat widget.
        BotPenguin’s platform lets you decide which channels are active, how each one greets new contacts, and
        what information is collected up front. For example, you can set it to capture a name, email, and
        intent on WhatsApp, while your website chat might focus on product interest and callback requests.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation rules in BotPenguin are built around triggers and flows. Triggers can be as simple as a new
        message on any channel, a comment on a Facebook or Instagram post, or a specific keyword in a chat.
        Each trigger launches a prebuilt or custom flow, this is where the platform’s automation logic lives.
        Flows can branch based on answers, ask qualification questions, and push data to
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>. BotPenguin supports mapping answers to
        specific&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;fields, so when a prospect gives their
        budget or timeline, it lands in the right place for your sales team to act on. Geek @ Your Spot LLC
        configures these flows so every qualifying step, from initial greeting to handoff, matches your
        pipeline and sales process.</p>
      <p className="text-md text-white shadow-text pt-3">
        One key to BotPenguin’s strength is&nbsp;<GlossaryLink slug="unified-inbox">unified
        inbox</GlossaryLink>&nbsp;management. Instead of toggling between WhatsApp, Instagram, and web chat
        tabs, every conversation lands in a single dashboard. Rules here control how chats are routed, by
        channel, by lead score, or by escalation need. If a chat needs a human, BotPenguin allows instant
        handoff to a live agent, preserving the full conversation context. Geek @ Your Spot LLC sets up routing
        rules and escalation logic so urgent leads or complex questions get flagged and assigned to the right
        team member without delay.</p>
      <p className="text-md text-white shadow-text pt-3">
        BotPenguin handles automation for marketing and sales, not just support. You can set up automated DMs,
        comment replies, and broadcast messages to turn social engagement into leads. The platform’s rules
        allow you to trigger flows from social comments, schedule outbound campaigns, and score leads based on
        their responses or channel of origin. Geek @ Your Spot LLC works with you to define these triggers and
        scoring models to fit your actual sales cycle, not just generic best practices.</p>
      <p className="text-md text-white shadow-text pt-3">
        What you cannot do in BotPenguin is write your own code or add custom extensions beyond what the
        platform supports. There is no&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;for building new
        integrations from scratch, and all integrations (like HubSpot,
        Zoho&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, Shopify, Microsoft Teams, and over 100 others)
        are managed through the dashboard’s native interface. This keeps support and updates simple, but it
        means every workflow must be mapped to the platform’s configuration model. Geek @ Your Spot LLC’s role is
        to translate your process into BotPenguin’s options, ensuring your lead capture, qualification, and
        handoff logic work the way your team does business.</p>
      <p className="text-md text-white shadow-text pt-3">
        A typical deployment covers these configuration steps:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Connect all messaging and chat channels your business uses (WhatsApp, Instagram, Facebook, website, SMS, Telegram, phone).</li>
        <li>Set up welcome messages, qualification questions, and lead capture flows for each channel.</li>
        <li>Build automation rules for triggers (like new messages, keywords, or social comments) to launch relevant flows.</li>
        <li>Map collected data fields to your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or sales tool, using BotPenguin’s built-in integrations.</li>
        <li>Configure&nbsp;<GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink>, routing, and escalation logic to move hot prospects to a human agent or the right pipeline stage.</li>
        <li>Test handoff from bot to live agent, making sure context and conversation history are preserved.</li>
        <li>Adjust flows and rules as your business learns what works, with Geek @ Your Spot LLC providing ongoing tuning and support.</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        For a small business, the real challenge is not just picking a chatbot, but making sure it runs the
        way your team works and connects to your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, calendar,
        and marketing stack. BotPenguin’s configuration tools are flexible enough for most lead capture and
        sales automation needs, but the expertise from Geek @ Your Spot LLC is what ensures no lead slips through
        the cracks and your staff spends less time copying and more time closing.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-botpenguin-automation-rules-channel-logic-and-how-geek-your-spot-makes-it-fit" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in BotPenguin: Automation Rules, Channel Logic, and How Geek @ Your Spot LLC Makes It Fit
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
              <h2 id="what-gets-configured-in-botpenguin-automation-rules-channel-logic-and-how-geek-your-spot-makes-it-fit" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in BotPenguin: Automation Rules, Channel Logic, and How Geek @ Your Spot LLC Makes It Fit
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
