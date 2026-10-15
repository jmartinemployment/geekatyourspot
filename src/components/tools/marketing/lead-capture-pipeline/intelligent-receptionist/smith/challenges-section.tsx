import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every small business in South Florida knows the pain of missed connections. When a call rolls to
        voicemail or a web inquiry sits unacknowledged, it is not just a lost message, it is lost revenue. The
        plumber from the opening story, now at the end of his Friday, faces a full inbox and a list of calls he
        never even heard ring. Each one represents a job that went elsewhere, a client who will not call back,
        or a referral that dies before it starts. These are not just numbers. They are real dollars that never
        hit the books, projects that vanish without a trace because the front desk was stretched too thin or the
        &quot;Intelligent Receptionist&quot; system in place could not handle the reality of a busy day.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual intake is slow and error-prone, especially when staff are pulled in many directions. Calls come
        in after hours or while someone is on another line. The office manager tries to catch up, but every
        hand-off from phone to paper to&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;is a chance for
        mistakes or lost details. Even the best staff miss things when forced to juggle intake, scheduling, and
        customer service all at once. The cost here is not just the time spent on repetitive work. It is the
        opportunity cost of not capturing every lead, not qualifying prospects correctly, and not following up
        fast enough to win the job.</p>
      <p className="text-md text-white shadow-text pt-3">
        The limitations of pure automation show up fast. Many Intelligent Receptionist solutions sound
        promising, 24/7 coverage, instant responses, no need for extra staff, but they break down when a caller
        needs more than a scripted answer. A distressed customer, a high-value prospect with complex needs, or
        an urgent situation that does not fit the template will quickly expose the gaps. When a bot gives a
        wrong or tone-deaf response, it is not just awkward. It can damage your reputation and send a client
        running to a competitor. Worse, some callers hang up the moment they realize they are speaking to an
        automated system, especially if their need is urgent or sensitive.</p>
      <p className="text-md text-white shadow-text pt-3">
        Even when automation works, it often fails to collect the details that matter for high-value jobs. A
        script can grab a name and a number, but it rarely gathers the structured intake needed to qualify a
        lead for a big-ticket project or a legal case. That missing information means wasted follow-ups, lost
        time, and sometimes losing the client altogether. Many systems also fail to sync data with the
        business’s&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or scheduling tools, forcing staff to
        re-enter information by hand. This not only eats up hours but also introduces errors that show up later
        as double-booked appointments, missed deadlines, or incomplete records.</p>
      <p className="text-md text-white shadow-text pt-3">
        The biggest cost is invisible: the jobs you never even knew you lost. A missed call does not leave a
        trace in your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>. There is no alert or record. The client
        simply moves on, and the annual loss can quietly add up to six figures for even a small firm. For
        businesses where every call is a potential contract or case, the stakes are even higher. The attorney
        who misses a call during court, the HVAC company that cannot answer during a storm, the marketing agency
        whose prospects drop off after hours, all face the same problem. The front desk, whether human or
        automated, is only as good as its ability to handle real-world complexity, escalate when needed, and
        capture every opportunity.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is where the status quo breaks. Manual processes cannot scale, and pure automation cannot handle
        nuance. The result is a cycle of lost leads, frustrated staff, and revenue that quietly leaks away. For
        small businesses competing in the fast-paced markets of Miami-Dade, Broward, and West Palm Beach, this
        is not just a workflow problem, it is a growth problem. The cost is not just in missed calls, but in
        missed chances to build relationships, close deals, and grow the business.</p>
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
