export default function TransformsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Semrush changes the way a small business team works by taking the guesswork out of every step. Instead
        of starting with a blank screen, the team gets a list of topics and keywords that local customers are
        actually searching for, filtered for low competition and high demand in South Florida. No more wasting
        time on ideas that never rank. Semrush surfaces the gaps competitors are missing, so the team knows
        exactly where to focus for quick wins. This is not just a list of suggestions; it’s a data-driven
        roadmap that replaces hours of manual research and brainstorming.</p>
      <p className="text-base text-white shadow-text pt-3">
        When it comes to writing, Semrush automates the heavy lifting. The AI Article Generator builds
        full-length, SEO-ready drafts from a topic or brief, keeping the brand voice consistent across every
        channel. Instead of rewriting a blog post five times for email, LinkedIn, and Google Business Profile,
        the team can turn one strong piece into tailored assets for each platform in minutes. This means no
        more copy-paste reformatting or worrying if the message will sound off-brand. The platform handles the
        repurposing and keeps the tone steady, so the business presents a unified front everywhere it shows
        up.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bulk scheduling tools in Semrush let the team plan and queue a month’s worth of posts, emails, and
        updates in one go. The days of juggling spreadsheets and logging into multiple dashboards are over.
        Semrush keeps the calendar full and the messaging consistent, freeing up the team to focus on strategy
        instead of logistics. Approval workflows are built in, so content can be routed to the right manager
        or owner for review without bottlenecks or confusion. This removes the need for endless email chains
        and last-minute edits, speeding up the process and cutting the risk of mistakes slipping through.</p>
      <p className="text-base text-white shadow-text pt-3">
        Semrush doesn’t just automate content creation and scheduling, it also gives the team real-time
        feedback on what’s working and what needs attention. As the business owner or marketer writes, the
        editor surfaces SEO and AI visibility recommendations directly in the workflow. If traffic drops or a
        competitor’s post suddenly outperforms, Semrush explains why and points out what to fix. This instant
        visibility means the team can react before a small issue becomes a major problem. Time that used to go
        into troubleshooting and second-guessing is now spent building momentum.</p>
      <blockquote cite="https://www.semrush.com/solutions/content-marketers/" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Find topics that earn visibility, optimize every piece for search and AI, and repurpose content for
        different platforms, all in one place.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        For teams that need to keep multiple people in the loop, Semrush centralizes all workspaces,
        reporting, and collaboration tools in one place. No more chasing down files or trying to reconcile
        different versions of the same document. The platform integrates with Google Analytics, Search
        Console, Google Ads, and Adobe Analytics, so the business can track everything from one dashboard.
        Reports are customizable and can be set to run automatically, reducing the reporting workload and
        making it easy to share results with leadership or clients.</p>
      <p className="text-base text-white shadow-text pt-3">
        Semrush’s modular pricing lets small businesses start with just what they need. The SEO Toolkit starts
        at $139.95 per month, and for teams that want both SEO and AI visibility features, Semrush One starts
        at $199.95 per month. Local businesses can manage their Google Business Profile and local listings for
        $60 per location per month. This means small teams can get enterprise-grade automation and data
        without paying for features they won’t use or getting stuck in a long-term contract that doesn’t fit
        their needs.</p>
      <p className="text-base text-white shadow-text pt-3">
        The end result is a week where the team spends less time on manual work and more time on what moves
        the business forward. Brainstorming turns into action as the team works from a list of proven,
        high-potential topics. Content gets created, approved, and published faster, with fewer errors and
        less stress. Every asset is optimized for both traditional search and AI-powered platforms, so the
        business shows up where customers are looking. Instead of reacting to traffic drops or missed
        opportunities, the team can see what’s coming and act with confidence. Semrush removes the grind from
        Intelligent Content Planning so small businesses can stay visible, competitive, and focused on growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-semrush-removes-the-weekly-grind-from-intelligent-content-planning" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Semrush Removes the Weekly Grind from Intelligent Content Planning
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-semrush-removes-the-weekly-grind-from-intelligent-content-planning-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Semrush Removes the Weekly Grind from Intelligent Content Planning
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
