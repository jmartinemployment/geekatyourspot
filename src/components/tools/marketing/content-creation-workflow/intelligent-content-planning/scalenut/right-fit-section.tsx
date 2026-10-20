import Link from "next/link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Scalenut is designed for small to mid-sized teams who need to do the work of a full content department
        without the overhead. If you are a business in Miami-Dade, Broward, or West Palm Beach counties, and
        your team is stretched thin, Scalenut delivers the most value when you face the classic bottlenecks:
        not enough staff to plan or publish, no time for manual SEO audits, and no way to track your brand’s
        presence across the new AI-driven search engines. It is especially suited for organizations that want
        to see results fast, teams that cannot afford to wait months for a traditional agency or in-house
        build-out to pay off.</p>
      <p className="text-md text-white shadow-text pt-3">
        If your workflow depends on a handful of people wearing many hats, Scalenut’s automation closes the
        gap. The platform’s ability to run research, content creation, optimization, and AI monitoring in
        parallel means you do not have to choose between quality and speed. Teams that have used Scalenut,
        like Jobscan or Phoenix Rifle Club, have seen the payoff in both traffic and visibility, because the
        system is built to execute, not just recommend. For a local business, this means you can move from
        being invisible in AI answers to being the cited source, without hiring a new team or learning a new
        stack.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, Scalenut is not for everyone. If your organization already has a large, specialized content
        or SEO team and prefers to keep all execution in-house, you may find more value in tools that focus on
        granular, manual control. Some enterprise features, like SSO
        or&nbsp;API&nbsp;access, are gated to higher-tier plans, so
        very large teams with strict IT requirements may need to look at the Enterprise tier or consider other
        platforms. If your main focus is traditional SEO for a global site, and AI-driven discovery is not a
        priority, you might find that Scalenut’s strengths are more than you need.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses that rely on highly localized, programmatic landing pages, such as those targeting
        specific neighborhoods or industries in South Florida, Scalenut’s cluster strategy and AI visibility
        tracking are a direct fit. You can track how your brand is cited in AI engines for local prompts, and
        adjust your content in real time to capture those opportunities. If you are in a regulated industry or
        require deep customization, Geek @ Your Spot LLC can help configure Scalenut to fit your compliance and
        workflow needs, ensuring your data is mapped and your approval workflows are set up before launch.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next step for a business considering Scalenut is not to dive into a trial alone. The real value
        comes from a tailored implementation, which is where Geek @ Your Spot LLC steps in. They close the gap
        between the platform’s capabilities and your unique environment, handling data mapping, integration
        with your existing systems, and change management for your team. This is not a one-size-fits-all
        setup, each deployment is mapped to your business objectives,
        your&nbsp;data quality, and your approval
        requirements. The result is a system that fits your business, not the other way around.</p>
      <p className="text-md text-white shadow-text pt-3">
        If you are still weighing options, the decision comes down to your priorities. If you want to stop
        guessing, automate the grind, and finally see your brand cited by the AI engines your customers use,
        Scalenut is built for that job. If you need a platform that only analyzes or reports, or if your team
        is set on a manual, in-house approach, there are other tools better suited. For small businesses in
        South Florida who want to break out of the content treadmill and become the answer in AI-driven
        search, Scalenut is the platform, and Geek @ Your Spot LLC is the partner, to make it happen.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<Link id={`tools-marketing-intelligent-content-planning-scalenut-right-fit-booking-your-free-consultation${idSuffix}`} href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">booking
        your free consultation</Link>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Walk me through your current process from the moment someone says &#39;we need a piece of content on X&#39; to the moment it goes live. Where does the process typically stall?</li>
        <li>Who is actually doing the writing and optimization? Is it an in-house generalist, a dedicated copywriter, or a rotating group of freelance contractors?</li>
        <li>When local customers look for your services online, are you fighting head-to-head against massive corporate players with huge budgets, or are you mostly competing with other local independent businesses?</li>
        <li>How critical is immediate search visibility (SEO and AI Search summaries) to your quarterly revenue goals versus staying top-of-mind on social media channels?</li>
        <li>Are you creating content strictly for a traditional company blog, or are you looking to turn these insights into short-form videos, email newsletters, and localized social media campaigns?</li>
        <li>How much does your target audience&#39;s behavior shift by neighborhood or culture? For example, do you need to alter your topic strategy between a corporate Brickell audience and a luxury Palm Beach demographic?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-scalenut-is-right-for-who-should-look-elsewhere-and-what-to-do-next" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Scalenut Is Right For, Who Should Look Elsewhere, and What to Do Next
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
              <h2 id="who-scalenut-is-right-for-who-should-look-elsewhere-and-what-to-do-next-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Scalenut Is Right For, Who Should Look Elsewhere, and What to Do Next
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
