import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        You know the feeling. It is Monday morning in a small West Palm Beach marketing office and your team
        is already behind. The editorial calendar is a patchwork of last-minute blog ideas and half-written
        social posts. Someone is stuck in a spreadsheet, trying to force a list of keywords into something
        that might rank. Nobody is sure which topics matter or if last week’s effort made any difference.
        Every new article starts with a blank page and a guessing game. The pressure to deliver keeps
        building, but results are invisible, your work rarely gets seen, let alone drives new leads.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is what happens when Intelligent Content Planning is missing from the workflow. The team spends
        hours in the weeds, debating what to write, patching together ideas from hunches and scattered notes.
        Even the best writers find themselves stuck rewriting the same content for different channels, or
        waiting on approvals that never seem to come. The end product: a pile of posts and emails that never
        rank, never get cited, and never move the business forward. The root problem is not effort or intent,
        it is the lack of a clear, data-driven plan that cuts through the noise and targets what your audience
        and the search engines actually value.</p>
      <p className="text-base text-white shadow-text pt-3">
        AI-assisted planning changes this for good. Instead of burning out on manual research and endless
        debates, your team can plug live search data and predictive topic mapping straight into their daily
        workflow. No more hunches, no more blank-page dread. The right tools surface exactly which topics your
        competitors missed and where you can win, then automatically generate the blueprints, drafts, and
        multi-channel assets you need. In a single step, you move from reactive scrambling to a repeatable,
        high-output system where every piece is built to convert, and you do it without adding headcount or
        expensive software overhead.</p>
      <p className="text-base text-white shadow-text pt-3">
        This page settles the question: how does a small business in Miami-Dade, Broward, or Palm Beach County
        turn a one-person marketing team into a data-driven powerhouse overnight? Here, you will see exactly
        why most content creation stalls, what it costs, and how an intelligent approach replaces wasted hours
        and invisible results with a clear, actionable plan. The rest of this guide walks through the local
        workflow, the tools that fit your budget, and the four-phase method our clients use to get real
        results, faster, with less risk, and no extra payroll.</p>
      <p className="text-base text-white shadow-text pt-3">
        Small business marketing teams in South Florida do not fail for lack of effort. They fail because the
        process is broken from the start. The old way leaves you chasing the latest trend, burning hours in
        brainstorms, and publishing content that lands with a thud. Ninety percent of what you write gets
        ignored, by both Google and your customers. Every manual step eats into your time, raises the risk of
        error, and drains budget that should fuel growth. And as your competitors automate, the gap only
        widens.</p>
      <p className="text-base text-white shadow-text pt-3">
        That is where an AI-powered content planning process delivers a clear edge. Instead of rebuilding the
        wheel each week, you get a workflow that starts with your business objectives, audits your data for
        quality, and selects the right mix of tools to automate drafting,&nbsp;<Link id={`use-cases-marketing-intelligent-content-planning-lede-ai-content-repurposing${idSuffix}`} href="/blog/marketing/content-creation-workflow/ai-content-repurposing" className="text-[#C83803] hover:underline">repurposing</Link>, scheduling, and
        approval. Each step is mapped to what matters for your market, not what a
        generic&nbsp;<GlossaryLink slug="saas">SaaS</GlossaryLink>&nbsp;tries to sell you. The result: your
        team goes from reactive, last-minute publishing to a predictable content engine that hits the right
        audience, on the right channels, every time.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot LLC specializes in this transition for small businesses across West Palm Beach, Broward,
        and Miami-Dade. Our four-phase method starts with your business goals, not a tool demo, and ends with
        a live pilot that proves the approach on your turf. We do not recommend platform markups or force new
        headcount. Instead, we integrate lightweight, affordable AI tools that plug into what you already use,
        Google Docs, Gmail, your CMS, and your analytics. That means no expensive rip-and-replace, no
        downtime, and no long learning curve.</p>
      <p className="text-base text-white shadow-text pt-3">
        Throughout this guide, we break down every step: aligning content output to business objectives,
        vetting your current&nbsp;<GlossaryLink slug="data-quality">data quality</GlossaryLink>&nbsp;(because
        bad data means bad results), choosing tools that let you automate the drudge work (from topic research
        to multi-channel repurposing), and running a real pilot so you see the results in your own numbers. If
        you are ready to stop guessing and start growing, this is where you begin.</p>
      <p className="text-base text-white shadow-text pt-3">For a shorter overview, read <Link id={`use-cases-marketing-intelligent-content-planning-lede-blog${idSuffix}`} href="/blog/marketing/content-creation-workflow/intelligent-content-planning-how-south-florida-can-save-hours-and-drive-more-sales" className="text-[#C83803] hover:underline">Content Planning That Saves Hours</Link> on our blog.</p>
      <p className="text-base text-white shadow-text pt-3">Content planning is the first stage of the <Link id={`use-cases-marketing-intelligent-content-planning-lede-content-creation${idSuffix}`} href="/use-cases/marketing/ai-content-marketing-platforms" className="text-[#C83803] hover:underline">Content Creation Workflow</Link>.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="breaking-the-cycle-of-content-chaos-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Breaking the Cycle of Content Chaos for Small Teams
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
              <h2 id="breaking-the-cycle-of-content-chaos-for-small-teams-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Breaking the Cycle of Content Chaos for Small Teams
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
