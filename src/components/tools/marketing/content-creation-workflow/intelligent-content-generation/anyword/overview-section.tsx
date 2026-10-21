import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A small business owner in Miami-Dade spends her Friday evening staring at a blank document. She knows
        she needs to publish something, an email blast, a blog, a set of Instagram posts, to keep her business
        visible and trusted. But her day has already been split between managing payroll, calling back leads,
        and chasing down inventory. She writes and deletes the same opening line a dozen times, feeling the
        weight of that blank page and the cost of every wasted hour. In the end, she closes her laptop,
        promising herself she’ll try again tomorrow, and the business’s social feed stays silent another week.</p>
      <p className="text-md text-white shadow-text pt-3">
        This isn’t a lack of effort or ambition. The reality for most small teams in South Florida is that
        consistent, high-quality content demands time and creative bandwidth they simply do not have. Hiring a
        traditional agency or freelance copywriter can cost thousands of dollars every month. That’s money
        many small businesses cannot spare, especially when there’s no guarantee the expense will lead to more
        clients or better leads. So content creation gets delayed, and the business’s online presence falls
        behind, making it harder to win local trust or stand out against larger competitors.</p>
      <p className="text-md text-white shadow-text pt-3">
        Even when a team manages to push out content, there’s another trap: most posts, emails, and ads are a
        gamble. Without data to show what actually works, every campaign is built on guesswork. Too often the
        message falls flat, and ad budgets go to waste. This cycle, blank page, wasted spend, inconsistent
        results, puts local businesses at a disadvantage. They know they need to build visibility and trust,
        but the manual process is slow, draining, and far too expensive to scale.</p>
      <p className="text-md text-white shadow-text pt-3">
        <Link id={`tools-marketing-intelligent-content-generation-anyword-overview-intelligent-content-generation${idSuffix}`} href="/use-cases/marketing/content-creation-workflow/ai-seo-content-generator" className="text-[#C83803] hover:underline">Intelligent Content Generation</Link>&nbsp;changes this. Instead of burning hours on each post or spending blindly
        on agency retainers, small businesses can use AI-powered workflows to research, draft, personalize,
        repurpose, and schedule content in a fraction of the time. The right system turns every idea, FAQ, or
        customer story into a pipeline of tailored, data-driven assets, blogs, SEO articles, emails, and
        social updates, ready for approval and publishing. It means fewer dead ends, less wasted spend, and a
        steady stream of content that keeps your business in front of local customers. For small teams in
        Broward, West Palm Beach, and Miami-Dade, this is how you finally build the consistent presence your
        business needs, without doubling your workload or your costs.</p>
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
