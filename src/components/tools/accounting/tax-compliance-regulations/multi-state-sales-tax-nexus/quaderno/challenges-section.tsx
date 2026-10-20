
export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses in South Florida run into Multi-State Sales Tax Nexus before they are ready.
        A&nbsp;SaaS&nbsp;founder in Miami-Dade lands a customer in
        Texas, then another in New York, and the numbers look good, until the Friday afternoon scramble to check
        if the business has crossed a sales tax threshold somewhere new. This is not a hypothetical. Crossing
        $100,000 in revenue or 200 transactions in a state is the point where sales tax collection becomes
        mandatory, and few teams notice until it is too late. The cost is not just the hours spent checking
        spreadsheets. It is the risk of missing a registration deadline, filing late, or collecting the wrong
        amount of tax. Each error brings the threat of penalties, back taxes, and a scramble to fix things
        retroactively.</p>
      <p className="text-md text-white shadow-text pt-3">
        The deeper problem is that every state has its own rules. Digital products are taxable in Texas, but not
        in Florida. California changes its requirements with little warning. The team’s core accounting software
        does not keep up with these differences, and manual tracking falls behind as soon as sales pick up. The
        result is operational paralysis. A single accountant, or even a small finance team, cannot keep up with
        more than 11,000 tax jurisdictions. Each new sale brings a new compliance risk. The business wants to
        grow, but every new state adds another layer of complexity, another deadline, another chance for an
        audit to go wrong.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual processes break in several ways. First, there is digital product confusion. Many teams do not
        realize that something as simple as
        a&nbsp;SaaS&nbsp;subscription can be taxable in one state and
        not in another. This leads to invoices that are wrong from the start. Second, there is the problem of
        over-collecting tax. Out of caution, a business might charge the local South Florida rate to every
        customer, even those who should pay less or nothing in their own state. This not only frustrates
        customers but also exposes the business to legal risk if the state audits and finds the wrong rates were
        charged.</p>
      <p className="text-md text-white shadow-text pt-3">
        Fragmented billing systems make things worse. A business might use Stripe for subscriptions, PayPal for
        one-off sales, and have a WooCommerce store on the side. Each system keeps its own records, and none of
        them knows what the others are doing. This creates a patchwork of tax data that is impossible to
        reconcile by hand. The team ends up issuing standard receipts that do not meet the legal requirements
        for tax breakdowns in many states, setting themselves up for problems if an audit comes. When a problem
        is discovered, such as realizing the economic nexus threshold was crossed two years ago, there is no
        easy way to go back and fix it. Calculating historical local rates and producing the correct paperwork
        becomes a full-time job for weeks or months.</p>
      <p className="text-md text-white shadow-text pt-3">
        The final blow comes when the business tries to prepare for tax filing. Each state wants its own forms,
        its own breakdowns, and its own deadlines. The team has to pull data from multiple systems, check each
        invoice, and hope nothing was missed. The risk of error is high, and so is the cost of fixing those
        errors after the fact. Every missed threshold, every late filing, and every incorrect invoice is a
        potential audit trigger. For a small business, a single audit can mean thousands of dollars in penalties
        and weeks of lost productivity. The stress and lost focus are real. The business spends more time
        surviving compliance than growing sales.</p>
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
              <h2 id="what-it-costs-to-keep-doing-this-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
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
