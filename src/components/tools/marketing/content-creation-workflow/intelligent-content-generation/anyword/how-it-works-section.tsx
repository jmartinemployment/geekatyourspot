import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Anyword’s platform automates the entire process of content creation, optimization, and delivery by
        combining predictive analytics, real-time scoring, and multi-channel publishing in a single workflow.
        The engine is built to take a small business from a blank page to a set of high-performing,
        ready-to-publish assets, without the usual bottlenecks that slow down manual writing or agency review
        cycles. Its core workflow is designed to replace guesswork with data-backed decisions at every step,
        so each piece of content is tuned for the right channel and audience before it goes live.</p>
      <p className="text-base text-white shadow-text pt-3">
        The process starts with idea generation. Anyword’s AI analyzes your brand’s past messaging and
        audience data to surface new content ideas, headlines, and talking points that are likely to perform.
        This isn’t generic brainstorming: the tool draws from a large pool of industry-specific benchmarks and
        your own historical results, so the suggestions are grounded in what has actually worked for similar
        audiences. By analyzing message engagement and campaign outcomes, the system identifies which themes
        and formats drive the best results, narrowing the field to what’s most likely to succeed for your
        business.</p>
      <p className="text-base text-white shadow-text pt-3">
        When you draft or upload content, whether it’s a blog post, a social update, an ad, or an email,
        Anyword’s predictive engine immediately scores each variation with a Predictive Performance Score.
        This score is not just a number; it’s a data-backed estimate of conversion potential, engagement, and
        fit for your specific target audience. The scoring draws on millions of dollars in ad spend and
        thousands of campaigns, benchmarking your content against the best in your industry. The platform also
        provides demographic breakdowns (like age and gender analytics) for each variation, so you can see at
        a glance which version is most likely to resonate with your intended audience.</p>
      <p className="text-base text-white shadow-text pt-3">
        If a score falls short, you don’t have to start over. Anyword offers a one-click “boost performance”
        feature that automatically refines your copy, adjusting tone, structure, and calls to action to raise
        the predicted outcome. You can set how much creative freedom the optimizer has, keeping it close to
        your original language or allowing more aggressive changes. This
        real-time&nbsp;<GlossaryLink slug="feedback-loop" className="text-[#0B162A] hover:underline">feedback
        loop</GlossaryLink>&nbsp;means you never have to settle for a message that might underperform, and you
        avoid the endless cycle of manual edits and A/B tests that slow most marketing teams down.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once you approve a draft, Anyword moves to the next phase: multi-channel deployment. The tool
        customizes each asset for its intended platform, automatically adapting formatting, length, and tone
        for channels like Facebook, Instagram, Google Ads, LinkedIn, email, and landing pages. All copy
        variations are checked for brand compliance, so your message stays consistent across every touchpoint.</p>
      <p className="text-base text-white shadow-text pt-3">
        For ongoing campaigns, Anyword’s Continuous Optimization engine kicks in. After you embed a simple
        tracking code on your site or landing page, the platform tests multiple copy variations live, learning
        from real visitor behavior and automatically shifting traffic to the highest-converting versions. This
        removes the need for
        manual&nbsp;<GlossaryLink slug="a-b-testing" className="text-[#0B162A] hover:underline">A/B
        testing</GlossaryLink>&nbsp;and lets the AI handle optimization in real time. Throughout the campaign,
        you get access to a performance dashboard that tracks conversion rates, views, and the effectiveness
        of each tested variation, so you can see how the system’s choices are paying off.</p>
      <p className="text-base text-white shadow-text pt-3">
        Anyword’s workflow is designed to be hands-off for the user. The platform handles idea generation,
        variant creation, scoring, optimization, and channel-specific publishing in one loop. For a small
        business, this means the hours once spent writing, editing, and second-guessing are returned to the
        team, while the content pipeline keeps running. The system’s predictive and adaptive tools ensure that
        every campaign is grounded in data, not hunches, and that every asset is built to perform before it
        ever hits publish.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-anywords-core-engine-automates-content-creation-and-optimization" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Anyword’s Core Engine Automates Content Creation and Optimization
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
              <h2 id="how-anywords-core-engine-automates-content-creation-and-optimization-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Anyword’s Core Engine Automates Content Creation and Optimization
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
