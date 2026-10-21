export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Going live with Imagine is not a matter of flipping a switch and waiting for results. The process is
        structured, but it is also designed to get small teams moving quickly. The main advantage is that
        Imagine brings a modular, workflow-driven platform that can be tailored to fit the current state of
        your business, whether you have a scattered folder of product images or a well-organized asset
        library. What shortens the time to value is the way Imagine’s node-based workflow canvas and brand
        governance features are built for reuse and adaptation, not for one-off, custom integrations.</p>
      <p className="text-base text-white shadow-text pt-3">
        Implementation starts with a clear definition of business objectives, what content needs to be
        produced, which channels matter most, and who is responsible for approvals. Geek @ Your Spot LLC leads
        this phase by mapping your current content process to Imagine’s workflow system. The first step is
        often to identify a high-repetition asset type: for example, weekly promotional posts, product launch
        visuals, or seasonal offers. This focus keeps the initial rollout tight, avoiding the trap of
        over-customizing before the team has seen results.</p>
      <p className="text-base text-white shadow-text pt-3">
        Imagine’s pre-built workflow templates and connectors are what make the difference for small teams.
        Instead of building every step from scratch, you can select from proven templates, such as a
        product-to-campaign pipeline or a social post generator, and adapt them to your needs. These templates
        already encode best practices for asset generation, review, and publishing, so you are not reinventing
        the wheel. The platform’s App Builder also allows you to turn a validated workflow into a one-click
        app for non-technical users, which means your team can generate on-brand content without touching the
        underlying logic.</p>
      <p className="text-base text-white shadow-text pt-3">
        Phased rollout is another critical factor. Geek @ Your Spot LLC typically recommends starting with a
        single workflow, like turning raw product photos into a coordinated set of Instagram, email, and
        website assets, before expanding to more complex campaigns. Early wins build trust in the system and
        give the team a chance to adjust the workflow based on real feedback. Once the first workflow is
        running smoothly, additional content types or automation steps can be layered in, such as automated ad
        variant generation or bulk scheduling for seasonal campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        The order of operations matters. First, brand assets and reference images are uploaded and mapped to
        Imagine’s Brand Kit. Next, the workflow is configured to enforce brand standards at every generation
        step, using the Brand Agent to lock in colors, fonts, and approved imagery. Then, the review and
        approval process is set up, so that every asset passes through the right eyes before publishing.
        Finally, the team is trained on how to use the simplified interfaces, whether that’s the workflow
        canvas for power users or the App Builder for everyone else.</p>
      <p className="text-base text-white shadow-text pt-3">
        What shortens go-live is not just technology, but the removal of manual handoffs. Imagine’s node-based
        canvas chains together every step, generation, editing, approval, and publishing, so that the team is
        not moving files between apps or waiting for email sign-offs. The platform’s real-time collaboration
        features mean that everyone sees the same file, with live comments and version tracking, which cuts
        review cycles down to minutes instead of days.</p>
      <p className="text-base text-white shadow-text pt-3">
        A typical implementation with Geek @ Your Spot LLC moves from scoping to live production in a matter of
        days, not weeks. The biggest time-saver is that Imagine’s workflows are reusable and adaptable: once a
        process is validated, it can be run for every new campaign or product without starting over. For small
        businesses in South Florida, this means less time spent on setup, fewer errors, and a faster path to a
        professional, coordinated digital presence.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-launch-imagine-in-a-small-business-environment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Launch Imagine in a Small Business Environment
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
              <h2 id="what-it-takes-to-launch-imagine-in-a-small-business-environment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Launch Imagine in a Small Business Environment
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
