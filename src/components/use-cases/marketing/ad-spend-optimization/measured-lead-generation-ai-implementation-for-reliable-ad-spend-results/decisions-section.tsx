export default function DecisionsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Certain decisions at the start of a Measured Lead Generation rollout will shape everything that follows, and
        once made, they set the limits for what’s possible later. The most critical are the business goal you
        choose, your data standards, which platforms you integrate first, and how much local control you require
        over targeting and creative. Get one of these wrong, and later tweaks cannot fix the root problems.</p>
      <p className="text-base text-white shadow-text pt-3">
        Everything rides on a clear, measurable business outcome. You set one hard target, like cost per qualified
        lead, not just volume or click-through. This is not the place for “we’ll know it when we see it.” If your
        goal is “get more leads,” you will end up paying for a lot of unqualified clicks. But if you set a target
        like “keep cost per booked appointment under $60,” every rule, script, and creative variant gets measured
        against that (<a id={`use-cases-marketing-measured-lead-generation-decisions-source-wrench-ai${idSuffix}`} href="https://wrench.ai/products/digital-campaign-agent" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Wrench</a>,
        as of Oct 24, 2026). This is the difference between a system that can be optimized and one that can only be
        patched.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next, you choose your data standard. If you start with loose, unvalidated contact lists, or CRM records that
        are incomplete, you are stuck with bad matches and wasted ad spend. Wrench is designed to fix this by
        cleaning and segmenting your CRM data automatically, but it works best when you commit early to a single
        source of truth for contact records. If you try to merge lists later, you will see duplicate exclusions,
        mismatched audience segments, and broken lookalikes that no algorithm can fix after the fact.</p>
      <p className="text-base text-white shadow-text pt-3">
        Platform selection and integration order matter more than most realize. If you launch with search ads only,
        for instance, you limit your ability to automate budget shifts when demand or local search volume spikes on
        another platform. Performance Max and Madgicx both allow you to move budget dynamically between search,
        maps, and social based on live conversion signals. But if you hold back on integrating all your channels at
        the start, you will not get the benefit of this cross-channel automation. The decision to go “search first”
        or “social first” is not reversible without starting the system over.</p>
      <p className="text-base text-white shadow-text pt-3">
        The same holds for your approach to creative. If you lock your campaigns into a small set of static ads, you
        create a bottleneck that Marpipe cannot undo later. Marpipe’s strength is in generating hundreds of ad
        variants and running multivariate tests at scale. If you design the first rollout around a narrow creative
        set, the system will collect too little data to optimize, and you end up missing out on the cost savings and
        performance lift that come from fast creative iteration.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, your rules for local targeting and control set a hard boundary for future automation. If you
        require every exclusion, bid adjustment, or negative keyword to be signed off manually, you will not be able
        to take full advantage of Optmyzr’s automated scripts for pausing toxic keywords, protecting against sudden
        competitor bid spikes, or defending your search footprint. The more manual steps you bake in early, the less
        the system can adapt in real time.</p>
      <p className="text-base text-white shadow-text pt-3">
        A hypothetical: a small HVAC company in Miami wants to keep control over every ad exclusion, but also wants
        to automate budget shifts between Google and Meta. If they start with manual review for every change, the
        automation will be forced to wait for human sign-off, and the real-time cost controls, the core promise of
        Performance Max, Madgicx, and Optmyzr, will not deliver. This tension cannot be solved by “turning on
        automation later”; the system needs the rules set at the start.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, the goals, data quality, initial integrations, creative structure, and control logic you set on
        day one shape the ceiling for your measured lead generation results. These are not decisions you can leave
        open for later; they are the rails the whole process runs on. Anything that is not built to change in real
        time will remain manual forever, and no amount of after-the-fact optimization can make up the difference.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-decisions-that-are-made-early-and-cannot-be-unmade" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Decisions That Are Made Early and Cannot Be Unmade
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
              <h2 id="the-decisions-that-are-made-early-and-cannot-be-unmade-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Decisions That Are Made Early and Cannot Be Unmade
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
