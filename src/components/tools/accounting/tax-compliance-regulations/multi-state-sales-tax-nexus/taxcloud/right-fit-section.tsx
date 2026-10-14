import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        TaxCloud is designed for small and mid-market businesses that are selling across state lines and need to
        automate sales&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>&nbsp;without
        building a tax team. If you are a retailer, wholesaler,
        or&nbsp;<GlossaryLink slug="saas">SaaS</GlossaryLink>&nbsp;company in Miami-Dade, Broward, or West Palm
        Beach, and your online or remote sales are pushing you close to, or over, the $100,000 revenue or
        200-transaction threshold in other states, TaxCloud is built for you. This is not a tool for companies
        with a single-state focus or those who never cross state lines. It earns its keep when you need to
        manage compliance in several states at once, especially if you sell across multiple channels like
        Shopify, Amazon, and your own website.</p>
      <p className="text-md text-white shadow-text pt-3">
        TaxCloud works best for teams that want to remove manual compliance work and avoid the risk of late
        filings, missed registrations, or under-collection of tax. If you are already spending hours each month
        pulling reports from different platforms, reconciling data, or trying to figure out which states you owe
        tax in, TaxCloud will return those hours to your team and reduce your audit risk. The platform is also a
        strong fit for businesses that want to take advantage of the Streamlined Sales Tax (SST) program, if you
        qualify, you can get registration, calculation, and filing in 24 states at no cost. This is a major
        advantage over other tools or manual methods, where filing fees and consultant costs can add up quickly.</p>
      <p className="text-md text-white shadow-text pt-3">
        TaxCloud is not the right fit for every business. If you only sell in Florida and have no plans to
        expand, you do not need a multi-state tax compliance platform. If your operation is fully global, with
        complex VAT or GST needs outside the US and Canada, TaxCloud’s integrations may not cover every
        requirement, some global-first platforms go deeper on international tax. If you have a large in-house
        tax team or need custom workflows for highly specialized industries, you may find more flexibility in
        enterprise-focused products, but at a much higher cost and complexity.</p>
      <p className="text-md text-white shadow-text pt-3">
        For South Florida businesses considering TaxCloud, the next step is to assess your current exposure.
        Look at your sales by state, count the number of transactions, and see where you are approaching or have
        already crossed a nexus threshold. If you are unsure, TaxCloud’s own dashboard can help you monitor
        economic nexus in real time and send alerts as you approach a state’s limit. This proactive approach is
        critical, waiting until after you have crossed a threshold can mean late registrations, back taxes, and
        penalties.</p>
      <p className="text-md text-white shadow-text pt-3">
        The implementation process matters. TaxCloud is built for integration with platforms like Shopify,
        BigCommerce, WooCommerce, Magento, QuickBooks Online, Stripe, and Chargebee, but the real value comes
        when it is set up to match your business’s actual data structure and sales flows. Geek @ Your Spot
        specializes in deploying TaxCloud for small businesses in South Florida, handling the data mapping,
        configuration, and training so that the system works from day one. This is not a generic setup, each
        business has different sales channels, product codes, and exemption needs, and the configuration needs
        to reflect that. Geek @ Your Spot’s method starts with a free consultation, assesses
        your&nbsp;<GlossaryLink slug="data-quality">data quality</GlossaryLink>, and builds a phased plan that
        fits your objectives and existing systems.</p>
      <p className="text-md text-white shadow-text pt-3">
        If you are already using another tax platform and thinking about switching, TaxCloud supports guided
        migration, including moving historical data from providers like Avalara and TaxJar. This is important
        for audit readiness and for making sure your compliance history is complete. For businesses that need to
        automate compliance without adding headcount, TaxCloud’s pricing is predictable and affordable, starting
        at $19 per month for simpler setups and $79 per month for more complex, multi-channel environments.
        Filing fees are clear, and for SST-eligible businesses, many filings are free.</p>
      <p className="text-md text-white shadow-text pt-3">
        The bottom line: TaxCloud is for South Florida businesses that are ready to automate multi-state sales
        tax compliance, want to avoid the risk of manual errors, and need a solution that fits their scale and
        budget. It is not for companies with single-state operations or those needing deep global tax features.
        The path forward is to get a clear picture of your current exposure, decide if you are ready to
        automate, and, if so, work with a local expert who can configure TaxCloud to fit your business, not the
        other way around.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<Link id="tools-accounting-multi-state-sales-tax-nexus-taxcloud-right-fit-booking-your-free-consultation" href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">booking
        your free consultation</Link>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>In which states outside of Florida do you currently ship physical products, provide digital services, or have remote contractors/employees?</li>
        <li>Are you monitoring your sales volumes and transaction counts per state in real-time, or do you review them retroactively at the end of the year?</li>
        <li>What platforms are you using to sell online (e.g., Shopify, WooCommerce, Amazon), and how do those sales figures consolidate into your core accounting system?</li>
        <li>How do you currently distinguish between sales made through marketplace facilitators (like Amazon, which handle tax for you) versus direct-to-consumer sales on your own site where you hold the tax liability?</li>
        <li>When an out-of-state customer places an order, how does your system determine the exact local, county, and state sales tax rate at that specific rooftop address?</li>
        <li>How do you handle product taxability rules across different states, for instance, knowing that clothing, software-as-a-service (<GlossaryLink slug="saas">SaaS</GlossaryLink>), or digital goods are taxable in one state but exempt in another?</li>
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
              <h2 id="who-should-use-taxcloud-who-should-not-and-what-comes-next-for-south-florida-businesses" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Should Use TaxCloud, Who Should Not, and What Comes Next for South Florida Businesses
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
              <h2 id="who-should-use-taxcloud-who-should-not-and-what-comes-next-for-south-florida-businesses" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Should Use TaxCloud, Who Should Not, and What Comes Next for South Florida Businesses
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
