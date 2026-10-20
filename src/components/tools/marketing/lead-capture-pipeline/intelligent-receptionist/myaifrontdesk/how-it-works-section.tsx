import Link from "next/link";

export default function HowItWorksSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        My AI Front Desk responds to every inbound call, text, or chat as soon as it comes in, no matter the
        time of day. The system is built to step in where small teams cannot, picking up on the first ring and
        talking to callers in plain language, not canned scripts. This is not a menu tree or voicemail drop; My
        AI Front Desk holds a real conversation, listens for what the caller wants, and acts on it live. It does
        not just take messages for someone to return later. It qualifies, books, and logs every detail on the
        spot.</p>
      <p className="text-md text-white shadow-text pt-3">
        When a customer calls, My AI Front Desk greets them in your business name and in their preferred
        language, switching automatically between more than 20 supported languages, including English and
        Spanish. The system uses neural voice technology that sounds like a real person, not a robot, so callers
        feel they are speaking to a professional receptionist. Callers explain what they need in their own
        words, whether that is to book an appointment, ask about pricing, or request directions. The AI listens,
        understands the request, and takes the next step without putting the caller on hold or bouncing them
        through options.</p>
      <p className="text-md text-white shadow-text pt-3">
        If the caller wants to book a slot, My AI Front Desk checks your live calendar, Google Calendar,
        Outlook, or Calendly, and offers available times during the call or chat. Once the caller picks a time,
        the AI confirms the booking, writes it directly to your calendar, and sends a confirmation SMS before
        the caller hangs up. If the inquiry is about something routine, like business hours or location, the AI
        answers immediately, using up-to-date information pulled from your knowledge base or website. For
        after-hours or missed calls, the system sends a text within seconds, inviting the caller to continue the
        conversation or book an appointment by SMS. The AI can handle the entire booking or Q&amp;A thread by
        text, so you do not lose leads after business hours.</p>
      <p className="text-md text-white shadow-text pt-3">
        Every conversation, call, text, or chat, is logged to
        your&nbsp;CRM&nbsp;automatically.
        My AI Front Desk creates or updates the contact record, attaches a full transcript and AI-generated
        summary, and tags the outcome (booked, transferred, callback, or no action). This means you get a
        complete, searchable record of every inquiry, visible in HubSpot, Salesforce,&nbsp;<Link id={`tools-marketing-intelligent-receptionist-myaifrontdesk-how-it-works-pipedrive${idSuffix}`} href="/tools/marketing/pipedrive" className="text-[#0B162A] hover:underline">Pipedrive</Link>, or Zoho without
        manual entry. If a call requires human judgment or empathy, the AI escalates it, transferring the caller
        or chat to a real person with all the conversation context included.</p>
      <p className="text-md text-white shadow-text pt-3">
        Routine requests, like appointment reminders, intake forms, or payments, are handled end-to-end by the
        AI. For example, when a caller asks about pricing or wants to book, the AI can send a secure payment
        link by SMS, collect intake details, or deliver directions without any staff intervention. Every field
        from the conversation, intent, timing, sentiment, budget, or a custom field you set, is extracted and
        written to your analytics or outbound workflows. If a caller texts &quot;BOOK&quot; or another keyword,
        the AI starts the booking workflow immediately, without waiting for a human to reply.</p>
      <p className="text-md text-white shadow-text pt-3">
        My AI Front Desk is not just for phone calls. It handles web chat, SMS, and even web form submissions.
        When a visitor fills out a form on your site, the AI can call them back within a minute, confirm project
        details, and book a visit or consultation while the lead is still warm. If the lead does not answer, the
        system follows up with a text and a retry schedule, so no inquiry falls through the cracks.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small South Florida teams, this means you never have to choose between serving a current client and
        answering the next prospect. My AI Front Desk becomes your always-on front desk, capturing every lead,
        booking every appointment, and logging every detail so you can focus on the work that pays the bills.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-my-ai-front-desk-handles-calls-texts-and-booking-in-real-time" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How My AI Front Desk Handles Calls, Texts, and Booking in Real Time
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-my-ai-front-desk-handles-calls-texts-and-booking-in-real-time-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How My AI Front Desk Handles Calls, Texts, and Booking in Real Time
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
