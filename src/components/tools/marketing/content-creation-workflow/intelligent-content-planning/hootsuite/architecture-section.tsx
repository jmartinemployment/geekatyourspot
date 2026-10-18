import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Hootsuite’s platform is built to centralize every piece of the intelligent content planning and
        publishing process, connecting people, data, and external systems in one place. At its core, Hootsuite
        is an all-in-one social media management and social intelligence platform. It combines content
        creation, scheduling, engagement, analytics, and advanced social listening in a single dashboard, as
        described on the Hootsuite Platform page (https://www.hootsuite.com/platform).</p>
      <p className="text-md text-white shadow-text pt-3">
        The main engine behind Hootsuite’s intelligence is its proprietary Blue Silk AI. This system scans
        billions of conversations across social media, news, blogs, and forums in real time, surfacing
        actionable insights, trends, and sentiment shifts. Unlike general-purpose AI tools, Blue Silk AI is
        tuned for social context and brand-specific needs. It detects emerging topics, predicts future trends,
        and even identifies brand mentions in images and videos, not just text. The platform’s data set covers
        150 million websites, 30+ social networks, and 187 languages, making its intelligence both broad and
        deep.</p>
      <p className="text-md text-white shadow-text pt-3">
        Hootsuite’s Wisdom AI acts as the connective tissue between the data and the user. It is not just a
        chatbot or writing tool, it is an AI layer that sits across the platform, letting teams ask questions
        about performance, draft content, and get recommendations using plain language. Wisdom connects to
        Hootsuite’s Social OS, pulling in data from Lumen (for social listening), Perch (for planning and
        publishing), Nest (for engagement and customer care), and Parliament (for employee advocacy). This
        means every insight, action, or draft is grounded in your own real-time data, not just generic web
        trends.</p>
      <p className="text-md text-white shadow-text pt-3">
        For content creation and scheduling, Hootsuite’s Perch app is the hub. It supports all major social
        networks and tailors each post for the platform it is going to. The calendar view gives a single
        source of truth for every scheduled, pending, or published post. Teams can collaborate inside Perch,
        with drafts, comments, and approval routing all in one place.
        The&nbsp;<GlossaryLink slug="model-context-protocol">Model Context Protocol</GlossaryLink>&nbsp;(MCP)
        allows external AI assistants, like ChatGPT or Claude, to connect securely to your workspace, so you
        can use your preferred AI tools without breaking compliance or risking data leaks. This keeps
        sensitive publishing channels under tight control while still enabling advanced automation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Hootsuite’s social listening and analytics are handled by Lumen and Blue Silk AI. These systems
        monitor brand mentions, sentiment changes, competitor moves, and market trends in real time. Anomaly
        detection flags spikes in volume or emotion, and theme clustering groups thousands of mentions into a
        few actionable topics. Visual recognition scans images and video for your logo or products, catching
        brand use that text-only tools would miss. All this data is fed back into the content and campaign
        planning process, so the team is always working from the latest signals.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security and compliance are built into the architecture. Hootsuite uses role-based permissions, single
        sign-on, and message masking to keep customer data safe. Approval workflows and automatic archiving
        ensure every post meets internal and external standards, with full audit trails for regulated
        industries. Integrations with systems like Slack and Microsoft Teams make it easy to bring Hootsuite
        into your existing communication stack without forcing teams to learn new habits. Employee advocacy
        features, through Parliament, let you curate and share approved content across the organization,
        tracking participation and compliance at scale.</p>
      <p className="text-md text-white shadow-text pt-3">
        At every layer, Hootsuite’s architecture is about eliminating silos. Content, data, and team
        communication all run through one platform. AI and automation handle the grunt work, but human review
        and control stay in the loop. The result is a connected system where insights trigger action, and
        every part of the workflow is visible, auditable, and secure. For a small business in South Florida,
        this means no more juggling spreadsheets, chat threads, and disconnected tools. Everything needed to
        plan, execute, and measure Intelligent Content Planning is built into Hootsuite’s foundation.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-hootsuites-architecture-connects-content-data-and-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Hootsuite’s Architecture Connects Content, Data, and Teams
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
              <h2 id="how-hootsuites-architecture-connects-content-data-and-teams" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Hootsuite’s Architecture Connects Content, Data, and Teams
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
