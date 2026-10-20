
export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Leadfeeder is purpose-built for B2B website visitor identification, lead enrichment, and predictive
        scoring at the company level. Its architecture is designed to operate in real time, maintain data
        privacy, and connect with the systems small businesses already use. At the heart of the platform is
        its proprietary IP-to-company database, which matches web traffic to real companies rather than
        individuals. This database is updated daily, pulling from millions of external signals and public IP
        registries, so it stays accurate even as remote work and network changes shift the landscape.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform’s architecture is modular. The tracking script installed on your website collects
        session-level behavioral data, pages viewed, session duration, visit frequency, and campaign source.
        This data is streamed to Leadfeeder’s cloud, where it is matched against the IP-to-company database.
        All processing is done at the company level, not the individual, which is why Leadfeeder can claim
        GDPR compliance out of the box. By default, it never shows personal details unless a visitor
        self-identifies (such as submitting a form), and even then, only with your explicit opt-in.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data enrichment is automatic. Once a company is identified, Leadfeeder pulls in firmographic data,
        industry, size, tech stack, recent news, and contact details where available. The system also records
        behavioral signals: which high-value pages were visited, how often, and in what order. All this is
        combined into a unified company profile, visible in the Leadfeeder dashboard and ready for export to
        your&nbsp;CRM&nbsp;or marketing tools.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integrations are a core part of Leadfeeder’s value for small teams. The platform supports direct,
        two-way sync with HubSpot, Salesforce, and Pipedrive. This means that when a local business from West
        Palm Beach visits your site and hits your pricing page three times, Leadfeeder can auto-create a lead
        or opportunity in your&nbsp;CRM, tag it with the right source,
        and assign it to the right rep, no manual entry required. Integration with Google Ads lets you see
        which campaigns are driving the best-fit traffic, not just clicks. Sync with LinkedIn Matched
        Audiences allows you to retarget companies who have shown real interest. There’s
        also&nbsp;API&nbsp;access for custom workflows and a browser
        plugin for researching companies as you browse.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation is built into the architecture. You can set up rules and workflows that trigger on specific
        behaviors: when a company with a certain score visits a high-intent page, Leadfeeder can send an
        instant Slack alert, push the contact to your&nbsp;CRM, or
        refresh a campaign audience. AI-powered features fill in missing company and contact fields on your
        saved lists, and the system can auto-tag customers, partners, or lost deals based on visit patterns.
        Daily AI-curated shortlists show which accounts are most worth acting on right now.</p>
      <p className="text-md text-white shadow-text pt-3">
        Leadfeeder’s data handling is transparent and privacy-focused. All data is processed in real time,
        with bots, ISPs, and low-quality sources filtered out before anything reaches your dashboard. You can
        remove unwanted companies yourself, keeping your pipeline clean. The system’s time-decay model ensures
        that only recent, relevant activity is surfaced, accounts that go cold drop off your priority list, so
        your team is always focused on what matters now.</p>
      <p className="text-md text-white shadow-text pt-3">
        Leadfeeder holds all visitor and company data in a unified, searchable interface. You can build and
        manage lists, filter by firmographics or behavior, and export records as needed. The architecture
        supports unlimited users and tracked domains, so even small businesses with multiple brands or sites
        can manage everything in one place. Full visitor history is available on paid plans, and you can push
        any account to your&nbsp;CRM&nbsp;for free, no credits
        deducted for single exports.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in South Florida, this architecture means you can see, score, and act on the
        companies visiting your site without building a custom data pipeline or hiring a data engineer.
        Leadfeeder’s integrations and automation logic handle the heavy lifting, while its privacy model keeps
        you compliant and focused on real B2B opportunities. The end result is a system that connects your
        website,&nbsp;CRM, and sales outreach into a single,
        data-driven workflow, built to make every local lead visible, qualified, and ready for follow-up.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="leadfeeders-core-architecture-integrations-and-data-handling" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Leadfeeder’s Core Architecture, Integrations, and Data Handling
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
              <h2 id="leadfeeders-core-architecture-integrations-and-data-handling-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Leadfeeder’s Core Architecture, Integrations, and Data Handling
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
