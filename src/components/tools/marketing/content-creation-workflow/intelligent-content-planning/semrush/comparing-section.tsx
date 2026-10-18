import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A small business owner in Miami-Dade, Broward, or West Palm Beach who is evaluating content planning
        tools is comparing more than just software. The real question is whether Semrush solves the core
        problems that slow their team down, guesswork, wasted hours, and content that never gets seen, better
        than the alternatives. The most common adjacent approaches are: manual content planning (spreadsheets
        and brainstorming), single-purpose AI writers, and all-in-one platforms that promise automation but
        often deliver generic output. Each has tradeoffs that show up in the results and the weekly workload.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual planning is still the default for many local businesses. Teams spend hours each week trying to
        predict what their audience wants, pulling keyword lists from free tools, and debating what topics
        might work. This approach is cheap on paper but expensive in time and opportunity cost. Most content
        never ranks, and the cycle repeats as teams chase the next idea without real data. There is no system
        for surfacing low-competition topics or tracking why traffic drops on a specific day. When a post
        flops, there is no&nbsp;<GlossaryLink slug="feedback-loop">feedback loop</GlossaryLink>, just more
        guessing. This is the treadmill that burns teams out and keeps businesses invisible online.</p>
      <p className="text-md text-white shadow-text pt-3">
        Single-purpose AI writers are everywhere now. They promise to generate a blog post or social caption
        in seconds, often for a low monthly fee. But these tools do not solve the planning problem, they only
        speed up the writing step. They do not surface what your South Florida audience is searching for, nor
        do they track local search intent or competitive gaps. The output often sounds generic, and adapting
        it for multiple channels still takes manual work. Brand voice and tone are inconsistent, and the team
        is left stitching together content for each platform by hand. Without integrated data, these tools can
        actually multiply editing time and confusion.</p>
      <p className="text-md text-white shadow-text pt-3">
        Some platforms claim to offer end-to-end automation. In practice, they often bundle basic AI writing
        with simple scheduling or analytics. They may help publish across channels, but the workflow is still
        fragmented: research happens in one place, writing in another, and performance tracking in a third.
        These tools rarely offer real-time recommendations as you write, or the ability to see exactly how
        your brand appears in AI-generated search answers across ChatGPT, Gemini, and Perplexity. The result
        is a patchwork process that still leaves teams guessing which topics to prioritize and how to adjust
        when traffic drops.</p>
      <p className="text-md text-white shadow-text pt-3">
        Semrush stands apart because it is built as a unified platform for both planning and execution,
        tailored for small local businesses. It combines a massive search intelligence database, over 26
        billion keywords, with tools that surface high-demand, low-competition topics specific to your market.
        Instead of working from a blank screen, your team starts with a data-backed content blueprint. The
        platform&#39;s AI Article Generator creates full-length, optimized drafts modeled on what is already
        working in your space, and the Content Toolkit repurposes those drafts into emails, LinkedIn posts,
        and Google Business Profile updates in one step. This is not just automation; it is automation tied
        directly to what your audience is searching for today.</p>
      <p className="text-md text-white shadow-text pt-3">
        Where competitors stop at writing or scheduling, Semrush brings in live performance tracking and
        real-time recommendations. As you type, the platform flags visibility drops, suggests fixes, and keeps
        every channel updated with the latest brand tone and voice. Its AI Visibility Toolkit shows exactly
        how your brand is being described in AI answers, not just in Google search. This closes the loop
        between planning, creation, and measurement, no more guessing why traffic dropped or which competitor
        just gained ground. For a small team, this means fewer meetings, less manual editing, and a content
        calendar that is always grounded in real data.</p>
      <p className="text-md text-white shadow-text pt-3">
        The difference becomes clear on a Friday afternoon when the team reviews the week. With Semrush, they
        see which blog post drove new calls, which email got opened, and how their business is being
        recommended by AI search engines. They know which topics to double down on next week and which to
        retire. Competing tools may promise &quot;automation&quot; or &quot;AI-powered&quot; content, but only
        Semrush ties every step to real search demand and local visibility. For a small business that cannot
        afford to waste hours or budget, that is the difference between staying stuck and finally breaking
        through.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-semrush-stacks-up-against-other-content-planning-approaches" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Semrush Stacks Up Against Other Content Planning Approaches
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
              <h2 id="how-semrush-stacks-up-against-other-content-planning-approaches" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Semrush Stacks Up Against Other Content Planning Approaches
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
