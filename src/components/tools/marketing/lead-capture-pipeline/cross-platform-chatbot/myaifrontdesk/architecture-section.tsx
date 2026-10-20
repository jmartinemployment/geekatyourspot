import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        My AI Front Desk is built as a
        true&nbsp;<GlossaryLink slug="omnichannel" className="text-[#0B162A] hover:underline">omnichannel</GlossaryLink>&nbsp;communication engine,
        designed to unify fragmented messaging and voice into a single, actionable system. At the core is its
        Unified Inbox, which serves as the operational hub for all inbound and outbound interactions. Every
        channel, website chat, SMS, Facebook Messenger, Instagram DMs, phone calls, and email, connects to
        this hub. Each conversation is tagged by source and linked to a unique contact record, creating a
        comprehensive timeline that updates automatically with every new message or call.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform’s architecture prioritizes zero manual data entry. Every interaction is transcribed,
        structured, and saved to the&nbsp;CRM&nbsp;without staff
        intervention. Calls are recorded, transcribed, and summarized; chats and emails are parsed for intent,
        urgency, and outcome. This data is then mapped to each contact’s timeline, so
        the&nbsp;CRM&nbsp;stays current without anyone needing to type
        in notes or update fields. The system listens to every call and reads every message, extracting
        structured data, contact details, conversation intent, next steps, and making it available for
        reporting and automation.</p>
      <p className="text-md text-white shadow-text pt-3">
        My AI Front Desk’s&nbsp;CRM&nbsp;is not a bolt-on or a
        separate tool. It is built into the platform, auto-populated from real conversations. There is no need
        to set up a separate&nbsp;CRM&nbsp;or integrate a third-party
        database just to track leads. For teams using HubSpot, Salesforce, or Pipedrive, My AI Front Desk
        pushes conversation data directly into those systems, keeping them up to date without extra work from
        your reps. This means your sales or service team can keep working in the tools they already know,
        while My AI Front Desk keeps the records clean and current in the background.</p>
      <p className="text-md text-white shadow-text pt-3">
        The data model is designed for real-world lead capture. Each contact’s profile holds every call, text,
        email, chat, and form submission in one timeline. The AI enriches these records with scores for
        intent, fit, urgency, and engagement, so you always know which leads are most likely to convert. The
        system evaluates every form submission and conversation for buying signals, and can trigger follow-up
        actions or route the lead to the right teammate. This structure supports
        true&nbsp;<GlossaryLink slug="lead-scoring" className="text-[#0B162A] hover:underline">lead scoring</GlossaryLink>&nbsp;and prioritization, not
        just basic tagging or manual sorting.</p>
      <p className="text-md text-white shadow-text pt-3">
        Reporting and analytics are built on this unified data layer. My AI Front Desk tracks calls answered,
        appointments booked, revenue generated, conversion rates, and source attribution by channel. The
        &quot;Saved Revenue&quot; metric estimates dollars recovered from leads that would have been lost,
        such as after-hours calls that now convert thanks to the AI’s instant response. Performance can be
        sliced by date range, channel, or booking volume, giving you clear insight into where growth is coming
        from and where bottlenecks remain. This is not just a dashboard for vanity metrics; it is daily
        decision support for revenue, lead source performance, and after-hours coverage.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation logic is built in at every step. The platform can trigger SMS or email sequences after a
        call or chat, assign contacts to nurture queues, create tickets, or send reminders. The AI adjusts
        messaging based on caller or visitor responses, handles objections, and asks follow-up questions as
        needed. When a conversation requires a human touch, the system escalates immediately, with fast
        handoff and audio alerts to ensure nothing urgent sits idle. The architecture supports continuous
        scaling, no matter how many channels or contacts you add, every new interaction lands in the right
        place, with context and next steps ready for your team.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-sits-under-the-hood-my-ai-front-desks-core-architecture-integrations-and-data-model" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Sits Under the Hood: My AI Front Desk’s Core Architecture, Integrations, and Data Model
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
              <h2 id="what-sits-under-the-hood-my-ai-front-desks-core-architecture-integrations-and-data-model-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Sits Under the Hood: My AI Front Desk’s Core Architecture, Integrations, and Data Model
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
