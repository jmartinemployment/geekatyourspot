import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Most small businesses in Miami-Dade, Broward, and West Palm Beach know exactly what it feels like to
        stare at a blank screen late at night, struggling to write a simple update for their website or social
        media. The pressure to keep up with competitors is real, but the reality is that content creation too
        often gets pushed to the bottom of the list. Without a full-time marketing team, every new blog post,
        email campaign, or social update means lost hours, hours that should go to serving customers or
        running the business. Agency fees only add insult to injury, with the average local firm quoting
        thousands of dollars a month for even basic content support. For most small teams, that is simply not
        an option.</p>
      <p className="text-base text-white shadow-text pt-3">
        The result is a cycle that is hard to break. Content gets delayed, consistency drops, and online
        channels go stale. When social pages and websites look deserted, new leads dry up and existing
        customers drift away. Even when a business owner finds the time to post, it is often a scramble, one
        network gets all the attention while others are left behind, and there is no easy way to repurpose a
        good piece of content for different channels. Tracking what works is even harder, and most small
        businesses never find out which posts actually bring in new clients. This is the pain point: a real
        competitive disadvantage that comes from simply not having enough hands, hours, or creative bandwidth.</p>
      <p className="text-base text-white shadow-text pt-3">
        <Link id={`tools-marketing-intelligent-content-generation-hootsuite-overview-intelligent-content-generation${idSuffix}`} href="/use-cases/marketing/content-creation-workflow/ai-seo-content-generator" className="text-[#C83803] text-shadow-2xs text-shadow-white hover:underline">Intelligent Content Generation</Link>&nbsp;changes this equation. Instead of wasting nights wrestling with
        writer’s block or pouring money into agencies, a small team can use AI-powered tools to research,
        draft, and schedule weeks of platform-specific content in minutes. AI systems now handle the heavy
        lifting: they generate new posts, repurpose top-performing content for each channel, and personalize
        emails for different customer segments, all with minimal human effort. With automated approval
        workflows and bulk scheduling, the owner keeps control and oversight, but the bottlenecks disappear.
        The result is a steady stream of fresh, relevant content that keeps your brand top-of-mind with local
        customers and frees up time to focus on what matters most.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot LLC’s AI Marketing Content Workflow is built for these exact challenges. The method is
        simple and proven: automate the blank-page moments, make repurposing routine, and let the system run
        the tedious parts of content creation for you. For local businesses who need to build trust and
        visibility without the overhead of a full marketing department, Intelligent Content Generation is not
        just a tool, it is how you compete and win, every week, without adding headcount or burning out your
        team.</p>
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
