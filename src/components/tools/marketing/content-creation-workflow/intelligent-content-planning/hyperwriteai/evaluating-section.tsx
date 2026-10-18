import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Judging whether HyperWrite is the right fit for your business comes down to a few clear questions:
        does it solve the specific bottlenecks your team faces, does its pricing model work for your budget,
        and does it deliver the outcomes that matter for a small marketing operation in South Florida? This is
        not about comparing a list of features to a competitor’s, but about weighing what HyperWrite actually
        changes in your day-to-day.</p>
      <p className="text-md text-white shadow-text pt-3">
        Start with fit. HyperWrite is built for small business owners, founders, marketers, and teams who
        spend their day switching between Gmail, Google Docs, LinkedIn,
        and&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;tabs. If your team burns hours on repetitive
        writing, email responses, meeting notes, follow-ups, and loses momentum bouncing between tools,
        HyperWrite’s inline, context-aware AI assistant is a direct fix. The platform’s Personas feature is
        especially suited for teams where brand voice is critical but hard to maintain, such as founder-led
        businesses or small agencies with multiple contributors. If your main pain point is the time lost to
        blank-page syndrome, inconsistent tone, or the sheer grind of rewriting the same content for different
        channels, HyperWrite is a strong match.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform is less suited for teams looking for deep, long-form documentation or highly specialized
        technical writing. As noted on HyperWrite’s own site, the tool is not optimized for large-scale
        documentation projects or for businesses that need heavy customization through APIs or developer
        scripting. If your team’s workflow depends on building complex, multi-step automations beyond what the
        browser extension and built-in plugins can handle, or if you need to plug directly into back-end
        systems, you may find the platform limiting. For most small businesses, though, the trade-off is
        positive: you get fast setup, low maintenance, and a tool that covers 90% of daily writing and
        planning tasks without the overhead of a big IT project.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing is straightforward. HyperWrite offers a free plan with enough capability to be useful on its
        own, so you can run it for months before deciding whether to upgrade. The published starting price for
        paid plans is $16 per month, with no hidden markups or forced annual commitments. For small teams,
        this means you can test the platform’s impact on your workflow without a big upfront investment. There
        are no extra charges for integrations or for the use of the browser extension, and you do not need to
        budget for ongoing consulting just to keep the tool running. The pricing model is designed to scale
        with your usage, not to lock you into a long-term contract.</p>
      <p className="text-md text-white shadow-text pt-3">
        When evaluating HyperWrite, look past the feature checklist and focus on what actually changes for
        your team. Does it remove the hours you lose to manual drafting and approval? Does it keep your brand
        voice consistent, even as your team grows? Does it make it easier to launch campaigns across email,
        social, and web without hiring more people? For most small businesses in Miami-Dade, Broward, and West
        Palm Beach, the answer is yes. The tool’s automation logic, inline writing support,
        and&nbsp;<GlossaryLink slug="content-repurposing" className="text-[#0B162A] hover:underline">content repurposing</GlossaryLink>&nbsp;capabilities
        are all tuned for marketing operations that need to do more with less.</p>
      <p className="text-md text-white shadow-text pt-3">
        A practical evaluation means running HyperWrite in a real campaign cycle. Try the free plan, set up
        Personas with your own writing samples, and use the Chrome extension to draft and schedule a week of
        posts and emails. Pay attention to how much time you save, how much less context-switching your team
        does, and whether the output matches your standards for professionalism and brand consistency. If you
        find that you are still spending hours rewriting drafts or chasing approvals, or if the platform’s
        suggestions do not fit your tone, it may not be the right fit, or it may need a more tailored
        configuration from a partner like Geek @ Your Spot.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real test is whether HyperWrite lets your team move from idea to published content without getting
        stuck in the old bottlenecks. For many small teams, it is the difference between a marketing plan that
        gets executed and one that sits in a spreadsheet. The platform’s pricing, fit, and outcomes are all
        designed for businesses that need to see results in weeks, not quarters. If your needs align with what
        HyperWrite delivers, and if you want a tool that works inside your existing workflow rather than
        forcing you to change it, the platform is worth a close look.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-evaluate-hyperwrite-fit-pricing-and-what-actually-matters-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Evaluate HyperWrite: Fit, Pricing, and What Actually Matters for Small Teams
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-evaluate-hyperwrite-fit-pricing-and-what-actually-matters-for-small-teams" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Evaluate HyperWrite: Fit, Pricing, and What Actually Matters for Small Teams
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
