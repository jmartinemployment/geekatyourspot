export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Imagine is not a single-purpose tool, it is a modular creative platform built for flexibility and
        scale. At its core is the node-based workflow canvas, where every step of content production is mapped
        visually. Each node represents a model or function: image generation, video creation, audio narration,
        editing, resizing, or style transfer. You chain these nodes together to match your own creative
        process, and the system executes them in sequence for every asset run.</p>
      <p className="text-base text-white shadow-text pt-3">
        This modular architecture means you can automate everything from a simple image edit to a full
        campaign rollout. Workflows can include over 50 AI nodes, and the platform is optimized to handle even
        complex, multi-format pipelines with hundreds of steps. For example, a fashion retailer can build a
        workflow that starts with a ghost mannequin photo, applies style transfer for brand consistency,
        generates on-model shots for every SKU, and then outputs images for web, catalog, and social, all in a
        single, repeatable process.</p>
      <p className="text-base text-white shadow-text pt-3">
        Brand governance is a first-class feature in Imagine. The Brand Kit system centralizes your logos,
        color palettes, fonts, reference assets, and campaign guidelines. Every workflow node can pull from
        these assets, and the Brand Agent enforces your rules on voice, layout, and palette at the generation
        stage. This is not a style suggestion, the system applies your brand constraints as structural
        requirements, so outputs are consistent no matter who runs the workflow or how many times you run it.</p>
      <p className="text-base text-white shadow-text pt-3">
        Collaboration is built into the architecture. The infinite canvas is shared, so every team member sees
        the same file, with live cursors, comments, and version history. Approvals, edits, and feedback happen
        right where the work is done. Teams can define roles and permissions, set approval chains, and manage
        assets centrally. The real-time credit dashboard and centralized billing give full visibility into
        usage, so you know where resources go and who is producing what.</p>
      <p className="text-base text-white shadow-text pt-3">
        Imagine’s architecture supports both solo entrepreneurs and larger teams. Team plans and a scale plan
        (40 seats at $350/month) allow you to match the platform to your business size. For small businesses,
        this means you get the infrastructure of an in-house creative agency, without the overhead. For
        enterprises, SOC 2 compliance, role-based access, and audit trails meet IT and legal requirements for
        data security and governance.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform also includes dedicated studios for different content types: Ad Studio for paid social
        ads, Fashion Studio for apparel and lifestyle imagery, and AI Film Studio for cinematic video. Each
        studio is built on the same workflow canvas, so you can move assets between them and reuse processes
        as your needs change. The MCP server connects Imagine to external automation platforms, so you can
        trigger workflows from other tools or schedule them to run automatically.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data privacy is handled at the workspace level. Your assets, prompts, and outputs are private to your
        account. Imagine does not use your content to train its models. Commercial rights stay with you, and
        you can review license terms for each plan to match your use case. For small businesses in South
        Florida, this means you control your creative assets and keep your client-facing materials secure.</p>
      <p className="text-base text-white shadow-text pt-3">
        The architecture is designed for speed, control, and transparency. Every step is visible and
        adjustable, and every workflow can be reused, shared, or turned into a Team App for non-technical
        staff. This is how Imagine gives small teams the creative capacity of much larger organizations,
        without the complexity or risk of piecing together multiple tools.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-architecture-behind-imagine-workflow-canvas-brand-governance-and-team-collaboration" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Architecture Behind Imagine: Workflow Canvas, Brand Governance, and Team Collaboration
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
              <h2 id="the-architecture-behind-imagine-workflow-canvas-brand-governance-and-team-collaboration-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Architecture Behind Imagine: Workflow Canvas, Brand Governance, and Team Collaboration
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
