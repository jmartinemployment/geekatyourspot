import Link from "next/link";

export default function PreparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        After you decide to automate multi-state sales&nbsp;tax
        compliance, the next steps are clear and structured, there is no guesswork left. You
        start with a free assessment, which is not a quick chat but a real diagnostic of your current exposure.
        At this stage, you should expect direct questions about your channels, sales data, and where you ship,
        not just a demo of software features. The goal is to map out every state where your sales, transaction
        counts, or inventory might trigger a filing obligation. This first step is not a formality, it is the
        foundation of your compliance plan.</p>
      <p className="text-base text-white shadow-text pt-3">
        With business objectives and risk points mapped, you move straight
        to&nbsp;data quality. Your team will need to supply
        clean sales data, broken out by channel and state, and be ready to answer questions about how you store
        and reconcile orders. If your current setup is a mix of Shopify exports, Stripe settlements, and
        QuickBooks invoices, the right tool, be it TaxCloud, TaxJar, or Quaderno, plugs directly into those
        systems to pool the data automatically. The assessment will flag gaps or inconsistencies, and you will
        either clean them up or the implementation team will, depending on your agreement. If your data is a
        mess and you cannot reconcile by state or channel, expect the rollout to pause until this gets sorted.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once the data is clean, the integration phase begins. For most small businesses in South Florida, the
        process can be as quick as a few days if your sales channels are standard (Shopify, Amazon, Stripe,
        QuickBooks). The tool you choose will handle the heavy lifting: TaxCloud, for example, connects
        via&nbsp;API&nbsp;to your e-commerce stack, pulls in every
        transaction, and runs threshold analysis by state. If you are on multiple platforms or have unique
        workflows, Quaderno stands out for its ability to centralize data from Stripe, PayPal, and Braintree
        without custom coding. Zamp layers in hands-on oversight, with a team that audits your mappings and
        double-checks the system before you go live.</p>
      <p className="text-base text-white shadow-text pt-3">
        A typical implementation sequence looks like this:</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Initial exposure analysis and mapping of current obligations by state (including physical and economic nexus).</li>
        <li>Data assessment and cleanup, either by your team or the vendor’s specialists, ensuring every transaction is correctly coded and assigned to a state.</li>
        <li>System integration, syncing all relevant sales, inventory, and billing platforms to the compliance engine.</li>
        <li>Live threshold monitoring begins: the system starts issuing warnings as you approach state lines, so you are never caught off guard.</li>
        <li>Automated registration and filing are triggered the moment a threshold is crossed, TaxCloud and Zamp handle this end-to-end, including state paperwork and ongoing filings.</li>
        <li>Ongoing audit support and compliance checks, tools like TaxValet offer audit defense and historical cleanup, while TaxJar provides real-time dashboards for executive oversight.</li>
      </ol>
      <p className="text-base text-white shadow-text pt-3">
        Throughout this rollout, expect regular check-ins, not just automated emails, but real conversations
        with an implementation specialist or tax advisor. You will not be left to interpret system errors or
        state notices on your own. For example, Zamp’s team steps in to resolve regulatory letters, while
        TaxValet’s managed service handles local filings and historical cleanups if needed. You should also
        expect to see clear, actionable dashboards: every state’s threshold, your progress toward it, and alerts
        when a filing or registration is required.</p>
      <p className="text-base text-white shadow-text pt-3">
        After go-live, your team’s day-to-day workload drops sharply. Manual tracking, spreadsheet
        reconciliation, and state-by-state research disappear. If a new sales channel is added or your business
        model shifts, a quick update to your integration or a call with your support team is all it takes to
        keep compliance tight. If you ever get an audit letter or state notice, your support team (from Zamp or
        TaxValet) handles the response and paperwork, no more weekends lost to government correspondence.</p>
      <p className="text-base text-white shadow-text pt-3">
        For the Broward retailer from the opening, this is where the stress lifts. The owner gets a live
        dashboard showing every state’s exposure, and the finance team receives alerts before any threshold is
        crossed. There are no more Friday afternoons spent panicking over missing data or late filings. Instead,
        every order, every new channel, and every state is covered, automatically. What you should expect is not
        just fewer errors, lower risk, and saved time, but a business that can scale with confidence, knowing
        the compliance map updates itself in real time.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<Link href="#consultationAppointment2xl" id={`use-cases-accounting-multi-state-sales-tax-nexus-preparing-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</Link>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
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
              <h2 id="what-happens-next-what-to-expect-from-a-real-multi-state-tax-rollout" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Happens Next: What to Expect From a Real Multi-State Tax Rollout
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
              <h2 id="what-happens-next-what-to-expect-from-a-real-multi-state-tax-rollout-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Happens Next: What to Expect From a Real Multi-State Tax Rollout
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
