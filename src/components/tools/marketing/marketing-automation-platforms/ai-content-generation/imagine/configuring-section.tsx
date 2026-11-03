import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Deploying Imagine in a small business is not just about turning on a tool and hoping for the best. The
        real value comes from how its rules, automation logic, and workflow structure get tailored to your
        specific environment. Geek @ Your Spot LLC handles this setup so that your team does not have to become AI
        engineers or process designers. What gets configured is not generic automation, it is the core of how
        your content gets created, reviewed, and published, with the controls and repeatability your business
        needs to look credible every week.</p>
      <p className="text-base text-white shadow-text pt-3">
        Imagine’s workflow engine is node-based. This means every step of your content creation, generating
        images, drafting copy, resizing assets, applying brand style, and routing for approval, gets mapped as
        a sequence of nodes on a visual canvas. Each node is a specific operation: generate, edit, relight,
        upscale, or format. These nodes can be chained together and reused, so once you have a working
        pipeline for a product launch or a seasonal campaign, you run it again for the next offer without
        rebuilding from scratch. The workflow itself is the asset: it captures how your business wants things
        done, not just what comes out the other end.</p>
      <p className="text-base text-white shadow-text pt-3">
        Brand governance is enforced at the workflow level, not left to chance at each handoff. Imagine lets
        you upload your brand kit, logos, color palettes, typefaces, approved imagery, and set rules that
        every output must follow. These are not just style hints. The platform’s Brand Agent takes your brand
        guidelines as constraints: color rules, layout grids, forbidden combinations, and voice. Every
        generation, whether it is a social post or an email header, stays on-brand by default. This matters
        for small teams that cannot afford off-brand mistakes or the time lost to endless manual review
        cycles.</p>
      <p className="text-base text-white shadow-text pt-3">
        Approval workflows are built into Imagine’s structure. You set who reviews what, at which step, and
        for which content types. The system enforces this chain, no one can bypass an approval stage by
        editing a prompt or skipping a node. This is critical for regulated industries, franchises, or any
        business where compliance and brand integrity cannot be left to memory or email threads. For a small
        business, it means you can trust that what goes out matches what you want, without micromanaging every
        asset.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation logic in Imagine covers more than just generation. You can set persistent settings that
        carry over between workflow runs, so the same campaign logic applies every time. For example, if you
        always want product images in three aspect ratios with matching copy variations, you configure it
        once. The workflow applies those rules to every new asset batch, saving hours of repetitive setup. For
        businesses with recurring offers, weekly menus, monthly sales, seasonal updates, this is the
        difference between a process that runs and one that falls apart the moment someone is out sick.</p>
      <p className="text-base text-white shadow-text pt-3">
        Imagine’s extension mechanism is workflow-first, not code-first. Instead of an
        open&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;or scripting SDK, the primary way to extend
        Imagine is by building and modifying node-based workflows on its canvas. For most small businesses,
        this is an advantage: you do not need to write code or hire a developer to adapt the system. If you
        need to automate a new kind of content, add a step for a new format, or change the approval path, you
        do it visually. Geek @ Your Spot LLC configures these workflows to match your actual business process,
        mapping out who does what, when, and with which assets, so the system fits your team, not the other
        way around.</p>
      <p className="text-base text-white shadow-text pt-3">
        For more advanced integrations, Imagine does offer connections to other platforms through its MCP
        server. This allows external systems, like a&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>,
        e-commerce backend, or another AI tool, to trigger workflow runs or pass briefs directly into Imagine.
        For example, a new product added in your Shopify catalog could automatically kick off a full campaign
        asset generation in Imagine, routed for review and ready for scheduling. Geek @ Your Spot LLC can set up
        these connections, but for most small businesses, the core value is in the workflow canvas and brand
        governance, not in writing custom integrations.</p>
      <p className="text-base text-white shadow-text pt-3">
        The result is a system where your business logic, brand standards, and content needs are encoded once
        and reused as often as needed. Imagine’s configuration is not a one-time checklist, it is a living
        blueprint of how your team produces content, adapts to new offers, and stays on brand. Geek @ Your Spot LLC makes sure this blueprint matches your reality, so you get the benefit of automation without the
        risk of chaos or drift.</p>
      <p className="text-base text-white shadow-text pt-3">
        When a small team in West Palm Beach or Miami-Dade hands over their product photos and campaign ideas,
        Geek @ Your Spot LLC builds these workflows and rules inside Imagine. The owner does not have to explain
        the brand every week, chase down off-message drafts, or wonder why the Instagram post looks nothing
        like the email blast. The automation is not generic, it is the owner’s process, made repeatable,
        visible, and enforceable. That is what closes the gap between the marketing you want and the time you
        actually have.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-imagine-rules-automation-and-extending-the-platform" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Imagine: Rules, Automation, and Extending the Platform
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
              <h2 id="what-gets-configured-in-imagine-rules-automation-and-extending-the-platform-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Imagine: Rules, Automation, and Extending the Platform
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
