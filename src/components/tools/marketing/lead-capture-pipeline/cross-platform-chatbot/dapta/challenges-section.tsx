
export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Every small business in Miami-Dade, Broward, and West Palm Beach feels the drag of fragmented
        communication. When your team answers calls, checks web chat, and tries to keep up with WhatsApp or
        Instagram DMs, the work multiplies. Each channel sits in its own silo. The cost is not just time, but
        real lost revenue. A missed call is a lost job. A web chat that goes unanswered is a competitor’s win.
        When a customer reaches out twice and gets two different answers, trust erodes. Staff spend hours
        chasing context, piecing together who said what and when, instead of moving sales forward.</p>
      <p className="text-base text-white shadow-text pt-3">
        The heart of the problem is that every channel, phone, text, website chat, WhatsApp, Facebook
        Messenger, runs as a separate inbox. A prospect who calls in the morning and follows up by chat in the
        afternoon is treated as two different people. Staff have to ask for the same details again and again.
        No one sees the full thread, so promises get missed and follow-up slips. For a small business, this is
        not just an annoyance. It is the reason hot leads go cold, and why marketing spend does not turn into
        booked work.</p>
      <p className="text-base text-white shadow-text pt-3">
        When the owner or the main staff are busy, calls go to voicemail. Sometimes, those voicemails are
        checked at the end of the day. Sometimes, they are missed altogether. Customers who want instant
        answers, especially for urgent work, are left waiting. Meanwhile, web chat requests can sit for hours
        in a browser tab or an app no one is watching. WhatsApp messages may be checked by one staffer,
        Facebook DMs by another. There is no single view, so the same customer might get three different
        answers depending on who is available. This is not just a customer service issue. It is a direct hit
        to conversion rates and reputation.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual appointment booking is another pain point. Prospects who want to book a service or meeting are
        sent back and forth between staff, or are left waiting for a call-back. The process is slow, and the
        window to secure the booking closes fast. In a market where customers expect instant confirmation, the
        back-and-forth costs real sales. Even when a booking is made, syncing it to the right calendar
        or&nbsp;CRM&nbsp;is often a manual step. This means double
        entry, mistakes, and sometimes missed appointments. Staff end up spending more time updating records
        than talking to customers.</p>
      <p className="text-base text-white shadow-text pt-3">
        Qualification is not consistent. Some leads are asked the right questions, others are not. Staff might
        forget to confirm service area, urgency, or budget. As a result, sales teams waste time on unqualified
        prospects or miss out on the best ones. For bilingual markets, the problem is even sharper. English-
        and Spanish-speaking customers do not get the same first response. Sometimes, staff are not available
        in both languages, so key details are lost or misunderstood.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real cost is not just the work itself, but the opportunity lost. When every channel is its own
        island, staff spend more time checking, copying, and following up than actually selling or serving.
        Leads slip through the cracks. Appointments are missed. The business looks less professional and less
        responsive than the competition. For small teams, every hour spent on manual checking is an hour not
        spent on billable work or growth. The businesses that win are the ones that respond first, remember
        every detail, and never drop the thread. The status quo makes that impossible.</p>
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
              <h2 id="what-it-costs-to-keep-doing-this-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
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
