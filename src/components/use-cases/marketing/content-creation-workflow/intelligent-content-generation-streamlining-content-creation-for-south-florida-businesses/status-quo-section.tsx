export default function StatusQuoSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every hour spent wrestling with content is an hour not spent serving customers or growing revenue. For
        a small business, the cost of manual content creation is everywhere, but rarely tracked. It starts
        with the obvious: business owners and senior staff pulled away from billable work to write Instagram
        captions or edit blog drafts. What looks like a twenty-minute task sprawls into hours as they search
        for the right words, rewrite for each channel, and double-check for mistakes. Meanwhile, calls go
        unanswered, invoices wait, and actual customer needs get bumped to tomorrow’s list.</p>
      <p className="text-md text-white shadow-text pt-3">
        Errors creep in at every stage. Product descriptions stay as vague one-liners because nobody ever has
        time to finish them. Blog drafts get started and abandoned, or published with inconsistent details,
        one page says you offer commercial cleaning, another says residential, and a third invents a service
        you never provided. Social posts go out with the wrong dates or off-brand messaging, and emails
        intended to nurture leads are either never sent or so generic they get ignored. The result is a
        patchwork of digital assets that don’t match, eroding trust with every click a potential customer
        makes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Delay is the silent killer. That Friday afternoon in the office where a new offer should be up on the
        website or promoted on social media? It slips into next week, then never happens at all. Seasonal
        campaigns and local events are missed, not for lack of intent but because the steps involved, writing,
        approving, formatting, and scheduling, are too many for a small team. By the time the post goes live,
        the moment has passed. The business misses not only the immediate opportunity but also the search
        traffic and engagement that come with being first or timely.</p>
      <p className="text-md text-white shadow-text pt-3">
        The risk multiplies with every workaround. When businesses try to scale by hiring freelancers or
        agencies, they absorb a new set of costs: high monthly retainers, delays in delivery, and a constant
        need to review and rewrite drafts that miss the business’s real voice or facts. When they try to do it
        all in-house, the burden falls on whoever is available, often the owner, assistant, or a junior
        staffer with no writing background. In both cases, the real cost lands on the people who keep the
        business running. They pay with longer hours, more stress, and the frustration of seeing their
        expertise lost in translation.</p>
      <p className="text-md text-white shadow-text pt-3">
        The operational cost isn’t just about time or money, it’s about missed growth. When lead follow-up
        emails aren’t sent, potential revenue walks out the door. When social pages go dark or websites stay
        static, the business drops out of local search and loses ground to larger competitors. When new
        product launches or service updates don’t get promoted, inventory sits and opportunities fade. The
        risk of error, wrong pricing, outdated offers, conflicting details, can trigger customer complaints or
        even legal headaches, especially in regulated industries or high-stakes contracts.</p>
      <p className="text-md text-white shadow-text pt-3">
        In the end, the cost of sticking with manual, disjointed content creation is paid by everyone: the
        owner who works late, the staff who juggles too many roles, and the customers who never see what makes
        the business different. The opportunity cost, the pipeline that never fills, the search ranking that
        never moves, the customer who never comes back, adds up quietly until the business feels stuck, always
        behind, never ahead. Intelligent Content Generation is not about saving a few hours here or there.
        It’s about reclaiming lost revenue, restoring team focus, and making sure the business’s real value
        shows up everywhere it matters.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-hidden-cost-of-manual-content-creation-hours-errors-and-who-pays" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Hidden Cost of Manual Content Creation: Hours, Errors, and Who Pays
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-hidden-cost-of-manual-content-creation-hours-errors-and-who-pays-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Hidden Cost of Manual Content Creation: Hours, Errors, and Who Pays
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
