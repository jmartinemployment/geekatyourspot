import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The success of Optmyzr in your ad environment depends on how well your data is structured and mapped from the
        start. The most important decisions happen before you turn on any automation: how your campaigns, ad sets,
        keywords, and conversion events are organized, and how Optmyzr will read and act on that structure. Getting this
        right means your rules and reports work as intended, and your optimization logic matches your actual business
        goals.</p>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr pulls in your existing account hierarchy, campaigns, ad sets (or ad groups), ads, and keywords, directly
        from each connected platform. The tool does not require you to rebuild your structure, but it does depend on
        logical, consistent naming and grouping to deliver meaningful insights. For example, if your Google Ads
        campaigns are organized by product line or service type, Optmyzr can break down performance at that level and
        let you set rules that target only certain categories or locations. If your structure is inconsistent,
        automation rules may act too broadly or miss critical segments.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mapping conversion events is another key step. Optmyzr relies on your platform&rsquo;s <GlossaryLink slug="conversion-tracking">conversion
        tracking</GlossaryLink>, such as purchases, form fills, or calls, to trigger optimization actions. You need to
        confirm that these events are defined and tracked accurately in each ad account before automation begins. If a
        conversion event is missing or mislabeled, rules that pause non-converting keywords or reallocate budget may not
        fire as expected. For businesses running campaigns across Google, Meta, LinkedIn, and Amazon, aligning
        conversion definitions is essential for cross-platform reporting and budgeting.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget mapping is also critical. Optmyzr&rsquo;s budget management tools work best when each campaign or ad
        set&rsquo;s budget is clearly defined and matches your business priorities. If you have overlapping budgets,
        such as a single budget split across multiple platforms or campaigns, decide how you want Optmyzr to monitor and
        adjust spend. The tool can track spend by platform, by campaign, or portfolio-wide, but the mapping must reflect
        your actual financial controls. This upfront work prevents confusion and ensures that pacing alerts, overspend
        protections, and reallocation rules support your business objectives rather than fighting them.</p>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr allows you to import external business data into its automation logic. For example, you can connect a
        Google spreadsheet with inventory levels, profit margins, or seasonality flags. This lets rules react to
        real-world business conditions, not just ad metrics. To take advantage of this, you need to map your external
        data fields to the relevant campaign or product identifiers used in your ad accounts. If your inventory report
        uses different product IDs than your ad campaigns, automation will not work as intended. Planning this mapping
        upfront means you can build advanced rules, such as pausing ads for out-of-stock items or adjusting bids for
        high-margin products, without manual intervention.</p>
      <p className="text-base text-white shadow-text pt-3">
        Labeling is another practical step. Optmyzr can use campaign and keyword labels from your ad accounts to filter
        actions and reports. For example, you might label campaigns by region, product, or promotion. When setting up
        rules, you can target only those labeled segments, making automation more precise. If your current account lacks
        a labeling system, it is worth investing the time to add one before deploying Optmyzr. This makes later
        optimization more flexible and reduces the risk of rules firing on the wrong campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, review your account&rsquo;s historical data. Optmyzr&rsquo;s optimization logic uses performance
        history to set baselines for rules like pausing non-converting keywords or adjusting bids on underperforming ad
        sets. If your historical data is incomplete or contains gaps, such as campaigns that were paused for extended
        periods or conversion tracking that was broken, flag those areas during setup. The tool will still function, but
        you may need to adjust rule thresholds or schedules until enough new data accumulates.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, the upfront work in structuring and mapping your data pays off in ongoing accuracy and efficiency.
        Optmyzr does not require technical skills to map data, but it does reward careful planning. The more closely your
        campaign structure, conversion mapping, and labeling reflect your real business, the more effective your
        automation and reporting will be. Geek @ Your Spot guides clients through these decisions, ensuring that
        Optmyzr&rsquo;s automation logic aligns with your actual goals and that your team can trust the system&rsquo;s
        recommendations from day one.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-data-structure-and-mapping-decisions-shape-your-optmyzr-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How data structure and mapping decisions shape your Optmyzr deployment
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-data-structure-and-mapping-decisions-shape-your-optmyzr-deployment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How data structure and mapping decisions shape your Optmyzr deployment
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
