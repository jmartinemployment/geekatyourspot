import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For many small businesses, the&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;process is a relentless
        cycle of repetitive tasks. Picture this: a small team, already stretched thin, is tasked with
        processing hundreds of invoices each month. Each invoice demands manual data entry, matching with
        purchase orders, and routing for approval. This painstaking process often transforms into a full-time
        job, consuming valuable hours and introducing errors that can cost the business dearly. The time spent
        on these tasks means less time for strategic decision-making and growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated&nbsp;<Link id={`tools-accounting-approval-workflows-ramp-overview-approval-workflows${idSuffix}`} href="/use-cases/accounting/accounts-payable/ai-approval-workflow" className="text-[#C83803] hover:underline">Approval Workflows</Link>&nbsp;offer a transformative solution by streamlining these mundane tasks. By
        integrating&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;technologies like Optical Character Recognition (OCR)
        and machine learning, businesses can now automate data extraction, invoice matching, and approval
        routing. This not only slashes processing time from an average of 15–20 minutes per invoice to under 3
        minutes but also significantly reduces error rates. The technology learns your business&#39;s unique
        patterns, identifying regular vendors and approval chains, which further enhances efficiency and
        accuracy.</p>
      <p className="text-md text-white shadow-text pt-3">
        Consider the immediate benefits: fewer hours spent on manual data entry, reduced cycle times, and
        lower costs associated with human error. Automated workflows ensure that invoices are routed to the
        right stakeholders based on predefined criteria like amount or vendor type, eliminating delays and
        bottlenecks. By adopting such a system, small businesses can redirect their focus from tedious
        administrative tasks to strategic initiatives that drive growth and profitability.</p>
      <p className="text-md text-white shadow-text pt-3">
        In the competitive landscape of West Palm Beach, Broward, and Miami-Dade counties, where Geek @ Your Spot LLC operates, implementing AI-driven solutions like Automated Approval Workflows could be the key to
        unlocking new levels of efficiency and scalability. These technologies are not just about keeping pace
        with larger competitors; they are about redefining how small businesses operate, allowing them to
        thrive in an increasingly digital world.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview-lg">
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
