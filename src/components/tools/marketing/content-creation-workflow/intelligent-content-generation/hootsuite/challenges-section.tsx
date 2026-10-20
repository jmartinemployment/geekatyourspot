export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in Miami-Dade, Broward, and West Palm Beach, manual content creation is a time
        sink that drains resources and stalls growth. The typical owner or office manager wears many hats,
        operations, sales, customer service, and content creation is just one more task that never gets enough
        attention. Staring at a blank page, trying to come up with a social update or a blog post, turns into
        hours lost. That is not just frustrating; it is expensive. Those are hours that could go to billing,
        client meetings, or closing new business.</p>
      <p className="text-md text-white shadow-text pt-3">
        The financial cost is real. Hiring a local agency or freelance writer is out of reach for most small
        teams. Agency retainers run into the thousands each month, and even basic support for a few posts a
        week is rarely less than a car payment. That cost is hard to justify when every dollar has to show a
        return. Most teams settle for doing it themselves, but the result is a cycle: content gets delayed,
        social pages go stale, and the business looks quiet from the outside. New leads stop coming in.
        Existing customers drift to more active competitors.</p>
      <p className="text-md text-white shadow-text pt-3">
        The pain goes deeper than just the blank page. When content does get posted, it is usually reactive,
        one channel gets all the attention, while others are forgotten. A business might post on Facebook
        every so often, but LinkedIn, Instagram, or TikTok sit empty. Repurposing content for different
        platforms takes more time than anyone has. The effect is fragmentation: no consistent presence, no
        clear brand voice, and no way to know what is working. Metrics are scattered across platforms, and
        most teams never find out which post actually brought in a new client or which email campaign led to a
        sale.</p>
      <p className="text-md text-white shadow-text pt-3">
        There is also the issue of burnout. When content creation is squeezed into the end of the day or the
        weekend, creative energy dries up. The team starts strong, posting regularly for a month or two, but
        then the pace drops. Social pages go dark, and the website looks abandoned. That hurts trust with
        potential clients and makes the business look less credible. Local competitors with more consistent
        content start to pull ahead, even if their services are no better.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual processes also mean missed opportunities. Local events, trends, and conversations in the
        community are easy to overlook when there is no system for tracking what is happening. By the time a
        business reacts, the moment has passed. Posts are out of sync with what people are actually talking
        about, and engagement drops. The business misses the chance to connect with its audience in real time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, without a clear workflow, content approval and scheduling are a mess. Posts go out at random
        times, sometimes missing the best windows for engagement. There is no easy way to plan ahead, so
        everything happens last minute. That means more errors, more stress, and less impact from every post.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the real cost: wasted hours, lost leads, inconsistent messaging, and a steady erosion of
        competitive position. The team feels like it is always behind, never able to catch up or get ahead.
        Content creation becomes a burden, not a growth driver. Without the right tools, small businesses are
        stuck in this cycle, paying with time, money, and missed opportunity.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-content-creation-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Content Creation by Hand
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
              <h2 id="what-it-costs-to-keep-doing-content-creation-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Content Creation by Hand
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
