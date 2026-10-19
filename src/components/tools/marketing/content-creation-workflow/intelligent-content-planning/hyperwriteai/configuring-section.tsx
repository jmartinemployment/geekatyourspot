import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Configuring HyperWrite for Intelligent Content Planning is a practical exercise in tuning automation
        to fit the realities of a small business marketing team. Unlike platforms that demand heavy upfront
        customization or force you into rigid templates, HyperWrite is built around a set of configurable
        rules and logic that control how content is generated, repurposed, and approved. Everything starts
        with the platform’s core AI Content Planner, which takes your specific business goals, audience, and
        industry context to generate a detailed, actionable content plan. This plan covers blog ideas, social
        media posts, email newsletters, and more, all mapped to the outcomes you care about, like increasing
        website traffic or generating new leads.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first layer of configuration is the automation of routine writing. HyperWrite’s AI writing
        assistant is programmed to handle repetitive tasks that eat up team hours: drafting emails, building
        templates, and producing meeting summaries. These automations are not generic, they are set up to
        match the team’s actual workflow, so email responses and updates follow your preferred format and
        tone. The system’s TypeAhead feature is a browser extension that delivers predictive, context-aware
        sentence completions directly inside any browser tab, including Gmail, Google Docs, LinkedIn, and
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>. This means your team is not switching between
        tools or copying and pasting drafts; HyperWrite adapts to your process, not the other way around.</p>
      <p className="text-md text-white shadow-text pt-3">
        A key part of the configuration is training HyperWrite to reflect your brand’s unique voice. The
        Personas feature uses your past writing to build a model of your style, so every suggestion and draft
        feels like it came from your team, not a robot. This is especially important for small businesses
        where a single founder or marketer is the face of the brand. The platform enforces a unified team
        tone, preventing the inconsistent style shifts that are common with standard AI prompts. You can set
        rules for different channels, so blog posts, social updates, and emails each maintain the right level
        of formality or personality.</p>
      <p className="text-md text-white shadow-text pt-3">
        HyperWrite’s automation logic also covers&nbsp;<GlossaryLink slug="content-repurposing">content
        repurposing</GlossaryLink>. The platform is configured to take a single asset, say, a technical blog
        post, and instantly rewrite it for different audiences or channels. You set the rules for how much to
        simplify, what jargon to translate, and which formats to produce. This turns one piece of
        high-performing content into a series of targeted assets: a summary for leadership, a bulleted update
        for sales, a customer-facing note, and social snippets. The repurposing logic saves hours that would
        otherwise be spent rewriting the same information from scratch.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval workflows are another area where HyperWrite’s configuration matters. The system automates
        routing of drafts and content pieces for review, based on your rules, such as dollar thresholds,
        department, or content type. Rather than chasing approvals over email or Slack, HyperWrite tracks
        ownership and status, reducing bottlenecks and making it clear who is responsible for the next step.
        This is especially useful for small teams, where a missed approval can hold up an entire campaign.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk scheduling is managed through the platform’s automation engine. You define scheduling rules for
        each channel, how often to post, which times work best, and what content types to prioritize.
        HyperWrite then generates, queues, and schedules posts in bulk, freeing your team from manual calendar
        management. This is not just a time-saver; it also enforces consistency and keeps your messaging
        aligned across all platforms.</p>
      <p className="text-md text-white shadow-text pt-3">
        For personalized email campaigns, HyperWrite’s configuration allows you to set segmentation rules and
        tailor subject lines and body copy for different audience segments. The AI generates professional,
        natural-sounding emails from a short summary or prompt, adapting the tone and details to each
        recipient group. The platform’s Topic Explorer and Email Summarizer tools can create detailed replies
        and engaging prompts, further streamlining campaign setup.</p>
      <p className="text-md text-white shadow-text pt-3">
        On extensibility, HyperWrite is primarily a configuration-driven platform rather than one that exposes
        a developer-facing&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;or scripting SDK for deep
        custom integrations. Its main extension mechanism is the Chrome browser extension, which brings
        AI-powered drafting and completion to any web app. While it integrates with web access and third-party
        plugins, it does not require or support custom code for most small business use-cases. This lowers the
        barrier to entry and keeps ongoing maintenance light, but it also means highly specialized workflows
        or deep back-end integrations would need to be handled outside the platform.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is where Geek @ Your Spot comes in. As an implementation consultancy for small businesses in
        Miami-Dade, Broward, and West Palm Beach, we handle the configuration of HyperWrite to fit your actual
        environment. That means mapping your existing templates, approval chains, and content types into the
        platform’s automation logic, training Personas on your team’s writing samples, and setting up the
        browser extension on every user’s device. We also guide your team through the practical use of each
        feature, so you are not left with a tool that works on paper but fails in your daily process. For
        teams that need more than configuration, such as connecting HyperWrite output to
        a&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or&nbsp;<GlossaryLink slug="marketing-automation">marketing
        automation</GlossaryLink>&nbsp;platform, we design the workflow so handoffs are smooth, even if it
        means using&nbsp;<Link id="tools-marketing-intelligent-content-planning-hyperwriteai-configuring-zapier" href="/tools/marketing/zapier" className="text-[#C83803] hover:underline">Zapier</Link>&nbsp;or similar connectors to bridge the gap.</p>
      <p className="text-md text-white shadow-text pt-3">
        The result is a intelligent content planning and production system that feels built for your team, not
        bolted on. HyperWrite’s rules and automation logic handle the grunt work, the Personas feature keeps
        your voice consistent, and the extension mechanism ensures the AI is present wherever your team
        actually works. Geek @ Your Spot ensures every part of the setup matches your real-world needs, so you
        see the return in fewer hours lost, fewer errors, and campaigns that finally move on schedule.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="configuring-hyperwrite-rules-automation-logic-and-extensibility-for-small-business-content-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring HyperWrite: Rules, Automation Logic, and Extensibility for Small Business Content Teams
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
              <h2 id="configuring-hyperwrite-rules-automation-logic-and-extensibility-for-small-business-content-teams" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring HyperWrite: Rules, Automation Logic, and Extensibility for Small Business Content Teams
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
