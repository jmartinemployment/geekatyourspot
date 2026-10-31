import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Getting the most from Wask starts with making the right data structure and mapping decisions before automation
        goes live. The platform&rsquo;s value depends on clean, connected data, if your campaign structure is messy or
        your conversion tracking is unreliable, automation will only reinforce those problems. Wask is built to surface
        these issues up front, so you can address them before they cost you real money.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first decision is how to organize your campaigns and ad sets. Wask works best when each campaign has a clear
        objective and each ad set targets a distinct audience segment. If your campaigns mix awareness, consideration,
        and conversion goals, or if ad sets overlap in targeting, Wask&rsquo;s rules can trigger in ways that fight each
        other. For example, a budget increase rule on a broad campaign can pull spend away from a narrow,
        high-performing segment. The platform&rsquo;s audit tools flag these overlaps and recommend consolidation or
        clearer segmentation, so rules apply cleanly and results are measurable.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next is <GlossaryLink slug="conversion-tracking">conversion tracking</GlossaryLink>. Wask&rsquo;s automation
        uses conversion data to trigger most of its actions, pausing low performers, boosting winners, reallocating
        budget. If your Google Tag or Meta Pixel is missing events or firing inconsistently, every optimization rule
        will be built on shaky ground. The platform&rsquo;s initial audit checks that all key conversion events are
        tracked, enhanced conversions are active, and attribution windows match your campaign goals. Before any rules go
        live, you confirm that your data flows match what you want to optimize for, whether that&rsquo;s purchases,
        leads, or app installs.</p>
      <p className="text-base text-white shadow-text pt-3">
        Attribution settings matter as well. Google and Meta each have their own default attribution windows and
        reporting delays. Wask prompts you to align your automation rules with these windows, so you do not pause a
        campaign for underperformance when conversions are simply delayed. For example, Google&rsquo;s enhanced
        conversions can take up to 72 hours to report, and Meta&rsquo;s CAPI events can lag by a day (<a id={`tools-marketing-precision-lead-acquisition-wask-data-mapping-source-google-ads-automation${idSuffix}`} href="https://www.wask.co/google-ads-automation" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Wask</a>,
        as of Oct 29, 2026). Wask lets you set a buffer in your rule logic, so you avoid false negatives and keep
        campaigns running that are actually working.</p>
      <p className="text-base text-white shadow-text pt-3">
        Rule configuration is where mapping becomes concrete. Wask&rsquo;s visual builder lets you define which
        campaigns, ad sets, or ads each rule applies to, and what metric triggers action. You can apply a rule to a
        single campaign or across your whole account, but the more precise your mapping, the less risk of unintended
        consequences. For example, a pause rule that targets all campaigns with high spend and no conversions might
        catch both a new test and a proven performer in a slow week. By mapping rules to campaign type, funnel stage, or
        audience segment, you keep control over what gets optimized and when.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative asset mapping is another up-front decision. Wask&rsquo;s creative analysis tools compare performance
        across all your ad variants, flagging fatigue and surfacing winners. To get the most from this, you need
        consistent naming conventions for your ads and assets. If creative variants are not labeled or grouped
        logically, Wask&rsquo;s insights are harder to act on. The platform supports custom naming and tagging, so you
        can track which creative is running where and see at a glance which ones need replacement or further testing.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget mapping is also crucial. Wask&rsquo;s automation rules can shift spend between campaigns or ad sets, but
        only if you have a clear structure. If your budgets are scattered or set at the wrong level, optimization will
        be less effective. The platform recommends using campaign-level budgets for testing, then switching to ad set
        budgets for scaling proven performers. This lets you control where spend flows and prevents automation from
        starving your best segments or overfunding weak ones.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams managing multiple brands or accounts, Wask&rsquo;s mapping tools let you separate data and rules by
        client or business unit. This is especially useful for agencies or larger small businesses with more than one
        line of business. Each account can have its own rules, reporting, and approval flows, so you do not mix data or
        optimization logic across unrelated campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot&rsquo;s role is to guide these data mapping decisions in the context of your real business. We
        help you audit your current structure, clean up conversion tracking, set attribution windows, and design rules
        that fit your goals. We do not just turn on automation and walk away, we make sure your data is mapped in a way
        that supports evidence-based decisions and sustainable optimization. The result is a Wask deployment that
        delivers clear, actionable results, not just a new layer of complexity.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-structure-and-mapping-decisions-that-matter-when-deploying-wask" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data Structure and Mapping Decisions That Matter When Deploying Wask
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-structure-and-mapping-decisions-that-matter-when-deploying-wask-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data Structure and Mapping Decisions That Matter When Deploying Wask
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
