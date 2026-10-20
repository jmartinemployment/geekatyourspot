
export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Getting Frase live for a small business in South Florida is a matter of connecting the right pieces,
        not rebuilding your entire marketing process from scratch. The platform is built for teams who cannot
        afford weeks of downtime or a parade of consultants. Deployment moves quickly because Frase comes with
        pre-built integrations for the most common website and content management systems, WordPress, Webflow,
        Sanity, Wix, and its own FraseCMS. Most businesses in West Palm Beach, Broward, and Miami-Dade are
        already running one of these, so the technical setup is a matter of connecting accounts and setting
        publishing permissions, not custom development.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process starts by mapping your existing content workflow to Frase’s structure. Geek @ Your Spot LLC
        leads this step with a focus on what you actually need to produce, SEO articles, social posts, email
        campaigns, and how your team prefers to review and approve content. Instead of forcing a new process,
        Frase adapts to your current way of working. You decide which channels matter (blog, email, social),
        who gets to approve drafts, and whether content should publish automatically or wait for a human
        sign-off. This flexibility is what shortens the go-live window. Most small teams can move from first
        login to first published draft in under a week, provided the approvals and brand voice materials are
        ready.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next step is onboarding your brand voice and sample content. Frase’s brand voice setup uses
        writing you have already published, your best articles, your most successful emails, your most-liked
        social posts. The platform analyzes these to build a voice profile, so new drafts sound like your
        team, not a generic AI. This is a critical phase for small businesses that want to avoid the “AI wrote
        this” tone that turns off local clients. Geek @ Your Spot LLC helps you pick the right samples, upload
        them, and review the first AI-generated drafts for tone and accuracy. Tuning the voice is an iterative
        process, but Frase’s interface makes it easy to adjust and re-test until the output matches your
        standards.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the brand voice is set, Geek @ Your Spot LLC configures the approval and publishing workflows. Frase
        supports both automated and manual review cycles. For teams that want to keep a human in the loop,
        every draft can be routed to a manager or owner for final sign-off before it goes live. For businesses
        ready to automate more, Frase can publish directly to your CMS once it meets the scoring criteria you
        set, SEO, GEO, or both. The approval logic is granular: you can require review for some content types
        (like long-form articles) and let others (like routine social posts) publish automatically.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk scheduling is handled inside Frase or through your existing scheduler, depending on your
        preference. The platform can export content in formats ready for upload to social media planners or
        email platforms, or it can push content directly to your CMS with images, schema, and internal links
        in place. This is where most teams see the biggest leap in efficiency: instead of building every post
        from scratch, you review and approve a batch, then let Frase handle the rest. For teams who want to
        keep their current tools, Frase’s&nbsp;API&nbsp;allows you to
        integrate it with schedulers or pipelines you already use.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout deployment, Geek @ Your Spot LLC’s role is to keep the process moving and remove technical
        blockers. That means mapping your current assets, setting up the integrations, and walking your team
        through the first content runs. Training is focused on your real use-case: how to review, edit, and
        approve content, not a generic product tour. The aim is to get your team from blank page to
        publish-ready content with as little friction as possible. Because the platform is set up for small
        teams, the learning curve is shallow and most users are comfortable after a single session.</p>
      <p className="text-md text-white shadow-text pt-3">
        A phased rollout is the norm for most small businesses. Start with one channel, usually the company
        blog or service pages, then expand to social and email once the team is comfortable. This staged
        approach limits risk and lets your team build confidence with the new workflow. Geek @ Your Spot LLC
        monitors feedback and adjusts the configuration as needed, so you are never locked into a setup that
        does not fit. The result is a content system that runs on your schedule, with your voice, and without
        the usual growing pains that come with new software.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-deploy-frase-in-a-small-business-content-stack" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Deploy Frase in a Small Business Content Stack
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
              <h2 id="what-it-takes-to-deploy-frase-in-a-small-business-content-stack-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Deploy Frase in a Small Business Content Stack
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
