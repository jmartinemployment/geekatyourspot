import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        TaxValet is designed for small businesses who have outgrown the point where spreadsheets, basic
        accounting software, or DIY solutions can keep up with multi-state sales tax demands. This is not a
        generic compliance tool, it is built for teams who are selling across state lines, using multiple sales
        channels, and facing the reality of economic or physical nexus in more than one jurisdiction. If you are
        a founder or finance lead in Miami-Dade, Broward, or West Palm Beach, and you have hit the $100,000 or
        200 transaction threshold in states outside Florida, TaxValet is engineered for your exact pain points.</p>
      <p className="text-md text-white shadow-text pt-3">
        You will see the most value from TaxValet if you are dealing with any of these situations:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>You manage inventory across third-party fulfillment networks (Amazon FBA, 3PLs) and need to track physical presence triggers in multiple states.</li>
        <li>Your business sells through more than one channel, your own website, marketplaces, wholesale, phone orders, and you cannot reliably combine all sales data for compliance.</li>
        <li>You have received a notice from a state tax authority and are unsure if you have missed a filing or crossed a nexus threshold.</li>
        <li>You are expanding rapidly and want to avoid hiring a full-time tax manager, but need the same level of expertise and coverage.</li>
        <li>You have historical exposure, years where you may have missed filings or under-collected tax, and need to clean it up without triggering audits or penalties.</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        TaxValet is not a fit for every business. If you are a micro-merchant selling only in your home state,
        with no plans to expand or no risk of crossing nexus thresholds elsewhere, the cost and scope of
        TaxValet may be more than you need. The same goes for businesses who want to stay fully hands-on and do
        not want to delegate compliance. TaxValet’s model is built around taking the work off your plate, not
        providing a dashboard for you to manage every step yourself.</p>
      <p className="text-md text-white shadow-text pt-3">
        Where TaxValet stands out is in the handoff. You do not just get a checklist or a piece of software; you
        get a dedicated team that reviews your entire sales footprint, builds a compliance roadmap, and then
        executes every step, from registration to filings, to handling notices and audit defense. This is not
        just about avoiding mistakes; it is about transforming compliance from a weekly fire drill into a
        background process you do not have to think about.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform also suits businesses who value predictable, flat pricing. With plans starting at $560 per
        month, you know your compliance costs up front. There are no surprise overages, no extra charges for new
        states, and no penalty fees if TaxValet makes a mistake. For a team that has seen software bills spike
        during peak sales or when expanding, this stability is a real advantage.</p>
      <p className="text-md text-white shadow-text pt-3">
        If you are still in the early stages, selling in one state, with low order volume, and no inventory
        outside Florida, it is worth starting with simpler solutions. But as soon as you cross into multi-state
        sales or start using third-party fulfillment, the risk and workload grow fast. At that point, TaxValet
        is not just a convenience; it becomes the difference between scaling smoothly and getting buried under
        compliance chaos.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in South Florida looking to offload multi-state
        sales&nbsp;tax compliance, TaxValet is a
        purpose-built answer. It is not the cheapest tool, nor is it the most hands-on. Instead, it is the only
        solution that takes the entire process off your plate, stands behind its work with an audit guarantee,
        and lets you hand over the risk and the grind, so your Friday afternoons are spent running your
        business, not sorting through state notices.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<Link id={`tools-accounting-multi-state-sales-tax-nexus-thetaxvalet-right-fit-booking-your-free-consultation${idSuffix}`} href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">booking
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
              <h2 id="who-taxvalet-is-built-for-and-when-it-is-not-the-right-fit" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who TaxValet Is Built For, and When It Is Not the Right Fit
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
              <h2 id="who-taxvalet-is-built-for-and-when-it-is-not-the-right-fit-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who TaxValet Is Built For, and When It Is Not the Right Fit
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
