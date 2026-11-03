
export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        My AI Front Desk operates as a single, unified layer above all the ways a customer might reach your
        business, phone, SMS, email, website chat, Facebook Messenger, Instagram DMs, and more. Instead of
        splitting these touchpoints into separate silos, it brings every incoming and outgoing interaction
        into one inbox. Each conversation, no matter where it starts, is labeled by channel, linked to the
        right contact, and tracked with a full history. This means your team sees the entire story for each
        lead or customer, not just a fragment from one platform.</p>
      <p className="text-base text-white shadow-text pt-3">
        The mechanics start with channel integration. In the Channels tab, you connect each of your messaging
        and voice platforms. From that point, every message, call, or DM flows into the Unified Inbox.
        Incoming SMS, web chats, and social DMs are instantly visible, with the AI handling replies in real
        time. If a customer reaches out on Instagram and then texts the next day, both threads are merged
        under the same identity, so your team never misses the context or repeats questions already answered.</p>
      <p className="text-base text-white shadow-text pt-3">
        My AI Front Desk’s AI is not just a scripted bot. It draws on your own knowledge base, your hours,
        pricing, policies, FAQs, to generate accurate, personalized responses. When a customer asks about
        availability or wants to book an appointment, the AI checks your calendar live and completes the
        booking, logging it directly to the&nbsp;CRM. If the question
        falls outside the AI’s scope, it escalates the conversation to a human operator, who can step in
        instantly and take over from any channel. The AI hands back control when the operator is done, so
        there is no break in the customer experience.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses that struggle to keep up with after-hours or peak time inquiries, My AI Front Desk’s
        24/7 coverage is a direct fix. The AI answers calls and messages even when your team is away,
        qualifying leads and capturing details that would otherwise be lost to voicemail or ignored DMs. Every
        conversation, whether a missed call, a quick text, or a long chat, is transcribed, summarized, and
        pushed to the&nbsp;CRM&nbsp;with intent, fit, and outcome
        fields filled in. This eliminates the manual work of typing up notes, copying contact details, or
        updating records after the fact.</p>
      <p className="text-base text-white shadow-text pt-3">
        The system does not just collect data; it acts on it. My AI Front Desk evaluates the content of each
        call, chat, or form submission to score lead intent and engagement in real time. High-potential leads
        are flagged and routed to the right person for follow-up. The AI can trigger personalized SMS or email
        sequences based on what was discussed, send reminders, or assign the contact to a nurture queue if
        they are not ready to buy yet. Operators receive audio alerts when a high-intent conversation is
        escalated, so nothing urgent sits unnoticed in the inbox.</p>
      <p className="text-base text-white shadow-text pt-3">
        This approach removes the classic Friday afternoon scramble described earlier. Instead of hunting
        through emails, chat logs, and call notes, your team opens one timeline for each customer and sees
        every interaction in order. The AI has already captured the key details, scored the lead, and set the
        next action. If a teammate needs to step in, they have the full context, no more missed handoffs or
        repeated questions. The result is a lead capture pipeline that runs itself, so your team spends less
        time tracking down information and more time closing sales.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-my-ai-front-desk-centralizes-every-conversation-and-keeps-context-across-channels" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How My AI Front Desk Centralizes Every Conversation and Keeps Context Across Channels
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
              <h2 id="how-my-ai-front-desk-centralizes-every-conversation-and-keeps-context-across-channels-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How My AI Front Desk Centralizes Every Conversation and Keeps Context Across Channels
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
