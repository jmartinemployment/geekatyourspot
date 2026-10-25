import Link from "next/link";

export default function ComparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr stands apart from the usual ad platform tools and generic automation scripts because it lets small
        businesses automate and control paid lead generation without needing in-house coding or deep technical
        expertise. It covers what most small teams try to patch together from Google Ads, Microsoft Ads, Meta,
        LinkedIn, and Amazon Ads, but does it from a single automation hub.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most small businesses in Miami-Dade, Broward and West Palm Beach counties reach for built-in ad platform
        automation first. These tools promise easy setup, but they are designed for the average case and favor large
        accounts with high volumes of conversions. For a business spending $500 to $1,500 a month, the built-in
        rules and “smart” bidding options rarely deliver stable cost-per-lead or reliable scaling. The reason is
        simple: those systems need hundreds of conversions a month to learn, and most small businesses never reach
        that threshold. Instead, the algorithms make guesses, causing cost-per-lead to spike and budgets to blow out
        without warning. Manual campaign switches and spreadsheet tracking are a dead end at this stage, there is no
        time or margin to keep up with daily changes.</p>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr’s core difference is its Rule Engine and automation layering, which let a small team set
        business-specific rules and let them run on a schedule, across every supported ad channel, without touching
        the platform interfaces. Unlike Google’s own rules or scripts, Optmyzr does not require any coding: every
        rule is built in plain English, and every change is previewed before it goes live. This means a business
        owner or marketing manager can set up rules to pause keywords, adjust bids, or shift budgets based on their
        own cost and conversion thresholds, rather than relying on what the ad platform thinks is “best.”</p>
      <p className="text-base text-white shadow-text pt-3">
        The other common approach is to hire an agency or freelance PPC manager to write and maintain custom
        scripts. This can work for larger budgets, but it brings its own risks: scripts break when the ad platform
        changes, and every manual script is a single point of failure if the author leaves or the business changes
        direction. Optmyzr removes this risk by maintaining the automation layer itself, updating integrations as
        platforms change, and giving you a no-code way to adjust logic as your business evolves. There is no need to
        learn JavaScript or keep up with every API update.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses that try to manage lead generation with a patchwork of tools, spreadsheet exports, <Link id={`tools-marketing-measured-lead-generation-optmyzr-comparing-zapier${idSuffix}`} href="/tools/marketing/zapier" className="text-[#0B162A] hover:underline">Zapier</Link> automations,
        periodic manual audits, Optmyzr consolidates all of this. It connects directly to the ad platforms through
        their APIs, pulls live data, and applies rules or sends alerts in real time. For example, if a landing page
        URL fails or a keyword’s cost-per-acquisition crosses your set threshold, Optmyzr can pause the ad set
        automatically, notify your team, and keep a log of what was changed and why. This level of control is not
        possible with the built-in automation in Google Ads or Meta’s native tools.</p>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr also addresses the creative bottleneck by letting you automate the removal of ad variations that
        underperform, and by surfacing new keyword or creative opportunities from search term data. While it does
        not generate creative assets itself, it ensures that your budget is not wasted on ads that are no longer
        converting, and that you are alerted to trends or drops before they become expensive problems.</p>
      <p className="text-base text-white shadow-text pt-3">
        The Rule Engine can be applied across accounts and platforms, so if you run both Meta and LinkedIn
        campaigns, you set up your logic once and deploy it everywhere. Rules can be duplicated, scheduled, and
        previewed, giving you full control over automation without the risk of a script running wild. You can start
        with pre-built templates for common scenarios, like pausing keywords with no conversions after a set spend,
        and customize them for your business’s actual numbers.</p>
      <p className="text-base text-white shadow-text pt-3">
        Where other automation tools focus on one channel or require you to switch between dashboards, Optmyzr’s
        cross-platform reporting and monitoring means you get a single view of your spend, results, and alerts. This
        is especially important for small teams who cannot afford to miss a budget cap or a sudden drop in lead
        quality. The platform’s monitoring extends to landing page health, so you do not lose money sending traffic
        to broken or out-of-stock pages, a gap that most ad platforms leave for the user to catch.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, Optmyzr sits between the basic, limited automations of ad platforms and the high-maintenance,
        code-heavy custom scripts that agencies or power users might build. It is purpose-built for the small
        business trying to scale lead generation with a mid-tier budget, offering automation, monitoring, and
        cross-channel control without the complexity or risk of DIY scripting. For South Florida businesses, it
        means fewer surprises, less wasted spend, and a path to predictable growth without hiring a full-time ad
        specialist or developer.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-optmyzr-compares-to-other-options-for-small-business-lead-generation-automation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Optmyzr compares to other options for small-business lead generation automation
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-optmyzr-compares-to-other-options-for-small-business-lead-generation-automation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Optmyzr compares to other options for small-business lead generation automation
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
