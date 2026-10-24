import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why does nearly every small business running ads on less than $500 a month see their marketing budget vanish
        before it has a chance to work (<a id={`use-cases-marketing-budget-ad-copy-message-validation-lede-source-localiq-com${idSuffix}`} href="https://localiq.com/blog/local-ppc/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">LocaliQ</a>,
        as of Oct 23, 2026)? Because the current system is rigged against you: every day, your $10 to $16 <GlossaryLink slug="daily-budget">daily
        budget</GlossaryLink> is drained by wasted clicks, out-of-area leads, and ad platforms that default to
        burning your money on low-value traffic (<a id={`use-cases-marketing-budget-ad-copy-message-validation-lede-source-business-google-com${idSuffix}`} href="https://business.google.com/aunz/think/ai-excellence/remaster-retail-strategy-ai/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Google</a>,
        as of Oct 24, 2026). Budget Ad Copy &amp; Message Validation solves this by putting automated guardrails in
        place, no agency retainer, no daily micro-management, so your spend only goes to local prospects ready to
        buy.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you run your ads on autopilot, Google and Facebook will spend your money wherever they find cheap clicks,
        not where your next sale comes from. One unchecked <GlossaryLink slug="broad-match">broad-match</GlossaryLink> keyword
        or a single day without tight location filters can eat your entire week’s spend on junk traffic. And with no
        full-time staff to follow up, every hot lead that drops into a web form or leaves a comment is likely to go
        cold before you can respond.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real cost is not just wasted dollars, it’s lost sales, missed calls, and the silent churn of prospects
        who never hear back. For most small businesses in Miami-Dade, Broward or Palm Beach, hiring a digital agency
        is off the table. Their monthly fee would double your actual ad spend, leaving you with less to put into the
        market than you started with. And manual campaign tweaks are a losing game: every adjustment resets the
        platform’s learning, making your results even more unpredictable.</p>
      <p className="text-base text-white shadow-text pt-3">
        This page settles that problem. Geek @ Your Spot specializes in building automated, zero-maintenance
        validation directly into your ad accounts. We lock down your targeting to the exact zip codes you serve,
        filter out low-quality clicks before they drain your budget, and route every real inquiry straight to a
        booked appointment, without you lifting a finger. It’s the practical answer for South Florida small
        businesses who need every dollar to count, and cannot afford the risk or the downtime of trial-and-error
        digital marketing.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget Ad Copy &amp; Message Validation is for small businesses in West Palm Beach, Broward, and Miami-Dade
        who are tired of seeing their ad dollars disappear with little to show for it. If the thought of checking
        your ad dashboard fills you with dread, or you simply do not have time to babysit every keyword and comment,
        this is for you. We walk through what actually drains your budget, the blind spots that platforms exploit,
        and how automated AI-driven validation fixes the problem without adding cost or complexity.</p>
      <p className="text-base text-white shadow-text pt-3">
        You will see where most businesses lose their money: untargeted clicks, out-of-area <GlossaryLink slug="impressions">impressions</GlossaryLink>,
        and slow response times that turn hot leads cold. You will also learn the difference between throwing more
        money at the problem and solving it with smarter, not harder, technology. This approach is built for owners
        and managers who want to see real sales from their ad spend, not just clicks and impressions. The process is
        grounded in clear business objectives, hard data, and the realities of running on a small budget. No jargon,
        no hype, just what works for local businesses who need results.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a shorter overview, read <Link id={`use-cases-marketing-budget-ad-copy-message-validation-lede-blog${idSuffix}`} href="/blog/marketing/ad-spend-optimization/how-miami-businesses-can-stop-wasting-ad-dollars-now" className="text-[#C83803] hover:underline">How
        Miami Businesses Can Stop Wasting Ad Dollars Now</Link> on our blog.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-small-budgets-get-wasted-and-what-stops-the-bleed-in-local-ad-campaigns" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Small Budgets Get Wasted and What Stops the Bleed in Local Ad Campaigns
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
              <h2 id="how-small-budgets-get-wasted-and-what-stops-the-bleed-in-local-ad-campaigns-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Small Budgets Get Wasted and What Stops the Bleed in Local Ad Campaigns
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
