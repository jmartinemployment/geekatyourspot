export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The real cost of manual content creation for a small business in South Florida is not just measured in
        dollars. It drains hours from the week, pulls focus from client work, and keeps growth locked behind a
        bottleneck. Every time a business owner sits down to write, they are not serving a customer or closing
        a sale. The blank page is more than a creative hurdle, it is a direct hit to productivity and morale.
        When the pressure is on to keep websites, social feeds, and email lists active, the task can feel
        endless. The result is often silence: no posts, no updates, and no fresh content to keep the business
        visible.</p>
      <p className="text-md text-white shadow-text pt-3">
        Many teams try to solve this by hiring an agency or freelancer. That brings its own problem. The cost
        of a traditional marketing agency in Miami-Dade or Broward can run into thousands of dollars each
        month, with no guarantee that the investment will bring in more leads or sales. For most small
        businesses, that is simply not an option. The expense eats into cash flow, and the risk is high, if
        the content does not perform, the money is gone. The alternative is to keep it in-house, but that only
        shifts the burden. Someone on the team, often the owner or office manager, spends late nights or
        weekends trying to write copy, build campaigns, and schedule posts. Other priorities get pushed aside,
        and the business’s online presence suffers.</p>
      <p className="text-md text-white shadow-text pt-3">
        Even when content goes out, the process is a gamble. Without data to show what works, every campaign
        is a shot in the dark. The business might spend on Facebook ads or Google campaigns, but if the
        message does not connect, the budget disappears with little to show for it. Guesswork in ad copy means
        missed opportunities and wasted spend. If the tone is off or the message does not match the audience,
        engagement drops. The business ends up paying for impressions and clicks that do not convert.</p>
      <p className="text-md text-white shadow-text pt-3">
        The cost is not just in money or lost time. There is a hidden toll in missed growth. Inconsistent
        content means the business drops off the radar for potential customers. Social media profiles go
        quiet, websites stop ranking, and email campaigns lose their punch. Over time, the business looks less
        active, less trustworthy, and less relevant than larger competitors who keep a steady stream of
        content flowing. That makes it harder to win new clients and keep existing ones engaged.</p>
      <p className="text-md text-white shadow-text pt-3">
        Trying to scale this process manually is not realistic for a small team. The more the business grows,
        the more content it needs, across more channels, for more audience segments, and with more
        personalization. Each new campaign adds complexity. Without automation and data-driven insights, the
        team is stuck in a cycle of reactive work and constant catch-up. The business pays in stress, in
        opportunity cost, and in real dollars lost to inefficient marketing.</p>
      <p className="text-md text-white shadow-text pt-3">
        Anyword breaks this cycle. Instead of relying on guesswork, it uses predictive scoring to show which
        copy will perform before a dollar is spent. Instead of hours lost to the blank page, it generates
        content ideas and drafts in seconds. Instead of static, one-size-fits-all messaging, it tailors
        content to specific audiences and channels. Anyword is not just another writing tool. It is a direct
        answer to the operational traps that keep small businesses from building a strong, consistent digital
        presence. The cost of doing nothing is measured in lost leads, wasted spend, and hours that never come
        back. Anyword turns that around by making every piece of content faster, smarter, and more effective.</p>
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
