import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Hootsuite is designed for small businesses that want to take content generation and distribution
        seriously but cannot justify a full-time marketing hire or ongoing agency spend. The strongest fit is
        for teams that need to publish across multiple channels, Facebook, Instagram, LinkedIn, TikTok, and
        more, without spending nights and weekends writing posts, chasing approvals, or trying to guess what
        will resonate locally. If you are in Miami-Dade, Broward, or West Palm Beach and your growth depends
        on staying visible and relevant in your immediate community, Hootsuite is built with your needs in
        mind.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s sweet spot is the business that has outgrown the “one post a month” approach but is not
        ready to outsource everything to an agency. These are the teams who feel the pain of the blank page,
        who have seen their social feeds go quiet for weeks at a time, and who know that every missed post is
        a missed opportunity to win new clients or stay top-of-mind with existing ones. Hootsuite’s automation
        cuts through the operational drag, no more staring at a screen waiting for inspiration, no more
        scrambling for last-minute ideas, and no more letting the competition dominate the conversation
        because your team is too busy to keep up.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams with strict compliance or brand voice requirements, Hootsuite’s approval workflows and
        permission layers let you keep control without slowing everything down. Community managers can draft
        and schedule posts, while supervisors review and approve content before it goes live. This is
        especially valuable for businesses in regulated industries or those with multiple locations needing
        both local relevance and central oversight. Hootsuite’s analytics close
        the&nbsp;feedback loop, so you can see exactly what
        is working and where to double down.</p>
      <p className="text-base text-white shadow-text pt-3">
        However, Hootsuite is not for everyone. If your business only uses a single channel and posts
        infrequently, the platform’s power may go underused. Teams that rely on long-form, deeply technical,
        or highly customized content (such as in-depth whitepapers or legal documents) may find that
        Hootsuite’s strengths in automation and scheduling are not as valuable as a more hands-on, bespoke
        approach. Similarly, if your business has no need for trend tracking or multi-channel coordination, a
        simpler tool may suffice. The same goes for those who want to outsource all marketing, if you are
        looking for someone to handle strategy, creative direction, and execution with no internal
        involvement, a traditional agency still has a place.</p>
      <p className="text-base text-white shadow-text pt-3">
        For everyone else, the majority of small businesses who need to look professional online without
        spending a fortune, Hootsuite is a practical, proven answer. It turns the content creation treadmill
        into a manageable, automated process. The onboarding is straightforward, and with the right upfront
        configuration, the system will keep your content calendar full, your brand voice consistent, and your
        analytics actionable. The platform is flexible enough to grow as your needs change, and the
        integrations with tools like Adobe Creative Cloud, Slack, and Google Analytics mean you can fit
        Hootsuite into your current workflow without a complete overhaul.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you are reading this as a business owner or office manager who has lost one too many Fridays to
        content chaos, the next step is not to decide whether to do it all yourself or hand it off to an
        agency. Instead, look at where your current process is breaking down, missed posts, inconsistent
        messaging, or a lack of leads, and see if Hootsuite’s approach lines up with your real pain points.
        The right fit is not about ticking off a feature list; it is about whether the platform can return
        time, drive consistency, and keep your business visible in the places your customers spend their time.
        If that is what you need, Hootsuite is the tool that lets you run a professional, always-on content
        engine with the team you already have.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<a href="#consultationAppointment2xl" id={`tools-marketing-ai-content-generation-hootsuite-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>What do you need written: blog posts, ads, social posts or marketing emails?</li>
        <li>Who writes it now?</li>
        <li>About how many pieces a month do you publish now, and what is your goal?</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Our post <Link id={`tools-marketing-marketing-automation-platforms-ai-content-generation-hootsuite-xlink-blog${idSuffix}`} href="/blog/marketing/marketing-automation-platforms/intelligent-content-generation-for-miami-how-to-save-time-and-scale-without-extra-hires" className="text-[#C83803] hover:underline">Content Generation Without New Hires</Link> sets out what Hootsuite’s platform evidence shows, production-ready captions and localized ideas across networks, a month of posts loaded and scheduled for peak windows, and dashboards that track engagement and conversion by network rather than likes, and it is clear that the real test is sustaining a multi-channel presence without new staff. It also shows why publishing rights by role matter, since a post with wrong pricing going live on a Friday is the failure that ownership prevents. The objectives phase in our <Link id={`tools-marketing-marketing-automation-platforms-ai-content-generation-hootsuite-xlink-pillar${idSuffix}`} href="/use-cases/marketing/marketing-automation-platforms/ai-content-generation" className="text-[#C83803] hover:underline">AI Content Generation</Link> guide is where channel volumes are set before a calendar is built.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-hootsuite-is-for-who-it-is-not-and-what-to-do-next" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Hootsuite Is For, Who It Is Not, and What to Do Next
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
              <h2 id="who-hootsuite-is-for-who-it-is-not-and-what-to-do-next-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Hootsuite Is For, Who It Is Not, and What to Do Next
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
