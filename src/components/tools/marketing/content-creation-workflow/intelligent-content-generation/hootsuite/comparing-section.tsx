export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses in Miami-Dade, Broward, and West Palm Beach weighing Hootsuite for Intelligent
        Content Generation are not choosing in a vacuum. The alternatives fall into two main camps: manual
        content creation (whether in-house or with freelancers) and traditional marketing agencies. Each comes
        with its own costs, risks, and operational headaches, and Hootsuite’s role is to change the shape of
        those tradeoffs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual content creation is the default for most small teams. It offers complete control, but that
        control comes at the price of time and burnout. The business owner or office manager becomes the de
        facto content team, juggling posting, brainstorming, and analytics on top of their real job. Even with
        the best intentions, the process is slow, inconsistent, and nearly impossible to scale. The “blank
        page” problem is constant: hours lost to writing a single post, with no guarantee it will land. When
        the team finally gets something out, it’s often a rush job, one network gets all the attention, others
        are neglected, and few posts are ever repurposed for new audiences. Tracking what actually works is an
        afterthought, not a process.</p>
      <p className="text-md text-white shadow-text pt-3">
        Agencies and freelance copywriters promise to solve the time and expertise problem, but they introduce
        a new set of barriers. The first is cost, agency retainers and freelance fees quickly add up,
        especially when the work is ongoing. The second is speed and flexibility. Even the most responsive
        agency cannot match the pace of a small team that needs to pivot content on short notice. Briefing,
        revision cycles, and approvals add friction. Agencies also struggle to deliver hyper-local relevance
        and real-time trend responsiveness, which is critical for a business that needs to win in its own ZIP
        code, not just in a generic market segment.</p>
      <p className="text-md text-white shadow-text pt-3">
        Hootsuite sits between these extremes, bringing the automation and scale of an agency with the control
        and local relevance of an in-house approach. Its native AI engines generate production-ready captions,
        ideas, and hooks in seconds, eliminating the blank-page bottleneck that makes manual content creation
        so costly in time and morale. The integrated trend tracking surfaces what is gaining momentum locally,
        so content is never stale or out of step with the community. Teams can schedule weeks of content
        across multiple platforms using a visual drag-and-drop dashboard, sidestepping the impulsive,
        last-minute posting that kills engagement. Hootsuite’s AI rewrites messages for each network’s
        requirements, so a single idea can become a week’s worth of channel-specific posts without extra work.</p>
      <p className="text-md text-white shadow-text pt-3">
        Compared to other platforms in the content automation space, Hootsuite’s difference is its focus on
        centralizing the entire workflow, content creation, approval, scheduling, publishing, engagement, and
        analytics, on one dashboard. This means the team never has to jump between tools to get the job done.
        Integrations with Adobe Creative Cloud and Adobe Stock let users pull in high-quality, licensed images
        and edit them without leaving Hootsuite. Slack and Microsoft Teams integrations make it easier to
        bring content into existing communication routines, so approvals and feedback happen where people
        already work.</p>
      <p className="text-md text-white shadow-text pt-3">
        When it comes to measuring results, Hootsuite’s analytics and reporting tools close the loop. Unlike
        manual efforts, where post performance is often a mystery, Hootsuite aggregates data across networks,
        making it easy to see which posts drive real engagement and which should be dropped. The platform’s
        AI-powered insights help teams spot trends, identify conversion sweet spots, and adapt content
        strategies in real time, something neither a generic agency nor a piecemeal set of tools can do
        efficiently.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses that have tried to stitch together a workflow from a half-dozen free or low-cost
        tools, the difference is clear. Hootsuite is not just another scheduler or caption generator. It is an
        engine for consistent, high-frequency, multi-channel marketing that returns hours to the team and
        keeps the content pipeline full. Where other approaches break down, whether from cost, complexity, or
        lack of local insight, Hootsuite is built to deliver a repeatable, scalable process that any small
        team can run without outside help.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is not to say Hootsuite is the only answer. Some businesses with highly specialized, long-form,
        or compliance-heavy content needs may still need agency oversight or a more bespoke workflow. But for
        the majority of small teams who simply need to look alive online, keep leads coming in, and never let
        their channels go dark, Hootsuite stands out as the only platform that brings together automation,
        local trend awareness, multi-network publishing, and end-to-end analytics in one place. For a business
        that cannot afford to fall behind, that difference is not just technical, it is existential.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-hootsuite-stacks-up-against-other-approaches-to-content-generation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Hootsuite Stacks Up Against Other Approaches to Content Generation
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-hootsuite-stacks-up-against-other-approaches-to-content-generation" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Hootsuite Stacks Up Against Other Approaches to Content Generation
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
