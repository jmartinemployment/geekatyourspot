import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Configuring Writesonic for a small business is about setting up a pipeline that fits your real work,
        not just turning on an AI writer. Geek @ Your Spot LLC makes this practical by mapping your business’s
        content needs to Writesonic’s own automation steps. The core of Writesonic’s setup is its multi-stage
        pipeline: each piece of content moves through research, outline, drafting, review, and approval. Every
        stage has its own logic, and each can be tuned for what your team actually needs published.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first configuration step is the research layer. Writesonic pulls data from sources like Ahrefs and
        Google Keyword Planner, finding which keywords your competitors are ranking for and where your site is
        missing out. This is not a generic scrape: the integration with Ahrefs means you get real keyword
        gaps, search volumes, and backlink data that shape what gets written. For a South Florida business,
        that means your blog posts and landing pages are built on what local buyers actually search, not just
        what an AI model guesses they want.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next comes the outline and intent mapping. Writesonic’s outline generation is not one-size-fits-all.
        It aligns to your audience’s search intent, so a post for a local HVAC contractor in Miami is
        structured differently from a post for a Fort Lauderdale CPA. Geek @ Your Spot LLC configures these
        outlines to match your service areas and buyer questions, using Writesonic’s brand-voice training to
        keep the tone consistent. This is where the rules get specific: you set which topics matter, which
        questions must be answered, and which formats (FAQ, how-to, comparison) drive the most local leads.</p>
      <p className="text-base text-white shadow-text pt-3">
        Drafting is automated, but every draft is checked by Writesonic’s expert-role review passes. This is a
        built-in workflow where multiple AI experts review the content for technical accuracy, tone, and SEO
        structure. If a draft fails a quality gate, meaning it is off-brand, factually weak, or structurally
        wrong, the system revises it before it ever hits your inbox. Geek @ Your Spot LLC sets these thresholds up
        front, so your team only reviews content that already meets your standards. For teams used to
        rewriting agency drafts, this means the approval step is validation, not a full rewrite.</p>
      <p className="text-base text-white shadow-text pt-3">
        Brand voice is another key configuration. Writesonic learns from your past content, training on your
        own blog posts, landing pages, and even email campaigns. Each client gets a unique voice profile, so
        your business does not sound like every other company using AI. This is more than just swapping out a
        few words, brand safety and tone are enforced at every step, and the pipeline holds this voice across
        all formats. Geek @ Your Spot LLC handles the training data mapping, so the AI learns from what actually
        worked for your business, not from generic samples.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses with multi-language needs or technical content, Writesonic’s pipeline can be set to
        generate natively in the target language. This is not a translation, it is original content built for
        that audience, with technical accuracy and brand tone held throughout. If your team serves clients in
        Spanish or deals with industry-specific regulations, Geek @ Your Spot LLC configures the content engine to
        respect those constraints from the start.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation logic also covers when and how content gets refreshed. Writesonic tracks when your pages
        lose visibility or when AI engines stop citing your content. The system can be set to flag these drops
        and trigger a refresh cycle, so your evergreen pages are always up to date. This is not just a
        technical audit, it is a workflow that keeps your site at the top of both search and AI answer
        engines, without manual monitoring.</p>
      <p className="text-base text-white shadow-text pt-3">
        Approval workflows are customizable. Writesonic lets you set dollar thresholds, departments, or
        content types that need review. For example, a new service page might always require a manager’s
        sign-off, while routine blog posts go live after passing quality gates. Geek @ Your Spot LLC sets up these
        rules in line with your team’s real-world processes, so nothing slips through and nothing gets stuck
        in limbo for weeks.</p>
      <p className="text-base text-white shadow-text pt-3">
        On extension and integration, Writesonic is config-driven but offers direct integrations with
        platforms like Sanity and CMSs such as WordPress, Webflow, and Contentful. You can push content live
        with one click or have it staged for approval. While Writesonic does not offer a public scripting SDK,
        its integrations and&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;endpoints are enough for
        most small business needs, especially when Geek @ Your Spot LLC handles the mapping and testing.</p>
      <p className="text-base text-white shadow-text pt-3">
        The end result is not a generic AI writer. It is a tailored, rule-based pipeline that produces content
        in your voice, on your schedule, and to your standards. Geek @ Your Spot LLC’s value is in configuring
        these layers so your team spends time approving and publishing, not fixing and rewriting. The
        automation logic is what makes this scale safely for a small team, and the extension hooks mean it
        fits into your existing stack without a rebuild.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-writesonic-and-how-its-rules-and-automation-work-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Writesonic and How Its Rules and Automation Work for Small Teams
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
              <h2 id="what-gets-configured-in-writesonic-and-how-its-rules-and-automation-work-for-small-teams-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Writesonic and How Its Rules and Automation Work for Small Teams
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
