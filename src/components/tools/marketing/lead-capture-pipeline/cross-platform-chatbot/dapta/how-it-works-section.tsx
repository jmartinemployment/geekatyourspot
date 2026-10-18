import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Dapta automates the entire lead journey across voice, chat, and messaging channels, working as a
        single, always-on agent that covers every inbound path. The platform does not just answer questions.
        It listens, qualifies, books, and syncs, all without asking a human to juggle inboxes or retype
        details. The process begins the moment a customer reaches out, whether by phone, WhatsApp, SMS, or web
        chat. Dapta’s agent responds instantly, in natural English or Spanish, and keeps the conversation
        moving toward a real outcome: a booked appointment, a qualified lead in
        the&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>, or a routed support case.</p>
      <p className="text-md text-white shadow-text pt-3">
        When a call or message comes in, Dapta’s agent identifies the channel and the customer, then
        immediately starts gathering information. The agent uses structured questions, such as service type,
        urgency, or budget, to qualify the inquiry. This is not a generic script: Dapta is trained on your
        business’s own documents, FAQs, and rules, so it sounds like your team and asks what matters for your
        pipeline. If the customer switches from chat to phone or vice versa, Dapta keeps the context, so
        nobody repeats themselves and every detail is captured once, not scattered across platforms.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the agent has enough information, it acts. If the inquiry is a fit, Dapta offers a real-time
        booking slot, checks the live calendar, and locks in the appointment. The agent sends reminders by SMS
        or WhatsApp, confirms the time, and updates
        your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;automatically. If the prospect is not
        qualified or needs a human, Dapta escalates the conversation with full context, no cold handoff, no
        lost notes. Every step, from first hello to scheduled meeting, is logged and reviewable, giving your
        team a clean record and analytics for every touchpoint.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams that need more than just chat, Dapta stands out for its voice capability. It answers and
        makes real phone calls, not just text replies, and handles inbound and outbound calls with the same
        intelligence as chat. This is especially valuable for businesses in Miami-Dade, Broward, and West Palm
        Beach, where customers expect bilingual service and may reach out by phone, WhatsApp, or web form
        interchangeably. Dapta’s voice agent routes emergency calls per your rules, books appointments during
        calls, and confirms details by text, all in the same workflow.</p>
      <p className="text-md text-white shadow-text pt-3">
        The system is designed for speed and reliability. Most teams are live in under half an hour, with no
        coding required. Dapta’s agent can be set up by describing your business, hours, and scheduling rules
        in plain language. The platform’s autonomous setup tool, Dapti, builds the agent, connects it to
        your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>, calendar, and phone system, and trains it on
        your own content. That means your business starts with a custom-fit workflow, not a blank template.
        Every conversation is logged, every booking is synced, and every qualified lead lands in your sales
        pipeline without manual effort.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is not just theory. Dapta’s approach has enabled clients like Jelpit to handle seven times more
        leads and helped Skydropx cut its cost per qualified lead in half while tripling booked meetings. The
        mechanics are simple but powerful: one agent, all channels, every detail tracked and acted on. For
        small businesses used to missing leads or chasing scattered messages, Dapta’s step-by-step process
        means no more guessing where a conversation stands or who needs to follow up next.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="from-inquiry-to-booking-what-actually-happens-inside-dapta" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                From Inquiry to Booking: What Actually Happens Inside Dapta
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
              <h2 id="from-inquiry-to-booking-what-actually-happens-inside-dapta" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                From Inquiry to Booking: What Actually Happens Inside Dapta
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
