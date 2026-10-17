import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Snitcher changes the game for small businesses in Miami-Dade, Broward, and West Palm Beach by making
        anonymous web traffic visible, actionable, and ranked by real intent. Instead of starting each week
        with a mystery, your team sees which local companies are on your site, what they looked at, and how
        ready they are to buy. The result is a pipeline filled with real, qualified opportunities, not just a
        list of clicks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Snitcher does this by mapping every website visit to a verified business profile. The moment a company
        lands on your site, Snitcher identifies them, even if they never fill out a form. You see the company
        name, industry, size, and location, plus details like which pages they visited, how long they stayed,
        and what actions they took. This is not generic analytics. It is a live feed of real businesses
        showing interest in your services, delivered while they are still on your site.</p>
      <p className="text-md text-white shadow-text pt-3">
        No more treating every visitor the same. Snitcher ranks accounts by fit and intent, so your sales team
        stops guessing and starts closing. When a target account hits your pricing page or spends time on key
        case studies, Snitcher scores that activity and triggers an alert. Your reps know exactly who to call,
        what they were interested in, and how urgent the opportunity is. This means less time spent sorting
        through dead leads and more time reaching out to buyers who are actively evaluating your solution.</p>
      <p className="text-md text-white shadow-text pt-3">
        Snitcher automates what used to take hours of manual effort. Instead of copying data between tabs and
        cross-referencing lists by hand, your team gets enriched company profiles and decision-maker details
        delivered straight to the&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, Slack, or sales tools you
        already use. Every identified company is scored against your ideal customer profile, so the best-fit
        leads always rise to the top. This removes the risk of double-pitching and ensures no high-value
        account slips through the cracks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Snitcher also filters out the noise. Students, competitors, and bad-fit traffic are automatically
        excluded, so your campaign reports and sales dashboards reflect only real ICP engagement. Marketing
        can see which campaigns brought in actual target companies, not just a spike in clicks. Ad spend is
        directed to channels that drive qualified visits, cutting waste and improving cost per lead. The
        feedback loop is instant: your team learns what works, pivots quickly, and proves ROI with real
        company data, not vanity metrics.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small teams, the impact is immediate. The sales manager who spent Friday afternoons guessing at
        which leads to prioritize now gets a daily hit-list of local accounts ready to buy. The marketing
        coordinator who used to justify spend with vague analytics now ties every campaign to pipeline growth.
        Instead of burning out on dead leads, your team spends its energy where it counts, turning real buyer
        intent into closed deals.</p>
      <blockquote cite="https://www.snitcher.com/use-cases/account-scoring/" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Every visitor looks the same until you score them — Snitcher ranks accounts by fit and intent so your
        team stops guessing and starts closing.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        Snitcher integrates with the platforms your team already runs, HubSpot, Salesforce, Pipedrive,
        Zoho&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, Slack, and more, so there is no need for a
        disruptive overhaul. The setup is as simple as dropping a script into your website header. Within
        minutes, companies start appearing in your dashboard, and all the heavy lifting of enrichment and
        scoring happens in the background. No ongoing maintenance, no warehouse to manage, and no hidden fees
        for adding more users or integrations.</p>
      <p className="text-md text-white shadow-text pt-3">
        The difference is not just technical. It is a shift from reactive to proactive selling. Your team is
        no longer waiting for leads to raise their hand or fill out a form. Instead, you reach out while
        interest is fresh, backed by context on what matters to each account. Sales cycles shorten, win rates
        climb, and the pipeline finally reflects the real demand in your market. This is how small businesses
        compete with larger firms, by acting on intent, not just traffic.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-snitcher-transforms-lead-enrichment-and-predictive-scoring-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Snitcher Transforms Lead Enrichment and Predictive Scoring for Small Teams
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
              <h2 id="how-snitcher-transforms-lead-enrichment-and-predictive-scoring-for-small-teams" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Snitcher Transforms Lead Enrichment and Predictive Scoring for Small Teams
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
