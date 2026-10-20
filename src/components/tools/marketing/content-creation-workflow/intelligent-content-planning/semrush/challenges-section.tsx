export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A small business in Miami-Dade, Broward, or West Palm Beach runs into the same wall every week. The
        team sits down to plan content, but the process is slow and full of guesswork. They debate topics
        without knowing what local customers are searching for, and they build keyword lists by hand that
        never seem to pay off. The result is hours lost to brainstorming sessions that go nowhere, and blog
        posts or emails that fail to generate leads or even get seen. This is the reality of running content
        planning on gut instinct and manual routines.</p>
      <p className="text-md text-white shadow-text pt-3">
        The pain shows up everywhere. A single blog post can eat up most of a Friday, with team members
        rewriting drafts just to fit each channel, LinkedIn, Instagram, email, Google Business Profile. Each
        format needs its own spin, so the same points are reworded over and over. It’s not just about time:
        the team gets burned out, and the content suffers. Most of it never ranks, never gets opened, and
        never brings in new business. The stress builds as traffic drops for no clear reason. When a
        competitor’s post suddenly pulls ahead, there’s no way to know why. The team is left reacting, not
        leading.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual content planning also means missing out on the topics that could actually drive results.
        Without access to real search data, the business targets keywords that are too competitive or not
        relevant to local customers. They spend hours writing about what they think matters, but the posts
        land flat. The cycle repeats: more work, less impact. When the team tries to repurpose content,
        turning a blog into a social post or an email, the process is tedious. Each time, they start from
        scratch, so the message drifts and the brand voice gets inconsistent across channels.</p>
      <p className="text-md text-white shadow-text pt-3">
        The cost isn’t just measured in wasted hours. It’s also about missed opportunities. When content isn’t
        built on what local customers actually search for, it fails to show up in AI-powered summaries or
        search results. The business stays invisible while competitors with better data and automation pull
        ahead. Even a strong piece of content doesn’t get its full value, because it never gets repurposed
        efficiently. Manual workflows mean the team spends more time fixing problems, like sudden drops in
        traffic or inconsistent messaging, than building real momentum.</p>
      <p className="text-md text-white shadow-text pt-3">
        This cycle of guesswork, manual reformatting, and reactive planning traps small teams in a treadmill
        of effort with little to show for it. The business can’t scale its marketing, can’t measure what’s
        working, and can’t keep up with the pace of change in how people search and buy. It’s not just a
        workflow problem; it’s a visibility problem that hits the bottom line. The longer the team spends on
        manual planning, the further they fall behind competitors who use data and automation to drive every
        decision.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-content-planning-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Content Planning by Hand
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
              <h2 id="what-it-costs-to-keep-doing-content-planning-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Content Planning by Hand
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
