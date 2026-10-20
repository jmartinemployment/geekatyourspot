import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        TaxJar is built for the moment when tracking sales tax by hand stops working. It does not just automate
        a few reports; it takes the full burden of Multi-State Sales Tax Nexus and moves it out of your daily
        routine. For a small team, this is the difference between spending Friday afternoon chasing down tax
        rates and spending it closing new sales.</p>
      <p className="text-md text-white shadow-text pt-3">
        First, TaxJar ingests all your transaction data across channels, Shopify, Amazon, Squarespace,
        Salesforce, Woo, Square, and more. There is no more downloading CSVs from each platform and trying to
        align them. TaxJar’s cloud-native engine cleans and aggregates these transactions in seconds, not hours.
        This means every order, refund, and adjustment is captured in one place, ready for review or filing. The
        error-prone manual reconciliation process is gone, replaced with a single dashboard that always reflects
        the latest numbers.</p>
      <p className="text-md text-white shadow-text pt-3">
        The Economic Nexus Insights dashboard is where TaxJar changes the compliance game. Instead of waiting
        for a letter from a state, you get real-time alerts as you approach nexus thresholds in each state. The
        dashboard tracks your sales velocity everywhere you sell, so you know before, not after, you cross a
        line that triggers new filing obligations. This alone can save a small business thousands in penalties
        and uncollected tax. It also means you never have to guess whether you should be collecting tax in a new
        state; the system tells you, with the supporting data to back it up.</p>
      <p className="text-md text-white shadow-text pt-3">
        TaxJar’s AutoFile feature removes the most tedious part of compliance: submitting returns. Once you
        confirm the data, AutoFile submits your state sales tax returns accurately and on time, every time. This
        eliminates the risk of missed deadlines, late fees, and last-minute scrambles. For businesses that still
        want to file manually, TaxJar’s reports are formatted to match what each state’s Department of Revenue
        wants to see, so you spend less time reformatting and more time running your business.</p>
      <p className="text-md text-white shadow-text pt-3">
        Marketplace sales get special treatment. TaxJar distinguishes between direct-to-consumer sales and those
        handled by marketplace facilitators like Amazon or eBay. It tracks which sales tax has already been
        collected and remitted by the platform, so you never double-pay. The system only shows you the tax you
        actually owe out of pocket, and it produces reports that reflect exactly what the state expects. This is
        not a generic sales summary, it is a compliance-ready breakdown that accounts for every rule and
        exception.</p>
      <p className="text-md text-white shadow-text pt-3">
        Product classification is another job that disappears.
        TaxJar’s&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;lets you assign tax codes to every
        product, digital good, or service you sell. The engine applies rooftop-accurate tax rates based on the
        customer’s exact address, not just their zip code, so you always collect the right amount. If a state
        changes its rules on digital goods or shipping, TaxJar’s research team updates the logic behind the
        scenes. You do not have to watch for every legislative change; the system adapts for you, so you stay
        compliant without lifting a finger.</p>
      <p className="text-md text-white shadow-text pt-3">
        Shipping, handling, and warranty charges are handled with the same precision. TaxJar applies the correct
        rules for each state, so you never have to guess whether to tax shipping on an order to Georgia versus
        one to Florida. This removes hours of research and the risk of over- or under-collecting.</p>
      <p className="text-md text-white shadow-text pt-3">
        Executive visibility is built in. TaxJar unifies all your sales data into a single dashboard, with
        state-by-state breakdowns and detailed views by city, county, and special district. Leadership can see
        at a glance where liabilities are building, which states require action, and how much is already covered
        by marketplace facilitators. This is not just a reporting tool, it is a command center for multi-state
        compliance, built for owners and managers who need answers, not just raw data.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security and privacy are baked in. TaxJar is compliant with GDPR and SOC II frameworks, so sensitive
        business data is protected. This matters when you are connecting multiple sales channels and handling
        customer information across jurisdictions.</p>
      <p className="text-md text-white shadow-text pt-3">
        For the team in the opening story, the impact is immediate. No more late nights reconciling
        spreadsheets. No more guessing when a new state’s rules apply. No more double-paying tax on marketplace
        sales or scrambling to meet surprise deadlines. Instead, they see their entire compliance picture on one
        screen, get notified before problems appear, and file with confidence. The owner goes back to planning
        for growth, not fighting fires.</p>
      <blockquote cite="https://www.taxjar.com/product" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Manage your sales tax with a real-time, automated solution that saves time and reduces stress.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        TaxJar’s automation is not just about speed, it is about removing risk. The platform’s real-time
        calculations, AI-driven categorization, and address-level accuracy mean that errors are caught before
        they cost you money. The system is always up to date with the latest laws, so you do not have to be.
        Every hour you used to spend on compliance is an hour returned to your business. That is what it means
        to remove Multi-State Sales Tax Nexus from your week.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-taxjar-removes-multi-state-sales-tax-nexus-from-your-week" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How TaxJar Removes Multi-State Sales Tax Nexus From Your Week
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
              <h2 id="how-taxjar-removes-multi-state-sales-tax-nexus-from-your-week-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How TaxJar Removes Multi-State Sales Tax Nexus From Your Week
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
