import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        TaxJar automates the work of tracking, calculating, and filing sales tax across multiple states by
        turning every transaction into a mapped, real-time tax event. The moment a sale occurs, whether on
        Shopify, Amazon, or another connected channel, TaxJar ingests the order data and begins a step-by-step
        process for compliance. This is not a passive data sync. The platform actively parses, classifies, and
        applies the correct tax treatment for every line item, using live rules and up-to-the-minute
        jurisdictional boundaries.</p>
      <p className="text-base text-white shadow-text pt-3">
        The workflow starts with data ingestion. TaxJar&#39;s cloud-native engine pulls in transaction records
        from all linked e-commerce
        stores,&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;systems,
        and marketplaces. This happens continuously, not in delayed batches, so the system always sees the
        latest sales. The platform does more than just aggregate, it cleans the data, standardizes formats, and
        prepares it for precise tax logic. This is how TaxJar eliminates the manual errors and reconciliation
        headaches that come with spreadsheet-based tracking.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once it has the data, TaxJar’s calculation engine gets to work. Each transaction is evaluated for
        taxability based on the product type, the customer’s address, and the latest state and local laws.
        TaxJar’s engine does not stop at the state line. It applies rooftop-accurate rates that factor in
        county, city, and special district taxes. The platform uses product tax codes to ensure that only
        taxable items are flagged, so digital goods, physical products, and services are treated according to
        the rules in each jurisdiction. This is especially important in states where the tax status of digital
        content
        or&nbsp;<GlossaryLink slug="saas" className="text-[#0B162A] hover:underline">SaaS</GlossaryLink>&nbsp;subscriptions
        changes frequently.</p>
      <p className="text-base text-white shadow-text pt-3">
        If a business is approaching or crosses an economic nexus threshold, such as $100,000 in sales or 200
        transactions, TaxJar’s Economic Nexus Insights dashboard issues a real-time alert. This dashboard is
        more than a static report. It actively monitors every channel and gives the team a clear warning before
        compliance obligations trigger. The executive team can see at a glance where new filing requirements are
        building up, so there is no more risk of learning about a new obligation after the fact.</p>
      <p className="text-base text-white shadow-text pt-3">
        TaxJar also handles the complexity of marketplace sales. When a platform like Amazon or Etsy is
        responsible for collecting and remitting tax under marketplace facilitator laws, TaxJar isolates those
        transactions from direct sales. This prevents double-counting and ensures the business only pays what it
        owes, never more. The platform’s automation means that even if a business sells the same product through
        four different channels, each sale is categorized and reported correctly, with marketplace sales
        excluded from direct liability calculations.</p>
      <p className="text-base text-white shadow-text pt-3">
        At filing time, TaxJar’s AutoFile feature takes over. For each state where the business has a tax
        obligation, AutoFile compiles all required data, formats it according to that state’s requirements, and
        submits the return electronically. This process is backed by a guarantee for accuracy and timeliness. If
        the business prefers to file manually, TaxJar still produces return-ready reports that reflect exactly
        what the state wants to see, including breakdowns for interstate and intrastate sales, taxable and
        exempt items, and any adjustments for marketplace-collected tax.</p>
      <p className="text-base text-white shadow-text pt-3">
        Throughout this process, TaxJar’s dashboard acts as the control center. The team can view up-to-date
        sales tax exposure, see which states are nearing new thresholds, and review all past filings. This is
        not just a record-keeping tool, it is a live window into current and future compliance status. For a
        small South Florida team, this means no more scrambling at month-end and no more missed deadlines.</p>
      <p className="text-base text-white shadow-text pt-3">
        Shipping, handling, and product warranties get their own treatment. TaxJar’s engine applies the correct
        rules for each state, so if shipping is taxable in one jurisdiction but not another, the calculation
        matches. The platform can even be set to tax or exempt shipping and handling charges on a per-state
        basis, taking the guesswork out of these tricky edge cases.</p>
      <p className="text-base text-white shadow-text pt-3">
        The end result is a workflow where every sale, refund, and adjustment is captured, classified, and
        reported, without the team ever touching a spreadsheet. TaxJar’s automation is not just about speed. It
        is about making sure nothing gets missed, no matter how many states or channels the business adds. For
        the business owner in the opening story, this is the difference between a Friday afternoon spent in
        panic over a new tax notice and one spent serving customers, with compliance handled in the background.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="inside-taxjar-what-actually-happens-when-a-transaction-hits-the-platform" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Inside TaxJar: What Actually Happens When a Transaction Hits the Platform
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
              <h2 id="inside-taxjar-what-actually-happens-when-a-transaction-hits-the-platform-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Inside TaxJar: What Actually Happens When a Transaction Hits the Platform
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
