export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        TaxValet’s effectiveness starts with how your business data is structured and mapped at the outset. In
        multi-state sales tax, the details matter: which products are taxable in which states, how returns are
        processed, and what counts toward each nexus threshold. If your sales, inventory, and customer data are
        scattered or inconsistent, even the best automation platform will produce errors. TaxValet addresses
        this by standardizing and reconciling your data before any filings go out the door.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first decision that matters is how you aggregate sales data across channels. Most small businesses
        sell through a mix of online stores, marketplaces, and direct invoicing. Each platform may track
        transactions differently, and most off-the-shelf software only sees the sales that pass through its own
        system. TaxValet solves this by pulling data from all your channels, Shopify, Amazon, wholesale, phone
        orders, and more, into a unified dataset. This prevents double-counting and ensures that every sale,
        refund, and adjustment is captured accurately. Without this step, you risk missing a nexus trigger or
        filing the wrong amount in a key state.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next comes mapping your product catalog to state-specific tax rules. States do not agree on what is
        taxable: an item exempt in Florida may be fully taxable in New York or Texas. TaxValet’s team researches
        your actual products and configures the correct tax settings for each one, in each state where you sell.
        This prevents the common error of applying generic tax codes or missing new product launches that
        require updated settings. The mapping is not a one-time task: as your catalog or state rules change,
        TaxValet updates your configuration so you stay compliant.</p>
      <p className="text-base text-white shadow-text pt-3">
        Inventory tracking is another critical mapping decision. If you use third-party fulfillment (like Amazon
        FBA or a regional 3PL), your inventory may move between states without notice. This creates new physical
        nexus points, often without a single sale in the new state. TaxValet monitors your inventory locations
        and matches them against state requirements, flagging when a new filing obligation is triggered. This is
        a gap that generic software cannot fill, most tools do not see inventory transfers or recognize when a
        warehouse move creates a new nexus.</p>
      <p className="text-base text-white shadow-text pt-3">
        Returns and refunds also require careful mapping. When a customer returns a product, the refunded tax
        must be handled correctly in each state. TaxValet processes returns by creating negative transactions,
        ensuring that your filings reflect actual net sales and you recover any overpaid tax. If this is not
        mapped properly, you could end up overpaying or underreporting, either of which can trigger penalties or
        audits.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Key data mapping decisions in a TaxValet deployment:</li>
        <li>Sales channel integration: Every platform where you make sales must be connected, not just your main storefront.</li>
        <li>Product-level taxability: Each SKU is mapped to its correct tax status in every state, not just a default setting.</li>
        <li>Inventory location tracking: All fulfillment centers and inventory moves are monitored, so you do not miss physical nexus triggers.</li>
        <li>Returns and adjustments: Negative transactions are mapped to reflect refunds, preventing double-counting or missed credits.</li>
        <li>Permit and registration data: Every state account is tracked, so filings go to the right place with the right credentials.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        A strong data foundation does more than just prevent errors. It allows TaxValet to automate filings,
        monitor for new obligations, and represent you in audits with confidence. If your data is incomplete or
        mapped incorrectly at the start, you will spend more time later fixing filings and responding to state
        notices. For a small business scaling into new markets, this is the difference between a compliance
        process that runs smoothly and one that creates new headaches every month.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot LLC’s role is to make sure this mapping is done right from the start. As your
        implementation partner, we work with your team to identify every sales channel, clarify your product
        catalog, and track all inventory locations. We guide you through the data preparation process so that
        when TaxValet goes live, you have a single, accurate source of truth for every compliance obligation.
        This is not just a technical setup, it is a strategic decision that shapes how well TaxValet protects
        your business as you grow.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-data-structure-and-mapping-decisions-set-the-stage-for-taxvalet-success" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Structure and Mapping Decisions Set the Stage for TaxValet Success
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-data-structure-and-mapping-decisions-set-the-stage-for-taxvalet-success-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Structure and Mapping Decisions Set the Stage for TaxValet Success
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
