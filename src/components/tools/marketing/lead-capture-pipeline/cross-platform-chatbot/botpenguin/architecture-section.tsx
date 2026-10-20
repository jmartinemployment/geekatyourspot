import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        BotPenguin is built as a no-code, multichannel automation platform designed to unify and manage
        customer conversations across all key messaging and chat platforms. At its core, the architecture is
        about centralizing inbound and outbound communication, keeping every interaction and data point
        connected, and making sure nothing falls through the cracks. This is not a patchwork of plugins or a
        set of isolated widgets, BotPenguin is engineered to work as a single control center for every chat
        channel a small business uses.</p>
      <p className="text-md text-white shadow-text pt-3">
        The system’s backbone is its&nbsp;<GlossaryLink slug="unified-inbox" className="text-[#0B162A] hover:underline">unified inbox</GlossaryLink>,
        which collects and manages all conversations from WhatsApp, Instagram DMs, Facebook Messenger,
        Telegram, website chat, and SMS. Every message, comment, or DM lands in the same workspace, so your
        team never has to jump between apps or lose track of a conversation. The platform merges contact
        profiles across channels, so when a customer reaches out through multiple platforms, their history and
        details are combined into one view. This eliminates duplicates and gives your sales or support team a
        single, up-to-date record for each lead or customer.</p>
      <p className="text-md text-white shadow-text pt-3">
        BotPenguin’s integration layer is extensive. It connects directly to leading CRMs like HubSpot,
        Zoho&nbsp;CRM, Nutshell, and others, pushing qualified leads,
        mapped fields, and conversation histories into the systems your business already uses. The platform
        also integrates with cloud telephony (like Voxloud), email marketing tools (<Link id={`tools-marketing-cross-platform-chatbot-botpenguin-architecture-mailchimp${idSuffix}`} href="/tools/marketing/mailchimp" className="text-[#0B162A] hover:underline">Mailchimp</Link>), e-commerce
        (Shopify), and helpdesk software (Zendesk). Over 100 integrations are supported, so you can automate
        handoffs, trigger workflows, and sync data between your chat channels and every major business tool.</p>
      <p className="text-md text-white shadow-text pt-3">
        For voice and phone, BotPenguin adds AI-powered voice agents that can qualify inbound and outbound
        calls, log them to your&nbsp;CRM, and escalate to a human
        agent when needed. Microsoft Teams integration lets you handle internal lead handoffs and keep
        pipeline updates current. Every integration is managed through a no-code dashboard, so setup does not
        require a developer and can be adjusted as your business grows.</p>
      <p className="text-md text-white shadow-text pt-3">
        The automation engine behind BotPenguin supports building custom conversation flows, qualification
        logic, and routing rules for each channel. You define what questions to ask, how to map responses to
        your&nbsp;CRM, and when to escalate to a human. The platform
        supports AI-powered responses, dynamic flows, and conditional triggers, so the bot can adapt to the
        customer’s intent and needs in real time. Businesses can train the bot on their own data, FAQs, and
        documents, making responses more accurate and personalized.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security and data integrity are built in. Every conversation, captured data point, and customer
        profile is held within the platform and synced to your connected systems. The architecture is designed
        to keep context intact, so when a chat is handed off to a live agent or moved to another channel, the
        full history and qualification details go with it.</p>
      <p className="text-md text-white shadow-text pt-3">
        BotPenguin is also designed for continuous engagement. It recognizes returning customers, updates
        their records, and maintains a live view of all interactions, no matter the channel. This supports
        ongoing marketing, service, and sales efforts, giving your team a complete picture of every customer
        journey.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in Miami-Dade, Broward, and West Palm Beach, the result is a single platform that
        connects every chat, voice, and messaging channel to the systems you already use. No more juggling
        tabs, losing leads between inboxes, or manually copying details into
        your&nbsp;CRM. BotPenguin’s architecture is built to fit into
        your environment, automate what can be automated, and keep your team focused on conversations that
        drive revenue.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-powers-botpenguin-the-platforms-real-architecture-and-integrations" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Powers BotPenguin: The Platform’s Real Architecture and Integrations
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
              <h2 id="what-powers-botpenguin-the-platforms-real-architecture-and-integrations-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Powers BotPenguin: The Platform’s Real Architecture and Integrations
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
