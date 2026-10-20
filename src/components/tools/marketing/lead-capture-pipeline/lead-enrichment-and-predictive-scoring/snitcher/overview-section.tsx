import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Picture this: a local B2B service firm in Miami-Dade watches as dozens of businesses visit their
        website every day. The traffic is steady, the analytics look promising, but the sales team is left
        staring at a list of anonymous visits and guessing games. No one fills out a form. Phones stay silent.
        The team knows that decision-makers are coming and going, but they have no clue which company is
        actually interested, who to contact, or when to act. By the time they try to follow up, those warm
        leads are already talking to a competitor down the street.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the reality for most small businesses in Miami-Dade, Broward, and West Palm Beach. Time and cash are tight.
        Eighty percent of the effort goes into chasing dead or cold leads, while nearly all the best-fit
        website visitors slip away without a trace. The result? Sales teams waste their days working stale
        lists, while high-intent prospects, those who actually read your pricing page or dig into your case
        studies, leave forever, never even showing up in
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>. The cost is real: lost deals, wasted ad spend,
        and a pipeline that never quite fills.</p>
      <p className="text-md text-white shadow-text pt-3">
        A&nbsp;<Link id={`tools-marketing-lead-enrichment-snitcher-overview-lead-enrichment${idSuffix}`} href="/use-cases/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-smarter-lead-capture-for-south-florida" className="text-[#C83803] hover:underline">Lead Enrichment & Predictive Scoring</Link>&nbsp;solution changes this picture. Instead of treating every
        website visitor as a mystery, an AI-powered pipeline identifies which companies are actually on your
        site, enriches each visit with company details, and uses real behaviors (not just clicks) to score who
        is most likely to buy. The sales team gets alerts when a target account hits the right page. Marketing
        knows where to focus budget. No more chasing ghosts. The right prospects move to the top, and your
        team spends time where it matters.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses across South Florida, this means fewer wasted hours, lower acquisition costs, and
        more closed deals, all without adding another person to the payroll. Lead Enrichment and Predictive
        Scoring gives you the visibility and control that big companies take for granted, now tuned for your
        size and your market. The old way, guessing who’s interested and hoping they’ll raise their hand, is
        gone. The new way: know who’s ready to buy, and reach them before anyone else does.</p>
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
