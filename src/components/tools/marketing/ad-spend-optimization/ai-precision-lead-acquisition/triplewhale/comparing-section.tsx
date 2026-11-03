import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale stands out by connecting first-party tracking, flexible attribution, and creative analysis in one
        platform, while most tools for small businesses either automate bidding, optimize creative, or unify reporting,
        but rarely all three. For a business in Miami-Dade, Broward, or Palm Beach, this means you get a single,
        accurate source of truth about every ad dollar, not just a set of surface-level metrics or platform claims.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most small businesses start with built-in dashboards from Google, Meta, or Shopify, but quickly run into
        problems. These dashboards split credit for the same sale, double-count conversions, and leave you guessing
        which campaign is actually driving revenue. Even when you add third-party tools that promise real-time
        optimization or AI-driven bidding, you are still left with gaps: browser-based pixels miss conversions when ad
        blockers are active, and creative performance is often judged by impressions or clicks, not by real sales.</p>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale&rsquo;s difference is its focus on first-party data and deduplication. Its server-level pixel tracks
        the full path from ad click to checkout, even when browser tracking fails. This closes the gap left by standard
        pixels, especially for businesses where a single lost conversion can throw off your entire budget plan. Where
        other tools let Google and Meta each claim credit for the same local lead, leaving you to pay twice, Triplewhale
        assigns credit to a single source, so you know exactly which ad earned the sale.</p>
      <p className="text-base text-white shadow-text pt-3">
        On creative optimization, many platforms offer basic A/B testing or automated creative generation. Triplewhale
        goes further by ranking every creative asset strictly on first-party financial results, not just engagement.
        This lets you cut losing variations quickly and double down on what actually brings in customers. For example,
        clients using Triplewhale&rsquo;s Moby Agents have cut weekly analysis time from hours to minutes and saved
        thousands in unnecessary creative production, as reported in the Underoutfit and Dixxon Flannel Company case
        studies.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting is another area where Triplewhale separates itself. Most tools require you to export data to
        spreadsheets, then try to reconcile conflicting numbers once a week. Triplewhale calculates blended operating
        metrics automatically and updates them in near real-time. This means you can spot wasted spend and shift your
        budget faster, without waiting for a manual report or reacting to yesterday&rsquo;s numbers. For small teams,
        this is not just a time saver, it is the difference between catching a problem today or letting it drain your
        budget for weeks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale&rsquo;s attribution models are more flexible than those in most optimization platforms. You can
        choose from eight options, including multi-touch, first-click, last-click, linear, and data-driven models. This
        lets you match your business&rsquo;s needs, whether you want to see what drives initial interest or what closes
        sales. The platform also incorporates post-purchase survey data, so you capture influences that standard
        tracking misses, such as word-of-mouth or offline touchpoints. This is especially important for small businesses
        that rely on local reputation and repeat customers.</p>
      <p className="text-base text-white shadow-text pt-3">
        For <GlossaryLink slug="predictive-analytics" className="text-[#0B162A] hover:underline">predictive
        analytics</GlossaryLink>, which is a key subtopic in ad spend optimization, Triplewhale&rsquo;s Compass module
        combines multi-touch attribution, marketing mix modeling (MMM), and incrementality testing in one feedback loop.
        Instead of relying on a single method, you get a calibrated measurement system that helps you decide where to
        invest your next dollar. This is a step beyond tools that only offer MMM or automated rules, as it gives you a
        decision-ready view backed by your own data, not just platform signals.</p>
      <p className="text-base text-white shadow-text pt-3">
        Some platforms promise AI-powered optimization but keep their logic behind closed doors or require you to trust
        their black-box recommendations. Triplewhale keeps the decision-making transparent: you see the data, the
        attribution, and the impact of each campaign. You can audit every step and adjust models as your business
        changes. This is critical for small businesses that need to justify every marketing dollar to owners or outside
        accountants.</p>
      <p className="text-base text-white shadow-text pt-3">
        In terms of pricing, Triplewhale is accessible to small businesses thanks to its free plan, which offers AI
        Visibility at no cost, and paid tiers that scale with your gross merchandise value. This gives you a clear
        upgrade path as your needs grow, without locking you into a high flat fee or a percentage of ad spend from day
        one.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, Triplewhale&rsquo;s main advantage over adjacent tools is its ability to unify tracking,
        attribution, creative optimization, and predictive analytics in a single platform, grounded in first-party data.
        For a small business that cannot afford to waste time or budget, this means less manual work, fewer errors, and
        more confidence in every ad spend decision. Where other tools leave gaps or force you to trust platform claims,
        Triplewhale gives you the clarity and control needed to grow profitably.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-triplewhale-compares-to-other-ad-spend-optimization-tools-small-businesses-consider" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Triplewhale compares to other ad spend optimization tools small businesses consider
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-triplewhale-compares-to-other-ad-spend-optimization-tools-small-businesses-consider-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Triplewhale compares to other ad spend optimization tools small businesses consider
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
