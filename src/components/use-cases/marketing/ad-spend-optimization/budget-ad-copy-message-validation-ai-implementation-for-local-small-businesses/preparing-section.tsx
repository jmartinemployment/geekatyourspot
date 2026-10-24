import Link from "next/link";

export default function PreparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Once you have decided that automated ad copy and message validation is the right move for your business, the
        next step is to approach implementation with clear expectations and a concrete plan. You should expect a
        structured, phased rollout, not a switch-flip. The process starts with a free consultation and an assessment
        of your current systems, data, and campaign goals, as laid out in Geek @ Your Spot’s own methodology. This
        is about fitting automation to your business, not the other way around.</p>
      <p className="text-base text-white shadow-text pt-3">
        Before anything is built or deployed, align your measurable objectives. You should be able to state in plain
        terms what success looks like: more qualified leads, lower cost per click, or faster response times to
        inbound inquiries. These objectives drive every decision in the rollout. If you are not sure what to
        measure, this is the point to ask. The consultative phase is not just paperwork, it is where your provider
        identifies the bottlenecks that matter and sets priorities. For most small businesses, this means plugging
        leaks in the budget, speeding up follow-up, and making every dollar accountable.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next, expect a thorough review of your data quality. This is not busywork, it is what makes or breaks every
        automation project. If your CRM is full of duplicates, your ad account is cluttered with legacy campaigns,
        or your lead forms are sending incomplete data, these issues surface here. Geek @ Your Spot will use tools
        like <Link id={`use-cases-marketing-budget-ad-copy-message-validation-preparing-factors${idSuffix}`} href="/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/factors" className="text-[#C83803] hover:underline">Factors</Link> or
        LocaliQ to map the buyer journey and unify performance data across platforms. Anyword and AdCreative can
        only optimize and validate messages if the inputs are clean. This phase may involve simple fixes, like
        standardizing phone numbers or cleaning up form fields, or deeper work, such as integrating your CRM with
        your ad platforms.</p>
      <p className="text-base text-white shadow-text pt-3">
        When your data is ready, the next step is technical selection and architecture. Here, the right tools are
        chosen, not based on what is trending, but on what fits your stack and budget. For example, Plai is used to
        automate conversion tracking across Meta and Google without code, making advanced optimization accessible to
        non-technical owners. Adzooma becomes the central control panel for managing budgets and performance alerts
        across multiple platforms. The architecture is designed to add value without adding complexity or extra
        headcount. Each tool is selected for the workflow bottleneck it resolves, not for generic features.</p>
      <p className="text-base text-white shadow-text pt-3">
        The pilot phase is where the system is built, tested, and validated in a sandboxed environment. This is not
        a “set and forget” exercise, expect to be involved in reviewing proposed ad copy, validation logic, and
        performance dashboards. During this phase, you and your provider will run smoke tests on a segment of your
        spend, refining the logic and controls until the results match your objectives. This is also where you see,
        often for the first time, what your budget is actually doing in real time. For a local plumbing business,
        this might mean seeing the direct link between a $15 daily spend and the number of real, in-market calls you
        receive by the end of the week (<a id={`use-cases-marketing-budget-ad-copy-message-validation-preparing-source-business-google-com${idSuffix}`} href="https://business.google.com/aunz/think/ai-excellence/epidemic-sound-ai-max-search/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Google</a>,
        as of Oct 24, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        Once the pilot proves out, the system moves to full rollout. Expect ongoing support for the first thirty
        days as the automation adapts to real-world shifts: seasonality, campaign changes, or data quirks. You
        should see reports that make it clear what is working and what is not, without needing to dig through
        spreadsheets or guess at attribution. The right setup means you can spot and fix issues fast, whether it is
        a sudden spike in low-quality leads or a drop in conversion after a creative refresh.</p>
      <p className="text-base text-white shadow-text pt-3">
        Set your expectations on outcomes, not magic. Even with automation, you will still need to review the
        results, approve new messaging, and adjust your goals as the market changes. The best automation is a
        multiplier on what you already do well, not a replacement for attention or judgment. Over time, you should
        expect to spend less time on manual campaign tweaks and more time on strategic decisions: which markets to
        target, which services to promote, and how to turn more leads into closed sales.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you are ready for this approach, your next move is to book your free consultation and come prepared with
        your current pain points, last thirty days of campaign data, and a clear sense of what you want to improve.
        The process then starts with Geek @ Your Spot’s four-phase methodology: align on objectives, clean and
        validate your data, select and integrate the right automation tools, and launch a pilot you can actually
        measure. At each step, you should be able to see what is working, what is not, and what the next improvement
        will deliver. This is how you move from guesswork to control, and from unpredictable spend to steady,
        scalable results.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when <a href="#consultationAppointment2xl" id={`use-cases-marketing-budget-ad-copy-message-validation-preparing-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>What is your comfortable monthly ad spend right now, and what are you currently paying a human or agency to
          manage it?</li>
        <li>If we double your current volume of inbound leads next month, does your business have the internal staff to
          pick up the phone within 5 minutes, or will they sit in an inbox?</li>
        <li>Does your business draw customers from a tight 5-to-10 mile radius around a physical storefront, or are you
          chasing high-ticket contracts across all of Miami-Dade, Broward, and Palm Beach or nationally?</li>
        <li>How often do you refresh your ad graphics and text, and how do you currently figure out which image actually
          made money versus just getting empty clicks?</li>
        <li>When a new client pays you, can you track that specific invoice back to the exact Facebook ad or Google
          keyword they clicked three weeks ago, or is that a complete black box?</li>
        <li>Where is your customer data stored right now? Is it scattered across Gmail and paper folders, or do you have
          a CRM like Hubspot or Salesforce that updates automatically?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-to-do-next" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What to Do Next
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-to-do-next-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What to Do Next
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
