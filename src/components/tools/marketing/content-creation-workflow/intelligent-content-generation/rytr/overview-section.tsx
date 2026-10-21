import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Picture a local Miami salon owner, already working twelve-hour days, staring at a blank screen after
        closing time. She needs new Instagram captions, a fresh Google Business Profile blurb, and a few
        product descriptions for her online booking page. But every word comes slow. For each 50-word post,
        she burns fifteen minutes she doesn&#39;t have, often settling for something generic just to check it
        off. Multiply that by the five or ten pieces she needs each month, and the hours add up fast. Hiring a
        marketing agency to handle it? Out of reach: those quotes come in at thousands a month, a number that
        would swallow her margins whole.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the real catch-22 for small business owners and lean teams across West Palm, Broward, and
        Miami-Dade. To win local clients, they need to show up everywhere, socials, search, email, but they
        just can’t find the time, or justify the agency spend. So the pipeline dries up: a neglected Facebook
        page, a website that never changes, stale emails that get ignored. Even with the best intentions,
        content creation becomes a source of stress, not results. The cost isn’t just in wasted hours. It’s
        lost leads, missed follow-ups, and the creeping sense that bigger competitors are always one step
        ahead.</p>
      <p className="text-md text-white shadow-text pt-3">
        <Link id={`tools-marketing-intelligent-content-generation-rytr-overview-intelligent-content-generation${idSuffix}`} href="/use-cases/marketing/content-creation-workflow/ai-content-generation" className="text-[#C83803] hover:underline">Intelligent Content Generation</Link>&nbsp;changes this equation. Instead of wrestling with every caption or
        email, owners use AI tools to draft, repurpose, and schedule content in minutes. The right workflow
        means never starting from scratch: one strong idea turns into a month’s worth of posts, emails, and
        updates, all tailored for each channel. For the smallest operations, those producing just a handful of
        assets per month, modern AI tools now offer affordable plans, skipping the $49–$182 monthly price tags
        that keep so many out. The result: consistent, professional content, more time on core business, and a
        steady stream of new local leads. No more blank pages. No more sticker shock. Just a repeatable system
        that works for small teams, not against them.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC built its content creation workflow for exactly these South Florida businesses. The
        goal is simple: help you save time, cut costs, and finally compete online, without burning out or
        breaking the bank. Intelligent Content Generation is not a shortcut, but a lever. It frees up your day
        and lets you focus on what matters, while your digital presence keeps working for you.</p>
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
