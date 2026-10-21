import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Factors is not just a dashboard on top of your website traffic. Its architecture is built to connect,
        unify, and act on signals from every major system in your marketing and sales stack. For a small
        business, this means no more data silos or manual exports, Factors becomes the central nervous system
        for all things lead enrichment and predictive scoring.</p>
      <p className="text-base text-white shadow-text pt-3">
        At its core, Factors ingests data from multiple sources. Website traffic is captured through a script
        you install, which sends every visit, page view, and event to the platform. From there, Factors
        connects to your&nbsp;CRM&nbsp;(like Salesforce or
        HubSpot),&nbsp;<GlossaryLink slug="marketing-automation" className="text-[#0B162A] hover:underline">marketing
        automation</GlossaryLink>&nbsp;systems, ad platforms (LinkedIn, Google Ads, Meta), and
        third-party&nbsp;<GlossaryLink slug="intent-data" className="text-[#0B162A] hover:underline">intent data</GlossaryLink>&nbsp;sources (G2,
        Bombora, Demandbase). Each integration is designed to pull in both account-level and contact-level
        details, so every signal is mapped to a named company and, where possible, to real people.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s&nbsp;<GlossaryLink slug="data-model" className="text-[#0B162A] hover:underline">data model</GlossaryLink>&nbsp;is built around the
        concept of an account timeline. Every interaction, whether it is an ad impression, a content download,
        a website visit, or a sales email, is stitched together into a single, chronological feed for each
        company. This timeline is not just a list of events: it is structured so that you can see how an
        account moves from early research, to technical validation, to active buying. The architecture
        supports multi-touch attribution, so you can see which campaigns, ads, and content pieces actually
        moved the needle on pipeline and revenue.</p>
      <p className="text-base text-white shadow-text pt-3">
        Factors’ enrichment engine ties into firmographic and contact databases in real time. When a new
        anonymous visitor is detected, the platform runs a reverse IP lookup and then enriches the account
        with details from sources like Apollo, ZoomInfo, and its own proprietary datasets. For contact-level
        enrichment, it can pull names, job titles, emails, and LinkedIn URLs, so your team always has the most
        up-to-date information on who is engaging.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integrations are not limited to data ingestion. Factors pushes intelligence back out to where your
        team works. Real-time alerts, segment digests, and account updates go straight to Slack or Microsoft
        Teams. The platform also syncs high-intent audiences directly to LinkedIn and Google Ads, so your ad
        spend targets only the accounts that are actually showing buying signals. For reporting and analytics,
        Factors provides customizable dashboards that track engagement, pipeline growth, and revenue by
        segment, campaign, and channel.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses with more advanced needs, Factors supports dynamic audience management. This means
        audiences update automatically as engagement changes, no more manual CSV uploads or static lists. The
        architecture is built for persistent relevance: as soon as a new account shows intent, it can be
        routed to sales, added to a retargeting campaign, or flagged for a specific follow-up sequence.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and data privacy are handled through strict access controls and integration with your
        existing authentication systems. The platform is designed to work with both small and large teams,
        scaling as your data and user base grow. All of this sits behind a single interface, so your team does
        not need to learn a dozen tools or manage complex workflows, Factors ties it all together, making your
        lead pipeline visible, actionable, and always up to date.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-sits-behind-the-scenes-factors-architecture-data-connections-and-integrations" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Sits Behind the Scenes: Factors’ Architecture, Data Connections, and Integrations
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
              <h2 id="what-sits-behind-the-scenes-factors-architecture-data-connections-and-integrations-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Sits Behind the Scenes: Factors’ Architecture, Data Connections, and Integrations
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
