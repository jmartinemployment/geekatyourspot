import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Choosing Jasper is not about picking the tool with the longest feature list. The right fit comes down
        to whether Jasper’s model matches your team’s real constraints, your content goals, and your appetite
        for automation. Pricing is only part of the equation; the bigger question is whether Jasper’s approach
        to workflow, brand control, and integration lines up with how your business actually operates.</p>
      <p className="text-md text-white shadow-text pt-3">
        Start by looking at how Jasper handles your content lifecycle. If your team struggles with
        inconsistent messaging, missed deadlines, or wasted hours on manual drafting, Jasper’s brand
        enforcement and workflow automation are built to solve those pain points. Its value is highest for
        small businesses that need to produce coordinated, multi-channel campaigns without hiring an agency or
        expanding headcount. If your content needs are ad hoc, or you only publish a few updates a month,
        Jasper’s full workflow may be more than you need.</p>
      <p className="text-md text-white shadow-text pt-3">
        Jasper is strongest where brand voice and data accuracy matter. If your business cannot afford to
        publish off-brand or outdated content, its Brand Voice and Knowledge Base features give you control
        that generic AI tools cannot match. For teams that need every asset to reflect current offerings,
        legal disclaimers, or compliance standards, Jasper’s single-source-of-truth model means you update
        information once and see it reflected everywhere.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is another key factor. Jasper’s native connections to Google Docs, Microsoft Word,
        Webflow, Surfer SEO, Semrush, Asana, monday.com, and Zapier mean it fits into most small business tech
        stacks without the need for custom development. If your team already relies on these platforms, Jasper
        can slot in quickly. If you use niche or proprietary systems, or if you need a
        custom&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>,
        Jasper’s closed extension model may limit your options.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing for Jasper is not published in the partner data, so you will need to review the vendor’s
        current plans directly. What matters for small teams is the total cost of ownership: not just the
        monthly fee, but the time saved, the reduction in errors, and the ability to produce more content
        without adding staff. Jasper’s automation is designed to return hours to your week and cut the need
        for outside agencies, those savings often outweigh the subscription, especially for teams producing
        regular, multi-channel content.</p>
      <p className="text-md text-white shadow-text pt-3">
        When weighing Jasper against other options, look at your review and approval needs. Jasper’s built-in
        workflows can automate much of the back-and-forth that slows down content production, but only if you
        configure them to match your real process. Geek @ Your Spot’s implementation ensures these fit your
        team’s habits and compliance requirements, so you do not trade one bottleneck for another. If you
        prefer to keep approval and editing entirely manual, or your team is not ready to trust AI-driven
        drafts, Jasper’s value may be less clear.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, consider the learning curve and support. Jasper’s interface is designed for marketing teams,
        not engineers, but getting the most from its automation requires upfront configuration and ongoing
        tuning. Geek @ Your Spot guides your team through setup, training, and adjustment, so you see results
        from day one. This hands-on approach matters for small businesses that cannot afford a long ramp-up or
        a failed rollout.</p>
      <p className="text-md text-white shadow-text pt-3">
        Fit is not about buying the most advanced AI; it is about buying the one that solves your actual
        problem. For small businesses in South Florida looking to scale their content without losing control,
        Jasper offers a clear path, if you are ready to invest in setup and let automation handle the heavy
        lifting. For teams with simple needs or highly custom systems, another tool or a manual process may
        still be the better choice.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-jaspers-fit-and-pricing-model-for-your-team" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Jasper’s Fit and Pricing Model for Your Team
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
              <h2 id="how-to-judge-jaspers-fit-and-pricing-model-for-your-team" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Jasper’s Fit and Pricing Model for Your Team
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
