import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Getting the most out of Anyword for Budget Ad Copy &amp; Message Validation depends on organizing your data
        before setup. The tool’s predictive scoring and persona-based validation only work when you map your
        real-world campaign assets, audience segments, and performance outcomes in a way the system can use. Geek @
        Your Spot leads this process so you do not waste cycles on mismatched data or unclear goals.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first priority is your historical ad copy and campaign results. Anyword’s predictive engine needs to see
        what messages you have run, which ones performed, and where they failed. This includes headlines,
        descriptions, calls to action, and even the platforms those messages ran on, Google Ads, Facebook, X
        (Twitter), LinkedIn, and so on. The more specific and recent your data, the better. If you have run multiple
        variations in the past, those results are gold for training the system. If not, even a single campaign with
        clear outcomes is enough to start, but the team will show you how to supplement gaps with industry data or
        synthetic personas.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next, you need to map your core audience segments. Anyword can validate copy against different buyer
        personas, but only if you define them up front. This means gathering demographic details (age, gender,
        location), pain points, and any unique local context, South Florida’s neighborhoods and cultural cues matter
        here. Geek @ Your Spot helps you codify this into structured profiles the tool can use. If you do not have
        formal personas, the team can build them with you using your CRM data, website analytics, or even just your
        own anecdotal knowledge of who buys and who does not.</p>
      <p className="text-base text-white shadow-text pt-3">
        You also need to document your campaign goals and what counts as a conversion. Anyword’s performance scoring
        is only valuable if it is tied to your real business outcomes, calls, form fills, booked appointments, or
        sales. Geek @ Your Spot works with you to set up the right “success” signals so the tool’s recommendations
        are grounded in what you actually care about, not just click numbers. This step includes mapping your <GlossaryLink slug="conversion-tracking">conversion
        tracking</GlossaryLink> setup across platforms and making sure Anyword can access or ingest those signals
        for benchmarking.</p>
      <p className="text-base text-white shadow-text pt-3">
        Brand voice and compliance rules are another critical mapping area. Anyword can generate on-brand, compliant
        copy, but only if you provide clear examples and rules. This means collecting past approved ads, style
        guides, or even just a list of phrases to use or avoid. Geek @ Your Spot helps you load these into Anyword’s
        configuration so every new message stays within your guidelines. For regulated industries, this also means
        mapping out channel-specific compliance requirements, what you can and cannot say on Meta versus Google, for
        example, so the system’s recommendations do not expose you to risk.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, you must map your tool stack and integration points. Anyword connects to platforms like Google Ads,
        X (Twitter), Microsoft Dynamics 365 Sales, Google Drive, and Microsoft Word (<a id={`tools-marketing-budget-ad-copy-message-validation-anyword-data-mapping-source-anyword-com${idSuffix}`} href="https://www.anyword.com/integrations" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Anyword</a>,
        as of Oct 19, 2026). You need to list which tools you use, what data they hold, and how you want data to
        move between them. Geek @ Your Spot handles the technical mapping, but you decide which accounts to connect
        and what permissions to grant. The goal is to make sure copy, performance data, and audience insights flow
        smoothly, so you do not get stuck re-entering information or lose time chasing down missing results.</p>
      <p className="text-base text-white shadow-text pt-3">
        When you organize and map these data points up front, ad copy and results, audience segments, conversion
        goals, brand rules, and integration needs, Anyword can start delivering validated, high-converting copy from
        day one. The process is not about gathering everything you have ever written or every possible persona. It
        is about surfacing what matters most for your current campaigns and making sure the system sees what you
        see. Geek @ Your Spot’s role is to guide you through this, fill gaps where needed, and keep the mapping
        focused on outcomes, not busywork. The result is a setup that works for your business, not just a generic
        template.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-data-you-must-organize-and-map-before-anyword-can-deliver-results" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What data you must organize and map before Anyword can deliver results
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
              <h2 id="what-data-you-must-organize-and-map-before-anyword-can-deliver-results-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What data you must organize and map before Anyword can deliver results
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
