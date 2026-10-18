import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        HyperWrite is structured to fit directly into the daily tools and platforms small businesses already
        use. Its core is a browser-based AI engine, accessed through a Chrome extension that integrates with
        nearly any online text field, Gmail, Google Docs, LinkedIn, CRMs, and more. This design means
        HyperWrite works where your team does, without forcing a move to a new app or workflow. The AI sits in
        the background, reading context from the open tab and adjacent tabs to deliver suggestions in real
        time.</p>
      <p className="text-md text-white shadow-text pt-3">
        The system is powered by a mix of proprietary AI models and integrations with third-party data
        sources. For intelligent content planning, HyperWrite’s AI Content Planner ingests data about your
        industry, competitors, and audience preferences. It analyzes current trends and what is resonating in
        your market, then stores this information to guide topic selection and calendar creation. The result
        is a dynamic, always-updated content plan that reflects what is happening now, not what worked last
        quarter.</p>
      <p className="text-md text-white shadow-text pt-3">
        HyperWrite’s architecture supports a library of over 500 AI tools for different writing and content
        tasks. These include modules for rewriting, summarizing, outlining, brainstorming, and more. Each
        module is accessible from the same interface, so users can switch from drafting an email to generating
        a blog outline or repurposing content without leaving their workflow. The platform’s Personas feature
        is built on&nbsp;<GlossaryLink slug="machine-learning" className="text-[#0B162A] hover:underline">machine learning</GlossaryLink>&nbsp;models
        trained on your team’s past writing. This data is stored securely and used to ensure every piece of
        content matches your brand’s tone and style, no matter who is at the keyboard.</p>
      <p className="text-md text-white shadow-text pt-3">
        For approval workflows and scheduling, HyperWrite maintains a live status of each piece of content in
        its pipeline. Drafts, approvals, scheduled posts, and published content are all tracked in one place.
        This centralized tracking eliminates the confusion of scattered spreadsheets or siloed project
        management boards. When a draft is ready for review, the system can route it to the right person,
        record their feedback, and update the content’s status automatically.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk scheduling is handled by a scheduling engine built into the platform. Once content is approved,
        HyperWrite can push it to the right channel, email, blog, social media, at the right time. The
        scheduling engine handles the complexity of different platforms’ timing and formatting requirements,
        so a single piece of content can go live across multiple channels without manual intervention. This is
        a major time-saver for small teams that do not have a dedicated scheduler or social media manager.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform’s integration layer connects to web search, citation databases, and other third-party
        plugins. This allows HyperWrite to pull in citation-backed facts, monitor search visibility, and adapt
        content for SEO as part of the writing process. The system can track where your content appears in AI
        search results across up to ten platforms (on enterprise plans), helping you see which pieces are
        getting cited and where there are gaps to fill. This tracking is stored in a unified dashboard,
        turning raw metrics into actionable next steps for your marketing team.</p>
      <p className="text-md text-white shadow-text pt-3">
        All user data, including writing samples for Personas and content plans, is stored securely in the
        cloud. HyperWrite’s architecture is built for privacy and compliance, keeping customer data separate
        from the AI’s global training data. This means your business’s unique voice and strategy stay
        confidential, while the AI continues to learn and improve from your inputs.</p>
      <p className="text-md text-white shadow-text pt-3">
        The modular design of HyperWrite allows for easy expansion. New AI tools and integrations can be added
        without disrupting the core workflow. For example, if your business adopts a
        new&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;or marketing platform, HyperWrite can
        connect through its plugin system, pulling in context and pushing out content as needed. This
        flexibility is key for small businesses that grow and change quickly.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, HyperWrite’s architecture connects your team’s real work, emails, drafts, approvals,
        schedules, across the browser, stores your unique writing style and content plans securely, and powers
        every step of the content creation and publishing process with AI. It is not just a writing tool; it
        is a full workflow engine that adapts to your business, scales with your needs, and keeps every piece
        of content on-brand and on time.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-hyperwrites-architecture-connects-stores-and-powers-behind-the-scenes" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What HyperWrite’s Architecture Connects, Stores, and Powers Behind the Scenes
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
              <h2 id="what-hyperwrites-architecture-connects-stores-and-powers-behind-the-scenes" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What HyperWrite’s Architecture Connects, Stores, and Powers Behind the Scenes
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
