import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DecisionsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The most critical choices in a lead enrichment and predictive scoring rollout are made before a single
        record is touched. These are the decisions that shape everything downstream, and once set, they are
        nearly impossible to walk back without rebuilding your pipeline from scratch. In small business
        environments around Miami-Dade, Broward, and West Palm Beach, the margin for error on these early
        calls is thin, change the wrong lever, and you lock in the very friction you meant to remove.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first non-negotiable is the definition of your business objectives. This means more than “get more
        leads.” It is about picking the single operational outcome you are willing to be measured on. Do you
        want to cut the time your team spends qualifying by half? Do you need to stop cold-calling companies
        that will never buy? Or is the real win tracking which campaigns actually move pipeline so you can
        stop wasting ad budget? The objective picked here sets the scope for every tool and data source that
        follows. If you pick poorly or vaguely, your pipeline will drift, and you will be chasing the wrong
        outcomes quarter after quarter.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next is the data you decide to trust. Early on, you commit to the sources that will feed your
        enrichment and scoring models,&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, website analytics,
        email sequences, third-party enrichment APIs. Once you choose, that decision shapes how accurate,
        current, and actionable your scoring gets. For example, if you only pull from
        aging&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;data, you lock in the same decay that’s
        already costing you missed deals. But if you plug in Apollo to inject real-time firmographics and
        verified contact details, you move from static to dynamic targeting. With Factors, you can pivot to
        tracking real engagement on your site, not just form fills. Each source has its own strengths and
        blind spots, and switching later is not just a settings change, it&#39;s a rebuild.</p>
      <p className="text-md text-white shadow-text pt-3">
        The structure of your pipeline, how leads move from anonymous click to scored opportunity, gets locked
        in at this stage too. Are you scoring individuals or accounts? Do you route by geography, industry, or
        seniority? If you set your pipeline to route every contact who visits your pricing page to sales, you
        will get a flood of noise unless you have Snitcher or Leadfeeder filtering out non-ICP traffic and
        scoring for real intent. If you leave routing rules too loose, high-value leads can sit idle or bounce
        between reps for days.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data privacy and compliance is a line you cannot cross back over. If your enrichment process pulls
        personal data without clear opt-in or you sync external sources that aren’t aligned with your
        industry’s compliance requirements, you can’t just ‘fix it later’, you risk fines, reputation damage,
        and loss of trust. Lusha, for example, brings granular compliance controls to the table, flagging
        risky data before it hits your system. This isn’t something you patch after the fact; it’s an upfront
        design choice.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, you choose your definition of high intent. This is not a technical setting, it’s a business
        rule that shapes which leads get sales attention. Some teams want every company that visits the
        contact page. Others only want those who check pricing and download a case study. Tools like Factors
        and Leadfeeder let you define and update these thresholds, but if you set them too tight or too loose
        at the start, you skew your pipeline for quarters. Change it later, and you lose continuity in your
        metrics and sales workflow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Get these early decisions right, and your pipeline will surface warm, local leads to the right rep at
        the right time, every time. Get them wrong, and no amount of tuning or retraining will save you from a
        system that keeps sending your team in circles. The shape of your process, the quality of your data,
        and the clarity of your objective are set up front, these are the rails your pipeline will run on, for
        better or worse.</p>
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
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-decisions-that-are-made-early-and-cannot-be-unmade" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Decisions That Are Made Early and Cannot Be Unmade
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
