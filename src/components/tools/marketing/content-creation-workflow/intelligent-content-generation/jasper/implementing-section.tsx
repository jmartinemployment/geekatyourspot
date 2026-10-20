export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Going live with Jasper is not a generic software rollout. For a small team in South Florida, it means
        swapping the weekly scramble for a system that produces, reviews, and publishes content in a
        coordinated way, without endless back-and-forth or manual rework. The process can move fast, but only
        if the groundwork is right and the environment is mapped to how Jasper actually works.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first lever is Jasper’s pre-built connectors and templated setup. Jasper integrates directly with
        Google Docs and Microsoft Word, which means teams can start drafting and editing content in the tools
        they already use, no need to learn a new editor from scratch. For teams who already use platforms like
        Webflow, Asana, monday.com, or Google Search Console, Jasper’s integrations allow content planning,
        production, and optimization to happen without jumping between disconnected systems. This shortens
        go-live by avoiding custom development or manual data transfers.</p>
      <p className="text-md text-white shadow-text pt-3">
        A typical rollout starts with a phased approach. Geek @ Your Spot LLC leads with a pilot campaign, a
        single workflow, like a month of social posts or a new landing page and email sequence. This lets the
        team see how Jasper’s Canvas workspace keeps every asset aligned from the first draft to the final
        review. In Canvas, the team brings in campaign goals, content calendar themes, and posting cadence,
        then drafts, reviews, and refines content in context. Each asset is connected to the campaign’s
        objectives and the brand’s style guide, so there’s no drift or contradiction across channels.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, Jasper’s Grid workspace turns that single campaign into a repeatable production line. Grid lets
        teams run the same workflow across dozens of posts, emails, or landing pages at once. Each row is a
        new asset, pre-populated with the right context, brand voice, and approval rules. This is where small
        teams see the biggest time savings, what used to take days of manual copy-pasting and version control
        now happens in a few structured steps. Review cycles are clearer, handoffs are tracked, and nothing
        goes live without a final check.</p>
      <p className="text-md text-white shadow-text pt-3">
        Brand Voice and Knowledge Base setup happens in parallel. Jasper does not guess at how your business
        sounds or what it knows. Geek @ Your Spot LLC works with clients to upload real documents, past campaigns,
        product messaging, even customer Q&amp;As, so Jasper learns the right facts and the right tone from
        the start. The system enforces these rules every time it generates or revises content. This means less
        time spent editing for consistency or correcting errors that slipped through generic AI templates.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval workflows are configured to match the client’s real-world process. Jasper’s Canvas and Grid
        both support batch review and multi-step signoff, so nothing is published until the right person signs
        off. For teams with strict compliance or regulatory needs, Jasper’s access controls and governance
        features ensure only approved users can make changes or approve drafts.</p>
      <p className="text-md text-white shadow-text pt-3">
        The rollout order is simple: start with a single campaign to prove the system, build out the brand and
        knowledge base alongside, then expand to bulk scheduling and multi-channel campaigns using Grid. Each
        step is measured, how many hours saved, how many errors caught, how fast content moves from idea to
        publish. Jasper’s templated setup, direct integrations, and structured workspaces are what allow small
        teams to scale up without adding headcount or introducing chaos. The difference is clear by the second
        week: the same team that struggled to get a blog post out now runs a coordinated, on-brand campaign
        across every channel, with reviews and approvals baked in.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-launch-jasper-in-a-real-small-business-environment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Launch Jasper in a Real Small-Business Environment
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
              <h2 id="what-it-takes-to-launch-jasper-in-a-real-small-business-environment" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Launch Jasper in a Real Small-Business Environment
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
