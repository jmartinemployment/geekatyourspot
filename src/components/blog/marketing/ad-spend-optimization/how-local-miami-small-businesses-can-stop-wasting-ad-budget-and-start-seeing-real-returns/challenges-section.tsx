import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Most small businesses in Miami-Dade, Broward, and Palm Beach realize too late that they have no clear answer to
        a basic question: Which ads are actually bringing customers through the door? The problem is not that the
        platforms themselves are broken, but that each platform only tells part of the story. Google, Meta, and other
        ad dashboards promise instant insights, but what they show is not tied to your real bank deposits or your
        closed deals. The result is a kind of digital tunnel vision, you make decisions based on what a dashboard
        claims, not on what actually happened.</p>
      <p className="text-base text-white shadow-text pt-3">
        This mismatch happens because the data that powers your budget decisions is fragmented. Your Google Ads account
        might show dozens of conversions, while Meta claims credit for more. But when you check your CRM or accounting
        system, those supposed leads do not match actual customers or revenue. You are not alone if you feel stuck
        guessing: Do I pause this campaign or double down? Do I shift money to what looks like a winner, only to find
        my sales unchanged? These are the root questions behind most wasted ad spend.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core of the issue is visibility. When every advertising platform runs its own reporting, the numbers often
        overlap, double-count, or miss important events, like a phone call, a form submission that turns into a sale,
        or an in-person visit. Many platforms also report conversions based on clicks or views, not actual closed
        business. That means you could be paying twice for the same lead, or scaling up campaigns that look good on
        paper but never bring in a paying customer. Meanwhile, the campaigns that really did drive sales may get cut,
        simply because their results don&rsquo;t show up in the right column.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget allocation becomes guesswork. Without a reliable connection between ads and outcomes, most small
        businesses shift money based on surface-level metrics: <GlossaryLink slug="cost-per-click">cost per
        click</GlossaryLink>, impressions, or a platform&rsquo;s version of <GlossaryLink slug="return-on-ad-spend">return
        on ad spend</GlossaryLink>. But these metrics are often inflated, delayed, or just wrong. If you move budget
        away from channels that are actually working for you, you risk starving the business of its best leads. Over
        time, this creates a negative feedback loop, each quarter gets harder to hit your targets, and each new
        campaign is a shot in the dark.</p>
      <p className="text-base text-white shadow-text pt-3">
        The true cost of flying blind is not just wasted dollars, it&rsquo;s the missed opportunity to scale up what
        works and cut what does not. Small businesses that succeed have built a clear path from ad spend to revenue,
        with data that shows which specific campaigns, creatives, and keywords bring in real customers. They stop
        guessing, start measuring, and use that data to make sharper decisions. This is not about adding another tool
        or chasing the latest trend. It&rsquo;s about building a simple, reliable system that tells you, every week,
        where your money is working and where it is leaking out. That&rsquo;s what ad spend optimization is: giving you
        back control over your marketing budget, so you can finally see what&rsquo;s driving your business forward.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="why-most-small-businesses-dont-know-where-their-ad-dollars-are-going" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Most Small Businesses Don&rsquo;t Know Where Their Ad Dollars Are Going
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="why-most-small-businesses-dont-know-where-their-ad-dollars-are-going-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Most Small Businesses Don&rsquo;t Know Where Their Ad Dollars Are Going
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
