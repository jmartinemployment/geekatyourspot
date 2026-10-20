import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DecisionsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small teams in South Florida do not get unlimited do-overs. The choices you make in the first days of
        an Intelligent Content Planning project set the rails for everything that follows. Some of these
        decisions feel small at the time, picking a tool, setting a data structure, or agreeing on what “good”
        looks like. But they hardwire the way your team will work, what you measure, and how fast you can
        adapt later. Getting them wrong costs more than a missed deadline. It can lock you into a system that
        does not fit your business or force months of rework if you need to change direction.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first and most critical decision is how you define your business objectives. This is not a box to
        tick for the sake of a project charter. If you cannot name the outcome in terms your accountant or
        your sales lead would care about, like higher lead quality, lower cost per piece, or faster campaign
        launches, you are setting yourself up to chase vanity metrics. At Geek @ Your Spot LLC, we make this step
        concrete: every project starts by defining one or two measurable KPIs that tie directly to revenue or
        operational savings. For a local marketing agency, it might be reducing the time from idea to
        scheduled post by 50%. For a retail team, it could be doubling the number of blog posts that rank in
        the top three results for a local search. These goals steer every downstream choice.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another decision that cannot be walked back is your&nbsp;data
        model. Many teams want to skip this step because it sounds technical or tedious. That
        is a mistake. If your data is scattered across Google Sheets, email threads, or legacy folders, no AI
        platform, whether HyperWrite, MarketMuse, Scalenut, Hootsuite, or Semrush, can deliver reliable
        recommendations or pull the right asset when you need it. Early on, you need to decide what counts as
        a source of truth for your topics, content history, and performance data. Will your blog archive be
        the master? Does your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;hold the last word on
        customer segments? These decisions shape how well your system “learns” your real priorities and how
        much manual cleanup you will face later.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tool selection is another fork in the road. The pressure to pick something fast and get going is real,
        especially for small teams. But this is not about picking the tool with the most features or the
        lowest sticker price. It is about finding the platform that fits your current stack, your team’s
        workflow, and your appetite for change. For example, Hootsuite stands out for teams who need to keep
        all social and content scheduling in one place, with the flexibility to listen to trending topics and
        push out content in real time. HyperWrite, on the other hand, is built for teams that want
        sentence-level drafting and contextual writing in their own voice, right inside the browser.
        MarketMuse is for the team who wants to see not just what keywords to chase but where their real
        topical authority lies and how to outflank bigger competitors. Scalenut is designed for teams that
        need to track and improve their visibility across AI-driven search and traditional Google results,
        especially when the goal is to win citations and not just rankings. Semrush is the right fit if your
        pain is rooted in keyword research, competitor tracking, and repurposing content efficiently across
        platforms. Choosing based on a true workflow fit, rather than hype or price, avoids months of
        frustration and sunk cost.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval flows and governance are another early choice that is hard to unwind. Decide up front how
        much control is needed. Does every piece need sign-off from a manager, or can trusted contributors
        publish directly? Too many layers, and your workflow grinds to a halt, your content sits in digital
        limbo, missing trends and losing momentum. Too little structure, and you risk brand inconsistency or
        compliance headaches. Bake these rules into your system before you start scaling output.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, the early decision to start small or go all-in is rarely reversible. A pilot with one type of
        content, one brand voice, or one channel allows you to test and adapt without risking the whole
        operation. Jumping into a full rollout before the team is ready can overload your staff, break
        your&nbsp;data model, and create resistance that
        lingers long after launch. At Geek @ Your Spot LLC, we always recommend a focused pilot, even for teams
        eager to move fast. The lessons learned in that first cycle pay off tenfold when you expand to other
        channels or add new tools.</p>
      <p className="text-md text-white shadow-text pt-3">
        In short, the first moves you make, defining objectives, setting the data foundation, choosing your
        tech, locking down governance, and piloting with intention, lock in your trajectory. The right
        decisions here do not just speed up the work. They keep you from painting yourself into a corner you
        cannot get out of without starting over.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-decisions-that-are-made-early-and-cannot-be-unmade" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Decisions That Are Made Early and Cannot Be Unmade
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-decisions-that-are-made-early-and-cannot-be-unmade-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Decisions That Are Made Early and Cannot Be Unmade
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
