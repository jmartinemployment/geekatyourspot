import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function KeyFactorsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A Multi-State Sales Tax Nexus solution only works if it keeps pace with your business, not just in the
        first month, but as you add channels, launch new products, or expand into more states. Success comes
        down to three things: continuous data integrity, proactive alerting, and managed change when the rules
        inevitably shift. Most failures come from skipping one of these, or trusting the wrong tool to do a job
        it was never meant for.</p>
      <p className="text-md text-white shadow-text pt-3">
        First, data integrity is non-negotiable. If your sales tax engine is only as reliable as the data it
        receives, then a single gap, an offline invoice, a missed Amazon payout, a wholesale order logged in a
        spreadsheet, creates blind spots. This is where TaxCloud’s direct integrations matter. By plugging into
        every channel, it eliminates the risk of undercounting, which is a leading cause of late penalties and
        audit exposure. But the real split between a rollout that holds and one that stalls is ongoing
        validation. Zamp’s managed onboarding process does not just connect the pipes. Its team reviews your
        SKUs, matches them to taxability codes, and validates every data stream for accuracy. That human check
        is what keeps errors from snowballing.</p>
      <p className="text-md text-white shadow-text pt-3">
        Second, proactive alerting is what keeps you from waking up to a crisis. The best systems, like those
        from TaxJar and Quaderno, issue real-time alerts as you approach a state’s threshold, well before you
        cross it. If it takes a Friday night spreadsheet review to realize you’ve tripped New York’s
        200-transaction line, the system failed you. Real implementations use dashboards and live notifications,
        not static reports, so you always know where you stand. When a new sales channel goes live, or a holiday
        sale spikes your volume, you see the impact immediately.</p>
      <p className="text-md text-white shadow-text pt-3">
        Third, managed change is the safeguard against shifting state laws and business pivots. A solution that
        stalls is almost always one that was set up once and never updated, a classic &quot;set it and forget
        it&quot; mistake. As states drop transaction thresholds or add new local filing rules, the platform you
        rely on must adapt. TaxValet’s managed filings and ongoing asset tracking catch these changes, mapping
        inventory, physical presence, and new regulatory triggers as they emerge. Zamp’s continuous monitoring
        ensures that if your business model changes, say, you add a new fulfillment center or switch payment
        processors, the compliance workflow keeps up without manual intervention.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Centralized, continuously validated sales data: Not just at launch, but every week.</li>
        <li>Real-time threshold and filing alerts: No more end-of-month surprises or missed deadlines.</li>
        <li>Full-cycle managed oversight: Someone is responsible for mapping new products, channels, and compliance triggers.</li>
        <li>Automatic adaptation to rule changes: Tax engines that update for new state laws and local rules without a rebuild.</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        The weak point in most failed implementations is letting a tool run on default settings. Generic
        plug-ins, built for single-state sellers or static catalogs, miss the complexity of a real multi-state
        business. TaxCloud and TaxJar both provide continuous updates and integrations, but only if you use them
        as designed: feeding in every channel, mapping every product, and monitoring every change. Quaderno
        stands out for companies scaling digital
        and&nbsp;<GlossaryLink slug="saas" className="text-[#0B162A] hover:underline">SaaS</GlossaryLink>&nbsp;sales,
        centralizing compliance even as new markets come into play.</p>
      <p className="text-md text-white shadow-text pt-3">
        The other common failure: treating compliance as a one-off project. You cannot “set and forget” a tax
        nexus solution. State rules change, your sales mix changes, and so do your compliance needs. Keeping the
        implementation alive means regular reviews, managed updates, and a clear owner for every step, whether
        that’s an internal team or a managed service like TaxValet or Zamp. Without this, what started as a
        clean rollout quickly becomes a patchwork of missed filings, unregistered states, and mounting audit
        risk.</p>
      <p className="text-md text-white shadow-text pt-3">
        A durable rollout means you always know what’s coming. The team is never left guessing when a threshold
        will be crossed or what to do when a new product launches. The system adapts, the data stays clean, and
        the risk of surprise penalties drops to zero. Anything less, and you’re back to Friday afternoons with a
        spreadsheet, hoping you caught everything, and that’s where most small businesses get burned.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-makes-a-multi-state-tax-implementation-durable-and-where-most-rollouts-fail" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Makes a Multi-State Tax Implementation Durable, And Where Most Rollouts Fail
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
              <h2 id="what-makes-a-multi-state-tax-implementation-durable-and-where-most-rollouts-fail" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Makes a Multi-State Tax Implementation Durable, And Where Most Rollouts Fail
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
