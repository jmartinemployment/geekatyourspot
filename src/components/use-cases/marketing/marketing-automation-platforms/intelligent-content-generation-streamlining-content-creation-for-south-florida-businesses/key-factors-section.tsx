import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function KeyFactorsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The difference between an Intelligent Content Generation rollout that transforms a small business and
        one that fizzles comes down to what happens after the first week. The mechanics alone are not enough:
        most teams can get a few social posts out of an AI tool, but sustaining a system that delivers month
        after month takes more than just plugging in software.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first sign of success is alignment between the content workflow and the actual business
        objectives, not just “publish more” but “publish content that brings in the right leads, answers real
        customer questions, and supports the sales process.” Projects that stall usually skip this step and
        end up automating noise: generic posts, irrelevant emails, or blog articles that never get read. In
        every successful implementation, the team keeps the focus on the outcomes that matter, higher rankings
        for local services, consistent email engagement, or a steady pipeline of inbound leads, and measures
        progress against those targets.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next factor is data integrity. Teams that treat the data assessment as a box to check end up
        fighting the same errors they always had, misspelled service names, outdated pricing, or missing
        contact details, only now those errors are automated at scale. The projects that work are relentless
        about cleaning, updating, and standardizing business data before it ever reaches the AI tools.
        Scalenut and Koala shine here because they let you lock in approved facts, so every article or page
        pulls from the same source of truth. When the data is right, the AI outputs need far less editing and
        the workflow actually saves time.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another separator is tool fit and workflow design. Teams that chase the “newest” or “most powerful”
        tool for every task end up with a Frankenstein stack, one tool for captions, another for images, a
        third for scheduling, that never works as a system. The most resilient projects start small and build
        out only as the workflow proves itself. For a local business, that might mean starting with Rytr for
        social posts and Hootsuite for scheduling, then layering in Anyword for ad testing or Castmagic for
        repurposing webinars as the team’s needs evolve. Each tool is picked for a job it actually does, and
        the workflow is mapped end to end before scaling up.</p>
      <p className="text-base text-white shadow-text pt-3">
        Sustained adoption depends on who owns the process and how the team is trained. A rollout led by a
        single “AI champion” often stalls when that person gets busy or leaves. The projects that last embed
        the workflow into the team’s daily routines, with simple handoffs and clear roles, who reviews
        outputs, who publishes, who updates the data. Jasper and Copy.ai help here by enforcing brand
        consistency and compliance at every step, so the business doesn’t drift off-message as more people
        join the workflow.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, the projects that succeed treat the pilot as the beginning, not the end. The first month is
        about running real campaigns, catching what doesn’t work, and making targeted changes, maybe the
        captions Rytr generates need a tone adjustment, or the images from Imagine need a different brand
        filter.&nbsp;<GlossaryLink slug="feedback-loop" className="text-[#0B162A] hover:underline">Feedback
        loops</GlossaryLink>&nbsp;are built in, and the system is tuned over time. The teams that stall run
        one round of content, see mixed results, and either blame the tools or fall back to old habits.</p>
      <p className="text-base text-white shadow-text pt-3">
        Back in that South Florida office, the businesses that win are the ones who treat Intelligent Content
        Generation as an active system, not a one-time install. They set clear goals, keep their data house in
        order, choose tools that fit, and train everyone who touches content. The rest, those who “try AI for
        a month” and move on, end up right back at the blinking cursor, still looking for a shortcut that
        never arrives.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-some-intelligent-content-generation-projects-succeed-and-others-stall-out" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Some Intelligent Content Generation Projects Succeed, and Others Stall Out
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-some-intelligent-content-generation-projects-succeed-and-others-stall-out-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Some Intelligent Content Generation Projects Succeed, and Others Stall Out
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
