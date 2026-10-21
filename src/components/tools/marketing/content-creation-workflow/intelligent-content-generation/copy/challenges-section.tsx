export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        For a small business in South Florida, trying to run content creation the manual way is like running
        with weights on. The owner or office manager faces a wall of competing demands: client calls, billing,
        operations, and the constant pressure to stay visible online. Every time they sit down to write a blog
        post or an email campaign, other urgent tasks pull them away. The blank page stares back, and the
        clock keeps ticking. Content sits unwritten, and the cost is more than just lost time, it’s lost
        visibility, fewer leads, and a shrinking share of the local market.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual content creation eats into core business hours. Writing a single update can take half a day,
        especially when the person writing is not a professional copywriter. The result is that marketing
        drops to the bottom of the to-do list. Social accounts go quiet. The website’s blog hasn’t been
        updated in months. In a market where local visibility is everything, this silence means the business
        starts to slip out of sight for potential clients.</p>
      <p className="text-base text-white shadow-text pt-3">
        Trying to solve the problem by outsourcing isn’t much better. Agencies and freelance copywriters send
        invoices that can easily run into the thousands each month. For a small business, this is a recurring
        cost that can’t be justified, especially when the content delivered feels generic or misses the mark
        on what makes the business unique. The agency model also introduces delays: waiting for drafts,
        reviewing rounds of edits, and explaining the business over and over again to new writers. The
        business pays for time lost, not just dollars spent.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real bottleneck comes from the way content is produced and used. One-off blog posts rarely get
        repurposed for social media or email. Each piece of content is an isolated effort, so the time
        invested in writing doesn’t multiply across channels. When the team does manage to write something, it
        often stays stuck as a draft, never making it to all the places it could drive results. This
        fragmentation means that even the content that is created doesn’t deliver its full value.</p>
      <p className="text-base text-white shadow-text pt-3">
        Consistency is another casualty. When content is produced by whoever has time that week, the
        business’s brand voice drifts. Emails sound different from blog posts. Social media updates don’t
        match the tone or messaging of the website. Over time, this erodes trust with local clients. If the
        business does manage to hire outside help, the risk is that the writer doesn’t understand the
        technical details or the local context. The content might look polished, but it doesn’t sound like the
        business or speak to its real customers.</p>
      <p className="text-base text-white shadow-text pt-3">
        The pain compounds with each attempt to scale up. As the business grows, so do the demands for content
        across more channels, Instagram, Facebook, email, the company blog, and maybe even YouTube or
        LinkedIn. Without a system, every new channel is a new set of headaches. The team spends hours
        reworking the same message for each platform, or worse, gives up and lets some channels go quiet. The
        business looks smaller and less active than it is, and bigger competitors with more resources start to
        win the local search and social game by default.</p>
      <p className="text-base text-white shadow-text pt-3">
        The Friday afternoon that started with a blank page ends with nothing published, a missed opportunity
        to connect with new leads, and the same old feeling of being stuck. Manual content creation traps
        small businesses in a cycle of wasted effort, missed sales, and a pipeline that never fills up.
        Without a repeatable, intelligent system, the business spends more time on content and gets less value
        from it, while competitors pull ahead with automated, always-on marketing. The cost isn’t just in
        dollars, it’s in every lost hour, every quiet social feed, and every client who chooses someone else
        because they saw them first.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-content-creation-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Content Creation by Hand
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
              <h2 id="what-it-costs-to-keep-doing-content-creation-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Content Creation by Hand
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
