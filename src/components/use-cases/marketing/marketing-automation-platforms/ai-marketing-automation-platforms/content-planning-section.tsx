import Link from "next/link";

export default function ContentPlanningSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        <Link id={`use-cases-marketing-marketing-automation-platforms-content-planning-pillar${idSuffix}`} href="/use-cases/marketing/content-creation-workflow/ai-content-planning" className="text-[#0B162A] hover:underline">AI Content Planning</Link> is the first job: deciding which topics to cover, in what order, for which search terms and which readers, before anyone writes a word. The platform pulls keyword and competitor data, groups the terms into topics, scores each topic by how hard it is to rank and how much it is worth, and turns the winners into a calendar with a brief for each piece. The brief carries the target terms, the questions the page has to answer, and the pages it should link to. That brief is what makes the next job, generation, produce something usable rather than something generic.</p>
      <p className="text-base text-white shadow-text pt-3">
        Five tools cover this job on the site. <Link id={`use-cases-marketing-marketing-automation-platforms-content-planning-semrush${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush" className="text-[#0B162A] hover:underline">Semrush</Link> and <Link id={`use-cases-marketing-marketing-automation-platforms-content-planning-marketmuse${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-planning/marketmuse" className="text-[#0B162A] hover:underline">MarketMuse</Link> are research-first platforms that excel at the keyword and topic model and expect you to write elsewhere. <Link id={`use-cases-marketing-marketing-automation-platforms-content-planning-scalenut${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-planning/scalenut" className="text-[#0B162A] hover:underline">Scalenut</Link> and <Link id={`use-cases-marketing-marketing-automation-platforms-content-planning-hyperwrite${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-planning/hyperwriteai" className="text-[#0B162A] hover:underline">HyperWrite</Link> bundle planning with drafting, which suits a one-person marketing seat that wants fewer logins. <Link id={`use-cases-marketing-marketing-automation-platforms-content-planning-hootsuite${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-planning/hootsuite" className="text-[#0B162A] hover:underline">Hootsuite</Link> plans from the social calendar outward, and is the right pick when social is the main channel and the blog is secondary. Each review says what the plan a small business would buy actually includes, because the planning features vendors advertise are often on the tier above it.</p>
      <p className="text-base text-white shadow-text pt-3">
        Planning is the right place to start because it costs the least and tells you the most. If the platform cannot find enough search demand in your area to fill a calendar, you have learned that before paying for a writing tool. If it can, you now have the one artifact the rest of the loop depends on: a list of topics with a reason attached to each.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="ai-content-planning-decides-what-gets-written" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                AI Content Planning Decides What Gets Written
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="ai-content-planning-decides-what-gets-written-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                AI Content Planning Decides What Gets Written
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
