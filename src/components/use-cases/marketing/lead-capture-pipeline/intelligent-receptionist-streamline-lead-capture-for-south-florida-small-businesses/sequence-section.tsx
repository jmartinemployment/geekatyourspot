
export default function SequenceSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rolling out an Intelligent Receptionist is not a flip-the-switch event. It is a sequence of steps that
        touch nearly every part of your workflow, each with its own friction and payoff. This is where the
        difference between a smooth launch and a stalled project becomes real, especially for small businesses
        in South Florida that run lean and cannot afford weeks of disruption.</p>
      <p className="text-md text-white shadow-text pt-3">
        It starts with a practical alignment on business objectives, not a vendor demo. You map out what counts
        as success: fewer missed calls, more appointments booked, more sales pipeline captured, or simply moving
        all call logs into a real&nbsp;CRM. This is not window dressing;
        it is the foundation for every technical and operational decision that follows. For a twelve-person HVAC
        shop in West Palm Beach, that might mean aiming to recover $2,000 a month in missed-call revenue by
        moving from voicemail to 24/7 coverage. For a solo practice in Miami, it could be as simple as never
        losing another Saturday inquiry to a competitor.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next comes the&nbsp;data quality&nbsp;assessment. This
        phase is about more than finding the right phone number to forward. You need to know if your client
        records, intake forms, and knowledge base articles are clean, current, and in a format the new system
        can use. My AI Front Desk and Smith.ai both rely on structured data for booking and lead qualification;
        if your calendar is full of half-completed entries or
        your&nbsp;CRM&nbsp;is a mess of duplicate contacts, you will
        lose value before you even start. LobbyStack gives you the flexibility to define your own data models
        and logic, but that also means the quality of your data is now your direct responsibility, not a
        vendor’s.</p>
      <p className="text-md text-white shadow-text pt-3">
        The technical rollout is where most surprises land. Many providers, Voksha and Nextiva among them, offer
        setup in under five minutes for basic call forwarding and script training. In practice, getting the
        right flows for complex routing, after-hours handoffs, and multi-language support takes more work. With
        Nextiva, for example, you can train the AI engine on your business profile in a minute, but setting up
        the escalation rules (for when a call needs a human or a callback) requires careful planning. Smith.ai’s
        hybrid model means you must define which scenarios the AI should handle and which demand a live
        receptionist, and how much context is passed along.</p>
      <p className="text-md text-white shadow-text pt-3">
        Testing and validation is where the theory meets reality. This is not a phase to rush. You run smoke
        tests with real scenarios: a Spanish-language caller asking for appointment times, a new lead with a
        complex intake form, a repeat customer with a billing dispute. You check if the AI (or the human backup,
        in Smith.ai’s case) can field the call, capture the right data, and escalate correctly without losing
        information. LobbyStack’s open architecture lets you iterate fast, but it also puts the burden on you
        (or your consultant) to read every log and debug every edge case.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, you roll out in production, usually starting with a soft launch, after-hours and overflow calls
        go to the new system first, while your team keeps answering the main line. This phased approach catches
        the real-world issues before they hit your core business hours. For small teams, the difference is felt
        instantly: fewer interruptions, no more evenings lost to callbacks, and a steady trickle of new bookings
        that used to slip away. With LobbyStack and Voksha, you can dial in the call flows and pricing as you
        learn what works; with Smith.ai and Nextiva, you rely on their support and monitoring to catch anything
        the automation misses.</p>
      <p className="text-md text-white shadow-text pt-3">
        The hand-offs are where a rollout either earns trust or loses it. If the system cannot pass a sensitive
        or urgent call to a real person, fast, with all the context intact, you will hear about it in your first
        bad review. Smith.ai is built for these moments, with a network of live agents who step in seamlessly.
        My AI Front Desk and LobbyStack route calls based on clear rules, but if you have not set up the handoff
        logic, the caller ends up in a loop or, worse, is dropped.</p>
      <p className="text-md text-white shadow-text pt-3">
        Across every step, small business owners need to see that this is not just about buying a tool, but
        about changing the way they handle every interaction. The sequence, objectives, data, technical rollout,
        testing, launch, and handoff, makes the difference between a receptionist who adds value from day one
        and one who becomes another abandoned line item on your budget. The teams that do this right are the
        ones who treat the rollout as a living process, not a checklist. They keep tuning, listening, and
        adjusting until every call is answered, every lead is captured, and every client feels heard.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-a-real-implementation-looks-like-the-sequence-the-surprises-and-the-hand-offs" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What a Real Implementation Looks Like: The Sequence, the Surprises, and the Hand-Offs
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-a-real-implementation-looks-like-the-sequence-the-surprises-and-the-hand-offs-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What a Real Implementation Looks Like: The Sequence, the Surprises, and the Hand-Offs
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
