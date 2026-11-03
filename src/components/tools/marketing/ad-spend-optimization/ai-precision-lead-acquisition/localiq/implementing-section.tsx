export default function ImplementingSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Going live with LocaliQ means connecting your ad accounts, mapping your lead tracking, and launching automated
        optimization, without a long or risky transition. The process is shorter for most small businesses because
        LocaliQ comes with pre-built connectors, a unified dashboard, and templated campaign setup. Geek @ Your Spot
        handles the configuration, integration, and data mapping so you do not have to rebuild your marketing stack or
        pause your ad campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is connecting your existing accounts, Google Ads, Meta, and any supported CRM system such as
        HubSpot, Liine, ServiceTitan, or Yardi, directly into LocaliQ. LocaliQ&rsquo;s open API and built-in
        integrations allow Geek @ Your Spot to pull in your historical campaign data, set up call and lead tracking,
        and unify reporting across platforms. This avoids the common pain point of fragmented data, where you have to
        guess which ad platform is driving real leads. With LocaliQ, you see every call, form fill, and web chat in
        one place, tied to the originating campaign.</p>
      <p className="text-base text-white shadow-text pt-3">
        Templated setup is what shortens the timeline for most small businesses. LocaliQ provides campaign blueprints
        for common objectives, lead generation, local awareness, or online sales, so Geek @ Your Spot can launch your
        first optimized campaigns in days, not weeks. These templates come with pre-configured bidding strategies,
        budget controls, and targeting parameters designed for small budgets. For example, when you want to run a
        local service campaign, LocaliQ&rsquo;s smart-radius targeting and geofencing tools are ready to lock down your
        service area to just the neighborhoods you want, without manual mapping or guesswork.</p>
      <p className="text-base text-white shadow-text pt-3">
        Phased rollout is another way Geek @ Your Spot keeps go-live safe and fast. Instead of moving every campaign at
        once, the team starts with your highest-impact channels, often Google Search and Facebook Lead Ads, so you see
        results and reporting improvements right away. As soon as the first campaigns are running and tracked in
        LocaliQ, your team can review live dashboards and verify that leads are being captured, tracked, and attributed
        correctly. Only then does the rollout expand to additional channels or more complex campaign types like display
        or retargeting.</p>
      <p className="text-base text-white shadow-text pt-3">
        Throughout the process, Geek @ Your Spot manages the technical details. That includes placing LocaliQ&rsquo;s
        tracking code on your website, configuring call tracking numbers, and mapping lead forms so every inquiry is
        captured. Because LocaliQ combines reporting, CRM, and call tracking into one platform, there is no need for
        you to juggle logins or export data from multiple tools. This consolidation is what allows small teams to
        manage digital ads at scale without adding staff or hiring a full-time marketing manager.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you already use a supported CRM or have Google Tag Manager set up, the integration can be as simple as
        entering credentials and mapping fields. For businesses that have never tracked calls or web leads before, Geek
        @ Your Spot walks through the setup step by step, ensuring no lead source is missed. The goal is to avoid the
        gaps that lead to wasted ad spend, such as missing attribution for phone calls or losing track of web leads
        after hours.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Connect ad accounts and CRM systems to LocaliQ through pre-built integrations.</li>
        <li>Import historical campaign and lead data for unified reporting.</li>
        <li>Apply templated campaign blueprints tailored for your business goals.</li>
        <li>Configure tracking for calls, web forms, and chats in a single dashboard.</li>
        <li>Roll out in phases, starting with high-impact channels and expanding after validation.</li>
        <li>Map all lead sources so every inquiry is tracked and attributed to the right campaign.</li>
        <li>Manage the go-live with zero downtime, your ads keep running throughout the transition.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        A typical go-live for a small business in South Florida can be completed in under two weeks when the required
        systems are already in place. Businesses that need more data cleanup or custom integrations may take longer,
        but the process is always structured to minimize disruption. Geek @ Your Spot&rsquo;s approach is to keep
        things simple, use what you already have, and avoid unnecessary complexity. The result is a faster path to
        seeing which ads work, cutting wasted spend, and getting more out of every dollar you put into digital
        marketing.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-localiq-goes-live-in-your-existing-environment-and-what-shortens-the-timeline" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How LocaliQ goes live in your existing environment and what shortens the timeline
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-localiq-goes-live-in-your-existing-environment-and-what-shortens-the-timeline-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How LocaliQ goes live in your existing environment and what shortens the timeline
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
