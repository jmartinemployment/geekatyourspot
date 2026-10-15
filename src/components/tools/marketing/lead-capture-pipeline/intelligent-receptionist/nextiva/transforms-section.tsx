export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Nextiva clears the clutter. Instead of bouncing between phone lines, chat windows, and text threads,
        every customer conversation lands in one place. Calls, SMS, and web chats are unified, so no lead gets
        lost and no message sits unanswered. The team from the opening can see, at a glance, who called, who
        texted, who chatted, and what happened in every conversation. No more detective work, no more duplicate
        follow-ups, no more missed opportunities.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real change is what disappears from the team’s week. Staff stop spending hours tracking down who
        needs a callback or digging through three different apps for a customer’s last message. Instead, they
        see a complete record of every interaction, with context that follows the customer from channel to
        channel. If a customer starts with a web chat and switches to a call, the system keeps the whole story
        together. That means the team can respond faster, answer questions on the first try, and move on to the
        next job without losing momentum.</p>
      <p className="text-md text-white shadow-text pt-3">
        Routine questions, like hours, location, or service details, are answered instantly by Nextiva’s AI
        receptionist. No one on staff has to stop what they’re doing to repeat the same information for the
        tenth time that day. This frees up hours every week for work that actually requires a person: handling
        complex requests, solving real problems, or spending time with customers in person. Staff burnout drops
        because they’re not tied up with repetitive tasks, and the business can scale without hiring more people
        just to keep up with the phones.</p>
      <p className="text-md text-white shadow-text pt-3">
        Appointment booking becomes automatic. Nextiva checks real-time availability, books or reschedules
        instantly, and sends confirmation texts without any back-and-forth. No more phone tag, double bookings,
        or no-shows from missed reminders. The system integrates with calendars and scheduling tools, so once a
        job is booked, the customer gets a confirmation and a reminder, all without staff having to remember to
        follow up. This keeps the schedule full, reduces gaps, and stops revenue from slipping away because of
        missed appointments.</p>
      <p className="text-md text-white shadow-text pt-3">
        After-hours coverage is built in. When the shop closes, Nextiva keeps answering calls, capturing leads,
        and booking jobs. The business stops losing half its leads to voicemail or after-hours silence. Every
        customer gets a real response, no matter when they reach out, and the team comes in the next morning to
        a complete list of new appointments and leads, ready to go, no catch-up required.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform is built for scale. Nextiva handles dozens, even hundreds, of conversations at once, so
        there’s no need to staff up for busy periods or worry about calls going unanswered during a rush. Volume
        spikes, like seasonal peaks or marketing campaigns, no longer mean overtime or lost leads. The system
        absorbs the surge, so staff can focus on the work that matters.</p>
      <p className="text-md text-white shadow-text pt-3">
        For marketing and lead capture, Nextiva’s AI chatbot works around the clock, qualifying leads and
        routing them to the right person. It scores prospects based on real-time intent and firmographics, so
        the sales team spends time only on the leads most likely to convert. The pipeline fills up without
        anyone having to chase down every inquiry by hand.</p>
      <p className="text-md text-white shadow-text pt-3">
        Voice assistants give the business a true 24/7 front desk. Customers can get answers, book appointments,
        and get routed to the right person any time, day or night. The system is always on, always accurate, and
        always available, so no one waits for a callback or gets lost in a queue. This lifts customer
        satisfaction and keeps revenue growing without the overhead of extra staff.</p>
      <p className="text-md text-white shadow-text pt-3">
        The West Palm Beach HVAC team, by the next Friday, has stopped worrying about missed calls and lost
        chats. Every lead is logged, every customer gets a real answer, and the team has hours back to spend on
        jobs that pay the bills. Instead of scrambling to keep up, they see their schedule fill up, their
        no-shows drop, and their stress level fall.</p>
      <blockquote cite="https://www.nextiva.com/blog/ai-receptionist.html" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        An AI receptionist answers calls 24/7, captures leads, and routes callers.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses, the difference is tangible: less time wasted, fewer errors, and more sales closed.
        Nextiva’s Intelligent Receptionist does not just answer the phone, it removes the chaos, closes the
        gaps, and gives the team back control of their week.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-nextiva-actually-removes-from-your-week" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Nextiva Actually Removes From Your Week
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
              <h2 id="what-nextiva-actually-removes-from-your-week" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Nextiva Actually Removes From Your Week
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
