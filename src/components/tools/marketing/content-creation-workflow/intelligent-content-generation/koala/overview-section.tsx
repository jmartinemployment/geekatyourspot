import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A South Florida office manager stares at a blank screen, trying to draft just one social post before
        the day’s real work starts. This is time she cannot bill for and hours she cannot get back. The
        website sits unchanged for months, and the business’s social feeds grow quieter every week. She knows
        what should be done: regular blogs, local SEO articles, email updates to keep customers coming back.
        But when every post means another late night or another invoice from an outside agency, content slips
        down the list. The result is a digital ghost town: few leads, little visibility, and a business that
        feels invisible next to bigger competitors.</p>
      <p className="text-md text-white shadow-text pt-3">
        This problem hits every small team in West Palm, Broward, and Miami-Dade the same way. Competing with
        larger firms means showing up online with authority and trust. But the cycle is brutal. If you try to
        write it all yourself, you lose time for clients and risk burnout. If you hire it out, the cost
        strains your cash flow and the finished work often sounds like it could belong to any business in your
        space. Manual content creation becomes a bottleneck, not a growth engine. And when the posts stop, so
        do the new leads.</p>
      <p className="text-md text-white shadow-text pt-3">
        <Link id={`tools-marketing-intelligent-content-generation-koala-overview-intelligent-content-generation${idSuffix}`} href="/use-cases/marketing/content-creation-workflow/ai-seo-content-generator" className="text-[#C83803] hover:underline">Intelligent Content Generation</Link>&nbsp;is the way out of this trap. The right AI-driven workflow lets you turn
        your business’s own expertise and voice into publishable content, without the late nights or the
        agency bills. But not every tool solves the real problem. Generic AI writing can churn out polished
        copy, but if it misses your business’s identity, your services, your real credentials, your local
        edge, it just adds more sameness to the web. The answer is a content system that remembers your brand,
        adapts to your market, and builds trust with every article, post, and campaign.</p>
      <p className="text-md text-white shadow-text pt-3">
        This page lays out exactly how small businesses in South Florida can use Intelligent Content
        Generation to break the cycle: automating content creation, repurposing strong assets, scheduling in
        bulk, adding approval workflows, and personalizing every message. You’ll see what works, what doesn’t,
        and how to get real results, more leads, less wasted time, and a brand that stands out, not just shows
        up.</p>
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
