export default function StatusQuoSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When you look at what keeps a small team in Broward or Miami-Dade stuck, it is not just inefficiency,
        it is real dollars and opportunity lost. Every hour spent manually rewriting an email, reformatting a
        blog post, or chasing down approvals is an hour that could have gone to growing the business. For most
        small teams, this is not a theoretical problem. It shows up as late nights, missed deadlines, and
        staff who are always on the edge of burnout.</p>
      <p className="text-md text-white shadow-text pt-3">
        The biggest cost comes from wasted hours. When the process is manual, repetitive tasks pile up. Staff
        spend a chunk of the week copying and pasting content, switching between apps, or rewriting the same
        information for different audiences. This is not just busywork, it adds up to hundreds of hours a year
        that could have gone to strategy, customer engagement, or closing new business. And because these
        tasks are tedious, they are also where errors creep in: the wrong version gets published, a key update
        is missed, or an email goes out with a mistake that damages credibility.</p>
      <p className="text-md text-white shadow-text pt-3">
        Delays are another hidden cost. Every time a piece of content waits in a queue for approval, every
        time someone has to ask a clarifying question or hunt down missing context, the schedule slips. In a
        small business, these delays are not absorbed by a big team, they land directly on the few people who
        are already stretched thin. Projects stall, campaigns miss their window, and opportunities pass by
        while the team is stuck in inbox ping-pong or spreadsheet chaos.</p>
      <p className="text-md text-white shadow-text pt-3">
        The risk multiplies as the business grows. Without a structured, data-driven plan, teams end up
        guessing which topics matter or which keywords to chase. This leads to wasted effort on content that
        never ranks, never gets seen, and never drives leads. Worse, it leaves the business exposed to
        competitors who are using AI to map out the real gaps and move faster. When approval workflows are ad
        hoc or unclear, brand reputation is also at risk, unapproved or off-brand posts can go live, or
        inconsistent messaging can confuse customers and partners.</p>
      <p className="text-md text-white shadow-text pt-3">
        The people who pay the price are not just the marketers. Sales teams wait for content that supports
        their outreach. Owners and managers are forced to step in to clean up mistakes or chase down answers.
        Customers see delays in communication or inconsistent follow-up. And when the process finally breaks,
        it is the business owner who absorbs the real cost: lost leads, missed revenue, and a team that is too
        busy putting out fires to focus on growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is not how it has to be. The right content planning system, one that uses AI to automate the
        repetitive work and surface the best opportunities, can flip the equation. Instead of busywork, teams
        get back focus, consistency, and time to do what really matters. But until that system is in place,
        the cost of the status quo is paid every day, in wasted time, rising errors, and business that goes to
        someone else.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-real-cost-of-doing-content-planning-by-hand-time-errors-and-who-pays" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Real Cost of Doing Content Planning by Hand: Time, Errors, and Who Pays
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
              <h2 id="the-real-cost-of-doing-content-planning-by-hand-time-errors-and-who-pays" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Real Cost of Doing Content Planning by Hand: Time, Errors, and Who Pays
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
