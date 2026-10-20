export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Imagine turns the old content grind on its head. Instead of starting from a blank screen every week,
        small businesses can build a repeatable, AI-powered workflow that takes real product photos, brand
        assets, and campaign ideas and turns them into a full suite of marketing visuals, videos, and
        email-ready content. The days of one-off posts and disconnected campaigns are over. With Imagine, one
        approved input, like a product photo or service image, feeds into a system that generates matching
        assets for every channel you use.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first change is speed. What used to take hours or days, drafting, editing, reformatting for each
        platform, now happens in minutes. Imagine’s node-based workflow lets you chain together the steps that
        matter: image generation, video creation, copy drafting, and brand controls. Each node handles a part
        of the job, and the whole sequence runs automatically. There is no more copying files between apps, no
        manual resizing, no chasing down the right version. The business owner or marketer sets the rules
        once, and every campaign runs the same way, every time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Brand consistency is not an afterthought. Imagine lets you lock in your brand kit, logos, colors,
        fonts, reference images, so every asset comes out on-brand by design. That means no more off-brand
        drafts, no more wasted reviews, and no more explaining the same style guidelines over and over. Every
        output, from a social graphic to a video ad, matches the look and feel you want. For small teams, this
        is a game-changer. It means the business always looks sharp, even when the owner is not the one making
        every edit.</p>
      <p className="text-md text-white shadow-text pt-3">
        Imagine’s Ad Studio takes this one step further for retailers and e-commerce. Instead of building each
        ad from scratch, you can drop in a product URL and get back a coordinated set of images and videos,
        sized for every platform. The system pulls product details, applies your brand rules, and generates
        multiple creative treatments in one go. You do not need to brief a designer or juggle templates. The
        output is ready to deploy, and every product in your catalog gets the same level of attention, no more
        picking favorites because of limited time or budget.</p>
      <p className="text-md text-white shadow-text pt-3">
        For service businesses and restaurants, Imagine’s workflows turn real photos, before-and-after shots,
        menu items, or team images, into polished visuals and short videos. You can refine backgrounds, add
        branded overlays, and even generate voiceovers for explainer clips. This is not about fabricating
        results. It is about making sure your actual work gets seen, in the best possible light, across every
        channel your customers use.</p>
      <p className="text-md text-white shadow-text pt-3">
        The biggest shift is in how content gets made. With Imagine, you are not just automating tasks; you
        are building a system that keeps working for you. Once you set up a workflow, say, for weekly specials
        or seasonal campaigns, you can run it again and again. The team does not have to start over or
        remember every step. The process is locked in, and the output is predictable. That means fewer
        mistakes, less stress, and more time spent on work that grows the business.</p>
      <p className="text-md text-white shadow-text pt-3">
        Imagine also supports real-time collaboration. The infinite canvas lets everyone on the team see,
        comment, and review assets as they are made. Changes and approvals happen in one place, so nothing
        gets lost in email threads or chat messages. For small businesses, this means faster turnarounds and
        fewer dropped balls. The approval chain is enforced by the workflow itself, so no asset goes live
        without the right sign-off.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security and commercial rights are built in. Imagine is SOC 2 certified and gives you full ownership
        of your generated content. Your assets and prompts stay private to your workspace, and you control who
        can see or edit each project. Whether you are publishing to social, sending an email campaign, or
        launching a new product, you know the content is yours and safe to use.</p>
      <p className="text-md text-white shadow-text pt-3">
        The impact is visible in the way teams work. A three-person marketing team at Framon Group now
        produces all its commercial imagery in-house with Imagine. WithFeeling, a creative agency, has
        published AI-generated work in editorial magazines. These are not hypothetical examples, they are real
        businesses using Imagine to close the gap between what they want to show and what they have time to
        make.</p>
      <blockquote cite="https://www.imagine.art/business/solutions/small-businesses" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        ImagineArt brings the power of an entire creative agency into your small business workspace.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        For a business owner in Miami-Dade, Broward, or West Palm Beach, this means no more choosing between
        serving clients and marketing the business. Imagine does not just generate content; it gives your team
        a system that runs in the background, turning your ideas, photos, and offers into a steady stream of
        professional, on-brand marketing assets. The hours you used to lose to the blank page, the costs you
        used to pay for outside help, and the stress of chasing down every draft, those are gone. What you get
        is time back, a brand that always looks sharp, and the ability to keep up with competitors who have
        bigger teams and bigger budgets.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-imagine-removes-the-work-from-intelligent-content-generation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Imagine Removes the Work from Intelligent Content Generation
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-imagine-removes-the-work-from-intelligent-content-generation" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Imagine Removes the Work from Intelligent Content Generation
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
