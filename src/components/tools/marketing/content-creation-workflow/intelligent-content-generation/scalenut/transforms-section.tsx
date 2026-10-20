export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Scalenut gives small teams a way out of the content bottleneck. It does this by automating the steps
        that used to eat up hours every week, research, outlining, drafting, optimizing, and polishing.
        Instead of starting from scratch, a business owner can supply the real questions they answer for
        customers, the services they actually offer, and the voice that makes their brand unique. Scalenut
        turns that input into a finished article, ready for the website or the next email campaign.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first thing Scalenut takes off your plate is the “blank page” problem. By building on what you
        already know, it moves from a headline to a complete outline in minutes, not hours. The customizable
        outline process lets you direct the AI, so the draft reflects your business’s real expertise and not
        just generic advice. For a bookkeeping firm that never finished articles, this means every piece moves
        through a clear title, outline, and draft sequence until it is ready to publish. For an HVAC company,
        it means technician notes and customer FAQs become structured educational content, not just scattered
        answers in an inbox.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scalenut’s Cruise Mode is where the speed shows up. This guided workflow benchmarks your content
        against the top 30 ranking pages, then drafts a complete, SEO-optimized article in under five minutes.
        You can refine each section, rephrase for clarity, expand or shorten as needed, and track your content
        score and key terms throughout. The platform builds in prompts for schema markup and metadata, so your
        content is ready for both search engines and AI-powered discovery, no extra steps or technical
        knowledge required.</p>
      <p className="text-md text-white shadow-text pt-3">
        Brand consistency is another job Scalenut takes over. Instead of every article coming out in a
        different tone, you can set your brand voice once, by pasting in a sample or providing a URL, and the
        AI learns to match it. This solves the problem for teams like the insurance agency who struggled to
        keep articles sounding the same. Centralized guidelines, a brand kit, and reusable templates mean your
        business sounds like itself, every time, across blogs, emails, and social posts. There is no need to
        rewrite drafts to fix the “AI tone” or to chase down a freelancer for edits.</p>
      <p className="text-md text-white shadow-text pt-3">
        Where most tools stop at a first draft, Scalenut keeps going. Built-in research tabs pull in insights
        from top-ranking competitors, showing you what topics to cover, what questions to answer, and what
        data backs up your claims. The platform flags gaps and opportunities, so your content is not just
        complete, it is competitive. You can add internal links, optimize for key terms, and even refresh old
        content to keep it working for you. For teams that get stuck halfway, this means every piece gets
        finished, optimized, and published without a handoff or a long back-and-forth.</p>
      <blockquote cite="https://www.scalenut.com/articleforge-vs-scalenut" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Write articles that actually rank with Scalenut’s superior AI-powered SEO and content marketing
        platform.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        Bulk work is no longer a blocker. Scalenut supports creating first drafts in bulk, so a month’s worth
        of posts, email campaigns, or product descriptions can move from outline to draft in a single session.
        The platform integrates with WordPress, Copyscape, and Word AI, cutting down on manual steps and
        helping you get content live faster. For small teams that need to look bigger than they are, this
        means you can keep up with competitors who have a full marketing department, without adding headcount
        or burning out your staff.</p>
      <p className="text-md text-white shadow-text pt-3">
        The impact is felt in the day-to-day. Hours that used to be lost to writing and editing return to
        billing, client fulfillment, or sales. The risk of errors and inconsistencies drops. The cost of
        content creation falls from thousands a month to a flat, predictable fee, $12, $32, or $60 per month,
        depending on your needs. And the business owner who sat down late at night to write finally gets to
        close the laptop and focus on running the business, knowing the next article, post, or campaign is
        already handled.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scalenut’s approach is not just about speed. It is about making sure every piece of content is useful,
        accurate, and ready to rank. The AI draws from real competitor data, uses structured outlines, and
        keeps your brand voice intact. The result is a content pipeline that runs without bottlenecks, a
        website that stays fresh, and a business that looks like it has a full creative team behind it, even
        if the real team is just a few people with too much to do.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-scalenut-removes-the-manual-work-from-intelligent-content-generation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Scalenut Removes the Manual Work from Intelligent Content Generation
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
              <h2 id="how-scalenut-removes-the-manual-work-from-intelligent-content-generation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Scalenut Removes the Manual Work from Intelligent Content Generation
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
