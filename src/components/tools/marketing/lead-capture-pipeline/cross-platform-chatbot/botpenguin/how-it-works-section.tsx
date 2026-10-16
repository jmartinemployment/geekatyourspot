import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        BotPenguin runs as a single platform that connects every major chat channel your business uses,
        WhatsApp, Instagram DMs, Facebook Messenger, Telegram, SMS, and your website’s live chat, into one
        unified system. The core engine is built to answer, qualify, and route conversations in real time, no
        matter where a prospect first reaches out. This is not a generic chatbot widget on your site.
        BotPenguin’s automation works across all supported channels, and every message, no matter where it
        starts, is tracked and managed as part of one continuous customer journey.</p>
      <p className="text-md text-white shadow-text pt-3">
        When a customer sends a WhatsApp message, comments on a Facebook post, or uses the website chat,
        BotPenguin’s AI responds instantly. The platform uses pre-set rules, custom flows, and AI-powered
        logic to trigger a conversation that feels natural and on-brand. For example, if someone comments on
        your Instagram ad, BotPenguin can automatically DM them, ask qualifying questions, and collect details
        like name, contact info, and what they’re interested in. The same logic holds for direct messages,
        website chats, and SMS inquiries, every entry point leads to a structured qualification flow.</p>
      <p className="text-md text-white shadow-text pt-3">
        The qualification process is not just a static script. BotPenguin lets you build custom conversation
        flows for each channel. You can set up the bot to ask about budget, timeline, company size, or any
        field your sales team needs before a human ever joins the chat. This means every new lead arrives in
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;with the details already filled in, no more
        chasing down missing information or repeating the same questions across platforms. The platform
        supports mapping these responses to your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>’s own
        fields, so the data is ready for the next step without manual entry.</p>
      <p className="text-md text-white shadow-text pt-3">
        BotPenguin’s AI can handle the entire inquiry if it’s routine, answering FAQs, scheduling a call, or
        sending product information, without a human stepping in. But when a question gets complex or a
        high-value lead needs a personal touch, the system flags the conversation and hands it off to a live
        agent. This handoff is seamless: the agent sees the full chat history, all collected details, and the
        context of the inquiry, whether it started on WhatsApp at 10 p.m. or on the website at 8 a.m. That
        means no lost context, no repeated questions, and no frustrated prospects.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses that run campaigns across multiple channels, BotPenguin triggers automated flows the
        second a prospect interacts, commenting on an ad, clicking a link, or filling out a form. The bot can
        reply within seconds, ask the right questions, and push the conversation forward without delay. This
        is especially valuable for after-hours inquiries or when your team is busy. BotPenguin works 24/7,
        capturing every opportunity and qualifying leads without waiting for someone to log in.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once a lead is qualified, BotPenguin pushes the data directly into
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or other connected business tools. The
        integration is real-time and supports mapping to custom fields, so information like product interest,
        requirements, and contact details are ready for follow-up. If your process includes appointment
        booking or demo requests, BotPenguin can collect all necessary details and create the record for your
        team to pick up.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform also supports ongoing engagement. If a returning customer reaches out on any channel,
        BotPenguin recognizes them, updates their record, and continues the conversation with full context.
        This avoids duplicate entries and ensures your team always has the latest information, no matter how
        many times or where the customer makes contact.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in South Florida, this means every chat, whether it starts on Instagram at 2 a.m.
        or via SMS during business hours, gets the same fast, structured, and reliable handling. The team gets
        hours back every week, fewer leads slip through the cracks, and every sales conversation starts with
        the details already captured and qualified.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-botpenguin-actually-handles-conversations-from-first-message-to-qualified-lead" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How BotPenguin Actually Handles Conversations: From First Message to Qualified Lead
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
              <h2 id="how-botpenguin-actually-handles-conversations-from-first-message-to-qualified-lead" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How BotPenguin Actually Handles Conversations: From First Message to Qualified Lead
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
