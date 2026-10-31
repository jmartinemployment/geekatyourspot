import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Wask stands out for small businesses that want direct control of their ad spend optimization without the
        staffing costs, delays, or lock-in of a traditional agency. It delivers agency-level automation and insight for
        Google and Meta ads, but at a fraction of the cost and with full transparency. For a South Florida business
        managing multiple campaigns, the difference is not just price, but how quickly and reliably you can see and act
        on what matters.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most small teams start with manual reviews, spreadsheets, and platform dashboards. This approach breaks down as
        ad budgets grow and campaigns multiply. Agency contracts promise expertise but often add layers of
        communication, slow response times, and percentage-of-spend fees that climb with your budget. Wask, by
        contrast, connects directly to your Google Ads and Meta Ads accounts and operates as a persistent optimization
        layer. It does not just report on what happened last week, it acts the moment a rule or threshold is met,
        24/7.</p>
      <p className="text-base text-white shadow-text pt-3">
        Traditional agencies charge $1,000 or more per month, often plus a cut of your ad spend (<a id={`tools-marketing-precision-lead-acquisition-wask-comparing-source-google-ads-agency${idSuffix}`} href="https://www.wask.co/google-ads-agency" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Wask</a>,
        as of Oct 29, 2026). Wask&rsquo;s automated platform is priced to be accessible for small businesses, with no
        percentage-based incentives to drive up your budget. The platform&rsquo;s automation covers bid management,
        budget reallocation, keyword and audience optimization, and creative fatigue detection, all without waiting for
        a human to notice a change is needed. This means budget is shifted away from underperforming ads and toward what
        works, before a weekly or monthly review would have caught it.</p>
      <p className="text-base text-white shadow-text pt-3">
        Unlike generic dashboards or reporting tools, Wask&rsquo;s value is in its action layer. It does not just show
        you numbers but runs the logic you set, such as pausing ads that exceed <GlossaryLink slug="cost-per-acquisition" className="text-[#0B162A] hover:underline">cost
        per acquisition</GlossaryLink> targets, reallocating budget when conversion rates drop, or alerting you when
        creative performance decays. You keep full control: high-impact changes can require your approval, while
        low-risk fixes run automatically. This is a key difference from both agency models and most SaaS reporting
        tools, which either take over entirely or leave you to interpret what to do next.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses weighing other AI ad spend optimization tools, Wask&rsquo;s integration with both Google and Meta
        (Facebook/Instagram) is direct and persistent. Some tools only offer recommendations or require you to copy
        changes into ad platforms yourself. Wask executes changes as soon as conditions are met, but every action is
        logged with its trigger and timestamp for full audit visibility. This is essential for teams that need to see
        not just what changed, but why, and to be able to explain it to management or partners.</p>
      <p className="text-base text-white shadow-text pt-3">
        One clear advantage is how Wask handles scale and complexity. Manual management becomes unworkable as campaigns
        multiply, and agencies often struggle to give personalized attention to smaller accounts. Wask&rsquo;s
        automation does not get slower or less attentive as you add campaigns or increase your budget. It also makes it
        possible to run structured A/B tests, manage creative rotations, and adjust for seasonality or new product
        launches without waiting for a human to check in.</p>
      <p className="text-base text-white shadow-text pt-3">
        For South Florida small businesses, the real test is not just whether a tool can optimize ads, but whether it
        can do so in a way that fits the speed and budget constraints you face. Agencies can bring expertise, but at a
        price and with the risk of misaligned incentives. Many SaaS tools offer reporting, but little automation or
        actionable insight. Wask gives you the workflow and automation engine to match agency-level results without the
        commitment or markup, and with the transparency and control a small team needs.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you are comparing Wask to other options, focus on three areas: how quickly optimization actions are taken,
        how much control you retain over what changes and when, and how clearly you can see the impact of every action.
        Wask&rsquo;s platform is built to deliver on all three, with a record of real savings and time returned to small
        business teams. The best fit is for owners and managers who want to move from scattered, reactive ad management
        to a repeatable, evidence-driven process that scales with their business.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-wask-compares-to-agencies-and-other-ad-spend-optimization-tools" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Wask Compares to Agencies and Other Ad Spend Optimization Tools
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
              <h2 id="how-wask-compares-to-agencies-and-other-ad-spend-optimization-tools-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Wask Compares to Agencies and Other Ad Spend Optimization Tools
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
