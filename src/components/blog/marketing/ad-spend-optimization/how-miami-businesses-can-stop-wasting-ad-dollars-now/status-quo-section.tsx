export default function StatusQuoSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Doing Budget Ad Copy &amp; Message Validation by hand costs your business far more than the time you spend
        tinkering with ad settings or reworking headlines. Every hour you pour into manual tweaks, every error that
        slips through, and every delay in catching a failing campaign turns into real money lost, and the burden
        lands on you, not the platform.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first and most painful cost is wasted budget. When you try to adjust keyword bids or targeting by hand,
        you run into the “reset” problem: each manual change disrupts the ad platform’s learning algorithm. Instead
        of your campaigns getting smarter, they get stuck. Your ads either stop delivering, show to the wrong
        people, or drain your daily cap on low-value clicks. For a small business with a tight $500 monthly budget,
        a single day’s mistake, like leaving a broad search term or running ads outside your delivery radius, can
        burn a week’s spend with nothing to show but junk traffic (<a id={`blog-marketing-budget-ad-copy-message-validation-status-quo-source-localiq-com${idSuffix}`} href="https://localiq.com/blog/local-ppc/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">LocaliQ</a>,
        as of Oct 23, 2026). There’s no cushion for recovery, and the loss is permanent.</p>
      <p className="text-base text-white shadow-text pt-3">
        Delays are the next hidden drain. Manual validation means you are often the last to know when something goes
        wrong. If a headline goes stale or a placement underperforms, there is no alert, just a slow drop in
        results. By the time you notice, the budget has already bled out. For owners who check dashboards weekly,
        that means days of spending on dead creative, or on ads running outside your true local market. The cost is
        not just lost money; it is lost opportunity. Someone else’s ad is filling the space your budget just
        abandoned.</p>
      <p className="text-base text-white shadow-text pt-3">
        The human cost is real too. If you try to keep up with every new campaign, test version, and ad channel on
        your own, the admin overhead grows faster than your returns. You spend evenings and weekends fixing mistakes
        that automation could have caught in seconds. Over time, this means more stress, more missed leads, and less
        time running the business you care about. If you bring in staff to help, their hours go into repetitive
        dashboard checks and spreadsheet updates, not into actual growth. The business absorbs every inefficiency,
        and the owner wears every missed opportunity.</p>
      <p className="text-base text-white shadow-text pt-3">
        Errors multiply fast in a manual setup. Forget to pause a failing ad, and your spend keeps leaking. Miss a
        setting for geo-targeting, and half your clicks come from outside your service area. Let a single broad
        keyword run unchecked, and you pay for people looking for free how-to guides rather than buyers. Each
        mistake is a direct hit to your bottom line. Unlike big companies, you cannot afford to let “learning
        phases” or “test cycles” play out for weeks. Every dollar wasted is one less lead, and there is no one to
        absorb the loss but you.</p>
      <p className="text-base text-white shadow-text pt-3">
        For Miami small businesses on micro ad budgets, the real cost of manual Budget Ad Copy &amp; Message
        Validation is not just in lost efficiency or slow campaigns, it is in every dollar that leaves your account
        without a chance of returning as revenue. The weight of those losses falls squarely on the owner and their
        team. Until you take the friction, repetition, and error out of the process, you are carrying the cost
        yourself, every single day.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-real-cost-of-manual-budget-ad-copy-message-validation-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Real Cost of Manual Budget Ad Copy &amp; Message Validation for Small Teams
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-real-cost-of-manual-budget-ad-copy-message-validation-for-small-teams-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Real Cost of Manual Budget Ad Copy &amp; Message Validation for Small Teams
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
