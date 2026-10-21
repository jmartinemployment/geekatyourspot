import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every week, small marketing teams across South Florida spend late nights staring at blank screens,
        trying to force out another blog post or email campaign. The inbox is filling up with local leads
        needing a reply, but each message takes ten minutes to type, and every answer is built from scratch.
        Team members bounce between browser tabs, Google Docs for a draft, Gmail for a response, a spreadsheet
        for keywords, losing their train of thought and doubling the time to finish even routine tasks. The
        process is slow, repetitive, and demoralizing. By the time a piece finally goes live, it lands with a
        thud: barely any traffic, no engagement, and no sales. Ninety percent of what gets published never
        gets seen, let alone converts. Meanwhile, the backlog grows, and the team feels trapped in a cycle
        that never ends.</p>
      <p className="text-md text-white shadow-text pt-3">
        The cost is real. Hours lost to rewriting the same email. Frustration from brainstorming sessions that
        end in arguments and half-finished ideas. Time wasted copying content into different apps just to keep
        things moving. These are not just minor inconveniences, they are the reason why campaigns stall,
        deadlines slip, and marketing spend delivers zero measurable return. Without an intelligent process,&nbsp;<Link id={`tools-marketing-intelligent-content-planning-hyperwriteai-overview-intelligent-content-planning${idSuffix}`} href="/use-cases/marketing/content-creation-workflow/ai-content-planning" className="text-[#C83803] hover:underline">intelligent content planning</Link>&nbsp;becomes a treadmill: the work never stops, but the results do. For small
        businesses in West Palm Beach, Broward, and Miami-Dade, the stakes are higher because every hour and
        dollar counts.</p>
      <p className="text-md text-white shadow-text pt-3">
        Intelligent Content Planning flips this problem on its head. Instead of guessing what will work, teams
        use predictive automation to map out high-converting topics, draft messages in their own brand voice,
        and schedule campaigns across every channel, all before anyone starts writing. Routine replies are
        handled in seconds, not minutes. Approvals are automated, so nothing sits in limbo waiting for a
        manager’s signoff. One strong piece of content becomes a dozen: a blog post, email sequence, social
        captions, and more, all tailored for the right audience. The team gets back hours each week and sees
        results that actually move the needle, more leads, higher engagement, and real sales.</p>
      <p className="text-md text-white shadow-text pt-3">
        For local small businesses, this is not a luxury, it is the difference between staying stuck and
        scaling up. Geek @ Your Spot LLC’s Intelligent Content Planning method is built for the realities of South
        Florida’s small teams. It replaces burnout with a repeatable, data-driven workflow that delivers
        content people actually find and respond to. If your team is tired of working harder for less, it is
        time to work smarter with a system that is proven to save time, cut costs, and deliver visible
        results.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
