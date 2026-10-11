import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Helmhq streamlines content operations by automating key tasks that traditionally consume time and resources.
        It begins with the Content Calendar, which centralizes planning, scheduling, and tracking. This system
        allows businesses to maintain consistency across all content outputs, adapting swiftly as strategies evolve.
        The calendar view offers a traditional layout where content is mapped across specific dates, making it
        easier to understand publishing cadence at a glance and adjust timelines quickly using drag-and-drop
        functionality.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation is at the core of Helmhq&#39;s operations. It eliminates the need for manual data entry and
        repetitive tasks, allowing team members to focus on personalization, strategy, and storytelling. Automated
        content generation tools create high-performing material based on current search trends, ensuring that the
        output is consistent and scalable. This approach not only retains current clients but also attracts new ones
        by showcasing reliability and results.</p>
      <p className="text-md text-white shadow-text pt-3">
        Helmhq&#39;s automation extends to SEO optimization,
        where&nbsp;<GlossaryLink slug="predictive-analytics" className="text-[#0B162A] hover:underline">predictive
        analytics</GlossaryLink>&nbsp;forecast future behaviors, allowing agencies to proactively adjust their
        clients&#39; digital footprints. Natural Language Processing (NLP) helps the system understand the nuance of
        user intent, ensuring that content remains relevant to the way real people actually search. This
        comprehensive suite of tools enables a sophisticated level of optimization that aligns with modern search
        engine requirements.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform also supports content batching, reusable templates, and scheduled distribution, ensuring that
        content production remains active without requiring manual creation for each post. This structure protects
        energy and maintains a consistent output, crucial for building a reputation for innovation and
        cost-efficient scaling. As a result, agencies can serve more clients without overloading their teams,
        maintaining steady content output and reducing operational workload.</p>
      <p className="text-md text-white shadow-text pt-3">
        By turning content marketing into a continuous system, Helmhq ensures that marketing efforts no longer
        depend on daily input. Instead, they operate in the background, driving visibility and growth while teams
        focus on higher-level priorities. This shift from manual execution to structured automation allows
        businesses to scale across multiple channels, maintaining control over content frequency, publishing
        schedules, and visual preferences.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-helmhq-automates-content-operations">
                How Helmhq Automates Content Operations
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-helmhq-automates-content-operations">
                How Helmhq Automates Content Operations
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
