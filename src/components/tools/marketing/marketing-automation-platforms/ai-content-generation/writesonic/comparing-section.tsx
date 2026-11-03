export default function ComparingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Small businesses in South Florida weighing Writesonic are not choosing between one tool and nothing.
        They are deciding between manual writing, hiring an agency, using a patchwork of single-purpose AI
        tools, or adopting a full content automation platform. Each approach comes with its own limits, and
        Writesonic’s position is shaped by what it does differently for teams that need to scale content
        without scaling headcount.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual content creation is the default for most lean teams. It is slow, draining, and rarely produces
        the depth or structure that search engines and AI citation engines now require. The blank page is a
        real barrier. Even with a motivated owner, turning out blog posts, landing pages, and social campaigns
        every week means hours lost to research, drafting, and revision. This is not just a time issue, it is
        a competitive disadvantage when larger firms can afford to keep their sites and feeds fresh.</p>
      <p className="text-base text-white shadow-text pt-3">
        Hiring a local agency or freelance writer looks like a shortcut, but the cost stacks up fast. Agencies
        in Miami-Dade or Broward quote thousands per month for even basic content maintenance. That price
        covers the labor, but it does not solve the need for deep, structured, and frequently updated content.
        You still risk generic posts that do not move the needle in local rankings or AI answer engines. And
        when you need to adjust your strategy or pivot to a new campaign, you wait in line behind
        bigger-budget clients.</p>
      <p className="text-base text-white shadow-text pt-3">
        Single-purpose AI tools, like basic copy generators or template-based schedulers, promise speed, but
        they lack the structure and depth needed for modern SEO and AI visibility. These tools churn out
        short, surface-level posts. They do not handle research, semantic mapping, or structured data. As a
        result, you get a lot of words, but not the kind of content that earns citations or ranks for
        competitive local queries. When you want to scale or repurpose content across channels, you end up
        stitching together multiple tools, each with its own limits and learning curve.</p>
      <p className="text-base text-white shadow-text pt-3">
        Writesonic sits apart because it closes these gaps with a pipeline built for both scale and structure.
        Where manual and agency workflows stall at volume or cost, Writesonic automates the full cycle:
        research, drafting, brand voice, expert review, and quality control. Its content engine does not just
        generate text, it runs each piece through a multi-stage process that mirrors what a high-performing
        agency would do, but at machine speed and with consistency that does not degrade as you scale up.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses that need to win in local search and AI-driven recommendations, the difference is
        operational. Writesonic’s pipeline starts with research against actual search results and competitors,
        then builds outlines tuned to what local audiences are searching for. It layers in your brand voice,
        checks every draft for factual accuracy and tone, and only ships content that passes strict quality
        gates. This is not a one-off prompt or template, it is a repeatable system that produces long-form,
        structured, citation-ready articles, landing pages, and campaign assets.</p>
      <p className="text-base text-white shadow-text pt-3">
        Where other tools stop at the draft, Writesonic pushes content all the way to publish-ready. Outputs
        include built-in schema, internal and external links, citations, FAQs, and images, everything needed
        for both SEO and answer engine optimization. The platform’s integrations with tools like Ahrefs and
        Sanity mean you can pull in keyword data, refresh content blocks, and keep your pipeline in sync with
        your site and analytics stack.</p>
      <p className="text-base text-white shadow-text pt-3">
        Agencies and large teams may still prefer a hybrid approach, using Writesonic alongside other research
        or analytics tools. But for a small business that needs to look bigger than its headcount, Writesonic
        is a one-stop workflow. It is not just about speed; it is about producing the kind of content that
        search engines and AI models are built to find, cite, and rank. That is why it is used by teams that
        need to move from two posts a month to thirty, or from one landing page to dozens, without hiring
        another full-time marketer.</p>
      <p className="text-base text-white shadow-text pt-3">
        In this landscape, Writesonic is not the only AI content tool, but it is the one that brings the full
        agency workflow inside your business at a price that fits a small team’s budget. Where point solutions
        deliver fragments and agencies deliver volume at a premium, Writesonic delivers structured,
        high-authority content at scale, with your brand voice and your local priorities built in from the
        start.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-writesonic-compares-to-other-content-generation-approaches" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Writesonic Compares to Other Content Generation Approaches
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-writesonic-compares-to-other-content-generation-approaches-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Writesonic Compares to Other Content Generation Approaches
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
