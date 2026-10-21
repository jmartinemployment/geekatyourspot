export default function TransformsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        LobbyStack is designed to cut out the repetitive, time-consuming tasks that drag down your team’s
        productivity and cost you revenue. Instead of forcing you to fit your business into someone else’s rigid
        script, LobbyStack hands control back to you. The result is not just fewer missed calls, but a week
        where your staff can focus on what actually matters, serving customers, closing jobs, and growing your
        business.</p>
      <p className="text-base text-white shadow-text pt-3">
        First, LobbyStack answers every call, 24/7, in natural language. There is no more rush to the phone or
        scramble to check voicemails after a busy morning. Calls are handled as they come in, with the AI
        receptionist collecting the details you care about, name, address, service needed, urgency, right at the
        start. That means no more chasing down partial messages or trying to decipher a garbled voicemail from a
        frustrated customer. You set the rules for what happens next: urgent calls can be transferred directly
        to your on-call technician, while routine requests are booked into your calendar or sent as structured
        messages for follow-up.</p>
      <p className="text-base text-white shadow-text pt-3">
        Appointment booking is handled during the call, not after. LobbyStack integrates with Google Calendar,
        so when a customer wants to schedule a job, the system checks your availability, offers times, and books
        the appointment, all while the caller is still on the line. No more playing phone tag or losing jobs to
        businesses that answer faster. Confirmation details are sent to the caller immediately, and your team
        gets an email or SMS alert so nothing slips through the cracks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Routine questions and intake are automated. LobbyStack uses your knowledge base, service hours, pricing,
        policies, and FAQs, to answer common inquiries without tying up your staff. You can update these answers
        yourself, in plain English, whenever your business changes. There is no waiting on a developer or vendor
        support ticket. If a call does not fit the script or needs a human touch, LobbyStack can take a message
        or escalate to a real person, following the rules you set.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams that need complete control, LobbyStack’s open-source core means you can run the entire system
        on your own infrastructure. You decide where call data, recordings, and transcripts are stored. You can
        audit every part of the call handling logic, modify scripts and escalation rules, and even choose which
        AI models to use. This is critical for businesses with compliance requirements or those who simply do
        not want their customer data leaving their environment. Updates and access policies are on your
        schedule, not the vendor’s.</p>
      <p className="text-base text-white shadow-text pt-3">
        Managing high call volume is no longer a headache. LobbyStack scales from a completely free plan with 30
        browser voice minutes (to test and refine your setup) up to enterprise plans with custom usage limits
        and dedicated numbers. There are no setup fees, and you only pay for the minutes and features you
        actually use. For a small business, this means strong call coverage without the unpredictable bills or
        commitment of a traditional answering service.</p>
      <p className="text-base text-white shadow-text pt-3">
        The impact on your week is concrete. You stop losing jobs to missed calls. Your staff spend less time on
        callbacks and more time on work that brings in revenue. Intake is consistent, structured, and always
        available. Sensitive data stays where you want it, and you adapt the system as your business evolves.
        The owner who missed that Tuesday morning call now sees every opportunity handled, every urgent job
        routed to the right person, and every lead qualified before the competition gets a chance.</p>
      <blockquote cite="https://lobbystack.com/solutions/open-source-ai-receptionist/" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        LobbyStack is open source so your team can inspect how calls are handled, modify prompts and routing,
        and deploy on infrastructure you control.</blockquote>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-lobbystack-intelligent-receptionist-actually-removes-from-your-week" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What LobbyStack Intelligent Receptionist Actually Removes From Your Week
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-lobbystack-intelligent-receptionist-actually-removes-from-your-week-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What LobbyStack Intelligent Receptionist Actually Removes From Your Week
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
