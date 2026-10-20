import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Frase automates the entire content creation process for small teams who need marketing assets that
        actually answer the questions customers ask. The system starts by gathering the real questions people
        type into search engines, forums, and AI assistants. Instead of guessing what your audience wants to
        know, Frase pulls these questions from sources like Google’s People Also Ask, Reddit, Quora, and the
        prompts answer engines such as ChatGPT and Perplexity receive. This means every article, post, or
        email starts with what your local prospects are actually searching for, not a generic list built from
        keywords alone.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once Frase has the questions, it runs a live analysis of the search results for your topic. It reads
        the pages already ranking, breaks down their structure, and picks out the entities, subtopics, and
        gaps that matter. This is not just a keyword match, it’s a pass that maps the full landscape. Frase
        then assembles a structured content brief. This brief includes headings, sections, and the sources to
        cover, so nothing important gets missed. The brief is not a separate file you have to move between
        tools; it’s the working document that powers the next steps. For a team member used to starting from a
        blank page, this alone can save hours and prevent the “blank page” trap.</p>
      <p className="text-md text-white shadow-text pt-3">
        From the brief, Frase drafts the article in your brand’s voice. The brand voice is not an afterthought
        or a style setting you toggle at the end. Frase trains on your existing materials so every draft
        sounds like your business, not a generic AI model. This is especially important for small businesses
        trying to keep a consistent tone across outsourced or automated drafts. If your Palm Beach bookkeeping
        firm struggles to keep messaging steady across different writers, Frase solves that by locking in your
        approved voice from the start. Every draft, whether it’s a long-form article, a landing page, or a
        social update, carries that same tone.</p>
      <p className="text-md text-white shadow-text pt-3">
        As the draft comes together, Frase scores it in real time for both Google SEO and for “GEO”, the
        signals AI engines use to decide which sources to cite in their answers. You see what is missing
        before you publish, not after you drop in rankings or lose citations. The system points out missing
        sections, unanswered questions, or out-of-date stats, and orders fixes by their likely impact. This
        means you can prioritize the changes that will move the needle, not just fill space. For a Broward
        pest-control company that finds its long articles drifting into repetition or missing key points, this
        structure
        and&nbsp;<GlossaryLink slug="feedback-loop" className="text-[#0B162A] hover:underline">feedback
        loop</GlossaryLink>&nbsp;means every draft covers what matters and nothing gets left out.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once you approve the draft, Frase can repurpose it for every channel in one pass. Instead of starting
        from scratch to write a social caption or an email follow-up, Frase atomizes the approved article into
        ready-to-use formats, social posts, email campaigns, and more. Every piece stays on message and in
        voice because they all come from the same source. This saves the local business owner from rewriting
        the same message four different ways, keeping the thread and the brand voice intact.</p>
      <p className="text-md text-white shadow-text pt-3">
        Publishing is direct. Frase pushes content to WordPress, Webflow, Sanity, Wix, or its own CMS, with
        formatting, internal links, schema, and hero images included. After publishing, Frase keeps watching
        the live page. If your rankings or traffic start to slip, it proposes specific fixes, like refreshing
        a stat or adding a missing FAQ, and waits for your approval to republish. You do not need to monitor a
        dashboard or remember to check rankings; the system handles it and keeps your content working.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in South Florida, this means the workflow is no longer a patchwork of tools and
        manual steps. Frase covers research, drafting, optimization, repurposing, and monitoring in one
        connected loop. Approval is always in your hands, but the heavy lifting is handled by the platform.
        This is not just a writing tool, it is the engine that keeps your content pipeline running without
        burning out your team or blowing your budget.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-frase-turns-questions-into-complete-connected-content" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Frase Turns Questions Into Complete, Connected Content
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
              <h2 id="how-frase-turns-questions-into-complete-connected-content" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Frase Turns Questions Into Complete, Connected Content
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
