import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A small business owner in Miami-Dade sits down after hours, ready to write a blog post that should
        have gone live last week. The blinking cursor on a blank screen is the only sign of progress after
        thirty minutes. Meanwhile, calls go unanswered, invoices pile up, and the social profiles that once
        promised local reach go silent for another day. This is not just about a missed post, it is missed
        revenue, missed leads, and a creeping sense that every other business in town is pulling ahead.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most small teams face the same roadblocks. The blank page is a time sink that rips hours from billing
        and client work. Outsourcing the job is no relief: agencies in Broward and West Palm Beach quote
        $2,000 a month or more for routine content, which chokes cash flow and leaves little room for error.
        The result is predictable. Content gets pushed down the list, and websites and social feeds turn into
        digital ghost towns. That means fewer local leads, less trust, and a brand that fades from the local
        search results, especially against bigger competitors with deeper pockets.</p>
      <p className="text-base text-white shadow-text pt-3">
        Even those who tough it out and publish on their own hit another wall. Generic, short-form posts do
        not earn local clicks or citations. Without deep, structured pillar content, your business struggles
        to rank in search, and AI-driven answer engines barely notice you exist. This is the hidden cost: your
        team works harder but never gets the digital visibility needed to grow. The manual approach is not
        just slow and draining, it is structurally outmatched by the scale and speed of&nbsp;<Link id={`tools-marketing-intelligent-content-generation-writesonic-overview-intelligent-content-generation${idSuffix}`} href="/use-cases/marketing/content-creation-workflow/ai-seo-content-generator" className="text-[#C83803] hover:underline">Intelligent Content Generation</Link>.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in South Florida, this is the trap: you need constant, high-quality content to
        win local clients, but the old way of doing it by hand or hiring out is too slow, too expensive, and
        too thin to compete. Intelligent Content Generation breaks this cycle by automating the research,
        writing, repurposing, and scheduling of content, so you stay visible, credible, and ahead of the local
        pack without adding headcount or blowing your budget. The next sections show what actually changes
        when you switch from manual to AI-assisted workflows, and how each step in the process is finally
        built around the reality of small teams.</p>
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
