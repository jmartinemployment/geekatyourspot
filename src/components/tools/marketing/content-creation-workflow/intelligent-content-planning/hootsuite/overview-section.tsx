import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A small business in Miami-Dade has a new product ready for launch. But the marketing team is stuck at
        their desks, staring at half-finished drafts and a spreadsheet full of disconnected ideas. They have
        Slack threads, browser tabs, and a calendar that never matches what actually gets posted. Someone
        tries to stitch a last-minute campaign together, but it goes out at the wrong time. The audience
        misses it. The brand voice wobbles. The cycle starts again the next week with the same blank-page
        dread.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the reality for most small businesses without Intelligent Content Planning. Planning is
        reactive. The team burns hours debating topics and rewriting captions that do not convert. They gamble
        on hunches because they lack the data or tools that bigger players use. The outcome is predictable:
        most posts never reach the right people, miss local trends, and fail to drive leads or sales. What
        should be a growth channel becomes a time sink and a source of stress. Brand risk rises as unapproved
        drafts slip through or go live off-message. The operational overhead is high, and the results are
        nearly invisible.</p>
      <p className="text-md text-white shadow-text pt-3">
        Intelligent Content Planning changes this. It uses AI and automation to turn raw ideas, customer
        questions, and proven assets into a clear content blueprint. The tedious work, drafting, repurposing,
        scheduling, and routing for approval, moves from manual grind to automated flow. With the right
        system, a team can generate a month’s worth of on-brand, platform-specific posts in minutes, bulk
        schedule them for peak engagement, and ensure every campaign passes through the proper review
        channels. The result is a steady, high-converting presence that grows brand equity and sales, not just
        noise. For small teams in West Palm Beach, Broward, and Miami-Dade, this means more leads, fewer
        errors, and hours back every week to focus on what matters.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot’s approach to Intelligent Content Planning is built for small businesses across South
        Florida. It covers the full workflow: automated content generation,
        AI&nbsp;<GlossaryLink slug="content-repurposing">content repurposing</GlossaryLink>, bulk scheduling,
        approval workflows, and personalized email campaigns. Each step is designed to fit your team’s size,
        tech stack, and growth goals, so you get enterprise-grade results without enterprise headaches or
        costs.</p>
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
