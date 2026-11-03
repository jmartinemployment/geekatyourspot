import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Cometly removes the guesswork from ad spend optimization by showing you which ads drive real revenue and which
        drain your budget. Instead of relying on each ad platform&rsquo;s own numbers, Cometly connects your ad
        platforms, CRM, and website tracking into a single, unified system. Every touchpoint, from the first ad click
        to the closed sale, shows up in one place, so you always know what is working and what is not.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first thing you lose is hours spent trying to reconcile conflicting reports. With Cometly, you do not have
        to compare Meta, Google, and CRM numbers by hand. The platform ties every conversion to its true source,
        removing duplicates and inflated counts. When a lead comes in, you see exactly which ad and creative brought
        them, and you know if they became a paying customer. You stop making decisions on vanity metrics and start
        focusing on the numbers that actually move your business forward.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cometly&rsquo;s server-side tracking fills the gaps left by browser pixels. It captures conversions that ad
        blockers and privacy settings would miss, including phone calls, form completions, and offline sales. This means
        you see 15&ndash;30% more conversions than browser-only tracking, so your data reflects reality, not just what
        the platforms can see (<a id={`tools-marketing-precision-lead-acquisition-cometly-transforms-source-cometly-com${idSuffix}`} href="https://www.cometly.com/post/conversion-data-not-matching-reality" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Cometly</a>,
        as of Oct 29, 2026). The algorithms behind your ad platforms also get better data, because Cometly sends
        verified, enriched conversion events straight to Meta and Google through their APIs. This helps the platforms
        optimize for real customers, not just clicks or form fills.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget allocation becomes a continuous, evidence-based process. Cometly&rsquo;s AI-driven recommendations and
        automation features monitor performance in real time and shift spend toward the campaigns and ad sets that are
        actually producing revenue. You do not have to wait for a monthly report or spend Friday afternoons moving
        budgets by hand. The system catches underperforming ads before they waste significant budget, and it can pause
        or scale campaigns automatically based on rules you set. This means you stop losing money on creative fatigue or
        slow weekends, and you scale winners with confidence.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative analytics in Cometly separate financial conversions from vanity clicks. You see which images, videos,
        and copy variations drive real sales, not just engagement. This lets you test new creative efficiently, cut
        losers fast, and double down on what works. Alerts for significant metric changes mean you catch problems before
        they snowball. The result is fewer errors, less wasted spend, and a clearer path to higher <GlossaryLink slug="return-on-ad-spend">return
        on ad spend</GlossaryLink>.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cometly also tracks <GlossaryLink slug="customer-lifetime-value">client lifetime value</GlossaryLink> by
        acquisition source. Instead of optimizing for the lowest cost per lead, you see which channels bring in
        customers who stay longer and spend more. This lets you shift budget toward high-value sources and away from
        channels that only bring in one-time buyers. Over time, your marketing spend becomes more efficient, and your
        team spends less time debating which metrics matter.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small teams, the biggest change is that you stop needing a dedicated analyst to manage ad spend. Cometly
        automates the hardest parts of attribution, reporting, and optimization, so your people can focus on strategy
        and creative. The platform&rsquo;s 70+ native integrations, including Stripe, mean you can track the full
        funnel, from ad click to revenue, without manual data entry or spreadsheet work.</p>
      <p className="text-base text-white shadow-text pt-3">
        When you connect Cometly, you move from fragmented, delayed reporting to a real-time, unified view of your
        marketing performance. Budget conversations become fast, evidence-based, and grounded in actual sales, not just
        what the dashboards say. Your team gains the clarity and control they need to scale what works and stop wasting
        money on what does not.</p>
      <blockquote cite="https://www.cometly.com/post/ad-spend-optimization-recommendations" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Every dollar of ad spend should work toward revenue&mdash;yet many marketing teams struggle to identify which
        campaigns actually drive results versus which ones drain budget.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        This is how Cometly turns ad spend optimization from a guessing game into a system you can trust. You get back
        the hours lost to manual tracking, remove the errors caused by bad data, and make every dollar count. For small
        businesses in Miami-Dade, Broward, and Palm Beach, it means finally having the tools to compete with larger
        teams, without adding headcount or burning out your staff.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-cometly-actually-does-for-ad-spend-optimization" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Cometly actually does for Ad Spend Optimization
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
              <h2 id="what-cometly-actually-does-for-ad-spend-optimization-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Cometly actually does for Ad Spend Optimization
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
