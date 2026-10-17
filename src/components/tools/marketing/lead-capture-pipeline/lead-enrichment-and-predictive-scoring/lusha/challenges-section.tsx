import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every small business in South Florida knows the feeling: you have a list of prospects, but most of
        your day is spent leaving voicemails, getting blocked by receptionists, or waiting for a reply that
        never comes. The cost of lead enrichment and predictive scoring the old way is not just in hours, but
        in missed revenue and wasted opportunity. When you rely on generic company numbers or public email
        addresses, your team is locked out of real conversations. Every call that hits a dead end is a lost
        shot at pipeline.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual prospecting drags down even the most motivated sales team. Instead of talking to
        decision-makers, reps spend hours researching company websites, LinkedIn profiles, and outdated
        databases. They might find a name, but not the direct line or verified email that actually reaches the
        buyer. The result: your best people are stuck playing detective instead of selling. For a small
        business, that means the difference between growth and stagnation.</p>
      <p className="text-md text-white shadow-text pt-3">
        The problem compounds when the data itself is stale. Employees change roles, leave companies, or get
        promoted, but your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;does not keep up. Reps pitch
        to people who have already moved on, killing momentum and credibility. Outbound campaigns bounce off
        invalid inboxes, damaging your sender reputation and burning through your marketing budget. Without
        verified, up-to-date contact data, every campaign becomes a gamble.</p>
      <p className="text-md text-white shadow-text pt-3">
        Website traffic should be your warmest source of leads, but without enrichment, 98% of those visitors
        leave no trace. You have no way to know which companies are researching your services or which
        decision-makers are showing intent. High-intent buyers slip through the cracks, and your team is left
        chasing cold leads while competitors scoop up the real opportunities. This is not just a missed
        chance; it is a silent tax on your pipeline.</p>
      <p className="text-md text-white shadow-text pt-3">
        Compliance and&nbsp;<GlossaryLink slug="data-quality">data quality</GlossaryLink>&nbsp;are not
        optional, either. Sending to unverified or risky email addresses can trigger regulatory headaches and
        expose your business to solicitation complaints. Manual checks are slow and unreliable. Every mistake
        means more risk, more wasted effort, and more time spent fixing problems that should never have
        reached your desk in the first place.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in Miami-Dade, Broward, and West Palm Beach, these costs are not abstract. They
        show up as lost deals, wasted payroll, and a team that spends too much time on the wrong work. The
        Friday afternoon scramble in your office is not for lack of hustle, it is because the system is
        stacked against you. Without a pipeline that brings verified, actionable data and predictive scoring
        straight into your workflow, every week will look the same: too many dead ends, too few real
        conversations, and too much money left on the table.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing This by Hand
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing This by Hand
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
