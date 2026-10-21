import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A small marketing team in Miami-Dade meets on Monday, ready to map out the coming week. The whiteboard
        fills with ideas, but by the end of the hour, nothing sticks. Someone opens a spreadsheet of keywords,
        most of them copied from bigger competitors. Assignments go out on faith: &quot;Just get something
        published.&quot; By Friday, half the team is still staring at blank screens, rewriting introductions
        or hunting for topics that might move the needle. The following week, they check the numbers and see
        what they see every month: ninety percent of their work gets buried on page three, never seen by a
        single customer, never driving a lead.</p>
      <p className="text-base text-white shadow-text pt-3">
        This cycle repeats because they are running on guesswork. Without&nbsp;<Link id={`tools-marketing-intelligent-content-planning-marketmuse-overview-intelligent-content-planning${idSuffix}`} href="/use-cases/marketing/content-creation-workflow/ai-content-planning" className="text-[#C83803] text-shadow-2xs text-shadow-white hover:underline">Intelligent Content Planning</Link>, their
        best ideas are drowned out by larger brands with bigger budgets and deeper data. They waste hours
        chasing high-competition keywords, never realizing their site has no chance at those rankings. They
        cannot see which topics they already own or where their rivals left open ground. They do not know
        which blog posts are quietly hurting their visibility, or which subjects could win them quick results.
        The spreadsheet grows, the effort piles up, but the business gets nothing in return. It is not a lack
        of effort holding them back, it is the absence of a system that tells them what to write, when, and
        why.</p>
      <p className="text-base text-white shadow-text pt-3">
        Intelligent Content Planning flips this script. Instead of hunches and manual audits, it uses AI to
        map your entire content footprint, analyze what is working and what is wasted, and pinpoint the real
        opportunities your team can win. You get a blueprint that shows which topics build your authority,
        which gaps your competitors missed, and which pieces should be repurposed or retired. The guesswork
        disappears. Every campaign starts with data, every brief is built on what your audience and Google
        actually want, and every piece you publish is part of a system that grows your results over time.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in West Palm, Broward, and Miami-Dade, this is the difference between staying
        invisible and building a presence that customers trust. The right content plan does not just save
        time: it shifts your marketing from a cost center to a driver of leads and sales. That is what
        Intelligent Content Planning delivers.</p>
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
