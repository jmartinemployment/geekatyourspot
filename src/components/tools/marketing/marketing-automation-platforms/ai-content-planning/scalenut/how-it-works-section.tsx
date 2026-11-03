export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Scalenut is not just another dashboard that shows you what to fix. It is a platform that moves
        strategy, content, and technical changes from idea to execution in parallel, so a small team can act
        with the speed and coverage of a much larger one. The system is built around specialized AI agents,
        each handling a discrete piece of the workflow, strategy, content writing, visibility tracking,
        community engagement, link building, and publishing. This is not a queue where one step waits for the
        last. In Scalenut, these agents run at the same time, each working to the same brief. The result: what
        would take six weeks in a traditional agency is compressed into days.</p>
      <p className="text-base text-white shadow-text pt-3">
        The process starts with a strategist building a growth blueprint by auditing your current visibility.
        That means looking at where your brand appears across Google and every major AI-powered engine,
        ChatGPT, Perplexity, Gemini, Claude, and Grok. The strategist identifies which topics, prompts, and
        keywords matter most for your audience and where your competitors are already being cited. This is not
        a manual spreadsheet exercise. Scalenut’s GEO Core and Watchtower modules automate the scan, surfacing
        gaps in both traditional SEO and AI answer engine visibility.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once the blueprint is set, Scalenut’s agents execute across multiple fronts. The content agent
        generates new articles, landing pages, and FAQs, all optimized for both human readers and AI models.
        The platform’s AI-assisted engine can produce at scale, Jobscan, for example, used it to generate 161
        SEO-optimized articles and audit 222 pages in a single push. Internal linking is automated, using the
        Link Manager to suggest and implement connections that distribute authority and improve crawlability.
        This is not just for show: internal linking is what signals topical authority to both search engines
        and AI bots, making your content more likely to be cited in AI-generated answers.</p>
      <p className="text-base text-white shadow-text pt-3">
        The visibility agent tracks where your brand is mentioned, cited, or missing across five major AI
        platforms, updating in real time. This is not a static report. You see brand mention share, prompt
        coverage, and historical trends, so you know exactly where you stand and where your competitors are
        getting ahead. When the system detects a gap, say, a high-value prompt where your brand is not cited,
        it feeds that directly back into the content and optimization workflow. The agents can then prioritize
        new content or updates to close that gap, all within the same cycle.</p>
      <p className="text-base text-white shadow-text pt-3">
        Community engagement and authority building are not afterthoughts. The Social UpReach agent monitors
        Reddit and other community platforms to influence sentiment and reinforce your brand’s authority where
        AI models are trained. The Backlink Marketplace agent finds and secures high-quality backlinks from
        trusted domains, signaling credibility to both Google and AI training pipelines. These actions run at
        the same time as content production and visibility tracking, not after them.</p>
      <p className="text-base text-white shadow-text pt-3">
        Publishing is handled by a dedicated agent that manages schema, metadata, and technical SEO, so every
        page is ready for both Googlebot and AI crawlers. Nothing goes live without human review: the
        strategist checks every output for brand voice, accuracy, and fit, making edits or sending it back for
        revision as needed. This is not a rubber-stamp process. It is where machine speed meets human
        judgment, and it is what keeps the quality bar high even as the volume scales.</p>
      <p className="text-base text-white shadow-text pt-3">
        Throughout, Scalenut tracks every change, every ranking, and every AI citation. Monthly reports are
        not just data dumps, they translate what moved and why, so you know what is working and what to do
        next. This is a closed loop: audit, execute, review, track, then repeat, with every agent running
        continuously. For a small team in South Florida, this means you do not just keep up with bigger
        competitors. You can outpace them, showing up as the cited answer in both search and AI results,
        without burning your team out or hiring more staff.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-scalenuts-workflow-delivers-parallel-execution-not-just-analysis" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Scalenut’s Workflow Delivers Parallel Execution, Not Just Analysis
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
              <h2 id="how-scalenuts-workflow-delivers-parallel-execution-not-just-analysis-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Scalenut’s Workflow Delivers Parallel Execution, Not Just Analysis
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
