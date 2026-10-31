import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Cometly stands apart from other ad spend optimization tools because it closes the gap between ad platform data
        and real business outcomes. Most small businesses in Miami-Dade, Broward, and Palm Beach are comparing Cometly
        to platforms that promise automation and reporting, but still leave them guessing which ads actually drive
        revenue. Cometly&rsquo;s approach is different: it ties every tracked touchpoint to a real sale, not just a
        reported conversion, so budget decisions are based on what works, not what looks good in a dashboard.</p>
      <p className="text-base text-white shadow-text pt-3">
        The main alternatives a buyer weighs are platform-native automation, rules-based budget tools, and other
        attribution platforms. Each comes with trade-offs that matter for a small business. Platform-native automation,
        like what you find in Google <GlossaryLink slug="smart-bidding" className="text-[#0B162A] hover:underline">Smart
        Bidding</GlossaryLink> or Meta&rsquo;s Advantage+ Budget, can shift spend based on reported conversions, but
        those numbers are inflated by duplicated or missed events. These systems optimize for what the platform sees,
        not what your CRM or bank account confirms. That means your ad dollars chase the wrong outcomes, and you stay
        stuck in a cycle of scaling campaigns that only look strong on paper.</p>
      <p className="text-base text-white shadow-text pt-3">
        Rules-based budget tools offer more control, letting you set triggers and caps for spend across campaigns. They
        do help catch obvious waste, but they still depend on the same flawed data sources. If your conversion tracking
        is off by 30% because of browser privacy or attribution gaps, all the rules in the world cannot fix the core
        issue (<a id={`tools-marketing-precision-lead-acquisition-cometly-comparing-source-conversion-data${idSuffix}`} href="https://www.cometly.com/post/conversion-data-not-matching-reality" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Cometly</a>,
        as of Oct 29, 2026). You end up reacting to symptoms, not the cause, and spend hours tweaking rules that never
        get you closer to the truth.</p>
      <p className="text-base text-white shadow-text pt-3">
        Other attribution platforms claim to unify data, but many only aggregate what ad platforms report. That means
        they can show you a combined dashboard and calculate blended <GlossaryLink slug="return-on-ad-spend" className="text-[#0B162A] hover:underline">ROAS</GlossaryLink>,
        but they do not solve for over-reporting, missed offline conversions, or the link between ad spend and actual
        revenue. For a small business, this means you might see a prettier report, but you are still making decisions on
        fiction, scaling up losing campaigns and pausing the real winners. The core problem remains: you don&rsquo;t
        know which ad dollars are working.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cometly is built to fix these gaps by architecting its system around verified, server-side tracking and CRM
        integration. Instead of relying on browser pixels, Cometly uses server-level tracking to capture every
        conversion, regardless of device, browser, or privacy setting. It runs both pixel and server-side tracking in
        parallel during setup, so you can see exactly how much your old tracking was missing, often 15% to 30% more
        conversions show up when you make the switch (<a id={`tools-marketing-precision-lead-acquisition-cometly-comparing-source-attribution${idSuffix}`} href="https://www.cometly.com/post/attribution-for-multiple-ad-accounts" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Cometly</a>,
        as of Oct 29, 2026). This is not just a technical upgrade; it changes how you allocate every dollar.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another point of difference is how Cometly handles attribution and budget reallocation. Where other tools simply
        report on last-click or platform-attributed conversions, Cometly&rsquo;s multi-touch attribution connects each
        lead, call, form, or sale back to the original ad and all the steps in between. This means you can see the real
        customer journey, not just a snapshot, and shift budget to the ads and channels that actually contribute to
        closed deals. The platform&rsquo;s dynamic budget reallocation uses this verified data to move spend toward top
        performers in real time, removing the lag and guesswork of manual reviews.</p>
      <p className="text-base text-white shadow-text pt-3">
        For creative testing and fatigue, Cometly stands out by giving explicit analytics on which creative assets drive
        revenue, not just clicks or engagement. Many tools report on creative performance, but only Cometly ties each
        creative to pipeline and closed sales, so you stop wasting money on ads that look good but do not convert. This
        is especially important for small teams who cannot afford to let <GlossaryLink slug="ad-fatigue" className="text-[#0B162A] hover:underline">ad
        fatigue</GlossaryLink> drive up costs over a weekend or holiday.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cometly&rsquo;s integration stack is also built for small business realities. With more than 70 native
        integrations, including Stripe for revenue data, it connects ad platforms, CRM, and website tracking in one
        place. This removes the need for spreadsheets, manual data pulls, or reconciling conflicting reports. Instead,
        you get a single, current view of every dollar spent and every dollar earned.</p>
      <p className="text-base text-white shadow-text pt-3">
        The difference in daily and weekly workflow is clear. With Cometly, you do not need to wait for a monthly report
        to catch problems or opportunities. The system flags significant changes as they happen, so you can act on them
        before they cost you. You stop chasing vanity metrics and start making decisions that move your business
        forward. For a small business, this means less wasted spend, more confidence to scale what works, and fewer
        surprises at the end of the quarter.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, Cometly is not just another reporting or automation tool. It is a unified system that gives you the
        real, actionable data you need to optimize ad spend at the source. It fixes the root causes that keep small
        businesses stuck, unreliable tracking, fragmented reporting, and budget decisions based on guesswork. For teams
        who want to stop wasting money and start making every ad dollar count, Cometly is in a different class than the
        alternatives.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-cometly-compares-to-other-ad-spend-optimization-tools-and-approaches" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Cometly Compares to Other Ad Spend Optimization Tools and Approaches
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
              <h2 id="how-cometly-compares-to-other-ad-spend-optimization-tools-and-approaches-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Cometly Compares to Other Ad Spend Optimization Tools and Approaches
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
