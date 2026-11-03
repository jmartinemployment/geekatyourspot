import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale replaces manual reporting, guesswork, and platform confusion with a single, accurate view of your ad
        performance. For a small business, this means fewer hours spent cleaning up data and more time acting on what
        works. Triplewhale&rsquo;s server-level tracking pixel captures every conversion, even when ad blockers or
        privacy changes would break a standard browser pixel. This gives you a true, deduplicated count of sales tied
        back to the actual ad and channel that earned them, no more double-counting, no more mystery conversions.</p>
      <p className="text-base text-white shadow-text pt-3">
        Instead of exporting data to spreadsheets and chasing down mismatched numbers, Triplewhale brings all your
        revenue, ad spend, and customer data into one real-time dashboard. Every key metric, cost per acquisition,
        <GlossaryLink slug="return-on-ad-spend"> return on ad spend</GlossaryLink>, new customer performance, creative
        results, is updated as it happens. You do not have to wait until next week to see which campaign is working. The
        moment a sale closes, you see exactly which ad, channel, and creative brought it in. This means you can move
        budget away from underperformers and double down on winners before the window closes.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative analysis that once took hours now happens in minutes. Triplewhale&rsquo;s platform automatically ranks
        every creative asset by the actual revenue it drives, not just by clicks or impressions. You see at a glance
        which ad variations are pulling their weight and which are draining your budget. That lets you cut losing
        creative fast and scale up what works, without wasting money on guesswork or waiting for a quarterly review. The
        time saved here is not theoretical, case studies show real teams cutting 5 hours of weekly analysis down to 10
        minutes, and others saving 10 hours a week on reporting alone (<a id={`tools-marketing-precision-lead-acquisition-triplewhale-transforms-source-dixxon-flannel${idSuffix}`} href="https://www.triplewhale.com/case-studies/dixxon-flannel-company" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Triplewhale</a>,
        as of Oct 29, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale&rsquo;s approach to attribution goes beyond the basic first-click or last-click models. It offers a
        range of attribution views, from multi-touch to linear and data-driven models, so you can see the full customer
        journey and understand how each channel contributes to a sale. This prevents the common problem of two platforms
        both claiming credit for the same conversion. Instead, Triplewhale deduplicates interactions and assigns credit
        to a single source, giving you a clean, trusted number for every campaign. This is the difference between making
        decisions on inflated, platform-biased data and scaling your business on numbers that match your bank
        statement.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget allocation becomes a proactive process. With Triplewhale, you can spot underperforming campaigns and
        shift spend before it becomes a costly drag. The platform calculates blended operating metrics automatically, so
        you see your true acquisition costs and can reallocate budget in real time. There is no need to wait for a
        monthly or quarterly review, every decision is grounded in the latest, most accurate data available. This
        agility means you catch problems early, capitalize on new opportunities, and avoid the slow bleed of wasted
        spend that comes from delayed action.</p>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale&rsquo;s AI-driven recommendations and creative insights remove the guesswork from optimization.
        Instead of sifting through hundreds of ad variations by hand, the system surfaces what is working and why. You
        get step-by-step recommendations on how to improve creative, shift budget, and refine strategy, all based on
        your own first-party data. For lean teams, this is like adding an extra analyst without the headcount, freeing up
        time for higher-value work and faster growth.</p>
      <blockquote cite="https://www.triplewhale.com/case-studies/whitelabeled" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Learn how Whitelabeled agency reduced client reporting time by 78% and saved 10+ hours weekly by implementing
        Moby Agents, allowing their team to focus on strategic growth initiatives rather than manual data analysis
        across their client portfolio.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in South Florida, the impact is direct. Teams that once spent hours each week on manual
        reporting now have that time back for sales, customer service, or new marketing initiatives. The risk of paying
        twice for the same lead is gone, replaced by a single source of truth that everyone can trust. Budget decisions
        move from gut feel to data-backed confidence, and the business grows on the strength of campaigns that are proven
        to work. Triplewhale does not just automate the busywork, it changes the way you manage and scale your ad spend,
        so every dollar works harder for your bottom line.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-triplewhale-removes-wasted-hours-from-ad-spend-optimization" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Triplewhale removes wasted hours from Ad Spend Optimization
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
              <h2 id="how-triplewhale-removes-wasted-hours-from-ad-spend-optimization-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Triplewhale removes wasted hours from Ad Spend Optimization
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
