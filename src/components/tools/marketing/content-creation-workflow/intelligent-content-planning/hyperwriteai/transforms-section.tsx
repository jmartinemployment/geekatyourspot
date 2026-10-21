export default function TransformsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        HyperWrite changes the shape of the workweek for small business marketing teams by automating the
        hardest, slowest parts of Intelligent Content Planning. Instead of burning hours on routine drafting,
        manual rewriting, and endless context switching, teams get those hours back, and see fewer errors,
        more consistent messaging, and a process that actually scales.</p>
      <p className="text-base text-white shadow-text pt-3">
        Start with the inbox. HyperWrite sits inside the browser, not as a separate app, so every email, blog
        draft, or social post can be written in the tool you already use. Its TypeAhead feature predicts your
        next sentence as you type, pulling context from the surrounding text and even adjacent tabs. This
        means replies that used to take ten minutes now take seconds. No more copying and pasting from
        templates or retyping the same message for every local inquiry. The assistant adapts to your personal
        writing style, so every response sounds like you, not like a robot. That keeps your brand voice
        consistent and your team focused on the next task, not stuck in their inbox.</p>
      <p className="text-base text-white shadow-text pt-3">
        Routine communication is no longer a time sink. HyperWrite generates full, context-specific responses
        from just a few raw words. If a customer asks a common question, you can turn a quick note into a
        polished, professional reply without leaving Gmail. The tool also rewrites complex technical or
        commercial concepts into clear, accessible language. This removes the risk of confusing your audience
        or losing local buyers to jargon. Every message lands with the right tone and level of detail, no
        matter who is writing it.</p>
      <p className="text-base text-white shadow-text pt-3">
        For intelligent content planning, HyperWrite&#39;s AI Content Planner analyzes your industry,
        competitors, and target audience to build a comprehensive content strategy. It does not just suggest
        topics; it creates a blueprint that maps out blog posts, social media updates, and email campaigns
        tailored to your goals. This eliminates the guesswork and manual research that used to fill hours of
        every week. Instead of arguing over what to publish next, your team works from a data-driven roadmap
        that shows exactly where to focus for the highest impact.</p>
      <p className="text-base text-white shadow-text pt-3">
        When it comes to drafting, HyperWrite drafts and rewrites text with you in real time. Whether you are
        starting from a blank page or refining a rough outline, the assistant helps defeat writer’s block and
        speeds up the process. The tool’s AI Document Editor provides instant, context-aware suggestions and
        critiques as you write, so drafts come together faster and with fewer errors. You can move from rough
        ideas to polished copy in half the time, and every draft is ready for review without endless rounds of
        edits.</p>
      <blockquote cite="https://www.hyperwriteai.com/articles/typeahead-ai" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        TypeAhead AI predicts your next sentence as you type, and it has become one of the biggest time-savers
        for professionals who write all day.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        Bulk scheduling and repurposing are also built in. HyperWrite can take a strong blog post and
        instantly adapt it for social media, email, or other channels. It adjusts the technical detail and
        tone for each audience, so you do not have to start from scratch every time. This means one piece of
        content becomes many, each tailored for its platform and purpose. The result is a steady stream of
        on-brand messaging without the manual effort of rebuilding every asset.</p>
      <p className="text-base text-white shadow-text pt-3">
        Approval workflows are simplified. HyperWrite automates routing and review, so content moves smoothly
        from draft to publication. The tool creates clear approval messages and tracks status, cutting down on
        delays and missed handoffs. Instead of waiting on a manager’s sign-off or chasing down feedback, your
        team sees exactly what needs attention and when. This keeps projects moving and reduces the risk of
        last-minute surprises.</p>
      <p className="text-base text-white shadow-text pt-3">
        Personalized email campaigns are easier to launch and manage. HyperWrite drafts high-quality,
        natural-sounding emails based on a short summary, ensuring each message is relevant to its recipient.
        The assistant can also generate multiple versions for different audience segments, tailoring subject
        lines and body copy for higher engagement. The free plan covers the basics, and teams can scale up as
        needed, with paid plans starting at $16 per month.</p>
      <p className="text-base text-white shadow-text pt-3">
        The bottom line: HyperWrite removes the slow, manual steps that used to define content planning for
        small teams. It returns hours to your week, reduces errors, and keeps your messaging on point across
        every channel. Instead of reacting to the next crisis or deadline, your team can focus on strategy,
        creativity, and growth, confident that the routine work is handled and the results will show up where
        it matters most.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-hyperwrite-removes-hours-of-work-from-intelligent-content-planning" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How HyperWrite Removes Hours of Work from Intelligent Content Planning
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
              <h2 id="how-hyperwrite-removes-hours-of-work-from-intelligent-content-planning-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How HyperWrite Removes Hours of Work from Intelligent Content Planning
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
