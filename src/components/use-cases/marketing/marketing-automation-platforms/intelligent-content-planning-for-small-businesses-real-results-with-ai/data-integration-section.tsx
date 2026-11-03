import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataIntegrationSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Intelligent Content Planning cannot deliver on its promise if the data it draws from is incomplete,
        inconsistent, or siloed. The reality for most small teams in West Palm Beach or Miami-Dade is that
        information lives everywhere, Google Sheets, email
        threads,&nbsp;<GlossaryLink slug="marketing-automation" className="text-[#0B162A] hover:underline">marketing
        automation</GlossaryLink>,&nbsp;CRM, and random notes. When
        the time comes to automate planning or content creation, this scattered data is the first roadblock.
        Before you can automate anything, you need a clear map of what data matters, where it lives, and how
        clean it is. That is not a technicality, it is the difference between a system that saves you time and
        one that breaks on day one.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot LLC’s own approach starts with a focused&nbsp;data
        quality&nbsp;assessment. It is not about buying a new platform and hoping it fits. We
        look at every key source: What topics have you published? What has the team tried before? Which posts,
        emails, and campaigns are actually driving leads or sales? Data must be accurate, up to date, and
        structured. For a small business, that often means pulling together years of posts, social updates,
        and emails from different systems, then running validation to catch duplicates, missing entries, or
        mismatched tags. If you skip this step, the AI will surface the same old topics you have already
        failed to rank for, or worse, suggest ideas your audience has already ignored.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integration is not just a technical checklist for IT, it is the backbone of a working content planning
        system. The tools you use every day need to talk to each other. When HyperWrite is added, its
        browser-based assistant must be able to access the live context of
        your&nbsp;CRM, your content calendar, and your past campaigns,
        not just the text field in Gmail. If you are using MarketMuse, the platform only delivers its full
        value when it can scan your entire site, audit your historical content, and pull in competitor data.
        Without this integration, you are left with a dashboard that tells you nothing new.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most small teams will need to connect multiple content sources and platforms. Scalenut’s AI agents,
        for example, execute across content, visibility, and publishing in parallel, but only if they have
        access to your live environment, your website, your blog CMS, your email platform, and your social
        scheduling tool. Hootsuite’s workflow hinges on being able to generate and schedule posts instantly
        for each channel, which requires secure integration with Instagram, Facebook, LinkedIn, and more. And
        if you use Semrush for topic research and repurposing, its value depends on tying keyword
        recommendations and performance tracking to your real business metrics, not just generic search
        volumes.</p>
      <p className="text-base text-white shadow-text pt-3">
        For the owner or marketing lead, the practical step here is to inventory every data source and
        workflow that touches content. What gets published, when, and by whom? Where does the approval live?
        Which platform holds the master list of topics? Once mapped, you can decide what gets integrated and
        what needs to be cleaned up before rollout. Geek @ Your Spot LLC’s method always puts this phase before
        any tool selection, if your data is a mess, no AI workflow will save you. The best implementations
        start with a few core integrations, your CMS, your
        main&nbsp;CRM, and your scheduling platform, then expand as
        the team’s process matures. Anything else is a recipe for more chaos, not less.</p>
      <p className="text-base text-white shadow-text pt-3">
        In a real environment, this means spending that extra week up front to get your data house in order.
        It means running test imports, validating fields, and sometimes building small connectors to bridge
        tools that do not natively talk to each other. For a hypothetical twelve-person marketing team, it
        might mean running a sandboxed rollout where only a subset of content is automated until the system
        proves it can handle the live data without duplicating work or dropping critical tasks. The payoff is
        a content engine that runs on clean, connected data, surfacing the right opportunities, automating the
        right steps, and freeing your team to focus on the decisions that actually move the business forward.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-data-and-integration-must-be-in-place-before-intelligent-content-planning-works" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data and Integration Must Be in Place Before Intelligent Content Planning Works
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
              <h2 id="what-data-and-integration-must-be-in-place-before-intelligent-content-planning-works-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data and Integration Must Be in Place Before Intelligent Content Planning Works
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
