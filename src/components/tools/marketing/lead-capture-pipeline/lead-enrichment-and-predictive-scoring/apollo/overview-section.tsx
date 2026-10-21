import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Every week, small business owners in Miami-Dade, Broward and West Palm Beach sit down to review their
        sales pipeline, only to find the same pattern. The team spent hours manually searching for prospect
        emails, copying names from old spreadsheets, and sending cold messages that land nowhere. Most of the
        contacts are out-of-date, wrong for the business, or never reply. Meanwhile, the website logs show
        dozens of new visitors, but almost all of them leave without a trace. The phone does not ring. The
        inbox stays quiet. The team’s effort goes toward chasing cold or dead leads, while real buyers slip
        away without ever making contact.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is the reality for small businesses without a Lead Capture Pipeline built on&nbsp;<Link id={`tools-marketing-lead-enrichment-apollo-overview-lead-enrichment${idSuffix}`} href="/use-cases/marketing/lead-capture-pipeline/lead-enrichment-predictive-scoring" className="text-[#C83803] text-shadow-2xs text-shadow-white hover:underline">Lead Enrichment & Predictive Scoring</Link>. Owners know their best prospects are out there, but manual processes and
        incomplete data shut them out. Eight out of ten hours in sales and marketing get wasted on dead ends.
        Warm, high-intent website visitors, nearly every real opportunity, remain anonymous and unqualified,
        never reaching a sales conversation. The result is not just a slow pipeline, but a revenue gap that
        keeps the business from growing. Time and cash, the two most limited resources, drain away with little
        to show for it.</p>
      <p className="text-base text-white shadow-text pt-3">
        This page shows how a Lead Capture Pipeline using Lead Enrichment and Predictive Scoring flips that
        equation. By automating the capture of website leads, enriching every contact with verified data, and
        scoring each one against your best customer profile, you stop chasing cold lists and start working
        only the leads most likely to buy. Smart chatbots,
        AI-driven&nbsp;<GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink>, and voice assistants run
        in the background, qualifying every inbound prospect and surfacing the best ones instantly. Instead of
        lost time and empty outreach, you see a steady flow of sales-ready leads and more closed deals,
        without hiring more staff or burning through your budget.</p>
      <p className="text-base text-white shadow-text pt-3">
        This approach is designed for small businesses in South Florida that cannot afford to waste resources.
        It answers the core question: How do you stop losing your best opportunities to manual process and
        data gaps, and start turning anonymous visitors into real pipeline? Lead Enrichment and Predictive
        Scoring, built into a modern capture pipeline, is the answer.</p>
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
