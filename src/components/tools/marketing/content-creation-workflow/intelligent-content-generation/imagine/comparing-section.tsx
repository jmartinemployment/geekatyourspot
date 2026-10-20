export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Most small businesses researching content automation for the first time are not just looking at
        Imagine. They are weighing it against a crowded field of AI copywriters, scheduling tools, and image
        generators. The real question is not which tool has the longest feature list, but which one actually
        closes the gap between a blank social calendar and a steady stream of usable, on-brand content.
        Imagine stands out because it is not just a copywriting engine or a social scheduler, it is a modular,
        governed creative system that puts workflow, brand control, and asset repurposing at the center of its
        design.</p>
      <p className="text-md text-white shadow-text pt-3">
        Some platforms focus on writing text: they generate blog drafts, social posts, or email templates in
        bulk. These tools are fast for words, but they stop short of producing coordinated visuals or video
        assets. Others specialize in images or short videos but require you to move files between apps,
        manually match styles, and hope the end result feels unified. Scheduling tools automate posting, but
        only after you have already created and approved every asset. The operational pain point for small
        teams is not just the time spent generating each piece, it is the endless handoff between tools, the
        rework when something does not fit, and the drift from brand guidelines as assets are reinterpreted in
        each system.</p>
      <p className="text-md text-white shadow-text pt-3">
        Imagine does not treat content creation as a series of disconnected tasks. Its node-based workflow
        canvas lets you chain together every step, image, video, audio, copy, and resizing, into a single,
        repeatable process. Once you set up your brand kit and workflow, every output is consistent by design:
        logos, fonts, colors, and tone flow through each asset, whether you are making a product video, a hero
        image, or a set of email graphics. There is no need to copy prompts or settings between tools, and no
        risk of a campaign going off-brand because someone missed a step. This is not just a technical detail;
        it is what lets a small team look like a much larger one.</p>
      <p className="text-md text-white shadow-text pt-3">
        Where other platforms claim automation, most still require a person to review, reformat, and approve
        every variation. Imagine builds governance into the workflow. Approval chains, role-based access, and
        real-time collaboration mean drafts cannot bypass review, and every stakeholder can see and comment on
        assets in progress. For a small business, this means fewer mistakes, less back-and-forth, and no
        surprises when a campaign goes live. The automation does not just speed up production, it removes the
        friction that kills momentum in a lean team.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing and scale also set Imagine apart. Many AI content tools charge per word, per asset, or per
        user, so costs rise quickly as you ramp up production. Imagine’s team plans are structured for groups
        that need to generate at volume without worrying about surprise overages. The $350 monthly scale plan,
        for example, covers up to 40 seats, enough for a multi-location retailer, a regional agency, or a
        franchise operator to run coordinated campaigns across teams. Smaller teams can start free and only
        upgrade when they need more capacity or features. This model fits the reality of South Florida small
        businesses, who often need to scale up for seasonal pushes or new product lines without locking into
        enterprise contracts.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, Imagine’s real strength is in how it handles repurposing and coordination. A product photo
        can become a full suite of campaign assets, square images for Instagram, vertical videos for TikTok,
        email banners, and web hero images, without a designer reworking each one. The workflow logic, not the
        user, handles the format requirements, size, and brand treatment. Competing tools may generate
        variations, but few can guarantee the consistency or save the hours of manual intervention that
        Imagine’s pipeline delivers. For a small business that cannot afford to miss a marketing window or
        spend days on approvals, this is the difference between staying visible and falling behind.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-imagine-compares-to-other-content-generation-platforms" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Imagine Compares to Other Content Generation Platforms
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
              <h2 id="how-imagine-compares-to-other-content-generation-platforms" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Imagine Compares to Other Content Generation Platforms
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
