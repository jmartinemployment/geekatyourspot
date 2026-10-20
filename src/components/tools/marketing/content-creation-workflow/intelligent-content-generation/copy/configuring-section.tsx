import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Copy.ai stands apart from basic AI writing tools because it lets you codify your business’s own rules
        and processes directly into its automation engine. This is not a generic, one-size-fits-all system.
        Every workflow, every content template, and every approval path in Copy.ai gets built to match the way
        your team actually works. Geek @ Your Spot LLC configures these elements so Copy.ai fits your business,
        not the other way around.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core of Copy.ai’s automation is its Workflow Builder. This component allows you to turn multi-step
        content processes, like drafting, reviewing, repurposing, and scheduling, into a single, automated
        flow. Each step is defined in plain language: what triggers the workflow, what content or data it
        pulls, what rules guide the output, and who needs to review or approve it. For example, you can set up
        a workflow that takes a new blog post, runs it through brand voice checks, spins off social media
        snippets, and schedules everything for publication, without manual handoff between tools or people.</p>
      <p className="text-md text-white shadow-text pt-3">
        Copy.ai’s rules engine is where you lock in your brand standards. Brand Voice and Infobase are not
        just static style guides. They are active components that guide every piece of generated content. Geek @ Your Spot LLC works with your team to upload and structure your brand’s tone, messaging, and factual
        details into Infobase. From then on, every workflow in Copy.ai references this base, ensuring that
        your content never drifts off-message, no matter who on your team is running the process. This is how
        Copy.ai keeps a small team’s messaging as tight as a much larger operation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation logic in Copy.ai is not limited to text generation. You can define triggers and actions
        that go beyond writing. For example, a workflow can be set to monitor a folder for new product
        documents, extract key features, and automatically draft product descriptions for every sales channel.
        Another can listen for new leads in your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;and
        send out personalized welcome emails, all built with your rules for timing, content, and approval.</p>
      <p className="text-md text-white shadow-text pt-3">
        Copy.ai’s extension mechanism is built around integrations and
        open&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;access. It connects with over 2,000 other
        tools, from CRMs and email platforms to project management and analytics systems. For more advanced
        needs, Copy.ai offers&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;endpoints so your
        developers or Geek @ Your Spot LLC’s team can connect custom data sources, trigger workflows from external
        systems, or pull Copy.ai-generated content directly into your website or app. This makes it possible
        to embed Copy.ai into your unique business stack, not just use it as a standalone platform.</p>
      <p className="text-md text-white shadow-text pt-3">
        Configuration in Copy.ai is not a one-time setup. As your business grows or your marketing strategy
        changes, Geek @ Your Spot LLC can update your workflows, revise your brand standards in Infobase, or add
        new integrations. This keeps your automation current and responsive without a heavy IT lift. The
        result is a living system: your automation logic, approval rules, and content templates evolve as your
        business does, all while keeping your team focused on higher-value work.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a small business, this means no more reinventing the wheel each month. Once Geek @ Your Spot LLC
        configures Copy.ai for your environment, your team gets a repeatable, automated engine that turns
        ideas and raw data into publish-ready content, always on-brand, always on schedule, and always ready
        to scale with you.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-copy-ai-rules-automation-and-extending-the-platform" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Copy.ai: Rules, Automation, and Extending the Platform
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
              <h2 id="what-gets-configured-in-copy-ai-rules-automation-and-extending-the-platform" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Copy.ai: Rules, Automation, and Extending the Platform
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
