import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr takes over the repetitive and error-prone parts of ad spend optimization by running its own automation
        engine on your ad accounts. Every rule, alert, and adjustment is defined by you or your team, not by a black-box
        algorithm. Optmyzr&rsquo;s Rule Engine applies these instructions on a schedule you set, checking live account
        data and acting the moment a condition is met, whether that means pausing a keyword that is burning budget,
        adjusting a campaign&rsquo;s bid to defend your search position, or flagging a broken landing page before it
        eats your spend.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the core is the Rule Engine, a system that lets you write custom logic for each platform and campaign. You do
        not need to code. Instead, you build rules through a visual interface, combining conditions (like spend
        thresholds or conversion rates) with actions (like pausing, raising bids, or sending an alert). Optmyzr then
        executes these rules in the background, on whatever cadence you choose, hourly, daily, weekly, or triggered by
        an event. For small businesses that lack in-house scripting expertise, this means you get the power of custom
        automation without hiring a developer or learning JavaScript.</p>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr&rsquo;s automation does not run wild. Every action it takes is either previewed for your approval or, if
        you choose, fully automated. You can start with notifications and manual review, then turn on auto-apply when
        you are confident in the rule&rsquo;s logic. This gives you a safety net: mistakes are caught before they cost
        you, and you always know why a change was made. The platform supports duplicating strategies across multiple
        accounts, so once you have a rule that works, you can roll it out to every brand or location you manage without
        rebuilding from scratch.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Pause keywords that cross a spend threshold without converting, labeling them for future review.</li>
        <li>Adjust bids up or down in real time to defend your ad&rsquo;s position when competitors spike their spend.</li>
        <li>Monitor destination URLs for 404 errors or out-of-stock products, pausing affected ads instantly (<a id={`tools-marketing-precision-lead-acquisition-optmyzr-how-it-works-source-landing-pages${idSuffix}`} href="https://www.optmyzr.com/blog/are-your-adwords-ads-losing-money-on-bad-landing-pages/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Optmyzr</a>, as of Oct 24, 2026).</li>
        <li>Audit search term reports and add negative keywords to block wasteful queries automatically.</li>
        <li>Scale budgets up or down for seasonal cycles or local demand drops without waiting for a human to notice.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr&rsquo;s engine also layers on alerts and pacing checks. You can create alerts for any KPI, <GlossaryLink slug="cost-per-lead" className="text-[#0B162A] hover:underline">cost
        per lead</GlossaryLink>, <GlossaryLink slug="click-through-rate" className="text-[#0B162A] hover:underline">click-through
        rate</GlossaryLink>, budget pacing, at the account, campaign, or even label level. When something drifts out of
        bounds, you get notified by email, Slack, Microsoft Teams, or any integration you choose. This means you do not
        have to watch dashboards all day: the system tells you when attention is needed. For budget control,
        Optmyzr&rsquo;s scripts act as circuit breakers, pausing overspending campaigns or sending urgent alerts before
        runaway costs hit your account.</p>
      <p className="text-base text-white shadow-text pt-3">
        A key difference from basic platform automation is depth and flexibility. Google and Microsoft offer some
        built-in rules, but these are limited in scope and often require manual setup for each account. Optmyzr&rsquo;s
        Rule Engine lets you build more complex, multi-condition logic, like pausing only after a keyword has both
        exceeded spend and failed to convert over a custom lookback window, or excluding new products that need more
        time to gather data. You can even link external business data from spreadsheets (inventory, margins, weather) to
        inform your rules, making automation react to what matters for your business, not just ad metrics.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform&rsquo;s automation is always transparent. Every action, whether automated or manual, is logged with
        the rule that triggered it. You can review these logs at any time to see what changed, when, and why. This is
        essential for small teams who need to audit their ad spend and prove to owners or clients that every dollar is
        accounted for.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in Miami-Dade, Broward, and Palm Beach counties, the practical effect is that Optmyzr
        returns hours each week to your team, cuts down on wasted budget, and lets you focus on growth instead of
        firefighting. The automation is not generic: it is tailored to your goals, your risk tolerance, and your market
        cycles, all without the need for custom code or outside consultants. If you need to pause all ads for a product
        that just went out of stock, defend your search position during a local competitor&rsquo;s promotion, or keep
        your spend in check during a slow season, Optmyzr&rsquo;s automation engine is built to catch those moments
        before they turn into losses.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-optmyzrs-automation-engine-actually-runs-your-ad-accounts" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Optmyzr&rsquo;s automation engine actually runs your ad accounts
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-optmyzrs-automation-engine-actually-runs-your-ad-accounts-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Optmyzr&rsquo;s automation engine actually runs your ad accounts
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
