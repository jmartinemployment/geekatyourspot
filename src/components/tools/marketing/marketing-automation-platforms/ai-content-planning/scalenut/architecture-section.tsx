import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Scalenut’s platform is built to be both comprehensive and modular, so it fits into the way a small
        business actually works. The architecture is designed for scale, but with controls and limits that
        keep it accessible for teams who do not have a full IT department. Each core function, content
        creation, visibility tracking, link management, and publishing, sits in its own module, connected by a
        shared data layer that keeps everything in sync. This modular approach means you can focus on the
        pieces that matter most for your workflow, without being forced into a monolithic system.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the heart of Scalenut is the GEO Core engine. This is where topic clusters are planned, keywords
        are prioritized, and content briefs are generated. The Keyword Planner and Article Writer work
        together to identify high-intent, high-volume clusters, then map them to the prompts and questions
        that AI engines actually answer. This is not just about Google anymore. The system tracks prompt
        coverage for ChatGPT, Perplexity, Gemini, and Claude, so you know which topics will get you cited in
        AI results, not just search listings. The&nbsp;<GlossaryLink slug="data-model" className="text-[#0B162A] hover:underline">data
        model</GlossaryLink>&nbsp;is built for this dual focus: every topic, prompt, and keyword is tagged for
        both SEO and AI discoverability.</p>
      <p className="text-base text-white shadow-text pt-3">
        Visibility and monitoring are handled by the GEO Watchtower module. This tracks your brand’s presence,
        citations, and sentiment across all major AI engines, updating in real time. The architecture is
        designed for breadth, tracking across five platforms at once, but also for depth, surfacing which
        prompts, topics, and queries you are missing. The system connects this data back to the content and
        optimization modules, so every gap found in monitoring can be turned into a content brief or
        optimization task without manual data wrangling.</p>
      <p className="text-base text-white shadow-text pt-3">
        Authority building is managed through two connected modules: the Social UpReach agent for community
        engagement, and the Backlink Marketplace for link acquisition. Social UpReach monitors Reddit and
        other forums, using AI-powered replies to shape brand sentiment before it is learned by AI models. The
        Backlink Marketplace lets you purchase high-authority backlinks directly, without the need for manual
        outreach or negotiation. These modules plug into the same data layer, so authority signals feed
        directly into your visibility and ranking metrics.</p>
      <p className="text-base text-white shadow-text pt-3">
        Internal linking and technical optimization are handled by the Link Manager. This tool automates
        internal link suggestions, detects broken links, and ensures that every new article or page is
        connected to your core content clusters. This is not just for SEO. Internal linking is a primary
        signal for AI discoverability, making it easier for crawlers, both search and AI, to understand your
        site’s structure and topical authority. The Link Manager’s suggestions are based on real-time analysis
        of your content and the questions AI engines are likely to ask.</p>
      <p className="text-base text-white shadow-text pt-3">
        Publishing is run by a dedicated agent that manages schema markup, metadata, and technical details.
        The system ensures that every page is indexable, accessible, and structured for both Googlebot and AI
        crawlers. This agent handles the technical publishing, so you do not have to worry about missed tags
        or broken schema. Every output is reviewed and approved before it goes live, with human oversight
        built into the workflow.</p>
      <p className="text-base text-white shadow-text pt-3">
        Scalenut’s architecture includes strict user and prompt limits at each pricing tier, so you know
        exactly how much capacity you are buying. For example, the Starter plan includes three users, 350
        custom prompts, and five page audits; Growth raises this to five users, 700 prompts, and ten audits.
        This keeps the platform within reach for small teams, without the risk of runaway costs or unused
        features. The system does not force you into an all-or-nothing commitment. You can scale modules and
        capacity as your needs grow, with clear boundaries at every step.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integrations are not the centerpiece here, Scalenut’s approach is to keep the core workflow inside the
        platform, with data and outputs that can be exported or plugged into your existing systems as needed.
        This keeps your content, visibility, and audit data in one place, reducing the risk of fragmentation
        or data loss. For teams in West Palm Beach, Broward, or Miami-Dade, this means you do not have to
        overhaul your stack to benefit from Scalenut. The architecture is designed to drop in alongside what
        you already use, with minimal disruption and no heavy IT lift.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="scalenuts-technical-architecture-what-connects-what-runs-and-what-stays-local" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Scalenut’s Technical Architecture: What Connects, What Runs, and What Stays Local
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
              <h2 id="scalenuts-technical-architecture-what-connects-what-runs-and-what-stays-local-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Scalenut’s Technical Architecture: What Connects, What Runs, and What Stays Local
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
