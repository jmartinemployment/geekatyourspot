import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A South Florida business owner watches their online orders spike after landing a new wholesale partner
        and launching on two marketplaces at once. The growth feels like a win until the invoices start piling
        up and the first state notice lands in the mail. Suddenly, what seemed like a simple expansion turns
        into a maze of compliance: tracking sales volume and order counts for every state, sorting out which
        platforms collect tax for them, and which do not. Each new sale risks crossing an invisible line, the&nbsp;<Link id={`tools-accounting-multi-state-sales-tax-nexus-thetaxvalet-overview-multi-state-sales-tax-nexus${idSuffix}`} href="/use-cases/accounting/tax-compliance-regulations/ai-multi-state-sales-tax" className="text-[#C83803] text-shadow-2xs text-shadow-white hover:underline">Multi-State Sales Tax Nexus</Link>&nbsp;threshold, that instantly creates filing and collection duties in states
        where they have never set foot.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is not a theoretical headache. Most states draw that line at $100,000 in revenue or 200 separate
        transactions per year. A small business can hit those numbers fast, especially with multi-channel sales,
        long before they have the people or systems to handle the fallout. Unlike big companies with in-house
        tax teams, a founder or small staff must sort out shifting rules across more than 11,000 tax
        jurisdictions nationwide. Each state’s thresholds change with little notice. Each mistake means a real
        risk: sudden audit exposure, back taxes owed out of pocket, and penalties that can cripple growth or
        even threaten survival. Tracking inventory across third-party warehouses, managing drop-shipping
        triggers, and reconciling returns across platforms becomes a second full-time job, one that never ends.</p>
      <p className="text-base text-white shadow-text pt-3">
        Trying to handle Multi-State Sales Tax Nexus manually, or relying on basic software alone, leaves
        dangerous gaps. Off-the-shelf tools only see the transactions that run through them, missing sales from
        wholesale, phone orders, or secondary platforms. They rarely catch physical presence triggers, like
        remote employees, trade show booths, or inventory stored by Amazon FBA, that can flip a state’s
        compliance switch overnight. The result is extreme operational friction. Teams lose time to error-prone
        spreadsheets and are left scrambling when a state comes calling. Instead of scaling with confidence,
        owners are forced to slow down just to avoid tripping compliance wires.</p>
      <p className="text-base text-white shadow-text pt-3">
        AI-driven&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>&nbsp;changes this
        equation. Automated solutions now track every sale across all channels, monitor changing state
        thresholds, and flag when a new filing or registration duty appears. They centralize data, catch hidden
        triggers, and apply real-time updates as laws shift. For a small business in Miami-Dade, Broward, or
        Palm Beach, that means fewer missed deadlines, fewer audit scares, and more time spent on growth instead
        of compliance firefighting. The result: predictable costs, less stress, and a compliance posture built
        for scale, not survival mode.</p>
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
