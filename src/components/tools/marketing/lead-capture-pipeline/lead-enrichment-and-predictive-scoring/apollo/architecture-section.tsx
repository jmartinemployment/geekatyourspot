import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Apollo’s strength comes from its architecture, a system built to hold vast amounts of verified data,
        connect with your existing tools, and keep everything in sync as you work. At the core is the Apollo
        Data Network, which brings together 240 million contacts and 30 million companies, each with dozens of
        data points. This is not a static list. Apollo’s data is refreshed regularly, with automated checks to
        verify emails, phone numbers, job titles, and even company funding events or job changes. When someone
        in your database moves to a new company or gets a new email, Apollo updates the record automatically.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform’s enrichment engine sits on top of this network, pulling in missing fields from multiple
        trusted sources. If one source does not have a phone number or title, Apollo checks the next, using a
        waterfall enrichment approach. This keeps your records as complete as possible without you having to
        stitch together data from different vendors. Each lead or company profile can include up to 65 data
        points, everything from direct dial numbers to firmographics, technographics, and real-time intent
        signals.</p>
      <p className="text-md text-white shadow-text pt-3">
        Apollo does not work in isolation. It connects directly to CRMs like HubSpot and Salesforce, both
        through native integrations and its own&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>. This means
        you can push and pull data on demand, on a schedule, or in real time. When a lead is updated in
        Apollo, the change syncs to your&nbsp;CRM, and vice versa.
        This two-way sync keeps your sales and marketing teams on the same page and stops data from going
        stale. The Chrome Extension brings Apollo’s data into the tools you already use, LinkedIn, Gmail,
        your&nbsp;CRM, so you capture new contacts wherever you work
        online.</p>
      <p className="text-md text-white shadow-text pt-3">
        Beyond&nbsp;CRM, Apollo integrates with platforms like Slack
        (for team notifications), ChatGPT and Claude (for AI-powered research and automation), and Prospeo
        (for deeper email and phone verification). Each integration is designed to keep your workflow smooth,
        no jumping between tools, no manual exports or imports. For example, Apollo’s connection with ChatGPT
        or Claude can let you research companies or contacts in natural language, enrich records, or even
        manage sequences without leaving your AI assistant.</p>
      <p className="text-md text-white shadow-text pt-3">
        The architecture also includes a deliverability suite. Every email address is run through a seven-step
        verification process, and Apollo uses additional providers like Findymail and ZeroBounce for extra
        checks. If an address is risky or likely to bounce, Apollo flags it before it reaches your reps. The
        system also monitors your sending domains for health, warms up new domains, and pauses sequences if
        bounce rates rise. This keeps your sender reputation intact and ensures your messages reach the inbox.</p>
      <p className="text-md text-white shadow-text pt-3">
        For website visitor identification, Apollo matches anonymous traffic against its global database to
        surface both company and contact-level details. Company-level identification gives you the account,
        industry, size, and visit activity. Contact-level goes deeper, sometimes revealing the actual person
        visiting, with verified email and phone, especially for US-based visitors. You can filter these
        visitors by ICP fit or intent score, so your team gets a real-time shortlist of the most promising
        accounts.</p>
      <p className="text-md text-white shadow-text pt-3">
        Apollo’s AI layer ties it all together. It does not just store data; it learns from
        your&nbsp;CRM, your team’s actions, and the market. The more
        you use Apollo, the smarter it gets at recommending leads, scoring prospects, and drafting outreach.
        This intelligence is not limited to a dashboard. It runs in the background, guiding your team to the
        next best action and surfacing the leads most likely to convert.</p>
      <p className="text-md text-white shadow-text pt-3">
        In short, Apollo is not just a big database. It is a connected system that plugs into your sales and
        marketing stack, keeps data clean and current, and uses AI to make sure your team works only the leads
        that matter. For small businesses in South Florida, this means you get enterprise-grade data and
        automation without the complexity or overhead of managing it yourself. Every integration, every data
        point, and every automation is there to make your pipeline faster, more predictable, and more
        profitable.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="apollos-data-architecture-integrations-and-what-it-holds" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Apollo’s Data Architecture, Integrations, and What It Holds
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
              <h2 id="apollos-data-architecture-integrations-and-what-it-holds-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Apollo’s Data Architecture, Integrations, and What It Holds
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
