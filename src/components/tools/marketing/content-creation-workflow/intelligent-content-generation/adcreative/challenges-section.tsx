import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Small businesses in South Florida who try to manage ad copy and message validation manually face a cycle of
        wasted spend and lost time. With a local ad budget under $500 a month, there is no margin for error, every
        click, impression, and line of copy must earn its keep (<a id={`tools-marketing-budget-ad-copy-message-validation-adcreative-challenges-source-adcreative-ai${idSuffix}`} href="https://www.adcreative.ai/use-case/e-commerce" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">AdCreative</a>,
        as of Oct 23, 2026). Manual efforts usually mean hours spent writing and rewriting headlines, picking stock
        images, and guessing at what will convert. The cost is not just in money, but in opportunity: one bad day of
        broad-match targeting or bland creative can wipe out a week’s budget, leaving little to show for it.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first pain point is the gap between what a business can afford and what professional ad production
        actually costs. Hiring a copywriter or designer for even a single campaign often exceeds the entire monthly
        ad spend. Most owners go it alone, writing copy themselves and buying generic stock photos. This leads to
        the next problem: generic creative that blends in with every other ad on the feed. When your ad looks like
        everyone else’s, your budget gets burned on impressions that never turn into leads. Consumers scroll past,
        and the message never lands.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platforms themselves do not help. Meta and Google’s automated tools default to broad targeting and safe,
        bland creative. For a business trying to reach only its local zip codes, this means cash spent on
        out-of-area clicks, accidental taps, or traffic from people who will never buy. There is no agency to tune
        the settings, because the retainer would cost more than the ad budget itself. Every day, the owner must
        watch for junk traffic and try to catch mistakes before the money is gone. Most never know if their copy is
        actually working, or if a small tweak could double their results.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative fatigue is another cost that builds up quietly. Running the same ad for weeks or months leads to
        declining performance. Audiences tune out, <GlossaryLink slug="click-through-rate">click-through rates</GlossaryLink> drop,
        and costs per lead climb. But refreshing creative manually is slow and expensive. Most small businesses end
        up running stale ads far too long, simply because they do not have the time or budget to keep testing new
        variations. Every week spent with underperforming ads is a week of wasted opportunity.</p>
      <p className="text-base text-white shadow-text pt-3">
        Brand consistency also suffers in the manual approach. When you build each ad from scratch, it is easy to
        end up with mismatched colors, fonts, or messaging. The result is a feed of ads that look unprofessional or
        off-brand, reducing trust and making it harder to stand out. Worse, if the ad’s message does not match the <GlossaryLink slug="landing-page">landing
        page</GlossaryLink>, <GlossaryLink slug="bounce-rate">bounce rates</GlossaryLink> spike as prospects lose
        confidence and leave before converting. Every mismatch is a lost sale.</p>
      <p className="text-base text-white shadow-text pt-3">
        Validation is the final, and often invisible, cost. Without a way to test which copy or image actually
        works, most businesses rely on gut feeling or platform defaults. There is no system for rapid
        experimentation, so campaigns run on hope rather than evidence. A single day of unvalidated creative can
        drain a week’s budget on traffic that never had a chance to convert. Over time, this erodes confidence in
        digital ads altogether, pushing many owners to give up on local campaigns entirely.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real cost of manual Budget Ad Copy &amp; Message Validation is not just in wasted dollars. It is the
        lost hours spent tinkering with copy and images, the missed leads from unoptimized campaigns, and the
        creeping doubt that digital ads will ever work for a business your size. Without the right tools, every
        improvement takes too long, every mistake costs too much, and every win feels like luck rather than a
        repeatable process.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
