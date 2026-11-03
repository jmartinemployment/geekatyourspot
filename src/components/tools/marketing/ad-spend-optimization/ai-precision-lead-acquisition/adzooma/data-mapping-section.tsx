import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The critical data decisions when rolling out Adzooma start with how your ad accounts are structured and how
        campaign elements map into a unified dashboard. Adzooma is built to connect directly to Google Ads, Meta Ads,
        and Microsoft Advertising, so the platform relies on the structure and naming conventions already in place in
        those systems. This makes it important to review how your accounts are organized before connection, because the
        way campaigns, ad groups, and assets are set up will affect how insights and recommendations are surfaced.</p>
      <p className="text-base text-white shadow-text pt-3">
        First, every ad account to be managed must be mapped into Adzooma&rsquo;s dashboard. This is not a manual data
        import, Adzooma connects via API and pulls live data for each campaign, ad group, keyword, and creative. For a
        small business with multiple brands or a local agency with several client accounts, this means all accounts can
        be linked and managed together, but each must be mapped to the right business unit or client profile within
        Adzooma. This upfront mapping is what enables cross-channel reporting, budget controls, and unified optimization
        actions.</p>
      <p className="text-base text-white shadow-text pt-3">
        Campaign naming conventions and asset organization play a direct role in how Adzooma&rsquo;s recommendations are
        prioritized and presented. If campaigns are inconsistently named or if ad groups mix different products or
        audiences, the platform&rsquo;s ability to surface high-impact fixes may be diluted. For example, if a business
        has separate campaigns for different services but uses generic names, it becomes harder to identify which area
        is underperforming or wasting spend. Adzooma does not require a specific naming scheme, but a clear, consistent
        structure will make automated audits and opportunity ranking more accurate and actionable.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget mapping is another upfront decision that shapes how Adzooma can help. The platform monitors spend across
        every connected account and flags pacing issues, overspending, and underspending in real time. To get the full
        benefit, each campaign&rsquo;s budget must be set accurately in the source platform and mapped to the correct
        reporting line in Adzooma. This ensures that alerts and recommendations are triggered at the right thresholds,
        and that budget reallocation suggestions are based on actual business priorities.</p>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma&rsquo;s cross-channel capabilities depend on mapping similar campaign types together. For example,
        <GlossaryLink slug="shopping-ads"> Shopping campaigns</GlossaryLink> on Google and Microsoft can be managed and
        audited in parallel, but only if they are structured as distinct campaign types in each platform and then mapped
        to a common view in Adzooma. The same goes for Performance Max or Display campaigns: when the campaign types are
        clearly defined and separated, Adzooma can surface channel-specific insights and recommend optimizations that
        apply across platforms.</p>
      <p className="text-base text-white shadow-text pt-3">
        <GlossaryLink slug="conversion-tracking">Conversion tracking</GlossaryLink> and attribution setup are also
        central to data mapping. Adzooma relies on the tracking and conversion settings configured in each native
        platform. Before connecting accounts, check that conversion actions are defined, tracking pixels are placed
        correctly, and that attribution windows align with your business&rsquo;s sales cycle. If tracking is missing or
        inconsistent, Adzooma will flag these as errors and recommend fixes, but the quality of insights and
        optimization actions will be stronger when the underlying data is clean from the start.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams that want to use Adzooma&rsquo;s automation and alerting features, mapping performance thresholds and
        KPIs is a key step. The platform allows custom rules and alerts to be set for spend, conversion rate,
        click-through rate, and other metrics. To get accurate notifications and avoid alert fatigue, each rule should
        be mapped to the right campaign, ad group, or account, with thresholds set to match actual business goals.
        Adzooma&rsquo;s templates speed this up, but custom mapping ensures that alerts are relevant and actionable for
        your team.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting structures are also shaped by how accounts and campaigns are mapped. Adzooma generates white-label,
        client-ready reports that can be branded and filtered by account, campaign, or channel. For agencies, this means
        mapping each client&rsquo;s accounts to a unique profile, so reports show only the data relevant to that client.
        For small businesses, mapping campaigns to business lines or product categories enables more granular insights
        and faster identification of where spend is working or wasted.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, mapping roles and permissions is part of a secure rollout. Adzooma inherits access rights from the
        source accounts, but within the dashboard, user roles can be assigned for who can view, edit, or apply changes.
        Setting this up at the start prevents accidental changes and ensures that only authorized team members can act
        on optimization recommendations.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, the upfront data structure and mapping decisions in Adzooma deployment are about clarity and
        consistency: connect every account, map campaigns and budgets to the right place, check conversion tracking, and
        set rules that match your business goals. When these are in place, Adzooma&rsquo;s automation and optimization
        features work at their best, surfacing real opportunities, flagging issues early, and making it possible for a
        small team to control ad spend across every channel from a single screen.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-structure-and-mapping-decisions-that-matter-upfront-when-deploying-adzooma" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The data structure and mapping decisions that matter upfront when deploying Adzooma
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
              <h2 id="the-data-structure-and-mapping-decisions-that-matter-upfront-when-deploying-adzooma-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The data structure and mapping decisions that matter upfront when deploying Adzooma
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
