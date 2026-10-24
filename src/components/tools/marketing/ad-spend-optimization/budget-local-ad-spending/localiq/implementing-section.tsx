export default function ImplementingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Going live with LocaliQ for Budget Ad Copy &amp; Message Validation is a structured rollout: connect your
        existing ad accounts, set up your lead tracking, and let the platform’s automation take over daily
        optimization. Most small businesses in South Florida can move from first connection to live campaigns in
        days, not weeks, because LocaliQ comes with pre-built connectors and a templated setup process that avoids
        custom engineering and downtime.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is connecting your existing accounts, Google Ads, Meta, or other social platforms, to
        LocaliQ. The platform’s open API and single code tracking mean you do not need to rebuild your campaigns
        from scratch or rip out your current lead forms. LocaliQ pulls in your existing data and structure, mapping
        ads, audiences, and conversion events directly into its dashboard. This shortens the go-live window and
        keeps your campaigns running while the system learns what works.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next, Geek @ Your Spot configures LocaliQ’s optimization engine for your business goals. This is not a
        generic onboarding. LocaliQ’s real-time optimization starts by ingesting your campaign data, keywords, copy,
        images, and audience segments, then begins automated testing and budget shifts. Instead of waiting for a
        month’s worth of manual A/B tests, the platform continuously reallocates spend toward the best-performing
        combinations. For a business with a $500 monthly budget, this means you see the impact of AI-driven changes
        in the first week, not after a quarter of missed results (<a id={`tools-marketing-budget-ad-copy-message-validation-localiq-implementing-source-localiq-com${idSuffix}`} href="https://localiq.com/blog/local-ppc/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">LocaliQ</a>,
        as of Oct 23, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        A key part of the rollout is setting up unified lead tracking. LocaliQ uses a single tracking code to pull
        in phone calls, web forms, and chat leads from every channel. This avoids the common failure where leads go
        missing because they are scattered across unconnected systems. Geek @ Your Spot maps each lead source to
        your marketing dashboard, so you see at a glance which ad, keyword, or campaign drove every contact. This is
        vital for small teams who cannot afford to lose a single qualified lead to a spreadsheet error or tracking
        gap.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once tracking is live, LocaliQ’s reporting and dashboard come online. All campaign performance, spend, and
        lead data is visible in one place. This matters most for small businesses who have struggled to trace which
        ad spend actually delivers real customers. The dashboard is not just a reporting tool, it is the control
        panel for ongoing optimization. LocaliQ’s AI uses this live data to keep shifting budget and creative toward
        what works, so you do not have to micromanage campaigns every day.</p>
      <p className="text-base text-white shadow-text pt-3">
        The go-live process is fast because LocaliQ’s system is built for small business constraints. There is no
        need to hire an agency or dedicate a staff member to campaign management. Geek @ Your Spot handles the setup
        and ensures that LocaliQ’s automation is pointed at your real business goals: local leads, booked
        appointments, and actual sales, not vanity metrics. The platform’s templated rollout and API integrations
        mean you avoid the delays and errors that come with piecemeal tools or manual data entry.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses already running campaigns, Geek @ Your Spot phases the rollout to avoid downtime. Existing
        ads are imported and mapped, then LocaliQ’s optimization is activated in parallel. There is no need for a
        blackout period or a risky cutover. The platform’s automation begins by running in a learning mode,
        monitoring performance and making small adjustments, before fully taking over budget and copy decisions.
        This phased approach means you do not lose momentum or leads during the transition.</p>
      <p className="text-base text-white shadow-text pt-3">
        A real example from LocaliQ’s case studies shows this approach in action: WellnessMD saw a jump in lead
        quality and conversion calls after going live with LocaliQ’s Social Ads, with no disruption to their
        existing marketing flow. For small businesses in West Palm Beach, Broward, and Miami-Dade, this is the
        difference between a risky, manual switch and a managed, stepwise upgrade that pays off in the first month.</p>
      <p className="text-base text-white shadow-text pt-3">
        The final step is training and handoff. Geek @ Your Spot walks your team through the dashboard, reporting,
        and any manual review steps that remain. Most of the manual work, adjusting bids, rotating copy, tracking
        leads, is now handled by LocaliQ’s engine. Your team focuses on reviewing results, approving creative, and
        closing leads, rather than chasing down data or troubleshooting campaign errors.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, going live with LocaliQ is a fast, low-risk process for small businesses. Pre-built
        integrations, a templated rollout, and unified tracking mean you can start seeing results in days. Geek @
        Your Spot closes the technical gap, so your limited budget is protected from the usual pitfalls of manual
        campaign management and fragmented reporting. The whole process is designed to keep your business moving, no
        downtime, no lost leads, and no wasted spend.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-going-live-with-localiq-looks-like-for-a-small-business-and-what-speeds-it-up" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What going live with LocaliQ looks like for a small business and what speeds it up
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
              <h2 id="what-going-live-with-localiq-looks-like-for-a-small-business-and-what-speeds-it-up-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What going live with LocaliQ looks like for a small business and what speeds it up
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
