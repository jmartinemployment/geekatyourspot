export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Hootsuite is built for the small business owner who cannot afford to waste another Friday afternoon
        struggling with content. Instead of forcing you to juggle ideas, draft posts from scratch, and
        remember which platform needs what, Hootsuite automates the entire cycle. The result: hours returned
        to your week, fewer mistakes, and a steady marketing presence that never goes dark.</p>
      <p className="text-md text-white shadow-text pt-3">
        First, Hootsuite’s AI-driven tools eliminate the blank-page problem. OwlyWriter AI and Wisdom can spin
        up post ideas, captions, and even full campaign drafts in seconds, no more staring at an empty screen
        waiting for inspiration. You give the tool a topic, a link, or even a few keywords, and it delivers
        production-ready options tailored for each social platform. This means you can fill your calendar with
        relevant, on-brand content in a fraction of the time it used to take.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk scheduling is where most teams see the biggest shift. Hootsuite’s drag-and-drop calendar lets you
        plan, edit, and schedule weeks of posts at once. Instead of scrambling to post in real time, you can
        sit down once, upload content for every channel, and have the software queue it for the best
        engagement windows. The system even recommends optimal posting times based on your audience’s
        behavior, so you stop guessing and start posting when it matters.</p>
      <p className="text-md text-white shadow-text pt-3">
        The AI does more than write. It repurposes content across networks, automatically tweaking tone,
        hashtags, and formatting to fit Instagram, LinkedIn, Facebook, TikTok, and more. This means your
        message stays consistent, but your posts look and sound right for each audience. No more copy-paste
        errors or posts that feel out of place. If you have a great blog post or a strong email, Hootsuite can
        turn it into a week’s worth of social updates, image captions, or even video scripts, without manual
        rewriting.</p>
      <p className="text-md text-white shadow-text pt-3">
        Trend tracking is built in. Hootsuite monitors what is gaining momentum in your local area and
        industry, surfacing real-time topics, hashtags, and conversations you can join while they are still
        relevant. Instead of missing the boat on local events or viral moments, you get prompts to draft
        context-rich posts that connect with your community. The AI can even suggest how to adapt your
        messaging as sentiment shifts, so your brand always feels in tune with what matters most to your
        audience.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval workflows are no longer a bottleneck. Hootsuite lets you set up rule-based approvals, assign
        roles, and track every post through a clear process. Whether you are a team of one or a dozen, every
        piece of content can be reviewed, edited, and approved before it goes live. This removes the risk of
        off-brand messaging or compliance slip-ups, and it means no more last-minute scrambles to fix a
        mistake after it is already public.</p>
      <p className="text-md text-white shadow-text pt-3">
        Analytics are unified and actionable. Instead of logging into each platform and trying to piece
        together what worked, Hootsuite’s dashboard shows you exactly which posts drove engagement, leads, or
        sales. You can see cross-network performance at a glance, compare metrics, and get AI-powered
        recommendations on what to post next. This lets you double down on what is working and cut what is
        not, no more guessing, and no more wasted effort.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams managing multiple locations or brands, Hootsuite centralizes control but keeps local voices
        authentic. Each location or team can draft their own posts, but everything routes through a supervisor
        for oversight. This keeps messaging on-brand and compliant, while letting each part of your business
        speak directly to its own audience.</p>
      <blockquote cite="https://www.hootsuite.com/platform/publishing" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Easily create, schedule, and publish content for all your platforms from Perch, Hootsuite’s AI social
        media scheduler, content calendar, and approvals hub.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        Integrations with creative tools like Adobe Creative Cloud and Adobe Stock mean you can find, edit,
        and license images without leaving Hootsuite. This smooths out the creative workflow, no more
        switching tabs or losing track of assets. If you use Slack or Microsoft Teams, Hootsuite brings
        content curation and approvals into the channels your team already knows.</p>
      <p className="text-md text-white shadow-text pt-3">
        Inbox management is another area where Hootsuite saves time. All your messages, comments, and DMs from
        Facebook, Instagram, WhatsApp, and more land in a single dashboard. You can reply, assign, or automate
        responses, cutting response times and making sure no lead slips through the cracks. Saved replies,
        auto-responders, and AI-powered chatbots handle routine questions and free up your team for
        higher-value conversations.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses, the real win is that Hootsuite does not just help you post more, it lets you
        stop thinking about content as a separate job. Content creation, scheduling, approvals, trend
        tracking, and analytics all happen in one place. This means you spend less time managing tools and
        more time running your business. The risk of burnout drops, the cost of agency support disappears, and
        your brand never looks abandoned to a new customer.</p>
      <p className="text-md text-white shadow-text pt-3">
        Every week, that means fewer late nights, more predictable results, and a business that looks as
        active and credible online as any big competitor. Hootsuite is not just another tool, it is the
        difference between always playing catch-up and finally getting ahead in your market.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-hootsuite-removes-the-weekly-pain-from-intelligent-content-generation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Hootsuite Removes the Weekly Pain from Intelligent Content Generation
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
              <h2 id="how-hootsuite-removes-the-weekly-pain-from-intelligent-content-generation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Hootsuite Removes the Weekly Pain from Intelligent Content Generation
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
