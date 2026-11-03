import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Getting Brevo’s automation to deliver relevant, timely email campaigns depends on how you structure and map
        your data from the start. The right setup means every message pulls the correct name, offer, or date for
        each recipient, without manual work. The wrong setup leads to generic emails and lost engagement.</p>
      <p className="text-base text-white shadow-text pt-3">
        Brevo organizes contact data around profiles, each with standard fields (like first name, email, phone
        number) and unlimited custom attributes. These custom fields are where you store details unique to your
        business: last appointment date, purchase history, loyalty status, or anything you want to use for
        segmentation or personalization. The platform’s automation engine can trigger actions based on any of these
        fields, so getting them right is critical.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first mapping decision is what fields to import and how to name them. If your current system has
        “Customer Since,” “Birthday,” or “Preferred Service,” you want those to come over as custom attributes in
        Brevo. This allows you to trigger automations, like sending a birthday offer or a check-in after six months,
        without having to re-enter data later. Geek @ Your Spot helps you standardize field names and formats so
        that data from spreadsheets, CRMs, or other tools flows cleanly into Brevo without mismatches or duplicates.</p>
      <p className="text-base text-white shadow-text pt-3">
        Segmentation is only as strong as your data structure. Brevo’s segmentation engine groups contacts by any
        attribute: demographics, engagement history, purchase behavior, or even a combination of several fields. For
        instance, you might want to target “contacts who booked an appointment in the last 30 days and have not
        opened the last two emails (<a id={`tools-marketing-personalized-email-campaigns-brevo-data-mapping-source-brevo-com${idSuffix}`} href="https://www.brevo.com/integrations/airtable/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Brevo</a>,
        as of Oct 26, 2026).” This is only possible if your data is mapped to capture appointment dates and email
        engagement. The more precise your data, the more relevant your campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        Behavioral triggers are another place where mapping matters. Brevo can watch for actions, like a link click,
        a form submission, or a purchase, and trigger messages instantly. But the system only knows about these
        actions if your data capture is consistent. If your checkout system or booking tool does not sync key events
        into Brevo, you lose the ability to automate follow-ups. Geek @ Your Spot’s role is to connect these systems
        and ensure the right events feed into Brevo in real time.</p>
      <p className="text-base text-white shadow-text pt-3">
        Personalization relies on dynamic content blocks that pull details from each contact’s profile. If you want
        to greet someone by name, recommend a product they have browsed, or reference their last purchase, those
        fields need to be mapped and kept up to date. Brevo supports this natively, but the value depends on your
        data hygiene. Regular data cleaning, removing duplicates, standardizing formats, updating stale records,
        keeps your automations relevant and your sender reputation strong.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses with multiple lists or legacy systems, merging data is a common early challenge. Brevo’s
        import tools can deduplicate by email address and <GlossaryLink slug="merge-tag">merge fields</GlossaryLink>,
        but you need to decide which system is your source of truth for each attribute. Geek @ Your Spot helps you
        audit data sources, resolve conflicts, and set up syncs or imports that keep Brevo’s contact records
        accurate as your business grows.</p>
      <p className="text-base text-white shadow-text pt-3">
        Compliance and deliverability also depend on good data structure. Brevo supports <GlossaryLink slug="opt-in">opt-in</GlossaryLink> tracking,
        consent fields, and suppression lists, but these only work if you map your consent data correctly. A missed
        field here can lead to sending emails to unsubscribed contacts, risking complaints and deliverability
        problems. Geek @ Your Spot ensures that consent and unsubscribe data is mapped and respected across every
        integration.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, ongoing reporting and analytics are driven by how you structure data at the outset. Brevo’s
        dashboards show opens, clicks, and conversions by segment, campaign, or custom attribute. If you want to
        track ROI by source, compare engagement by product line, or analyze re-engagement rates, you need to map
        those fields from day one. This upfront work pays off every week, as you get actionable insights without
        manual spreadsheet work.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, the data structure and mapping decisions you make before launching Brevo set the ceiling for what
        your automated campaigns can achieve. Investing the time to map fields, clean data, and connect your systems
        means every automation, segment, and personalization works as intended. Geek @ Your Spot guides this
        process, so you avoid the common pitfalls and get the most from Brevo’s automation engine from the first
        campaign onward.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-data-structure-and-mapping-set-the-stage-for-brevos-automation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How data structure and mapping set the stage for Brevo’s automation
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
              <h2 id="how-data-structure-and-mapping-set-the-stage-for-brevos-automation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How data structure and mapping set the stage for Brevo’s automation
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
