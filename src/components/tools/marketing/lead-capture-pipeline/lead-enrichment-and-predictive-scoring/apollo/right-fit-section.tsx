import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Apollo is built for small businesses that need to eliminate wasted effort in their sales process,
        especially in markets like Miami-Dade, Broward, and West Palm Beach where every hour and dollar
        counts. If your team is spending more time searching for contact details than actually talking to
        prospects, Apollo fits. If you are losing track of website visitors who never fill out a form, or if
        your sales pipeline is full of cold, unresponsive leads, Apollo’s automated enrichment and predictive
        scoring can change how your team operates.</p>
      <p className="text-base text-white shadow-text pt-3">
        But Apollo is not for everyone. If your business relies on a high-touch, relationship-driven sales
        cycle with only a handful of prospects at any given time, the value of automating lead enrichment and
        predictive scoring may not justify the investment. Likewise, if your team is not ready to integrate
        new tools into your existing&nbsp;CRM&nbsp;or does not have
        the&nbsp;<GlossaryLink slug="data-quality">data quality</GlossaryLink>&nbsp;to support automated
        workflows, Apollo’s strengths will be underused. The platform is strongest when you have enough
        inbound or outbound volume to benefit from automation, dozens or hundreds of leads per week, not just
        a few major accounts. It is also most effective when you are ready to commit to keeping
        your&nbsp;CRM&nbsp;clean and your sales process structured,
        since Apollo’s automation relies on good data to deliver the right leads to the right reps.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams that do fit, the next step is not just to sign up and hope for the best. Getting value from
        Apollo means taking a close look at your current sales process: how leads are captured, what data you
        collect, and how you decide which prospects get a call. You need to define your ideal customer profile
        in concrete terms, location, company size, industry, role, so Apollo’s filters and scoring models can
        surface the right accounts. You also need to decide which integrations matter most: syncing with
        HubSpot or Salesforce, connecting to Slack, or using the Chrome extension to capture leads from
        LinkedIn and company websites.</p>
      <p className="text-base text-white shadow-text pt-3">
        Implementation is not a one-and-done project. Apollo’s automation gets smarter as your team works, but
        only if you keep the feedback loop open: reviewing which leads convert, updating your ICP, and tuning
        your scoring rules as your business evolves. For small businesses without a dedicated RevOps or sales
        operations role, this can sound daunting, but in practice, Apollo is designed to minimize manual
        upkeep. The system updates records automatically, flags job changes, and refreshes contact data in the
        background. Your team’s job is to work the leads Apollo surfaces, track what closes, and adjust the
        rules as you learn.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you are not sure Apollo is the right fit, the best next move is a structured evaluation. Start with
        a free trial, connect your&nbsp;CRM, and run a real campaign
        using Apollo’s enrichment and scoring. Track how many hours your team saves, how many more qualified
        conversations you have, and whether your pipeline gets more predictable. Compare these results to what
        you are getting from manual research, cold lists, or other enrichment tools. For businesses that need
        to see results before they buy, this hands-on approach is more reliable than any feature checklist or
        sales demo.</p>
      <p className="text-base text-white shadow-text pt-3">
        For South Florida small businesses ready to move from guesswork to a data-driven sales pipeline,
        Apollo delivers automation, accuracy, and focus, provided you have the lead volume and process
        discipline to use it. Teams stuck in spreadsheet chaos or chasing anonymous website visitors will see
        the biggest gains. Those with a well-defined sales process and a hunger for more qualified
        conversations will find Apollo’s automation a direct answer to wasted effort and lost revenue. The
        next step is to try it in your own environment, measure what changes, and see if the results match the
        promise.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<a href="#consultationAppointment2xl" id={`tools-marketing-lead-enrichment-and-predictive-scoring-apollo-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>What percentage of your new clients come from inbound marketing (people finding you) versus outbound sales (your team cold calling or emailing)?</li>
        <li>When a business visits your website, reads your service or pricing page, and leaves without filling out a form, how do you track or follow up with them right now?</li>
        <li>How much time do your sales reps spend every day manually searching Google, LinkedIn, or local directories just to find the email addresses and direct phone numbers of decision-makers?</li>
        <li>When you pull or buy a list of local businesses to target in Miami-Dade, Broward, or Palm Beach, what percentage of those emails bounce or phone numbers turn out to be dead ends?</li>
        <li>How do your sales reps currently decide which lead to call first on Monday morning? Is it based on a mathematical score, the newest lead, or just gut feeling?</li>
        <li>Do you treat a prospect who downloaded a free checklist the exact same way as a prospect who spent 5 minutes reviewing your partner accounting software pricing page?</li>
        <li>What&nbsp;CRM&nbsp;or tracking system does your sales team live in every day? (e.g., free HubSpot, Zoho,&nbsp;<Link id={`tools-marketing-lead-enrichment-apollo-right-fit-active-campaign${idSuffix}`} href="/tools/marketing/active-campaign" className="text-[#C83803] hover:underline">ActiveCampaign</Link>, Salesforce, or just a massive Google Sheet?)</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Our post <Link id={`tools-marketing-lead-capture-pipeline-lead-enrichment-and-predictive-scoring-apollo-xlink-blog${idSuffix}`} href="/blog/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-how-south-florida-can-turn-more-leads-into-sales" className="text-[#C83803] hover:underline">Lead Enrichment to Close More Sales</Link> reports Apollo’s own figures, a pool of over 240 million contacts filtered on more than 65 data points and AI scoring built on your CRM data, and is plain that Apollo publishes no conversion percentage for a South Florida small business, so the lift is real but unquantified here. It also names the condition most Apollo projects fail on: bulk enrichment of thousands of records only works from a clean, well-structured input file, and generic emails and old job titles leave the scoring built on sand. Whether your lead volume and your CRM discipline meet that bar is what the four-phase assessment in our <Link id={`tools-marketing-lead-capture-pipeline-lead-enrichment-and-predictive-scoring-apollo-xlink-pillar${idSuffix}`} href="/use-cases/marketing/lead-capture-pipeline/ai-lead-enrichment-scoring" className="text-[#C83803] hover:underline">Lead Enrichment &amp; Predictive Scoring</Link> guide establishes first.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-apollo-works-for-who-it-does-not-and-what-to-do-next" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Apollo Works For, Who It Does Not, and What to Do Next
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
              <h2 id="who-apollo-works-for-who-it-does-not-and-what-to-do-next-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Apollo Works For, Who It Does Not, and What to Do Next
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
