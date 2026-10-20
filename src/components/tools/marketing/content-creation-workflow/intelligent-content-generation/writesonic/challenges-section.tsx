export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in Miami-Dade, Broward, and West Palm Beach, the price of manual content creation
        is not just measured in lost time. It is the cost of missed growth. When an owner or office manager
        juggles marketing with everything else, the &quot;blank page&quot; problem eats away at productive
        hours. That time should go to billing, customer service, or operations. Instead, it vanishes into
        half-finished blog drafts and social posts that never go live. The result is more than a slow week. It
        is a pattern that keeps the business stuck behind bigger competitors, those with teams or agencies who
        never stop publishing.</p>
      <p className="text-md text-white shadow-text pt-3">
        Agency sticker shock is the next wall. Local agencies in South Florida often quote $2,000 a month or
        more for routine content. For a business running on tight margins, that is a recurring bill that can
        choke cash flow. The math does not work: either you pay for help and risk your budget, or you try to
        do it all yourself and fall behind. Most choose the latter. That is why so many local websites and
        social feeds go quiet, and why new leads slow to a trickle. The cost is not just the agency fee, it is
        the opportunity lost when marketing stops.</p>
      <p className="text-md text-white shadow-text pt-3">
        Even when teams push through and publish, the old approach does not deliver. Generic, short-form posts
        do not answer the deeper questions that local clients are searching for. Search engines and AI-driven
        answer engines now look for structured, comprehensive content, pillar pages that show expertise and
        local relevance. Without these, your site slips down the rankings. AI ignores you. The hours spent
        writing simple updates do not move the needle. Instead, you watch as larger competitors with content
        pipelines earn the clicks and citations that bring in business.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual content creation also means you are always behind. Updating old posts or scaling up for a new
        campaign takes weeks. By the time you finish, the opportunity has shifted, or a competitor has already
        filled the gap. The cycle repeats: last month’s content is outdated, but there is no capacity to
        refresh it at scale. This lag costs you visibility in both search and AI results. It is not just about
        being late. It is about being invisible when clients are looking.</p>
      <p className="text-md text-white shadow-text pt-3">
        Semantic SEO and intent mapping are another hurdle. Modern search engines and AI platforms do not just
        look for keywords. They reward content that matches real user questions and covers the topic deeply.
        For a lean team, mapping out semantic structures and building content around them is too complex to do
        by hand. The result is thin, surface-level posts that fail to rank. You lose out to national chains
        and aggregators who can afford to build deep, interconnected content libraries.</p>
      <p className="text-md text-white shadow-text pt-3">
        The hidden cost of the manual approach is the ceiling it puts on your business. You can only publish
        as fast as your team can write. There is no way to match the output of larger operations without
        hiring or outsourcing. Every hour spent on content is an hour not spent on revenue-generating work.
        The business looks smaller than it is, and local clients who search for what you offer find someone
        else first. This is not just a marketing problem. It is a growth problem, and it gets worse every year
        as AI-driven engines become the new front door to local services.</p>
      <p className="text-md text-white shadow-text pt-3">
        Picture the same team from the opening, now at the end of another week. The blog post is still a
        draft. The inbox is full. The phones are quiet. The website has not moved up in search, and there are
        fewer new leads than last month. That is the real cost of doing content creation by hand in 2026: slow
        output, lost visibility, and a business that never quite breaks through.</p>
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
