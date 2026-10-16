export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every missed message or delayed reply is a lost sale. For small businesses in South Florida, the cost
        is not just one lost customer, it is the hours spent tracking down details, the revenue that slips
        away when a hot lead goes cold, and the frustration of never seeing the full story behind each
        inquiry. The reality is clear: today’s customer expects answers on their terms, across any channel, at
        any hour. But most teams are still operating in silos. Website chat, phone, text, Facebook, Instagram,
        email, all separate, all pulling attention in different directions.</p>
      <p className="text-md text-white shadow-text pt-3">
        When a customer texts your main number at lunch, that message might sit unread for hours because it is
        in a different inbox from your email. If someone calls after hours, the phone rings out to voicemail.
        By Monday, the team is piecing together who called, what was asked, and whether anyone followed up.
        Information is scattered, notes in one system, chat logs in another, voicemails on a phone that only
        one person checks. This patchwork approach does not just slow you down; it means real money left on
        the table. High-value leads can go days without a reply, and your best prospects move on to a
        competitor before you even know they reached out.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual tracking is the silent thief in this process. Every time a team member spends ten minutes
        searching for a customer’s last message or copying details from one tool to another, that is time lost
        to admin work instead of sales. Multiply that by every inquiry in a busy week, and you are paying for
        hours that never move the pipeline forward. Worse, mistakes creep in. A quote sent to the wrong email,
        a follow-up missed because the chat history was not visible, a prospect who gets a generic away
        message instead of the answer they needed, each one is a small error, but together they add up to a
        broken funnel.</p>
      <p className="text-md text-white shadow-text pt-3">
        Off-hours and peak periods are where the cracks widen. Calls during the evening or weekend go straight
        to voicemail, and by the time someone checks, the opportunity has cooled. Staff juggling multiple
        inboxes can only respond to so many at once, so less urgent or less familiar channels get ignored. The
        business pays twice: once in lost deals, and again in the labor spent trying to recover what slipped
        through. Even the best teams cannot keep up with the pace or volume when each channel is a separate
        task.</p>
      <p className="text-md text-white shadow-text pt-3">
        Trying to fix this with more manual effort, hiring extra staff, setting reminders, or building
        spreadsheets, only adds complexity and cost. It does not solve the root problem: the fragmentation of
        conversations and the lack of a single, up-to-date view of each customer. Without that, lead tracking
        stays patchy and accountability is always after the fact. The business never knows for sure which
        campaigns are working, which channels are leaking leads, or how many sales were lost to slow response.
        The cost is not just in labor or missed sales, but in the uncertainty that clouds every decision about
        growth and marketing.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the pain point My AI Front Desk is designed to break. It does not patch over the cracks with
        more notifications or dashboards. Instead, it replaces the scattered, manual process with a unified
        approach, one that captures every inquiry, connects every channel, and lets your team focus on closing
        deals instead of chasing details. The hours spent typing up call notes, the leads lost to voicemail,
        and the stress of never knowing where a conversation stands, these are the real costs of doing it by
        hand, and they are the ones that end when the right system is in place.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing This by Hand
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
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing This by Hand
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
