import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For a small business in South Florida, crossing the line into multi-state
        sales&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>&nbsp;is not just another
        administrative task, it is a wall. The moment a company sells enough into another state to trigger
        economic nexus, the rules change. This can happen with as little as $100,000 in sales or 200
        transactions in a single state. The business owner, who was focused on growing sales, now faces a maze
        of obligations: registering in new states, collecting the right tax, filing on time in each
        jurisdiction, and responding to unfamiliar notices. Every missed step means penalties, interest, or
        worse, a state audit.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core problem is not the complexity of the tax code itself. It is the mismatch between what small
        teams can realistically manage and what the law demands. Large companies have dedicated tax staff or
        outside accountants who spend their days tracking these requirements. Most small businesses in
        Miami-Dade, Broward, and West Palm Beach do not. They rely on a mix of plugins, spreadsheets, and
        after-hours research. The first sign of trouble is often a letter from a state agency that no one knows
        how to answer. The owner loses hours to phone calls and paperwork, often without a clear sense of
        whether the problem is solved.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual tracking is where the process breaks down first. Sales flow through Shopify, Amazon, or a direct
        website. Each platform has its own way of recording transactions, and none of them tracks every sale
        across all channels in real time. A business might pass the $500,000 threshold in Texas in March, but not
        realize it until July, by which point they have already missed the legal deadline to register and
        collect tax. The result is a gap of uncollected liabilities that can trigger back taxes and interest.
        Even if the business catches up, they are now exposed to penalties for late registration and late
        filings. The cost is not just the money owed, but the time lost to chasing down records, reconciling
        sales, and responding to state demands.</p>
      <p className="text-md text-white shadow-text pt-3">
        Product classification is another trap. States apply different rules to each type of product or service.
        A&nbsp;<GlossaryLink slug="saas">SaaS</GlossaryLink>&nbsp;subscription might be exempt in one state and
        fully taxable in another. Apparel, supplements, and digital goods all have their own quirks. Most small
        teams assign generic product codes and hope for the best. But when a state audits, they look for precise
        classification. Misclassifying a product means under- or over-collecting tax, either of which can
        trigger an audit or a demand for back payments. The business owner is left scrambling to prove that
        their records are correct, often with little support from the software they use.</p>
      <p className="text-md text-white shadow-text pt-3">
        Regulatory notices are the next hurdle. States send compliance letters by mail or email, each with a
        deadline and a required response. For a business without a dedicated compliance officer, these notices
        pile up. Some are routine, but others are warnings of missed filings, pending audits, or changes in the
        law. Missing or misreading a notice can mean a penalty or a forced registration in a state the business
        was not prepared for. The owner spends hours deciphering the language, searching online for answers, or
        calling state agencies that may not provide clear guidance. If the notice is not resolved, the business
        risks escalating penalties or even a sales tax audit.</p>
      <p className="text-md text-white shadow-text pt-3">
        Timing is unforgiving. Once a business crosses a nexus threshold, the clock starts ticking. States
        expect registration and collection to begin immediately. Starting late, even by a few weeks, creates a
        gap where sales tax should have been collected but was not. The business is then liable for the tax,
        even if it was never collected from customers. This can quickly add up to thousands of dollars in
        unplanned costs, especially for fast-growing companies that cross multiple thresholds in a short period.</p>
      <p className="text-md text-white shadow-text pt-3">
        Reconciling sales data is the final headache. At year-end, the business must merge sales from multiple
        channels, each with its own format and level of detail. Manual reconciliation is slow and prone to
        error. A missing transaction or a duplicated entry can throw off filings and open the door to audit
        risk. The business spends valuable time cleaning up data instead of focusing on growth. Even with tax
        software, most tools require the business to configure integrations, map products, and monitor for
        errors. When something breaks, a plugin fails, a rule changes, or a notice is missed, the business is on
        its own to fix it.</p>
      <p className="text-md text-white shadow-text pt-3">
        The opportunity cost is real. Every hour spent on compliance is an hour not spent on sales, product
        development, or customer service. The risk of missing a filing, misclassifying a product, or ignoring a
        notice is not theoretical. It is a constant, low-level threat that can turn into a major crisis with one
        letter or audit. For small businesses, the cost of trying to manage multi-state sales tax by hand is
        measured in lost time, increased risk, and stunted growth. This is where Zamp breaks the cycle, by
        taking responsibility for the entire compliance process, so small teams can get back to running their
        business.</p>
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
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
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
