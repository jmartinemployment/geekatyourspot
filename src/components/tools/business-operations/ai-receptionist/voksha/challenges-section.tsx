export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The real cost of sticking with manual or legacy receptionist systems hits small businesses in
        Miami-Dade, Broward, and West Palm Beach hardest. A missed call is not just a missed appointment, it is
        a lost customer, lost referrals, and a gap that shows up in the numbers at month’s end. For a local HVAC
        company, dental practice, or salon, every unanswered ring is another client booking with a competitor
        who simply picked up. The damage multiplies with every referral that never happens because the first
        interaction failed.</p>
      <p className="text-base text-white shadow-text pt-3">
        Traditional virtual receptionist services promise coverage, but bring their own headaches. The pricing
        is set up for enterprise budgets, not the reality of a five-person team. You pay a monthly minimum, then
        see unpredictable bills spike with every extra minute on the line. After-hours support comes at a
        premium, and the fine print locks you into contracts sized for companies ten times your size. Instead of
        flexibility, you get rigid bundles and a creeping sense that you are paying for more than you need, or
        worse, paying for features you will never use.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual coverage, the owner grabbing the phone between jobs, a front desk staffer juggling calls while
        checking in clients, means fractured focus. The team gets pulled from the work that actually moves the
        business: serving customers, closing sales, or keeping operations running. Calls go to voicemail during
        the lunch rush or after closing, and most callers do not leave a message. Research shows that 80 to 85
        percent of people who reach voicemail hang up. They do not call back. They move on.</p>
      <p className="text-base text-white shadow-text pt-3">
        The pain is not just missed revenue. There is the frustration of fielding spam and robocalls that tie up
        lines, burning time and attention. There is the cost of having to hire, train, and manage a human
        receptionist, an expense that makes sense for a 40-person office, but not for a local shop. Payroll,
        benefits, sick days, and turnover all add up. That is money that could go to growth, not just keeping
        the lights on.</p>
      <p className="text-base text-white shadow-text pt-3">
        Legacy systems add another layer of waste. Overly complex phone trees frustrate real customers, sending
        them through endless menus when they just want to schedule a visit or ask a question about parking.
        Small businesses do not have dedicated IT teams to configure or maintain these systems, so upgrades get
        skipped, features go unused, and the tech becomes a source of confusion rather than relief. When the
        business does grow, scaling up means either overloading the current staff or hiring in costly, lumpy
        increments, never a smooth, predictable path.</p>
      <p className="text-base text-white shadow-text pt-3">
        The bottom line: the old way costs more than it looks on paper. Missed calls mean lost business.
        Expensive contracts and minute-based billing punish growth and flexibility. Manual coverage fractures
        your team’s focus and wastes payroll. And every day spent managing the phone line is a day not spent
        building the business. This is where Voksha breaks the cycle. It is not about adding more tech for
        tech’s sake. It is about removing the hidden costs, the wasted time, and the lost opportunities that
        come from doing reception the status-quo way.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-reception-the-old-way" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Reception the Old Way
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
              <h2 id="what-it-costs-to-keep-doing-reception-the-old-way-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Reception the Old Way
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
