import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Koala is built for small businesses and lean teams who need to publish content that sounds like them,
        not like every other business in their space. It works best for companies that want to automate the
        heavy lifting of content creation, blog posts, SEO articles, email campaigns, and social media
        updates, while keeping control over their brand, services, and compliance.</p>
      <p className="text-base text-white shadow-text pt-3">
        If your team is stretched thin and the bottleneck is time, not ideas, Koala is a fit. The platform is
        designed for content marketers, e-commerce store owners, SEO agencies, web developers, designers, and
        social media managers who need to keep up a regular publishing schedule without hiring more people. It
        is especially useful for businesses in Miami-Dade, Broward, and West Palm Beach that want to win local
        clients by showing up online with authority and trust.</p>
      <p className="text-base text-white shadow-text pt-3">
        Koala is also a strong fit for companies that have struggled with generic AI content. If you have
        tried other tools and ended up with copy that could belong to any competitor, Koala’s Brand DNA system
        solves that by storing your real services, credentials, and voice. For teams with non-native English
        writers or varying skill levels, Koala’s Polish feature helps keep quality and tone consistent across
        every article and channel.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bulk content operations see the biggest gains. Koala can generate thousands of articles at once, each
        with the correct details, internal links, and schema markup. For teams tasked with updating large
        archives or launching new campaigns across multiple locations, the efficiency jump is immediate.
        Content refreshes, updating older posts to stay relevant, are faster because the system remembers your
        past work and applies the latest approved brand details.</p>
      <p className="text-base text-white shadow-text pt-3">
        But Koala is not for everyone. If your business relies on long-form storytelling, highly regulated
        messaging, or niche expertise that cannot be captured in a structured profile, you will still need to
        review and edit every draft. Koala does not replace compliance review or strategic decision-making. It
        accelerates the routine, repeatable work, but it does not invent your business model or marketing
        plan. Teams who want to hand off all decision-making or expect AI to deliver perfect copy with no
        oversight will be disappointed.</p>
      <p className="text-base text-white shadow-text pt-3">
        Koala also is not the right choice if you are looking for a one-off writing tool or a platform that
        only does a single job. Its value comes from building an ongoing content system that remembers your
        business and adapts as you grow. If you only need a handful of posts or want to try AI for a single
        project, a simpler tool may be enough. But for small businesses ready to invest in a repeatable,
        scalable workflow for AI Content Generation, Koala stands out by making your business’s real
        voice and services the core of every output.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams in South Florida, the next step is to get specific about what you need to automate. List
        your recurring content tasks, weekly blogs, monthly email campaigns, daily social posts, and compare
        what it takes to do them now against what Koala can automate. Consider how much of your time goes to
        re-explaining your business to outside writers or reformatting drafts from generic AI tools. If the
        answer is hours each week, Koala is likely to pay for itself in time saved and consistency gained.</p>
      <p className="text-base text-white shadow-text pt-3">
        The onboarding process matters. Koala works best when set up with your real business data, not just a
        list of keywords. Geek @ Your Spot LLC brings experience mapping local businesses’ services, credentials,
        and market details into Koala’s Brand DNA, so the platform produces content that is accurate and ready
        to use. If you want to see what that looks like before committing, Koala offers a free trial with
        5,000 words. That is enough to test how well it matches your brand and handles your actual topics.</p>
      <p className="text-base text-white shadow-text pt-3">
        In the end, Koala is for small teams who want to automate the grind of content creation without losing
        control of their brand. It is not a magic button, and it does not replace your expertise or your
        review, but it does let you scale up your online presence without scaling up your headcount or your
        costs. For businesses who are ready to move from “blank page” frustration to a system that works every
        week, Koala is a practical choice that closes the gap between big-agency polish and small-team
        resources.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<a href="#consultationAppointment2xl" id={`tools-marketing-ai-content-generation-koala-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>What do you need written: blog posts, ads, social posts or marketing emails?</li>
        <li>Who writes it now?</li>
        <li>About how many pieces a month do you publish now, and what is your goal?</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Our post <Link id={`tools-marketing-marketing-automation-platforms-ai-content-generation-koala-xlink-blog${idSuffix}`} href="/blog/marketing/marketing-automation-platforms/intelligent-content-generation-for-miami-how-to-save-time-and-scale-without-extra-hires" className="text-[#C83803] hover:underline">Content Generation Without New Hires</Link> explains why Koala sits at the foundation of a working stack: it stores a structured business profile, real services, credentials and approved voice, so every tool pulls from the same facts instead of memory, which is what stops a brand sounding like three different companies. It also names the condition, since a profile built on outdated service descriptions only scales the errors, and it records that no tool guarantees a campaign outperforms a human expert when the input is generic. The data quality review in our <Link id={`tools-marketing-marketing-automation-platforms-ai-content-generation-koala-xlink-pillar${idSuffix}`} href="/use-cases/marketing/marketing-automation-platforms/ai-content-generation" className="text-[#C83803] hover:underline">AI Content Generation</Link> guide is where that profile is assembled before Koala is configured.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-koala-is-for-who-it-is-not-and-what-to-do-next" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Koala Is For, Who It Is Not, and What to Do Next
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
              <h2 id="who-koala-is-for-who-it-is-not-and-what-to-do-next-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Koala Is For, Who It Is Not, and What to Do Next
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
