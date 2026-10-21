export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Hootsuite turns a messy, error-prone content process into a connected, AI-driven workflow. The
        platform is built to eliminate the scattered tools, endless chat threads, and manual guesswork that
        slow down small marketing teams. Each step in Hootsuite’s workflow is designed to move content from
        idea to published post with fewer handoffs, less risk, and more impact.</p>
      <p className="text-base text-white shadow-text pt-3">
        The process starts with content ideation. Hootsuite’s Wisdom AI pulls live social data, trending
        topics, and past campaign results to suggest hooks, angles, and campaign themes that match your brand
        guidelines. Instead of starting from a blank screen, the team gets a list of ready-to-use ideas based
        on what is actually working in their market. This avoids wasted hours in brainstorms and cuts down on
        content that never lands with the audience. Hootsuite’s Perch app then drafts network-specific
        captions, hashtags, and images in one click, ensuring every post is tailored for each platform,
        Instagram, Facebook, LinkedIn, TikTok, and more.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once the content is drafted, Hootsuite’s scheduling tools take over. The platform’s unified calendar
        lets you schedule posts across all channels from one view. AI recommends the best times to publish
        based on audience activity and past engagement, so you are not guessing or blasting updates when
        nobody is online. Bulk scheduling means a week or month of posts can be lined up in minutes, freeing
        the team from daily manual uploads. Hootsuite’s automation fills empty calendar slots and flags gaps,
        making sure nothing slips through the cracks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Approval workflows are built into every step. Each draft can be routed through a customized review
        process, with roles assigned for creation, editing, and final sign-off. Multi-step approval flows
        ensure compliance and brand safety, especially for regulated industries or teams with strict
        governance needs. Posts are only published after passing through the necessary checks, and the audit
        trail is logged for future review. This structure removes the risk of off-message or unapproved
        content going live, a common pain point for small teams.</p>
      <p className="text-base text-white shadow-text pt-3">
        When content is live, Hootsuite’s analytics and reporting tools kick in. Every post’s performance is
        tracked in real time, engagement, reach, sentiment, and more. The platform benchmarks results against
        competitors and highlights what is working or falling flat. Automated, customizable reports mean
        stakeholders get the data they need without manual spreadsheet work. The team can quickly pivot
        campaigns or double down on what resonates, all from the same dashboard.</p>
      <p className="text-base text-white shadow-text pt-3">
        Throughout the workflow, Hootsuite’s AI and automation handle the repetitive tasks. Captions and
        hashtags are generated, past top-performing posts are flagged for repurposing, and social listening
        tools monitor brand mentions and hot local topics. If a trend spikes in your market, Hootsuite can
        draft a response post instantly, no more scrambling to catch up. All this happens inside a single
        platform, so the team is not jumping between tabs or losing context. The result is a workflow that
        replaces the old cycle of blank-page dread, missed trends, and scattered approvals with a streamlined
        system that delivers consistent, on-brand content at the right time, every time.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-hootsuites-workflow-actually-does-step-by-step" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Hootsuite’s Workflow Actually Does, Step by Step
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-hootsuites-workflow-actually-does-step-by-step-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Hootsuite’s Workflow Actually Does, Step by Step
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
