import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Wask replaces scattered reporting and manual guesswork with a single automated system for ad spend
        optimization. Instead of pulling numbers from Google and Meta separately, Wask connects directly to both
        platforms and monitors every campaign in real time. This means you see all your ad performance in one place,
        with clear actions tied to actual results, not just activity logs.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wask&rsquo;s AI agent scans your campaigns continuously, checking for wasted spend, creative fatigue, and missed
        opportunities. When a campaign underperforms or a budget is being burned on low-quality clicks, Wask flags it at
        once. It does not wait for a monthly review or a crisis. The result is fewer hours lost to routine checks and
        faster action before the problem grows.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every rule and threshold in Wask is built around your own performance targets. You decide what counts as a win
        or a warning, whether it&rsquo;s cost per acquisition, <GlossaryLink slug="return-on-ad-spend">return on ad
        spend</GlossaryLink>, or another metric that matters to your business. Wask then executes or recommends changes
        the moment those conditions are met, not days later. High-confidence fixes (like pausing a clearly failing ad)
        can run automatically, while bigger changes can wait for your approval. This keeps you in control while saving
        you from micromanaging every detail.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams managing multiple campaigns, Wask&rsquo;s analysis surfaces the most important problems first. Instead
        of sifting through pages of numbers, you get a prioritized list of what needs attention, ranked by impact. This
        lets you focus on new creative, sales strategy, or customer engagement, work that actually grows the business,
        instead of spending hours hunting for issues.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wask&rsquo;s creative analysis tools go beyond basic metrics. The system highlights which ads are growing stale,
        which creative assets are driving results, and when it&rsquo;s time to test something new. It guides your team
        to swap out weak ads before they drag down performance, so your budget works harder without constant manual
        oversight. You get a clear path to higher engagement and lower wasted spend.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform&rsquo;s reporting is built for action. Instead of a flood of raw data, Wask turns insights into
        clear recommendations, what to keep, what to investigate, what to stop funding. You spend less time debating
        what the numbers mean and more time making decisions that move the needle. For a small business owner, this
        means knowing every week which ads are earning their keep and which are costing you money.</p>
      <p className="text-base text-white shadow-text pt-3">
        One of the strongest outcomes is time returned to your team. With Wask, weekly ad management drops from hours to
        minutes. The system handles routine monitoring, flags problems, and even suggests budget shifts, so you no
        longer need a dedicated analyst just to keep up. Owners and managers can focus on strategic choices, not endless
        troubleshooting.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cost savings are real. By shifting budget away from underperforming campaigns and catching waste in real time,
        Wask helps small businesses keep more of every dollar they invest in advertising. Instead of letting weak ads
        run for weeks, the platform enforces a consistent, repeatable review process. This structure is what separates
        businesses that control their ad spend from those that are always chasing the next fix.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses that want to see proof, Wask&rsquo;s own customer data shows the impact of faster decisions. One
        SaaS company cut its cost per acquisition by 16% in 90 days, not by changing strategy, but by making
        optimization decisions five times faster than weekly manual reviews allowed (<a id={`tools-marketing-precision-lead-acquisition-wask-transforms-source-ad-automation${idSuffix}`} href="https://www.wask.co/digital-advertising/ad-automation" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Wask</a>,
        as of Oct 29, 2026). The lesson is simple: automation delivers results by removing delay.</p>
      <blockquote cite="https://www.wask.co/digital-advertising/facebook-ads-audit" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        This comprehensive review typically saves businesses 15-35% on ad spend while improving ROAS by 50-150% through
        structured analysis of account structure, pixel implementation, audience performance, and creative
        effectiveness conducted quarterly or after 30-60 days for new advertisers.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        Wask&rsquo;s automation is not a black box. You keep full control over every rule, threshold, and approval
        process. The system logs every action, with the trigger and timestamp, so you can audit what happened and why.
        If you want to review changes before they go live, Wask routes them for your sign-off. If you trust the system,
        you can let it handle low-risk fixes on its own.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, this means your ad spend is always working. You never miss a failing campaign because you skipped a
        report, and you never overreact to a fluke in the data. Instead, you get steady, evidence-based optimization
        that compounds over time. For small businesses in South Florida, where every dollar and every hour counts, Wask
        turns ad spend from a liability into a lever for growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-wask-removes-manual-work-from-ad-spend-optimization" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Wask removes manual work from Ad Spend Optimization
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-wask-removes-manual-work-from-ad-spend-optimization-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Wask removes manual work from Ad Spend Optimization
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
