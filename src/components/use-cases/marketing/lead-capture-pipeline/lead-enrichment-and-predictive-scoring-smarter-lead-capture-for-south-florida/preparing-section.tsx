import Link from "next/link";

export default function PreparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        If you are reading this far, you are probably weighing whether to move forward with a lead enrichment
        and predictive scoring pipeline. The next step is not to buy a tool or sign a contract. It is to get
        clear, internally, on what your business actually needs to achieve. The publisher’s method starts
        here: you book a free consultation, but the real work begins with business objectives. That means
        pinning down the bottleneck you want to solve: are you missing out on warm traffic, or is your sales
        team wasting hours on the wrong leads? Are you struggling to tie your marketing spend to revenue, or
        is your problem simply not knowing who is on your site?</p>
      <p className="text-base text-white shadow-text pt-3">
        Expect the first conversation to be about your goals, not the software stack. You will be asked for
        the shape of your sales funnel, the volume and source of your traffic, and what a qualified lead looks
        like for your business. This is not a quiz, it is how we define the outcome that matters. Once your
        objectives are set, the next phase is a&nbsp;data
        quality&nbsp;assessment. This is where the real-world constraints hit: if
        your&nbsp;CRM&nbsp;is full of duplicates or outdated records,
        or if your web analytics is not tracking the right events, that gets surfaced early. Expect to spend
        some time cleaning up what you already have, because every tool, Apollo, Factors, Lusha, Snitcher,
        Leadfeeder, works best when the upstream data is sound.</p>
      <p className="text-base text-white shadow-text pt-3">
        With business goals and&nbsp;data
        quality&nbsp;squared away, the technical architecture and tool selection come next.
        Here, the details get tailored to your environment. If your biggest friction is finding verified
        contacts and direct dials, Apollo or Lusha are plugged in to push clean, up-to-date decision-maker
        info directly into your&nbsp;CRM. If your pain is anonymous
        web traffic, Snitcher and Leadfeeder are connected to surface the companies and behaviors behind the
        visits in real time. When you need to know which campaigns are actually responsible for revenue,
        Factors is wired in to tie ad clicks and site visits to closed-won deals, so you can stop guessing
        where your pipeline comes from.</p>
      <p className="text-base text-white shadow-text pt-3">
        The pilot phase is about proving it works in your business, not in a demo environment. A small batch
        of leads is run through the whole pipeline, enrichment, scoring, routing, so you can see exactly what
        changes for your sales and marketing teams. This is the place to spot integration gaps or workflow
        snags before rolling out at full scale. Expect some back and forth: tweaks to scoring rules,
        adjustments to what counts as &quot;hot,&quot; and maybe a round of data cleanup as real issues
        surface.</p>
      <p className="text-base text-white shadow-text pt-3">
        When it is live, what should you expect? The sales team opens their day with a prioritized list of
        real, local companies showing intent, complete with verified contact info and a timeline of recent
        behavior. Marketing sees which campaigns are actually driving pipeline, not just clicks. Operations
        gets fewer tickets about broken records or missed handoffs. The best-fit leads move faster and close
        more often because the guesswork is gone. For the owner, the outcome is clear: a sales pipeline that
        reflects the real demand in the market, measurable improvement in conversion rates, and a team that
        spends more time closing deals and less time hunting for someone to talk to. The right pipeline does
        not just automate busywork, it changes what is possible for a small business trying to grow in a
        crowded market.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<a href="#consultationAppointment2xl" id={`use-cases-marketing-lead-enrichment-and-predictive-scoring-preparing-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>What percentage of your new clients come from inbound marketing (people finding you) versus outbound sales (your team cold calling or emailing)?</li>
        <li>When a business visits your website, reads your service or pricing page, and leaves without filling out a form, how do you track or follow up with them right now?</li>
        <li>How much time do your sales reps spend every day manually searching Google, LinkedIn, or local directories just to find the email addresses and direct phone numbers of decision-makers?</li>
        <li>When you pull or buy a list of local businesses to target in Miami-Dade, Broward, or Palm Beach, what percentage of those emails bounce or phone numbers turn out to be dead ends?</li>
        <li>How do your sales reps currently decide which lead to call first on Monday morning? Is it based on a mathematical score, the newest lead, or just gut feeling?</li>
        <li>Do you treat a prospect who downloaded a free checklist the exact same way as a prospect who spent 5 minutes reviewing your partner accounting software pricing page?</li>
        <li>What&nbsp;CRM&nbsp;or tracking system does your sales team live in every day? (e.g., free HubSpot, Zoho,&nbsp;<Link id={`use-cases-marketing-lead-enrichment-preparing-active-campaign${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/activecampaign" className="text-[#C83803] hover:underline">ActiveCampaign</Link>, Salesforce, or just a massive Google Sheet?)</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Before you commit to any of those platforms, read what their vendors publish and where the numbers stop. Our post <Link id={`use-cases-marketing-lead-capture-pipeline-ai-lead-enrichment-scoring-xlink-blog${idSuffix}`} href="/blog/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-how-south-florida-can-turn-more-leads-into-sales" className="text-[#C83803] hover:underline">Lead Enrichment to Close More Sales</Link> goes through Apollo’s 240 million contacts and 65 data filters, Lusha’s users reporting contact rates rising from as low as 5% to over 70% with direct dials, Factors’ customers citing tighter attribution and less wasted ad spend, and the honest boundary that none of them publishes a fixed return for a South Florida small business. For the scoring rules themselves, our post <Link id={`use-cases-marketing-lead-capture-pipeline-ai-lead-enrichment-scoring-xlink-blog2${idSuffix}`} href="/blog/marketing/lead-capture-pipeline/ai-lead-scoring" className="text-[#C83803] hover:underline">AI Lead Scoring</Link> builds a 100-point model from fit, intent and engagement points and sets the thresholds that send a lead to a same-day call, into nurture, or off the active list.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-happens-next-the-real-step-forward-and-what-you-can-expect" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Happens Next: The Real Step Forward and What You Can Expect
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
              <h2 id="what-happens-next-the-real-step-forward-and-what-you-can-expect-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Happens Next: The Real Step Forward and What You Can Expect
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
