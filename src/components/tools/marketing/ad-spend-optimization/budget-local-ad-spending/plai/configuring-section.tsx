import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Plai’s automation logic and configuration options are what turn it from a generic ad tool into a system that
        actually protects a small business’s micro-budget. The core of Plai’s setup is its always-on optimization
        engine, which is built to adjust budgets, bids, and audience targeting in real time based on live
        performance data. Geek @ Your Spot configures these rules to match your local market, preferred channels,
        and business goals, so your spend is always focused on what drives results, never left to platform defaults.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is setting up Plai’s tracking and validation rules. Plai automates the process of installing
        conversion pixels across Google, Meta, and other major platforms, so you do not have to touch code or dig
        through confusing setup menus. Geek @ Your Spot ensures that every campaign has the necessary tracking in
        place from day one, which means your reporting and optimization routines are built on real, actionable data,
        not guesswork or missing metrics. For a South Florida business running ads under $500 a month, this closes
        the gap that causes so many DIY campaigns to bleed cash on untracked clicks and leads (<a id={`tools-marketing-budget-ad-copy-message-validation-plai-configuring-source-plai-io${idSuffix}`} href="https://www.plai.io/features/saas-configurator" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Plai</a>,
        as of Oct 23, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        Audience targeting rules are next. Plai’s platform supports tightly defined audience segments, including
        location, behavior, and engagement patterns. Geek @ Your Spot configures these segments based on your
        historical wins and the real buyer data you already have. Rather than leaving your ads open to broad,
        out-of-market clicks, Plai’s audience engine narrows every campaign to the zip codes, interests, and
        customer profiles that have proven to convert for small businesses in Miami-Dade, Broward, and West Palm
        Beach. This means every dollar goes further, and you avoid the “spray and pray” waste that comes from using
        built-in platform defaults.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget and bid automation is where Plai’s rules make the biggest difference for a small team. Plai’s
        optimization logic shifts spend instantly toward the campaigns, ad sets, and creatives that are actually
        performing. Geek @ Your Spot tunes these rules so they reflect your risk tolerance and cash flow, not just a
        generic best practice. For example, if your business sees higher conversions on Thursdays and Fridays,
        Plai’s machine-learning scheduler can weight spend toward those days, while pulling back automatically when
        performance drops. This is not just a set-and-forget rule: Geek @ Your Spot reviews the data and fine-tunes
        the automation as your results come in, so your campaigns keep improving without you needing to log in every
        day.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative testing and validation is handled through Plai’s built-in AI tools. Plai generates multiple ad copy
        and creative variations, then tests them against your real audience to see what works. Geek @ Your Spot
        configures the validation logic so that only the ads with statistically significant results get scaled up,
        while underperforming versions are paused or rewritten. This removes the manual guesswork from creative
        testing and ensures that your message is always matched to what your market is actually responding to. For a
        small business, this means you do not waste money running ads that miss the mark.</p>
      <p className="text-base text-white shadow-text pt-3">
        Plai also supports automation folders and templates, which let Geek @ Your Spot group campaigns, apply
        shared optimization rules, and reuse winning structures across multiple products or locations. This is
        especially useful for businesses with more than one location or product line, since it keeps your best
        practices consistent and makes it easy to roll out new campaigns without starting from scratch. Every
        template and folder can be customized for your business, so you get the benefits of proven frameworks
        without losing the local nuance that makes your marketing work in South Florida’s unique market.</p>
      <p className="text-base text-white shadow-text pt-3">
        If your business needs to connect Plai to other tools, the platform offers direct integrations with Stripe
        and GoHighLevel, among others. While Plai does not expose a public <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink> for
        custom scripting, its configuration options and built-in integrations cover the main needs of small business
        ad management and validation. Geek @ Your Spot handles the setup and mapping, ensuring your billing,
        reporting, and lead pipelines stay in sync with your existing systems.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting and dashboard configuration is the final step. Plai translates complex analytics into clear,
        simple dashboards that show you exactly where your money is going and what it is producing. Geek @ Your Spot
        sets up these dashboards to match your comfort level, whether you want a daily email summary, a live
        dashboard view, or just a weekly check-in. This means you do not need to understand ROAS, impression share,
        or other technical metrics to see if your campaigns are working. Plai’s dashboards make it simple to spot
        trends, catch underperformers, and know when your message is landing with the right audience.</p>
      <p className="text-base text-white shadow-text pt-3">
        What sets Geek @ Your Spot’s Plai implementation apart from a DIY setup is the upfront configuration and
        ongoing tuning. Most small businesses running Plai on their own stop at the default settings, which leaves
        money on the table and risk in the system. Geek @ Your Spot’s team spends the time to align every rule,
        automation, and template to your business objectives, so the platform acts as a true extension of your team,
        not just another tool to manage. When something changes in your business or the market, Geek @ Your Spot is
        there to adjust the configuration, keeping your validation logic sharp and your spend protected.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, Plai’s automation logic is only as good as its setup. Geek @ Your Spot closes the gap by
        configuring every rule, segment, and dashboard to fit the realities of small business marketing in South
        Florida. You get a system that works out of the box, adapts as you grow, and never needs a data scientist on
        staff to keep it running. That is what makes Plai a practical solution for Budget Ad Copy &amp; Message
        Validation when your budget and your time are both tight.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="which-plai-rules-and-automation-logic-get-configured-and-how-geek-your-spot-makes-them-work-for-you" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Which Plai rules and automation logic get configured, and how Geek @ Your Spot makes them work for you
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
              <h2 id="which-plai-rules-and-automation-logic-get-configured-and-how-geek-your-spot-makes-them-work-for-you-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Which Plai rules and automation logic get configured, and how Geek @ Your Spot makes them work for you
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
