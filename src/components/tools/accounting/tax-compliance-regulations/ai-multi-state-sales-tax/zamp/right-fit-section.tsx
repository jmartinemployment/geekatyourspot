import Link from "next/link";
export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Zamp is built for small businesses that have crossed into multi-state sales tax territory but lack the
        internal resources for compliance. If you are running a team in Miami-Dade, Broward, or Palm Beach and
        you are selling across state lines, whether through e-commerce, wholesale,
        or&nbsp;SaaS, Zamp is designed for you. The businesses that see
        the most value are those that hit economic or physical nexus in multiple states before they have a full
        accounting or tax department. If your team is already stretched thin responding to state notices,
        tracking sales thresholds, or reconciling data from multiple channels, Zamp replaces that scramble with
        managed oversight.</p>
      <p className="text-base text-white shadow-text pt-3">
        Zamp is not just for online retailers. It fits any small business where sales activity in other states
        has triggered new registration and filing requirements. That
        includes&nbsp;SaaS&nbsp;vendors, distributors, and hybrid
        operations selling through both direct and marketplace channels. If your business is dealing with
        product taxability questions, frequent state notices, or the risk of misclassified sales, Zamp’s managed
        mapping and compliance team take those off your plate. Annmarie Skin Care, for example, relied on Zamp
        to manage 45 state accounts and maintain eight months of accurate, timely filings, freeing their team to
        focus on their core business.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the other hand, Zamp is not a fit for every business. If you have a dedicated CPA or tax department,
        and your team is comfortable configuring integrations, monitoring regulatory updates, and handling
        notices across 11,000 jurisdictions, you may not need a fully managed service. Some larger organizations
        prefer to keep compliance in-house for control or cost reasons. Likewise, if your business operates only
        in Florida or has not yet crossed any out-of-state nexus thresholds, Zamp’s full-service model may be
        more than you need right now. In those cases, a simpler, self-serve tool or manual process may suffice
        until your footprint grows.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small teams who are already feeling the strain, the practical difference is clear. Zamp removes the
        need to touch state portals, chase down missing filings, or interpret dense regulatory mail. Your
        internal effort is reduced to oversight and approval, no project management, no follow-up, no late-night
        calls to state agencies. If you are switching from another provider, Zamp’s onboarding manager handles
        the migration of historical data and registrations, so you do not face gaps in coverage or missed
        deadlines during the transition.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next step for a business in this position is not to wait for the next audit notice or penalty. It is
        to get a clear view of your current nexus exposure and the real cost of managing it in-house. For owners
        who have already lost weekends to spreadsheets and state calls, Zamp offers a way to return that time to
        your business. The difference is not just in technology, it is in the accountability and relief that
        come from having a team own the risk, not just the software.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<a href="#consultationAppointment2xl" id={`tools-accounting-ai-multi-state-sales-tax-zamp-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Do you sell to customers outside Florida?</li>
        <li>Where do you sell: your own website, online marketplaces (which ones), or in person?</li>
        <li>Are you registered to collect sales tax in any other state?</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Our post <Link id={`tools-accounting-tax-compliance-regulations-ai-multi-state-sales-tax-zamp-xlink-blog${idSuffix}`} href="/blog/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-what-south-florida-need-to-know-and-fix-before-expanding" className="text-[#C83803] hover:underline">Sales Tax Nexus Before You Expand</Link> weighs what separates Zamp’s managed model from software-only tools: onboarding specialists who review your product catalog and sales data before alerts start, a team that intercepts and resolves state notices, and registrations and mappings that are updated as states change their rules. It also states the boundary the evidence does not cross, since no service catches every edge case and none removes the need for clean multi-channel data. The free diagnostic and six-step rollout in our <Link id={`tools-accounting-tax-compliance-regulations-ai-multi-state-sales-tax-zamp-xlink-pillar${idSuffix}`} href="/use-cases/accounting/tax-compliance-regulations/ai-multi-state-sales-tax" className="text-[#C83803] hover:underline">AI Multi-State Sales Tax</Link> guide show where Zamp’s team steps in, from the go-live audit through regulatory letters.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-gets-the-most-from-zamp-and-who-should-look-elsewhere" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Gets the Most from Zamp, and Who Should Look Elsewhere
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-gets-the-most-from-zamp-and-who-should-look-elsewhere-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Gets the Most from Zamp, and Who Should Look Elsewhere
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
