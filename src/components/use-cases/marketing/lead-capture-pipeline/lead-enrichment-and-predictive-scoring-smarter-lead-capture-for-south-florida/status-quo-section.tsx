
export default function StatusQuoSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The hidden costs of sticking with manual lead management stack up fast, and most businesses in
        Miami-Dade, Broward, and Palm Beach don’t see the full picture until it starts hurting their bottom
        line. It’s not just about working harder, it’s about pouring time and money into a process that
        guarantees missed opportunities, higher risk, and staff burnout.</p>
      <p className="text-md text-white shadow-text pt-3">
        Start with the hours lost. Every week, your sales team spends countless hours dialing dead numbers,
        leaving voicemails that go unanswered, or working through lists that are already out of date. If you
        have three reps, each spending four hours a week on dead-end outreach, that’s twelve hours gone before
        a single real conversation happens. The cost isn’t just in salary, every wasted hour is an hour not
        spent following up with a real, warm lead. Apollo’s instant enrichment and verified contact data can
        erase most of this downtime by making sure every lead on the list is both reachable and relevant.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next drain is the delay. When a lead lands on your site and fills out a form, the clock starts
        ticking. If your team can’t enrich and score that lead instantly, it sits in a queue, cooling off. By
        the time someone gets around to it, the buyer’s already moved on or found another supplier. This delay
        is one of the biggest killers of pipeline momentum for small businesses. Apollo and Factors both cut
        this lag to seconds by pushing enriched, scored leads directly into
        your&nbsp;CRM, so your team can reach out while the prospect
        is still thinking about you, not hours or days later.</p>
      <p className="text-md text-white shadow-text pt-3">
        Then come the errors. Manual entry means mistakes, misspelled domains, missing phone numbers, or
        records that don’t match across systems. These errors ripple downstream, causing bounced emails,
        missed follow-ups, and confusion that slows your sales process to a crawl. Lusha’s automated bulk
        enrichment and data hygiene tools clean and complete thousands of records at once, flagging anything
        that doesn’t meet compliance standards before your team even sees it. For a small business, this means
        fewer lost deals and fewer compliance headaches.</p>
      <p className="text-md text-white shadow-text pt-3">
        The biggest cost, though, is opportunity lost. Every day, high-intent companies visit your website,
        check your pricing page, or read your case studies, and then disappear because nobody knows they were
        there. Snitcher and Leadfeeder fix this by triggering instant notifications when a high-fit local
        business hits your site. Your team can reach out while the interest is fresh, instead of waiting for a
        form fill that may never come. This is a direct pipeline boost: every warm lead that gets a timely
        call is a shot at revenue that would otherwise be missed.</p>
      <p className="text-md text-white shadow-text pt-3">
        There’s also a hidden tax in the form of burnout. Sales reps working from cold lists and chasing bad
        data face constant rejection, slow progress, and little reward. Over time, this grinds down morale and
        leads to turnover. When you flip the script, giving your team a daily list of verified, in-market
        accounts, prioritized by real buying signals, you not only get better results, you keep your best
        people engaged and productive. That’s the difference between a team that dreads Mondays and one that
        looks forward to closing deals.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, failing to automate lead enrichment and predictive scoring increases your risk. Outdated
        records put you at risk of regulatory complaints, while high bounce rates damage your sender
        reputation and make future campaigns less effective. Lusha and Apollo both guard against these risks
        by flagging bad data, updating records as contacts move, and keeping your outreach compliant without
        extra manual work.</p>
      <p className="text-md text-white shadow-text pt-3">
        So when you add up the hours lost, the opportunities missed, the errors introduced, and the burnout
        created, the real cost of doing nothing is clear. Manual lead management is not just inefficient, it’s
        expensive, risky, and unsustainable. The businesses that automate these steps, with the right tools
        for enrichment, scoring, and real-time visitor identification, are the ones that pull ahead, building
        pipeline faster, closing more deals, and keeping their teams focused on what matters.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-real-cost-of-manual-lead-management-wasted-hours-missed-revenue-and-burnout" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Real Cost of Manual Lead Management: Wasted Hours, Missed Revenue, and Burnout
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
              <h2 id="the-real-cost-of-manual-lead-management-wasted-hours-missed-revenue-and-burnout-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Real Cost of Manual Lead Management: Wasted Hours, Missed Revenue, and Burnout
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
