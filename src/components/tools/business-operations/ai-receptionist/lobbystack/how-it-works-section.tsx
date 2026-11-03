export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        LobbyStack answers every call with natural language, not a menu. When a customer calls your main number,
        the platform picks up immediately, no wait, no button-pushing. The AI greets the caller, asks what they
        need, and starts gathering details. If the caller has a routine question, LobbyStack draws from your
        business&#39;s own knowledge base to answer it on the spot. For more complex needs, it follows your
        business rules to capture intake details, book appointments, or escalate emergencies.</p>
      <p className="text-base text-white shadow-text pt-3">
        The process unfolds in clear steps. First, LobbyStack identifies the caller’s intent by listening and
        transcribing in real time. It checks the caller’s language, switching if needed, so Spanish speakers get
        help in Spanish, and French in French, with support for over 70 languages on OpenAI’s GPT-Live. Next,
        the AI matches the caller’s request against your configured workflows. If it’s a booking, LobbyStack
        checks your Google Calendar integration for open slots, offers times, and confirms appointments directly
        with the caller. It can send confirmation details by text (to US and Canadian numbers) or by email, so
        the caller gets proof while your team stays informed.</p>
      <p className="text-base text-white shadow-text pt-3">
        When a situation needs a human, an emergency, a sensitive issue, or a request outside your preset rules,
        LobbyStack follows your escalation path. The system can transfer the call directly to your on-call staff
        or take a detailed message for later follow-up. Transfers are direct: the AI dials out to the number you
        specify, without an introduction, handing the caller off as soon as your rule triggers. For after-hours
        or overflow scenarios, you decide which calls get routed to LobbyStack, and which still go to voicemail
        or a live service.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every call leaves a trace in the dashboard. LobbyStack automatically generates a summary, saves the full
        transcript and recording, and tags the outcome, was it a booking, a quote request, or a lead? This gives
        you a searchable, auditable history of all interactions. For small teams, this means no more guessing
        what happened on a Friday afternoon when the office was short-staffed. You can review outcomes, check
        missed opportunities, and see which calls turned into real business.</p>
      <p className="text-base text-white shadow-text pt-3">
        LobbyStack’s open-source design means you can customize how it handles calls at every step. You control
        the greeting, the intake questions, the escalation triggers, and the booking logic. If your pricing
        changes, or if you want to adjust how emergencies are routed, you update the workflow in plain language,
        no developer required. For plumbing businesses, for example, you can script the AI to walk a caller
        through shutting off the main valve during a burst pipe emergency, collect the address and safety
        details, and quote the right after-hours dispatch price before transferring to your on-call tech.</p>
      <p className="text-base text-white shadow-text pt-3">
        Routine calls, like appointment requests, FAQs, or intake for new leads, are handled end-to-end by the
        AI. Only complex or sensitive cases get flagged for human attention. On paid plans, alerts go out by
        email and (optionally) SMS, so your team stays in the loop without having to check the dashboard after
        every call. This workflow frees your staff from the grind of message-taking and follow-up, letting them
        focus on jobs that need a person.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in South Florida, this means you get 24/7 coverage, consistent call handling, and a
        record of every opportunity, without hiring another full-time receptionist or worrying about missed
        leads slipping through the cracks. The platform’s mechanics are simple but flexible: you decide what
        happens, and LobbyStack carries it out exactly as you set it, every time.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-lobbystack-handles-calls-messages-and-bookings-in-practice" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How LobbyStack Handles Calls, Messages, and Bookings in Practice
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
              <h2 id="how-lobbystack-handles-calls-messages-and-bookings-in-practice-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How LobbyStack Handles Calls, Messages, and Bookings in Practice
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
