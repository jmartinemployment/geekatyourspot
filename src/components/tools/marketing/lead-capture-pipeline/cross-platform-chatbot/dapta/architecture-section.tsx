import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Dapta’s platform is built for small and medium-sized businesses that need to unify customer
        conversations without hiring developers or adding new software silos. The architecture centers on a
        no-code, modular agent that connects to every major channel, voice, SMS, WhatsApp, and web chat, while
        syncing data in real time with your existing&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>,
        calendar, and support stack. This is not a bolt-on chatbot or a single-channel widget. Dapta runs as a
        true&nbsp;<GlossaryLink slug="omnichannel">omnichannel</GlossaryLink>&nbsp;engine, holding the full
        conversation and customer record across every touchpoint.</p>
      <p className="text-md text-white shadow-text pt-3">
        At the core is Dapti, Dapta’s autonomous agent builder. Dapti takes plain-language input about your
        business, your hours, services, qualifying questions, and escalation rules, and configures the agent
        to match. There is no code to write, no developer to hire, and no need to manage separate logic for
        each channel. Dapta’s agent is trained on your business’s own materials, so it answers with your
        knowledge, not generic scripts. The agent can handle both inbound and outbound calls, chat, and
        messaging, switching channels as needed and keeping the conversation thread intact.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is where Dapta’s architecture shows its depth. The platform connects natively to over
        1,000 business tools, including HubSpot, Salesforce, Google Calendar, Shopify, Zendesk, and Shopee.
        This means every booking, message, and lead detail flows directly into the systems your team already
        uses. When a customer books an appointment, Dapta checks the live calendar, locks the slot, and writes
        the event back to your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, no manual entry, no risk of
        double-booking or missed follow-up. Structured data from every conversation, names, intent, budget,
        timeline, lands as&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;fields, not as unsearchable
        transcripts.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security and reliability are built in. Dapta is SOC 2 certified, trusted by over 50,000 companies and
        100,000 users, and designed to scale without losing control or visibility. Every conversation,
        booking, and transfer is logged and reviewable, with analytics available for management and continuous
        improvement. The system supports bilingual service natively, with English and Spanish handled out of
        the box and additional languages supported for broader markets. For teams serving both US and Latin
        American customers, Dapta’s voice models handle regional accents and code-switching without extra
        setup.</p>
      <p className="text-md text-white shadow-text pt-3">
        Dapta’s routing and escalation logic is configurable by the business, not the vendor. You set the
        rules for when a conversation needs a human, by keyword, sentiment, or lead score, and when that
        handoff happens, the agent passes the full conversation history, not just a name and number. This
        ensures that complex or sensitive cases do not get lost in the shuffle, and that your staff picks up
        every thread with full context. Emergency calls, high-value leads, and after-hours inquiries are
        routed per your rules, with each transfer logged to
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses in Miami-Dade, Broward, and West Palm Beach, where customers expect fast, accurate, and
        bilingual responses across multiple channels, Dapta’s architecture closes the gaps that other tools
        leave open. The platform’s ability to unify voice, chat, and messaging in one place, while syncing
        with the tools you already run, means you get a single source of truth for every customer interaction.
        No more fragmented records, missed callbacks, or repeated questions. Dapta holds the conversation and
        the data, so your team can focus on closing deals, not chasing details.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="inside-the-engine-daptas-architecture-and-integrations" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Inside the Engine: Dapta’s Architecture and Integrations
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
              <h2 id="inside-the-engine-daptas-architecture-and-integrations" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Inside the Engine: Dapta’s Architecture and Integrations
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
