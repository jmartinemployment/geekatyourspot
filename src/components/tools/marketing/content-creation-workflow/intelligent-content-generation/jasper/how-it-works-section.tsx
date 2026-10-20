export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Jasper’s core workflow starts by translating a single idea or brief into a coordinated campaign that
        covers every channel a small business needs. The process is not about producing one-off pieces, but
        about building a system where every asset, email, landing page, blog post, or social update, stays on
        message and on brand. This is the answer to the chaos that comes when a team tries to handle content
        in scattered documents and disconnected tools.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is to set up the Canvas workspace. Canvas is not just a document editor; it is a
        control room for campaign planning and execution. Here, a team outlines campaign goals, defines the
        target audience, and sets the key message. Jasper then generates drafts for each asset, all built from
        the same source material. This keeps the story straight from the first draft to the final version,
        whether you are launching a new offer or responding to a market event.</p>
      <p className="text-md text-white shadow-text pt-3">
        Jasper’s Brand Voice and Style Guide features are loaded at the start of the workflow. These are not
        optional add-ons. They are the guardrails that keep every draft aligned with your company’s tone,
        vocabulary, and compliance needs. The Style Guide enforces punctuation rules, voice preferences, and
        other writing conventions across all content. The Brand Voice draws from your existing materials so
        Jasper produces text that sounds like your company, not a generic bot. Every asset, blog post, ad
        copy, email, gets the same treatment, so nothing slips through with off-brand language or outdated
        facts.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next phase is asset creation and review. Jasper’s Grid tool turns high-volume production into a
        repeatable process. Each row in the Grid is a unique asset: one email in a sequence, a different
        social post for each platform, or a blog tailored to a specific audience. The team can run the same
        workflow across every row, batch-creating dozens of pieces at once. This is where Jasper’s automation
        delivers its biggest time savings. Instead of writing each post by hand, the team reviews, refines,
        and approves content inside Canvas and Grid, with all feedback tracked in one place. This cuts the
        back-and-forth that normally stretches a campaign launch over weeks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Jasper’s Knowledge Base adds another layer of control. Here, you upload the facts, product details,
        campaign briefs, and research that Jasper uses to ground its writing. This means every asset pulls
        from the same source of truth. No more chasing down the latest product description or worrying that an
        old claim will sneak into a new post. As soon as something changes, say, a new product feature or a
        shift in positioning, you update it once in the Knowledge Base. Jasper applies the update everywhere,
        so your content stays current across the website, email, and social channels.</p>
      <p className="text-md text-white shadow-text pt-3">
        The final step is distribution and scheduling. Jasper integrates with scheduling and publishing tools,
        so once content is approved, it can be queued for release without manual copying or pasting. Bulk
        scheduling features let you plan a month’s worth of posts or email campaigns in one session. The
        system adapts each asset for the requirements of its channel, shorter, punchier text for social,
        longer-form for blogs, all with the right formatting and metadata. This closes the loop, turning a
        single idea into a coordinated, multi-channel campaign that launches on time and stays consistent from
        start to finish.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout this workflow, Jasper’s automation does not replace human judgment. Teams still review
        drafts, approve changes, and set the creative direction. But the hours lost to manual drafting,
        reformatting, and chasing down the right version are gone. The business owner in Miami can now spend
        Friday afternoon reviewing a full campaign, not scrambling to finish a last-minute post. Jasper’s
        system brings order, speed, and consistency to content creation, so small teams can finally keep up
        with the demands of digital marketing without burning out.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-jaspers-workflow-turns-ideas-into-consistent-multi-channel-content" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Jasper’s Workflow Turns Ideas into Consistent Multi-Channel Content
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
              <h2 id="how-jaspers-workflow-turns-ideas-into-consistent-multi-channel-content" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Jasper’s Workflow Turns Ideas into Consistent Multi-Channel Content
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
