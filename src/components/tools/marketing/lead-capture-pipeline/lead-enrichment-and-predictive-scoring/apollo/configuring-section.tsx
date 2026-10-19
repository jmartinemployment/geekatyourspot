import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Setting up Apollo for a small business is not just a matter of turning it on and hoping for results.
        The real work is in configuring the rules and automation logic that make Apollo fit your sales process
        and data environment. This is where Geek @ Your Spot closes the gap for local teams: by mapping
        Apollo’s own automation options to how you actually sell, route, and follow up.</p>
      <p className="text-md text-white shadow-text pt-3">
        Apollo’s core automation starts with lead enrichment and predictive scoring. The platform lets you
        define what a “good” lead looks like by setting up filters and scoring rules based on firmographic
        data, real-time intent, and engagement signals. You configure these rules to match your ideal customer
        profile, location, industry, company size, job title, and more. Apollo’s interface offers over 65 data
        filters across its 240 million contact records and 30 million company profiles, so you can be as
        specific as your business requires. For a local HVAC company, you might filter only for businesses
        within Miami-Dade above a certain employee count. For a professional services firm, you could
        prioritize leads who have visited your pricing page in the last week and match your target sector.</p>
      <p className="text-md text-white shadow-text pt-3">
        The predictive scoring engine in Apollo uses AI to rank leads automatically. You set the criteria,
        such as recent website visits, job title, or engagement with your campaigns, and Apollo scores each
        lead in real time. These scores drive downstream automation: high-scoring leads can be routed
        instantly to your best rep, enrolled in a sequence, or flagged for immediate outreach. No more manual
        sorting or guesswork. The scoring logic is not static; Apollo’s AI model gets smarter as it sees which
        leads actually convert in your system, refining the scores as your data grows.</p>
      <p className="text-md text-white shadow-text pt-3">
        Apollo’s automation also covers the full inbound flow. The platform can pick up a new website visitor,
        enrich the record with verified details, score it against your rules, and assign it to the right
        person on your team, all within seconds. If you want, Apollo will draft the first follow-up email
        automatically, so a prospect never sits idle in a queue. You choose the routing rules: by territory,
        by product line, or by rep availability. You can even set up instant meeting booking for high-intent
        leads, cutting out the back-and-forth of scheduling.</p>
      <p className="text-md text-white shadow-text pt-3">
        On the outbound side, Apollo automates prospecting and outreach sequences. You build lists using
        natural language search or detailed filters, then let Apollo enroll contacts into personalized
        sequences that mix email, calls, and LinkedIn touchpoints. The system tracks bounces and out-of-office
        replies, automatically pausing or rerouting messages to protect your sender reputation. Deliverability
        tools warm up your domain and monitor for signs of trouble, so your emails land in inboxes rather than
        spam.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data sync is another critical automation layer. Apollo integrates directly with CRMs like Salesforce
        and HubSpot, pushing and pulling data on a schedule or in real time. You decide which fields to sync,
        how often, and what triggers an update. This keeps
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;clean and up-to-date, with no double entry
        or manual imports. Apollo’s&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;gives you
        programmatic access to all core functions, if you have a custom workflow or need to connect Apollo to
        another tool, Geek @ Your Spot can help you design and implement those integrations. But for most
        small businesses, the built-in integrations and configuration screens cover the main needs without
        custom code.</p>
      <p className="text-md text-white shadow-text pt-3">
        Extension in Apollo is handled through its&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;and
        integration marketplace. If your business runs on tools outside the standard stack,
        Apollo’s&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;lets you build custom connectors or
        automate workflows using platforms like&nbsp;<Link id="tools-marketing-lead-enrichment-apollo-configuring-zapier" href="/tools/marketing/zapier" className="text-[#C83803] hover:underline">Zapier</Link>, Make, or n8n. For example, you might want to trigger a
        Slack notification for every high-scoring lead, or send a daily report of new website visitors that
        match your ICP. These automations are not just nice-to-haves, they are what keep your team focused on
        the right actions, every day, without manual effort.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot’s job in all this is to translate your real-world sales process into Apollo’s
        automation logic. That means working with you to define what a qualified lead actually looks like,
        mapping your data fields to Apollo’s schema, and setting up the scoring, routing, and enrichment rules
        that fit your business, not a generic template. For a South Florida small business, that could mean
        configuring Apollo to surface only leads within a 30-mile radius who have visited your services page
        and have decision-maker titles. It might also mean building a workflow that syncs every new contact
        into QuickBooks or another local system.</p>
      <p className="text-md text-white shadow-text pt-3">
        The difference between a DIY setup and a tailored deployment is what you get out of Apollo. Out of the
        box, Apollo is a toolkit. With the right configuration, it becomes a lead engine that runs itself.
        Geek @ Your Spot brings the experience to know which rules matter, how to avoid common pitfalls (like
        over-scoring or under-filtering), and how to make Apollo work with your existing stack, so you do not
        spend months tweaking settings or chasing support tickets.</p>
      <p className="text-md text-white shadow-text pt-3">
        To sum up, configuring Apollo means setting up the filters, scoring models, and automation rules that
        fit your business, connecting your data sources, and extending the platform only where it adds real
        value. The platform is flexible, but the gains come from making it fit your process, not the other way
        around. Geek @ Your Spot’s role is to get you there faster, with fewer mistakes and a setup that
        actually delivers qualified leads to your team every day.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-actually-gets-configured-in-apollo-rules-automation-and-extensions" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Actually Gets Configured in Apollo: Rules, Automation, and Extensions
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
              <h2 id="what-actually-gets-configured-in-apollo-rules-automation-and-extensions" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Actually Gets Configured in Apollo: Rules, Automation, and Extensions
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
