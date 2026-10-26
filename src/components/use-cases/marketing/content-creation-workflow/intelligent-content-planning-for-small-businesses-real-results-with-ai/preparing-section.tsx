import Link from "next/link";
export default function PreparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The next move is not to buy a tool or start a trial; it is to step back and clarify exactly what your
        team needs to achieve. The right first action is to book a session with a consultant who knows the
        South Florida market and has implemented Intelligent Content Planning for teams your size. Expect that
        conversation to get specific, fast, about your current bottlenecks, what you are trying to improve,
        and where the pain is sharpest. This is not a generic onboarding. The consultant will want details on
        your content goals, your current systems, and who is involved in the process now.</p>
      <p className="text-base text-white shadow-text pt-3">
        You will be asked to bring real examples from your workflow: the spreadsheet nobody likes, the
        approval chain that blocks posts, the campaign that never got off the ground. The goal is not to sell
        you a dashboard. It is to map out a plan that fits your business objectives, your data landscape, and
        your team’s appetite for change. The conversation will cover what counts as a win, more leads, higher
        rankings, fewer hours spent rewriting, and what it will take to measure that win in your own numbers.</p>
      <p className="text-base text-white shadow-text pt-3">
        From there, you should expect a four-phase approach, not a one-size-fits-all checklist. The first
        phase is business objectives alignment, where the consultant helps you set measurable, realistic KPIs.
        The second phase is a&nbsp;data
        quality&nbsp;assessment: this is where you find out if your data is clean enough to
        drive automation or if there is work to do in organizing, standardizing, or integrating your systems.
        The third phase is the tech selection and architecture, picking the tools that match your needs and
        fit your stack. This is where platforms like HyperWrite, MarketMuse, Scalenut, Hootsuite, and Semrush
        are evaluated not on features, but on whether they solve your specific workflow issues.</p>
      <p className="text-base text-white shadow-text pt-3">
        Expect honesty here. If your team spends too much time switching between browser tabs and rewriting
        the same emails, HyperWrite will come up as a solution to streamline and personalize your external
        communication. If your pain is wasted hours on keyword research and fighting impossible SEO battles,
        MarketMuse will be considered for its ability to map your own digital strengths and reveal winnable
        topics. If your business is invisible on AI platforms and needs structured, high-velocity publishing,
        Scalenut’s AI visibility and parallel execution will be a focus. Hootsuite will be on the table if
        your brand is missing out on local trends and struggling to coordinate posts and approvals across
        channels. Semrush is a candidate when your team is burning out repurposing content and guessing at
        topics, because it can turn one pillar piece into channel-ready assets and surface what your South
        Florida audience is actually searching for.</p>
      <p className="text-base text-white shadow-text pt-3">
        Phase four is the pilot implementation. Here, you will not be asked to overhaul your whole process at
        once. Instead, the consultant will identify the highest-impact workflow to automate or optimize first.
        That could be automating social scheduling with Hootsuite, rolling
        out&nbsp;content repurposing&nbsp;with
        Semrush, or using MarketMuse to map out your first content cluster. You should expect a clear test
        plan: what gets measured, who is responsible, and what a successful pilot looks like. This is about
        controlled change, measuring results before scaling up.</p>
      <p className="text-base text-white shadow-text pt-3">
        If your team is like that small office in West Palm Beach, you will know quickly if the approach is
        working. By week two, the approval bottlenecks should start to shrink, the blank-page problem should
        fade, and the team should see early signs of which topics are driving engagement and which are not
        worth the time. What you get in return is not just automation, it is clarity, focus, and a workflow
        that scales with your business. You will know what to write, why you are writing it, and how to get it
        published with less stress and higher impact. That is the real value of Intelligent Content Planning
        done right.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<a href="#consultationAppointment2xl" id={`use-cases-marketing-intelligent-content-planning-preparing-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Walk me through your current process from the moment someone says &#39;we need a piece of content on X&#39; to the moment it goes live. Where does the process typically stall?</li>
        <li>Who is actually doing the writing and optimization? Is it an in-house generalist, a dedicated copywriter, or a rotating group of freelance contractors?</li>
        <li>When local customers look for your services online, are you fighting head-to-head against massive corporate players with huge budgets, or are you mostly competing with other local independent businesses?</li>
        <li>How critical is immediate search visibility (SEO and AI Search summaries) to your quarterly revenue goals versus staying top-of-mind on social media channels?</li>
        <li>Are you creating content strictly for a traditional company blog, or are you looking to turn these insights into short-form videos, email newsletters, and localized social media campaigns?</li>
        <li>How much does your target audience&#39;s behavior shift by neighborhood or culture? For example, do you need to alter your topic strategy between a corporate Brickell audience and a luxury Palm Beach demographic?</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Before you take any planning platform’s promise on faith, read what the vendors themselves report and where it runs out. Our post <Link id={`use-cases-marketing-content-creation-workflow-ai-content-planning-xlink-blog${idSuffix}`} href="/blog/marketing/content-creation-workflow/intelligent-content-planning-how-south-florida-can-save-hours-and-drive-more-sales" className="text-[#C83803] hover:underline">Content Planning That Saves Hours</Link> goes through HyperWrite’s research that context switching burns up to 40% of productive time, MarketMuse’s personalized difficulty scoring, Scalenut’s tracking of which prompts your brand appears for in ChatGPT and Gemini, Hootsuite’s trend listening and approval workflows, and Semrush’s one-click repurposing, and it is plain about the gap: no figure exists for how much revenue planning adds on its own, no tool guarantees a first-page ranking, and the best-documented gains are hours saved and clearer targeting.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-to-do-next-setting-expectations-for-your-first-step-and-what-you-get-in-return" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What to Do Next: Setting Expectations for Your First Step and What You Get in Return
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
              <h2 id="what-to-do-next-setting-expectations-for-your-first-step-and-what-you-get-in-return-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What to Do Next: Setting Expectations for Your First Step and What You Get in Return
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
