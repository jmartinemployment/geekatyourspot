import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Choosing Copy.ai for your business is not just about checking off a feature list. The real test is
        whether it fits your team’s size, workflow, and budget, and whether its pricing structure makes sense
        for the way you operate. Copy.ai is designed with small to medium-sized teams in mind, especially
        those who need to produce consistent, high-quality content without hiring a full creative department.</p>
      <p className="text-md text-white shadow-text pt-3">
        Start by looking at your current pain points. If your team spends too many hours each week drafting,
        editing, and reformatting content, or if you’re paying outside agencies to fill those gaps, Copy.ai is
        built to address those exact costs. Its automation turns what used to be a bottleneck, like waiting
        for a writer or an external agency, into a fast, self-serve process. This is especially important for
        small businesses in South Florida, where every hour spent on content is an hour not spent on clients
        or sales.</p>
      <p className="text-md text-white shadow-text pt-3">
        Copy.ai’s pricing model is published and transparent. It offers several plans, including a free option
        for very small teams and tiered paid plans that scale by seat count and feature access. For example,
        the entry-level paid plans are designed for teams who want unlimited chat projects and access to top
        AI models like OpenAI, Anthropic, and Gemini, while higher tiers add more seats, workflow credits, and
        advanced features. The published prices make it easy to forecast costs and compare them to what you’re
        currently spending on content production or agency retainers.</p>
      <p className="text-md text-white shadow-text pt-3">
        When judging fit, look at how Copy.ai’s seat-based pricing matches your team’s structure. If you have
        a handful of people who need to collaborate on content, review drafts, or manage approvals, you can
        pick a plan that covers just those users, no need to pay for unused seats. As your business grows, you
        can add more seats or move to a higher tier without switching platforms or retraining your team.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another point to weigh is Copy.ai’s workflow credit system on higher tiers. This lets you automate
        more complex, multi-step processes without worrying about hidden overages or surprise bills. If your
        marketing strategy involves frequent campaigns, bulk content creation, or regular repurposing of blog
        posts into social updates and emails, these credits help you scale up without running into limits.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration costs are another factor. Copy.ai’s platform includes access to over 2,000 integrations at
        no extra charge, so you can connect it to
        your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>,
        email, or project management tools without buying add-ons. For businesses that already use tools like
        Monday.com, ClickUp, or Google Drive, this means you keep your existing systems and workflows, adding
        Copy.ai as the automation layer on top.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, consider the support and onboarding included at each tier. Higher-level plans include guided
        implementation and access to support teams, which matters if you want a fast, low-risk rollout. For
        small businesses without in-house IT or marketing ops, Geek @ Your Spot handles the technical setup,
        brand voice configuration, and integration work, closing the gap between buying the tool and seeing
        results.</p>
      <p className="text-md text-white shadow-text pt-3">
        In short, Copy.ai’s fit comes down to how much time and money you can save by automating your content
        workflows, and how easily you can scale as your needs change. The pricing is clear, the tiers are
        flexible, and the platform is designed to grow with your business, so you only pay for what you use,
        not for features or seats you don’t need.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-copy-ai-on-fit-and-its-pricing-model" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Copy.ai on Fit and Its Pricing Model
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
              <h2 id="how-to-judge-copy-ai-on-fit-and-its-pricing-model" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Copy.ai on Fit and Its Pricing Model
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
