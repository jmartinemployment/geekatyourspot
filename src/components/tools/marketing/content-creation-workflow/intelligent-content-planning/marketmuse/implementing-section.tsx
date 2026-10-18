import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rolling out MarketMuse in a small business environment is a focused, step-by-step process that is
        shaped by the realities of limited staff, fragmented data, and the need for quick wins. Geek @ Your
        Spot brings a clear, local perspective to this: the goal is to get your team working inside MarketMuse
        as fast as possible, with no downtime and no disruption to your existing marketing operations. This is
        not a generic&nbsp;<GlossaryLink slug="saas">SaaS</GlossaryLink>&nbsp;onboarding. It is a practical,
        staged deployment designed for South Florida small businesses that need results, not a six-month
        rollout.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process starts with a technical assessment of your current content assets. Geek @ Your Spot
        inventories your live website, blog, and any other digital content that factors into your marketing.
        This is not a manual spreadsheet export. MarketMuse’s AI scans your site automatically, mapping every
        page, post, and topic cluster in your environment. This step alone saves the typical team dozens of
        hours that would have gone into hand-tagging content or building keyword lists. There is no need to
        upload CSVs or wrangle with&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;connectors just to
        get started.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the inventory is complete, MarketMuse generates a live, always-updated map of your content
        universe. The platform’s proprietary AI does the heavy lifting: it analyzes your pages, identifies the
        topics you already cover well, and flags where your authority is weak or missing entirely. Geek @ Your
        Spot configures the initial settings for your business, setting up tracked topics, defining your
        target clusters, and tailoring the personalized difficulty metric to your site’s real-world authority.
        This is where the platform’s difference is felt. MarketMuse does not use generic keyword difficulty
        pulled from third-party APIs. Instead, it calculates a custom ranking difficulty for your site, based
        on your actual coverage and historical performance. This ensures that every recommendation is grounded
        in your unique position, not a one-size-fits-all index.</p>
      <p className="text-md text-white shadow-text pt-3">
        With the core inventory and personalized metrics in place, Geek @ Your Spot works with your team to
        set up phased access. Rather than opening the full platform to every user on day one, the rollout is
        staged: first, the content leads and decision-makers get access to the dashboards and research tools.
        They validate the inventory, review the topic clusters, and confirm that the initial recommendations
        match business priorities. Once the foundation is set, writers and editors are brought in with access
        to Content Briefs and optimization tools. This staged approach shortens the learning curve and
        prevents confusion or duplication of effort.</p>
      <p className="text-md text-white shadow-text pt-3">
        What shortens the go-live for MarketMuse is the combination of pre-built research workflows and
        templated setup. Geek @ Your Spot leans on MarketMuse’s own best practices, using built-in templates
        for content briefs and cluster analysis, and configuring research workflows that match your existing
        approval chains. There is no need to reinvent your process or force-fit MarketMuse into a workflow
        that does not suit your team. Where you already have approval steps or editorial gates, Geek @ Your
        Spot maps those into MarketMuse’s research and briefing modules, so you keep control without adding
        extra review cycles.</p>
      <p className="text-md text-white shadow-text pt-3">
        The order of operations is always driven by the need to see value early. First comes the content
        inventory and authority mapping, then the rollout of research and briefing tools, and finally the
        integration of optimization feedback into your live editorial process. At every stage, Geek @ Your
        Spot handles the configuration, troubleshooting, and user training, so your team can focus on creating
        and optimizing content, not on learning a new piece of software. The result is a go-live measured in
        days, not months, with every phase designed to deliver immediate, visible improvements in how your
        team plans, writes, and publishes content.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-going-live-with-marketmuse-looks-like-for-a-small-team" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Going Live With MarketMuse Looks Like for a Small Team
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-going-live-with-marketmuse-looks-like-for-a-small-team" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Going Live With MarketMuse Looks Like for a Small Team
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
