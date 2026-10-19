import Link from "next/link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every week, small business owners and their teams in Miami-Dade, Broward, and West Palm Beach counties
        stare at blank screens, hoping their next blog or social post will finally get traction. They pull
        late nights guessing what topics might matter to potential customers, patch together long lists of
        keywords, and argue over which idea is worth the effort. Hours disappear into writing, rewriting, and
        reformatting the same piece just to cover all the channels, email, LinkedIn, Instagram, and Google
        Business Profile. But after all that work, most of it lands nowhere: the posts never rank, the emails
        go unopened, and website visits barely move. The result is a cycle of wasted effort, rising stress,
        and content that never seems to pay off.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is what happens when&nbsp;<Link id="tools-marketing-intelligent-content-planning-semrush-overview-intelligent-content-planning" href="/use-cases/marketing/content-creation-workflow/intelligent-content-planning-for-small-businesses-real-results-with-ai" className="text-[#C83803] hover:underline">intelligent content planning</Link>&nbsp;runs on guesswork. Without the right data, even
        the best ideas miss their mark. Local teams get stuck on a treadmill, publishing for the sake of
        publishing, not because they know it will drive results. The pain is real: traffic drops with no
        warning, social engagement dries up, and the competition pulls ahead. Ninety percent of this content
        gets zero traffic and fails to convert. The team burns out, and the business stays invisible online.</p>
      <p className="text-md text-white shadow-text pt-3">
        Intelligent Content Planning changes the picture. Instead of hunches and manual rework, AI-driven
        tools now map out what your local audience is searching for, which topics have a real shot at ranking,
        and how to turn one strong piece into a dozen tailored assets, blog posts, emails, social updates, all
        from a single workflow. With automated content generation, repurposing, bulk scheduling, and approval
        workflows, your team can finally focus on what matters: reaching more customers and making every hour
        count. For small businesses across South Florida, this means fewer late nights, more consistent
        results, and marketing that actually moves the needle.</p>
      <p className="text-md text-white shadow-text pt-3">
        At Geek @ Your Spot, we build repeatable, AI-powered content workflows designed for teams without
        enterprise budgets or headcount to spare. You get practical, affordable solutions that fit right into
        your existing stack, no guesswork, no wasted hours, just a clear path from idea to impact. Intelligent
        Content Planning is how small businesses finally get seen.</p>
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
