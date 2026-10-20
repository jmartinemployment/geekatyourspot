import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Snitcher stands out for its straightforward configuration process, tailored to deliver actionable lead
        enrichment and predictive scoring without the overhead of a complex enterprise tool. For a small
        business in South Florida, the real value comes from setting up Snitcher&#39;s rules and automation
        logic so you stop guessing which website visits matter and start acting on the signals that actually
        drive sales. Geek @ Your Spot LLC configures Snitcher to fit your environment, not the other way around.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core of Snitcher&#39;s configuration is its rule-based logic for identifying, scoring, and routing
        leads. The platform lets you define what counts as a high-intent visit: which pages signal buying
        interest, which behaviors (like repeated visits or deep dives into technical docs) matter, and what
        firmographic details (industry, size, location) match your ideal customer profile. These rules are not
        generic templates. They are set up to reflect your real sales process, so a visit to your pricing page
        by a company in your target industry triggers a different response than a quick bounce from a student
        or competitor.</p>
      <p className="text-md text-white shadow-text pt-3">
        Snitcher’s automation logic is designed to remove manual work from your pipeline. Once a visitor
        matches your criteria, Snitcher can automatically push that lead into
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, trigger a Slack or Microsoft Teams alert, and
        even enrich the lead with contact details like decision-maker names, emails, and phone numbers. The
        workflow is not just about surfacing a name. It is about getting the right information to the right
        person, at the right moment, so your team can reach out while the interest is still live.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams that want deeper customization, Snitcher offers extension mechanisms through its
        open&nbsp;<GlossaryLink slug="api">API</GlossaryLink>,&nbsp;<GlossaryLink slug="webhooks">webhooks</GlossaryLink>,
        and integrations with platforms like HubSpot, Salesforce, Pipedrive,
        Zoho&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, and Zapier. This means you are not locked into
        a closed system. Geek @ Your Spot LLC can build custom automations, like syncing enriched lead data to a
        specific deal stage, updating custom fields in your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>,
        or triggering a tailored outreach sequence based on a lead’s behavior profile.</p>
      <p className="text-md text-white shadow-text pt-3">
        What actually gets configured in a real deployment? The rules that define your ideal customer profile
        (ICP) and buying signals. The mapping between website behavior
        and&nbsp;<GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink>. The automation steps that
        route leads, trigger alerts, and kick off sequences. And the integration points that ensure Snitcher
        data flows cleanly into your existing sales and marketing stack. Geek @ Your Spot LLC handles the details:
        mapping your ICP, setting up filters to exclude students and competitors, tuning alert thresholds so
        your team is not flooded with noise, and making sure every automation runs smoothly from day one.</p>
      <p className="text-md text-white shadow-text pt-3">
        Snitcher’s configuration is not a one-time event. As your business grows or your sales priorities
        shift, the rules and automations can be adjusted, without a new contract or a technical overhaul. Geek @ Your Spot LLC stays involved to review performance, refine filters, and update scoring logic based on
        what is actually driving conversions in your pipeline. If you want to bring in your
        own&nbsp;<GlossaryLink slug="intent-data">intent data</GlossaryLink>&nbsp;or custom attributes,
        Snitcher supports it. You can sharpen the score by layering in external signals, ensuring your team
        always sees the hottest leads first.</p>
      <p className="text-md text-white shadow-text pt-3">
        For local teams used to tools that require weeks of setup or ongoing IT support, Snitcher’s approach
        is different. There is no warehouse to maintain, no hidden maintenance burden, and no need for a
        dedicated admin. The technical lift is light: one tracking script in your website header, and the rest
        happens in the platform. Geek @ Your Spot LLC’s role is to make sure the system reflects your business
        reality, so you are not chasing the wrong leads or missing the ones ready to buy.</p>
      <p className="text-md text-white shadow-text pt-3">
        The extension mechanism is there for teams who want more than out-of-the-box.
        Snitcher’s&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;and&nbsp;<GlossaryLink slug="webhooks">webhooks</GlossaryLink>&nbsp;let
        you pull data into your own reporting tools, power internal dashboards, or trigger custom workflows in
        real time. For most small businesses, the built-in integrations with major CRMs and sales tools are
        enough. But if you need something special, a custom Slack alert, a unique field mapping, or a workflow
        that matches your internal process, Geek @ Your Spot LLC configures it so Snitcher fits your environment,
        not the other way around.</p>
      <p className="text-md text-white shadow-text pt-3">
        In practice, this means your sales team comes in Monday morning to a dashboard that lists not just
        anonymous visits, but named companies, scored and enriched with the details that matter. High-intent
        leads are routed to reps with context, not just a name. Low-value noise is filtered out before it ever
        reaches your pipeline. And every automation,
        from&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;sync to real-time alerts, is tuned to your
        actual workflow. That is what configuration means with Snitcher, no more generic lists, no more wasted
        effort, just actionable leads delivered to your team every day.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="configuring-snitcher-rules-automation-and-extension-in-a-small-business-environment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring Snitcher: Rules, Automation, and Extension in a Small Business Environment
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
              <h2 id="configuring-snitcher-rules-automation-and-extension-in-a-small-business-environment" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring Snitcher: Rules, Automation, and Extension in a Small Business Environment
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
