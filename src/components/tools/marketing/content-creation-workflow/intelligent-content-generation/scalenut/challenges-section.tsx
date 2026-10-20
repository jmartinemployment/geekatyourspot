export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Manual content creation is a slow bleed for small businesses in South Florida. Every week, the owner
        or office manager faces the same grind: a blank page at the end of a long day, with no time or energy
        left for marketing. The cost is not just the time spent writing, it’s the lost hours that could have
        gone to billing, client work, or even closing a new sale. When the work piles up, content gets pushed
        to the bottom of the list. Social media goes quiet, websites stop updating, and the business slips out
        of sight for new customers searching online.</p>
      <p className="text-md text-white shadow-text pt-3">
        Trying to keep up by hand means the “blank page” bottleneck hits again and again. It is more than
        writer’s block. It is the reality that every blog post, every FAQ, every update means another night at
        the desk or another weekend lost to catch-up. And the stakes are higher than they look: content is
        what brings in leads, builds trust, and keeps a business visible to the local clients it needs most.
        Without it, the pipeline dries up. The company looks smaller, less credible, and less active than
        competitors who seem to publish effortlessly.</p>
      <p className="text-md text-white shadow-text pt-3">
        Hiring a local agency or a freelance writer is not a real fix for most teams. The price tag, thousands
        of dollars a month, is out of reach for a business trying to keep costs tight. Even then, the results
        often sound generic or don’t reflect the way the business actually works. Articles might go live, but
        they miss the details that make the company stand out: the real services, the answers to actual
        customer questions, and the way the team talks about its work. The business ends up paying for content
        that doesn’t move the needle.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process breaks down in other ways too. A bookkeeping firm in Miami-Dade starts articles but can’t
        finish them. A Broward HVAC team answers maintenance questions every day, but those answers never make
        it onto the website or into a blog post. A Palm Beach remodeler uses an AI tool, but the drafts ignore
        what makes their projects unique. An insurance agency tries to publish regularly, but every article
        comes out in a different voice, confusing both customers and search engines. In every case, the
        business owner knows what needs to be said, but can’t get it all the way to a finished, useful
        article.</p>
      <p className="text-md text-white shadow-text pt-3">
        The result is a content gap that gets wider every month. Leads slow down, repeat business drops off,
        and the business falls behind competitors who manage to keep publishing. The cost is not just in lost
        opportunities. It is in the constant stress of knowing what should be done and not having the time,
        money, or process to do it. This is the pain point Scalenut is built to address, by turning the
        knowledge and answers that already exist inside the business into a steady stream of finished,
        on-brand content, without the manual grind or the agency price tag.</p>
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
              <h2 id="what-it-costs-to-keep-doing-this-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
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
