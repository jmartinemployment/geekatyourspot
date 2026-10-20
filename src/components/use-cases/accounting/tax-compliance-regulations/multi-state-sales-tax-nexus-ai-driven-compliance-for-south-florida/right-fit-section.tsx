
export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Automated multi-state
        sales&nbsp;tax
        compliance&nbsp;is a game changer for small businesses scaling across state lines, but it
        is not a blanket solution for every scenario. The right fit comes down to transaction volume, channel
        complexity, and operational bandwidth. If your business is selling into multiple states, crossing
        $100,000 in annual sales or hitting 200 transactions in a state, and you lack a dedicated tax
        department, automated compliance is not just helpful, it is the only way to avoid silent liability and
        backbreaking manual work.</p>
      <p className="text-md text-white shadow-text pt-3">
        Businesses with steady, predictable sales in one or two states and a single sales channel (like a local
        shop or a Florida-only e-commerce store) will see less value from a full-blown multi-state tax engine.
        For them, manual tracking or a simple state-specific solution may be enough. The risk and cost of
        over-engineering compliance is real, especially if your sales never leave Florida. But the moment you
        start shipping out of state, or your Shopify, Amazon, and wholesale numbers no longer match up on a
        spreadsheet, the risk flips. Manual methods break down fast, and the cost of a missed threshold or a
        misfiled return can dwarf the price of any automation platform.</p>
      <p className="text-md text-white shadow-text pt-3">
        Local businesses in Broward or Miami-Dade who sell online and see their orders start stacking up from
        New York, Texas, or California are in the high-risk zone. Each of those states sets its own economic
        nexus threshold, and the triggers are not uniform, California’s $500,000 is different from the $100,000
        in many others, and the 200-transaction rule still catches small-ticket, high-volume sellers off guard.
        If your team is already spending several hours a month reconciling sales reports from Shopify, Amazon,
        Stripe, and QuickBooks, you are already feeling the friction that automation is meant to solve.</p>
      <p className="text-md text-white shadow-text pt-3">
        A key sign that automation is the right call: your financial lead or operations manager is fielding
        confusing notices from out-of-state tax agencies, or your accountant is asking for sales breakdowns by
        state and channel, and you cannot produce them without days of work. At this point, using a tool like
        TaxCloud, Zamp, or TaxJar makes sense. TaxCloud automates real-time threshold tracking and handles
        registration and filing as soon as you cross a state’s economic nexus line. Zamp adds hands-on
        oversight, with specialists mapping your entire product catalog and resolving state notices before they
        become penalties. TaxJar’s high-speed ingestion and real-time alerts mean you are no longer at risk of
        missing a filing or double-paying sales tax on marketplace transactions.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, if your business model depends on highly-customized deals, or you sell complex bundles that do
        not fit standard product codes, automation can still stumble. No system is perfect, manual review and
        expert input are needed for edge cases, like unique digital services or hybrid product offerings that
        carry ambiguous taxability. In these cases, Quaderno’s global engine or TaxValet’s managed service layer
        can fill the gaps, but they are not a replacement for professional tax counsel on true gray areas.
        Automation does not remove the need for oversight; it removes the bottleneck of routine tracking,
        threshold monitoring, and multi-state filings.</p>
      <p className="text-md text-white shadow-text pt-3">
        For the hypothetical retailer from the opening, automation would have flagged the out-of-state sales
        well before they triggered legal nexus in New York or Texas. It would have surfaced clean,
        channel-reconciled data for every filing, and would have pushed registration and payment deadlines to
        the team before a single penalty letter arrived. But for a local-only operation, the same setup would be
        overkill. The decision is not about adopting the latest platform; it is about matching the complexity of
        your footprint to the right level of automation and oversight. When the risk is silent, the right
        solution is the one that puts a real map under your expansion, before the next state sends a bill.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-automated-multi-state-tax-compliance-is-the-right-fit-and-when-it-is-not" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Automated Multi-State Tax Compliance Is the Right Fit, and When It Is Not
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-automated-multi-state-tax-compliance-is-the-right-fit-and-when-it-is-not-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Automated Multi-State Tax Compliance Is the Right Fit, and When It Is Not
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
