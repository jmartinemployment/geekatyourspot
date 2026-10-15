export default function StatusQuoSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every missed or mishandled call has a price, and small businesses are the ones who pay it. The cost
        starts with lost revenue. When a high-intent caller goes to voicemail or gets an incomplete answer, that
        opportunity usually disappears for good. For a service business in Miami-Dade or Broward, even one
        missed booking can mean hundreds or thousands of dollars in lost work every week. Repeat that a few
        times a month and it is not just a slow Friday, it is a hit to your annual income.</p>
      <p className="text-md text-white shadow-text pt-3">
        The hours lost to manual call handling pile up fast. Staff get pulled away from real work to answer the
        phone, repeat the same answers to routine questions, and log details by hand. This is not just
        inefficient; it is a drain on your team&#39;s focus and energy. When your best technician spends half an
        hour a day on the phone instead of on jobs, that is billable time gone. For solo operators, every call
        that interrupts field work is money left on the table.</p>
      <p className="text-md text-white shadow-text pt-3">
        Errors multiply in the gaps. When leads are logged by hand, scribbled notes, voicemails, or sticky notes
        on a monitor, details get lost or mixed up. Names are misspelled, numbers mistyped, and appointment
        times double-booked. This creates a cycle of callbacks, apologies, and missed second chances. The team
        spends time chasing the same lead twice, or worse, loses the lead entirely because nobody remembers who
        owns the follow-up.</p>
      <p className="text-md text-white shadow-text pt-3">
        Delays are built into the status quo. When a call comes in after hours or when the front desk is busy,
        the prospect waits for a callback, if they wait at all. In the time it takes to return the call, the
        lead may have already booked with someone else. This lag between inquiry and response is deadly in a
        market where speed-to-lead decides who gets the business. For businesses that rely on appointments,
        dental practices, HVAC, legal services, a slow response means empty slots and wasted marketing spend.</p>
      <p className="text-md text-white shadow-text pt-3">
        The risk does not stop with lost sales. When communication systems are disconnected, important details
        slip through. A customer might text in a question and get no answer because the team only checks the
        phone line. Another might call after hours and never get a follow-up because their message was lost in a
        sea of voicemails. The cost is not just immediate revenue, it is reputation. A pattern of missed or
        mishandled calls leads to negative reviews, lower referral rates, and a shrinking pipeline.</p>
      <p className="text-md text-white shadow-text pt-3">
        Staff burnout is the hidden cost. When your team is stretched thin, forced to jump between calls,
        paperwork, and in-person service, mistakes rise and morale falls. The best people spend their days on
        tasks that do not require their skills, while high-value work gets pushed aside. The end result is
        turnover, retraining, and a cycle of lost productivity that only gets more expensive over time.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a small business, the math is clear. The status quo means paying in lost sales, wasted hours,
        preventable errors, and reputational risk. The business absorbs every dollar that slips away, every hour
        lost to callbacks, and every customer who does not come back. And the longer you run things by hand, the
        more these costs compound, quietly draining growth from the inside out.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-it-really-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Really Costs to Keep Doing This by Hand
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
              <h2 id="what-it-really-costs-to-keep-doing-this-by-hand" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Really Costs to Keep Doing This by Hand
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
