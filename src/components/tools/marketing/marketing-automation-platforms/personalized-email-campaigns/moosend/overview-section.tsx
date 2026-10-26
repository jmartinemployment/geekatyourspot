import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why does sending relevant emails to prospects and customers feel so hard for a small business, even with a
        well-built list? The problem is that most teams in West Palm Beach, Broward and Miami-Dade counties already
        have the data, but not a system for sending the right follow-up. Manual effort means generic blasts go out
        because tailoring every message is not practical at local business scale. The result: prospects tune out,
        and even loyal customers stop opening what looks like &apos;just another offer&apos;.</p>
      <p className="text-base text-white shadow-text pt-3">
        AI-driven <Link id={`tools-marketing-personalized-email-campaigns-moosend-overview-personalized-email-campaigns${idSuffix}`} href="/use-cases/marketing/marketing-automation-platforms/ai-personalized-email-campaigns" className="text-[#C83803] hover:underline">Personalized
        Email Campaigns</Link> solve this by letting you segment your audience automatically, then send each group
        messages that match their interests or stage in the <GlossaryLink slug="customer-journey">customer journey</GlossaryLink>.
        Instead of one-size-fits-all, a <GlossaryLink slug="marketing-automation-platform">marketing automation
        platform</GlossaryLink> powers up your existing list, so <GlossaryLink slug="re-engagement-campaign">re-engagement</GlossaryLink>,
        cart recovery and tailored content all happen on schedule, without staff doing repetitive work. This shift
        cuts wasted hours, boosts open and <GlossaryLink slug="click-through-rate">click rates</GlossaryLink>, and
        helps every message land with the right intent. The outcome is fewer missed sales, more repeat business and
        a steady stream of <GlossaryLink slug="qualified-lead">qualified leads</GlossaryLink>, without burning out
        your team.</p>
      <p className="text-base text-white shadow-text pt-3">
        What is at stake is not just time, but missed revenue and damaged relationships. When a business in South
        Florida sends the same email to every contact, the list gets less valuable with every blast. But when the
        right platform automates personalized follow-ups, you win back lost attention and keep your brand top of
        mind, all while controlling costs. For small businesses that run lean, the gap between those two outcomes is
        the difference between growth and <GlossaryLink slug="customer-churn">churn</GlossaryLink>.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you are a small business owner in Miami-Dade, Broward or Palm Beach counties who wants to make every
        email count, this page is for you. You get a practical, affordable roadmap for moving from generic blasts to
        true personalized email campaigns, without adding headcount or learning a new system from scratch.</p>
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
