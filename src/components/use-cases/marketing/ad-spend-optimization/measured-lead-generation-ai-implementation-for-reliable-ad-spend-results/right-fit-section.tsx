import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Measured Lead Generation is the right call when your business has hit the operational ceiling of manual
        campaign management, and you are serious about scaling qualified lead flow without letting ad costs or staff
        burnout spiral out of control. It is the wrong fit if your sales pipeline is not yet constrained by the
        problems this system solves, such as fragmented data, unpredictable CPL spikes, and creative bottlenecks
        that stall growth. You should not invest in this approach if you are still in the early stage of validating
        your offer or your ad spend is so low that process automation will not pay back in time or savings.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a local small business in South Florida, the tipping point usually arrives when daily ad budgets cross
        $500 to $1,500 a month and you can no longer keep up with the pace and complexity of manual optimizations.
        At this stage, every dollar wasted on the wrong audience, or every hour spent fixing broken creative, hits
        your bottom line directly. The real risk is not just the extra cost, it is the opportunity lost to
        competitors who are already automating these tasks and converting at a lower cost per lead.</p>
      <p className="text-base text-white shadow-text pt-3">
        This approach is not a silver bullet for a business that is still guessing at its market or whose main
        bottleneck is weak product-market fit, not operational drag. If your biggest problem is demand generation or
        a cold start, where you have not yet found a core group of buyers and are still testing basic channels, then
        Measured Lead Generation will not solve that. The system is designed to compound existing traction, not
        create it from scratch.</p>
      <p className="text-base text-white shadow-text pt-3">
        Where the fit is right, the difference is night and day. Performance Max, for example, solves the exact pain
        of manually shifting budgets across Google, Meta, and local search feeds. Its automation finds and fills
        conversion gaps in real time, moving spend to where the market is actually active, not where yesterday’s
        report said it was. If you have ever watched your cost-per-lead suddenly spike because you set a <GlossaryLink slug="daily-budget" className="text-[#0B162A] hover:underline">daily
        budget</GlossaryLink> and then missed a surge in Google search, this is the system that prevents that from
        happening again.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wrench is critical when your CRM is a mess of old lists and bad formatting stops your retargeting or
        lookalike audiences from working. If you are still uploading static CSVs and seeing poor match rates or
        irrelevant ads hitting past customers, Wrench’s dynamic database cleaning and predictive segmentation will
        save you thousands in wasted clicks. But if your contact base is under 500, or you rarely run segmented
        campaigns, the payoff is not there yet (<a id={`use-cases-marketing-measured-lead-generation-right-fit-source-optmyzr-com${idSuffix}`} href="https://www.optmyzr.com/ppctownhall/ai-in-ppc/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Optmyzr</a>,
        as of Oct 24, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr is for teams that need to automate safety checks and bid adjustments without hiring a developer. If
        you are losing money on broad search phrases or missing out on first-page visibility because you cannot
        react to competitor spikes, Optmyzr’s non-developer scripts and automated routines close that gap. However,
        if you are running only a handful of keywords or your campaign structure is too simple to justify layers of
        automation, the overhead outweighs the benefit.</p>
      <p className="text-base text-white shadow-text pt-3">
        Madgicx is the answer when your ad account is treating every visitor the same and you are burning budget by
        not mapping out a full-funnel audience structure. When you are ready to move from blasting broad ads to
        strangers and start isolating hot leads from cold traffic, Madgicx’s automation draws the lines, creates
        exclusion rules, and stops you from bidding against yourself. If your funnel is not complex enough to need
        this, if all your leads are coming from a single <GlossaryLink slug="ad-set" className="text-[#0B162A] hover:underline">ad
        set</GlossaryLink> or channel, you can wait until you are ready to scale.</p>
      <p className="text-base text-white shadow-text pt-3">
        Marpipe is built for businesses that want to break through the creative bottleneck that comes with manual ad
        testing. If you find yourself stuck running the same two or three creative variants for months, or your
        design team is drowning in requests to resize, swap, or test new combinations, Marpipe generates and deploys
        hundreds of variants from a single set of assets. But if you are not yet at the volume or spend where
        creative fatigue is a measurable problem, it is more than you need.</p>
      <p className="text-base text-white shadow-text pt-3">
        The wrong time to deploy Measured Lead Generation is when you are still making daily changes to your core
        offer, your data is a black box, or you have not yet run into the scaling traps described earlier, like ad
        fatigue, runaway spend, or the need for true multi-channel <GlossaryLink slug="marketing-attribution" className="text-[#0B162A] hover:underline">attribution</GlossaryLink>.
        The right time is when those problems are costing you real money or opportunity, and you have enough data
        and budget to see a measurable return from automation within a few months.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-this-is-the-right-call-and-when-it-is-not" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When This Is the Right Call and When It Is Not
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
              <h2 id="when-this-is-the-right-call-and-when-it-is-not-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When This Is the Right Call and When It Is Not
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
