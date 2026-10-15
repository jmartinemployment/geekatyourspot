export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every week, a small business in Miami-Dade loses a lead to voicemail. The phone rings while the owner is
        with a customer or out on a job. No one picks up. The caller hangs up, maybe leaving a message, maybe
        not. Minutes later, that caller is booking with a competitor who simply answered. The cycle repeats:
        revenue slips away quietly, and no one on the team sees the real cost until the month’s numbers show
        another gap.</p>
      <p className="text-md text-white shadow-text pt-3">
        It is not just about one lost sale. For local service businesses, a missed call often means losing the
        lifetime value of a customer, plus the referrals they would have made. Even a handful of missed calls
        each month can add up to tens of thousands of dollars in lost business over a year. Meanwhile, relying
        on traditional virtual receptionist services brings its own pain: unpredictable bills that spike with
        every minute spent on the line, expensive monthly minimums, and after-hours coverage that costs extra.
        Many of these systems are built for enterprise budgets and lock small teams into contracts sized for
        companies ten times their size. The result: businesses either pay for more than they need, or run thin
        and keep missing opportunities.</p>
      <p className="text-md text-white shadow-text pt-3">
        An Intelligent Receptionist changes this equation. Instead of letting calls go unanswered or paying
        premium rates for basic tasks, small businesses in Broward, West Palm Beach, and Miami-Dade counties can
        capture every lead, day or night, with a tool that fits their real-world workflow and their budget.
        AI-powered receptionists answer instantly, filter spam, qualify leads, and book appointments, all for a
        predictable monthly cost. The business stops leaking revenue from missed connections and stops wasting
        time on calls that do not matter. Staff get their focus back, customers get a response right away, and
        owners see exactly what every call means for their bottom line.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a small business, the right Intelligent Receptionist is not an upgrade, it is a fix for the core
        problem that keeps them running in place: missed calls, lost leads, and fractured attention. With a
        solution designed for the pace and price point of a local team, the business stops paying enterprise
        rates for coverage it does not use and finally controls the flow of every new opportunity.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
