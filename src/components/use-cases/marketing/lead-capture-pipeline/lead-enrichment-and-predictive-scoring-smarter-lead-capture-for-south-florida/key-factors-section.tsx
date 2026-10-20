import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function KeyFactorsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A pipeline that keeps producing warm leads a year after launch looks very different from one that
        fizzles before the next budget cycle. The difference is never just the tool. It’s whether the
        implementation fits the real business process, keeps data healthy, and adapts as the market shifts.
        Here is what separates the systems that last from the ones that fail.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Business-first design, not feature-first chasing. The pipelines that keep working start with the actual sales motion and buyer path, not a shopping list of “hot” features. If your team closes deals face to face, the system must surface local, in-market accounts and direct phone lines, no fancy AI scoring will help if your reps can’t reach anyone.</li>
        <li>Real&nbsp;data quality&nbsp;checks, before launch and ongoing. Too many rollouts skip this step and pay for it later. If the pipeline is built on stale, incomplete, or mismatched records, the scoring model is noise and reps spend their days correcting errors. A robust build runs automated validation from day one (using Lusha for bulk enrichment and Apollo for instant contact checks), then schedules regular cleanups so every new lead is verified before a rep even sees it.</li>
        <li>Tight integration with the actual work environment. Pipelines that last are built into the sales team’s daily tools, HubSpot, Salesforce, or whatever&nbsp;CRM&nbsp;runs the show. Leadfeeder and Snitcher pipe in web visitor data and trigger alerts in Slack or Teams, so action happens where the team already works. Systems that require reps to “check another dashboard” or switch between five disconnected apps die from lack of adoption.</li>
        <li>Continuous feedback loop between sales and marketing. The best systems learn. When a rep reports that a high-scoring lead was actually a dead end, that gets fed back, scoring rules are adjusted, enrichment providers are swapped, and the pipeline gets smarter. Tools like Factors and Apollo both support this learning loop, letting you see which signals actually predict closed deals and which are just noise.</li>
        <li>Ownership and accountability from day one. A pipeline built by IT and handed off to sales, with no ongoing ownership, will stall the minute something breaks or a field changes in the&nbsp;CRM. The ones that hold up have clear roles: who owns the scoring rules, who reviews weekly reports, who fixes enrichment gaps. When the process is owned, not just installed, it keeps improving.</li>
        <li>Local fit and regular re-tuning. A pipeline built for a national&nbsp;<GlossaryLink slug="saas" className="text-[#0B162A] hover:underline">SaaS</GlossaryLink>&nbsp;company won’t hold up for a twelve-person accounting firm in Broward. The best implementations tune filters to local employee counts, revenue tiers, and regional buying signals. They check every quarter that the pipeline is still surfacing Miami-Dade accounts and not just random national visitors. Leadfeeder and Snitcher both let you filter and re-weight for your real market, so you’re not chasing the wrong leads.</li>
        <li>Clear, measurable outcomes that drive improvement. Systems that last don’t just count leads, they track response times, conversion rates, and cost per close. Reports are actionable, not vanity metrics. If the pipeline isn’t producing more deals, faster, for less money, it gets fixed or replaced.</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        The main reason a pipeline fails isn’t technology. It’s when the process is built as a project, not an
        ongoing system. The sales team goes back to old habits, the data goes stale, and the alerts get
        ignored. The pipelines that work year after year are the ones that embed into daily life, always
        tuned, always connected, always owned.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-some-lead-capture-pipelines-last-and-others-fall-apart-in-six-months" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Some Lead Capture Pipelines Last, and Others Fall Apart in Six Months
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-some-lead-capture-pipelines-last-and-others-fall-apart-in-six-months-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Some Lead Capture Pipelines Last, and Others Fall Apart in Six Months
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
