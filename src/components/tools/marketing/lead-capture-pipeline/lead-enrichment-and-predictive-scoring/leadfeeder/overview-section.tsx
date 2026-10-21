import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Every week, a small business owner in Miami-Dade spends hours calling companies that never return a
        message. The sales team works late, following up on stale lists of names scraped from trade shows or
        downloaded from outdated databases. Meanwhile, the company’s own website sees a steady flow of visits
        from local professionals, accountants, medical practices, other service firms, who click through
        pricing pages, case studies, and contact forms. Nearly all of them leave without a trace, never
        filling out a form or picking up the phone. No one on the team knows who they were or how close they
        might have been to buying.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is the real cost of relying on cold outreach and generic lead lists. Most small businesses spend
        nearly all their marketing time chasing contacts who have zero intent to buy, while the handful of
        real prospects, the ones who are actively comparing, evaluating, and ready to talk, are invisible to
        the sales team. In practice, about 98% of high-intent website visitors remain anonymous. That means
        almost every warm lead disappears before anyone can follow up, and the team is left with a pipeline
        full of dead ends. The wasted effort is visible in missed revenue, rising ad spend, and the
        frustration of seeing competitors win accounts that were already on your site.</p>
      <p className="text-base text-white shadow-text pt-3">
        <Link id={`tools-marketing-lead-enrichment-leadfeeder-overview-lead-enrichment${idSuffix}`} href="/use-cases/marketing/lead-capture-pipeline/lead-enrichment-predictive-scoring" className="text-[#C83803] hover:underline">Lead Enrichment & Predictive Scoring</Link>&nbsp;directly address this problem. Instead of waiting for a
        prospect to fill out a form or call, these systems identify which companies are visiting your site,
        what they look at, and how engaged they are, without asking them for anything. They pull in company
        details, score intent based on real behavior, and send instant alerts when a high-fit local business
        shows signs of being in-market. The result: sales and marketing teams stop guessing and start
        prioritizing the accounts that are most likely to buy, all with less wasted time and effort. For small
        businesses in South Florida, this means fewer cold calls, more warm conversations, and a pipeline that
        reflects real demand, not just wishful thinking.</p>
      <p className="text-base text-white shadow-text pt-3">
        If your team is tired of chasing leads that go nowhere or missing the ones already on your doorstep,
        this is what changes the game. The rest of this page shows how South Florida companies use AI-powered
        lead enrichment, predictive scoring, smart chatbots, and voice assistants to turn anonymous traffic
        into real sales opportunities, without adding headcount or disrupting your day-to-day workflow.</p>
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
