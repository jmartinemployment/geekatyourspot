export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Hootsuite’s real power for small teams comes from the way it centralizes and automates the entire
        social content process. What gets configured in Hootsuite is not just a queue of posts, but a set of
        rules and automations that determine how, when, and where your content appears. For a business in
        Miami-Dade, Broward, or West Palm Beach, this setup is the difference between a scattershot approach
        and a consistent, high-frequency presence across every major social channel.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core configuration starts with account and network setup. Hootsuite connects to all major social
        platforms, Facebook, Instagram, LinkedIn, X (formerly Twitter), TikTok, YouTube, Pinterest, Threads,
        and more. You map each business profile to Hootsuite so that posts, messages, and analytics flow into
        one dashboard. For TikTok, Hootsuite goes further: you can schedule and publish videos, manage
        comments and messages, and track performance metrics without leaving the platform. This central hub is
        the foundation for every automation and rule that follows.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next comes content automation. Hootsuite’s built-in AI, including Wisdom (formerly OwlyWriter AI),
        generates on-brand captions, post ideas, and hashtags in seconds. You can set up rules for the AI to
        adapt tone, length, and formatting to match the requirements of each network, Instagram’s
        2,200-character limit, for example, or the shorter, punchier style that works on X. Hootsuite’s
        automation can also rewrite and optimize existing content to fit each channel’s best practices, so a
        single message becomes multiple tailored posts. This is how Hootsuite eliminates blank-page syndrome
        and lets a small team look like a much larger one.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scheduling is where Hootsuite’s automation logic comes into its own. You can design content calendars
        weeks or months in advance using a drag-and-drop interface. Bulk scheduling lets you upload dozens or
        even hundreds of posts at once, assigning each to the optimal time slot based on Hootsuite’s
        recommendations or your own audience data. For teams that want to avoid the Friday scramble, this
        means your entire month of social content can be planned and queued in a single afternoon. The
        system’s automation then ensures posts go live at the times most likely to reach your audience, even
        if you’re busy with clients or away from the office.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval workflows are a key part of Hootsuite’s configuration for businesses that need oversight or
        compliance. You can set up multi-step approval flows, assign roles for content creation, editing, and
        final sign-off, and require supervisor review before anything is published. This is especially
        important for regulated industries or brands with strict messaging guidelines. The rules are flexible:
        you can route posts for approval based on dollar thresholds, topics, or departments. Hootsuite’s
        permissions structure lets you control who can publish, who can edit, and who must approve, so nothing
        goes live without the right checks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Trend tracking and social listening are also configurable. Hootsuite’s AI surfaces trending topics,
        hashtags, and local events across social platforms, blogs, and news. You can set up alerts for spikes
        in mentions or sentiment, so your team can jump on emerging conversations or manage risk. These rules
        are especially valuable for South Florida businesses looking to stay relevant to local audiences. The
        system can generate content ideas based on what’s gaining momentum in your area, and you can configure
        it to benchmark your brand against competitors in real time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Hootsuite’s extension mechanism is integration-driven, not open scripting. It offers deep integrations
        with platforms like Adobe Creative Cloud and Adobe Stock, letting you design, edit, and license images
        directly from the Hootsuite dashboard. For analytics and ROI tracking, Hootsuite connects with Google
        Analytics and Adobe Analytics, so you can tie social activity to website conversions and business
        outcomes. Communication integrations with Slack and Microsoft Teams help teams collaborate and share
        content without switching tools. There is no custom scripting or API-first model here, everything is
        configured through the interface or via supported integrations, which reduces complexity for small
        teams.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a business working with Geek @ Your Spot, the heavy lifting is in mapping these rules to your real
        workflow: which approvals are needed, what tone fits your brand, which trends matter to your audience,
        and how to structure scheduling so you never miss a key date. The consultancy’s job is to configure
        Hootsuite’s automation logic so it fits your existing processes and delivers the outcomes you care
        about, consistent posting, compliance, and measurable engagement, without requiring you to become a
        Hootsuite expert yourself.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-hootsuite-and-how-its-automation-rules-drive-results" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Hootsuite and How Its Automation Rules Drive Results
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-hootsuite-and-how-its-automation-rules-drive-results" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Hootsuite and How Its Automation Rules Drive Results
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
