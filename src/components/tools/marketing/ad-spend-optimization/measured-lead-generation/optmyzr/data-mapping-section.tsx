import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The success of Optmyzr’s automation depends on how your ad account data is structured and mapped at the
        start. The most important decisions are how you group campaigns, how you define key performance indicators
        (KPIs), and how you connect external business data, like CRM or inventory, to your ad platforms. These
        choices determine what rules you can automate, how accurately you can target spend, and how quickly you can
        adapt to changes in your business or the market.</p>
      <p className="text-base text-white shadow-text pt-3">
        First, campaign and ad group organization drives the scope and precision of automation. Optmyzr reads your
        existing campaign names, ad group structures, and label schemes directly from each ad platform. If your
        accounts are already segmented by product, service, geography, or funnel stage, you can write rules that
        apply only to certain segments, like pausing keywords in a specific city or scaling budgets for a seasonal
        service line. If your structure is flat or inconsistent, automation has less to work with: broad rules may
        catch too much or too little, leading to missed savings or wasted spend. Before deploying rules, review your
        campaign hierarchy and label usage to make sure they match how you want to automate.</p>
      <p className="text-base text-white shadow-text pt-3">
        Second, mapping your KPIs is critical for measured lead generation. Optmyzr lets you set rules based on any
        metric the ad platform exposes, cost per acquisition, conversion rate, <GlossaryLink slug="click-through-rate">click-through
        rate</GlossaryLink>, <GlossaryLink slug="impression-share">impression share</GlossaryLink>, and more. You
        decide which metrics matter most for your business and where the thresholds should be. For example, you can
        pause keywords that exceed three times your average cost per lead over a 90-day window, or trigger alerts
        when conversion rates dip below a set baseline. This mapping happens in the rule builder, where you select
        the metric, set the condition, and define the action. The more clearly you define your KPIs upfront, the
        more targeted and effective your automations will be.</p>
      <p className="text-base text-white shadow-text pt-3">
        Third, integrating external business data expands the power of Optmyzr’s rule engine. You can connect Google
        Sheets, CRM exports, or inventory reports to inform automation logic, such as pausing ads for out-of-stock
        products, adjusting bids based on margin, or excluding past buyers from measured lead generation campaigns.
        Optmyzr’s spreadsheet integration lets you pull in updated business data as often as hourly, and map it to
        campaign or keyword level actions. This is especially important for small businesses where the difference
        between a profitable and an unprofitable campaign can hinge on inventory, seasonality, or customer status.
        Setting up these data feeds at the start makes your automations smarter and more responsive.</p>
      <p className="text-base text-white shadow-text pt-3">
        Fourth, mapping negative keywords and search terms is vital for controlling wasted spend. Optmyzr’s
        automated audits can scan your search term reports and flag phrases that drive clicks but not conversions.
        You can set up rules to regularly add these as negatives, keeping your keyword lists fresh and your
        targeting tight. This process depends on having clear mapping between your search term data and your
        campaign structure, so negative matches are applied at the right level (account, campaign, or ad group)
        without blocking valuable traffic elsewhere.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, mapping user access and approval flows ensures automation does not run unchecked. Optmyzr supports
        role-based permissions and approval workflows, so only authorized users can create or approve rule changes.
        You can require that all automated actions run in preview before being applied, or set up notifications for
        manual review. This mapping of roles and responsibilities is essential for small teams, where a single
        mistake can have outsized impact.</p>
      <p className="text-base text-white shadow-text pt-3">
        To sum up, the key data structure and mapping decisions when deploying Optmyzr are: organizing your
        campaigns and labels for targeted automation, defining and mapping KPIs to rule logic, connecting external
        business data for smarter actions, mapping negative keywords to control spend, and setting user roles for
        safe oversight. Each of these steps makes your automation more precise, more reliable, and more aligned with
        your business goals. Getting them right upfront means your measured lead generation system works as
        intended, driving more <GlossaryLink slug="qualified-lead">qualified leads</GlossaryLink> at a predictable,
        sustainable cost.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-data-structure-and-mapping-decisions-matter-when-setting-up-optmyzr" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What data structure and mapping decisions matter when setting up Optmyzr
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
              <h2 id="what-data-structure-and-mapping-decisions-matter-when-setting-up-optmyzr-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What data structure and mapping decisions matter when setting up Optmyzr
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
