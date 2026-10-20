import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function KeyFactorsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The difference between an Intelligent Content Planning rollout that delivers and one that fizzles is
        not the tool, the budget, or even the initial excitement. It is the groundwork and discipline put into
        the setup, and the real-world fit with how your team actually works. The most common reason these
        projects stall is a disconnect between the promise of automation and the day-to-day reality of small
        business marketing in South Florida.</p>
      <p className="text-md text-white shadow-text pt-3">
        First, the plan breaks down when teams skip business objectives alignment. If the only goal is “more
        content” or “try AI,” the approach loses steam fast. In practice, the teams that get lasting results
        always start by naming the pain: Are blog posts not ranking? Is the team stuck rewriting emails? Is
        social media inconsistent? The solution is to tie every workflow change to a business result the owner
        or manager can see and measure. This keeps everyone focused when the novelty wears off and the first
        rough drafts hit the calendar.</p>
      <p className="text-md text-white shadow-text pt-3">
        Second, implementation fails when&nbsp;data
        quality&nbsp;is ignored or left for later. If your system is still running on scattered
        spreadsheets, half-filled fields, or missing tracking tags, the AI will only amplify the mess. Rushed
        deployments that treat data as “good enough” end up with content plans built on noise, not insight.
        The teams that win take the time to validate and clean their data before launching anything. That
        means running a structured data assessment, checking for missing values, duplicate records, and
        inconsistent formats. MarketMuse’s workflow is built for this: it audits your content inventory,
        scores every page for authority, and exposes thin spots and cannibalization risks before you write a
        word.</p>
      <p className="text-md text-white shadow-text pt-3">
        Third, too many rollouts stall at the tool stage. The mistake is picking a new AI platform and
        expecting it to change habits on its own. A tool only works if it lives where your team already works.
        HyperWrite, for example, wins because it sits inside your browser tabs, learning your team’s style and
        plugging into live drafting, not asking you to learn a new app. Hootsuite works because it pulls
        real-time trends and&nbsp;<GlossaryLink slug="sentiment-analysis" className="text-[#0B162A] hover:underline">sentiment
        analysis</GlossaryLink>&nbsp;into the same dashboard your social coordinator uses, not a separate
        analytics silo. Scalenut’s agent model is the fix for the “analysis paralysis” that kills momentum. It
        automates execution by routing tasks and publishing in parallel, so the bottleneck is never a single
        overwhelmed staffer.</p>
      <p className="text-md text-white shadow-text pt-3">
        Fourth, the rollout fails when teams treat implementation as a one-off event instead of a pilot
        with&nbsp;<GlossaryLink slug="feedback-loop" className="text-[#0B162A] hover:underline">feedback loops</GlossaryLink>. The best implementations
        launch a “mini version” in a sandbox, measure what works, and adjust before rolling out everywhere.
        Semrush is the engine behind this loop: it tracks keyword wins, traffic shifts, and conversion data,
        feeding those insights back into the plan. When something underperforms, the workflow adapts, not by
        blaming the tool, but by tweaking the data, the plan, or the content structure.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, teams stall when they underestimate the change management piece. Even with perfect tools and
        clean data, people resist new workflows that disrupt their habits. The fix is hands-on support: walk
        through the changes, show quick wins, and explain why the new workflow is better for their daily
        reality. The most successful rollouts start with the end users, the marketing coordinator, the owner,
        the person approving social posts, and build the system around their actual workflow, not an idealized
        one.</p>
      <p className="text-md text-white shadow-text pt-3">
        The bottom line: a successful Intelligent Content Planning rollout in a small South Florida business
        is not about finding the “best” AI tool. It is about matching the process to the people, data, and
        goals you already have, and building a system that adapts as those change. The teams that get there do
        not just install software, they set goals, clean their data, fit tools to real workflows, and keep
        adapting. That is how you move from a stalled project to a system that drives results month after
        month.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-some-content-planning-implementations-stall-and-how-to-avoid-it" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Some Content Planning Implementations Stall, and How to Avoid It
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-some-content-planning-implementations-stall-and-how-to-avoid-it-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Some Content Planning Implementations Stall, and How to Avoid It
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
