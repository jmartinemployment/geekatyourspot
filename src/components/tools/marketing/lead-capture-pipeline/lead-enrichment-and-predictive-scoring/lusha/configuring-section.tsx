import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Configuring Lusha for a lead enrichment and predictive scoring pipeline is not about flipping a switch
        and hoping the data flows. It is a detailed process that sets up the rules, automations, and
        integrations that turn Lusha’s raw power into a working system for your team. Geek @ Your Spot LLC’s role
        is to close the gap between what Lusha offers out of the box and what a South Florida small business
        actually needs to see in their&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, dialer, or outreach
        tool every day.</p>
      <p className="text-md text-white shadow-text pt-3">
        Lusha’s core logic starts with contact and company enrichment. You define what a “good lead” looks
        like by setting your Ideal Customer Profile (ICP) criteria, industry, company size, revenue range,
        geography, seniority, and more. Lusha’s automation then scores every inbound or uploaded lead against
        these rules, using firmographic and behavioral filters. This is not just a one-time setup. The ICP
        scoring logic is fully configurable, so if your sales priorities shift, you can adjust the criteria
        and weights, and the scoring updates in real time. Lusha’s own documentation describes over 50
        behavioral and firmographic filters for custom scoring and segmentation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk enrichment is a major time-saver. Instead of one-by-one lookups, Lusha’s
        bulk&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;lets you process hundreds of contacts in
        seconds. You upload a CSV, Lusha splits the file into batches of 100 (the
        current&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;limit per request), and enriches each
        contact with verified emails, mobile numbers, job titles, and company details. The enriched file comes
        back ready to import into your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or dialer. For
        larger lists, Geek @ Your Spot LLC builds workflows that chain these batch calls, so even thousands of
        records can be cleaned and enriched overnight.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation does not stop at enrichment. Lusha’s workflow logic can be set to
        update&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;records when contacts change jobs, get
        promoted, or leave a company. This is critical for small teams that cannot afford to waste time
        chasing dead contacts. The process runs on a schedule, daily, weekly, or on demand, using
        Lusha’s&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;endpoints. When a contact’s title or
        company changes, the&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;record is updated
        automatically, and the rep is alerted within 24 hours. For high-value deals, optional Slack
        notifications can fire to both the rep and manager, so no opportunity slips through the cracks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Lusha’s extension mechanism is its&nbsp;<GlossaryLink slug="api">API</GlossaryLink>. Everything,
        enrichment, scoring, signals, and workflow triggers, runs through documented endpoints. Geek @ Your Spot LLC configures these integrations to connect Lusha with Salesforce, HubSpot, Zoho, Outreach,
        SalesLoft, and SourceWhale. Field mapping is set up so that enriched data lands in the right custom
        properties or fields. For example, in HubSpot, you can map Lusha’s email confidence score, email
        status, and validation results directly to custom fields, powering automated deliverability checks and
        campaign segmentation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Quality control is part of the logic. Lusha flags records with low-confidence data for manual review,
        preventing bad contacts from slipping into campaigns. Titles, industries, and company sizes are
        normalized so your reporting and segmentation are consistent. Geek @ Your Spot LLC sets up these review
        queues and ensures that only high-confidence records are routed for sales action.</p>
      <p className="text-md text-white shadow-text pt-3">
        Lusha’s signal engine is another configurable layer. You can choose which buying signals, growth,
        intent, events, risk, should trigger&nbsp;<GlossaryLink slug="lead-scoring">lead
        scoring</GlossaryLink>&nbsp;or routing. For example, you might set the system to flag any company with
        a recent hiring surge or a new executive as a high-priority lead. These signals can be weighted and
        combined with ICP fit to create a ranked, actionable list for your team.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams running always-on chatbots or voice assistants,
        Lusha’s&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;can be piped into those systems as well.
        The chatbot can pull real-time enrichment for website visitors and push the data into
        the&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, so every handoff to sales is already scored and
        enriched. Geek @ Your Spot LLC handles the integration work, making sure the data flows smoothly between
        Lusha, your chatbot, and your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;without manual
        intervention.</p>
      <p className="text-md text-white shadow-text pt-3">
        The configuration work is not just technical. It is about mapping your sales process to Lusha’s
        automation logic, then tuning the system as your business grows. Geek @ Your Spot LLC guides you through
        choosing the right scoring criteria, setting up batch enrichment workflows, mapping fields, and
        connecting your outreach tools. The result is a system where every rep starts the day with a hit-list
        of verified, scored, and prioritized leads, no more guessing, no more wasted dials.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-lushas-rules-automation-and-extensions-are-configured-for-a-real-pipeline" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Lusha’s Rules, Automation, and Extensions Are Configured for a Real Pipeline
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
              <h2 id="how-lushas-rules-automation-and-extensions-are-configured-for-a-real-pipeline" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Lusha’s Rules, Automation, and Extensions Are Configured for a Real Pipeline
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
