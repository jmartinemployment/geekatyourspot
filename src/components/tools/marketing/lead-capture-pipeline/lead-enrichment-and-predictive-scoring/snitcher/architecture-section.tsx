import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Snitcher’s architecture is built for speed, reliability, and seamless integration with the tools small
        businesses already use. The platform is cloud-based, requiring no local infrastructure or ongoing
        maintenance from your team. Once the tracking script is placed on your site, all data collection,
        enrichment, and scoring happen in Snitcher’s own environment. There’s no need for a data warehouse or
        a separate implementation project. This makes it especially well-suited for teams with limited IT
        resources or those who want to avoid the overhead of managing new systems.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the core, Snitcher’s engine is designed to resolve anonymous web traffic into verified business
        profiles. The tracking script collects session data and sends it to Snitcher’s servers, where
        IP-to-company matching runs in real time. This is not just a lookup table, it’s a multi-layered
        process that pulls from proprietary and third-party databases to maximize match rates, especially for
        corporate networks. For US visitors, Snitcher can go further, resolving sessions down to the
        individual level when possible, attaching names, titles, and contact details to the visit. This
        person-level capability is US-focused and falls back to company-level for other regions, keeping
        coverage broad without overpromising on global person resolution.</p>
      <p className="text-base text-white shadow-text pt-3">
        Snitcher’s data enrichment pipeline adds context to each identified visitor. The platform pulls in
        firmographics, industry, company size, revenue, and location, along with engagement metrics like
        session count, page views, time on site, and visit history. If available, it can also surface
        decision-maker contacts, including verified business emails and phone numbers. These details are not
        just for show; they are structured to feed directly into
        your&nbsp;CRM, outreach tools,
        or&nbsp;<GlossaryLink slug="marketing-automation" className="text-[#0B162A] hover:underline">marketing automation</GlossaryLink>&nbsp;systems.
        The&nbsp;<GlossaryLink slug="data-model" className="text-[#0B162A] hover:underline">data model</GlossaryLink>&nbsp;is flexible, supporting custom
        fields and mapping to fit your existing workflows.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integration is where Snitcher stands out for small teams. The platform plugs directly into major CRMs,
        HubSpot, Salesforce, Pipedrive, and Zoho&nbsp;CRM, without the
        need for middleware or complex configuration. Two-way sync means leads, contacts, and account data
        flow both ways: Snitcher enriches your&nbsp;CRM&nbsp;with web
        activity and firmographics, while your&nbsp;CRM&nbsp;can push
        updates back to Snitcher for better scoring and filtering. For teams using Slack or Microsoft Teams,
        Snitcher can send real-time alerts to dedicated channels, ensuring that sales reps see high-intent
        activity as it happens.&nbsp;<Link id={`tools-marketing-lead-enrichment-snitcher-architecture-zapier${idSuffix}`} href="/tools/marketing/zapier" className="text-[#0B162A] hover:underline">Zapier</Link>&nbsp;support and open APIs allow for further customization, connecting
        Snitcher to hundreds of other business tools, automating lead routing, and triggering workflows based
        on specific behaviors.</p>
      <p className="text-base text-white shadow-text pt-3">
        Snitcher’s automation layer is built to reduce manual effort. You can define rules for what counts as
        a hot lead, by ICP match, page views, or engagement score, and set up triggers for
        notifications,&nbsp;CRM&nbsp;updates, or outbound sequences.
        The platform’s logic filters out irrelevant traffic, such as students or competitors, so your team
        only works leads that fit your target profile. All automation is managed through Snitcher’s interface,
        with no need for coding or IT intervention. For businesses running multiple domains, Snitcher supports
        up to five additional properties per account, though billing is per domain, so this should be factored
        into your planning.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and compliance are not afterthoughts. Snitcher operates under a legitimate interest basis for
        data processing, surfaces only business-related contact details, and is working toward ISO 27001
        certification. Company identification is always at the business level, and personal data is handled
        with care, especially outside the US. The architecture is designed to keep your data secure, with
        clear boundaries on what is collected and how it is shared.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business, the practical result is a platform that delivers real-time, enriched, and scored
        leads directly into your existing stack. There’s no need to overhaul
        your&nbsp;CRM&nbsp;or marketing systems. Snitcher’s
        architecture is lightweight, its integrations are deep, and its data flows are transparent. You get a
        single source of truth for web-driven leads, with the flexibility to adjust rules, mappings, and
        workflows as your business grows. The platform is built to make the most of every site visit, turning
        anonymous traffic into actionable pipeline, all within the systems your team already knows.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-powers-snitcher-architecture-integrations-and-data-flow" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Powers Snitcher: Architecture, Integrations, and Data Flow
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-powers-snitcher-architecture-integrations-and-data-flow-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Powers Snitcher: Architecture, Integrations, and Data Flow
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
