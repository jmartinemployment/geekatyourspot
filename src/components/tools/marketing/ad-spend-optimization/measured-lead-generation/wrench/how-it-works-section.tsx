import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Wrench automates <GlossaryLink slug="lead-scoring" className="text-[#0B162A] hover:underline">lead scoring</GlossaryLink>,
        segmentation, and campaign optimization by connecting directly to your CRM and marketing data sources. It
        analyzes your contact and campaign data in real time, builds dynamic audience segments, and guides creative
        and budget decisions so your team is not stuck guessing which leads to target or what content to refresh
        next.</p>
      <p className="text-base text-white shadow-text pt-3">
        The process starts with Wrench integrating your CRM, marketing tools, and platforms like HubSpot or
        Salesforce. This connection is not just a data sync, Wrench pulls in historical and live customer data,
        campaign performance, and behavioral signals. Its AI models immediately begin segmenting your contacts based
        on behavior, preferences, and likelihood to convert. This is not a static rule-based system. Wrench&apos;s
        segmentation updates as new data comes in, so your audience groups reflect real-time changes in buyer intent
        and engagement.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once Wrench has organized your contacts, it runs predictive lead scoring. Each contact is assigned a
        conversion probability based on their actions, demographic fit, and interaction history. These scores are
        not just for reporting. Wrench uses them to prioritize which leads your campaigns should target, which
        should be excluded, and when to re-engage a past lead. The system also identifies contacts who have already
        bought or are no longer in-market, setting up automatic exclusions so you do not waste budget retargeting
        the wrong people.</p>
      <p className="text-base text-white shadow-text pt-3">
        Campaign creative and content bottlenecks are addressed with Wrench&apos;s AI creative engine. The platform
        generates and refines <GlossaryLink slug="ad-copy" className="text-[#0B162A] hover:underline">ad copy</GlossaryLink>,
        images, and layouts in multiple formats and languages. It can produce variations at scale, using data-backed
        insights about what resonates with each audience segment. Creative fatigue (where ads stop performing
        because audiences see the same message too often) is reduced because Wrench can refresh creative assets
        automatically, matching the right content to the right segment at the right time.</p>
      <p className="text-base text-white shadow-text pt-3">
        Optimization is continuous. Wrench tracks campaign performance, monitors which creative elements and
        audience segments are driving results, and adjusts recommendations as new data comes in. If a particular <GlossaryLink slug="ad-set" className="text-[#0B162A] hover:underline">ad
        set</GlossaryLink> spikes in cost-per-lead or stops converting, Wrench will flag it, suggest changes, or
        pause it in line with your configured rules. This <GlossaryLink slug="feedback-loop" className="text-[#0B162A] hover:underline">feedback
        loop</GlossaryLink> means your campaigns are always tuned to current conditions, not last month&apos;s
        results.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wrench also addresses <GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">data
        quality</GlossaryLink> issues that undermine targeting and <GlossaryLink slug="lookalike-audience" className="text-[#0B162A] hover:underline">lookalike</GlossaryLink> modeling.
        It cleans and standardizes your contact lists, fixing formatting errors and refreshing outdated fields to
        ensure ad platforms can match your data to real users. This is especially important for small businesses
        whose CRMs often accumulate messy or incomplete records. The result is better audience matching and higher
        campaign accuracy.</p>
      <p className="text-base text-white shadow-text pt-3">
        A unique point in Wrench&apos;s workflow is its use of historical data. Unlike some platforms that require
        launching new campaigns to start learning, Wrench can analyze your existing and past creative, campaign
        outcomes, and <GlossaryLink slug="customer-journey" className="text-[#0B162A] hover:underline">customer
        journeys</GlossaryLink>. This speeds up the time to insight, as Wrench does not need to wait for new data to
        accumulate before making recommendations or automating actions.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wrench&apos;s automation is not one-size-fits-all. The platform allows for custom workflows and testing of
        unique business rules. For example, you can define how to segment by lifetime value, when to exclude a
        client from a campaign, or what creative elements to test for a specific audience. These controls are
        available without needing to write code or build scripts, so small teams can adjust the system to fit their
        sales process and market conditions.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, Wrench replaces the manual, error-prone cycles of exporting lists, setting up ad audiences, and
        hand-tuning creative with a closed-loop system. It scores, segments, and targets leads automatically,
        generates and refreshes creative, and monitors results to refine strategies in real time. For a small
        business trying to scale its pipeline without ballooning costs or burning out its team, these mechanics mean
        more qualified leads, less wasted spend, and a campaign that adapts as fast as the market changes.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="step-by-step-mechanics-of-wrench-in-lead-generation-and-ad-spend-optimization" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Step-by-step mechanics of Wrench in lead generation and ad spend optimization
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="step-by-step-mechanics-of-wrench-in-lead-generation-and-ad-spend-optimization-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Step-by-step mechanics of Wrench in lead generation and ad spend optimization
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
