import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Anyword’s platform is built for businesses that need to move fast, stay lean, and connect their marketing
        tools without IT headaches. Its architecture is cloud-based and modular, designed to plug into the systems
        small teams already use, so you can centralize your copy, campaign data, and performance insights in one
        place.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core of Anyword is its AI copy engine, which sits at the center of the platform. This engine draws on a
        vast, continually updated database of real ad performance across channels like Google, Facebook, LinkedIn,
        and X (Twitter). It uses this data to benchmark your copy and generate Predictive Performance Scores, so
        every message is scored against what actually works in your industry and market. This architecture means the
        tool is always learning and adapting as new data comes in.</p>
      <p className="text-base text-white shadow-text pt-3">
        Anyword’s integration framework is built to support real-world marketing workflows. Out of the box, it
        connects with major platforms like Google Ads for campaign management, Microsoft Dynamics 365 Sales for <GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink> data,
        and collaboration tools such as Microsoft Word and Google Drive (<a id={`tools-marketing-budget-ad-copy-message-validation-anyword-architecture-source-anyword-com${idSuffix}`} href="https://www.anyword.com/integrations" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Anyword</a>,
        as of Oct 19, 2026). These integrations let you push approved copy straight to your ad accounts, sync
        campaign messaging with your CRM, and store or edit assets in the cloud without manual copy-paste work.</p>
      <p className="text-base text-white shadow-text pt-3">
        For ad campaigns, the Google Ads and X Ads integrations are especially important for small teams. You can
        link your accounts and manage creative directly from the Anyword interface, ensuring that every headline and
        description is not only optimized but also formatted to the requirements of each channel. This eliminates
        formatting errors and reduces the risk of running non-compliant ads that get rejected or under-deliver.</p>
      <p className="text-base text-white shadow-text pt-3">
        Collaboration features are built into the architecture as well. With Google Drive and Microsoft Word
        integrations, teams can co-edit copy, store drafts, and maintain a single source of truth for all creative
        assets. This is critical for businesses where one person might be handling multiple roles, marketing, sales,
        and operations, because it keeps everyone working from the same set of approved messages.</p>
      <p className="text-base text-white shadow-text pt-3">
        Anyword’s persona and audience modules allow you to create, store, and reuse customer profiles. You can
        define personas by demographics, pain points, and purchase motivations, then train the AI to generate or
        adapt copy for each segment. This structure makes it easy to launch campaigns that speak directly to local
        audiences in Miami-Dade, Broward, and West Palm Beach, without having to rebuild targeting logic from
        scratch for every new campaign.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and compliance are addressed at the platform level. Anyword offers enterprise-grade security,
        including private language models, single sign-on, and compliance with standards like SOC 2 and ISO27001.
        For small businesses, this means you can trust that your data and customer information are protected, even
        if you do not have a dedicated IT team.</p>
      <p className="text-base text-white shadow-text pt-3">
        The performance analytics layer sits on top of the copy engine and integrations. Every copy variation,
        whether an ad, email, or landing page, is tracked and scored. The system provides real-time dashboards and
        demographic insights, including age and gender breakdowns, so you can see which messages are resonating with
        your audience before you spend your budget. If you want to run more advanced tests, Anyword’s architecture
        allows you to benchmark new copy against your own historical campaigns, not just industry averages.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation is another key aspect. The platform’s Continuous Optimization feature (available on some tiers)
        enables you to run multiple variations of landing page or ad copy live, with the system automatically
        showing the best-performing version to each audience segment. This is managed through a simple code snippet
        you add to your site, and from there the AI handles the heavy lifting, no manual switching or monitoring
        required.</p>
      <p className="text-base text-white shadow-text pt-3">
        All data generated by the platform, copy drafts, predictive scores, demographic insights, and campaign
        benchmarks, can be exported or synced with your existing tools. This flexibility means you are not locked
        into a single workflow or forced to abandon your current systems. Instead, Anyword acts as a central hub,
        connecting your creative process with your ad accounts, CRM, and analytics tools, so you can manage
        everything from one place.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business in South Florida, this architecture solves the biggest pain points of micro-budget
        advertising: fragmented data, manual copy validation, and lack of campaign visibility. By connecting your ad
        channels, CRM, and collaboration tools, Anyword lets you focus on what matters, running campaigns that
        actually convert, while the platform manages the technical details in the background.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-anywords-architecture-supports-integrations-data-flow-and-campaign-control-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Anyword’s architecture supports integrations, data flow, and campaign control for small teams
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
              <h2 id="how-anywords-architecture-supports-integrations-data-flow-and-campaign-control-for-small-teams-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Anyword’s architecture supports integrations, data flow, and campaign control for small teams
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
