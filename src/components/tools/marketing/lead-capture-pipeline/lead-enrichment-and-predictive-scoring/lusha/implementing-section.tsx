import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Getting Lusha up and running inside a small business sales workflow is not a long, drawn-out project.
        The platform is designed to plug into what you already use, and the steps to live data are concrete:
        connect, map, test, then roll out. For a South Florida team, the difference between a month of IT
        back-and-forth and a week to first results comes down to three things: Lusha’s pre-built integrations,
        its templated data mapping, and phased deployment that lets you see value before you commit every
        workflow.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is connecting Lusha to your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;and
        outreach tools. Lusha comes with direct integrations for Salesforce, HubSpot, Zoho, Outreach, and
        SalesLoft. These are not just&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;endpoints; they’re
        built to move verified contact data, company details, and scoring fields straight into your existing
        records without manual entry. For SourceWhale users, verified emails and phone numbers show up
        directly inside your outreach workflow. This means your team does not have to bounce between platforms
        or rekey data. The connection is not just technical, it’s operational, cutting out hours of admin from
        the start.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk enrichment is the next lever. Instead of adding leads one by one, Lusha’s
        bulk&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;processes up to 100 records per batch.
        Upload a CSV, and within seconds, you get back a file with verified emails, direct mobile numbers,
        updated job titles, and company-level firmographics. For teams working off event lists or marketing
        exports, this is the difference between a static spreadsheet and a ready-to-dial call list. The
        workflow is simple: upload, enrich, review flagged records for low confidence, and push the clean file
        into your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or dialer. Lusha’s evidence shows that
        this approach can turn thousands of cold records into usable, high-conversion contacts in a single
        afternoon.</p>
      <p className="text-md text-white shadow-text pt-3">
        Phased rollout means you do not have to rebuild your entire process on day one. Start with a sample
        workflow, a single campaign, a pilot list, or a specific territory. Run enrichment on this slice,
        validate the results, and only then expand. This lets you catch mapping issues, spot gaps in your
        data, and adjust field mappings before the entire team is affected. Lusha’s guidance is clear: start
        small, automate the&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;sync, and scale only once
        the data is flowing as expected.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation is built in from the start. Scheduled flows can run daily to check for contact changes, job
        moves, or new buying signals. When a contact is promoted or leaves, Lusha updates
        the&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;record, flags it for the owning rep, and, if
        configured, fires a Slack notification. This is not optional cleanup; it is the core of keeping your
        pipeline current and your outreach relevant. The system is built to keep your team focused on real
        prospects, not chasing ghosts or cleaning up after bounces.</p>
      <p className="text-md text-white shadow-text pt-3">
        Compliance is not an afterthought. Lusha’s data is professionally sourced, and opt-outs are honored
        automatically. This matters for local teams operating under strict solicitation rules, no more
        guessing if a contact is fair game.</p>
      <p className="text-md text-white shadow-text pt-3">
        The order of go-live is straightforward:</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Connect Lusha to your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;and outreach stack using the built-in integrations.</li>
        <li>Upload a test list or run a pilot enrichment on a real campaign file.</li>
        <li>Review mapped fields, flag any low-confidence records for manual check, and adjust mapping as needed.</li>
        <li>Push enriched data into your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, ensuring every contact has verified emails, direct dials, and up-to-date titles.</li>
        <li>Set up scheduled flows for daily sync, job change detection, and real-time scoring updates.</li>
        <li>Expand rollout to the rest of your team once the workflow is validated.</li>
      </ol>
      <p className="text-md text-white shadow-text pt-3">
        For a small sales team, the entire process can move from first connection to operational in days, not
        weeks, because the architecture is built for speed, accuracy, and minimal manual intervention. Lusha’s
        templated setup, phased approach, and direct integrations are what shorten the path from purchase to
        pipeline impact.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-go-live-with-lusha-in-a-real-sales-stack" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Go Live with Lusha in a Real Sales Stack
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-go-live-with-lusha-in-a-real-sales-stack" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Go Live with Lusha in a Real Sales Stack
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
