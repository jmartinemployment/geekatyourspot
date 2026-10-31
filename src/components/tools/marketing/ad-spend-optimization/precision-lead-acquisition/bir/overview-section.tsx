import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why am I spending money on ads without knowing which ones actually bring in customers, or if I&rsquo;m just
        wasting my budget? For most small businesses in Miami-Dade, Broward and Palm Beach, the real problem is not just
        tracking results but managing risk. As soon as you try to scale your ad accounts, you hit a wall: you cannot
        watch every campaign around the clock. Without 24/7 technical infrastructure, sudden spikes in <GlossaryLink slug="customer-acquisition-cost">customer
        acquisition costs</GlossaryLink> can drain your budget before you even notice. Manual checks and platform alerts
        come late or not at all, leaving you exposed to runaway costs and missed opportunities.</p>
      <p className="text-base text-white shadow-text pt-3">
        <Link id={`tools-marketing-precision-lead-acquisition-bir-overview-precision-lead-acquisition${idSuffix}`} href="/use-cases/marketing/ad-spend-optimization/ai-precision-lead-acquisition" className="text-[#C83803] hover:underline">Ad
        Spend Optimization</Link> solves this by giving you continuous visibility, control and fast decision-making
        across every campaign. Instead of waiting until Monday to catch a problem that started over the weekend, you can
        set rules that pause underperforming ads, reallocate budget in real time, and scale up what works, all without
        manual intervention. Predictive analytics highlight which ads are likely to drive the most sales, and automated
        systems keep your spend focused where it matters. Teams using these tools have cut wasted spend, grown accounts
        safely, and reclaimed hours each week for work that actually moves the business forward.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a twelve-person shop in West Palm Beach running fifty ads at once, the stakes are clear: without automation,
        you either overpay for slow results or risk burning through your budget when performance drops overnight.
        Fragmented data across platforms makes it hard to connect ad spend to real sales, and manual reporting leaves
        too much room for error. Ad Spend Optimization brings these pieces together, so your team can act on what&rsquo;s
        happening now, not what happened last week. This is for small businesses that want to stop guessing and start
        controlling their ad dollars, with practical AI that fits the tools they already use.</p>
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
