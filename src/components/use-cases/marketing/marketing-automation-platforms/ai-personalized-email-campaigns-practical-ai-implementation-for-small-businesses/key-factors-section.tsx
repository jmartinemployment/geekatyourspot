export default function KeyFactorsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The difference between an email automation that delivers and one that fizzles out is rarely about the
        branding or the tool’s feature list. It comes down to the groundwork: clear goals, honest data prep, and a
        rollout that matches your actual workflow and staff capacity, not what looks good in a demo. The best
        implementations hold up because they fit the way your business already works, and because they are built
        with the right level of automation, not the fanciest bells and whistles.</p>
      <p className="text-base text-white shadow-text pt-3">
        The most common pitfall is skipping the business objective phase. When a small business jumps straight to
        configuring Mailchimp or Brevo without first deciding what “success” looks like, the result is a jumble of
        campaigns, half-used segments, and a team that quickly reverts to old habits. The strongest projects start
        with a single problem, like lost leads from web forms going unanswered, and build one workflow to address
        it. This approach means the team can see progress (like more appointments booked each week), which builds
        buy-in for further automation.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another sticking point is data quality. Even the best automation platform cannot overcome missing or messy
        data. If contacts are missing email addresses, if tags are inconsistent, or if lead sources are not tracked,
        segmentation and triggers will fire incorrectly or not at all. This is where MailerLite and Moosend shine:
        their segmentation tools are only as powerful as the data you feed them. The teams that succeed spend real
        time mapping data flows, standardizing field names, and running cleanup passes before turning on any
        workflow. They also test with small batches of real contacts to catch errors before they reach customers.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integration is another point of failure. Many small businesses use multiple systems, website forms, CRMs,
        scheduling apps, and payment processors. Automation that holds up is built around the real-world flow of
        data: a new lead fills out a form, the contact lands in GetResponse or ActiveCampaign, a sequence starts,
        and their engagement is tracked for follow-up. If the data does not sync or if staff have to manually export
        and import lists, the system will be abandoned within weeks. The right implementation uses native
        integrations or reliable connectors so that the handoff is invisible to the team.</p>
      <p className="text-base text-white shadow-text pt-3">
        A project also stalls when it tries to do too much at once. It is tempting to launch multiple sequences, add
        every possible trigger, and segment contacts into dozens of lists, especially with feature-rich tools like
        ActiveCampaign. But for small teams, complexity kills adoption. The best rollouts start with one or two
        sequences, a handful of segments, and clear rules for how contacts enter and exit automations. Mailchimp,
        for example, lets you start with a simple welcome series and only add branching or advanced triggers once
        the basics are running smoothly.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, the implementations that last are the ones where someone owns the process. This does not have to be
        a dedicated marketing manager, it could be the office administrator or the owner, but someone needs to check
        that new leads are flowing in, that sequences run as intended, and that analytics are reviewed. The
        strongest teams set aside time each month to review campaign results, prune inactive segments, and adjust
        timing. This is where tools like Moosend and MailerLite help, with dashboards and templates that make
        reporting and adjustment simple enough for a non-technical user.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, the difference comes down to discipline and fit. The projects that succeed are built for the
        business as it exists, with clean data, simple automations, and clear ownership. They scale because they
        solve one real problem at a time and because the team sees the payoff, less manual work, more sales, and a
        system that holds up even as the business grows.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-some-email-automation-projects-stall-while-others-scale-smoothly" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Some Email Automation Projects Stall While Others Scale Smoothly
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-some-email-automation-projects-stall-while-others-scale-smoothly-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Some Email Automation Projects Stall While Others Scale Smoothly
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
