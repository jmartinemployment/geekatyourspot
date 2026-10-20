import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function MechanicsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The only way to keep up with Multi-State Sales Tax Nexus as a small business is to automate it from the
        ground up. The right approach wires the compliance engine straight into your sales process, so every new
        obligation is caught before it turns into a problem. This isn&#39;t a bolt-on afterthought. It&#39;s a
        process that starts with your business objectives, what you need to achieve, what you can&#39;t afford
        to risk, and where manual tracking or missed thresholds would put your cash flow or reputation on the
        line.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first phase is business objectives alignment. Here, the team sits down to map out your sales
        footprint, growth plans, and the hard limits you can&#39;t cross, such as more than $500,000
        in Texas revenue, or more than $500,000 and more than 100 sales in New York. The goal is clear: eliminate gray areas. If your
        Friday afternoon looks like the one described in the opening, an owner staring at a spreadsheet, unsure
        if they owe New York or not, the process hasn&#39;t been mapped tightly enough.</p>
      <p className="text-md text-white shadow-text pt-3">
        The table below gives the economic nexus thresholds for Florida, Texas, New York and California, as
        each state&#39;s tax agency published them when we checked on October 20, 2026. States change these
        rules, so confirm the current figure with the agency before you rely on it.</p>
      <table className="w-full text-left text-md text-white shadow-text mt-3 border-collapse">
        <thead>
          <tr className="border-b border-white/60">
            <th scope="col" className="py-2 pr-4 align-top font-bold">State</th>
            <th scope="col" className="py-2 align-top font-bold">Threshold</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-white/30">
            <th scope="row" className="py-2 pr-4 align-top font-bold">Florida</th>
            <td className="py-2 align-top">
              The&nbsp;<a id="use-cases-accounting-multi-state-sales-tax-nexus-mechanics-source-florida" href="https://floridarevenue.com/taxes/tips/Documents/TIP_21A01-03.pdf" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Florida
              Department of Revenue</a>&nbsp;requires a remote seller to collect Florida sales tax once its
              taxable remote sales into Florida passed $100,000 in the previous calendar year.</td>
          </tr>
          <tr className="border-b border-white/30">
            <th scope="row" className="py-2 pr-4 align-top font-bold">Texas</th>
            <td className="py-2 align-top">
              The&nbsp;<a id="use-cases-accounting-multi-state-sales-tax-nexus-mechanics-source-texas" href="https://comptroller.texas.gov/taxes/sales/remote-sellers.php" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Texas
              Comptroller</a>&nbsp;requires a remote seller to get a permit and collect Texas use tax once its
              total Texas revenue passes $500,000 in the preceding 12 calendar months. Texas has no transaction
              count.</td>
          </tr>
          <tr className="border-b border-white/30">
            <th scope="row" className="py-2 pr-4 align-top font-bold">New York</th>
            <td className="py-2 align-top">
              The&nbsp;<a id="use-cases-accounting-multi-state-sales-tax-nexus-mechanics-source-new-york" href="https://www.tax.ny.gov/pubs_and_bulls/publications/sales/nexus.htm" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">New York
              Department of Taxation and Finance</a>&nbsp;requires a seller to register once it made more than
              $500,000 in sales of tangible goods delivered into New York and more than 100 of those sales in the
              immediately preceding four sales tax quarters. Both conditions must be met.</td>
          </tr>
          <tr>
            <th scope="row" className="py-2 pr-4 align-top font-bold">California</th>
            <td className="py-2 align-top">
              The&nbsp;<a id="use-cases-accounting-multi-state-sales-tax-nexus-mechanics-source-california" href="https://cdtfa.ca.gov/industry/wayfair/general-information.htm" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">California
              Department of Tax and Fee Administration</a>&nbsp;requires a retailer to register and collect
              California use tax once its sales of tangible goods for delivery into California pass $500,000 in
              the preceding or current calendar year. California has no transaction count.</td>
          </tr>
        </tbody>
      </table>
      <p className="text-md text-white shadow-text pt-3">
        Next comes&nbsp;<GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">data
        quality</GlossaryLink>&nbsp;assessment. Compliance is only as accurate as the data you feed in. At this
        stage, every sales channel, Shopify, Amazon, Stripe, PayPal, even offline invoices, gets pulled into one
        clean data stream. This is where tools
        like&nbsp;<Link id="use-cases-accounting-multi-state-sales-tax-nexus-mechanics-taxcloud" href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud" className="text-[#0B162A] hover:underline">TaxCloud</Link>&nbsp;and&nbsp;<Link id="use-cases-accounting-multi-state-sales-tax-nexus-mechanics-zamp" href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/zamp" className="text-[#0B162A] hover:underline">Zamp</Link>&nbsp;earn
        their keep. TaxCloud, for example, plugs into platforms like Shopify and Amazon, collecting real-time
        data and issuing alerts when you approach economic nexus in any state. Zamp goes further for teams
        without internal tax resources, providing continuous monitoring and human oversight, so nothing gets
        missed if a platform changes its data format or a plugin fails. The point is to clean up the chaos: you
        want one source of truth, not five disconnected reports that never add up.</p>
      <p className="text-md text-white shadow-text pt-3">
        The third phase is tech selection and architecture. Here, you decide what actually runs your nexus
        tracking and compliance. The right stack is built for your real-world mix of sales, not for an idealized
        single-channel setup. That means picking tools that handle all the edge cases,
        like&nbsp;<Link id="use-cases-accounting-multi-state-sales-tax-nexus-mechanics-quaderno" href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno" className="text-[#0B162A] hover:underline">Quaderno</Link>&#39;s
        ability to track digital
        and&nbsp;<GlossaryLink slug="saas" className="text-[#0B162A] hover:underline">SaaS</GlossaryLink>&nbsp;sales
        thresholds across US and international markets,
        or&nbsp;<Link id="use-cases-accounting-multi-state-sales-tax-nexus-mechanics-taxjar" href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar" className="text-[#0B162A] hover:underline">TaxJar</Link>&#39;s
        high-speed data ingestion for e-commerce brands who can&#39;t afford to wait for a batch job to finish
        before knowing if they owe tax. For businesses dealing with physical
        inventory,&nbsp;<Link id="use-cases-accounting-multi-state-sales-tax-nexus-mechanics-taxvalet" href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/thetaxvalet" className="text-[#0B162A] hover:underline">TaxValet</Link>&nbsp;provides
        tracking for where your stock is stored, so you never get caught by a surprise physical nexus in a state
        you forgot you were in.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Business objectives alignment: map out your sales footprint and thresholds.</li>
        <li><GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">Data quality</GlossaryLink>&nbsp;assessment: centralize and validate sales data from all channels.</li>
        <li>Tech selection and architecture: choose tools that match your actual sales mix and complexity.</li>
        <li>Pilot implementation strategy: roll out the system in a controlled, measurable way, validating every step.</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        The fourth phase is pilot implementation. This is where you wire the system into your billing
        environment and run smoke tests, no live compliance yet, just validating that the tax engine is catching
        every threshold, every registration requirement, and every filing deadline. If the system throws an
        alert for a state you thought you were clear in, that&#39;s a win: you want to catch that in the
        sandbox, not after a letter from a state auditor. During this pilot, Zamp and TaxValet often stand out
        for managed onboarding, taking responsibility for mapping your SKUs, importing historical data, and
        setting up alerts. TaxCloud and Quaderno, meanwhile, provide direct integrations for batch or real-time
        data pulls, so you can see immediately if the engine is working as intended.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the pilot proves out, the system goes live. At this stage, compliance is no longer a guessing game.
        The tax engine runs in the background, watching every transaction, issuing alerts, and filing on
        schedule. TaxJar’s dashboards show you exactly where you stand, no more spreadsheets, no more late-night
        number crunching. If a new state threshold is about to be crossed, you know before it happens. TaxValet
        takes over state and local filings, ensuring nothing is missed, while Quaderno and TaxCloud automate
        invoice compliance and reporting. Everyone on the team knows their role, and nobody is left wondering if
        a sale in Maine or a shipment from an FBA warehouse in Ohio triggered a new tax bill.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in South Florida, this approach means you can finally scale across state lines with
        your eyes open. Every piece, objective setting, data cleaning, tool selection, pilot, and full rollout,
        removes the guesswork and the risk. The days of “hoping” you are compliant are over. Now, you know.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-multi-state-sales-tax-nexus-compliance-is-automated-the-method-step-by-step" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Multi-State Sales Tax Nexus Compliance Is Automated: The Method, Step by Step
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-multi-state-sales-tax-nexus-compliance-is-automated-the-method-step-by-step" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Multi-State Sales Tax Nexus Compliance Is Automated: The Method, Step by Step
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
