import Link from "next/link";

export default function ContentGenerationSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The <Link id={`use-cases-marketing-marketing-automation-platforms-content-generation-pillar${idSuffix}`} href="/use-cases/marketing/content-creation-workflow/ai-seo-content-generator" className="text-[#0B162A] hover:underline">AI SEO Content Generator</Link> pillar covers the second job: producing the blog posts, service pages, social posts, and email copy the plan calls for, in your voice, at a pace a small team can review. The platform takes the brief, drafts against it, and hands the draft to a person. The page explains what makes a draft usable, which is less about the model and more about the brief, the brand examples it was given, and whether anyone checks the facts before it is published.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is the most crowded category on the site, with eleven reviews. <Link id={`use-cases-marketing-marketing-automation-platforms-content-generation-jasper${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/jasper" className="text-[#0B162A] hover:underline">Jasper</Link>, <Link id={`use-cases-marketing-marketing-automation-platforms-content-generation-copy${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/copy" className="text-[#0B162A] hover:underline">Copy.ai</Link>, <Link id={`use-cases-marketing-marketing-automation-platforms-content-generation-writesonic${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/writesonic" className="text-[#0B162A] hover:underline">Writesonic</Link>, and <Link id={`use-cases-marketing-marketing-automation-platforms-content-generation-anyword${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/anyword" className="text-[#0B162A] hover:underline">Anyword</Link> are general marketing writers with brand voice features and templates for most formats. <Link id={`use-cases-marketing-marketing-automation-platforms-content-generation-rytr${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/rytr" className="text-[#0B162A] hover:underline">Rytr</Link> and <Link id={`use-cases-marketing-marketing-automation-platforms-content-generation-koala${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/koala" className="text-[#0B162A] hover:underline">Koala</Link> are the budget end, and the reviews say what you give up for the price. <Link id={`use-cases-marketing-marketing-automation-platforms-content-generation-frase${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/frase" className="text-[#0B162A] hover:underline">Frase</Link> and <Link id={`use-cases-marketing-marketing-automation-platforms-content-generation-scalenut${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/scalenut" className="text-[#0B162A] hover:underline">Scalenut</Link> write from a search brief and overlap with the planning tools above. <Link id={`use-cases-marketing-marketing-automation-platforms-content-generation-castmagic${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/castmagic" className="text-[#0B162A] hover:underline">Castmagic</Link> turns recordings into written content, which is the right starting point for an owner who talks better than they type. <Link id={`use-cases-marketing-marketing-automation-platforms-content-generation-imagine${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/imagine" className="text-[#0B162A] hover:underline">ImagineArt</Link> covers images rather than words, and <Link id={`use-cases-marketing-marketing-automation-platforms-content-generation-hootsuite${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/hootsuite" className="text-[#0B162A] hover:underline">Hootsuite</Link> drafts social posts inside the scheduling tool.</p>
      <p className="text-base text-white shadow-text pt-3">
        Two guardrails apply to every one of them. Nothing a model drafts is published without a person reading it, and the platform has to make that review step a real gate rather than a checkbox. And the draft has to come from your plan and your examples, because a generator fed nothing but a topic produces the same page as every competitor who fed it the same topic. The pillar sets out how to feed it, and what to measure once the pages are live.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="ai-content-generation-turns-the-plan-into-drafts" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                AI Content Generation Turns the Plan Into Drafts
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="ai-content-generation-turns-the-plan-into-drafts-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                AI Content Generation Turns the Plan Into Drafts
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
