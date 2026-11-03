import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The upfront decisions about data structure and mapping are what determine whether Bir&rsquo;s automation runs
        smoothly or causes confusion. Small businesses looking to optimize ad spend with Bir need to get these right
        before any rules are turned on. Geek @ Your Spot handles this groundwork as part of implementation, making sure
        every metric and account connection feeds Bir the right signals.</p>
      <p className="text-base text-white shadow-text pt-3">
        First, the structure of your ad accounts and naming conventions must be consistent. Bir&rsquo;s automation logic
        depends on being able to target specific campaigns, ad sets, or ads based on names, tags, or folders. If your
        accounts have legacy names or inconsistent labels, rules may fire on the wrong assets or miss key performers.
        Geek @ Your Spot audits your existing structure, recommends a clear naming convention, and helps re-label assets
        where needed. This is not just a technical fix, it is what allows Bir&rsquo;s filters and rule targeting to work
        reliably, especially when you want to apply aggressive scaling or budget-protection rules to only a subset of
        campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next, metric mapping is critical. Bir can ingest data from platforms like Google Analytics, Sheets, Hyros,
        AppsFlyer, Adjust, and Wicked Reports, but each source may use different field names or formats for core metrics
        like <GlossaryLink slug="cost-per-acquisition">CPA</GlossaryLink>, ROAS, or conversions. Geek @ Your Spot maps
        these fields so Bir&rsquo;s rule engine reads the right values every time. For example, if your Google Analytics
        tracks purchases differently from your Meta account, that mismatch could cause a rule to pause a high-performing
        ad or fail to scale a winner. The mapping process includes setting up custom metrics where business-specific
        KPIs are needed, such as a blended ROAS across platforms or a custom event for lead quality.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data freshness and update frequency also matter. Bir&rsquo;s rules can check performance as often as every 15
        minutes, but that is only useful if the underlying data is up to date (<a id={`tools-marketing-precision-lead-acquisition-bir-data-mapping-source-nothink${idSuffix}`} href="https://bir.ch/case-studies/nothink" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Bir</a>,
        as of Oct 25, 2026). Geek @ Your Spot tests each integration to confirm that data feeds are live and that any
        sync delays are flagged. For businesses relying on <GlossaryLink slug="offline-conversions">offline conversion</GlossaryLink>
        imports or delayed attribution, rules can be set to run only after the data is refreshed, preventing premature
        budget shifts or campaign pauses.</p>
      <p className="text-base text-white shadow-text pt-3">
        Custom timeframes and performance windows are another key mapping decision. Bir allows you to define the exact
        periods that rules should evaluate, such as last 3 days, 7 days, or hourly slices, so automation is based on
        trends, not noise (<a id={`tools-marketing-precision-lead-acquisition-bir-data-mapping-source-webtopia${idSuffix}`} href="https://bir.ch/case-studies/webtopia" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Bir</a>,
        as of Oct 25, 2026). Geek @ Your Spot works with you to set these windows to match your sales cycle and campaign
        goals. For example, if your business sees weekend surges or late-night spikes, the rules can be tuned to catch
        these patterns and adjust spend automatically, rather than reacting to outliers or short-term dips.</p>
      <p className="text-base text-white shadow-text pt-3">
        For multi-account or multi-market setups, mapping rules to folders or groups is essential. Bir can duplicate
        rules across accounts, but only if the data structure is unified. Geek @ Your Spot ensures that shared metrics
        and naming conventions are in place, so a rule that works for one location or product line will work identically
        for others. This is how small businesses with multiple storefronts or brands can scale their optimization
        without losing control over individual campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, all mapping decisions are documented and tested before automation goes live. Geek @ Your Spot provides
        a clear mapping sheet or dashboard, so your team can see exactly which data fields power each rule and where that
        data comes from. This transparency means you can troubleshoot issues quickly and adjust as your business grows
        or your campaign mix changes. For small businesses, having this foundation in place means Bir&rsquo;s automation
        does not just run, it delivers results you can trust, with fewer surprises and less manual oversight.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-data-structure-and-mapping-choices-shape-a-successful-bir-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What data structure and mapping choices shape a successful Bir deployment
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
              <h2 id="what-data-structure-and-mapping-choices-shape-a-successful-bir-deployment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What data structure and mapping choices shape a successful Bir deployment
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
