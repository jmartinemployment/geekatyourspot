export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Rytr’s pricing and fit come down to what you actually need to produce and how much you are willing to
        pay for speed and simplicity. For small businesses in South Florida, the first test is volume: if you
        only need a handful of posts, emails, or product descriptions each month, Rytr’s free and entry-level
        plans are designed for you. The platform is not built for agencies running hundreds of campaigns or
        teams cranking out 100,000 words a month. It is for the owner or office manager who needs content for
        their own business, not a fleet of clients.</p>
      <p className="text-base text-white shadow-text pt-3">
        Pricing is straightforward. Rytr offers a free plan that lets you generate up to 10,000 characters a
        month, enough for several short posts or emails. If you need more, the paid plans open up higher
        limits and additional features, with a monthly option and a discount for annual payment. The price
        points are set low enough that even a solo operator can justify the cost, especially compared to
        hiring outside help or buying into more expensive platforms. The annual plan saves you money over the
        monthly, but the real decision is whether your volume justifies moving past the free tier.</p>
      <p className="text-base text-white shadow-text pt-3">
        Fit is not just about price. The main question is whether Rytr covers your real-world use cases. If
        you need to generate Google Business Profile updates, Instagram captions, product blurbs, and
        follow-up emails in multiple languages, Rytr’s pre-built templates and language support line up well.
        If you need deep SEO optimization, long-form research articles, or integration with a dozen marketing
        tools, Rytr is not the right fit, those are jobs for heavier platforms with higher costs and steeper
        learning curves. Rytr is at its best when you need to produce short, channel-specific content quickly,
        with minimal setup and no technical overhead.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another factor is how Rytr fits into your existing workflow. If your team already uses Gmail, Slack,
        or LinkedIn, Rytr’s integrations let you draft content where you work. There is no need to switch
        platforms or copy-paste between tools. For most small teams, this reduces friction and training time.
        If your workflow depends on custom automations or API-driven triggers, Rytr will not fill that gap,
        there is no scripting or developer extension, so what you see is what you get.</p>
      <p className="text-base text-white shadow-text pt-3">
        The case study from Rytr’s own site is telling. A client named Morgan saved over 50 hours and $1,000
        per month by using Rytr for content creation. This is not a hypothetical; it is a concrete outcome for
        a small business using the product as intended. If your operation looks like Morgan’s, lean,
        time-strapped, and focused on direct marketing channels, Rytr’s fit is strong. If you need more
        complexity, you will hit the ceiling quickly.</p>
      <p className="text-base text-white shadow-text pt-3">
        When Geek @ Your Spot LLC evaluates Rytr for a client, the checklist is short: Do you need to produce
        content in more than one language? Do you need to adjust tone for different platforms? Is your monthly
        content volume closer to a dozen assets than a hundred? Are you looking to save time and money
        compared to hiring outside help? If the answer is yes to most of these, Rytr is a strong fit. If not,
        another tool from the AI content stack may be a better choice.</p>
      <p className="text-base text-white shadow-text pt-3">
        In the end, Rytr’s value is in its focus. It does not try to be everything for everyone. It strips
        down the content workflow to what matters for small teams: quick drafts, easy tone and language
        control, and a price that makes sense for the volume you actually need. For South Florida businesses
        that want to look bigger without adding staff, Rytr is the practical choice, clear on what it does,
        honest about what it does not, and priced so you can say yes without a second thought.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-rytr-on-fit-and-pricing-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Rytr on Fit and Pricing for Small Teams
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-rytr-on-fit-and-pricing-for-small-teams-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Rytr on Fit and Pricing for Small Teams
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
