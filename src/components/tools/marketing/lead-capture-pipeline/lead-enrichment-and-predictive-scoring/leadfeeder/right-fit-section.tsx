import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Leadfeeder is designed for small businesses that need to make every sales and marketing hour count. If
        your team is chasing cold leads, missing out on website visitors who never fill out a form, or
        spending too much time qualifying prospects by hand, Leadfeeder is built to solve those problems. It
        works best for companies that sell to other businesses, accountants, medical practices, IT firms,
        logistics providers, and other service organizations in Miami-Dade, Broward, and Palm Beach counties.
        The system thrives in environments where a handful of real buying signals each week can mean the
        difference between a lost deal and a closed contract.</p>
      <p className="text-md text-white shadow-text pt-3">
        Leadfeeder is not for everyone. If your business depends on high-volume consumer traffic, or if you
        need to track individual users rather than company accounts, Leadfeeder’s company-level focus will not
        deliver what you need. The platform is also not a fit if you expect a tool to hand over verified
        personal emails or direct dials for every visitor, Leadfeeder surfaces company and behavioral data,
        not individual contact details unless a visitor self-identifies through a form or email capture.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams that already run a&nbsp;CRM&nbsp;like HubSpot,
        Salesforce, Microsoft Dynamics, or Pipedrive, Leadfeeder’s integrations mean you can route qualified
        accounts straight into your existing pipeline. Marketing and sales work from the same data, with
        instant alerts when a high-fit local business visits the site or revisits a key page. If your workflow
        depends on manual exports, spreadsheets, or slow list uploads, Leadfeeder removes those bottlenecks by
        automating the flow of data and scoring in real time.</p>
      <p className="text-md text-white shadow-text pt-3">
        The strongest results come when Leadfeeder is set up with clear intent: define what a high-intent page
        looks like for your business, set up alerts for your target industries or geographies, and use the
        scoring model to focus on the accounts that match your ideal customer profile. If your team is not
        ready to act on real-time signals or prefers to work from static lists, the value of Leadfeeder will
        not be fully realized. The platform is at its best when it replaces guesswork with live, actionable
        insight, when sales can call on a lead the same day it shows buying intent, and when marketing can see
        which campaigns are drawing real local companies to the site.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses that need to prove value quickly, Leadfeeder’s free plan and trial period lower
        the barrier to entry. You can see which companies are visiting your site within minutes of setup, and
        start qualifying leads without a long onboarding process or a big upfront investment. The platform is
        built to scale with your needs, if you outgrow the free tier, paid plans are based on the number of
        identified companies, not a per-seat license or a rigid contract. This makes it possible for a small
        team to start with a focused use-case and expand as pipeline quality and sales results improve.</p>
      <p className="text-md text-white shadow-text pt-3">
        If you are considering Leadfeeder, the next step is to look at your own sales and marketing process.
        Are you losing track of warm local leads? Are your reps spending too much time calling cold accounts?
        Are you missing out on data about who is actually engaging with your website? Leadfeeder is not a
        replacement for a&nbsp;CRM&nbsp;or
        a&nbsp;<GlossaryLink slug="marketing-automation">marketing automation</GlossaryLink>&nbsp;platform,
        but it is the bridge that connects anonymous web traffic to qualified pipeline. It works when you are
        ready to act on real-time signals and want to focus your team on the accounts that are most likely to
        close.</p>
      <p className="text-md text-white shadow-text pt-3">
        For those who want to see how Leadfeeder fits into a broader AI-driven lead capture pipeline, Geek @ Your Spot LLC’s existing resources on smart chatbots for marketing,
        AI&nbsp;lead scoring, and voice assistants provide
        the context and detail on how these systems can work together. Leadfeeder is the piece that makes sure
        no high-intent local company slips through the cracks, tying your website activity directly to your
        sales pipeline. If that is the gap in your current process, Leadfeeder is the tool built to close it.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<Link id={`tools-marketing-lead-enrichment-and-predictive-scoring-leadfeeder-right-fit-booking-your-free-consultation${idSuffix}`} href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">booking
        your free consultation</Link>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>What percentage of your new clients come from inbound marketing (people finding you) versus outbound sales (your team cold calling or emailing)?</li>
        <li>When a business visits your website, reads your service or pricing page, and leaves without filling out a form, how do you track or follow up with them right now?</li>
        <li>How much time do your sales reps spend every day manually searching Google, LinkedIn, or local directories just to find the email addresses and direct phone numbers of decision-makers?</li>
        <li>When you pull or buy a list of local businesses to target in Miami-Dade, Broward, or Palm Beach, what percentage of those emails bounce or phone numbers turn out to be dead ends?</li>
        <li>How do your sales reps currently decide which lead to call first on Monday morning? Is it based on a mathematical score, the newest lead, or just gut feeling?</li>
        <li>Do you treat a prospect who downloaded a free checklist the exact same way as a prospect who spent 5 minutes reviewing your partner accounting software pricing page?</li>
        <li>What&nbsp;CRM&nbsp;or tracking system does your sales team live in every day? (e.g., free HubSpot, Zoho, ActiveCampaign, Salesforce, or just a massive Google Sheet?)</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-leadfeeder-is-for-who-it-is-not-and-what-to-do-next" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Leadfeeder Is For, Who It Is Not, and What to Do Next
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
              <h2 id="who-leadfeeder-is-for-who-it-is-not-and-what-to-do-next-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Leadfeeder Is For, Who It Is Not, and What to Do Next
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
