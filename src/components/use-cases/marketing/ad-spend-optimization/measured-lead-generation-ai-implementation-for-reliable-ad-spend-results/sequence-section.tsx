import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function SequenceSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Rolling out a Measured Lead Generation system in a real business is not just a matter of “flipping a
        switch.” The process moves through concrete phases, each with its own people, tools, and technical steps. It
        starts with a business alignment session and ends with a live, continuously adapting set of campaigns. Here
        is what the real work looks like, in the order it actually happens.</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Business Objectives Alignment. The first meeting is about getting the owner and the marketing lead to state
          a single, measurable goal. This could be something like “book 30 qualified estimates per month at under $70
          each (<a id={`use-cases-marketing-measured-lead-generation-sequence-source-business-google-com${idSuffix}`} href="https://business.google.com/aunz/think/ai-excellence/bravestars-games-app-marketing-liveops/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Google</a>,
          as of Oct 24, 2026).” No automation begins until this is agreed and documented. Every later step is checked
          against this target.</li>
        <li>Data Quality Assessment. The team pulls your CRM records, lead lists, and recent export files. Wrench gets
          connected to your CRM or spreadsheet, scanning for duplicates, missing fields, and formatting errors. It
          then cleans and segments your contacts, scores them for conversion probability, and sets up dynamic
          exclusions for past buyers and cold prospects. This is where most small businesses see just how much budget
          was leaking on bad lists before automation.</li>
        <li>Tech Selection and Architecture. Here’s where Performance Max, Madgicx, Optmyzr, and Marpipe are plugged
          into your account stack. Performance Max gets access to your ad platforms to begin moving budget between
          channels based on live conversion data. Madgicx maps out your audience funnels and sets up rules for tiered
          bidding and exclusions. Optmyzr is configured to automate scripts for pausing keywords, defending search
          real estate, and monitoring for broken landing pages. Marpipe is set up to generate and rotate ad creative
          variants at scale, and to run multivariate tests on headlines, images, and <GlossaryLink slug="call-to-action">calls
          to action</GlossaryLink>.</li>
        <li>Pilot Implementation Strategy. The rollout always starts small: a single campaign or a test group, often in
          a “sandbox” ad account or with a strict daily cap. This allows for smoke testing, verifying that data syncs
          are correct, lead routing works, and <GlossaryLink slug="automation-rules">automation rules</GlossaryLink> fire
          as expected. The team watches for issues like audience overlap, missed exclusions, or stalled budget shifts.
          No full rollout happens until every step validates under real traffic.</li>
        <li>Live Launch and Adaptive Monitoring. After the pilot passes, the system is rolled out to all active
          campaigns and platforms. Now, Performance Max begins shifting spend dynamically between search and social,
          Madgicx structures the funnel and optimizes bid paths, Optmyzr’s scripts protect against waste, and
          Marpipe’s creative pipeline runs at full speed. The team monitors dashboards for budget spikes, creative
          fatigue, and lead flow. Any anomaly gets flagged and fixed in near real time, not at the end of the month.</li>
        <li>Continuous Optimization and Review. Weekly or biweekly, the team reviews what the automation has found:
          which creative variants are winning, which segments are converting, where budget is being wasted, and where
          exclusions failed. These insights feed back into the system. If a script or rule is not working, it gets
          adjusted. If a data sync fails, Wrench re-runs its validation routines. Over time, the system gets tighter,
          faster, and more resistant to waste.</li>
      </ol>
      <p className="text-base text-white shadow-text pt-3">
        In a real South Florida business, this means a week or two of upfront work (business goal alignment, data
        cleaning, and initial tech setup), followed by a controlled pilot, then a move to live automation. Most
        teams see the first shift in lead quality and cost within days of full rollout. The biggest change is not in
        the number of leads, but in the drop in wasted spend and the reduction in manual firefighting by the
        marketing team.</p>
      <p className="text-base text-white shadow-text pt-3">
        A hypothetical: a local plumbing company starts with a mess of spreadsheets and a basic Google Ads account.
        After the data quality assessment, Wrench reveals that 20% of the contact list is duplicates or past buyers
        (<a id={`use-cases-marketing-measured-lead-generation-sequence-source-wrench-ai${idSuffix}`} href="https://wrench.ai/products/digital-campaign-agent" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Wrench</a>,
        as of Oct 24, 2026). Once cleaned, Performance Max begins reallocating spend between Google and Meta in real
        time, Madgicx builds a three-tier funnel, Optmyzr scripts pause high-cost keywords and flag broken landing
        pages, and Marpipe begins testing dozens of ad variants each week. Within a month, the company is spending
        less per lead and has cut manual campaign tweaks to a few minutes a week.</p>
      <p className="text-base text-white shadow-text pt-3">
        Rolling out Measured Lead Generation is not just “setting up automation.” It is a structured project, with
        phases and handoffs, that installs a living system across your business. Each step builds on the last, and
        skipping a phase, especially in data cleanup or pilot testing, will show up later as missed leads or wasted
        budget. The order is not optional: the system works because it is staged, validated, and continuously
        adjusted in the real world.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-rolling-this-out-actually-involves-in-a-real-environment-in-the-order-it-happens" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Rolling This Out Actually Involves in a Real Environment, in the Order It Happens
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-rolling-this-out-actually-involves-in-a-real-environment-in-the-order-it-happens-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Rolling This Out Actually Involves in a Real Environment, in the Order It Happens
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
