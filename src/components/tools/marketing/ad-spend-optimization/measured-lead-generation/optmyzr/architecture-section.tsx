import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr is built as a cross-platform automation hub that connects directly to Google Ads, Microsoft Ads,
        Meta (Facebook and Instagram), LinkedIn, and Amazon Ads through their APIs. This architecture lets you
        manage, monitor, and automate campaigns from a single dashboard, even if your accounts span several
        different ad networks. No manual data exports or juggling logins, Optmyzr pulls real-time performance data,
        applies your rules, and pushes changes back to each platform automatically.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s architecture centers on its Rule Engine and reporting modules. When you connect your ad
        accounts, Optmyzr ingests data on keywords, budgets, conversions, and other <GlossaryLink slug="kpi" className="text-[#0B162A] hover:underline">KPIs</GlossaryLink>,
        storing it in a structured way that supports both historical analysis and real-time automation. You can
        import custom business data, such as inventory levels, profit margins, or seasonal trends, by linking Google
        Sheets or uploading spreadsheets. This allows you to build rules that react not just to ad metrics, but to
        actual business events, like pausing ads for out-of-stock products or adjusting bids based on margin.</p>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr’s integration with Google Sheets is especially useful for small businesses whose customer data may
        be scattered across spreadsheets or simple CRMs. By linking these sheets, you can enrich your automation
        logic with call conversion data, internal sales numbers, or any other business inputs you track. This
        supports advanced use cases like bid-by-weather, pausing ads for locations affected by storms, or adjusting
        budgets in real time based on sales velocity, all without writing code.</p>
      <p className="text-base text-white shadow-text pt-3">
        The system is designed for transparency and auditability. Every automation run, rule application, and change
        is logged. You can review what was changed, why, and by which rule, so nothing is hidden or lost. If you
        want to preview the impact of a rule before it goes live, Optmyzr’s simulation layer shows you exactly what
        would happen, letting you approve or adjust changes before they affect your live campaigns. For teams
        managing multiple brands or locations, the All Accounts Dashboard provides a unified view of performance and
        alerts across every connected platform.</p>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr’s reporting engine pulls real-time data from all connected ad platforms and assembles it into
        unified, customizable reports. You can build white-labeled reports with your chosen KPIs, schedule them for
        delivery by email, and use the in-built AI assistant to help create or summarize reports. This means you
        always have current, cross-channel performance data at your fingertips, without manual effort or data
        wrangling.</p>
      <p className="text-base text-white shadow-text pt-3">
        For social campaigns, Optmyzr supports managing Meta and LinkedIn ads side by side, letting you apply
        automation rules and reporting across both platforms from one interface. You can build rules to pause
        underperforming ads, scale budgets on top performers, or adjust targeting logic, and have those rules run
        daily, weekly, or on demand. The system keeps your reporting and monitoring in sync, so you do not have to
        switch between native ad managers to keep campaigns on track.</p>
      <p className="text-base text-white shadow-text pt-3">
        When it comes to landing page quality, Optmyzr’s enhanced scripts check URLs for 404 errors, out-of-stock
        messages, or other problems (<a id={`tools-marketing-measured-lead-generation-optmyzr-architecture-source-optmyzr-com${idSuffix}`} href="https://www.optmyzr.com/blog/are-your-adwords-ads-losing-money-on-bad-landing-pages/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Optmyzr</a>,
        as of Oct 24, 2026). If a landing page breaks, the system can pause affected ads and alert your team,
        preventing wasted spend and protecting your <GlossaryLink slug="conversion-rate" className="text-[#0B162A] hover:underline">conversion
        rates</GlossaryLink>. You can set these checks to run for specific campaigns or across your whole account,
        and customize them to look for the error messages that matter for your business.</p>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr’s architecture is designed to scale from small teams to agencies managing many clients. You can
        duplicate rules and strategies across accounts, automate bulk changes, and set up monitoring that covers
        every campaign, ad set, or keyword you manage. The system’s flexibility means you can automate as much or as
        little as you want, starting with alerts and reports, then layering in more automation as your confidence
        grows. Every rule, report, and integration is built to keep your data connected, your campaigns aligned, and
        your team focused on strategy instead of firefighting.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-optmyzrs-platform-connects-stores-and-syncs-data-across-ad-channels" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Optmyzr’s Platform Connects, Stores, and Syncs Data Across Ad Channels
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
              <h2 id="how-optmyzrs-platform-connects-stores-and-syncs-data-across-ad-channels-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Optmyzr’s Platform Connects, Stores, and Syncs Data Across Ad Channels
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
