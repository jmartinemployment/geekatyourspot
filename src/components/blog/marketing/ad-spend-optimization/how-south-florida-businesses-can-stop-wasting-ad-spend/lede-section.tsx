import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why does your ad spend keep shooting up without delivering more quality leads, even after you try to scale
        your campaigns with <Link id={`blog-marketing-measured-lead-generation-lede-measured-lead-generation${idSuffix}`} href="/use-cases/marketing/ad-spend-optimization/ai-measured-lead-generation" className="text-[#C83803] hover:underline">Measured
        Lead Generation</Link>? The answer is simple: <GlossaryLink slug="cost-per-lead">cost-per-lead</GlossaryLink> spikes
        and content bottlenecks are built into the way most South Florida small businesses run their lead gen. When
        you move past basic local ads and start aiming for steady monthly sales, algorithms react to higher budgets
        by driving up your costs, not your sales. Your team struggles to keep up with the demand for fresh ad
        creative, so performance drops faster than you can respond.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is not just a budget problem. As your daily spend creeps from $16 to $50, you hit a wall: cost per lead
        jumps, and your profit margins thin out (<a id={`blog-marketing-measured-lead-generation-lede-source-wrench-ai${idSuffix}`} href="https://wrench.ai/products/sneak-peek-of-the-wrench.ai-platform" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Wrench</a>,
        as of Oct 24, 2026). Manual content updates cannot keep up with what Facebook and Google demand to avoid <GlossaryLink slug="ad-fatigue">ad
        fatigue</GlossaryLink>. You cannot write or maintain the scripts that would protect you from sudden
        competitor bid spikes or pause campaigns when your <GlossaryLink slug="landing-page">landing page</GlossaryLink> breaks.
        Meanwhile, your customer data sits in messy spreadsheets or a <GlossaryLink slug="crm">CRM</GlossaryLink> that
        does not sync with your ad accounts, so you keep showing top-funnel ads to cold leads or even past buyers
        who should be excluded. The result: wasted spend, rising frustration, and no reliable pipeline.</p>
      <p className="text-base text-white shadow-text pt-3">
        What is at stake? If you do not solve these operational bottlenecks, your business will not just lose money
        on inefficient lead gen. You will lose growth momentum and cede market opportunity to competitors who
        automate creative, data sync, and budget controls. Every week you wait, the compounding effect of wasted
        budget and missed leads gets worse. Measured Lead Generation is about putting process and technology in
        place so you can finally scale without burning through your margins.</p>
      <p className="text-base text-white shadow-text pt-3">
        This page is for small businesses in Miami-Dade, Broward, and West Palm Beach counties that are ready to
        move from manual, unpredictable marketing to an automated, data-driven <GlossaryLink slug="lead-generation">lead
        generation</GlossaryLink> system. You get a clear, four-phase plan: align your business goals, assess your
        real <GlossaryLink slug="data-quality">data quality</GlossaryLink>, select the right stack for your budget,
        and launch with a pilot that shows results without putting your existing sales pipeline at risk.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-cost-spikes-and-creative-bottlenecks-hold-back-your-lead-generation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How cost spikes and creative bottlenecks hold back your lead generation
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
              <h2 id="how-cost-spikes-and-creative-bottlenecks-hold-back-your-lead-generation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How cost spikes and creative bottlenecks hold back your lead generation
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
