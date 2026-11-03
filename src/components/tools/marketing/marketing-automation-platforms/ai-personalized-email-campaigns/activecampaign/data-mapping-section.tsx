import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The structure of your customer data and how you map it into ActiveCampaign will decide how well your
        personalized email campaigns actually perform. The most important decisions are which fields to sync, how
        you segment your audience, and how you set up tags and custom fields for automation and reporting.
        ActiveCampaign’s flexibility lets you start with what you have, but making the right choices up front is
        what keeps your campaigns from turning into generic blasts.</p>
      <p className="text-base text-white shadow-text pt-3">
        ActiveCampaign works best when your contact data is organized around real business actions, purchases,
        inquiries, web visits, and engagement with previous emails. The platform lets you define custom fields for
        any data point you track, such as product interests, last purchase date, or customer tier. These fields
        drive both segmentation and automation, so mapping them correctly is the difference between sending “Dear
        Customer” and sending a targeted offer to someone who just bought in your highest-margin category.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first decision is which data sources feed ActiveCampaign. For most small businesses, this means your
        CRM, your e-commerce system, and any lead capture forms you use. ActiveCampaign’s direct integrations with
        Shopify, Salesforce, and Typeform let you pull in purchase history, contact details, and form responses
        automatically. Each integration comes with a mapping screen where you pick which fields from your source
        system map to which fields in ActiveCampaign. The key is to map not just basic contact info, but the fields
        you will use for segmentation and triggers, such as product category, last engagement date, or lead score.</p>
      <p className="text-base text-white shadow-text pt-3">
        Segmentation is the next critical step. ActiveCampaign supports dynamic segments that update automatically
        based on rules you set: for example, “all contacts who bought in the last 30 days” or “leads with a score
        above 80 who have not replied in a week.” You can also create static segments for special campaigns.
        Deciding on your main segmentation logic up front, by behavior, <GlossaryLink slug="lifecycle-marketing">lifecycle
        stage</GlossaryLink>, or custom tags, means your automations will always target the right group, and you
        will not have to rebuild lists each time you want to run a campaign.</p>
      <p className="text-base text-white shadow-text pt-3">
        Tags and custom fields are where ActiveCampaign’s automation really pays off. Tags let you label contacts
        based on actions or characteristics, such as “VIP,” “webinar attendee,” or “needs follow-up.” Custom fields
        hold structured data that can drive conditional content or trigger specific workflows. For example, you
        might use a custom field for “preferred service location” to send Miami-specific offers, or tag contacts who
        filled out a high-value inquiry form. The mapping step is not just a technical task; it is where you decide
        what signals matter for your business and how to act on them.</p>
      <p className="text-base text-white shadow-text pt-3">
        Lead scoring is another core element. ActiveCampaign lets you set rules that assign points for actions (like
        opening an email, clicking a link, or visiting a key page). You can map these scores to trigger automations,
        such as moving a hot lead to a sales rep or sending a re-engagement campaign to those whose score drops. The
        scoring model should reflect your actual sales process: what actions show real buying intent, and what
        thresholds prompt a follow-up. Setting this up early means your team spends time on the leads most likely to
        convert, not just the ones who happen to reply first.</p>
      <p className="text-base text-white shadow-text pt-3">
        When importing data, decisions about <GlossaryLink slug="list-hygiene">data hygiene</GlossaryLink> and
        deduplication matter. ActiveCampaign can handle imperfect lists, but you will get better results if you
        standardize key fields (like email and phone number), remove obvious duplicates, and fill in missing values
        for the fields you plan to use in segmentation. The platform’s reporting tools will flag gaps and
        inconsistencies, but a clean start means your first campaigns will land as intended.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses that use multiple channels, mapping data from Facebook Custom Audiences or Typeform into
        ActiveCampaign adds another layer of personalization. You can trigger emails based on Facebook ad engagement
        or form responses, and use this data to create hyper-targeted segments. The mapping process here is about
        deciding which signals are strong enough to trigger a campaign, did someone just click an ad, or did they
        fill out a high-value form?</p>
      <p className="text-base text-white shadow-text pt-3">
        The last decision is how to structure reporting. ActiveCampaign’s reporting toolkit lets you track campaign
        performance by segment, tag, and custom field. By mapping your data to match the way you want to report,
        such as tracking conversions by lead source or engagement by product line, you ensure you can measure what
        matters from day one. This avoids the common trap of sending campaigns without knowing which ones actually
        drive sales or appointments.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, the upfront data structure and mapping decisions you make in ActiveCampaign shape everything that
        follows: who gets what message, how follow-up is triggered, and what your team can measure and improve. Geek
        @ Your Spot’s job is to guide you through these decisions, making sure every field, tag, and segment
        supports your actual business goals, not just what the software can do out of the box. This is how you move
        from generic campaigns to true personalization, with every automation and report tied directly to your
        bottom line.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-data-structure-and-mapping-decisions-shape-a-successful-activecampaign-deployment-from-day-one" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What data structure and mapping decisions shape a successful ActiveCampaign deployment from day one
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
              <h2 id="what-data-structure-and-mapping-decisions-shape-a-successful-activecampaign-deployment-from-day-one-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What data structure and mapping decisions shape a successful ActiveCampaign deployment from day one
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
