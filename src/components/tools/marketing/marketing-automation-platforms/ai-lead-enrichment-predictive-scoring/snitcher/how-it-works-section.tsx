
export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Snitcher turns anonymous website visits into named, scored, and enriched leads in real time. For a
        small business in South Florida, the mechanics matter. You need to know what happens from the moment a
        visitor lands on your site to the second your team gets a usable, prioritized lead. This section
        breaks down Snitcher&#39;s actual workflow, step by step, as it plays out on your own website.</p>
      <p className="text-base text-white shadow-text pt-3">
        The process starts with a single line of code added to your site header. This tracking script is
        lightweight, no complex setup, no heavy backend. As soon as a visitor arrives, Snitcher’s script
        captures the session and attempts to match the IP address to a verified business profile. That means,
        right away, you see which company is on your site, not just a count of visitors. This mapping is
        instant for corporate traffic: if someone is browsing from their office network, Snitcher identifies
        the company, adds firmographic data like industry, size, and location, and displays it in your
        dashboard within minutes.</p>
      <p className="text-base text-white shadow-text pt-3">
        Snitcher doesn’t stop at company identification. The platform tracks each visitor’s journey through
        your site, what pages they view, how long they stay, which case studies or pricing sheets they read,
        and whether they return for follow-up visits. This behavioral data is crucial. Instead of treating
        every visitor the same, Snitcher weighs each action as an intent signal. For example, a visitor who
        spends time comparing pricing or reading technical documentation is flagged as a higher-potential lead
        than someone who bounces off the homepage. This is where predictive scoring comes in: Snitcher
        calculates a real-time intent score for each account based on their actions, so your sales team knows
        who is actively evaluating and who is just browsing.</p>
      <p className="text-base text-white shadow-text pt-3">
        When a target account, one that matches your Ideal Customer Profile (ICP), hits a key page or shows
        strong buying signals, Snitcher sends an instant alert. This can be a Slack notification, a push into
        your&nbsp;CRM, or an automated message to your sales team. No
        more waiting until someone fills out a form. Your reps get the context they need while the prospect’s
        interest is still fresh. For teams that run outreach through sequencers or want to automate follow-up,
        Snitcher can push leads directly into those workflows, complete with enriched contact details when
        available.</p>
      <p className="text-base text-white shadow-text pt-3">
        Snitcher’s enrichment engine adds another layer of value. For each identified company, the platform
        pulls in additional firmographic data, industry, headcount, revenue, and even technology stack. Where
        possible, it surfaces decision-maker names, titles, business emails, phone numbers, and LinkedIn
        profiles. This means your team isn’t just handed a company name, but a full profile ready for
        outreach. For US traffic, Snitcher’s person-level identification can sometimes resolve anonymous
        sessions to a specific individual, giving you direct access to the right contact, not just the
        account.</p>
      <p className="text-base text-white shadow-text pt-3">
        All of this happens in real time, without manual triage. Snitcher automatically filters out noise,
        like students, competitors, or non-business traffic, so you aren’t wasting time on dead ends. The
        platform’s workflow is built to hand your team a daily, prioritized list of warm leads, each scored by
        intent and enriched with the data needed for a meaningful first touch. For a small business, this
        means less detective work, faster follow-up, and a pipeline that reflects real buying interest, not
        just website hits.</p>
      <p className="text-base text-white shadow-text pt-3">
        The end result is a closed loop: Snitcher identifies and enriches every company-level visit, scores
        each one based on real engagement, and routes the best-fit leads straight to your team for action.
        Your sales and marketing staff spend less time guessing and more time closing deals. The platform’s
        process is transparent and fast, with no hidden steps or black-box algorithms, just clear, actionable
        data that turns website visits into real pipeline.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="snitchers-step-by-step-process-from-anonymous-visit-to-actionable-lead" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Snitcher’s Step-by-Step Process: From Anonymous Visit to Actionable Lead
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
              <h2 id="snitchers-step-by-step-process-from-anonymous-visit-to-actionable-lead-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Snitcher’s Step-by-Step Process: From Anonymous Visit to Actionable Lead
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
