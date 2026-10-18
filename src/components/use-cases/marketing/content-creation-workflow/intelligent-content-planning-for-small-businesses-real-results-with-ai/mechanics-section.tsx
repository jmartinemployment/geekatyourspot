import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function MechanicsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Intelligent Content Planning for a small business is not just a new tool or dashboard. It is a
        repeatable, end-to-end system that turns a one-person marketing desk into a data-driven engine. The
        whole point is to stop guessing at content topics and start working from a ranked, live list of what
        your audience and the search engines actually care about, and where you can win without a national
        brand’s budget.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process starts with a clear business objective. That means sitting with the team, often just one
        or two people, and naming the bottleneck. Maybe it is wasted hours searching for topic ideas, or
        burned budget on blogs that never rank in Miami. The goal is concrete: more leads, more visibility,
        less churn, or a calendar that does not slip every week. This is where the first phase of the
        methodology comes in: aligning on outcomes that matter, not just output for its own sake.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next phase is&nbsp;<GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">data quality</GlossaryLink>&nbsp;assessment.
        Here, the workflow pulls in real search data, not a generic keyword dump. The key move is integrating
        a lightweight AI search listening tool, something that can scrape live behaviors and surface the
        hidden “easy win” topics your competitors missed. This is not a manual export from Google Search
        Console or a one-off spreadsheet. It is a system that keeps feeding new signals into your plan, so you
        are never working from stale data.&nbsp;<Link id="use-cases-marketing-intelligent-content-planning-mechanics-marketmuse" href="/tools/marketing/content-creation-workflow/intelligent-content-planning/marketmuse" className="text-[#0B162A] hover:underline">MarketMuse</Link>&nbsp;is critical at this stage: it maps your existing content
        against what is actually working for competitors, highlights where your site already has authority,
        and points to the gaps that are low competition but high value. Instead of chasing after high-volume
        keywords, your team gets a personalized difficulty score and a clear map of what to publish next.</p>
      <p className="text-md text-white shadow-text pt-3">
        With the data mapped and the gaps identified, you move to tech selection and architecture. The right
        tools slide into your daily workflow, not the other way around. For many South Florida teams, this
        means
        plugging&nbsp;<Link id="use-cases-marketing-intelligent-content-planning-mechanics-hyperwrite" href="/tools/marketing/content-creation-workflow/intelligent-content-planning/hyperwriteai" className="text-[#0B162A] hover:underline">HyperWrite</Link>&nbsp;into
        the browser, right where your team drafts emails, blog posts, and landing pages. HyperWrite learns
        your brand’s tone and can draft, rewrite, or ideate entire sections in your own style. This is not
        just for speed, it plugs the focus leaks and context switching that kill small-team productivity. When
        the workflow hits social
        media,&nbsp;<Link id="use-cases-marketing-intelligent-content-planning-mechanics-hootsuite" href="/tools/marketing/content-creation-workflow/intelligent-content-planning/hootsuite" className="text-[#0B162A] hover:underline">Hootsuite</Link>&nbsp;takes
        over, listening for trending topics and audience sentiment, and generating post ideas, captions, and
        images that match your
        guidelines.&nbsp;<Link id="use-cases-marketing-intelligent-content-planning-mechanics-scalenut" href="/tools/marketing/content-creation-workflow/intelligent-content-planning/scalenut" className="text-[#0B162A] hover:underline">Scalenut</Link>&nbsp;comes
        in where cross-channel execution matters. It automates the build-out of clusters, deep, interconnected
        webs of content that signal authority to both Google and AI engines. It also tracks your citation
        share on platforms like ChatGPT, so you see in real time whether your brand is becoming the answer,
        not just another search result.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the plan is set and the architecture is in place, the final phase is pilot implementation. Here,
        you do not rip out your existing system. Instead, you launch a pilot, maybe just one campaign or one
        landing page cluster. The team runs smoke tests, checks that the AI-generated drafts align with your
        voice, and validates that the topics actually move the metrics you set in phase
        one.&nbsp;<Link id="use-cases-marketing-intelligent-content-planning-mechanics-semrush" href="/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush" className="text-[#0B162A] hover:underline">Semrush</Link>&nbsp;is
        the tool that closes the loop: it benchmarks your traffic, tracks which topics are gaining ground, and
        feeds performance data back into the planning cycle. If a blog post or social campaign under-delivers,
        the system flags it for review, not just as a poor performer but as a learning point for the next
        cycle.</p>
      <p className="text-md text-white shadow-text pt-3">
        The entire process is built to scale with small teams, no headcount, no custom IT. It is a closed
        loop: business goals set the plan, live data finds the gaps, AI tools plug in where work happens, and
        results are validated and fed back. The system is always learning and always getting sharper. For a
        marketing coordinator in Miami who has never touched a&nbsp;<GlossaryLink slug="data-model" className="text-[#0B162A] hover:underline">data
        model</GlossaryLink>, everything runs from the same browser tabs and dashboards they already use.
        Within weeks, the team moves from guessing and rewriting to publishing targeted, competitive content
        on schedule, and with a clear line to results.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-intelligent-content-planning-works-the-real-world-mechanics-step-by-step" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Intelligent Content Planning Works: The Real-World Mechanics, Step by Step
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
              <h2 id="how-intelligent-content-planning-works-the-real-world-mechanics-step-by-step" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Intelligent Content Planning Works: The Real-World Mechanics, Step by Step
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
