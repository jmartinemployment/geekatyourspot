
export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The reality for small teams in South Florida is this: most of your marketing spend and sales effort is
        wasted on leads that never had a chance. You watch traffic numbers climb, but you are still left with
        a blank&nbsp;CRM&nbsp;and a pipeline full of guesses. The real
        cost is not just the ad budget burned on invisible visitors. It is the hours your sales team spends
        chasing cold contacts, the deals lost to faster competitors, and the feeling that you are always one
        step behind the real buyers.</p>
      <p className="text-md text-white shadow-text pt-3">
        Without a system like Snitcher, the typical week starts with a spreadsheet of anonymous web visits.
        You know companies are coming, but you have no way to know which ones are actually researching your
        services or comparing you to a competitor. Your team is stuck sifting through generic analytics,
        hoping to spot a pattern. Most of the time, you are sending emails and making calls to companies that
        never even looked at your pricing or left a traceable signal of intent. The best-fit leads, the ones
        who spent ten minutes on your case studies or checked out your proposal sheets, leave no clue behind.
        By the time you realize who they were, they are already signing with someone else.</p>
      <p className="text-md text-white shadow-text pt-3">
        The pain gets sharper when you try to act on web data. Tracking raw visitor IPs by hand is tedious and
        slow. Even if you manage to match an IP to a business, you still do not know if they are a real
        prospect or a student, a competitor, or a random browser. You risk double-pitching accounts already in
        your pipeline or missing out on upsell opportunities because you cannot cross-reference traffic
        against your customer list in real time. Every manual step adds a delay. By the time someone notices a
        high-value account visited your site, the buying window has closed.</p>
      <p className="text-md text-white shadow-text pt-3">
        Guesswork rules the day. You cannot tell if the person who clicked a blog post is just browsing or if
        a real decision-maker is deep in your pricing tables, ready to buy. Treating all traffic the same
        means your team spends hours on the wrong leads, while the hot prospects slip away unnoticed. You are
        forced to rely on forms and inbound calls, knowing that most visitors will never fill anything out.
        The result is a pipeline that never reflects the real demand for your services.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual lead enrichment and predictive scoring is not just slow, it is error-prone. You miss signals,
        waste follow-up on low-fit leads, and let your best opportunities age out. Sales and marketing blame
        each other for missed targets, but the core problem is lack of visibility into who is actually
        interested and when. Every week, you are paying for ads and content that bring in the right companies,
        but you have no way to capture or prioritize them before they move on. The cost is measured in lost
        revenue, wasted time, and teams that burn out chasing ghosts instead of closing real business.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing This by Hand
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing This by Hand
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
