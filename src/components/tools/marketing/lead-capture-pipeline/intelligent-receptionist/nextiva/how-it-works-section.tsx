export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Nextiva is built to remove the chaos of missed calls, lost chats, and scattered messages for small
        businesses. Its core engine brings every customer touchpoint, phone, SMS, and web chat, into a single,
        AI-managed workspace. This is not just a digital receptionist that picks up the phone. It is an
        orchestrator that listens, responds, books, and logs every interaction, all at once, with no gaps
        between channels.</p>
      <p className="text-md text-white shadow-text pt-3">
        When a customer calls, Nextiva answers instantly, using conversational AI that understands natural
        speech. The system greets the caller, asks clarifying questions if needed, and can book appointments
        right away by checking your real-time calendar. If the caller texts or starts a chat on your website,
        Nextiva handles those too, capturing the same lead details, giving the same answers, and keeping the
        whole conversation in one thread. This means your team never has to hunt across apps or wonder if
        someone followed up.</p>
      <p className="text-md text-white shadow-text pt-3">
        Nextiva’s AI recognizes the difference between a new lead, a returning customer, and a routine inquiry.
        It can answer common questions, such as business hours or service areas, without ever involving a human.
        When a request is complex or sensitive, the system routes the caller to the right person on your team,
        passing along the full conversation history so nothing gets lost in translation.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses that depend on appointments, like HVAC, dental, or auto repair, Nextiva’s AI can check
        availability, book or reschedule appointments, and send instant text confirmations. No more missed
        bookings or double entries. The customer gets a text reminder before the appointment, cutting down on
        no-shows and last-minute cancellations. If a lead comes in after hours, Nextiva still answers, books,
        and confirms, so you never lose business just because the office is closed.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform’s real-time analytics show you call patterns, missed opportunities, and where leads drop
        off. Managers can see which types of questions come up most, how quickly the AI or team responds, and
        how many appointments are booked versus lost. Over time, as more calls and chats run through the system,
        the AI learns from real conversations, improving its responses and reducing the need for human
        intervention. Businesses can update scripts, FAQs, and escalation rules directly in the dashboard, so
        the AI always stays on brand and up to date.</p>
      <p className="text-md text-white shadow-text pt-3">
        Returning to the HVAC team in West Palm Beach, Friday afternoon is no longer a scramble. The technician
        in the field gets a text summary of every new lead and appointment as soon as it comes in. The office
        manager sees every call, chat, and text in one place, with no need to dig through old emails or
        voicemails. No customer is left waiting, and every opportunity is logged, ready for follow-up or
        handoff. What used to be a guessing game is now a smooth, predictable process.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in Miami-Dade, Broward, and Palm Beach counties, this is how Nextiva turns
        fragmented communication into a single, reliable flow. It is not just about answering the phone faster.
        It is about making sure every customer gets a response, every lead is tracked, and your team can focus
        on the jobs that matter most, instead of chasing down missed messages.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-nextiva-handles-calls-messages-and-chats-without-missing-a-beat" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Nextiva Handles Calls, Messages, and Chats Without Missing a Beat
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
              <h2 id="how-nextiva-handles-calls-messages-and-chats-without-missing-a-beat" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Nextiva Handles Calls, Messages, and Chats Without Missing a Beat
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
