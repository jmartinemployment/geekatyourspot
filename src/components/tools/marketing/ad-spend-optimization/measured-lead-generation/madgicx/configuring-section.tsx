import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Configuring Madgicx for Measured Lead Generation is about setting up <GlossaryLink slug="automation-rules" className="text-[#0B162A] hover:underline">automation
        rules</GlossaryLink>, audience targeting logic, and creative workflows that match your sales funnel and
        budget. Madgicx does not require custom coding or scripting; instead, it relies on a structured
        configuration process that adapts to your business’s data and campaign goals. Geek @ Your Spot’s role is to
        map your funnel, connect your data sources, and tune Madgicx’s automation to your unique needs, so the
        platform works for your environment, not just in theory.</p>
      <p className="text-base text-white shadow-text pt-3">
        Madgicx’s automation logic starts with how it manages your ad funnel. The platform maps out your campaigns
        into clear stages, prospecting, re-engagement, retargeting, and retention, using its Audience Launcher and
        Audience Studio tools. These modules let you select from over a hundred pre-built audiences or build custom
        ones by mixing interests and lookalikes. This approach ensures that your ad spend is targeted by funnel
        stage, not wasted on generic, one-size-fits-all blasts. With Madgicx, you can automate audience creation
        based on your best customers’ changing characteristics, which means your targeting updates itself as your
        business and market shift.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation rules in Madgicx are set up to handle budget allocation, creative rotation, and performance
        monitoring. The AI Marketer module can optimize budget allocation in real time, moving spend away from
        underperforming segments and toward high-performing ones. This is not a static rule set; Madgicx’s
        Autonomous Budget Optimizer can run 24/7, scaling winning campaigns and cutting spend on losing ads without
        manual intervention. For a small business, this means you avoid the common trap of burning through budget on
        audiences or creatives that have stopped converting. Madgicx’s Stop-Loss and Surf Automation Tactics are
        designed to protect your investment by pausing or scaling ad sets automatically based on how they perform
        against your defined <GlossaryLink slug="kpi" className="text-[#0B162A] hover:underline">KPIs</GlossaryLink>.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative management is another area where Madgicx’s automation stands out. The AI Ad Generator can produce
        dozens of ad variations, images, videos, and copy, using a single product image or past winning ads. This
        bulk creation process is essential for keeping up with ad platforms’ demand for fresh content and for
        preventing ad fatigue. The platform can rotate creatives based on audience preferences, test new variants,
        and prioritize what gets shown based on real-time performance data. This keeps your campaigns from stalling
        when older ads lose their effectiveness.</p>
      <p className="text-base text-white shadow-text pt-3">
        Madgicx’s rules also extend to audience exclusions and overlap management. The platform can automatically
        exclude past buyers from top-of-funnel campaigns, shielding your budget from being spent on people who
        already converted. It monitors for audience overlaps, so you do not end up bidding against yourself in the
        auction. This is a common source of wasted spend in manual setups and something Madgicx’s automation is
        designed to eliminate.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting and analytics are built into the configuration process. Madgicx’s One-Click Report and client
        dashboards provide unified, real-time data across platforms like Meta, Google, Shopify, and Klaviyo. These
        dashboards update automatically, so you always see the latest performance data without manual pulls or
        spreadsheet work. For agencies or teams managing multiple accounts, Madgicx supports cross-client
        performance analysis and benchmarking, which is valuable for comparing what works and identifying areas for
        improvement.</p>
      <p className="text-base text-white shadow-text pt-3">
        As for extension, Madgicx offers an integration with Google Sheets, allowing you to create metrics from
        custom spreadsheet data. However, the platform itself is not built for custom scripting or SDK-driven
        extensions. Its automation is configuration-based, with rules and workflows set through its own interface.
        This makes it accessible to small teams without in-house developers, but it does mean that highly custom
        logic, like unique attribution models or non-standard data flows, will need to fit within Madgicx’s existing
        capabilities.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real value from Madgicx comes from how Geek @ Your Spot configures these rules and automations for your
        specific business. This is not a plug-and-play install. Geek @ Your Spot audits your current campaigns, maps
        your funnel, and sets up Madgicx’s automation logic so that every dollar you spend is tracked, optimized,
        and reported on. They handle the data mapping, connect your CRM and ad platforms, and ensure that
        exclusions, audience definitions, and creative workflows are tuned to your goals. For a small business in
        South Florida, this means you get the benefits of a sophisticated automation engine without the need to hire
        data scientists or build custom scripts.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, configuring Madgicx is about setting up the right automation rules, audience logic, and creative
        workflows to match your measured lead generation goals. Geek @ Your Spot’s job is to make sure those rules
        work for your business, not just in theory, but in the day-to-day reality of your campaigns. The platform’s
        automation is deep, but it is configuration-based, not code-driven. This is what makes Madgicx suitable for
        small businesses that want advanced automation without the complexity of custom development.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="configuring-madgicx" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring Madgicx
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
              <h2 id="configuring-madgicx-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring Madgicx
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
