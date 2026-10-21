
export default function TransformsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        TaxValet is built for one job: to take multi-state sales&nbsp;tax
        compliance&nbsp;off your plate, so your team can stop chasing filings and start focusing
        on growth. For a small business in South Florida expanding across state lines, this means the end of
        Friday afternoons spent reconciling sales data, tracking down missing transactions, or scrambling to
        answer state notices.</p>
      <p className="text-base text-white shadow-text pt-3">
        First, TaxValet actively monitors every trigger for economic and physical nexus. Instead of relying on
        what a single platform sees, it pulls together data from all your sales channels, e-commerce, wholesale,
        phone orders, and more. It does not just look for the $100,000 or 200-transaction threshold; it also
        tracks where your inventory lives, so if Amazon FBA or a third-party warehouse creates a new tax
        obligation, you know before the state does. This closes the gap that basic software leaves wide open,
        where sales happening outside the main platform go uncounted and unreported.</p>
      <p className="text-base text-white shadow-text pt-3">
        When it comes to filings, TaxValet handles every element, not just the state-level returns. Local and
        home-rule jurisdictions are included, so you do not get caught off guard by a missed county or city
        filing. The process is hands-off: TaxValet prepares, files, and pays your sales tax in every required
        jurisdiction, on time, every time. You do not have to log in, upload spreadsheets, or double-check
        deadlines. The risk of late fees, missed filings, or accidental non-compliance drops to zero for the
        periods TaxValet manages.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data reconciliation is fully managed. TaxValet checks your multi-channel sales data for errors,
        double-counting, and refund mismanagement. Returns are processed correctly, with negative transactions
        created to ensure you recover the right amount of tax. This means fewer hours spent fixing mistakes and
        less risk of overpaying or underpaying what you owe.</p>
      <p className="text-base text-white shadow-text pt-3">
        Product taxability is handled at the source. TaxValet researches and applies state-specific rules to
        your entire product catalog, configuring the exact settings inside your storefronts. Your team does not
        have to interpret tax codes or update settings manually. This reduces the chance of collecting the wrong
        amount of tax or missing an exemption, and it means you do not need to keep up with every change in
        state law yourself.</p>
      <p className="text-base text-white shadow-text pt-3">
        When an audit happens, TaxValet steps in as your representative. The team prepares the documentation,
        manages communications with state auditors, and covers penalties or interest if an error is their fault.
        The business owner does not have to spend hours digging through records or worry about facing auditors
        alone. For the periods TaxValet manages, the audit burden is off your desk.</p>
      <p className="text-base text-white shadow-text pt-3">
        Historical liabilities are not left behind. TaxValet starts with a complete nexus analysis during
        onboarding, pinpointing where and when you may have exposure. If back taxes or penalties are at risk,
        TaxValet can facilitate Voluntary Disclosure Agreements to reduce or eliminate penalties. The process is
        mapped out for you, with tailored advice based on your financial goals. Once you choose a path, TaxValet
        executes the plan, cleaning up liabilities and keeping your business protected going forward.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cash flow protection is built in. TaxValet safeguards collected sales tax by keeping it separate from
        operational funds, ensuring you always have the capital to pay tax bills on time. This prevents the
        scramble when filing deadlines arrive and avoids accidental shortfalls that lead to penalties or late
        fees.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses planning an exit or seeking investment, TaxValet’s meticulous recordkeeping and proactive
        cleanup of past liabilities mean fewer red flags during due diligence. Buyers and investors see a clean
        compliance history, which protects your company’s valuation and keeps deals on track.</p>
      <p className="text-base text-white shadow-text pt-3">
        Support is continuous and unlimited. TaxValet’s team of multi-state tax experts is available by phone,
        email, text, or web meeting. You get real answers from real people, not just automated responses or
        generic FAQs. This means you are never left to navigate changes in tax law or respond to state notices
        on your own.</p>
      <blockquote cite="https://thetaxvalet.com/services/sales-tax-compliance-management" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        TaxValet’s Fractional Sales Tax Department handles your entire sales tax compliance workload, eliminates
        your audit risk, and operates with accountability.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        The pricing model removes uncertainty. TaxValet charges a flat monthly fee, starting at $560 per month,
        with no hidden costs, upgrade fees, or surprise add-ons. You know exactly what you will pay, no matter
        how many filings or sales channels you add. This predictability is especially valuable for teams with
        tight budgets or those scaling quickly across new markets.</p>
      <p className="text-base text-white shadow-text pt-3">
        For the founder or small team in South Florida, the weekly reality changes. Instead of spending hours
        tracking thresholds, reconciling data, or responding to notices, you get that time back. The risk of
        missing a filing or triggering an audit drops away. The administrative burden of multi-state sales tax
        compliance is removed, replaced by a dedicated team that handles every detail. TaxValet does not just
        automate a few steps; it takes the entire job off your hands, so you can focus on what drives your
        business forward.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-taxvalet-removes-the-weekly-burden-of-multi-state-sales-tax-nexus" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How TaxValet Removes the Weekly Burden of Multi-State Sales Tax Nexus
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
              <h2 id="how-taxvalet-removes-the-weekly-burden-of-multi-state-sales-tax-nexus-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How TaxValet Removes the Weekly Burden of Multi-State Sales Tax Nexus
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
