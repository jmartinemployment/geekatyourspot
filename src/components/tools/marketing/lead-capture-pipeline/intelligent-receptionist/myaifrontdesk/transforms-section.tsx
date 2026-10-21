
export default function TransformsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        My AI Front Desk is designed for small teams who cannot afford to lose a single lead or spend their days
        on repetitive admin. It does not just answer calls, it removes the need for constant monitoring, manual
        data entry, and the daily scramble to catch up on missed conversations. With My AI Front Desk, your
        business line is answered instantly, every time, by an AI that sounds and acts like a human
        receptionist. This means no more lost leads while you are in the field, no more voicemails that never
        get checked, and no more after-hours bottlenecks.</p>
      <p className="text-base text-white shadow-text pt-3">
        The AI picks up on the first ring, greets callers in your business name, and holds a real conversation,
        no menus, no scripts, no robotic delays. It understands what the caller needs, answers routine
        questions, and, when appropriate, books appointments directly into your live calendar. If the call is
        urgent or needs a human touch, it transfers the caller or alerts your team with a full transcript, so
        nothing is lost in handoff. For businesses that work across languages, My AI Front Desk detects and
        responds in over 20 languages, including Spanish, French, and Mandarin, making sure no caller is left
        behind due to a language barrier.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every interaction, call, text, email, or chat, is logged automatically into
        your&nbsp;CRM. Details like intent, timing, and outcome are
        recorded in structured fields, so your follow-up is organized and nothing slips through the cracks. For
        teams that rely on Google Calendar, Outlook, or Calendly, the AI sees your real-time availability and
        books appointments on the spot. Confirmation texts go out before the caller hangs up, reducing no-shows
        and eliminating the back-and-forth that slows down booking.</p>
      <p className="text-base text-white shadow-text pt-3">
        Routine admin work, like sending reminders, answering FAQs, and collecting intake information, happens
        automatically. The AI pulls from your own knowledge base, so callers always get accurate answers on
        pricing, services, and policies. When callers text for quotes or directions, the system responds in real
        time and turns every &quot;what are your prices?&quot; message into a qualified lead record. If a call
        is missed, the AI sends a text back within seconds, continues the conversation, and can book an
        appointment or collect intake forms, all without your team lifting a finger.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses with high call volumes or multiple locations, My AI Front Desk handles unlimited
        concurrent calls, so nothing goes to voicemail during peak hours. It routes calls by intent, store name,
        or even POS context, making sure every inquiry lands with the right person or department. All data is
        centralized, so your team has a complete view of every interaction, and reporting is tied directly to
        outcomes, booked appointments, conversions, and missed opportunities are all tracked without manual
        effort.</p>
      <p className="text-base text-white shadow-text pt-3">
        The result is not just saved time, but a real shift in how your team works. Hours that used to be spent
        on the phone, in the inbox, or chasing down voicemails are now free for billable work, customer care, or
        simply running the business. No more Monday morning catch-up, no more context switching, and no more
        lost leads. My AI Front Desk gives you the coverage of a full front desk, for less than the cost of a
        single answering-service hour per day. It is not just about answering the phone, it is about removing
        the distractions and admin that keep your business from growing.</p>
      <blockquote cite="https://www.myaifrontdesk.com/ai-receptionist/small-business" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Frontdesk is the AI receptionist for small business owners who can’t justify a full-time receptionist
        but can’t afford to miss calls.</blockquote>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-my-ai-front-desk-intelligent-receptionist-actually-removes-from-your-week" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What My AI Front Desk Intelligent Receptionist actually removes from your week
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
              <h2 id="what-my-ai-front-desk-intelligent-receptionist-actually-removes-from-your-week-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What My AI Front Desk Intelligent Receptionist actually removes from your week
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
