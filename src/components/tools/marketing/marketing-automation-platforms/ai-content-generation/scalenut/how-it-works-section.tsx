import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Scalenut is built to take a business owner from idea to published, SEO-ready content in a single,
        guided workflow. The process starts with the user providing a primary keyword or topic, this could be
        a question a customer asked, a service the business offers, or a seasonal promotion. Scalenut’s
        platform immediately analyzes the topic, pulling in competitor outlines, trending questions from
        platforms like Reddit and Quora, and top-ranking articles. This sets the foundation for a content plan
        that is both relevant to real users and tuned for search visibility.</p>
      <p className="text-base text-white shadow-text pt-3">
        The workflow breaks into four tightly integrated steps: context, title, outline, and draft. In the
        context step, the user can add business details, notes, and select reference articles, ensuring the AI
        understands the real services, procedures, and unique selling points of the business. This is where a
        Palm Beach County remodeler, for example, can feed in their actual process notes, so the resulting
        article reflects their real expertise rather than generic AI boilerplate.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next, Scalenut generates a list of potential titles, drawing from both current search trends and
        top-ranked headlines. The owner can choose one, edit it, or generate more. The outline step is where
        Scalenut’s customizable outline builder comes into play. Here, the user can select AI-generated
        headings, insert frequently asked questions, and add custom writing points for each section. For a
        Miami-Dade bookkeeping firm that leaves articles unfinished, this structure eliminates the risk of
        getting stuck mid-draft, each section is mapped out before writing begins.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once the outline is finalized, Scalenut’s “Cruise Mode” generates a complete first draft in under five
        minutes. The draft is grounded in real-time SERP data and the business’s own context, not just generic
        templates. The user can refine each section with built-in tools: regenerate for a new take, rephrase
        for tone, expand or shorten, and simplify language as needed. Bullet points, schema markup, and key
        term tracking are all part of the editor, making it easy to optimize for both readers and search
        engines.</p>
      <p className="text-base text-white shadow-text pt-3">
        After the draft is reviewed, it moves to Scalenut’s editor, where the user can make final changes,
        track content score, and ensure all metadata is optimized. The platform supports exporting content for
        publication, and for users on the Pro and Growth plans, offers interlinking tools to connect related
        articles and improve site structure. The workflow supports collaboration, allowing the business owner
        to share briefs and drafts with team members or external partners.</p>
      <p className="text-base text-white shadow-text pt-3">
        Throughout the process, Scalenut provides actionable insights. The Gaps/Gains section compares the
        draft to top-ranking competitors, highlighting missed topics and unique angles. The Research tab
        surfaces key terms, user questions, and statistics from high-performing content.
        This&nbsp;<GlossaryLink slug="feedback-loop" className="text-[#0B162A] hover:underline">feedback
        loop</GlossaryLink>&nbsp;means a Broward HVAC company can turn technician notes and customer FAQs into
        structured, educational articles that address what local clients are actually searching for.</p>
      <p className="text-base text-white shadow-text pt-3">
        Brand voice is handled through a dedicated Brand Kit. The business can upload writing samples or URLs,
        and Scalenut will learn the preferred tone and style, applying it consistently across all drafts. This
        solves the problem of inconsistent language that plagues independent insurance agencies, every article
        sounds like it came from the same trusted source, no matter who is writing or reviewing.</p>
      <p className="text-base text-white shadow-text pt-3">
        The workflow is not just about speed. It is about removing the friction points that stop small teams
        from publishing: the blank page, the lack of structure, and the endless editing cycle. Scalenut’s
        system ensures that every step, from keyword to final draft, is clear, repeatable, and tuned for both
        human readers and AI engines. The business owner is never left wondering what to do next, the platform
        guides them forward, making expert-level content creation accessible to even the smallest team in
        South Florida.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="every-step-in-scalenuts-content-creation-workflow" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Every Step in Scalenut’s Content Creation Workflow
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
              <h2 id="every-step-in-scalenuts-content-creation-workflow-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Every Step in Scalenut’s Content Creation Workflow
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
