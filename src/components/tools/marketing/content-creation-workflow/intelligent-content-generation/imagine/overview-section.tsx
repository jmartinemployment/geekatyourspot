import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A local business owner unlocks the shop early, checks yesterday’s receipts, then glances at the blank
        social media calendar. There is a new service to promote, a seasonal offer ready to go, but every
        image and video idea feels like another late-night chore. The camera roll has a few decent product
        photos and some behind-the-scenes shots, yet turning any of them into a polished ad, an engaging post,
        or a branded email campaign will take hours. By the time the register closes, there is still no new
        content. The week slips by. The website sits unchanged, social channels stay quiet, and the
        competition’s feed keeps rolling out professional visuals and sharp campaigns.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the day-to-day reality for many small businesses in South Florida. To win customers locally,
        you need to look credible and stay visible, online, everywhere, all the time. But when content
        creation falls on the owner or a small team, the process stalls. The &quot;Blank Page&quot; bottleneck
        is real: hours vanish trying to write a single post or edit a video, pulling focus from sales and
        service. Hiring a marketing agency is priced for big companies, not lean teams. Even when you get
        something out the door, it is often a one-off, no matching video, no coordinated graphics, no
        follow-up email, nothing to repurpose for the next campaign. As a result, lead pipelines dry up,
        customer engagement drops off, and every month feels like starting from scratch.</p>
      <p className="text-md text-white shadow-text pt-3">
        <Link id={`tools-marketing-intelligent-content-generation-imagine-overview-intelligent-content-generation${idSuffix}`} href="/use-cases/marketing/content-creation-workflow/ai-content-generation" className="text-[#C83803] hover:underline">Intelligent Content Generation</Link>&nbsp;is changing this for small businesses in Miami-Dade, Broward and West
        Palm Beach. With the right AI workflow, a single product photo turns into a full suite of branded
        visuals, short-form videos, and campaign-ready assets in minutes, not weeks. AI repurposes your best
        content for every channel, schedules it in bulk, and routes drafts for approval before anything goes
        live. You get consistent, professional content without the agency markup or the late nights. The
        result: time saved, costs cut, and local customers see your business the way you want, reliable,
        up-to-date, and ready for their next visit.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC helps South Florida small businesses build these AI-powered content creation
        workflows. We work with your existing assets, set up automated generation and repurposing, and leave
        you with a process that runs whether you are behind the counter or out winning new business. This is
        not about replacing your voice or your brand, it is about giving you the tools to show up, everywhere,
        every week, without burning out.</p>
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
