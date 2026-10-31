import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Most small businesses lose ad dollars because their systems are disconnected, their data is incomplete, and the
        controls that should protect their budget are missing or ignored. The core failure is not just technical, it is
        operational and workflow-based. The symptoms are familiar: campaigns run unchecked for weeks, budgets drift
        toward underperforming ads, and the signals that should guide spend are either missing or misleading. These
        gaps show up across every tool stack and touch every platform, from Google and Meta to TikTok and Microsoft,
        but the underlying problem is always the same: you cannot act on what you cannot see, and by the time you do see
        it, the money is already gone.</p>
      <p className="text-base text-white shadow-text pt-3">
        Conversion data is often the first point of failure. Many small businesses still rely on browser-based <GlossaryLink slug="tracking-pixel">tracking
        pixels</GlossaryLink>, which miss phone calls, form completions, and sales that happen off the main site. That
        means a dashboard might show a campaign as a winner, when in reality half the conversions are missing, or worse,
        counted twice because Meta and Google both claim credit for the same lead. This is not an edge case; it is the
        default for most ad accounts that are set up without a dedicated server-side tracking pixel and rigorous
        deduplication. The result is a kind of phantom performance: campaigns look like they are working, but the real
        sales never materialize. <Link id={`use-cases-marketing-precision-lead-acquisition-challenges-cometly${idSuffix}`} href="/tools/marketing/ad-spend-optimization/precision-lead-acquisition/cometly" className="text-[#C83803] hover:underline">Cometly</Link> addresses
        this by tying every click back to a real, verified conversion, but most businesses are still flying blind.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget allocation is the next breakdown. Without a process for regular, structured review, ad spend drifts.
        Owners or teams react to daily swings in the dashboard instead of working to clear performance thresholds. The
        real winners are left capped at low budgets, while lagging campaigns keep spending unchecked. Manual
        adjustments made on a hunch, like doubling down on a campaign because its dashboard looked good that morning,
        often push the account into instability, tripping the platform&rsquo;s learning phase and wiping out weeks of
        progress. <Link id={`use-cases-marketing-precision-lead-acquisition-challenges-bir${idSuffix}`} href="/tools/marketing/ad-spend-optimization/precision-lead-acquisition/bir" className="text-[#C83803] hover:underline">Bir</Link>&rsquo;s
        automation scripts were built to step in here, running checks every fifteen minutes, scaling up top performers
        only when conditions are met, and pausing drainers instantly. But in most accounts, these guardrails do not
        exist.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cross-channel decision-making is broken by default. Most small businesses run Google Ads and Meta campaigns in
        silos, reviewing each in its own tab, with no system for blending the data or making allocation calls based on
        unified results. This leads to double-spending, paying for the same customer on both platforms, or missing the
        fact that all the conversions are coming from one channel. <Link id={`use-cases-marketing-precision-lead-acquisition-challenges-triplewhale${idSuffix}`} href="/tools/marketing/ad-spend-optimization/precision-lead-acquisition/triplewhale" className="text-[#C83803] hover:underline">Triplewhale</Link> addresses
        this by deduplicating and blending financial outcomes, but most teams do not have that level of reporting. They
        end up funding the loudest dashboard, not the best-performing channel.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data quality blocks every other fix. If you cannot trust your numbers, you cannot optimize. Most teams never
        validate their tracking setup. They do not know if their pixels are firing, if their <GlossaryLink slug="utm-parameters">UTM
        parameters</GlossaryLink> are consistent, or if their CRM is actually capturing the leads that came from paid
        ads. Without automated validation, like the routines <Link id={`use-cases-marketing-precision-lead-acquisition-challenges-wask${idSuffix}`} href="/tools/marketing/ad-spend-optimization/precision-lead-acquisition/wask" className="text-[#C83803] hover:underline">Wask</Link> and <Link id={`use-cases-marketing-precision-lead-acquisition-challenges-plai${idSuffix}`} href="/tools/marketing/ad-spend-optimization/precision-lead-acquisition/plai" className="text-[#C83803] hover:underline">Plai</Link> can
        run, errors go unnoticed for months. Budgets are set based on bad data, and optimization becomes a guessing
        game.</p>
      <p className="text-base text-white shadow-text pt-3">
        Even when the data is right, the workflow to act on it is missing. Owners and teams get lost in dashboard
        fatigue, jumping between platforms, exporting spreadsheets, and trying to piece together what is actually
        working. There is no single place to see what needs action, no alerts to flag waste, and no process to pause or
        scale campaigns based on real results. <Link id={`use-cases-marketing-precision-lead-acquisition-challenges-adzooma${idSuffix}`} href="/tools/marketing/ad-spend-optimization/precision-lead-acquisition/adzooma" className="text-[#C83803] hover:underline">Adzooma</Link> was
        designed to unify this, but most small businesses are still stuck in scattered views and manual reporting. The
        outcome is slow reaction times and more waste.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, the lack of automation exposes businesses to weekend or holiday risk. High-cost anomalies, like a spike
        in <GlossaryLink slug="cost-per-click">cost-per-click</GlossaryLink>, can drain a week&rsquo;s budget overnight
        if no one is watching. Without tools like Bir or <Link id={`use-cases-marketing-precision-lead-acquisition-challenges-optmyzr${idSuffix}`} href="/tools/marketing/ad-spend-optimization/precision-lead-acquisition/optmyzr" className="text-[#C83803] hover:underline">Optmyzr</Link> running
        recurring checks and pausing overspend, small businesses are left exposed. These failures are not a matter of
        missing one feature, they are the result of not having a system that ties together data accuracy, real-time
        monitoring, structured review, and automated guardrails. Until those are fixed, ad spend optimization is just a
        hope, not a process.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-is-actually-going-wrong-in-ad-spend-management-today" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Is Actually Going Wrong in Ad Spend Management Today
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-is-actually-going-wrong-in-ad-spend-management-today-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Is Actually Going Wrong in Ad Spend Management Today
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
