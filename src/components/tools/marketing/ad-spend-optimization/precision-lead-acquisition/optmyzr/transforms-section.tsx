import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr replaces repetitive ad management with automated rules, alerts, and cross-platform monitoring that runs
        in the background. For a small business, this means you stop spending hours each week on routine tasks and start
        focusing on strategy and growth. The platform is designed so that you do not need to write code or understand
        every platform&rsquo;s quirks, Optmyzr&rsquo;s interface lets you build and schedule automations that handle the
        heavy lifting.</p>
      <p className="text-base text-white shadow-text pt-3">
        The Rule Engine is at the core of Optmyzr&rsquo;s automation. Instead of manually checking for wasted spend, you
        set up rules that pause underperforming keywords, ad sets, or entire campaigns when <GlossaryLink slug="cost-per-acquisition">cost-per-acquisition</GlossaryLink>
        metrics cross your safety lines. This instantly cuts off budget drains that would otherwise go unnoticed for
        days. The same logic applies to seasonal drops in demand or sudden spikes in competitor bids, Optmyzr can adjust
        budgets and bids automatically based on your own conditions, not just platform defaults.</p>
      <p className="text-base text-white shadow-text pt-3">
        Landing page failures are another silent killer of ad ROI. Optmyzr&rsquo;s enhanced scripts monitor your ad URLs
        for 404 errors, out-of-stock pages, or other functional issues (<a id={`tools-marketing-precision-lead-acquisition-optmyzr-transforms-source-landing-pages${idSuffix}`} href="https://www.optmyzr.com/blog/are-your-adwords-ads-losing-money-on-bad-landing-pages/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Optmyzr</a>,
        as of Oct 24, 2026). If a landing page goes down, the tool can pause affected ads and alert you immediately,
        saving you from wasting budget on dead clicks. This is not just a safety net; it is a guardrail that prevents
        small problems from becoming expensive disasters.</p>
      <p className="text-base text-white shadow-text pt-3">
        Search term management is handled through automated audits. Optmyzr reviews your search term reports on a
        regular schedule, surfacing high-spend, non-converting queries so you can add them to your <GlossaryLink slug="negative-keywords">negative
        lists</GlossaryLink>. This keeps your campaigns focused on profitable traffic and stops budget from leaking out
        on irrelevant clicks. For teams that struggle to keep up with manual reviews, this alone can save hours every
        month and return real dollars to your bottom line.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget pacing and cross-platform visibility are built in. Optmyzr tracks spend and performance across Google,
        Microsoft, Meta, LinkedIn, and Amazon Ads, showing you where your budget is going and whether it is working.
        Automated alerts notify you when spend is off track or a campaign is underperforming, so you can react before
        small issues become big ones. No more tab-hopping or piecing together spreadsheets, Optmyzr centralizes your
        data and actions in one place.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams that want to go further, Optmyzr supports custom data integrations through Google Sheets. You can
        connect CRM data, call tracking, or internal business metrics to your optimization rules, making your
        automations smarter and more tailored to your goals. This means your automations are not just reacting to ad
        metrics, but to real business outcomes.</p>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr&rsquo;s approach is not just about replacing manual work with automation. It is about giving small
        businesses the same level of control and oversight that large teams have, without the need for specialized
        technical staff. You decide the rules, the conditions, and the actions, Optmyzr executes them, not the other way
        around. If you want to review changes before they go live, you can. If you are comfortable with full
        automation, you can let the platform run on its own schedule.</p>
      <p className="text-base text-white shadow-text pt-3">
        The impact is clear in real-world use. Blue Yarn Media, a digital marketing agency, saved more than 240 hours
        per client annually after switching to Optmyzr, while reducing customer acquisition costs by 36% for a B2B
        client (<a id={`tools-marketing-precision-lead-acquisition-optmyzr-transforms-source-ai-info-page${idSuffix}`} href="https://www.optmyzr.com/ai-info-page/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Optmyzr</a>,
        as of Oct 24, 2026). Epurple, another agency, used Optmyzr&rsquo;s automations to cut cost per acquisition by
        25% and achieved a double-digit year-over-year lift in paid search traffic with less ad spend (<a id={`tools-marketing-precision-lead-acquisition-optmyzr-transforms-source-epurple${idSuffix}`} href="https://www.optmyzr.com/case-studies/epurple/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Optmyzr</a>,
        as of Oct 24, 2026). These are not hypothetical numbers, they are outcomes from teams that faced the same manual
        workload and budget waste as most small businesses in South Florida.</p>
      <blockquote cite="https://www.optmyzr.com/solutions/rule-engine/" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Put repetitive tasks like weekly reporting and keyword management on autopilot, create intricate automated rules
        with custom data, and maintain full control over the destiny of your campaigns while saving time.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr also makes it easy to duplicate rules across multiple accounts, schedule automations to run daily or
        weekly, and receive alerts by email, Slack, or Teams. This flexibility means you can start small, automating
        just the most painful manual tasks, and scale up as your confidence grows. If you manage multiple brands or
        locations, the All Accounts Dashboard gives you a single view to monitor and act on alerts across every platform
        you use.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, Optmyzr&rsquo;s approach to <GlossaryLink slug="predictive-analytics">predictive analytics</GlossaryLink>
        for advertising ties directly into smarter budget allocation and targeting. By centralizing insights and
        automating pacing alerts, the platform highlights opportunities for smarter spend and flags issues before they
        escalate. This is not just about saving time, it is about making every ad dollar work harder, with fewer errors
        and more reliable results.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-optmyzr-removes-manual-work-from-ad-spend-optimization" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Optmyzr removes manual work from Ad Spend Optimization
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-optmyzr-removes-manual-work-from-ad-spend-optimization-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Optmyzr removes manual work from Ad Spend Optimization
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
