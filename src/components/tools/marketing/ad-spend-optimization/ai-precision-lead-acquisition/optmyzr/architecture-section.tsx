import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr is built as a cross-platform automation and reporting layer that connects directly to your ad accounts
        through official APIs. It supports Google Ads, Microsoft Ads, Meta (Facebook and Instagram), LinkedIn, and
        Amazon Ads. This architecture means you can manage, monitor, and optimize campaigns across all these platforms
        from one interface, no more switching between dashboards or exporting data to spreadsheets. For a small business
        managing limited budgets across several channels, this is the difference between seeing the whole picture and
        missing what matters.</p>
      <p className="text-base text-white shadow-text pt-3">
        When you connect your accounts, Optmyzr pulls in live campaign data, spend, conversions, clicks, <GlossaryLink slug="impression-share" className="text-[#0B162A] hover:underline">impression
        share</GlossaryLink>, and more, using secure, read/write API integrations. It does not store your raw ad
        content or customer data outside what is needed for optimization and reporting. The platform builds a unified
        data model that normalizes metrics across platforms, so you can compare performance side by side and make
        decisions based on total spend, not just what Google or Facebook shows in isolation.</p>
      <p className="text-base text-white shadow-text pt-3">
        The system&rsquo;s architecture is modular. Each feature, Rule Engine, alerting, reporting, budget monitoring,
        sits as a service on top of the core data layer. This lets you use only what you need: if you want to start with
        reporting and add automation later, you can. The reporting engine pulls real-time data from all connected
        platforms into customizable dashboards and white-labeled reports. You can break down performance by campaign,
        ad set, ad, or creative type, and filter by time range, platform, or any KPI you track. For teams that need to
        show results to owners or clients, these reports can be scheduled and delivered automatically, with custom
        branding and commentary.</p>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr&rsquo;s integration with spreadsheets is a major advantage for small businesses with custom data
        sources. You can link Google Sheets containing inventory levels, profit margins, or weather data, and use this
        information to inform your rule logic. For example, if your inventory drops below a certain threshold, you can
        have Optmyzr pause ads for those products automatically. This kind of data-driven automation is usually out of
        reach for teams without a developer, but Optmyzr makes it accessible through its no-code interface.</p>
      <p className="text-base text-white shadow-text pt-3">
        For social ads, Optmyzr connects to Meta and LinkedIn through their APIs, letting you manage campaigns, build
        rules, and generate unified reports across both platforms. You can analyze cost distribution, compare creative
        types, and spot trends without jumping between native UIs. The system also supports scheduling rules to run on
        custom intervals, even outside business hours, so your accounts stay optimized during weekends or holidays
        without manual checks.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform&rsquo;s architecture is designed for both transparency and control. Every rule, alert, and report
        is logged, and you can review the full history of changes for compliance or troubleshooting. For agencies or
        businesses managing multiple brands, the All Accounts Dashboard gives you a portfolio view, one place to monitor
        Google, Microsoft, Meta, LinkedIn, and Amazon together. This is especially useful for teams with lean staff who
        cannot afford to miss a budget spike or a broken ad across dozens of accounts.</p>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr&rsquo;s cross-platform scope sets it apart from tools that only handle Google or Facebook. The
        automation and reporting run across every supported platform, so you can spot issues, like a sudden spend spike
        or a drop in conversions, wherever they happen, and take action before they affect your bottom line. For
        example, if your Meta campaign&rsquo;s cost-per-lead jumps overnight, you can have Optmyzr flag the change and
        pause the ad, while still monitoring your Google and Amazon campaigns from the same place.</p>
      <p className="text-base text-white shadow-text pt-3">
        The architecture also supports extensions and integrations with other software, such as Slack, Microsoft Teams,
        and Zapier. Alerts and notifications can be routed to your team&rsquo;s preferred channels, so you stay updated
        without logging into Optmyzr every day. For teams that need to automate workflows beyond ad management, like
        sending alerts to sales or finance, or syncing optimization logs to other business systems, these integrations
        make it possible without extra development.</p>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr&rsquo;s design is not a one-size-fits-all solution. It is built to be flexible, letting you decide how
        much automation to use, how often to run checks, and what data sources to connect. For small businesses in
        South Florida, this means you can start with a single account and scale up to multi-brand, multi-platform
        management as you grow, without replacing your tech stack or re-training your team.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-optmyzr-connects-to-what-it-holds-and-how-its-architecture-supports-multi-platform-optimization" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Optmyzr connects to, what it holds, and how its architecture supports multi-platform optimization
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
              <h2 id="what-optmyzr-connects-to-what-it-holds-and-how-its-architecture-supports-multi-platform-optimization-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Optmyzr connects to, what it holds, and how its architecture supports multi-platform optimization
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
