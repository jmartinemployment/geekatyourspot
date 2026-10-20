import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Going live with Leadfeeder in a small business setting is a focused process, not a drawn-out IT
        project. Most teams in Miami-Dade, Broward, or Palm Beach can expect to see the first high-fit leads
        in their dashboard within a day or two of setup. The short timeline is possible because Leadfeeder is
        built for fast adoption: it uses a single script, pre-built connectors for common CRMs, and
        out-of-the-box filters that work for most B2B workflows right away.</p>
      <p className="text-md text-white shadow-text pt-3">
        A typical implementation starts with placing the Leadfeeder tracking script on your website. This is
        not a complex integration, it’s a single snippet, similar to what you would use for Google Analytics.
        Once live, Leadfeeder begins capturing visitor data immediately. There’s no need to wait for a
        developer sprint or a platform migration. For a team that has lost hours chasing cold leads, seeing
        real company names and intent signals the next morning is a sharp change.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next step is connecting Leadfeeder to your
        existing&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>. Leadfeeder offers direct integrations with
        platforms like HubSpot, Salesforce, Pipedrive, and Microsoft Dynamics. For most small businesses, this
        means you can push company and contact records straight into your pipeline with a few clicks. There’s
        no need to build a custom connector or export CSVs every day. The integration is designed to work both
        ways: Leadfeeder syncs new and updated leads into
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, and you can see visit history and intent scores
        right inside the&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;interface. This keeps your
        sales team working in the tools they already use.</p>
      <p className="text-md text-white shadow-text pt-3">
        A phased rollout is often the best approach for small teams. Start with a pilot group, maybe just the
        sales lead and one marketing manager. Test the filters, review the first batch of identified
        companies, and confirm that the scoring model is flagging real opportunities. Because Leadfeeder’s
        filters and notifications are pre-configured for B2B buying signals, most teams find that the default
        setup catches the majority of high-intent visits. If your business has a unique sales cycle or targets
        a narrow niche, you can adjust the rules to fit. But for most, the out-of-the-box configuration is
        enough to start catching missed opportunities from day one.</p>
      <p className="text-md text-white shadow-text pt-3">
        What shortens the go-live process with Leadfeeder is the lack of required custom development. The
        tracking script,&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;connectors, and notification
        rules are all pre-built. You do not need a data scientist or a dedicated IT resource to launch. Geek @ Your Spot LLC handles the initial configuration, mapping your website pages to high-intent signals and
        setting up the right filters for your local market. This includes defining which visits should trigger
        an instant alert, say, a Miami law firm hitting your pricing page twice in a week, and which should be
        deprioritized as low-value traffic.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses already using Slack or email for internal notifications, Leadfeeder’s real-time
        alerts can be routed directly to the right rep or team channel. This ensures that the moment a
        high-fit local account lands on your site, someone sees it in time to act. There is no manual polling
        or daily export required; the process is automatic from the first visit.</p>
      <p className="text-md text-white shadow-text pt-3">
        The final stage is training and handoff. Geek @ Your Spot LLC walks your team through the live system,
        showing how to interpret intent scores, adjust filters, and follow up on hot accounts. Because
        Leadfeeder surfaces company-level data, not individual contacts, your team will need a process for
        researching the right decision-maker once a company is identified. For many small businesses, this is
        as simple as looking up the company on LinkedIn or using the built-in enrichment features to find
        direct contact details.</p>
      <p className="text-md text-white shadow-text pt-3">
        In practice, the entire go-live, from script install to first actionable lead, can be completed in
        under a week. There is no system downtime, and no need to pause your regular sales or marketing
        activity. Leadfeeder’s design keeps the setup lean, so your team moves from guessing to acting on real
        buying signals almost overnight.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-go-live-with-leadfeeder-in-a-small-business-environment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Go Live with Leadfeeder in a Small Business Environment
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
              <h2 id="what-it-takes-to-go-live-with-leadfeeder-in-a-small-business-environment" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Go Live with Leadfeeder in a Small Business Environment
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
