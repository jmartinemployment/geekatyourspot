import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Bir&rsquo;s value for small teams comes from its automation rules, custom logic, and how these get configured to
        match your ad accounts and business goals. Geek @ Your Spot handles this setup so rules actually fit your
        campaigns, your data, and your risk tolerance, not just a generic template. Bir&rsquo;s automation is built on
        rules that run every 15 minutes, with each rule targeting a specific part of your ad spend: pausing
        underperformers, scaling up winners, or cutting off budget spikes before they become a problem (<a id={`tools-marketing-precision-lead-acquisition-bir-configuring-source-nothink${idSuffix}`} href="https://bir.ch/case-studies/nothink" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Bir</a>,
        as of Oct 25, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        Configuration in Bir starts with defining which metrics matter for your business and how to act on them. For
        example, you can set rules to pause ads when <GlossaryLink slug="cost-per-acquisition">cost per acquisition (CPA)</GlossaryLink>
        goes above your target, or to scale up spend on ads that hit a strong <GlossaryLink slug="return-on-ad-spend">return
        on ad spend (ROAS)</GlossaryLink> for several days in a row. Bir allows you to use custom metrics, not just
        platform defaults, so you can tie automation to your own KPIs, like a custom ROAS target or a blended CPA across
        channels.</p>
      <p className="text-base text-white shadow-text pt-3">
        Rules in Bir are layered and can be as simple or as complex as your needs require. At the ad level, rules filter
        out weak creatives before they drain budget. At the ad set level, rules handle optimization, shifting budgets or
        duplicating strong performers. At the campaign level, safety nets enforce spend caps, detect cost spikes, and
        keep performance within set boundaries. This structure lets Geek @ Your Spot configure Bir to pause, scale, or
        reset budgets based on real trends, not just short-term noise.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bir&rsquo;s automation logic is not one-size-fits-all. It supports nested conditions and multi-level logic, so
        you can build rules that only trigger when several metrics align. For example, you might want to increase budget
        only if CPA is below target, spend is on pace to hit daily goals, and conversions have reached a minimum
        threshold. Bir&rsquo;s rule builder supports these combinations, allowing Geek @ Your Spot to design guardrails
        that match your appetite for risk and your growth targets.</p>
      <p className="text-base text-white shadow-text pt-3">
        Custom timeframes are another core part of Bir&rsquo;s configuration. You are not limited to daily or weekly
        checks. Geek @ Your Spot can set rules to evaluate performance over any window, hourly, daily, or across a
        rolling three- or seven-day period. This avoids overreacting to single-hour spikes and makes sure budget
        decisions are based on solid trends, not outliers. For teams running campaigns in multiple time zones or with
        heavy weekend traffic, this flexibility is what keeps spend under control.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bir&rsquo;s extension mechanism is its ability to connect and act on data from outside the ad platforms
        themselves. Through integrations with Google Sheets, Google Analytics, and attribution tools like Hyros,
        AppsFlyer, Adjust, and Wicked Reports, Geek @ Your Spot can configure Bir to use your own sales, lead, or CRM
        data in its rules. This means automation decisions can factor in real business outcomes, not just what the ad
        platform reports. For example, a rule can pause a campaign if backend sales data shows a drop, even if the ad
        platform still reports good results.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bir does not have an open scripting or API extension for custom code, but its rule builder is flexible enough
        for most small business needs. Geek @ Your Spot uses this to set up logic that would otherwise require manual
        scripting or constant monitoring. Where a business needs to track a unique KPI or apply a rule to a specific
        segment, Bir&rsquo;s filters and custom metrics can be configured to match.</p>
      <p className="text-base text-white shadow-text pt-3">
        A typical Bir deployment by Geek @ Your Spot involves several stages of configuration. First, they map your ad
        accounts and data sources, then work with you to define what counts as a win or a loss for each campaign. Next,
        they build out the rules, starting with basic hygiene (pausing clear underperformers), then adding scaling
        logic, safety nets, and custom checks for weekends or holidays. Each rule is tested in a dry run before going
        live, so you see what would have changed without risking real budget.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bir supports duplicating rules across multiple ad accounts, which is critical for small teams managing several
        brands or markets. Geek @ Your Spot configures these at the start, so you do not have to rebuild logic for each
        account. Rules can be applied, copied, and adjusted in bulk, saving hours of setup and reducing the risk of
        missed settings.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every rule in Bir is visible and auditable. Geek @ Your Spot inventories all active rules, checks their recent
        execution, and makes sure none are stale or working against each other. This prevents the common problem of
        rules firing too broadly, never triggering, or pausing what another rule just restarted. When your ad accounts
        change, new campaigns, new products, or new markets, Geek @ Your Spot updates your Bir rules to keep automation
        aligned with your real business needs.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bir&rsquo;s configuration is not a one-time project. As your business grows or shifts strategy, Geek @ Your Spot
        revisits your rules, adjusts thresholds, and adds new logic to match your latest goals. For example, as you move
        from testing to scaling, rules that were conservative can be made more aggressive, and new conditions can be
        added to protect larger budgets. This is a managed, ongoing process, not something you set and forget.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, what gets configured in Bir is not just a set of basic rules but a layered, business-specific system
        for managing risk, scaling spend, and reacting to real-world changes. Geek @ Your Spot&rsquo;s job is to make
        sure every rule, filter, and data source in Bir matches your actual campaigns and your appetite for risk, so
        your ad spend is always working for you, not against you.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-bir-its-own-rules-and-automation-logic-and-its-extension-mechanism" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What gets configured in Bir, its own rules and automation logic, and its extension mechanism
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-bir-its-own-rules-and-automation-logic-and-its-extension-mechanism-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What gets configured in Bir, its own rules and automation logic, and its extension mechanism
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
