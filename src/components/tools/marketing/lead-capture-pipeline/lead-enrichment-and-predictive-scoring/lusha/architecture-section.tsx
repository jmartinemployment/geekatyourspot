import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Lusha’s architecture is built to connect directly into the heart of your sales stack, making sure that
        enriched data, predictive scores, and buying signals flow seamlessly from its own databases into
        your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>, outreach tools, and marketing platforms. At its
        core, Lusha maintains a global repository of verified business contact data, emails, mobile numbers,
        job titles, company firmographics, and technographics. This data is continuously updated,
        cross-checked, and scored for accuracy, with built-in mechanisms to flag outdated or risky information
        before it ever reaches your team.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform’s data structure is designed for both breadth and precision. Each contact record holds
        not just basic details, but a full profile: direct dial, mobile, verified email, current title,
        department, company size, industry, and technology stack. On the company side, Lusha tracks headcount,
        funding rounds, revenue range, hiring trends, and a suite of intent and risk signals. These include
        changes in IT spend, leadership moves, new job postings, and market news, signals that are refreshed
        on a monthly, weekly, or even real-time basis, depending on the data source. Every signal is tied to a
        specific, dated event, not just a generic “interest score.”</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is where Lusha stands out for small businesses that already run on Salesforce, HubSpot,
        Zoho, Outreach, SalesLoft, or SourceWhale. Lusha is not a standalone silo. It pushes enriched and
        scored data directly into your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>, mapping its fields to
        your existing structure. For example, verified emails and confidence scores become custom properties
        in HubSpot; direct dials and mobile numbers are mapped to contact records in Salesforce; lead scores
        and buying signals are written as standard or custom fields, ready for workflow automation. This means
        the data your reps see is always current, and every automation, whether a lead routing rule or a drip
        campaign, runs on live, verified inputs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk processing is handled by Lusha’s&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>, which can
        process up to 100 records per request. For larger lists, the system batches requests and runs them in
        parallel, returning a fully enriched, deduplicated, and standardized file. The architecture is
        designed to minimize manual intervention: low-confidence matches are flagged automatically, and
        normalization routines standardize job titles, industries, and company sizes so that every record fits
        cleanly into your reporting and segmentation logic. For teams concerned about data control, Lusha
        supports workflows that run on your own n8n instance, keeping sensitive uploads under your own
        governance.</p>
      <p className="text-md text-white shadow-text pt-3">
        On the compliance front, Lusha’s data sourcing is professional and opt-outs are honored automatically.
        The platform flags invalid or risky email architectures before a campaign launches, helping you avoid
        regulatory pitfalls and protect your sender reputation. Deliverability checks and confidence grades
        are built into the enrichment process: every email is scored (A+, A, B, C, D), with clear
        send/hold/do-not-send recommendations. This is especially critical for small businesses where a single
        bounce or compliance slip can have outsized consequences.</p>
      <p className="text-md text-white shadow-text pt-3">
        The predictive scoring engine is tightly coupled to the&nbsp;<GlossaryLink slug="data-model" className="text-[#0B162A] hover:underline">data
        model</GlossaryLink>. Scores are calculated on the fly using live firmographic
        and&nbsp;<GlossaryLink slug="intent-data" className="text-[#0B162A] hover:underline">intent data</GlossaryLink>, not just historical engagement.
        You can configure scoring criteria to match your own ICP, weighting signals like hiring surges,
        leadership changes, or IT spend shifts. Lusha’s scoring system is not just a number, it is a tiered,
        actionable ranking that routes leads to the right owner, triggers pre-call briefs, and powers
        automated workflows across your sales stack. The architecture supports both account-level and
        contact-level scoring, with transparency on every input and the ability to re-rank as new signals
        arrive.</p>
      <p className="text-md text-white shadow-text pt-3">
        Lusha’s architecture also supports continuous enrichment. This means that as contacts change roles,
        get promoted, or leave, the system detects the change, updates the record, and triggers alerts or
        workflow actions in your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>. For example, if a champion
        at a target account is promoted, Lusha updates the contact record, flags the new buying power, and can
        even alert the responsible rep within 24 hours. This keeps your pipeline aligned with real-world
        changes, so your team never chases a dead lead or misses a new opportunity.</p>
      <p className="text-md text-white shadow-text pt-3">
        For local teams in South Florida, the practical effect is that
        your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;is never static. Every day, new buying
        signals, updated contacts, and verified leads flow in. Integrations keep everything in sync, so your
        marketing, sales, and operations teams always work from the same, current data. The result is a sales
        engine that runs on live intelligence, not stale lists or guesswork. Lusha’s architecture is not just
        about storing data; it is about making sure every byte is actionable, every workflow is automated, and
        every lead is scored and routed the moment it matters.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="inside-lusha-the-data-architecture-integrations-and-what-it-holds" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Inside Lusha: The Data Architecture, Integrations, and What It Holds
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="inside-lusha-the-data-architecture-integrations-and-what-it-holds" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Inside Lusha: The Data Architecture, Integrations, and What It Holds
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
