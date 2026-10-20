import Link from "next/link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A small business owner in Miami sits in front of a blank screen, her calendar already packed with
        payroll, billing, and client calls. She needs a week’s worth of social posts, a new blog for local
        SEO, and an email campaign to nudge leads who have gone silent. But after hours of effort, only a few
        half-finished drafts sit open. The ideas are there, but putting them into words that sound right, stay
        on message, and actually get noticed online feels impossible. And she is not alone. Across West Palm
        Beach, Broward, and Miami-Dade, small teams face the same daily grind, juggling real work with the
        relentless demand for fresh, consistent content.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is more than a nuisance. The &quot;blank page&quot; bottleneck eats hours that should go to
        customers and operations. Hiring a local agency is out of reach for most: $2,000 or more a month for
        someone else’s words, with no guarantee the phone will ring or the inbox will fill. Even when content
        does get published, it’s rarely enough. A skipped week here, a missed post there, and soon your social
        channels look deserted and your website falls behind. The end result: no steady flow of leads, and no
        chance to build the trust or visibility that wins local business.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual content creation does not just waste time; it breaks your messaging. Updates written in a rush
        read like they came from different people. Emails, landing pages, and posts contradict each other or
        miss the mark entirely. Without a system to keep everything consistent, your brand looks scattered and
        forgettable. For many, this is where&nbsp;<Link id="tools-marketing-intelligent-content-generation-jasper-overview-intelligent-content-generation" href="/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses" className="text-[#C83803] hover:underline">Intelligent Content Generation</Link>&nbsp;changes the game. Instead of
        fighting through every draft yourself or paying agency rates, AI-driven workflows let you research,
        generate, repurpose, and schedule content with a fraction of the effort. You get unified messaging
        across every channel, plus built-in approvals and personalizations that keep quality high and your
        voice intact.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in South Florida, this is not a nice-to-have. It is the only way to compete with
        larger rivals who can afford full-time marketing teams. Intelligent Content Generation takes the
        manual pain out of content, so your team can stay focused on what matters: serving customers, growing
        sales, and building a brand that local buyers trust.</p>
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
