import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        My AI Front Desk is built for small businesses that need to control every inbound conversation without
        adding complexity or technical overhead. The platform’s configuration happens inside its own
        interface, no code, no scripting, and no developer time required. Every rule and automation is set up
        using the options and workflows My AI Front Desk itself provides. There is no SDK or external
        scripting layer; everything is managed through the product’s own admin tools. This is a deliberate
        choice: it means you get a system that is fast to launch, easy to adapt, and does not require you to
        hire or train technical staff just to keep up with changes.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core of My AI Front Desk’s automation is its channel unification and inbox logic. You start by
        connecting all the channels your customers use, website chat, SMS, Facebook Messenger, Instagram DMs,
        phone, and email, directly in the “Channels” tab. Once connected, every conversation, regardless of
        source, lands in a single Unified Inbox. This is not just a feed. Each thread carries the channel
        label, visitor identity, and full chat history. Operators can reply, escalate, or close the
        conversation from one place, and the system keeps read/unread status and timestamps for tracking.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation logic in My AI Front Desk is rule-driven, not open-ended scripting. You define how the AI
        responds to different types of inbound messages, how it qualifies leads, and what triggers escalation
        to a human. For example, you set up escalation rules so that when the AI detects high-intent signals,
        a prospect asking detailed product questions or mentioning a competitor, it can instantly alert your
        team with an audio notification and move the conversation into the priority queue. This ensures that
        the hottest leads get human attention right away, while lower-intent inquiries are handled
        automatically.</p>
      <p className="text-md text-white shadow-text pt-3">
        Lead qualification is another area you configure up front. My AI Front Desk lets you define what data
        to capture, intent, budget, timeline, contact details, before a visitor leaves the page or ends a
        call. The system asks follow-up questions in real time, not just canned responses. You decide which
        answers trigger further automation, like booking an appointment, sending a follow-up SMS, or syncing
        the lead to your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>. The AI can book appointments live,
        check calendar availability, and log the outcome automatically. If a conversation needs to be routed
        to a specialist, you set those routing rules in the admin panel, no hand-coding, just clear options.</p>
      <p className="text-md text-white shadow-text pt-3">
        Post-conversation automation is robust but always configuration-based. You can trigger multi-step SMS
        or email sequences after certain outcomes, like a successful call or a completed form. These sequences
        are set up to stop automatically when a prospect replies, so you do not risk spamming someone who has
        already engaged. The AI handles replies to these follow-ups as well, keeping the pipeline moving
        without manual intervention.</p>
      <p className="text-md text-white shadow-text pt-3">
        My AI Front Desk’s extension mechanism is its native integration with major CRMs, HubSpot, Salesforce,
        and Pipedrive. Data from every call, chat, or message flows directly into
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, with no need for manual entry or middleware.
        There is no&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;or custom connector layer exposed to
        the user. The platform’s focus is on reliability and speed: data is pushed in real time, and
        the&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;record is auto-enriched with context,
        intent, and outcome from the conversation. This means your sales team always has the latest
        information without lifting a finger.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses in Miami-Dade, Broward, and West Palm Beach, the real work is in configuring these
        rules and automations to match your real-world process. Geek @ Your Spot steps in here, not to code,
        but to translate your team’s current workflow into My AI Front Desk’s own configuration model. This
        covers mapping your existing lead stages, escalation paths, and qualification criteria into the
        system, and then testing each flow with real data. The outcome is a live deployment that matches your
        business logic, not a generic chatbot that needs constant babysitting.</p>
      <p className="text-md text-white shadow-text pt-3">
        The result is a platform that stays flexible as your needs change. You can update qualifying
        questions, escalation triggers, or follow-up sequences in minutes, without breaking anything or
        waiting on outside help. If your team wants to try a new channel, say, adding WhatsApp or another
        inbox, the process is the same: connect it in the Channels tab, set the rules, and go live. My AI
        Front Desk is deliberately config-only, which means you get reliability and speed to value, without
        the risk or delay of custom development.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-my-ai-front-desk-rules-automation-logic-and-extension-options" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in My AI Front Desk: Rules, Automation Logic, and Extension Options
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
              <h2 id="what-gets-configured-in-my-ai-front-desk-rules-automation-logic-and-extension-options" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in My AI Front Desk: Rules, Automation Logic, and Extension Options
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
