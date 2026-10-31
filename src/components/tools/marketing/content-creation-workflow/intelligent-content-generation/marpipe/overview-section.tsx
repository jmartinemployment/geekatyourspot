import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why does trying to scale digital advertising with manual workflows always seem to backfire for small
        businesses spending $16 to $50 a day, and why does <GlossaryLink slug="cost-per-lead">cost-per-lead</GlossaryLink> spike
        just when you need results (<a id={`tools-marketing-measured-lead-generation-marpipe-overview-source-marpipe-com${idSuffix}`} href="https://www.marpipe.com/blog/ad-testing-the-ultimate-media-budget-hack" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Marpipe</a>,
        as of Oct 24, 2026)? As soon as a business in West Palm Beach, Broward or Miami-Dade pushes for a steady
        sales pipeline, manual processes for creative production and campaign management hit their limit. The real
        barrier is not lack of effort or budget, but the operational ceiling created by manual ad creation and
        scattered data. <Link id={`tools-marketing-measured-lead-generation-marpipe-overview-measured-lead-generation${idSuffix}`} href="/use-cases/marketing/content-creation-workflow/ai-seo-content-generator" className="text-[#C83803] hover:underline">Intelligent Content Generation</Link> exposes this hard fact: beyond basic local reach, manual ad workflows cause costs to
        rise fast, creative to stall out, and sales predictability to disappear.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every dollar you put into ads is at risk when you cannot keep up with the pace of change. Creative
        bottlenecks force you to reuse tired images or copy, so ads wear out before you can replace them. As a
        result, your cost per lead surges, and your budget now pays for <GlossaryLink slug="impressions">impressions</GlossaryLink> that
        bring in fewer real prospects. Worse, if your customer data lives in old spreadsheets or siloed <GlossaryLink slug="crm">CRMs</GlossaryLink>,
        you end up wasting money on people who have already ignored your offer, while missing real buyers who need a
        different message. The scaling trap is real: try to increase spend, and the algorithms often break, sending
        costs up and margins down.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual campaign management does not just slow you down, it exposes you to the risk of overspending and
        underdelivering. Without the scripting talent to automate bidding rules or pause broken ads, your campaigns
        are open to sudden cost spikes from competitors or technical issues. Each delay to launch a new test or
        creative variant is time lost and budget wasted. At this stage, the process itself becomes the problem, not
        just the results. For a small business in South Florida, these limits mean you cannot build the predictable,
        low-variance pipeline you need to grow.</p>
      <p className="text-base text-white shadow-text pt-3">
        Measured Lead Generation, as structured by Geek @ Your Spot, is for small teams ready to break out of this
        loop. It replaces manual guesswork with consistent, data-driven lead capture, so every dollar spent brings
        in more <GlossaryLink slug="qualified-lead">qualified leads</GlossaryLink> and fewer costly surprises. This
        approach is built for local businesses in West Palm Beach, Broward, and Miami-Dade who want to scale
        efficiently and stay in control of their marketing spend.</p>
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
