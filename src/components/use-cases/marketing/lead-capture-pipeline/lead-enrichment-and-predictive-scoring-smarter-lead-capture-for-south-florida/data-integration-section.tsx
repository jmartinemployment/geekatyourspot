import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataIntegrationSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A lead enrichment and predictive scoring pipeline is only as good as the data it works with and the
        way it plugs into your existing systems. The right pipeline doesn’t just bolt on a new tool. It
        requires a real connection between your&nbsp;CRM,
        website,&nbsp;marketing automation, and any
        other platform where leads are captured or worked. If these aren’t talking cleanly to each other,
        you’ll end up with gaps, lags, or outright missed opportunities, and the whole point of enrichment and
        scoring is lost.</p>
      <p className="text-base text-white shadow-text pt-3">
        Start with the basics: you need reliable, up-to-date contact and account data flowing in both
        directions. Website visitor tracking (using tools like Snitcher or Leadfeeder) should feed identified
        companies and engagement signals straight into your&nbsp;CRM,
        not in a daily export, but in near real time. If your business relies on field forms or chatbots,
        those entries have to be enriched automatically (Apollo, for instance, can instantly append verified
        emails and mobile numbers to inbound form fills). This means your forms ask for less and your team
        sees more, with firmographics and contact details filled in behind the scenes.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next is the integration layer. Your&nbsp;CRM&nbsp;(whether
        it’s Salesforce, HubSpot, or a lighter small business platform) must handle enriched data fields, not just name
        and email, but company size, industry, last engagement, and source. This is where bulk enrichment from
        Lusha comes in, processing thousands of records at once and writing verified mobile numbers and emails
        back to your system, so you never lose a lead to a dead number or a bounced email. If you’re running
        outbound, Apollo’s rule-based scoring and enrichment means your prospect lists are always up to date,
        and you’re not wasting time calling through out-of-date or misrouted records.</p>
      <p className="text-base text-white shadow-text pt-3">
        But integration isn’t just about data import and export. The best setups push real-time signals from
        your website and ad campaigns into your&nbsp;<GlossaryLink slug="lead-scoring" className="text-[#0B162A] hover:underline">lead
        scoring</GlossaryLink>&nbsp;model. Factors connects these dots, aggregating touchpoints from digital
        ads, web visits, and emails into a unified timeline. This lets you see exactly which accounts are
        in-market, where they came from, and what actions triggered their score increase. With this, your
        predictive scoring isn’t running blind, it’s working off live, multi-source data, with every
        meaningful signal stitched together.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation is the final piece. Clean, validated data needs to flow automatically, not through manual
        uploads or spreadsheet patchwork. Your workflow should route high-intent leads (scored by visit depth,
        frequency, and fit, as with Leadfeeder and Snitcher) directly to the right sales owner, create tasks,
        and fire alerts in Slack or Teams the second something changes. If your stack leaves this to manual
        triage, you’ll fall behind competitors who are reaching out while your team is still cleaning up
        yesterday’s data.</p>
      <p className="text-base text-white shadow-text pt-3">
        A real-world rollout in a small business in West Palm or Broward means mapping out every input and
        output: where leads arrive, how data is enriched, how scores are updated, and exactly what happens
        when a warm account appears. It means confirming that
        your&nbsp;CRM&nbsp;fields for phone, email, company, and tags
        are ready for bulk and real-time updates, and that your website tracking code is feeding the right
        session data to your pipeline. No two businesses have the exact same flow, but every successful
        project has these integration points squared away before launch. The cost of skipping this step is
        chasing ghosts or letting your best leads slip away before anyone notices.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-data-and-integration-demands-you-have-to-meet-upfront" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data and Integration Demands You Have to Meet Upfront
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-data-and-integration-demands-you-have-to-meet-upfront-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data and Integration Demands You Have to Meet Upfront
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
