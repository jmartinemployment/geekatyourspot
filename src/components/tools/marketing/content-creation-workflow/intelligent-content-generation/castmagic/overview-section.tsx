import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A small business owner in Miami-Dade records a customer call to capture fresh insights for next
        month’s marketing push. The recording sits untouched in a cloud folder for weeks. Across town, a
        manager saves hours of training webinars but never gets around to turning them into blog posts or
        social updates. The intent is there, but these assets rarely see daylight. Instead, they become
        digital clutter, while the team scrambles to write new content from scratch or pays outside agencies
        for results that rarely fit their brand or budget.</p>
      <p className="text-base text-white shadow-text pt-3">
        This isn’t just an occasional missed opportunity. It’s a routine, expensive problem. Most small teams
        can’t afford to hire a full-time creative staff or outsource enough to keep up with larger
        competitors. They end up stuck in a cycle: staring at blank screens, falling behind on updates, and
        seeing their social feeds go quiet. Even when they do produce original work, customer interviews,
        expert webinars, or internal training sessions, those recordings pile up in storage, unsearched and
        unused. The result is a steady drain on time, energy, and cash flow, with little to show for it except
        a few scattered posts and a lot of frustration.</p>
      <p className="text-base text-white shadow-text pt-3">
        The reality for small businesses in West Palm Beach, Broward, and Miami-Dade is that the traditional
        approach to content creation is broken. It burns valuable hours, stretches thin resources, and almost
        always leaves money on the table by letting high-value information leak away.&nbsp;<Link id={`tools-marketing-intelligent-content-generation-castmagic-overview-intelligent-content-generation${idSuffix}`} href="/use-cases/marketing/content-creation-workflow/ai-seo-content-generator" className="text-[#C83803] hover:underline">Intelligent Content Generation</Link>&nbsp;changes this by turning every recorded conversation, webinar, or meeting into a stream of
        ready-to-publish assets, blog posts, social updates, email campaigns, and more, without adding extra
        headcount or breaking the budget. For a local team with a backlog of untapped content, this is how you
        finally match the output of bigger players and keep your message in front of customers all year.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot LLC specializes in helping South Florida small businesses automate this entire workflow.
        With the right system, you can stop letting your best material gather dust and start building a real,
        consistent digital presence, without the blank page, the agency bills, or the endless wait for new
        leads.</p>
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
