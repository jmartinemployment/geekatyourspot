import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        HyperWrite is built to turn the slow, manual grind of intelligent content planning and writing into a
        fast, guided workflow. The process starts when a user opens a browser tab, Gmail, Google Docs,
        LinkedIn, or a&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>. Instead of switching between tools,
        HyperWrite sits inside the browser and follows along as you work. Its TypeAhead feature reads what you
        are typing and what is open in nearby tabs, so it can offer full-sentence suggestions that fit your
        context and match your writing style.</p>
      <p className="text-base text-white shadow-text pt-3">
        Drafting becomes a live, collaborative process. As you type, HyperWrite predicts what you want to say
        next, not just with keywords but with complete, context-aware sentences. This is not a simple
        autocomplete. The tool pulls in surrounding text and even content from adjacent browser tabs, so
        replies and content drafts are tailored to the conversation or document at hand. Over time, HyperWrite
        learns how you write, your tone, your favorite phrases, even the level of detail you tend to use, and
        adapts its suggestions to fit. This means every draft feels like it came from your team, not a generic
        AI engine.</p>
      <p className="text-base text-white shadow-text pt-3">
        When writing an email reply, you can start with a few rough words. HyperWrite will convert those into
        a complete, polished response that matches the context of the original message. This is especially
        useful for handling repetitive inquiries from leads or clients. Instead of spending ten minutes on
        every reply, you get a finished draft in seconds, and can move on to higher-value work. For more
        complex writing, like blog posts or proposals, HyperWrite can generate outlines, first drafts, and
        even suggest headlines or titles, all within the same tab.</p>
      <p className="text-base text-white shadow-text pt-3">
        The intelligent content planning side is driven by the AI Content Planner. Here, you enter your
        industry, audience, and marketing goals. HyperWrite analyzes trends, competitor activity, and what
        your audience cares about. It then generates a full content calendar with topics, suggested formats,
        and timing for each channel, blogs, social posts, emails, and more. This removes the guesswork and
        stops the cycle of brainstorming sessions that go nowhere. The content plan is not static; as you use
        the tool and publish content, it learns what works and refines future suggestions.</p>
      <p className="text-base text-white shadow-text pt-3">
        Approval workflows and repurposing are handled within the same system. When a draft is ready, you can
        route it for review, make edits, or adapt it for another channel. HyperWrite can instantly rewrite a
        blog post as a social caption, an email sequence, or a summary, adjusting the technical detail and
        tone for each audience. This is not a copy-paste job, it is a real transformation that makes the
        content fit each use. Because it all happens in one tool, you avoid the friction of jumping between
        platforms or reformatting by hand.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bulk scheduling is built in. Once you have a slate of posts or emails, HyperWrite can queue them up
        for release across channels, using the timing and cadence that matches your strategy. This means a
        small team can plan and schedule a month’s worth of content in a single sitting, instead of logging
        into multiple apps and setting reminders. The system tracks what has been published, what is waiting
        for approval, and what is in the pipeline, so nothing gets lost or forgotten.</p>
      <p className="text-base text-white shadow-text pt-3">
        Throughout the process, HyperWrite keeps your brand voice consistent. Its Personas feature is trained
        on your past writing, so every suggestion and draft matches the tone and style your business is known
        for. This stops the problem of content that feels robotic or off-brand, every piece sounds like it
        came from your team, even when the AI did the heavy lifting. For small businesses in South Florida,
        this means you can scale your marketing without sacrificing the personal touch that sets you apart.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real step-by-step flow with HyperWrite looks like this:</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Open your browser and start a draft in your tool of choice, Gmail, Docs, LinkedIn, or&nbsp;CRM.</li>
        <li>Type your message or content idea. HyperWrite reads the context and suggests full-sentence completions in real time.</li>
        <li>Accept, edit, or ignore the suggestions as you go. The tool adapts to your choices and learns your style over time.</li>
        <li>For intelligent content planning, enter your business goals and audience details. HyperWrite generates a tailored content calendar.</li>
        <li>Drafts are routed for approval or repurposed for other channels, blog to email, email to social post, without leaving the workflow.</li>
        <li>Schedule content for release across all channels, track what’s live, and update your plan based on results.</li>
      </ol>
      <p className="text-base text-white shadow-text pt-3">
        This workflow is designed to keep teams focused and productive, not bogged down by repetitive, manual
        steps. HyperWrite’s mechanics are built for the way small businesses actually work: inside browser
        tabs, juggling multiple roles, and needing every hour to count.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-hyperwrite-works-the-real-steps-from-idea-to-published-content" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How HyperWrite Works: The Real Steps from Idea to Published Content
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
              <h2 id="how-hyperwrite-works-the-real-steps-from-idea-to-published-content-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How HyperWrite Works: The Real Steps from Idea to Published Content
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
