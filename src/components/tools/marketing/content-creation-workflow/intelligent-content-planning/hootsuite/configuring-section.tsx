import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Configuring Hootsuite for Intelligent Content Planning is about getting the right automation, rules,
        and integrations in place so that your content workflow runs itself, not you. The core of Hootsuite’s
        configuration is its ability to centralize every part of the content process, from brainstorming and
        drafting to scheduling, approval, and publishing. What you configure is not just a set of posting
        times or a list of social accounts, but a structured system that removes manual bottlenecks and keeps
        your brand on message across platforms.</p>
      <p className="text-md text-white shadow-text pt-3">
        At the heart of Hootsuite’s automation is the Perch app. Perch is more than a scheduler; it is a full
        content planning, scheduling, and publishing system. You set up your content calendar in Perch, and
        from there, you can automate the generation of posts, captions, images, and hashtags using Wisdom,
        Hootsuite’s AI assistant. Wisdom pulls from your past posts, uploaded brand guidelines, and live
        social trends to draft content that matches your voice and targets what your audience cares about
        right now. You can configure Wisdom to adjust tone, length, and even emoji use, making it easy to keep
        every post consistent with your brand’s standards.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation rules in Hootsuite go beyond just timing. Perch can recommend the best times to post for
        each platform based on your historic engagement data and audience activity. This means you do not have
        to guess when your Miami-Dade audience is online, Perch tells you, and can even fill empty calendar
        slots automatically. Bulk scheduling is built in, allowing you to line up weeks of content in a single
        session. Every post can be tailored for each network, so you are not stuck with one-size-fits-all
        messaging.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval workflows are a major part of what gets configured. Hootsuite supports multi-step, rule-based
        approval chains. You can set posts to route through marketing, compliance, or legal before they ever
        go live. Role assignments and permissions are granular: assign who drafts, who edits, who approves,
        and who publishes. This is critical for small teams where one missed approval can mean a public
        mistake. Hootsuite keeps an audit trail of every action, so you always know who signed off and when.</p>
      <p className="text-md text-white shadow-text pt-3">
        <GlossaryLink slug="content-repurposing">Content repurposing</GlossaryLink>&nbsp;is also driven by
        configuration. Parliament, Hootsuite’s content curation tool, lets you pull in assets from blogs,
        videos, and past social posts, then refresh them for new campaigns. You can automate the process of
        turning a high-performing post into a series of platform-specific updates, or turn a blog post into a
        set of social captions and images ready to publish. This is not just a manual copy-paste job,
        Hootsuite’s AI can rephrase, localize, and adapt content to fit the audience and format.</p>
      <p className="text-md text-white shadow-text pt-3">
        For those who need to extend Hootsuite beyond its built-in features, the platform supports
        integrations with tools like Slack and Microsoft Teams. This means your approval notifications,
        campaign alerts, and even employee advocacy workflows can show up where your team already works.
        Hootsuite’s&nbsp;<GlossaryLink slug="model-context-protocol">Model Context
        Protocol</GlossaryLink>&nbsp;(MCP) is the extension mechanism for connecting external AI assistants or
        applications to your workspace. With MCP, you can let compatible AI tools plan campaigns, review
        calendars, generate posts, and manage publishing schedules inside Hootsuite, without needing to write
        code. For most small businesses, this is as far as you need to go: Hootsuite is a configuration-first
        platform, not a developer toolkit.</p>
      <p className="text-md text-white shadow-text pt-3">
        When Geek @ Your Spot implements Hootsuite, the focus is on mapping your real-world workflow to these
        rules and automations. The team works with you to define who needs to approve what, how content should
        be routed, what triggers a notification, and how to connect your existing communication channels. Data
        mapping is handled upfront, so every piece of content is tagged, categorized, and ready for analytics
        and reporting from day one. If your team is used to working in Slack or Teams, the integration is set
        up so you do not have to change your habits, Hootsuite meets you where you already are.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in South Florida, this level of configuration means you can go from a scattered,
        error-prone process to a system where content moves automatically from idea to draft to approval to
        publish, with every step visible and auditable. You do not need to hire a developer or build custom
        scripts, Hootsuite’s automation and extension options are designed for business users, not engineers.
        The result is a content workflow that scales with your team, keeps your brand safe, and delivers a
        steady stream of high-performing posts without the chaos of manual management.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-hootsuite-rules-automation-and-extending-the-platform" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Hootsuite: Rules, Automation, and Extending the Platform
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
              <h2 id="what-gets-configured-in-hootsuite-rules-automation-and-extending-the-platform" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Hootsuite: Rules, Automation, and Extending the Platform
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
