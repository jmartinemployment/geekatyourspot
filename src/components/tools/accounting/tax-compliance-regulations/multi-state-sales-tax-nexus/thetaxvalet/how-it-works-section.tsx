export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        TaxValet approaches multi-state sales tax as a full-service operation, not a patchwork of disconnected
        automations. Every step is designed to address the real gaps that off-the-shelf software and manual
        tracking leave behind. Here’s how it actually works, from the first exposure check to ongoing
        compliance.</p>
      <p className="text-base text-white shadow-text pt-3">
        First, TaxValet starts with a comprehensive nexus review. This is not a quick scan of sales data or a
        checklist of states. Instead, the platform reviews your entire sales footprint: online orders, wholesale
        invoices, dropshipping arrangements, and any physical or remote presence in other states. It checks for
        economic nexus (like $100,000 in sales or 200 transactions in a state) and physical triggers (such as
        inventory in a third-party warehouse or remote employees). The process is built to catch the less
        obvious triggers, like affiliate marketing or inventory moved by fulfillment partners, that standard
        software usually misses.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once TaxValet identifies every state where you have an obligation, it builds a compliance roadmap. This
        includes registering for sales tax permits, setting up the correct tax accounts, and mapping out which
        filings are due, when, and where. TaxValet does not leave you to figure out which permit type is needed
        or which filings are required at the local level. It closes out unnecessary permits and corrects any
        that are misclassified, so your compliance workload is as light as possible.</p>
      <p className="text-base text-white shadow-text pt-3">
        For ongoing compliance, TaxValet connects directly to your sales channels, whether that’s Shopify,
        Amazon, your own e-commerce site, or a mix of platforms. The system pulls transaction data from every
        source, reconciles it to catch errors or double-counting, and prepares it for filing. This is not a
        passive sync; TaxValet’s process includes hands-on review to make sure the numbers line up across all
        channels and that returns and refunds are handled correctly. Negative transactions are created where
        needed to ensure that refunded tax is properly accounted for.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next step is configuration of product taxability. TaxValet does not just hand you a list of tax
        codes and leave you to work out which applies. Instead, its team researches state-specific rules for
        your entire product catalog and sets the correct classifications inside each storefront. This is
        especially important for businesses selling in multiple states, where the same product may be taxed
        differently depending on local laws.</p>
      <p className="text-base text-white shadow-text pt-3">
        When it comes to filings, TaxValet manages the entire cycle: preparing, submitting, and confirming
        payment of every return in every required jurisdiction. The system tracks deadlines and ensures filings
        are submitted on time, eliminating the risk of missed due dates or late penalties. If a state or local
        notice arrives, TaxValet processes and responds to it, so issues are resolved before they escalate.</p>
      <p className="text-base text-white shadow-text pt-3">
        Audit protection is built in. If an audit is triggered, TaxValet acts as your representative, providing
        all required documentation and handling the correspondence with state agencies. If the audit finds an
        error caused by TaxValet, their guarantee covers any penalties or interest. This is not a theoretical
        promise, case studies like Stealth Fitness show real businesses saving thousands in avoided penalties
        and back taxes by switching to TaxValet’s managed approach.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses with historical liabilities, TaxValet offers expert guidance on Voluntary Disclosure
        Agreements and amnesty programs. The platform helps you decide the best path to resolve back taxes, then
        executes the plan, negotiating with state departments to minimize penalties. Ongoing, TaxValet monitors
        for changes in state laws, new jurisdictions, and shifting nexus thresholds, so you do not get caught
        off guard as you grow.</p>
      <p className="text-base text-white shadow-text pt-3">
        All of this is delivered with a flat monthly rate, starting at $560 per month, with no hidden fees or
        surprise add-ons. TaxValet’s process is designed for small businesses that do not have a dedicated tax
        team but need the same level of compliance as a large enterprise. Each step is handled by a dedicated
        team of multi-state tax experts, so you are never left to interpret a confusing alert or fix a filing
        mistake on your own.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, this means that from the moment you cross a nexus threshold in any state, TaxValet’s
        process takes over: identifying the exposure, registering the right permits, configuring your systems,
        managing every filing, and defending you in the event of an audit. Your team gets back the hours lost to
        manual tracking and the peace of mind that comes from knowing every jurisdiction is covered, every
        deadline is met, and every risk is actively managed.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="step-by-step-how-taxvalet-handles-multi-state-sales-tax-for-small-businesses" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Step-by-Step: How TaxValet Handles Multi-State Sales Tax for Small Businesses
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
              <h2 id="step-by-step-how-taxvalet-handles-multi-state-sales-tax-for-small-businesses-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Step-by-Step: How TaxValet Handles Multi-State Sales Tax for Small Businesses
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
