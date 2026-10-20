export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Anyword is not just another AI writing tool. It is built for teams who need more than a blank-slate
        text generator. Most small businesses in South Florida looking at content automation are comparing a
        handful of options: generic writing bots that churn out basic text, agency outsourcing that promises
        polish but drains cash, or platforms that automate only single steps, writing, repurposing, or
        scheduling, but not the whole loop. Anyword sits apart because it closes the loop: it generates,
        scores, and optimizes content for real-world performance before you ever hit publish.</p>
      <p className="text-md text-white shadow-text pt-3">
        Where basic AI writers offer a stream of undifferentiated drafts, Anyword’s core value is its
        predictive performance scoring. Before a post or ad goes live, Anyword analyzes millions of dollars in
        ad spend and campaign data to predict which version will actually get engagement or drive a sale. This
        is not a generic “good writing” grade. It is a channel-specific, audience-specific score, built on
        what has worked for businesses like yours. This means fewer wasted ad dollars and less time spent
        guessing which headline or email subject will land. For a small team, that is the difference between a
        campaign that pays for itself and one that quietly drains budget quarter after quarter.</p>
      <p className="text-md text-white shadow-text pt-3">
        Other platforms automate content creation but leave you to A/B test and optimize by hand. That means a
        constant cycle of trial and error, burning time and budget as you wait for results to trickle in.
        Anyword’s approach is different: it runs those experiments in the background, using its own data to
        score and suggest improvements before you publish. You get instant feedback on what will work, not a
        post-mortem on what failed. For a business owner juggling operations and marketing, this is the
        difference between a system that scales and one that adds another task to your week.</p>
      <p className="text-md text-white shadow-text pt-3">
        Most agency solutions promise custom content and strategic oversight, but they come with high monthly
        fees and slow turnaround times. For many small businesses, that cost is simply out of reach. Anyword
        automates the creative and optimization process at a fraction of the price. The platform’s free trial
        lets you test its fit without a long-term commitment or a sales call. Where agencies scale with
        headcount, Anyword scales with data and automation, making it possible for a two-person shop to
        produce and optimize content at a level that used to require a full team.</p>
      <p className="text-md text-white shadow-text pt-3">
        Many tools claim to personalize content, but few truly integrate brand voice and audience targeting at
        the level Anyword does. The platform allows you to define personas, set tone and style guidelines, and
        train the AI on your own best-performing messaging. This is not just about swapping in a few keywords
        or changing the greeting in an email. It is about maintaining consistency and relevance across every
        channel, social, email, landing pages, without needing to brief a new writer or agency every time. For
        teams that have struggled with off-brand posts or inconsistent messaging, this is a concrete fix, not
        a promise.</p>
      <p className="text-md text-white shadow-text pt-3">
        What about platforms that focus on scheduling and workflow but leave content creation to you? Those
        are strong at keeping a calendar full, but they do nothing to solve the blank-page problem or to
        ensure what goes out is actually effective. Anyword’s strength is that it does both: it generates,
        optimizes, and schedules content in one platform. You do not need to patch together half a dozen tools
        or manage handoffs between writing, editing, and publishing. For a small business, that means fewer
        moving parts, less risk of dropped balls, and more time back for the work that pays the bills.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real question is not whether Anyword can write a blog post or an Instagram caption. Most platforms
        can. The difference is whether your next campaign will be based on data or on hope. Anyword’s
        predictive scoring, optimization, and integration with your existing channels mean you get both
        automation and accountability. That is what sets it apart in a crowded field, and why it is worth a
        close look for small businesses that need to do more with less, right now.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="where-anyword-fits-among-content-generation-platforms-and-why-that-matters-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Where Anyword Fits Among Content Generation Platforms and Why That Matters for Small Teams
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
              <h2 id="where-anyword-fits-among-content-generation-platforms-and-why-that-matters-for-small-teams-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Where Anyword Fits Among Content Generation Platforms and Why That Matters for Small Teams
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
