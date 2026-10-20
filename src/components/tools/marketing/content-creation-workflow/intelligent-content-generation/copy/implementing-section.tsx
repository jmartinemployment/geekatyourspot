import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Copy.ai goes live in a small business environment by slotting into your existing tools and workflows
        with minimal disruption. The process is not a blank-slate overhaul; instead, it is a series of
        targeted steps that get your content engine running quickly. Geek @ Your Spot leads the setup,
        focusing on what matters for a small team: speed, reliability, and keeping your people focused on
        business instead of wrestling with software.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is a clear scoping session. Geek @ Your Spot sits down with your team to map out
        exactly which content types you need automated, blog posts, email campaigns, social updates, or
        product descriptions. The goal is not to automate everything at once. Instead, the team picks the
        highest-impact workflows that are currently bottlenecked by manual effort. This phased approach means
        your staff is not overwhelmed, and you see wins early.</p>
      <p className="text-md text-white shadow-text pt-3">
        Copy.ai’s pre-built connectors and templated agents are what shorten the go-live timeline. Out of the
        box, Copy.ai supports more than 2,000 integrations, so it connects directly to platforms your team
        already uses,
        think&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>,&nbsp;<GlossaryLink slug="marketing-automation">marketing
        automation</GlossaryLink>, Google Drive, and social channels. There is no need to rip out existing
        systems. Geek @ Your Spot configures Copy.ai to pull in your brand guidelines, product data, and past
        campaign materials, anchoring every piece of generated content in your real facts and voice.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next is the setup of Content Agent Studio. Here, Geek @ Your Spot works with you to codify your
        brand’s tone and structure. Instead of training staff on prompt engineering or writing style guides,
        you provide a handful of strong content samples. Copy.ai learns from these, creating reusable AI
        agents that generate consistent, on-brand content for every channel. This is the point where the
        “blank page” problem disappears, your team can request new content and get drafts that sound like you,
        every time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rollout is phased and measured. Rather than flipping the switch on every department at once, Geek @
        Your Spot starts with a single workflow, such as automated blog drafting or email campaign assembly,
        then expands as your team gets comfortable. Each new workflow added is built with Copy.ai’s templated
        setup, which means the technical lift is low and the risk of disruption is minimal. Where approvals
        are needed, Copy.ai’s automated workflow rules route drafts to the right person for review, so nothing
        goes live without a human check.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout the process, Geek @ Your Spot handles the technical configuration: mapping your data
        sources, connecting Copy.ai to your other tools, and setting up user permissions. Training is short
        and practical, focused on how to use Copy.ai’s interface to request, review, and publish content. Most
        small teams are up and running with their first automated workflow in days, not weeks.</p>
      <p className="text-md text-white shadow-text pt-3">
        The last step is monitoring and feedback. Geek @ Your Spot checks that Copy.ai is generating content
        that meets your expectations and makes adjustments as needed. As your business grows or your campaigns
        change, new workflows can be added using Copy.ai’s library of templates and connectors. The result is
        a content engine that scales with your needs, without requiring you to hire more staff or buy new
        software every time your marketing strategy shifts.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a small business in South Florida, this means you go from chasing content deadlines to running a
        predictable, automated publishing schedule. The team that started the week staring at a blank blog
        draft ends it with a month of posts, emails, and social updates queued and ready, all without losing
        time to manual drafting or expensive agency retainers.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-going-live-with-copy-ai-looks-like-in-a-small-business-environment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Going Live with Copy.ai Looks Like in a Small Business Environment
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-going-live-with-copy-ai-looks-like-in-a-small-business-environment" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Going Live with Copy.ai Looks Like in a Small Business Environment
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
