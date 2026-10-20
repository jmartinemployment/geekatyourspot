export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Hootsuite’s workflow is built for small teams that need to move fast without sacrificing quality or
        compliance. The platform takes each step of content creation, from ideation to publishing, and
        automates or streamlines it through its dashboard, AI engines, and integrations. For a business owner
        in South Florida, this means the entire process of planning, generating, scheduling, and approving
        content can happen in one place, reducing manual effort and eliminating the usual bottlenecks.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Content Ideation: Hootsuite’s built-in AI tools like Wisdom and OwlyWriter AI generate new post ideas, captions, and hashtags based on real-time social trends. Instead of staring at a blank screen, a user can get dozens of platform-specific suggestions in seconds, tailored to their industry and audience.</li>
        <li>Drafting and Repurposing: The platform drafts full posts, rewrites existing content for different channels, and adapts tone and formatting automatically. A single announcement can become a Facebook post, an Instagram story, and a LinkedIn update without manual rewriting.</li>
        <li>Bulk Scheduling: Teams can drag and drop posts into a visual calendar, scheduling weeks of content in advance. Hootsuite’s bulk uploader lets users import multiple posts at once, assign them to different networks, and set optimal publish times based on audience analytics.</li>
        <li>Approval and Compliance: Built-in workflows let teams assign roles, route content for review, and require approvals before anything goes live. For regulated industries, this means every post is checked and tracked, reducing compliance risk.</li>
        <li>Publishing and Engagement: Hootsuite publishes content to all connected social networks from one dashboard. It monitors engagement, collects replies, and lets teams respond to comments or messages directly, keeping interactions timely and consistent.</li>
        <li>Performance Tracking: After publishing, Hootsuite tracks which posts drive engagement, leads, or clicks. Its analytics tools surface what works, so teams can refine their strategy without guesswork.</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        A business that used to spend hours per week just planning and writing now gets most of that time
        back. For example, instead of a Friday spent queuing up next week’s posts, a small team can generate,
        schedule, and approve a month’s worth of content in one sitting. Hootsuite’s AI-generated captions,
        hashtag suggestions, and trend tracking mean even a non-marketer can keep up with what’s relevant and
        timely for their audience.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval workflows are not just a checkbox. Hootsuite lets you build multi-step flows, assign
        reviewers, and keep a full audit trail of who signed off on what. This is especially useful for teams
        that need to manage brand voice or operate in regulated spaces like finance or healthcare. You can set
        up different permissions for content creators, editors, and final approvers, so nothing slips through
        the cracks.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform’s integration with tools like Adobe Creative Cloud and Canva means teams can pull in
        creative assets, edit images, and design posts without leaving Hootsuite. This keeps the workflow
        tight, no more switching between tabs or waiting for design files to be emailed. Once assets are
        ready, they are stored in Hootsuite’s content library, making them easy to reuse or adapt for future
        campaigns.</p>
      <p className="text-md text-white shadow-text pt-3">
        When it comes to engagement, Hootsuite’s unified inbox brings messages, comments, and mentions from
        platforms like Facebook, Instagram, TikTok, LinkedIn, and more into a single view. Teams can assign
        conversations to the right person, use saved replies, and track conversation history, ensuring no
        customer question gets lost. AI-powered routing and categorization help prioritize urgent issues, so
        the team focuses on what matters most.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams juggling multiple locations or brands, Hootsuite’s permission layers let local managers run
        their own profiles while keeping oversight at the group level. This means a Miami-based restaurant
        group can let each location post about local events or specials, but all posts still align with the
        brand’s larger strategy and compliance rules.</p>
      <p className="text-md text-white shadow-text pt-3">
        The workflow is not static. Hootsuite adapts as the team learns what works, using analytics to
        recommend the best times to post and which formats perform best. The result is a system that gets more
        efficient and effective over time, freeing up headcount for higher-value work and making it possible
        for a lean team to look and operate like a much larger one.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="every-step-hootsuite-automates-in-the-content-creation-workflow" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Every Step Hootsuite Automates in the Content Creation Workflow
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="every-step-hootsuite-automates-in-the-content-creation-workflow-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Every Step Hootsuite Automates in the Content Creation Workflow
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
