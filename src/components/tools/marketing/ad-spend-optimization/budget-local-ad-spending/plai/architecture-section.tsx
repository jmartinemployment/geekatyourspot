export default function ArchitectureSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Plai’s platform is built as a unified command center for ad management, creative production, and analytics,
        designed to plug directly into the main ad channels and business tools a small team already uses. The
        architecture is organized around workspaces, integrations, and automation layers that keep every campaign,
        client, and performance metric in one place, without the sprawl of disconnected dashboards.</p>
      <p className="text-base text-white shadow-text pt-3">
        Each Plai workspace holds all brand-specific data: campaign context, audience lists, creative assets,
        analytics, and permissions. This structure keeps every business or client siloed, so there’s no risk of data
        overlap or cross-account confusion. For a business running several brands or locations, each gets its own
        dedicated workspace, with full separation of campaigns, spend, and reporting. This is especially important
        for service providers or agencies managing multiple clients, but it also helps a small business keep its own
        campaigns organized by product line or market segment.</p>
      <p className="text-base text-white shadow-text pt-3">
        Plai integrates directly with major ad platforms, Google, Meta (Facebook and Instagram), TikTok, LinkedIn,
        and YouTube, so users can launch, monitor, and optimize campaigns across all these channels from a single
        dashboard. The platform supports importing existing campaigns, so a business does not have to start from
        scratch or lose historical data. It also allows saving high-performing ads as templates, making it easy to
        reuse proven creative and targeting setups in new campaigns or accounts.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the billing and automation side, Plai connects with Stripe for payments and GoHighLevel for broader
        client automation. This means businesses can manage ad spend, subscriptions, and revenue tracking without
        leaving the platform. Automated billing and revenue collection are built in, so there’s no need for manual
        invoicing or chasing payments, especially useful for agencies or resellers using Plai as a white-label
        solution.</p>
      <p className="text-base text-white shadow-text pt-3">
        Plai’s data layer centralizes performance tracking and analytics. All campaign results, clicks, conversions,
        cost, creative tests, are visible in real time, with cross-platform analytics that remove the need to pull
        separate reports from each ad manager. The dashboard is designed for clarity, showing only what matters:
        which messages are converting, which audiences are profitable, and where budget is being wasted. This
        visibility makes it possible to spot trends, catch underperforming ads, and shift strategy quickly, without
        digging through spreadsheets or logging into multiple tools.</p>
      <p className="text-base text-white shadow-text pt-3">
        For creative production, Plai’s architecture includes an AI-powered creative hub. Users can generate ad
        copy, build visuals, and even create UGC-style video ads with AI avatars, all within the same platform. The
        drag-and-drop design studio lets users work from templates or start from scratch, and the system organizes
        creative assets for easy reuse or adaptation. This is especially valuable for teams that need to produce
        fresh content regularly but do not have a full-time designer or video editor.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation is layered throughout Plai’s architecture. Optimization folders group campaigns for automatic
        budget shifts, ensuring money moves to the best-performing ads across platforms. AI-driven rules adjust
        bids, refresh creative, and narrow targeting based on live performance data. The platform’s machine-learning
        engine learns from each campaign, so recommendations get smarter over time and manual tweaks become less
        necessary.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and control are handled at the workspace level. Permissions can be set for each team member or
        client, so only the right people can view or edit campaigns. For businesses offering Plai as a branded
        solution, the white-label feature lets them customize everything from the domain and logo to the client
        portal and reporting interface. Plai runs in the background, powering the infrastructure while the
        business’s own brand stays front and center.</p>
      <p className="text-base text-white shadow-text pt-3">
        Plai’s architecture is designed for scale, but it is just as effective for a single-location business with a
        $500 ad budget as for a multi-location agency (<a id={`tools-marketing-budget-ad-copy-message-validation-plai-architecture-source-plai-io${idSuffix}`} href="https://www.plai.io/features/saas-configurator" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Plai</a>,
        as of Oct 23, 2026). The platform holds everything needed for Budget Ad Copy &amp; Message Validation,
        campaigns, creative, spend, reporting, and automation, in one place, with integrations that fit the tools
        South Florida businesses already rely on. The result is less time lost to setup, fewer errors from manual
        work, and a marketing stack that grows as the business does, without extra complexity.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-plais-architecture-holds-and-how-it-connects-to-your-marketing-stack" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Plai’s Architecture Holds and How It Connects to Your Marketing Stack
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
              <h2 id="what-plais-architecture-holds-and-how-it-connects-to-your-marketing-stack-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Plai’s Architecture Holds and How It Connects to Your Marketing Stack
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
