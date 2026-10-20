export default function StatusQuoSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A disconnected lead capture process is not just an inconvenience, it is a direct hit to your bottom
        line and your team’s sanity. Every time a call drops to voicemail, a DM sits unanswered, or a chat
        goes cold, you are losing more than just a name. You are losing hours you already paid for, missing
        sales you could have closed, and adding layers of risk that grow as the business scales.</p>
      <p className="text-md text-white shadow-text pt-3">
        First, consider the wasted hours. Staff spend their day jumping between five or six inboxes, WhatsApp,
        Instagram, Facebook Messenger, website chat, and the main business phone, trying to track down who
        said what, when, and on which platform. When a prospect comes back a day later, the team wastes more
        time searching for context, piecing together notes, or, worse, asking the same questions again. This
        is not just a drain on morale; it is a drain on payroll. The time spent managing fragmented
        conversations is time taken away from actual selling, operations, and customer support.</p>
      <p className="text-md text-white shadow-text pt-3">
        Then, there is the error rate. Manual data entry is the breeding ground for mistakes, misspelled
        names, lost phone numbers, or incorrect service details. BotPenguin and Dapta both target this pain,
        but the cost is real whether you have a tool or not. When basic information is copied from chat to
        spreadsheet, or from a DM to an email, details get dropped. That means follow-ups go to the wrong
        person, or a hot lead is lost because no one tagged them for a callback. Errors ripple through the
        system, causing confusion for staff and frustration for customers who have to repeat themselves or
        clarify details.</p>
      <p className="text-md text-white shadow-text pt-3">
        The biggest cost, though, is delay. Small businesses in South Florida often rely on quick, personal
        responses to win customers. When a message sits for hours, or worse, overnight, the lead goes cold.
        Manychat’s automation helps, but in the status quo, the business is at the mercy of whoever checks the
        inbox next. Missed messages mean missed opportunities, and the five-minute rule for reply speed is not
        just a best practice, it’s the difference between closing a deal and losing it to a competitor.</p>
      <p className="text-md text-white shadow-text pt-3">
        Risk compounds as volume grows. If a business is handling a dozen conversations a day, a few missed
        leads might seem manageable. But as marketing ramps up and inquiries increase, the cracks widen. With
        every additional channel, another social platform, a new chat widget, or SMS, the risk of losing track
        grows. The owner absorbs most of the cost: late nights trying to reconcile details, lost sales that
        never get recorded, and the constant worry that a big opportunity slipped through while they were busy
        elsewhere. For smaller teams, the impact is even sharper: one person out sick or on vacation, and the
        whole system grinds to a halt.</p>
      <p className="text-md text-white shadow-text pt-3">
        There is also a compliance risk. When customer details are scattered and manually entered, it’s easy
        to miss consent for follow-up, mishandle sensitive data, or lose track of opt-outs. In regulated
        industries or when handling payment information, these lapses can trigger real penalties.</p>
      <p className="text-md text-white shadow-text pt-3">
        The team in the story from the opening, still juggling those five conversations, ends their week with
        a spreadsheet full of partial records and a handful of leads that never made it to the next step. One
        customer gets a follow-up, another is left waiting, and the cycle repeats. The cost is not just the
        lost deal; it’s the reputation hit from inconsistent service and the sense that your business is
        always playing catch-up. Until you connect the dots and bring every conversation into one unified
        flow, these costs will keep piling up, week after week.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-real-cost-of-disconnected-conversations" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Real Cost of Disconnected Conversations
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
              <h2 id="the-real-cost-of-disconnected-conversations" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Real Cost of Disconnected Conversations
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
