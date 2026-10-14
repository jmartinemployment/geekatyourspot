export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The South Florida retailer from the opening is now deep into the fallout. Their operations manager
        spends Friday afternoon with spreadsheets from Shopify, Amazon, and QuickBooks, trying to untangle which
        sales count toward which state’s threshold. The team is not just looking for a number; they are trying
        to avoid a penalty that could wipe out the profit from a key client. This is not a rare situation. For
        small businesses selling online or across state lines, Multi-State Sales Tax Nexus is the compliance
        risk that comes out of nowhere and can stall growth overnight.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first place this goes wrong is in tracking. Small businesses often assume sales tax exposure is only
        about total revenue, but in many states, 200 transactions can trigger nexus even if the dollar total is
        low. The team in Miami-Dade might cross that line with a few big orders or a batch of smaller ones, and
        the law does not care if they were ready. Missing the transaction count means missing the legal trigger,
        and that means uncollected tax, back filings, and fines. The rules do not stand still. Each state sets
        its own thresholds, and those can change mid-year. A business that keeps to a manual process is always
        at risk of being caught off guard.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next comes the problem of rates. Most e-commerce platforms let you set up basic tax tables by ZIP code,
        but these do not keep up with local rate changes, home-rule districts, or special tax boundaries. If you
        set a flat rate for a state but miss a city or county surcharge, you are under-collecting. That
        under-collection is your liability, not the customer’s. When the auditor comes, they do not care if the
        mistake was a missed update or a software gap. The cost is not just the tax owed but the penalties and
        interest that pile up on top.</p>
      <p className="text-md text-white shadow-text pt-3">
        Registration is another trap. Many teams do not realize that collecting tax before registering with a
        state is a violation. Manual processes make it easy to miss the moment when registration becomes
        mandatory. Some states require registration and collection as soon as you cross the threshold, not at
        the end of the year or the next quarter. Waiting too long to register can turn a simple mistake into a
        compliance crisis. Even after registration, the team must file returns on the schedule each state sets,
        monthly, quarterly, or annually. Miss a deadline, and the penalties start, even if you had no sales that
        month. Filing a zero return late is still a fine.</p>
      <p className="text-md text-white shadow-text pt-3">
        The burden grows with every new state. Each state’s sales must be tracked separately, and each return
        has its own format, deadlines, and reporting rules. Manual reconciliation across platforms is slow and
        error-prone. Shopify gives you Shopify sales, Amazon gives you Amazon sales, but you need the combined
        number for each state. If the numbers do not match, someone has to spend hours reconciling them. The
        risk is not just lost time but lost money. Underreporting leaves you open to audits and back taxes,
        overreporting means you are paying more than you owe.</p>
      <p className="text-md text-white shadow-text pt-3">
        Exemption certificates add another layer of risk. For B2B sales, accepting an invalid or expired
        exemption certificate puts the liability back on you. Tracking and validating certificates manually is
        tedious, and mistakes are easy to make. In an audit, missing or invalid certificates can mean paying tax
        out of your own pocket.</p>
      <p className="text-md text-white shadow-text pt-3">
        The final cost is staff time and morale. When compliance eats up days each month, the team cannot focus
        on sales, service, or growth. The owner is pulled into late-night data pulls, the bookkeeper is buried
        in spreadsheets, and the risk of burnout rises. The uncertainty, never being sure if you are truly
        compliant, creates anxiety that lingers even after the filings go out. Every new state you sell into
        multiplies the risk and the workload. For a small business without a tax department, this is not
        sustainable.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the reality for small businesses trying to manage Multi-State Sales Tax Nexus by hand. The risk
        is not just a fine or a late fee; it is the threat of an audit that could reach back years, the hours
        lost to manual tracking, and the opportunity cost of stalled growth. Until the process is automated,
        every sale across state lines is a potential liability waiting to surface.</p>
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
