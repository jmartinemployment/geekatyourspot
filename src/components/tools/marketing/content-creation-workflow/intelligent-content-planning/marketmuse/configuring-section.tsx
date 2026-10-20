import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        MarketMuse is built for teams that want to stop guessing and start working from data. The core of what
        gets configured is the set of rules and logic that decide what content gets planned, prioritized, and
        optimized. MarketMuse does not try to replace your CMS or run your publishing workflow. Instead, it
        acts as the decision engine for what your team should create, update, or retire.</p>
      <p className="text-md text-white shadow-text pt-3">
        The main configuration step is mapping your site’s existing content into MarketMuse’s inventory. This
        is not a manual upload. MarketMuse automatically crawls your published pages, topics, and combinations
        of the two, and keeps this list up to date. There is no spreadsheet import or hand-tagging required.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once your content is mapped, MarketMuse applies its own set of personalized metrics. These include
        Personalized Difficulty (how hard it is for your site to rank for a topic based on your current
        authority), Topic Authority (how well your site covers a subject compared to competitors), and
        Competitive Advantage (the gap between general difficulty and your own odds of ranking). These metrics
        are not generic. They are calculated from your actual content footprint and performance history, not
        from a public keyword database or third-party&nbsp;<GlossaryLink slug="api">API</GlossaryLink>.</p>
      <p className="text-md text-white shadow-text pt-3">
        The rules that drive planning and automation are set within MarketMuse’s own applications. You do not
        write scripts or build custom automations. Instead, you set priorities by tracking topics that matter
        to your business, flagging areas where you want to build authority, and marking which types of content
        (articles, guides, FAQs, local pages) you want to create or update. The platform then uses its topic
        modeling algorithms to recommend specific actions: which pages to optimize, which topics to cluster,
        and which gaps in your coverage represent the best quick wins.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation in MarketMuse is about removing the manual research, not about automating the writing or
        publishing itself. The platform generates AI-driven Content Briefs that give your writers everything
        they need to cover a topic fully, headings, questions to answer, subtopics to include, and even intent
        signals. These briefs are created in minutes, not hours, and are consistent across your team. The real
        automation is in how MarketMuse analyzes thousands of pages and competitors to produce these briefs
        and content plans, so your team is not stuck in endless research or debate.</p>
      <p className="text-md text-white shadow-text pt-3">
        If you want to extend MarketMuse, you are limited to what the platform itself exposes. There is no
        public&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;or SDK for custom integrations or
        scripting. All configuration happens inside the web interface. This keeps the workflow simple and
        focused but means that if you need deep integration with other systems, like pushing data into a
        custom dashboard or automating task creation in a third-party project manager, you will need to handle
        that outside of MarketMuse. The platform is not built for plug-and-play automation with external
        tools; it is built to be the central logic layer for content decisions, not the execution layer.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC’s role is to make sure MarketMuse’s logic is configured to match your business goals
        and current content reality. That means mapping your site accurately, setting up the right tracked
        topics, and aligning the platform’s recommendations with your actual publishing cadence and staffing.
        For a small business, this is the difference between a tool that sits unused and a system that drives
        every week’s content plan. Geek @ Your Spot LLC handles the initial data mapping, sets up the topic
        tracking, and trains your team to interpret the personalized metrics MarketMuse generates. The result
        is a workflow where your team stops guessing and follows a data-backed plan that fits your market,
        your resources, and your competitive landscape.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real value in MarketMuse’s configuration is that it breaks the cycle of manual audits and gut-feel
        assignments. Once set up, it tells you, based on your own site and your real competitors, where to
        focus for the fastest, most reliable gains. There is no scripting, no custom coding, and no
        complex&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;work. The rules are built into the
        platform, and the automation logic is driven by your own content, not by generic industry templates.
        For a small team, that means less time spent on setup and more time spent on executing a plan that
        actually works.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-marketmuse-rules-automation-logic-and-extension-limits" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in MarketMuse: Rules, Automation Logic, and Extension Limits
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
              <h2 id="what-gets-configured-in-marketmuse-rules-automation-logic-and-extension-limits" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in MarketMuse: Rules, Automation Logic, and Extension Limits
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
