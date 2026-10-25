import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why does scaling up <GlossaryLink slug="lead-generation">lead generation</GlossaryLink> with a mid-tier ad
        budget so often backfire for small businesses in South Florida? The answer is that manual campaign
        management breaks down fast: <GlossaryLink slug="cost-per-lead">cost-per-lead</GlossaryLink> spikes out of
        control, content production stalls, and money is wasted on the wrong clicks. <Link id={`tools-marketing-measured-lead-generation-optmyzr-overview-measured-lead-generation${idSuffix}`} href="/use-cases/marketing/ad-spend-optimization/ai-measured-lead-generation" className="text-[#C83803] hover:underline">Measured
        Lead Generation</Link> exists because these problems are not about working harder, they are about hitting a
        ceiling that manual work cannot break through.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most small businesses in Miami-Dade, Broward and West Palm Beach start to see this when their daily ad spend
        reaches $16 to $50. At that point, you are not just looking for local visibility, you are trying to build a
        predictable sales pipeline. But the more you spend, the more the platforms’ algorithms drift. Suddenly, your
        cost-per-lead jumps, eating into profit. At the same time, ad platforms demand a constant stream of new
        creative. You cannot keep up with image swaps, new copy and layout changes, so <GlossaryLink slug="ad-fatigue">ad
        fatigue</GlossaryLink> sets in and your performance tanks. If you try to write custom <GlossaryLink slug="automation-scripts">automation
        scripts</GlossaryLink> to protect your spend, you hit a wall: few small teams have the coding skills or the
        time to build, test and maintain those scripts in Google or Microsoft Ads.</p>
      <p className="text-base text-white shadow-text pt-3">
        The pain does not stop there. Much of your customer data is likely scattered in spreadsheets or locked away
        in a <GlossaryLink slug="crm">CRM</GlossaryLink>, which means your ads show up for people who have already
        ignored you or for past buyers who need a different message. Every extra hour spent reviewing reports and
        fighting with manual systems is time not spent on actual sales. The result: wasted budget, missed
        opportunities, and a pipeline that feels unpredictable no matter how hard you work.</p>
      <p className="text-base text-white shadow-text pt-3">
        Measured Lead Generation is built for small businesses in South Florida that are done losing money to CPL
        spikes and creative bottlenecks. It replaces guesswork and grind with a data-driven, AI-assisted process.
        The goal is simple: steady lead flow, controlled spend, and less manual labor, so your team can focus on
        sales, not damage control.</p>
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
