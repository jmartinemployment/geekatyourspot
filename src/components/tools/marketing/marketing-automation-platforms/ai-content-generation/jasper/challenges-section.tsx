export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Every small business in South Florida that tries to handle content creation in-house faces the same
        uphill battle. The owner or office manager is already doing double duty: keeping the books, handling
        payroll, and making sure clients are happy. When it comes time to write a blog post or schedule a week
        of social updates, the &quot;blank page&quot; bottleneck hits hard. Hours slip away just trying to get
        started. That time comes straight out of revenue-generating work. The cost is not just stress or a
        late night at the office. It is lost sales, missed leads, and a brand that fades into the background.</p>
      <p className="text-base text-white shadow-text pt-3">
        Hiring a local agency is not a real solution for most. The rates are steep, thousands per month for
        copy that still needs rounds of edits to sound like your business. Even then, the content rarely lands
        with the credibility or consistency you want. The alternative is piecemeal work: one person writes a
        blog post in a rush, another handles the Facebook page, and someone else sends out an email campaign.
        The result is a patchwork of messages that do not sound like they came from the same company.
        Prospects notice. Instead of building trust, your brand comes across as scattered or forgettable.</p>
      <p className="text-base text-white shadow-text pt-3">
        This lack of coordination does more than damage your image. When updates get skipped, your website and
        social profiles go quiet. The pipeline for new leads dries up. You end up in a cycle where you only
        publish when business is slow, which means you are never top-of-mind when local buyers are searching.
        The impact is real: fewer inbound calls, fewer form fills, and more missed opportunities to win
        business from larger competitors who always seem to have a fresh, on-brand presence online.</p>
      <p className="text-base text-white shadow-text pt-3">
        Trying to keep up with content demands by hand also introduces errors. Facts get missed or go out of
        date. One post says you serve Miami-Dade, the next forgets to mention Broward. Offers change, but an
        old landing page still lists last month’s promotion. Over time, this erodes credibility and can even
        cause compliance headaches in regulated industries. Without a system to keep product details,
        disclaimers, and brand voice aligned, every new piece of content is a risk.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual workflows also choke growth. When every draft, review, and approval is handled by email or
        spreadsheets, bottlenecks form. A single person being out sick can stall an entire campaign. There is
        no easy way to see what is in the pipeline, what is waiting for review, or what is ready to publish.
        As a result, teams burn out before they see results, giving up on content before it has a chance to
        drive the steady, local visibility that actually brings in new business.</p>
      <p className="text-base text-white shadow-text pt-3">
        For the business owner in the opening, it means another Friday afternoon spent staring at a
        half-finished draft, knowing that next week’s leads will be even harder to come by. The cost is not
        just in dollars spent or hours lost. It is in the missed chance to build a reputation, the lost
        opportunity to stand out in a crowded market, and the fatigue that comes from fighting the same
        battles week after week with no end in sight.</p>
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
