import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        LocaliQ is built as a unified digital marketing platform that combines ad management, optimization, lead
        tracking, and reporting in one system. At the center is its proprietary AI engine, which draws on data from
        over five million campaigns to inform every optimization decision. This engine is not a bolt-on, it&apos;s
        the core of the platform, running continuous analysis and updates across all active campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        The architecture is designed for small businesses that need results without heavy technical lift. LocaliQ
        offers an open <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>, which
        means it can integrate with other systems such as your <GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink> or <GlossaryLink slug="call-tracking" className="text-[#0B162A] hover:underline">call
        tracking</GlossaryLink> software. This allows leads and campaign data to flow into the tools you already
        use, so you are not locked into a closed ecosystem. For a small business in South Florida, this means
        LocaliQ can fit into your existing stack, pulling in first-party data from your website, CRM uploads, and
        call tracking logs to improve campaign targeting and measurement.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data flows through LocaliQ in a way that keeps everything connected. Every interaction, click, call, form
        fill, is tagged and tracked back to its source. The system combines reporting, call tracking, and CRM
        functions, so you always know which campaign or message drove a result. This is all visible in a single
        dashboard, removing the need to juggle multiple reporting tools or guess at <GlossaryLink slug="marketing-attribution" className="text-[#0B162A] hover:underline">attribution</GlossaryLink>.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the campaign level, LocaliQ holds all your ad creative, copy, budgets, and targeting rules. The platform
        manages campaigns across Google, Meta, Instagram, TikTok, and Snapchat, and can optimize spend across these
        channels based on live performance. This cross-channel capability is built into the architecture, not
        handled through a patchwork of third-party add-ons. When the platform identifies a better opportunity, say,
        Facebook leads are cheaper than Google that week, it reallocates budget automatically, no manual
        intervention required.</p>
      <p className="text-base text-white shadow-text pt-3">
        For lead management, LocaliQ’s Dash suite uses AI agents to engage with inbound leads from every channel,
        web, SMS, phone, and chat. These AI agents can qualify leads, answer questions, and even book appointments,
        ensuring no inquiry is missed. All communications and lead data are stored in a unified view, so your team
        can follow up quickly and see the full history for every contact. This is especially valuable for small
        teams who cannot afford to let leads slip through the cracks.</p>
      <p className="text-base text-white shadow-text pt-3">
        LocaliQ’s infrastructure is built for reliability and speed. Campaign changes, budget shifts, and new
        creative go live in real time, so you are never waiting for a batch process or overnight sync. This is
        critical when you are operating on a tight daily budget, every hour counts, and delays can mean wasted spend
        or missed opportunities.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s security and access controls keep your data safe while allowing for collaboration. You can
        assign access to staff or partners as needed, with clear audit trails on who changed what. For businesses in
        regulated industries or those handling sensitive customer data, this level of control is essential.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting and analytics are not afterthoughts in LocaliQ, they are foundational. The system provides
        on-demand, unified reporting for every campaign, channel, and lead source. You can drill down to see which
        messages, keywords, or creative are driving results, and use these insights to refine future campaigns. This
        is not just a dashboard for show: it is the tool that lets you prove which part of your ad spend is working
        and which needs to be cut.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Open API for integration with CRMs, call tracking, and other business systems.</li>
        <li>Unified dashboard for all campaign, lead, and performance data.</li>
        <li>AI-powered campaign optimization and cross-channel budget management.</li>
        <li>Real-time data flows and campaign updates, no overnight syncs.</li>
        <li>Built-in security and permission controls for safe, auditable access.</li>
        <li>All communications and lead interactions stored in a single, searchable view.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        LocaliQ’s platform is built to be the nerve center for all your digital advertising and lead management, not
        just another reporting add-on. For a small business in West Palm Beach, Broward, or Miami-Dade, it means you
        can run sophisticated, AI-driven campaigns without the complexity or cost of enterprise tools. The
        architecture is designed to plug into your existing stack, unify your data, and let every marketing dollar
        go further.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-powers-localiqs-platform-and-how-it-connects-to-your-marketing-stack" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What powers LocaliQ’s platform and how it connects to your marketing stack
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
              <h2 id="what-powers-localiqs-platform-and-how-it-connects-to-your-marketing-stack-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What powers LocaliQ’s platform and how it connects to your marketing stack
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
