import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function KeyFactorsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A Measured Lead Generation implementation that holds up over time is built on four critical disciplines:
        clear business goals, data readiness, precise tool selection, and a disciplined rollout. Each one calls for
        specific decisions that, if skipped or rushed, cause the entire system to stall or collapse under real-world
        stress. The difference is not subtle, it shows up in stability, <GlossaryLink slug="lead-quality" className="text-[#0B162A] hover:underline">lead
        quality</GlossaryLink>, and cost control within weeks of launch.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Alignment between goals and system logic is the starting line, not a check-box. The teams that fail here are
          the ones who treat automation as a set-and-forget fix. The systems that last are those where the business
          owner, the sales lead, and the technical consultant all agree on what counts as a qualified lead, what the
          minimum acceptable cost per lead is, and what pipeline <GlossaryLink slug="conversion-rate" className="text-[#0B162A] hover:underline">conversion
          rate</GlossaryLink> they need to hit. Without this, you get automation that optimizes the wrong outcome,
          like driving cheap clicks from out-of-market users, or scaling up spend on leads that never close.</li>
        <li>Data integrity and schema validation are the non-negotiables. Wrench is only as good as the data it pulls
          in, if your CRM is full of duplicates, missing fields, or outdated contacts, the AI cannot segment or score
          accurately. A strong implementation does a one-time data cleanse and then sets up ongoing routines: Wrench’s
          automatic formatting and exclusion routines are scheduled weekly, not once a quarter. Optmyzr’s scripts are
          set to audit <GlossaryLink slug="search-terms-report" className="text-[#0B162A] hover:underline">search
          terms</GlossaryLink> and pause irrelevant keywords continuously, not just after a campaign audit. If you
          skip this, the system quickly degrades, sending ads to the wrong people and learning from bad data, which
          drives up your CPL and wastes budget.</li>
        <li>Tool architecture must be purpose-built, not cobbled together. The most common failure is plugging in
          whatever tool is trendy without checking if it fits your stack, your workflows, or your budget. An
          implementation that lasts chooses Performance Max to handle live budget reallocation only if you run
          multi-channel campaigns and need real-time spend shifts. Optmyzr is deployed where you need automated
          keyword and landing page protection, not just because it is available. Madgicx is mapped to your actual
          funnel paths, segmenting cold, warm, and hot audiences with strict exclusion rules, so you do not pay twice
          for the same lead. Marpipe is only rolled out if you have a creative pipeline that can feed it the base
          assets needed for high-velocity testing. Each tool is assigned a job and a boundary, and the touchpoints are
          mapped before launch.</li>
        <li>Rollout is staged, tested, and validated in real conditions. The systems that fail go live all at once, with
          no smoke test and no rollback plan. The ones that last follow Geek @ Your Spot’s pilot-first approach: they
          validate each script, each automation, and each creative test in a contained environment, using real but
          limited data. Optmyzr’s guardrails are validated by triggering simulated landing page errors and checking
          that the right ads are paused. Madgicx’s audience exclusions are tested by uploading a small list of recent
          buyers and confirming they are not served top-of-funnel ads. Marpipe’s creative variants are launched in
          test campaigns before rolling out system-wide. Only after every component has passed real-world checks does
          the system scale up. This avoids the classic failure of blowing budget on automation errors or flooding your
          audience with bad creative.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        What does this look like in practice? A hypothetical South Florida HVAC company wants to use Measured Lead
        Generation to double its monthly appointments. The team sets a clear target: 30 booked calls per month at
        under $60 CPL (<a id={`use-cases-marketing-measured-lead-generation-key-factors-source-wrench-ai${idSuffix}`} href="https://wrench.ai/products/digital-campaign-agent" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Wrench</a>,
        as of Oct 24, 2026). Wrench audits their CRM and finds 12 percent of contacts are duplicates or no longer
        valid (<a id={`use-cases-marketing-measured-lead-generation-key-factors-source-wrench-ai-2${idSuffix}`} href="https://wrench.ai/products/sneak-peek-of-the-wrench.ai-platform" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Wrench</a>,
        as of Oct 24, 2026). Performance Max is set to shift spend between Google and Meta as conversion rates
        change, but only after a week of pilot tests. Optmyzr’s scripts are put in place to pause ads if the website
        goes down or if cost per acquisition spikes above $75. Madgicx maps audience segments by buyer stage and
        automatically excludes past customers from retargeting. Marpipe runs a multivariate test of 50 creative
        variants; only the top five go live. This staged, validated approach means every dollar goes toward the
        right audience, with the right creative, at the right time, no wasted budget, no sudden performance drops.</p>
      <p className="text-base text-white shadow-text pt-3">
        The difference is not in the tools themselves, but in the discipline of their deployment. A Measured Lead
        Generation system that lasts is one where every process, data cleaning, rule scripting, creative testing, <GlossaryLink slug="budget-pacing" className="text-[#0B162A] hover:underline">budget
        pacing</GlossaryLink>, is scheduled, monitored, and improved as the business scales. Skipping these steps or
        treating automation as a silver bullet leads straight to <GlossaryLink slug="customer-churn" className="text-[#0B162A] hover:underline">churn</GlossaryLink>,
        wasted spend, and the same bottlenecks you started with, only now they are automated.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-separates-a-measured-lead-generation-implementation-that-lasts-from-one-that-falls-apart" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Separates a Measured Lead Generation Implementation That Lasts From One That Falls Apart
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
              <h2 id="what-separates-a-measured-lead-generation-implementation-that-lasts-from-one-that-falls-apart-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Separates a Measured Lead Generation Implementation That Lasts From One That Falls Apart
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
