
export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses across Miami-Dade, Broward, and Palm Beach, the cost of handling inbound calls the
        old way is not just about missed revenue. It is about the constant drag on your team’s focus, the hours
        lost to routine admin, and the stress of knowing every unanswered call could be a lost client. When a
        solo operator or a two-person shop misses a call during a job or a patient visit, that is not just a
        minor slip. It is a real sales opportunity gone and, often, a customer who will not call back. Most
        callers do not leave voicemails. They move on to the next business, and your investment in marketing,
        advertising, and reputation-building is wasted with every drop to voicemail or missed ring.</p>
      <p className="text-md text-white shadow-text pt-3">
        The pain is sharpest for small teams who cannot afford a dedicated receptionist or a live answering
        service. Hiring a full-time front desk is out of reach for most local operators, and the per-minute cost
        of traditional answering services quickly eats into margins. Even at the low end, a single day of live
        agent coverage can cost more than a month of My AI Front Desk. But the real cost is in the work you do
        not get to. Every time the phone rings, someone on your team has to stop what they are doing, whether
        that is a technician in the field, a clinician with a patient, or a business owner catching up on
        bookkeeping, to answer a basic question or book an appointment. The result is fractured attention,
        dropped details, and a calendar that never quite fills up.</p>
      <p className="text-md text-white shadow-text pt-3">
        Routine calls, business hours, directions, pricing, rescheduling, are the silent killer. They break up
        your day, force context switching, and leave your team feeling like they are never caught up. Even
        worse, when a caller is told to &quot;go to the website to book&quot; and gives up, you lose the lead
        entirely. These broken booking loops are common, and the cost is not just the lost sale, but the wasted
        effort of getting that lead in the first place.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual logging is another hidden drain. After-hours calls, missed inquiries, and basic intake data often
        never make it into your&nbsp;CRM&nbsp;or booking system. That
        means no follow-up, no attribution, and no way to learn from what is working or not. The Monday morning
        bottleneck, catching up on missed calls, voicemails, and half-completed forms, can take hours, and by
        then, many leads are cold or gone.</p>
      <p className="text-md text-white shadow-text pt-3">
        Trying to keep up with all this by hand leads to a cycle of stress and inefficiency. Your team spends
        more time on admin than on billable work, and the constant interruptions make it impossible to focus on
        the jobs that matter. The cost is not just in lost sales, but in morale, burnout, and the feeling that
        you are always one step behind. For small businesses in South Florida, this is not just a technology
        gap. It is a competitive disadvantage that gets worse as your competitors automate and respond faster.</p>
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
