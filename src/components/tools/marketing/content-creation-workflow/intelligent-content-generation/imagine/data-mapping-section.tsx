export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The way you structure and map data in Imagine determines how smoothly your content workflows run. This
        is not a technical afterthought, it is the foundation that keeps campaigns consistent, assets
        on-brand, and approvals fast. For small businesses, the key is to keep the setup as simple and
        repeatable as possible, while still encoding the brand’s identity and operational rules.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first decision is how to organize your brand assets. Imagine’s Brand Kit is the central repository
        for logos, color palettes, fonts, reference images, and usage guidelines. Uploading these assets once
        and mapping them to the correct fields means every workflow can pull the right brand elements
        automatically. This avoids the problem of different employees using outdated logos or inconsistent
        colors. The Brand Agent uses these mapped assets as constraints, so generated content always meets
        your standards.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next is mapping your content types to workflow nodes. Each node in Imagine’s canvas represents a
        production step, image generation, video editing, resizing, or approval. Deciding which nodes to use
        and in what order depends on your most common content needs. For example, a retailer might start with
        a node that ingests a product photo, then passes it through a style-transfer node to match the
        season’s campaign look, followed by a resize node for different platforms. Each node is mapped to a
        specific input and output, so the workflow runs the same way every time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data privacy and workspace boundaries are also set at this stage. Imagine keeps all your assets,
        prompts, and outputs private to your workspace. You decide who can access which projects, with
        role-based permissions mapped to team members. This is especially important for businesses that need
        to keep client work or sensitive campaigns separate from the rest of the team’s activity.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval workflows require clear mapping of decision points. In Imagine, you define which assets need
        review, who approves them, and what happens if changes are required. The approval chain is enforced by
        the workflow structure itself, it cannot be bypassed by skipping a step or editing a prompt. This
        mapping means that every asset is checked before it is published, reducing the risk of off-brand or
        unapproved content slipping through.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another decision is how to handle recurring content. Imagine’s persistent settings feature allows you
        to carry over generation parameters between workflow runs. This is useful for businesses that produce
        similar campaigns week after week: once you have mapped the settings for one launch, you can reuse
        them for the next, with only minor tweaks. The data structure here is not just about files and
        folders, it is about encoding the logic of your business into the workflow itself.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, think about how you want to track and report on content production. Imagine provides a
        real-time dashboard that shows credit usage, workflow runs, and asset status. Mapping your reporting
        needs at the start means you can monitor which campaigns are using the most resources and where
        bottlenecks occur. This data helps small teams make informed decisions about scaling up, adjusting
        workflows, or reallocating effort to higher-impact content.</p>
      <p className="text-md text-white shadow-text pt-3">
        Getting data structure and mapping right at the beginning is what makes Imagine’s automation reliable.
        Geek @ Your Spot LLC guides clients through these decisions, ensuring that the system reflects the real
        way the business works, not a generic template. The result is a content engine that runs without
        constant oversight, freeing up the owner and team to focus on growth instead of firefighting.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="decisions-about-data-structure-and-mapping-that-set-imagine-up-for-success" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Decisions About Data Structure and Mapping That Set Imagine Up for Success
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="decisions-about-data-structure-and-mapping-that-set-imagine-up-for-success-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Decisions About Data Structure and Mapping That Set Imagine Up for Success
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
