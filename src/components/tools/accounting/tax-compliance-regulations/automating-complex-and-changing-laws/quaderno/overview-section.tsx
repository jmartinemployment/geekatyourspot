import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For many small businesses in South Florida, the excitement of scaling online sales quickly turns into a
        nightmare when faced with the labyrinthine maze of
        international&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>. Imagine a digital
        product developer in Miami-Dade, thrilled at the prospect of expanding their market beyond local county
        lines. Yet, as they cross into the global arena, they find themselves ensnared by over 12,000 different
        tax jurisdictions. Each jurisdiction has its own set of&nbsp;<Link id={`tools-accounting-complex-changing-laws-quaderno-overview-complex-changing-laws${idSuffix}`} href="/use-cases/accounting/tax-compliance-regulations/ai-tax-law" className="text-[#C83803] hover:underline">complex and changing laws</Link>, and failing to comply
        can lead to costly penalties and lost revenue.</p>
      <p className="text-md text-white shadow-text pt-3">
        The reality is stark: compliance isn&#39;t just about knowing where your business operates; it&#39;s
        about understanding the intricate web of local, state, and international tax laws that govern every
        transaction. As these laws evolve, staying compliant becomes a full-time job, one that small businesses
        can scarcely afford to take on alone. The task is daunting: tracking diverse sales tax rates, VAT
        requirements, and economic nexus thresholds across multiple regions. This burden drags down productivity
        and diverts precious resources away from growth-oriented activities.</p>
      <p className="text-md text-white shadow-text pt-3">
        Enter AI-driven solutions like Quaderno, designed to cut through the chaos of tax compliance. Quaderno
        automates the entire tax compliance cycle, from monitoring registration thresholds to generating
        tax-compliant invoices and filing-ready reports. By integrating seamlessly with popular platforms like
        Stripe and PayPal, it centralizes tax data, offering real-time compliance updates and reducing manual
        intervention. For small businesses in West Palm Beach, Broward, and Miami-Dade counties, this means more
        time focusing on growth and less time worrying about tax pitfalls.</p>
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
