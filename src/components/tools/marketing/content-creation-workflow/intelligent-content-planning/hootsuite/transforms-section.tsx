export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Hootsuite is built for small and medium-sized businesses that are tired of the content treadmill. It
        does not just offer another scheduling tool. It brings together content creation, trend listening,
        campaign planning, and approvals into one place, so a small team can work like an enterprise marketing
        department without the overhead. The difference is in what Hootsuite takes off your plate.</p>
      <p className="text-md text-white shadow-text pt-3">
        The biggest win is the end of blank-page dread. Hootsuite’s AI-powered tools turn live social insights
        and brand guidelines into post ideas, hooks, and campaign themes, no more guessing. The Wisdom AI
        assistant taps directly into trending topics, competitor moves, and audience conversations, so your
        team is never stuck inventing content from scratch. Instead of hours lost to brainstorming, you get a
        ready-made list of what works right now, tailored to your market and your brand voice.</p>
      <p className="text-md text-white shadow-text pt-3">
        Drafting posts stops being a manual rewrite session. Hootsuite generates on-brand captions, hashtags,
        and images for every network in seconds. The platform matches each post to the right tone and format
        for Instagram, LinkedIn, Facebook, and more, so your team can bulk schedule a month of content in
        minutes. No more juggling between tools or copying and pasting into different dashboards. Every post
        is ready to go, with the right visuals and messaging for each channel.</p>
      <p className="text-md text-white shadow-text pt-3">
        Hootsuite’s social listening features close the gap on missed trends. Instead of waiting to hear about
        local buzz after it is over, the platform monitors brand mentions, industry topics, and competitor
        activity in real time. When something starts to trend in Miami or West Palm Beach, Hootsuite notifies
        your team and drafts responsive posts automatically. This means you can join the conversation at the
        right moment, driving engagement and capturing attention before the opportunity passes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Timing is handled by data, not hunches. Hootsuite analyzes your audience’s activity and your past
        performance to recommend the best times to post. The platform can fill empty calendar slots for you,
        ensuring every update goes out when your followers are online and ready to engage. This removes the
        guesswork and the wasted effort of posts that land when nobody is watching. Your campaigns hit when it
        matters, and you see the results in real engagement and leads.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval workflows are built in. Every post can be routed through a multi-tier review, with clear
        roles for content creation, editing, and final sign-off. This keeps your brand safe from off-message
        or non-compliant posts, even when multiple people are involved. For regulated industries, Hootsuite
        offers compliance features like customizable permissions, audit trails, and secure content libraries.
        You do not have to worry about an unapproved draft slipping through or a compliance miss putting your
        business at risk.</p>
      <p className="text-md text-white shadow-text pt-3">
        Hootsuite also integrates with Slack and Microsoft Teams, so your team can collaborate without
        learning a new system. Drafts, approvals, and campaign feedback can all happen where your team already
        works. This reduces friction and keeps everyone on the same page, even when schedules are tight or
        people are remote.</p>
      <blockquote cite="https://www.hootsuite.com/perch" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Perch helps you brainstorm ideas, draft posts with AI in your brand voice, and schedule across every
        network, without the blank-page dread.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        Bulk scheduling is not just possible, it is practical. Hootsuite’s Perch app lets you fill your
        content calendar across all major social networks from a single dashboard. You can see every post,
        every approval step, and every campaign in one place. If a post needs to be tweaked for a specific
        network, Hootsuite makes it easy to adjust tone, length, and visuals, so nothing gets lost in
        translation.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams that want to repurpose high-performing content, Hootsuite identifies your top posts and
        helps you adapt them for new channels. The platform can remix past posts, create campaign briefs, and
        even suggest new angles based on what is trending. This means you get more value from every asset you
        create, without having to start over each time. The result is a steady flow of content that stays on
        message and on trend, with less effort from your team.</p>
      <p className="text-md text-white shadow-text pt-3">
        Hootsuite’s AI-driven analytics show you what is working and what is not, so you can double down on
        the content that drives results. Customizable reports, competitive benchmarking, and real-time
        performance highlights give you the data you need to refine your strategy and prove the impact of
        every campaign. No more guessing which posts are worth repeating or which topics to avoid, Hootsuite
        gives you the answers, and the time back to act on them.</p>
      <p className="text-md text-white shadow-text pt-3">
        The end result for the team in Miami-Dade is clear: less time spent on manual planning, drafting, and
        approvals, and more time growing the business. The stress of content chaos disappears. The brand shows
        up consistently, with posts that land at the right time, on the right channel, and in the right voice.
        Intelligent Content Planning with Hootsuite means your marketing runs on data and automation, not on
        luck or last-minute guesses.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-hootsuite-removes-the-manual-grind-from-intelligent-content-planning" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Hootsuite Removes the Manual Grind from Intelligent Content Planning
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
              <h2 id="how-hootsuite-removes-the-manual-grind-from-intelligent-content-planning-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Hootsuite Removes the Manual Grind from Intelligent Content Planning
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
