import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Wrench stands apart from typical ad automation and lead management tools by automating both creative
        production and data-driven targeting inside a single platform, directly addressing the scaling and creative
        bottlenecks that stall small business growth in South Florida. Where other solutions solve only one part of
        the problem, either by automating bidding rules or by offering basic lead scoring, Wrench brings these
        together with real-time segmentation, creative generation, and unified data handling.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most businesses at the $500–$1,500 monthly ad spend level are already familiar with basic campaign
        management tools, spreadsheet-based lead lists, and the native automation rules inside platforms like Meta
        or Google Ads. These tools offer some relief but quickly fall short the moment a business tries to scale.
        Manual list uploads, static audience segments, and generic creative templates do not keep up with the pace
        and complexity of digital ad markets. Ad platforms reward fresh creative and precise audience targeting, but
        manual workflows cannot deliver either at the speed required. Wrench is built to automate both, keeping
        campaigns competitive without constant human intervention.</p>
      <p className="text-base text-white shadow-text pt-3">
        In the landscape of ad spend optimization, you will also find point solutions that specialize in one area:
        lead scoring tools that prioritize contacts based on surface-level engagement, <GlossaryLink slug="creative-testing" className="text-[#0B162A] hover:underline">creative
        testing</GlossaryLink> platforms that cycle through ad variants, or workflow automation products that
        trigger basic actions when set conditions are met. Each of these can add some value, but none of them solve
        the full operational ceiling that blocks predictable lead flow. Wrench’s approach is to centralize and
        automate the entire process, integrating with your CRM, cleaning and segmenting your data, generating and
        optimizing creative assets, and feeding these insights back into your campaigns in real time.</p>
      <p className="text-base text-white shadow-text pt-3">
        The difference is especially clear when comparing Wrench to legacy lead management systems or homegrown
        spreadsheet solutions. Manual segmentation based on static rules leads to wasted spend, as cold leads are
        treated the same as high-potential buyers. Wrench’s automated segmentation and scoring, built on live CRM
        data and campaign feedback, ensures that only the right contacts are targeted with the right message at the
        right time. This dynamic approach means fewer missed opportunities and less wasted ad budget, results that
        static systems cannot match.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wrench’s integrations are another key point of distinction. While many ad tools require complex,
        custom-built connectors (or only offer limited API access), Wrench natively connects with platforms like
        HubSpot, Salesforce, Meta, and Instagram. This means your existing marketing stack can feed directly into
        Wrench without the need for IT bottlenecks or risky workarounds. For a small business, this reduces both the
        technical lift and the risk of data fragmentation, letting you unify your operations without a major
        rebuild.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative production is where many businesses hit their bottleneck, and most competing tools offer little
        more than basic template swaps or <GlossaryLink slug="a-b-testing" className="text-[#0B162A] hover:underline">A/B
        tests</GlossaryLink>. Wrench’s multimodal AI, Serendipity, generates and refines creative assets across
        multiple formats and channels, then ties performance data back to audience segments for ongoing improvement.
        This is not just about writing more headlines or swapping images, it is about systematically generating,
        testing, and deploying creative that matches your audience’s evolving preferences, all without the manual
        workload that burns out small teams.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses comparing Wrench to other platforms like Darwin, the distinction is even sharper. Wrench can
        analyze and optimize existing and historical campaign data, not just new campaigns, and it offers dynamic,
        customizable insights and recommendations for creative, brand, and analytics stakeholders. This flexibility
        means Wrench adapts to your real business needs, whether you are optimizing for mid-funnel conversions, <GlossaryLink slug="click-through-rate" className="text-[#0B162A] hover:underline">click-through
        rates</GlossaryLink>, or lifetime value.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the operational level, Wrench automates exclusions and timing, removing converted clients from active
        campaigns instantly, and calculating when past leads are ready for upsell or re-engagement. Competing tools
        often require manual list management or fail to detect these critical timing windows, leading to wasted
        spend or missed revenue. Wrench’s system is built to close these gaps automatically.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, Wrench is designed with transparency and adaptability in mind. Unlike black-box solutions that hide
        their logic, Wrench gives full visibility into how its AI models operate, allowing you to trust and refine
        its processes as your needs change. For a small business in South Florida, this means you are not locked
        into a rigid system that stops fitting your business as it grows.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, Wrench does not just automate what you could do by hand, it brings together the full stack of
        data-driven segmentation, predictive lead scoring, creative generation, and campaign optimization in one
        platform. For a business stuck at the operational ceiling of manual ad management, it is the difference
        between incremental improvement and a step-change in how you run your marketing.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-wrench-compares-to-other-ad-optimization-and-lead-generation-solutions" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Wrench compares to other ad optimization and lead generation solutions
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
              <h2 id="how-wrench-compares-to-other-ad-optimization-and-lead-generation-solutions-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Wrench compares to other ad optimization and lead generation solutions
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
