
export default function RolesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When a small team rolls out Intelligent Content Planning, the work does not just get faster, it
        changes shape. The roles that spent hours on manual research, drafting, and approval now spend more
        time on strategy, oversight, and creative review. In practice, this means fewer late nights cobbling
        together blog ideas and more time refining the core message. For a marketing coordinator who used to
        build campaign calendars from scratch, the process shifts: instead of staring at a blank spreadsheet,
        they start with a set of data-backed topic clusters from MarketMuse or Semrush, and focus on adapting
        those ideas to what actually fits the brand and the local market.</p>
      <p className="text-md text-white shadow-text pt-3">
        Writers and content creators are the first to feel the shift. With tools like HyperWrite embedded in
        the browser, what used to be a half-hour drafting an email or social post now takes a few minutes, and
        the assistant suggests context-aware completions in the business’s own tone. Instead of losing time to
        writer’s block or repetitive copy, they move quickly to refining, fact-checking, and injecting the
        unique perspective that only a person on the team can provide. The AI does not replace the voice of
        the business, it gives the team more bandwidth to focus on what makes their message stand out.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval chains also change. With Hootsuite’s integrated scheduling and workflow, posts do not pile up
        in someone’s inbox waiting for signoff. Automated routing moves drafts through the right reviewers
        based on pre-set rules (for example, by department or dollar threshold), and audit trails capture who
        approved what. This reduces bottlenecks and cuts down on errors caused by missed handoffs. The team
        spends less time in back-and-forth email chains and more time collaborating on high-impact campaigns.</p>
      <p className="text-md text-white shadow-text pt-3">
        For the person who manages reporting and performance tracking, the change is even more dramatic.
        Instead of manually pulling numbers across platforms, they get real-time visibility into what is
        ranking, what is being cited by AI search engines, and what topics are driving actual leads. With
        Scalenut’s brand mention tracking and Semrush’s visibility dashboards,
        the&nbsp;feedback loop&nbsp;tightens. The team can
        see, week by week, which content is actually achieving measurable results, and adjust course
        instantly, rather than waiting for a monthly review.</p>
      <p className="text-md text-white shadow-text pt-3">
        The biggest change is cultural. When the busywork is automated, small teams can finally afford to be
        proactive. The Friday afternoon described in the opening looks different: the team is not scrambling
        to fill the calendar or fix another content fire. Instead, they are reviewing the next quarter’s topic
        map, discussing how to adapt campaign angles to the latest trend, and deciding how to repurpose a
        well-performing blog post into a new LinkedIn series or a targeted email campaign. People stop
        measuring output by hours spent and start measuring it by results delivered, leads captured, rankings
        gained, and customer questions answered. That is the real outcome of Intelligent Content Planning: not
        just fewer headaches, but a team that gets to do the work that matters.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-peoples-jobs-change-when-intelligent-content-planning-goes-live" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How People’s Jobs Change When Intelligent Content Planning Goes Live
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-peoples-jobs-change-when-intelligent-content-planning-goes-live-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How People’s Jobs Change When Intelligent Content Planning Goes Live
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
