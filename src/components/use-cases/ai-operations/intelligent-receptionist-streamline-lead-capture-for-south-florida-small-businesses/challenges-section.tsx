export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Missed calls and lost leads are not just a matter of bad luck or busy days. The real issue is a tangle
        of practical failures baked into how small teams handle incoming calls and messages today. The first
        breakdown is coverage. When the same person is juggling field work, paperwork, and phone duty,
        high-intent leads slip through because nobody is on the line to answer. This is not a staffing problem
        that can be solved by working harder. Even the most diligent front desk cannot pick up every call during
        lunch, after hours, or when two lines ring at once.</p>
      <p className="text-base text-white shadow-text pt-3">
        Standard voicemail is the next weak link. Most callers who hit voicemail do not leave a message, they
        hang up, and often call the next business on their list. The phone line becomes a black hole, not a lead
        funnel. This is especially true for solo operators and micro-teams in South Florida who cannot justify a
        full-time receptionist or pay for a live answering service. Every missed ring is a lost opportunity, and
        the system is set up to lose by default.</p>
      <p className="text-base text-white shadow-text pt-3">
        Even when someone does answer, the process is broken by routine. Staff waste valuable time fielding
        basic programmatic calls, questions about business hours, directions, or service pricing, that could be
        answered automatically. These interruptions break their focus, slow down real work, and make it easy to
        miss the calls that actually matter. Meanwhile, when staff tell callers to &quot;book online,&quot; the
        result is often an abandoned website visit and a lost lead, not a completed booking.</p>
      <p className="text-base text-white shadow-text pt-3">
        After-hours is a blind spot. If a call comes in outside of business hours or when the team is heads-down
        on another task, there is often no process to log the details, tag the caller&#39;s intent, or push the
        information into any system that allows for follow-up. What could have been a warm lead becomes cold
        data, if it is captured at all. Monday mornings turn into a scramble to listen to voicemails, decipher
        half-heard names, and guess which messages are worth chasing.</p>
      <p className="text-base text-white shadow-text pt-3">
        Disconnected apps make the problem worse. Teams often rely on fragmented systems for phone calls, SMS,
        and chat. Calls might be answered on a landline, texts checked on a mobile, and web chats ignored
        because nobody is monitoring the dashboard. Leads scatter across platforms, and nobody has the full
        picture of a prospect’s history or intent. It is all too easy for a hot lead to text in, get no
        response, and move on.</p>
      <p className="text-base text-white shadow-text pt-3">
        Legacy phone trees and auto-attendants (press 1 for sales, press 2 for service) frustrate callers who
        just want help in plain language. These systems drop calls or send people into endless loops. Worse,
        they do nothing to capture context, qualify the lead, or make sure the next step is booked. For small
        businesses competing for every inquiry, these failures are not minor annoyances, they are the reason the
        pipeline dries up and growth stalls.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="why-small-teams-miss-calls-lose-leads-and-burn-out" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Small Teams Miss Calls, Lose Leads, and Burn Out
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="why-small-teams-miss-calls-lose-leads-and-burn-out-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Small Teams Miss Calls, Lose Leads, and Burn Out
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
