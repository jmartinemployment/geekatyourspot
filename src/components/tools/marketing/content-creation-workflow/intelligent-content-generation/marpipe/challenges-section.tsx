import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Sticking with manual processes for digital <GlossaryLink slug="lead-generation">lead generation</GlossaryLink> locks
        small businesses into a cycle of wasted hours, rising costs, and unpredictable results. The more you try to
        scale up, the more these bottlenecks hurt: every time you push for more leads, your cost per lead spikes,
        and your team falls behind on the creative work needed to keep campaigns fresh. The problem is not just
        about budget, it&apos;s about the operational ceiling that manual work creates, especially for businesses
        spending $500 to $1,500 a month on ads in South Florida.</p>
      <p className="text-base text-white shadow-text pt-3">
        The scaling trap is the first wall businesses hit. When you increase spend, hoping for more leads, ad
        platforms often react in ways you cannot control. Algorithms that once delivered steady leads start to break
        down, driving up your cost per lead and eating into your margins. Without automation, you are forced to
        watch as your carefully planned budget delivers fewer results, and you have no way to push back except by
        cutting spend or pulling back on campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative bottlenecks follow close behind. Every campaign needs a steady stream of new images, copy, and
        layouts to stay relevant and avoid <GlossaryLink slug="ad-fatigue">ad fatigue</GlossaryLink>. But manual
        production is slow. Each new variation means hours of work, resizing images for different <GlossaryLink slug="ad-placement">placements</GlossaryLink>,
        writing and rewriting copy, and building out each version by hand. This workload quickly overwhelms small
        teams, leading to reused creative that wears out before you can replace it. The cost is not just in time,
        but in lost performance: tired ads mean fewer clicks, less engagement, and rising lead costs.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual testing makes things worse. When you can only test two ads at a time, you miss out on finding better
        combinations that could lower your costs and improve results. Changing both image and copy at once, as often
        happens in manual workflows, makes it impossible to know which element is working and which is not. Valuable
        designer hours are lost just keeping up with basic production and resizing, leaving no time for strategic
        work or deeper analysis.</p>
      <p className="text-base text-white shadow-text pt-3">
        The scripting gap is another hidden cost. Without the technical skills to automate bidding rules or pause
        underperforming ads, your campaigns are exposed to sudden cost spikes from competitors or technical
        glitches. You have no guardrails, just manual monitoring and slow reaction times. Every delay in launching a
        new test or creative variant becomes lost budget and missed opportunity.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data fragmentation compounds the problem. Customer data stuck in static spreadsheets or isolated CRMs means
        you are paying to show ads to people who have already ignored your offer, or to past buyers who need a
        different message. Without the ability to segment and target effectively, you waste money on irrelevant
        impressions and lose out on real prospects.</p>
      <p className="text-base text-white shadow-text pt-3">
        The operational design bottleneck is the final straw. Manually building, splitting, and deploying each ad
        concept is not just tedious, it is unsustainable. Every new product, promotion, or seasonal campaign
        multiplies the workload. The manual approach cannot keep up with the demands of modern digital advertising,
        leaving small businesses stuck at the very moment they need to scale.</p>
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
            <div className="col-span-12">{body}</div>
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
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
