export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every small business in South Florida faces the same uphill battle: to stay visible, they need to keep
        their digital presence fresh and credible. But creating enough content to compete is a grind. The time
        cost is real. Owners and small teams spend hours every week staring at a blank screen, trying to write
        a post, edit a video, or design a flyer. That is time pulled straight from running the business,
        serving clients, handling orders, or closing deals. The result? Content gets delayed, skipped, or
        rushed out as a one-off. There is no system, just a scramble to fill the feed or send a last-minute
        email.</p>
      <p className="text-md text-white shadow-text pt-3">
        The blank page is not just a creative block. It is a business bottleneck. When a team member finally
        pushes out a post, it is often disconnected from the last campaign. There is no matching video, no
        series of visuals, no follow-up email, just a single piece that does not build momentum. The effort to
        produce even that one asset is high. If the owner tries to hire help, the sticker shock sets in.
        Agencies and local freelancers price their services for bigger companies. A single campaign can eat up
        the marketing budget for the quarter. That means most small businesses either go it alone or do
        nothing at all.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is not just about money. It is about missed opportunities. When content is inconsistent, so is
        the lead pipeline. Social channels go quiet for weeks, the website sits unchanged, and customers
        forget the brand. Offers sit unsold because there is no creative to promote them. Every new product,
        service, or seasonal special becomes another stress point. The team knows what it should look like, a
        coordinated set of posts, a sharp video, a branded email, but getting there is out of reach. The
        process is so manual that it breaks down under real business pressure.</p>
      <p className="text-md text-white shadow-text pt-3">
        The pain is not only in the lack of assets, but in the lack of a process. Each week, the team starts
        from scratch. Different people use different templates, prompts, or styles. The owner spends time
        re-explaining the brand, reviewing off-brand drafts, and fixing mistakes. When things get busy,
        content is the first thing to drop. Even when a business manages to get a good photo or a handful of
        service shots, turning them into a full campaign, matching graphics, alternate formats, short videos,
        means another set of tools, more manual steps, and more room for error.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a neighborhood boutique, this means new arrivals get photographed once, but never see a
        coordinated campaign. For a restaurant, a lunch special is ready but sits without a single visual to
        promote it. For a service business, the best customer stories and before-and-after shots never turn
        into explainer videos or branded posts. Every week, the business is stuck in the same cycle: too much
        work to do, too few assets to show, and no time to build a real marketing engine.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the true cost of doing content the old way, lost hours, missed sales, and a brand that never
        quite looks as good as it should. The manual process is not just slow, it is unsustainable. As the
        competition gets sharper and digital channels demand more, the gap only widens. That is the problem
        Imagine is built to solve.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-content-the-old-way" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Content the Old Way
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
              <h2 id="what-it-costs-to-keep-doing-content-the-old-way" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Content the Old Way
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
