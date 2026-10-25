import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataIntegrationSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A Measured Lead Generation system depends on accurate, timely, and connected data from your marketing stack
        and sales tools. It needs clean, live signals from your CRM, ad platforms, and website to score leads,
        optimize spend, and automate decisions that would otherwise eat up staff hours. If your data is incomplete,
        out of date, or stuck in a tool that does not sync with the rest, the system cannot allocate budget or
        qualify leads with any real precision.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first requirement is a CRM that can export and update lead records in real time. Wrench is built for
        this job: it connects directly to your CRM, pulling in contact lists, lead statuses, and historical
        engagement so that your campaigns always target the right people. It also scrubs and formats your data,
        fixing the messy exports and mismatched fields that kill ad network matching rates. If you are still
        uploading static CSVs or working off spreadsheets, you will hit a wall; automated segmentation and lookalike
        modeling need a live data feed, not last month’s download.</p>
      <p className="text-base text-white shadow-text pt-3">
        Second, you need integrations between your CRM, your website forms, and your ad platforms. Most small
        businesses in Miami-Dade, Broward, and West Palm Beach run some combination of Facebook, Google, and
        Instagram ads, but their <GlossaryLink slug="conversion-tracking" className="text-[#0B162A] hover:underline">conversion
        tracking</GlossaryLink> is only as good as the links between these systems. Performance Max, for example,
        shifts budgets between Meta and Google search feeds automatically, but it can only do that if your <GlossaryLink slug="tracking-pixel" className="text-[#0B162A] hover:underline">tracking
        pixels</GlossaryLink>, <GlossaryLink slug="utm-parameters" className="text-[#0B162A] hover:underline">UTM
        parameters</GlossaryLink>, and <GlossaryLink slug="offline-conversions" className="text-[#0B162A] hover:underline">offline
        conversion</GlossaryLink> uploads are working and mapped to the same events. If a form fill on your website
        is not matched to the ad click that drove it, the system cannot optimize for real cost per lead, it defaults
        to platform guesses, which are often wrong.</p>
      <p className="text-base text-white shadow-text pt-3">
        Third, you need your ad platforms and campaign management tools to support automated rules and real-time
        feedback. Optmyzr handles this layer by watching for wasted spend, pausing keywords that cross safety
        thresholds, and pulling in competitor bid data to defend your search real estate. But Optmyzr’s rule engine
        is only as good as the data it receives. If your landing page status, conversion events, or campaign budgets
        are updated manually, the system will not catch outages or budget caps until money is already lost.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative and asset management is the next integration point. Marpipe solves the operational bottleneck of
        creating, testing, and deploying hundreds of ad variations by uploading your base assets and assembling new
        combinations on demand. But for this to work, your creative files, images, copy, and video, must be
        organized in a way that the system can access and remix them. If you are still emailing graphics or storing
        them in a local folder, you are the bottleneck; Marpipe needs a shared cloud folder or DAM that is always up
        to date.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, your analytics and reporting tools must close the loop by feeding performance data back into the
        system. This is where Wrench and Madgicx both play a role. Wrench ensures that <GlossaryLink slug="lead-scoring" className="text-[#0B162A] hover:underline">lead
        scoring</GlossaryLink> and segmentation are kept current, while Madgicx restructures your audience funnels
        based on what is actually converting. If your reporting is siloed, Google Ads here, Facebook there, CRM in
        another tab, your optimization will always lag one step behind. The system only works when every action,
        from lead status to ad spend, is reflected everywhere at once.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integrations are not just about <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">APIs</GlossaryLink> or
        plug-ins. They are about reliable, ongoing data transfer, across your sales, marketing, and creative teams.
        When a new campaign launches, you need to know that every lead it generates is tracked from first click to
        closed deal, and that every dollar spent can be traced to the pipeline. Without this, the Measured Lead
        Generation promise falls apart. The businesses that see the biggest gains are the ones that do the work
        upfront to connect their tools, clean their data, and set up the automation that keeps it all in sync.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-data-and-integrations-a-measured-lead-generation-system-really-needs-to-work" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data and Integrations a Measured Lead Generation System Really Needs to Work
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
              <h2 id="what-data-and-integrations-a-measured-lead-generation-system-really-needs-to-work-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data and Integrations a Measured Lead Generation System Really Needs to Work
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
