import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Rolling out Wask in a small business environment means connecting your Google Ads and Meta Ads accounts, mapping
        your campaign structure, and letting Wask&rsquo;s automation layer take over routine optimization. The process
        is fast for most teams because Wask uses pre-built connectors, visual setup, and a phased rollout that keeps risk
        low and learning periods short. You do not need to rebuild your campaigns from scratch or write custom scripts,
        Wask is built to fit into what you already run.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is account connection. Wask links directly to both Google Ads and Meta Ads with a simple
        authorization. This is not a drawn-out integration or a custom API build. For a small team with existing ad
        accounts, the connection is a matter of minutes. Because Wask is designed for owner-level access, you keep full
        control of your campaigns, nothing is hidden behind an agency login or a managed service.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next comes the initial audit and baseline documentation. Wask pulls in 30 days of campaign data and surfaces a
        clear view of your current spend, <GlossaryLink slug="conversion-tracking">conversion tracking</GlossaryLink>,
        and quality scores (<a id={`tools-marketing-precision-lead-acquisition-wask-implementing-source-google-ads-automation${idSuffix}`} href="https://www.wask.co/google-ads-automation" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Wask</a>,
        as of Oct 29, 2026). This step is critical. The system uses this data to set thresholds for automation rules and
        to spot structural issues that could block optimization. If your conversion tracking is broken or your campaign
        structure is tangled, Wask flags it before any automation is turned on. This up-front check is what keeps later
        automation from compounding mistakes.</p>
      <p className="text-base text-white shadow-text pt-3">
        With the baseline set, Wask moves to a pilot phase. Rather than flipping automation on for all campaigns at
        once, you start with 2&ndash;3 campaigns where you want the fastest feedback. The platform monitors results
        daily for the first week and weekly after that, comparing performance to your documented baseline. This staged
        rollout means you can see the impact of Wask&rsquo;s automation before scaling it to your full account. If a
        rule triggers too often or not at all, you adjust it here, before it can disrupt your main budget.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wask&rsquo;s visual rule builder is what shortens setup. You define bid thresholds, budget caps, and performance
        triggers without code. Pre-built templates cover common scenarios, pausing a campaign after a certain spend with
        no conversions, or boosting budget on a winner. These templates are not locked; you can modify them or build
        your own. Every action Wask takes is logged with a timestamp and trigger condition, so you always know what
        changed and why.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once you are confident in the pilot results, you expand automation to the rest of your account. Wask&rsquo;s
        daily checks take over from manual reviews, and your team shifts to a weekly oversight cadence. The platform
        surfaces anomalies and opportunities by impact, so you spend less time digging through reports and more time
        deciding what to act on. If an action is high confidence and low risk, like pausing a clear underperformer, Wask
        can execute it automatically. For bigger changes, like shifting budget between campaigns, it routes the
        recommendation to your approval workflow.</p>
      <p className="text-base text-white shadow-text pt-3">
        Throughout the process, you keep the ability to override or adjust rules. Wask is not a black box; it is a
        transparent automation layer that shows every decision. If a rule does not fit your business context, you can
        pause it or change its threshold. This is where Geek @ Your Spot comes in. As your implementation partner, we
        map your current processes to Wask&rsquo;s configuration, set up the approval flows, and train your team on what
        to watch during the learning phase. We do not just install the tool, we make sure it fits your real-world
        constraints and your reporting needs.</p>
      <p className="text-base text-white shadow-text pt-3">
        Go-live is not the finish line. Wask&rsquo;s automation rules need periodic review as your business changes.
        Seasonal shifts, new products, or changes in lead quality all require tweaks to your thresholds and approval
        logic. Geek @ Your Spot builds this review cadence into your workflow, so you do not fall back into
        set-and-forget mode. The result is a system that grows with your business, not one that locks you into last
        quarter&rsquo;s assumptions.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, going live with Wask is a structured, low-risk process: connect your accounts, document the
        baseline, pilot automation on a controlled set of campaigns, expand as confidence builds, and review results
        weekly. The process is short because Wask&rsquo;s connectors and templates remove technical barriers, and it is
        safe because every action is logged and reversible. Geek @ Your Spot closes the gap between your old manual
        process and a sustainable, automated ad spend workflow, so your team gets out of the weeds and back to
        strategy.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-going-live-with-wask-looks-like-for-a-small-business-team" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Going Live With Wask Looks Like for a Small Business Team
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-going-live-with-wask-looks-like-for-a-small-business-team-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Going Live With Wask Looks Like for a Small Business Team
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
