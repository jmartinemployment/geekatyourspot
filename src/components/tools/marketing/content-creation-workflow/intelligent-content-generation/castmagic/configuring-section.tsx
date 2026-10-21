import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Castmagic is not a plug-and-play tool that delivers value out of the box without setup. Its real power
        comes from configuring its automation logic, content templates, and workspace rules to fit the way
        your team works. The key to a successful deployment is mapping your actual workflow, where your
        content comes from, who reviews it, and how it gets published, onto Castmagic’s own system of prompts,
        roles, and approval flows.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core of Castmagic’s automation is its prompt-driven workflow. Every content type you want, blog
        posts, social captions, newsletters, summaries, and more, starts with a prompt. These prompts are not
        generic: you build them to match your brand voice, structure, and rules. For example, if your business
        needs LinkedIn posts with a specific tone and no hashtags, you set that in the prompt. If your
        newsletters must open with a quote from the latest webinar, that becomes part of the template.
        Castmagic stores these prompts, so every time you upload a new recording, you get consistent output
        without rewriting instructions each time.</p>
      <p className="text-base text-white shadow-text pt-3">
        Beyond the basics, Castmagic lets you automate the full chain from import to distribution. You can set
        up rules to pull in new content from connected sources, Zoom, YouTube, Google Drive, RSS feeds, Vimeo,
        and more, so your team never has to chase down files. When a new file arrives, Castmagic can run it
        through a sequence: transcribe, label speakers, generate show notes, draft social posts, and prepare
        newsletter copy, all in one pass. For teams with a backlog, the bulk import feature lets you process
        an entire archive, hundreds of episodes or recordings, without manual uploads, with each file running
        through your configured pipeline.</p>
      <p className="text-base text-white shadow-text pt-3">
        Approval workflows are a major part of what gets configured. Castmagic supports multi-user workspaces
        where you set roles and permissions. Writers, editors, and managers can each have their own view. You
        decide who can review, edit, or approve content before it goes out. Comments and mentions keep
        feedback in the platform, so nothing gets lost in email. For some teams, this means a manager must
        sign off on every blog post; for others, it’s enough to have a peer review. Castmagic’s workflow
        engine routes content to the right person at the right step, reducing bottlenecks and keeping the
        process moving.</p>
      <p className="text-base text-white shadow-text pt-3">
        Customization goes further with the Magic Chat feature. Each recording gets its own AI chat instance,
        so you can ask for new outputs, &quot;give me a summary for our Facebook page,&quot; &quot;draft three
        tweet threads,&quot; or &quot;pull out the top client quote&quot;, without leaving the transcript. You
        can refine or rephrase content on the fly, and save successful prompts for next time. This flexibility
        means you are not locked into a rigid workflow; you can adapt as your needs change, and the platform
        keeps learning from your edits and preferences.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses with complex needs, multiple brands, separate campaigns, or strict compliance,
        Castmagic offers workspace segmentation and campaign management. You can tag content by project, set
        deadlines, and assign pieces to specific users. This keeps everything organized and visible, and lets
        you track progress from ideation to publication. The audit trail and feedback tools mean you always
        know who changed what and when, which is critical for regulated industries or teams with strict brand
        guidelines.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the technical side, Castmagic is a configuration-first platform. There is no open scripting
        or&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;for custom extensions in the evidence
        provided. All automation, integration, and workflow logic is handled through built-in connectors,
        prompt templates, and workspace settings. This means you do not need a developer to get advanced
        automation running, but you also cannot build your own scripts or
        direct&nbsp;API&nbsp;calls for edge-case scenarios. Geek @ Your Spot LLC’s role is to map your workflow to what Castmagic supports, configure the right prompts and
        roles, and train your team to use the platform’s full set of collaboration and approval tools. The
        value is in making the platform fit your business, not the other way around.</p>
      <p className="text-base text-white shadow-text pt-3">
        A real-world example: the same Miami-Dade team from the opening uploads their weekly customer calls.
        Castmagic, configured by Geek @ Your Spot LLC, pulls the files from Google Drive, transcribes in both
        English and Spanish, and applies a set of branded prompts: one for a newsletter, another for three
        LinkedIn posts, and a third for a blog summary. The manager gets a notification to review and approve
        the drafts inside Castmagic. If they want to tweak a section, they use Magic Chat to ask for a version
        with a different opening or a shorter summary. Once approved, the posts are ready to be published or
        scheduled. No one on the team has to copy and paste between tools or chase down approvals over email.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, Castmagic’s configuration covers prompt templates, automation rules for file ingestion and
        intelligent content generation, workspace roles and permissions, and approval workflows. All of these
        are set up through the platform’s own interface, with no need for custom code or third-party plugins.
        The platform’s strength is in how well it can be tailored to your real processes, if you invest the
        time to map those processes and configure Castmagic to match, you get a system that turns every
        recording into a repeatable, scalable content engine. Geek @ Your Spot LLC’s expertise is in closing that
        gap for small teams, so the tool works for your business from day one.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-castmagics-rules-prompts-and-automation-logic-get-configured-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Castmagic’s Rules, Prompts, and Automation Logic Get Configured for Small Teams
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
              <h2 id="how-castmagics-rules-prompts-and-automation-logic-get-configured-for-small-teams-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Castmagic’s Rules, Prompts, and Automation Logic Get Configured for Small Teams
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
