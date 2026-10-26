import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The quality and structure of your contact data are the foundation for effective personalized email campaigns
        in MailerLite. Before you launch, the decisions you make about how to organize, import, and segment your
        data will determine how easy it is to trigger the right messages for each customer and how well your
        automations perform over time. MailerLite’s design gives you flexibility, but it also requires a few key
        choices up front.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first decision is how to divide your contacts: MailerLite supports both dynamic segments and manual
        groups. Segments are rule-based and update automatically as contact data changes, ideal for targeting by
        behavior, location, or engagement. Groups are manually assigned, either by your team or by automations, and
        are best for interest-based targeting or tracking membership in specific programs. For example, you might
        create a segment for everyone who opened an email in the last 30 days, and a group for customers who
        attended a specific event (<a id={`tools-marketing-personalized-email-campaigns-mailerlite-data-mapping-source-mailerlite-com${idSuffix}`} href="https://www.mailerlite.com/blog/when-will-mailerlite-have-subscriber-tagging" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">MailerLite</a>,
        as of Oct 25, 2026). Setting up these structures at the start means you won’t have to rebuild your audience
        lists every time you want to run a new campaign.</p>
      <p className="text-base text-white shadow-text pt-3">
        Custom fields are the next critical mapping choice. MailerLite lets you add custom fields to capture any
        information relevant to your business, such as customer type, purchase history, or preferred language. These
        fields power dynamic content and automation triggers. For instance, you can use a custom field to
        personalize a subject line, show a different offer to VIP customers, or trigger a follow-up sequence for
        those who haven’t purchased in six months. Mapping your existing CRM or store data to MailerLite’s custom
        fields ensures that every contact is ready for advanced personalization from day one.</p>
      <p className="text-base text-white shadow-text pt-3">
        Tagging and interest groups play a big role in ongoing segmentation. MailerLite’s tagging system allows you
        to label contacts based on the forms they used to sign up, the products they browsed, or the campaigns they
        engaged with. Tags can be added manually, by automation, or through integrations with your web platform.
        This means you can run a campaign to everyone tagged as “Webinar Attendee” or “Abandoned Cart,” without
        having to manually filter or export lists each time. The upfront decision is which tags to standardize and
        how to automate their assignment, so your list stays organized as it grows.</p>
      <p className="text-base text-white shadow-text pt-3">
        Form and landing page mapping is another area that shapes long-term results. In MailerLite, every signup
        form or landing page can be linked to a specific group or segment, ensuring that new contacts are
        immediately routed to the right automation or campaign. This prevents the common problem of leads from
        different sources being mixed together and receiving irrelevant follow-up. Before launch, decide which forms
        map to which groups, and set up automations that deliver the right welcome or nurture sequence for each.</p>
      <p className="text-base text-white shadow-text pt-3">
        <GlossaryLink slug="list-hygiene">Data hygiene</GlossaryLink> and import mapping are the last critical
        steps. When moving contacts from another system, MailerLite’s import tool lets you map columns from your CSV
        file to the right fields and tags. This is the time to clean up duplicates, standardize field formats, and
        remove outdated or incomplete records. A clean import means your first campaigns reach the right people with
        the right message, and it makes future segmentation and reporting far more reliable.</p>
      <p className="text-base text-white shadow-text pt-3">
        The upshot: every decision about data structure and mapping in MailerLite affects how quickly you can
        launch, how relevant your campaigns are, and how easy it is to grow into more advanced automations. Geek @
        Your Spot works with your team to design these structures from the start, ensuring that your groups,
        segments, tags, and custom fields match your business goals and that every contact is ready for true
        personalization from the first email onward.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-upfront-data-structure-and-mapping-choices-that-shape-mailerlite-success" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The upfront data structure and mapping choices that shape MailerLite success
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
              <h2 id="the-upfront-data-structure-and-mapping-choices-that-shape-mailerlite-success-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The upfront data structure and mapping choices that shape MailerLite success
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
