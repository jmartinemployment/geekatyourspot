import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataIntegrationSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A personalized email campaign that actually works requires two things from your business: accurate data
        about your contacts, and a way for your email automation platform to access and act on that data
        automatically. Without both, even the best-designed workflows will fail or run on stale, incomplete inputs.
        The integration step is not a technical afterthought, it is what turns a marketing idea into a working
        system that saves your team hours and drives results without constant maintenance.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every successful rollout starts with a data quality assessment. In practice, this means you need reliable
        information on each contact: names, emails, segment tags, and any behavioral data you want to use for
        targeting. Businesses in South Florida often have lead data scattered across web forms, CRM systems,
        spreadsheets, and even text messages. The first job is to identify all these sources and decide what matters
        for your campaigns. For example, if you want to trigger a re-engagement email to leads who have not booked
        in 30 days, your system needs to know when the last appointment was and have that field up to date (<a id={`use-cases-marketing-personalized-email-campaigns-data-integration-source-brevo-com${idSuffix}`} href="https://www.brevo.com/integrations/airtable/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Brevo</a>,
        as of Oct 25, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        Integration is the bridge between your data and your email platform. For a campaign to run itself, your <GlossaryLink slug="marketing-automation" className="text-[#0B162A] hover:underline">marketing
        automation</GlossaryLink> tool (Brevo, GetResponse, MailerLite, Moosend, ActiveCampaign, or Mailchimp) must
        connect with the databases, CRMs, or booking tools where your contact and behavioral data live. Each of
        these platforms offers connectors or <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">APIs</GlossaryLink> designed
        to sync data automatically. For example, Brevo’s integration with platforms like Shopify and WooCommerce
        lets you trigger emails based on a customer’s actions, like a purchase or an abandoned cart, without you
        having to export or import lists by hand. Mailchimp and ActiveCampaign both support syncing with your
        existing CRM so that changes in customer status or segment tags update your email lists in real time.</p>
      <p className="text-base text-white shadow-text pt-3">
        What changes in a real environment is the flow of data. New leads from your website forms need to enter the
        right segment in your email tool, not just drop into a spreadsheet. GetResponse, for instance, is built to
        link landing pages and forms directly to automated follow-up sequences, so every inquiry gets a defined next
        step. MailerLite makes it simple to connect signup forms to audience groups and workflows, keeping your
        follow-up consistent regardless of where the lead came from. Moosend uses tags and segments to sort contacts
        as they come in, so the right message goes to the right person, not the whole list.</p>
      <p className="text-base text-white shadow-text pt-3">
        The technical details depend on your systems, but the principle is the same: integrations must be robust,
        tested, and able to handle daily changes without breaking. Relying on manual exports or copying and pasting
        between systems is a recipe for delay, missed follow-ups, and errors, exactly the problems automation is
        meant to solve. In the four-phase methodology Geek @ Your Spot uses, integration is planned early, before
        any messages go out. This means mapping fields, setting up automated syncs, and smoke-testing with sample
        data to confirm that contacts flow into the right segments and trigger the correct sequences.</p>
      <p className="text-base text-white shadow-text pt-3">
        A real integration also means handling exceptions. Not every contact will have a complete record, and some
        data sources will be messier than others. The best automation platforms allow you to set fallback values or
        create rules for missing information, so an email can still go out even if, for example, a first name or
        last purchase date is missing. ActiveCampaign and Mailchimp both support conditional content blocks for this
        purpose: if a field is empty, the email shows a default value or adapts its message.</p>
      <p className="text-base text-white shadow-text pt-3">
        Operationally, the integration step is where you prevent most future headaches. If your CRM and email
        platform are not talking to each other, you will end up with out-of-date segments, duplicate records, and
        missed opportunities. When set up right, as soon as a lead comes in, it is routed to the correct workflow,
        receives the right follow-up, and is tracked for engagement, all automatically, with no manual work required
        from staff. This is where the real time savings and reliability come from, and why skipping or rushing the
        integration phase usually leads to automation projects stalling or creating more work instead of less.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, getting data and integration right is what makes personalized email campaigns possible for small
        businesses. The tools, Brevo, GetResponse, MailerLite, Moosend, ActiveCampaign, and Mailchimp, are only as
        good as the data they can access and the automations you can trigger with it. When your systems are
        connected and your data is clean, your campaigns become a living process that adapts to each contact in real
        time, driving more sales and freeing your staff from routine follow-up.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-data-and-integration-a-real-personalized-email-system-needs" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data and Integration a Real Personalized Email System Needs
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-data-and-integration-a-real-personalized-email-system-needs-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data and Integration a Real Personalized Email System Needs
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
