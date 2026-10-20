import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Frase is built as a unified content automation platform that connects research, writing, optimization,
        publishing, and monitoring in one workspace. The core engine is designed to eliminate the handoffs and
        data loss that slow down or break traditional content workflows. Every step, from question gathering
        to post-publish monitoring, runs on a
        single&nbsp;<GlossaryLink slug="data-model" className="text-[#0B162A] hover:underline">data
        model</GlossaryLink>, so nothing gets lost between tools.</p>
      <p className="text-md text-white shadow-text pt-3">
        At its heart, Frase operates on a research-first architecture. The platform does not just generate
        text from a prompt. It starts by actively pulling in live search results, real user questions, and
        competitor coverage. This data is parsed and structured into briefs and drafts that are always
        grounded in what the market is asking and what top-ranking pages are already delivering. The
        system’s&nbsp;data
        model&nbsp;tracks entities, gaps, and questions at every stage, so the workflow is
        never just about word count, it is about coverage and authority.</p>
      <p className="text-md text-white shadow-text pt-3">
        Brand voice is central and persistent. Frase builds a voice profile using your existing published
        content, then applies it to every draft, across every format. This is not a style guide you have to
        enforce by hand; it’s a technical layer that keeps every output, article, email, or social post,
        aligned with your business’s tone and standards. For teams that work with freelancers or multiple
        contributors, this means fewer editing cycles and a consistent message across all channels.</p>
      <p className="text-md text-white shadow-text pt-3">
        Frase’s integration layer connects directly to the most common content management systems: WordPress,
        Webflow, Sanity, Wix, and FraseCMS. Once connected, a finished draft can be published with a single
        approval, carrying over all formatting, links, schema, and images. For businesses with more
        specialized needs, the
        Frase&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;allows
        for custom automation, publishing, reporting, and monitoring can be triggered or managed by your own
        stack. Webhook notifications let your team know the moment a draft, brief, or audit is ready, so
        nothing sits idle.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk scheduling and repurposing are handled inside the same environment. Frase exports content as
        Markdown, CSV, or JSON, making it easy to push assets into any scheduler or pipeline you already use.
        This is especially important for small teams that want to plan a month of posts or emails in advance
        without manually copying and pasting between tools. The architecture is built to keep every piece
        connected to its source, so updates or edits cascade automatically, no more version drift or manual
        syncing.</p>
      <p className="text-md text-white shadow-text pt-3">
        After content goes live, Frase’s Content Guard and AI Visibility modules keep monitoring performance.
        Content Guard tracks rankings and traffic through Google Search Console, and when a page starts to
        slip, it drafts a specific fix, whether that is a refreshed stat, a missing section, or an updated
        FAQ. AI Visibility monitors where and how AI engines cite your pages, alerting you when your share of
        voice changes. All monitoring is tied back to action: when an issue is spotted, the system proposes a
        fix, drafts it, and waits for your signoff before republishing. This closes the loop between
        publishing and ongoing performance, so your site is never left to decay after launch.</p>
      <p className="text-md text-white shadow-text pt-3">
        Frase supports content in over 70 languages, adapting not just vocabulary but local phrasing and
        question framing for each target market. For South Florida businesses serving multilingual audiences,
        this means you can set the language and country for each article, and Frase will pull the right
        questions and write in the idiom of that locale, not just translated English.</p>
      <p className="text-md text-white shadow-text pt-3">
        The result is a platform where every step is joined up. Research, briefing, drafting, optimization,
        repurposing, publishing, and monitoring all work from the same data and the same brand voice.
        Integrations with leading CMS platforms and
        open&nbsp;API&nbsp;access
        mean Frase fits into your stack without forcing a rip-and-replace. The architecture is built for the
        realities of small businesses: minimal manual oversight, clear approvals, and no wasted cycles on
        rework or lost edits. For teams in West Palm Beach, Broward, and Miami-Dade, this means you can run a
        modern, connected content operation, without hiring an agency or adding headcount.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-powers-frase-architecture-integrations-and-data-flow" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Powers Frase: Architecture, Integrations, and Data Flow
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
              <h2 id="what-powers-frase-architecture-integrations-and-data-flow-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Powers Frase: Architecture, Integrations, and Data Flow
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
