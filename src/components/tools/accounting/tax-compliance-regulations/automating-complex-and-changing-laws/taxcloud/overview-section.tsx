import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Imagine running a bustling online store in Miami, with sales skyrocketing beyond Florida&#39;s borders.
        Your weekends, however, are spent in a labyrinth of state tax portals, each demanding its own format and
        compliance rules. You&#39;re exhausted, chasing tax changes that seem to spring up overnight, leaving no
        time for growth or innovation. This is the reality for many businesses facing the complexity of changing
        tax laws. The burden of manual compliance stretches resources thin, turning a simple task into a costly
        ordeal.</p>
      <p className="text-md text-white shadow-text pt-3">
        As your business expands, so does the complexity of
        managing&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>&nbsp;across states. Each
        jurisdiction not only has its own set of rules, but these rules are in constant flux. Missing a single
        update can lead to penalties or audits, putting your hard-earned profits at risk. For small businesses
        in South Florida, the challenge of navigating these&nbsp;<Link id={`tools-accounting-complex-changing-laws-taxcloud-overview-complex-changing-laws${idSuffix}`} href="/use-cases/accounting/tax-compliance-regulations/ai-tax-law" className="text-[#C83803] hover:underline">complex and changing laws</Link>&nbsp;without automated support
        becomes a significant barrier to growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is where an automated solution like TaxCloud can make a difference. By integrating tax compliance
        into your existing systems, it reduces the overhead of manual filing and tracks regulatory changes in
        real-time. TaxCloud handles the intricate web of state-specific requirements, so you can focus on what
        you do best: growing your business. With its ability to seamlessly manage tax across thousands of
        jurisdictions, TaxCloud transforms the daunting task of compliance into a streamlined process.</p>
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
