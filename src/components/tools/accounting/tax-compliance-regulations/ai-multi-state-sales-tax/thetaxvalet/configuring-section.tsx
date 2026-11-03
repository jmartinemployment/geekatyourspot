
export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        TaxValet is designed for small businesses who need to meet multi-state sales tax requirements without
        building a tax department from scratch. The core of what gets configured in TaxValet is not a blank
        slate for custom scripting or API-driven extensions. Instead, it is a rules-driven system built around
        automation logic that covers the entire compliance cycle, from nexus determination to filings and audit
        defense.</p>
      <p className="text-base text-white shadow-text pt-3">
        Configuration in TaxValet starts with mapping your business’s sales footprint. This means identifying
        every state where your activities (sales, inventory, employees, or even marketing) create a tax
        obligation. TaxValet’s onboarding includes a complete nexus analysis, which pinpoints where you’ve
        crossed economic or physical nexus thresholds. This is not just a one-time setup. The system continues
        to monitor sales volume, transaction count, and inventory movement, so it catches new nexus triggers as
        your business grows or shifts channels. The rules engine is prebuilt for these triggers: $100,000 in
        sales or 200 transactions in a state, warehouse inventory, remote employees, and other state-specific
        criteria. You do not need to write custom logic for each state, the platform’s own logic tracks and
        updates these rules as state laws change.</p>
      <p className="text-base text-white shadow-text pt-3">
        TaxValet handles the messy realities that basic software ignores. For example, it reconciles sales data
        across all your channels, marketplaces, direct sales, wholesale, and phone orders, so it does not miss
        transactions that would push you over a threshold. It also tracks inventory locations across third-party
        fulfillment networks. If you store goods in an Amazon FBA warehouse, TaxValet maps that to physical
        nexus in the warehouse’s state and triggers permit registration and filing duties automatically. This
        closes the gap left by tools that only see the sales they process themselves.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation logic in TaxValet covers more than just calculation. Once it identifies where you have nexus,
        it configures and manages permit registrations, sets up the correct product taxability rules for each
        state, and prepares your sales tax returns. The system is built to handle local and home-rule filings
        too, not just state-level returns. This is critical for states like Colorado or Louisiana, where missing
        a local filing is a common audit trigger. TaxValet’s workflow ensures every required jurisdiction is
        covered, with no need for manual intervention or bolt-on modules.</p>
      <p className="text-base text-white shadow-text pt-3">
        TaxValet’s configuration does not extend to a public&nbsp;API,
        scripting environment, or custom SDK. It is a managed platform, not a toolkit for developers. The
        boundaries are clear: your business data and sales channels are mapped and connected during onboarding,
        and TaxValet’s own team applies and maintains the compliance logic. This approach means you do not have
        to build or maintain integrations, but it also means you cannot extend the platform’s logic with your
        own code. Any changes in business operations, new channels, product lines, or fulfillment methods, are
        reflected by updating your business profile with TaxValet, not by writing scripts.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a South Florida business working with Geek @ Your Spot LLC, the value is in how this configuration is
        handled. The consultancy works with your data, reviews your sales channels, and ensures every trigger is
        mapped correctly from the start. They coordinate with TaxValet’s onboarding team to make sure the logic
        fits your business model and that your compliance footprint is accurate on day one. If your business
        model changes, Geek @ Your Spot LLC manages the update process, no DIY data mapping, no manual rule
        creation, and no risk of missing a new filing obligation because a channel or warehouse was added
        without updating the system.</p>
      <p className="text-base text-white shadow-text pt-3">
        TaxValet’s automation logic also covers ongoing monitoring. It tracks legislative changes, shifting
        thresholds, and new filing requirements. If a state changes its economic nexus rules or adds a new local
        filing, the platform’s ruleset updates automatically. This is not something you have to configure or
        monitor yourself. For businesses that have struggled with missed filings or late notices, this is what
        moves them from reactive to proactive compliance.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s limits are worth noting. If you have highly specialized needs that require custom
        scripting, direct&nbsp;API&nbsp;control, or integration with
        niche internal systems, TaxValet may not be the right fit. Its strength is in standardizing and
        automating the complex, shifting rules of multi-state sales tax, not in providing a playground for
        custom development. For the vast majority of small businesses in Miami-Dade, Broward, and West Palm
        Beach counties, the out-of-the-box automation and managed configuration mean they can step away from
        manual compliance forever, and avoid the audit risks and cash flow hits that come from relying on
        spreadsheets or generic software.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-taxvalet-rules-automation-and-the-boundaries-of-customization" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in TaxValet: Rules, Automation, and the Boundaries of Customization
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-taxvalet-rules-automation-and-the-boundaries-of-customization-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in TaxValet: Rules, Automation, and the Boundaries of Customization
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
