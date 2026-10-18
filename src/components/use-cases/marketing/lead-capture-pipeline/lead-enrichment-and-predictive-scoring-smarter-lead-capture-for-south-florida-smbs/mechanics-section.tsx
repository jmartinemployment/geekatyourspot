import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function MechanicsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A working lead capture pipeline flips the sales process from guesswork to precision. Instead of your
        sales team wasting mornings cold-calling dead numbers, the system surfaces the local companies already
        showing buying intent on your site and serves their decision-maker contacts, ranked by score, straight
        to your reps. Every step replaces hours of manual effort with automation and data that keep the
        pipeline warm, and the team focused on what matters.</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Define business objectives and real bottlenecks. The first phase is never tool selection, it’s clarity. What does the business need to change? For a South Florida HVAC firm, that might be reducing time wasted on cold outreach by 50%. For a professional services shop, it’s about surfacing local, high-fit accounts who are browsing your pricing page today. KPIs are set: response time, conversion rate, cost per lead, pipeline velocity. Every decision flows from this.</li>
        <li>Assess&nbsp;<GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">data quality</GlossaryLink>&nbsp;and readiness. Most small businesses have scattered records: a&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;with missing numbers, spreadsheets with stale emails, a website collecting form fills with no context. The pipeline’s engine only works if it has clean fuel. We run validation checks on your lists and web forms. If half your old contacts are bouncing, that gets fixed before anything is automated.</li>
        <li>Install anonymous visitor identification and enrichment. Here’s where Snitcher and Leadfeeder go to work. Snitcher drops a tracking pixel on your website, resolving anonymous traffic into verified company profiles, even when no form gets filled out. Leadfeeder does the same, but with a focus on real-time notifications and deep behavioral scoring. Both cut through the noise, filtering out ISPs and junk traffic so only real businesses in your service area show up for sales.</li>
        <li>Enrich every record with verified decision-maker contacts. This is where Lusha and Apollo step in. Instead of your rep Googling for a CFO’s mobile number or scraping LinkedIn for the right HR manager, Apollo automatically appends direct-dial numbers and validated emails to every inbound lead or web visitor profile. Lusha runs bulk enrichment, processing thousands of records via&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;in seconds, so your team never dials a dead end or wastes time with generic info@ addresses.</li>
        <li>Apply predictive scoring using real signals. Now you have a list of local companies, each with the right contact. The next problem is knowing who’s actually ready to buy. Apollo’s predictive scoring engine uses machine learning to rank contacts based on fit (industry, size, location) and behavior (site visits, content viewed, campaign touchpoints). Factors adds another layer by aggregating touchpoints and scoring accounts based on content depth, say, repeat pricing page visits or multiple downloads. The system learns over time, ranking the hottest accounts to the top of the call list every day.</li>
        <li>Automate routing and real-time alerts. No more waiting for form fills or a rep to check the&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>. When a Tier 1 account from Miami-Dade hits your service page, Leadfeeder and Snitcher trigger instant Slack or email alerts. Lusha ensures the contact record is up to date, so the right rep can call while interest is fresh. If a high-fit account goes cold, Factors flags it for nurture instead of letting it rot in a queue.</li>
        <li>Integrate with your sales stack and track outcomes. The whole pipeline connects to your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>, HubSpot, Salesforce, or Pipedrive, so every enriched, scored lead is routed and tracked in one place. Leadfeeder, Apollo, and Factors all push data directly into your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;and outreach tools. That means every rep sees the full history: who visited, what they read, what signals they showed, and how they scored. No more manual entry, no more lost leads.</li>
        <li>Monitor, adjust, and scale. This isn’t a set-and-forget motion. Weekly reports show which signals actually predict closed deals, which ad campaigns are surfacing the right local accounts, and which reps convert the best leads. The pipeline is tweaked as needed: scoring rules are adjusted, enrichment providers are swapped, and workflows are tuned to keep getting sharper over time.</li>
      </ol>
      <p className="text-md text-white shadow-text pt-3">
        The sequence is tight, and every phase is focused on removing friction. No more guessing who to call.
        No more anonymous traffic. Your sales team starts each day with a live, ranked list of South Florida
        businesses ready to talk, with every dead number and generic email filtered out. The tools, Apollo,
        Lusha, Snitcher, Factors, Leadfeeder, each play their part, but the result is one pipeline: automated,
        scored, and always on.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-lead-enrichment-and-predictive-scoring-actually-work-the-mechanics-step-by-step" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Lead Enrichment and Predictive Scoring Actually Work: The Mechanics, Step by Step
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
              <h2 id="how-lead-enrichment-and-predictive-scoring-actually-work-the-mechanics-step-by-step" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Lead Enrichment and Predictive Scoring Actually Work: The Mechanics, Step by Step
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
