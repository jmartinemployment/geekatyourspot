import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A local business owner opens their laptop, determined to post something, anything, before the day gets
        away from them. The cursor blinks on a blank page, but no words come. Minutes turn to hours. That time
        should have gone to client work or chasing payments, but instead it disappears into a struggle to
        produce a single update. This is the blank page bottleneck: small businesses in West Palm Beach,
        Broward, and Miami-Dade face it every week. The need to show up online is clear, but the resources
        never stretch. Agencies ask for monthly retainers that eat into cash flow. Freelancers deliver drafts
        that need so much editing, it hardly saves time. So social feeds go silent, blogs stagnate, and email
        lists gather dust. Every missed post is a lost chance to bring in a new lead.</p>
      <p className="text-md text-white shadow-text pt-3">
        It is not just a question of time or budget. Even when the owner wrangles a few paragraphs, the result
        often falls short. A post might answer part of a customer’s question, but never the full story. Or a
        blog is published, but turning it into a social caption or a follow-up email means starting over,
        losing the thread and the voice along the way. The process is so fractured that any sense of a
        coordinated marketing effort vanishes. Each channel becomes its own island: nothing connects, and
        leads slip through the cracks. The promise of digital marketing, steady leads, local trust, real
        visibility, feels out of reach.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the catch-22 that&nbsp;<Link id={`tools-marketing-intelligent-content-generation-frase-overview-intelligent-content-generation${idSuffix}`} href="/use-cases/marketing/content-creation-workflow/ai-content-generation" className="text-[#C83803] hover:underline">Intelligent Content Generation</Link>&nbsp;finally breaks. Instead of burning hours and
        budget on every step, small teams can now automate the full content creation workflow: from
        brainstorming and drafting to repurposing and scheduling, all while keeping the brand voice consistent
        and approval simple. The right AI-driven system turns one strong asset, a blog post, an FAQ, even an
        email, into a week’s worth of channel-ready content, with targeted posts, scheduled sends, and a
        single review step. No more writing from scratch, no more copy-pasting between tools, no more missed
        leads because the pipeline ran dry. For small businesses in South Florida, this means more time for
        real work, lower costs, and a content engine that works as hard as they do.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
