import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function FoundationSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A successful Ad Spend Optimization setup stands on its early decisions, the ones about data, ownership, and
        mapping, that cannot be undone once campaigns are running. If you get these right, optimization keeps working
        as your team, budget, and channels grow. If you skip them, the system stalls or even makes results worse.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first decision is data quality. If the data behind your optimization is incomplete, delayed, or comes from
        disconnected sources, you are building on sand. Cometly, Triplewhale, and LocaliQ solve this by using
        server-side tracking and deduplication, so you are not reacting to fake conversions or missing 30% of your
        results to browser blockers (<a id={`blog-marketing-precision-lead-acquisition-foundation-source-triplewhale-com${idSuffix}`} href="https://www.triplewhale.com/moby-prompting-guide" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Triplewhale</a>,
        as of Oct 29, 2026). Without this foundation, no amount of smart rules or AI will keep you from scaling up
        losers or cutting off your real winners. A business that launches with browser pixels or manual spreadsheets
        may look like it is optimizing, but it is just moving money based on fiction.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mapping and ownership come next. Someone needs to own which channels, campaigns, and creative get measured and
        how. Adzooma and Wask let you see every account and campaign in one place, but that only works if you decide up
        front who is responsible for each metric and what counts as a win. This is where many implementations fail:
        they chase too many metrics, measure too many things, and lose sight of what actually drives business results.
        The solution is to set clear <GlossaryLink slug="kpi" className="text-[#0B162A] hover:underline">KPIs</GlossaryLink>,
        cost per lead, closed deals, qualified phone calls, mapped tightly to your business goals. When each team
        member knows what they are watching, and every metric is tied to a revenue outcome, optimization can move
        forward without confusion or conflict.</p>
      <p className="text-base text-white shadow-text pt-3">
        System setup is the third make-or-break decision. Bir, Optmyzr, Performance Max, and Plai all depend on the
        right conditions: clear rules for budget shifts, audience targeting, and error handling before you turn
        automation on. For example, Bir&rsquo;s scripts are only as effective as the thresholds and time windows you
        set, move too fast and you destabilize campaigns, move too slow and you miss sudden cost spikes. Plai&rsquo;s
        dashboards become real decision-makers only when you map your tracking and targets to your actual sales
        process, not to default platform metrics. Set it up to watch what matters, and you will spot underperformance
        before it snowballs. Set it up to chase vanity metrics, and you will be left with more dashboards and no better
        results.</p>
      <p className="text-base text-white shadow-text pt-3">
        Lastly, the design of your review and intervention cycle is what keeps optimization working as your business
        changes. This is where LocaliQ and Adzooma stand out: they supply the guardrails that catch errors and shifting
        market realities, so you do not get stuck in old rules while the world moves on. Adzooma&rsquo;s automated
        alerts and unified dashboard let you know when spend is drifting off target or a channel has gone dark. LocaliQ
        brings real-time adjustments to keyword match types, geofencing, and channel allocation, so your budget keeps
        following the best opportunities. The systems that hold up are the ones built for change, where manual review,
        rule updates, and exception handling are baked in, not bolted on after the fact. The setups that stall are
        those where automation is treated as set-and-forget, or where the business ignores the need to revisit its
        goals and metrics as it grows.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-separates-a-lasting-ad-spend-optimization-setup-from-one-that-stalls-out" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Separates a Lasting Ad Spend Optimization Setup from One That Stalls Out
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-separates-a-lasting-ad-spend-optimization-setup-from-one-that-stalls-out-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Separates a Lasting Ad Spend Optimization Setup from One That Stalls Out
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
