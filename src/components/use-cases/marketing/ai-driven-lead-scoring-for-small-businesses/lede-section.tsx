import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        If you&apos;re a small business owner, managing leads can often feel like juggling with too many balls in the air. Every lead is treated identically, and important opportunities slip through the cracks. This happens because your data is fragmented. Information is scattered across different systems, making it hard to see the full picture.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        AI can change this. By consolidating data and using intelligent <GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink>, you can prioritize the leads that matter most. Tools like&nbsp;
        <Link id="tools-marketing-active-campaign" href="/tools/marketing/active-campaign" className="text-[#C83803] hover:underline">
          ActiveCampaign
        </Link>
        &nbsp;and&nbsp;
        <Link id="tools-marketing-pipedrive" href="/tools/marketing/pipedrive" className="text-[#C83803] hover:underline">
          Pipedrive
        </Link>
        &nbsp;help you streamline your data, saving time and boosting sales.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        In the world of small business, every minute counts. Yet, many businesses waste time sifting through disorganized data, losing track of promising leads. This fragmentation leads to missed opportunities and inconsistent customer interactions.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Imagine having a clear view of every lead&apos;s journey, from initial contact to conversion. AI-driven tools offer this clarity by integrating and analyzing data from various sources. Solutions like&nbsp;
        <Link id="tools-marketing-apollo" href="/tools/marketing/Apollo" className="text-[#C83803] hover:underline">
          Apollo
        </Link>
        &nbsp;and&nbsp;
        <Link id="tools-marketing-lead-squared" href="/tools/marketing/lead-squared" className="text-[#C83803] hover:underline">
          LeadSquared
        </Link>
        &nbsp;not only organize your leads but also rank them by potential value, allowing you to focus on what truly drives your business forward.
      </p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center">
            </div>
            <div className="col-span-7">
              <h2 id="the-core-problem-fragmented-data" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Core Problem: Fragmented Data
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center">
            </div>
            <div className="col-span-7">
              <h2 id="the-core-problem-fragmented-data" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Core Problem: Fragmented Data
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
