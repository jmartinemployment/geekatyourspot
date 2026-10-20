export default function RolesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When an Intelligent Receptionist goes live, the change is not just technical, it is operational and
        personal. The roles most affected are the ones who spent their days juggling calls, managing schedules,
        or worrying about missed leads. For a small business in Miami-Dade or Broward, this is the owner, the
        office manager, and any staffer who doubled as “the phone person” between appointments. Their workday
        changes on day one, and the impact is visible by week two.</p>
      <p className="text-md text-white shadow-text pt-3">
        The front desk or whoever used to answer the phone gets the biggest relief. Instead of being interrupted
        every time the line rings, they can focus on the task in front of them, checking in a customer, closing
        a sale, or reconciling invoices, without the constant threat of distraction. Calls about business hours,
        appointment times, or location directions no longer break their flow. Voksha and My AI Front Desk both
        automate these conversations, answering routine questions and booking straightforward appointments so
        your staff can work without constant context switching.</p>
      <p className="text-md text-white shadow-text pt-3">
        The business owner or manager feels the shift in a different way. Instead of spending evenings or
        weekends returning missed calls, they get a real-time log of every conversation, qualified lead, and
        booking. Smith.ai’s system, with its blend of AI and live receptionists, ensures that even high-stakes
        or sensitive calls are captured, qualified, and, if needed, escalated to a human with full context. This
        means fewer “fire drills” when a VIP client slips through, and no more anxiety about what happened after
        hours or during lunch.</p>
      <p className="text-md text-white shadow-text pt-3">
        Sales and service teams see their pipeline get cleaner and their follow-ups get easier. Nextiva
        consolidates all channels, calls, chats, SMS, into a single view, so staff are not searching five apps
        for the last conversation. They see every detail logged automatically, with transcripts and summaries
        attached. The real difference is in speed: leads are qualified before they ever hit a rep’s desk, and
        appointments are already booked in the right calendar slot. This removes busywork and lets teams spend
        time with real prospects instead of chasing down voicemails or sorting out double bookings.</p>
      <p className="text-md text-white shadow-text pt-3">
        For technical or compliance-focused staff, LobbyStack changes the game by allowing total control over
        data and workflow. Instead of relying on a vendor’s black box, IT or operations teams can inspect how
        the receptionist makes decisions, customize rules, and manage updates on their schedule. This is a shift
        from reactive problem-solving, fixing integration issues after the fact, to proactive system management.</p>
      <p className="text-md text-white shadow-text pt-3">
        Change management is not just about saving time. It is about reducing burnout and turnover in roles that
        have been stretched thin by constant interruptions and after-hours catch-up. The best Intelligent
        Receptionist deployments do not cut headcount, they let your people focus on high-value work and
        customer interactions that actually need a human touch. The Friday afternoon in your office looks
        different: your front desk finishes the week’s tasks on schedule, your owner leaves without a stack of
        callbacks, and your sales team spends the last hour closing opportunities instead of mopping up loose
        ends. That is what a real operational shift looks like, and it is why these tools pay for themselves
        long before the first monthly bill comes due.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-on-your-team-will-feel-the-change-and-how-their-day-actually-shifts" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who on Your Team Will Feel the Change, and How Their Day Actually Shifts
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-on-your-team-will-feel-the-change-and-how-their-day-actually-shifts-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who on Your Team Will Feel the Change, and How Their Day Actually Shifts
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
