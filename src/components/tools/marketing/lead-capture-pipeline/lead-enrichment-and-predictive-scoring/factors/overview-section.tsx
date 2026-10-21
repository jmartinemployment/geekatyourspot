import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Picture a small marketing team in West Palm Beach. Every week, they spend hours building lists,
        sending cold emails, and chasing leads that never reply. They put real money into ads and content, but
        when they check the results, all they see is a spike in website visits, no names, no companies, just
        anonymous numbers. Meanwhile, the few people who do fill out a contact form are often a poor fit or
        not ready to buy. The leads with real buying intent, the ones who browse their pricing page, check out
        case studies, or return again and again, stay hidden, never surfacing in the pipeline. The team is
        left guessing which campaigns matter, which leads deserve a call, and which accounts are already
        slipping away to more proactive competitors.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is the silent leak that drains most small business marketing budgets in Miami-Dade, Broward and
        Palm Beach every month: nearly all of their high-intent website traffic leaves without a trace. In
        fact, up to 98% of warm, in-market visitors never identify themselves. Sales teams waste 80% of their
        time cold-calling or emailing contacts who have shown zero interest, while the buyers who are actually
        ready to talk go unnoticed. The result is a cycle of missed revenue and wasted effort, with no clear
        way to tell which marketing and sales activities are working and which are just noise.</p>
      <p className="text-base text-white shadow-text pt-3">
        <Link id={`tools-marketing-lead-enrichment-factors-overview-lead-enrichment${idSuffix}`} href="/use-cases/marketing/lead-capture-pipeline/lead-enrichment-predictive-scoring" className="text-[#C83803] hover:underline">Lead Enrichment & Predictive Scoring</Link>&nbsp;changes that equation. Instead of chasing cold lists, these
        systems use AI to spot, score and surface the hottest accounts in real time. They pull together
        website activity, firmographics, and live intent signals from every channel, chat, voice, ads, and
        email, to build a complete picture of every visitor. The pipeline is no longer a black box. Now, your
        team can see which companies are browsing, what those buyers care about, and when they are most likely
        to buy. Sales teams in South Florida can act on real buying signals, marketing teams can double down
        on what works, and the business stops leaving money on the table.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in this region, this is more than a technical upgrade. It’s the difference
        between guessing and knowing, between chasing ghosts and closing real deals. Geek @ Your Spot LLC brings
        these Lead Capture Pipeline solutions, smart chatbots, AI scoring, and always-on voice assistants,
        into your daily workflow, so your best leads never slip through the cracks again.</p>
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
