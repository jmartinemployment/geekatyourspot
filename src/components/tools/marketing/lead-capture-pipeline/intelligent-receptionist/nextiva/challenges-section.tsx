export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every missed call is a missed sale, a lost appointment, or a customer who never comes back. For small
        businesses in Miami-Dade, Broward, and Palm Beach, the cost of keeping things manual shows up in lost
        revenue, wasted staff time, and constant stress. When phone calls, texts, and web chats all live in
        separate systems, no one has the full picture. That means leads slip through the cracks, customers wait
        too long for a response, and the team spends hours tracking down half-finished conversations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Take the HVAC team from the opening. By Friday afternoon, after a week of juggling three phone lines and
        scattered texts, they still have no idea if the customer who called at 10 a.m. ever got a call back. Two
        of the week’s web chat requests are buried in an inbox that no one checked after Tuesday. The team
        spends hours each week piecing together scraps from different apps, trying to figure out who needs a
        follow-up and who’s already been helped. Each time a message goes unanswered, it’s another job lost to a
        competitor who picked up first.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real cost is not just in missed jobs. It’s the time staff spend switching between platforms, the
        frustration of repeating information, and the risk that a good lead is lost because someone was out sick
        or busy with another customer. When a business relies on people to monitor every channel, the system
        breaks down the moment the shop gets busy or someone steps away. A single missed call can mean hundreds
        of dollars in lost business. Multiply that by a few calls a week, and a small business can lose
        thousands each month without ever seeing it on a report.</p>
      <p className="text-md text-white shadow-text pt-3">
        Disconnected systems also mean customers have to repeat themselves. They call once, get voicemail, try
        again, and finally reach someone who has no idea what they’re calling about. If they switch to web chat
        or text, it’s a whole new conversation, no context, no history, nothing to show that they already
        explained their problem. This fractured experience frustrates customers and pushes them to look
        elsewhere.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual follow-ups are another hidden drain. After booking a job, the team has to remember to send a
        confirmation text, check the schedule for double bookings, and follow up before the appointment. If
        someone forgets, the risk of no-shows goes up, and the day’s schedule falls apart. Staff end up working
        late or scrambling to fill gaps, all because there’s no system to lock in the job and remind the
        customer automatically.</p>
      <p className="text-md text-white shadow-text pt-3">
        For the average small business, these problems pile up. Staff burnout rises as they answer the same
        basic questions over and over. The cost of missed connections grows every week, but it’s hard to see
        until it’s too late. Teams spend money on multiple phone, chat, and SMS tools that don’t talk to each
        other, paying for features they never use and still missing out on leads. The cycle repeats: more apps,
        more manual work, more lost revenue.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
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
              <h2 id="what-it-costs-to-keep-doing-this-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
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
