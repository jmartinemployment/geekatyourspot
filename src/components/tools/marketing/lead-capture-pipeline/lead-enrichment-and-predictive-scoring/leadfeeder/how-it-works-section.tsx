import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Leadfeeder identifies, scores, and routes website visitor data using a blend of real-time tracking,
        proprietary IP-to-company matching, and automated enrichment. The process starts the moment someone
        lands on your site. Unlike generic analytics tools that show only pageviews and bounce rates,
        Leadfeeder focuses on the company behind each visit, not the individual. This company-level lens
        changes how small businesses in Miami-Dade, Broward, and Palm Beach counties see their pipeline.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is tracking. Leadfeeder requires a lightweight script installed on your website. This
        script collects every session, what pages are viewed, how long a visitor stays, the order of
        pageviews, repeat visits, and the source of the traffic (ad, email, direct, or referral). The script
        does not rely on cookies for company identification, which means it works even as browsers restrict
        third-party cookies. Every visit is matched to a corporate IP address.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next comes identification. Leadfeeder uses a proprietary IP-to-company database built over more than a
        decade, covering over 60 million companies worldwide. When a visitor&#39;s IP matches a known company,
        Leadfeeder logs the company name, industry, size, tech stack, and location. The system filters out
        ISPs, bots, and low-value traffic automatically, so your team only sees real B2B prospects. This
        matters for small businesses who cannot afford to waste time on junk leads. The platform updates its
        IP database daily to keep pace with remote work and shifting networks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once a company is identified, Leadfeeder enriches each record with firmographic and behavioral data.
        This includes what content the company viewed, which high-intent pages (like pricing or case studies)
        they visited, and how often they return. You can define your own &#39;high-intent&#39; pages in the
        settings, so the system scores what matters for your sales cycle. Leadfeeder&#39;s behavioral tracking
        captures more than just a single visit, it builds a timeline, showing if a local accounting firm
        checked your pricing page three times in a week or if a medical practice compared your service tiers
        before leaving. This is the difference between a cold lead and a prospect ready to buy.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scoring is the next layer. Leadfeeder applies a multi-factor, time-weighted scoring model called
        Intent Score. Every company gets a score from 0 to 10, factoring in page depth, visit frequency,
        recency, and the number of unique visitors from that company. Recent activity counts for more, so a
        business that returns three times in two days will surface higher than one that visited once last
        month. You can sort and filter by these scores, so your team starts each day with a list of the
        highest-intent local accounts, no more guessing who to call first.</p>
      <p className="text-md text-white shadow-text pt-3">
        Alerts and automation are built in. Leadfeeder sends instant notifications, via email or Slack, when a
        target company visits key pages or when an account in your pipeline resurfaces. You can set up
        workflows that trigger&nbsp;CRM&nbsp;record creation,
        auto-tagging, or campaign audience refreshes based on these signals. This means your sales team gets
        notified the moment a local business from Miami-Dade, Broward, or Palm Beach shows buying intent,
        instead of finding out days later.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, Leadfeeder integrates with the tools you already use. You can push identified accounts and
        contacts directly into CRMs like HubSpot, Salesforce, or Pipedrive in bulk. The integration is
        two-way, so updates flow back and forth. Leadfeeder also connects to Google Ads, letting you see which
        campaigns drive actual high-value visits, and to LinkedIn for audience sync. For teams with custom
        needs, there is&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;access and a browser plugin for
        on-the-fly research.</p>
      <p className="text-md text-white shadow-text pt-3">
        This step-by-step process gives small businesses a daily, real-time feed of qualified local leads,
        scored by intent and ready for follow-up. Instead of spending Friday afternoon calling through a stale
        list, your team knows exactly which Miami accounting firm or Broward medical practice is researching
        your services right now, what they care about, and how close they are to buying. This is how
        Leadfeeder turns anonymous web traffic into a real, actionable sales pipeline.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-leadfeeder-turns-anonymous-website-visits-into-qualified-pipeline" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Leadfeeder Turns Anonymous Website Visits into Qualified Pipeline
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-leadfeeder-turns-anonymous-website-visits-into-qualified-pipeline-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Leadfeeder Turns Anonymous Website Visits into Qualified Pipeline
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
