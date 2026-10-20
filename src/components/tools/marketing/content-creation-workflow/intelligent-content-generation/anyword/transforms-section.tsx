import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Anyword tackles the pain points of Intelligent Content Generation by automating the hardest parts of
        the process. For a small business, this means no more staring at a blank screen or guessing which
        message will work. Anyword generates high-quality content for blogs, emails, ads, and social posts in
        seconds, not hours. The platform draws on data from millions of marketing campaigns to predict which
        copy will perform best, so every piece you publish is backed by evidence, not just intuition.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first thing Anyword returns to a team is time. Instead of spending evenings drafting posts or
        rewriting subject lines, the tool creates multiple variations at once. Each version is scored for
        likely performance before you ever hit publish. This means the owner in West Palm Beach can review and
        schedule a week’s worth of content in one sitting, rather than piecing it together late at night. The
        Predictive Performance Score shows which content is most likely to convert, so ad spend goes further
        and campaigns are less risky.</p>
      <p className="text-md text-white shadow-text pt-3">
        Anyword’s AI does more than just write. It learns from your best-performing content and adapts its
        suggestions to match your brand’s voice. This keeps messaging consistent across every channel, whether
        you are sending out a newsletter, posting on Instagram, or launching a new landing page. For small
        teams, this solves the problem of tone and style drifting as different people handle different tasks.
        The platform can even tailor messages to different audience segments, using built-in personas and
        demographic data, so every email or ad feels personalized without extra effort.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk scheduling becomes simple. Anyword can generate and queue content for an entire month, including
        channel-specific posts, hashtags, and captions. The platform integrates with common marketing tools,
        like HubSpot, Marketo, and Facebook, so you can push content live without manual copy-pasting. This
        reduces errors and takes the repetitive work out of campaign management. Instead of juggling
        spreadsheets and calendars, your team reviews, approves, and moves on to more valuable work.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval workflows are built in. Managers can set rules for who reviews what, and Anyword
        automatically routes drafts to the right person. This removes bottlenecks and keeps campaigns moving.
        For teams that struggle with getting content signed off in time, the automation means fewer delays and
        no lost opportunities. Every piece of content can be checked for brand compliance and adjusted before
        it goes out, so nothing slips through the cracks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Personalized email campaigns are no longer a project that eats up days. Anyword generates subject
        lines and body content tailored to specific audience segments, drawing on data from your own campaigns
        or from industry benchmarks. The tool can even analyze your past email results, learn what worked, and
        suggest improvements for next time. This leads to higher open and click-through rates, making your
        email marketing more effective with less manual effort.</p>
      <p className="text-md text-white shadow-text pt-3">
        For every channel, whether it’s a landing page, a Facebook ad, or a blog post, Anyword provides
        instant feedback on how likely the copy is to succeed. If the predicted score is not high enough, the
        tool offers suggestions and tweaks, so you can improve results before publishing. This takes the
        guesswork out of content creation and lets you focus on what actually drives business growth. The
        Predictive Performance Score is not just a number; it is a way to avoid wasted spend and poor
        engagement.</p>
      <p className="text-md text-white shadow-text pt-3">
        Anyword’s integrations go beyond just content creation. The platform connects
        with&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>,&nbsp;<GlossaryLink slug="marketing-automation">marketing
        automation</GlossaryLink>, and social tools, so you can manage everything from one place. This is a
        major advantage for small businesses who already use platforms like Salesforce, HubSpot, or Google
        Ads. No need to learn a new system or change your workflow, Anyword plugs into what you already have.</p>
      <p className="text-md text-white shadow-text pt-3">
        The result is a content operation that feels like it grew overnight. The same team that struggled to
        keep up with one blog post a week can now publish across every channel, with messaging that is
        consistent, data-driven, and tailored to the audience. The hours once lost to writing, editing, and
        guessing are now spent on client work or business development. The business looks bigger, more active,
        and more credible, without adding headcount or blowing the budget.</p>
      <blockquote cite="https://www.anyword.com/anyword-request-a-demo-meta-nn" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        See how leading marketing teams use Anyword to generate, test, and publish content that actually
        performs.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        With Anyword, Intelligent Content Generation is not just faster, it is smarter. Every feature is
        designed to remove a manual step or a source of error. You stop paying for ads that don’t convert, you
        stop losing leads because your content is stale, and you stop burning hours on work that can be
        automated. For small businesses in South Florida, this is the difference between falling behind and
        standing out. Anyword is not a replacement for your team, it is the engine that lets your team do
        more, with less stress and more impact.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-anyword-removes-the-headaches-from-intelligent-content-generation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Anyword Removes the Headaches from Intelligent Content Generation
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
              <h2 id="how-anyword-removes-the-headaches-from-intelligent-content-generation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Anyword Removes the Headaches from Intelligent Content Generation
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
