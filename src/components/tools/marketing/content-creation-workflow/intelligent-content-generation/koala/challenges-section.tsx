export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every small business in Miami-Dade, Broward, and West Palm Beach knows the routine: you need to show
        up online or you disappear. But keeping up with content is a grind that rarely pays back the hours you
        put in. The person writing your blogs or social posts is almost always the same one who runs payroll,
        answers the phones, or handles client work. That means every hour spent on content is an hour lost
        from what brings in revenue. The alternative, hiring an agency or freelancer, comes with a price tag
        that can sink a small team&#39;s monthly budget. Even then, the finished work often sounds generic, as
        if it could have come from any business in your industry.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real cost is not just money. It’s the opportunity lost while you stare at a blank page or chase
        down approvals. When content creation gets pushed aside, your website sits idle, your social feeds go
        quiet, and your lead pipeline dries up. A business that looks inactive online stops attracting new
        customers, no matter how good your service is. Worse, the few posts that do go out are often rushed,
        off-brand, or miss key details about what makes your business unique. For a South Florida accountant,
        that might mean retyping the same bio into every AI prompt. For a Fort Lauderdale cleaning company, it
        could mean copy that never makes clear whether you serve homes, offices, or both. The result is
        content that blends in, not stands out.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual content creation also introduces errors and inconsistencies. When you or your team have to
        remember credentials, unique selling points, or even which services you offer, mistakes slip in. One
        blog post says you do commercial work, another leaves it out. A landing page lists certifications you
        don’t actually hold. Over time, this erodes trust, both with customers and with search engines that
        reward accuracy and consistency. And when you try to fix it, you’re back to square one: hunting down
        old drafts, rewriting bios, or explaining your business all over again to a new writer or AI tool.</p>
      <p className="text-md text-white shadow-text pt-3">
        The workflow breaks down further when visuals are involved. A local retailer might publish an article,
        then scramble to find or create images that fit. This means switching between platforms, tracking down
        old photos, and trying to keep everything on brand. The delay adds hours to every campaign and makes
        it harder to maintain a steady publishing schedule. In the end, content production becomes a
        bottleneck, one that slows down marketing, eats into billable time, and keeps your business from
        looking as sharp online as it does in person.</p>
      <p className="text-md text-white shadow-text pt-3">
        Even with the best intentions, small teams fall into a cycle: content is sporadic, messaging is
        inconsistent, and the business’s real strengths get lost in translation. The cost is not just the
        money you spend or the time you lose, but the missed chance to build trust, win new leads, and show
        your local edge. Without a system that captures your business’s true voice and expertise, every post
        is another roll of the dice, sometimes it lands, but more often it just adds to the noise.</p>
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
              <h2 id="what-it-costs-to-keep-doing-content-creation-by-hand" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
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
