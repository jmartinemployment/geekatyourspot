import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LeadScoringSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        <Link id={`use-cases-marketing-marketing-automation-platforms-lead-scoring-pillar${idSuffix}`} href="/use-cases/marketing/lead-capture-pipeline/ai-lead-enrichment-scoring" className="text-[#C83803] hover:underline">AI Lead Enrichment &amp; Predictive Scoring</Link> is the fourth job and the one that closes the loop. Enrichment fills in what a form did not ask: company, role, size, and the pages a visitor read before they ever gave an address. Scoring ranks the enriched contacts by how likely they are to buy, using <GlossaryLink slug="intent-data">intent data</GlossaryLink> from your site and from the email activity above. The result is a short list for the owner or the salesperson, and a feed back to the content plan about which topics the best leads actually read.</p>
      <p className="text-base text-white shadow-text pt-3">
        Five tools are reviewed. <Link id={`use-cases-marketing-marketing-automation-platforms-lead-scoring-apollo${idSuffix}`} href="/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo" className="text-[#C83803] hover:underline">Apollo</Link> and <Link id={`use-cases-marketing-marketing-automation-platforms-lead-scoring-lusha${idSuffix}`} href="/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/lusha" className="text-[#C83803] hover:underline">Lusha</Link> are contact databases first, and their value is the enrichment: they tell you who a visitor is and how to reach them. <Link id={`use-cases-marketing-marketing-automation-platforms-lead-scoring-leadfeeder${idSuffix}`} href="/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/leadfeeder" className="text-[#C83803] hover:underline">Leadfeeder</Link> and <Link id={`use-cases-marketing-marketing-automation-platforms-lead-scoring-snitcher${idSuffix}`} href="/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/snitcher" className="text-[#C83803] hover:underline">Snitcher</Link> identify the companies behind anonymous website visits, which is the data a score needs and a form never collects. <Link id={`use-cases-marketing-marketing-automation-platforms-lead-scoring-factors${idSuffix}`} href="/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/factors" className="text-[#C83803] hover:underline">Factors</Link> joins website, ad, and CRM activity into one timeline per account and scores from the whole of it. The pillar explains which of those you need first, and the reviews say how much of each tool's promise survives at a plan with a few hundred contacts a month.</p>
      <p className="text-base text-white shadow-text pt-3">
        Scoring is last for a reason. A score built on nothing but a form submission is a guess with a number on it. A score built on which emails a contact opened, which pages they read, and what the enrichment says about their company is a reason to call. That is why the loop runs in this order, and why the four pillars are one subject rather than four.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="ai-lead-enrichment-and-predictive-scoring-ranks-who-to-call" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                AI Lead Enrichment and Predictive Scoring Ranks Who to Call
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
              <h2 id="ai-lead-enrichment-and-predictive-scoring-ranks-who-to-call-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                AI Lead Enrichment and Predictive Scoring Ranks Who to Call
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
