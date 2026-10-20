import Link from "next/link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A small business owner in Miami-Dade sits down late at night, determined to write a blog post that
        might finally move the needle for their company. They know the value of sharing expert answers to real
        customer questions. But after an hour with a blinking cursor, only a headline and half a paragraph
        have made it onto the page. There is no marketing team to delegate to. There is no budget for a
        professional writer. Every minute spent here is a minute not spent on client calls, billing, or
        actually delivering services. The &quot;blank page&quot; bottleneck is real, and it repeats every
        week, across every channel, for every update that should go live.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the reality for most small businesses across West Palm Beach, Broward and Miami-Dade. To win
        loyal, local clients, they need to show up online with fresh, clear, and trustworthy content. But the
        cost of hiring an agency or a dedicated creator is out of reach: thousands of dollars a month for
        writing that might not even sound like their business. So content falls behind, social feeds go quiet,
        and their website slips out of sight, while larger competitors with bigger budgets keep publishing.</p>
      <p className="text-md text-white shadow-text pt-3">
        Even when the expertise is there, turning it into complete, consistent articles is a grind. Manuals
        and process documents sit unfinished. Answers to customer questions never make it into the blog. The
        result is a lead pipeline that dries up, with potential customers finding nothing new and no reason to
        trust this local expert over a larger brand. The cost is more than just lost time: it is lost
        visibility, slower sales, and a business that feels stuck.</p>
      <p className="text-md text-white shadow-text pt-3">
        <Link id="tools-marketing-intelligent-content-generation-scalenut-overview-intelligent-content-generation" href="/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses" className="text-[#C83803] hover:underline">Intelligent Content Generation</Link>&nbsp;changes this. Instead of getting stuck in the content creation
        bottleneck or draining the budget on outside help, small teams can use AI-driven tools to turn real
        expertise into finished marketing assets, quickly, affordably, and at the scale needed to compete. At
        Geek @ Your Spot LLC, we help South Florida businesses build a reliable workflow for automated content
        generation, AI-powered repurposing, bulk scheduling, approval workflows, and personalized email
        campaigns. With the right system, even a lean team can publish as consistently and professionally as
        any national competitor. The result is more leads, stronger trust, and real time back in your day.</p>
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
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
