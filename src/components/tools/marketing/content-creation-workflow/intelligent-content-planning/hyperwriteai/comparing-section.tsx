
export default function ComparingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Small businesses weighing HyperWrite for Intelligent Content Planning are not starting from scratch.
        They already know the grind of manual work, and they have likely sampled other AI tools or content
        platforms. Most are deciding between keeping their current mix of apps, adding another point solution,
        or moving to a more integrated system like HyperWrite. Each path has its own trade-offs, and the
        differences become clear when you look at what actually changes in day-to-day work.</p>
      <p className="text-base text-white shadow-text pt-3">
        The default for many teams is a patchwork of Google Docs, Gmail, spreadsheets, and maybe a free AI
        writing tool on the side. This setup is familiar, but it comes with hidden costs: constant context
        switching, repeated drafts for each channel, and hours lost pulling the same information into
        different formats. The manual approach gives teams full control, but that control means every process
        depends on someone remembering the next step, chasing approvals, and rewriting content for each
        audience. It is not just slow, it is error-prone, and the more a team tries to scale, the more these
        issues compound.</p>
      <p className="text-base text-white shadow-text pt-3">
        Point solutions promise to solve one part of the workflow. A social media scheduler can queue posts,
        an AI email writer can speed up replies, and a separate tool might help with keyword research
        or&nbsp;content repurposing. These tools are
        often affordable and easy to try, and for a team with a single bottleneck, they can give a quick win.
        But as soon as the workflow stretches across more than one channel or requires coordination between
        team members, the cracks show. Each tool has its own interface, its own learning curve, and its own
        data silo. The result is a stack that keeps growing, but the work does not get much easier. Teams
        still spend time copying, pasting, and troubleshooting why one tool&#39;s output does not fit the next
        one&#39;s input.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integrated platforms like HyperWrite change the equation by handling the entire content lifecycle in
        one place. HyperWrite is built to automate the repetitive, low-value work that eats up a small
        team&#39;s week: drafting emails, generating first drafts for blogs and social posts, rewriting
        content for different audiences, and even handling approval workflows. It is not just about generating
        text faster, HyperWrite adapts to the user&#39;s voice, works inline across browser tabs, and connects
        the steps so that a draft can move straight from brainstorm to scheduling without manual rework. The
        AI learns from your writing style and past content, so the more you use it, the more it fits your
        brand and process.</p>
      <p className="text-base text-white shadow-text pt-3">
        Where HyperWrite stands apart is in its real-time, context-aware assistance. Instead of forcing users
        to switch into a separate app or paste prompts into a chat box, HyperWrite delivers suggestions,
        completions, and rewrites directly in the tools the team already uses, Gmail, Docs, LinkedIn, and
        more. The TypeAhead feature means the AI is always present, offering full-sentence completions that
        match your tone and adapt to the context, not just generic autocomplete. This is a step beyond what
        most point tools offer, and it removes the friction of jumping between windows or reformatting content
        for each channel.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams that have tried other AI content tools, the difference is not just in features but in
        outcomes. HyperWrite is designed for marketing teams that need volume and visibility, but do not have
        the budget or headcount for enterprise platforms. It brings together content planning, drafting,
        repurposing, and scheduling, all with AI that learns from your past work. The platform also offers
        features like approval workflows and integrated SEO support, so teams can go from idea to published
        content without the usual bottlenecks. The pricing starts at $16 per month, with a free plan that is
        fully usable on its own, making it accessible for small businesses that need to see value before
        committing.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, HyperWrite is not the right fit for every team. If a business only publishes a couple of
        pieces a month, or if their main challenge is distribution rather than writing, a simpler setup might
        be enough. But for teams stuck on the content treadmill, burning hours on drafts that never get seen,
        or losing momentum to approval delays and manual repurposing, HyperWrite offers a way to reclaim time
        and focus on work that moves the needle. It is not a magic bullet, but it is a platform that closes
        the gap between what small teams need and what they can realistically manage with their resources.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-hyperwrite-compares-to-other-paths-small-teams-consider" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How HyperWrite Compares to Other Paths Small Teams Consider
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
              <h2 id="how-hyperwrite-compares-to-other-paths-small-teams-consider-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How HyperWrite Compares to Other Paths Small Teams Consider
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
