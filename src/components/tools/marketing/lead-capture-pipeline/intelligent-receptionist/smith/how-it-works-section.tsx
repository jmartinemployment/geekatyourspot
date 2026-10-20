
export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Smith.ai does not just answer calls. It runs a tightly coordinated workflow that blends AI speed with
        human expertise, built specifically to avoid the common failures of purely automated systems. Every
        inbound call, chat, or web inquiry enters a pipeline where AI and live agents work together to qualify,
        route, and convert leads, without dropping the ball when things get complicated.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process starts the moment a caller dials in or submits a website form. AI takes the first pass,
        handling the bulk of routine screening and data capture. It asks structured intake questions, checks for
        urgency keywords, and sorts out spam or robocalls, removing the noise before it ever reaches your team.
        This is not a basic script: Smith.ai’s AI adapts its intake flow based on the caller’s responses, the
        type of service requested, and your business’s own qualification criteria. For a plumber, that might
        mean instantly flagging “water leak” as urgent; for a law office, it could mean running through a
        detailed conflict check before scheduling a consult.</p>
      <p className="text-md text-white shadow-text pt-3">
        If the caller’s need is straightforward, Smith.ai’s AI completes the intake, schedules appointments
        directly into your calendar, and pushes all relevant data into
        your&nbsp;CRM&nbsp;or
        project management system. The caller gets an immediate, helpful response, and your team receives a
        detailed summary, no manual entry, no missed details, and no lost leads. Every call is logged,
        transcribed, and summarized for later review.</p>
      <p className="text-md text-white shadow-text pt-3">
        But Smith.ai is built for the real world, not just the easy cases. When the AI hits a scenario it cannot
        resolve, an anxious prospect who refuses to talk to a bot, a distressed caller with an urgent legal
        question, or a high-value lead with complex requirements, the system escalates in real time to one of
        over 500 trained, North America–based human agents. These agents pick up with the full context of the
        AI’s intake, so the caller is not forced to repeat themselves. This handoff is seamless: the caller does
        not wait on hold, and the transition happens mid-conversation if needed.</p>
      <p className="text-md text-white shadow-text pt-3">
        Smith.ai’s live agents are not just script readers. They are trained on your intake process, familiar
        with your industry’s workflows, and able to handle nuanced judgment calls, whether that means calming a
        frustrated homeowner, asking the right follow-up questions in a legal intake, or triaging an after-hours
        emergency. They can book appointments, collect payments, or even send out retainer agreements for
        e-signature on the spot. Every agent interaction is tracked and scored for quality, and clients can
        provide feedback on call handling to keep standards high.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses that operate across locations or service areas, Smith.ai uses intelligent routing to
        direct calls based on zip code, project type, or any custom rule you set. Calls can be transferred to
        the right team member or location, or referred to a partner business if the lead is not a fit. The
        system adapts as your needs change: update your intake questions, escalation rules, or routing logic at
        any time without a full reimplementation.</p>
      <p className="text-md text-white shadow-text pt-3">
        The result is a reception process that never sleeps and never gets overwhelmed. Smith.ai’s hybrid
        workflow means your business captures every opportunity, routine or urgent, simple or complex, without
        the risk of a bot mishandling a sensitive call or a human missing a lead after hours. For the West Palm
        Beach plumber from the opening, that means every emergency call is triaged and booked, every routine job
        is scheduled, and every high-value client gets the right follow-up, no more lost revenue to voicemail or
        missed connections.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-smith-ai-handles-every-call-the-hybrid-receptionist-workflow-in-practice" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Smith.ai Handles Every Call: The Hybrid Receptionist Workflow in Practice
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
              <h2 id="how-smith-ai-handles-every-call-the-hybrid-receptionist-workflow-in-practice-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Smith.ai Handles Every Call: The Hybrid Receptionist Workflow in Practice
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
