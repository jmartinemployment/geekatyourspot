export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Zamp is built for small businesses that have crossed into multi-state sales tax territory but lack the
        internal resources for compliance. If you are running a team in Miami-Dade, Broward, or Palm Beach and
        you are selling across state lines, whether through e-commerce, wholesale,
        or&nbsp;SaaS, Zamp is designed for you. The businesses that see
        the most value are those that hit economic or physical nexus in multiple states before they have a full
        accounting or tax department. If your team is already stretched thin responding to state notices,
        tracking sales thresholds, or reconciling data from multiple channels, Zamp replaces that scramble with
        managed oversight.</p>
      <p className="text-md text-white shadow-text pt-3">
        Zamp is not just for online retailers. It fits any small business where sales activity in other states
        has triggered new registration and filing requirements. That
        includes&nbsp;SaaS&nbsp;vendors, distributors, and hybrid
        operations selling through both direct and marketplace channels. If your business is dealing with
        product taxability questions, frequent state notices, or the risk of misclassified sales, Zamp’s managed
        mapping and compliance team take those off your plate. Annmarie Skin Care, for example, relied on Zamp
        to manage 45 state accounts and maintain eight months of accurate, timely filings, freeing their team to
        focus on their core business.</p>
      <p className="text-md text-white shadow-text pt-3">
        On the other hand, Zamp is not a fit for every business. If you have a dedicated CPA or tax department,
        and your team is comfortable configuring integrations, monitoring regulatory updates, and handling
        notices across 11,000 jurisdictions, you may not need a fully managed service. Some larger organizations
        prefer to keep compliance in-house for control or cost reasons. Likewise, if your business operates only
        in Florida or has not yet crossed any out-of-state nexus thresholds, Zamp’s full-service model may be
        more than you need right now. In those cases, a simpler, self-serve tool or manual process may suffice
        until your footprint grows.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small teams who are already feeling the strain, the practical difference is clear. Zamp removes the
        need to touch state portals, chase down missing filings, or interpret dense regulatory mail. Your
        internal effort is reduced to oversight and approval, no project management, no follow-up, no late-night
        calls to state agencies. If you are switching from another provider, Zamp’s onboarding manager handles
        the migration of historical data and registrations, so you do not face gaps in coverage or missed
        deadlines during the transition.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next step for a business in this position is not to wait for the next audit notice or penalty. It is
        to get a clear view of your current nexus exposure and the real cost of managing it in-house. For owners
        who have already lost weekends to spreadsheets and state calls, Zamp offers a way to return that time to
        your business. The difference is not just in technology, it is in the accountability and relief that
        come from having a team own the risk, not just the software.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<button type="button" data-scheduler-link id={`tools-accounting-multi-state-sales-tax-nexus-zamp-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</button>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>In which states outside of Florida do you currently ship physical products, provide digital services, or have remote contractors/employees?</li>
        <li>Are you monitoring your sales volumes and transaction counts per state in real-time, or do you review them retroactively at the end of the year?</li>
        <li>What platforms are you using to sell online (e.g., Shopify, WooCommerce, Amazon), and how do those sales figures consolidate into your core accounting system?</li>
        <li>How do you currently distinguish between sales made through marketplace facilitators (like Amazon, which handle tax for you) versus direct-to-consumer sales on your own site where you hold the tax liability?</li>
        <li>When an out-of-state customer places an order, how does your system determine the exact local, county, and state sales tax rate at that specific rooftop address?</li>
        <li>How do you handle product taxability rules across different states, for instance, knowing that clothing, software-as-a-service (SaaS), or digital goods are taxable in one state but exempt in another?</li>
        <li>Once you realize you have nexus in a new state, what is your current process for registering with their Department of Revenue and filing those returns on time?</li>
        <li>How are you collecting, validating, and storing tax exemption certificates for your B2B or wholesale clients out of state?</li>
        <li>If a state auditor from Texas or New York knocked on your door tomorrow, how long would it take your team to generate an accurate, granular report of every transaction and tax dollar collected in that state over the last three years?</li>
        <li>What is your current financial exposure if it turns out you have crossed economic nexus lines in three or four states over the past 12 months and failed to collect tax?</li>
      </ul>
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
