import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The foundation of a successful Mailchimp deployment for personalized email campaigns is built on early
        decisions about data structure and field mapping. These choices determine how well Mailchimp segments your
        audience, triggers automations, and personalizes content at scale. Small errors here can lead to generic
        emails, missed triggers, or even compliance risks, so this is where careful setup pays off most.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mailchimp organizes contacts into audiences, with each audience holding its own set of fields (such as first
        name, last name, email, purchase history, location, and engagement data). The first decision is whether to
        use a single audience or multiple audiences. For most small businesses, a single audience is simpler and
        reduces the risk of duplicate contacts or conflicting data. Mailchimp’s paid plans allow for multiple
        audiences, but unless you have distinct business units or brands, one audience is easier to manage and keeps
        your segmentation logic clear.</p>
      <p className="text-base text-white shadow-text pt-3">
        Field mapping is the next critical step. When importing contacts or syncing from Shopify, WooCommerce, or a
        CRM, you need to align your source fields with Mailchimp’s data structure. For example, if your ecommerce
        platform tracks birthdays, purchase frequency, or favorite categories, these fields must be mapped to
        Mailchimp’s corresponding custom fields. This mapping enables dynamic content, such as birthday offers or
        product recommendations based on past purchases, to work automatically. If fields are not mapped correctly,
        Mailchimp cannot personalize emails or trigger the right automations.</p>
      <p className="text-base text-white shadow-text pt-3">
        Segmentation in Mailchimp relies on the quality and consistency of this mapped data. The platform’s
        segmentation tools let you build groups based on any field, purchase history, engagement level, location, or
        even predicted demographics. Before you launch, review your data for accuracy and completeness: missing
        emails, inconsistent formatting, or outdated tags will break automations and lead to poor results.
        Mailchimp’s built-in data review tools help, but a manual audit of your first import or sync is worth the
        time.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mailchimp’s AI features depend on having enough clean data to analyze. Predictive segmentation, purchase
        likelihood modeling, and send time optimization all require a base of historical engagement and purchase
        data. If you are migrating from another platform, import as much historical data as possible, open rates,
        click rates, last purchase date, and product preferences. The more context Mailchimp has, the more accurate
        its recommendations and automations will be.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another structural decision is how to handle tags and groups. Tags are flexible labels you can apply to
        contacts for ad hoc segmentation (such as “VIP,” “Abandoned Cart,” or “Local Event”). Groups are more
        structured and let subscribers self-select interests (like “Weekly Deals” or “Event Updates”). Decide
        upfront how your business will use tags versus groups, and document the rules for assigning them. Consistent
        tagging is what lets you quickly launch targeted campaigns, like a flash sale to lapsed customers, without
        building new segments from scratch every time.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mailchimp’s integrations with ecommerce and CRM platforms often include options for syncing behavioral data,
        such as product views, cart additions, or form submissions. Decide which events matter for your automations
        and ensure they are mapped during the integration step. For example, syncing “product_added_to_cart” from
        Shopify enables Mailchimp to trigger abandoned cart emails at the right moment, while syncing
        “purchase_completed” supports post-purchase follow-ups and loyalty campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, consider compliance and consent. Mailchimp’s audience settings include fields for tracking <GlossaryLink slug="opt-in">opt-in</GlossaryLink> status,
        source of signup, and marketing permissions. Make sure these are mapped from your source systems to avoid
        sending to unsubscribed or unconsented contacts. This is not just a technical step, it is a legal
        requirement, and Mailchimp will enforce unsubscribe requests at the platform level.</p>
      <p className="text-base text-white shadow-text pt-3">
        In sum, the upfront work of structuring your Mailchimp audience, mapping fields, and standardizing tags is
        what enables the platform to deliver on its promise of scaled personalization and automation. Skipping or
        rushing these decisions leads to wasted campaigns and lost opportunities. For small businesses deploying
        Mailchimp with Geek @ Your Spot, this phase is where the groundwork is laid for every future campaign, and
        where a few hours of careful mapping pays off with months of smoother, more effective marketing.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-mapping-and-structure-decisions-that-set-the-foundation-for-mailchimp" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data mapping and structure decisions that set the foundation for Mailchimp
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
              <h2 id="data-mapping-and-structure-decisions-that-set-the-foundation-for-mailchimp-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data mapping and structure decisions that set the foundation for Mailchimp
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
