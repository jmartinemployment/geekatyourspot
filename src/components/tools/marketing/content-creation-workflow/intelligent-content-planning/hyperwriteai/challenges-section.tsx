export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manual content planning drains small teams in ways that go far beyond the visible workload. Every
        week, local businesses in West Palm Beach, Broward, and Miami-Dade lose hours to a process that is
        slow, repetitive, and deeply frustrating. The real cost is not just in missed deadlines or the expense
        of overtime. It is in the high operational overhead that comes from constantly switching between apps,
        rewriting the same email, and arguing over what to publish next. When a team is stuck on the
        &quot;content treadmill,&quot; they spend more time guessing and reworking than actually reaching
        their audience.</p>
      <p className="text-base text-white shadow-text pt-3">
        The pain starts with the inbox. Staff spend ten minutes on every routine reply, typing nearly
        identical responses to local leads, each one built from scratch. This is not just busywork; it is time
        that could go into strategy, customer calls, or campaign optimization. The problem compounds when team
        members bounce between browser tabs, Google Docs for drafts, Gmail for outreach, spreadsheets for
        keyword tracking. Each switch breaks focus, doubling the time needed to finish even simple tasks. By
        the end of the week, those lost minutes become hours, and those hours become the difference between
        growth and stagnation.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real bottleneck, though, is not just the time lost but the quality sacrificed. Brainstorming
        sessions often end in frustration, with half-finished ideas and no clear direction. Teams argue over
        which topics to cover, stitch together keyword lists manually, and end up publishing content based on
        a hunch. Without predictive automation, most of what gets published fails to rank in search, never
        gets seen, and does not convert. The result is a backlog of invisible content, a graveyard of effort
        with nothing to show for it.</p>
      <p className="text-base text-white shadow-text pt-3">
        Communication friction is another silent killer. Client follow-ups, business proposals, and local
        updates stall because every message demands manual drafting, and crucial replies get lost in the
        shuffle. When technical services are described in dense jargon, local buyers check out. Even the best
        ideas get buried under the weight of overcomplicated language and unclear briefs. The team feels
        trapped, not just by their workload but by the sense that none of it is moving the business forward.</p>
      <p className="text-base text-white shadow-text pt-3">
        The manual approach also creates a fragmented workflow. Team members are forced to jump out of their
        active tools just to brainstorm a concept or search for facts. Instead of pulling in citation-backed
        insights directly, they rely on memory or scattered notes, which leads to errors and missed
        opportunities. This patchwork process makes it impossible to scale, and it is especially punishing for
        small teams who cannot afford to add headcount or burn out their best people.</p>
      <p className="text-base text-white shadow-text pt-3">
        The stakes are higher for small businesses in South Florida because every wasted hour is a missed sale
        or a delayed response to a local customer. Without intelligent content planning, the team is stuck in
        a reactive cycle. They publish content that no one sees, spend more time fixing mistakes than making
        progress, and watch as their marketing spend delivers zero measurable return. The cost is not just
        financial, it is the frustration of knowing that with a better process, the same team could double
        their output and finally see results from their hard work.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-real-cost-of-manual-content-planning-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Real Cost of Manual Content Planning for Small Teams
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-real-cost-of-manual-content-planning-for-small-teams-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Real Cost of Manual Content Planning for Small Teams
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
