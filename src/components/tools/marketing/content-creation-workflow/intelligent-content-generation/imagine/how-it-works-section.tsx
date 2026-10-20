import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Imagine is built for small teams that need to produce professional content but cannot spare hours for
        each asset. It automates the entire creative workflow: from the first product photo or service image
        to a full set of branded visuals, videos, and campaign materials. Every step is visible, repeatable,
        and designed for teams without a dedicated creative staff.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process starts with real assets, your own product images, service photos, or campaign ideas.
        Imagine’s node-based workflow canvas lets you map out every step the content should take. Each node is
        a stage: generate an image, edit it, apply lighting, resize for different platforms, or iterate for
        variations. You connect these nodes in the order your business needs. The workflow handles the rest,
        running the same way every time so you do not get a different look or tone with each run.</p>
      <p className="text-md text-white shadow-text pt-3">
        Brand control is enforced at the system level. You upload your logos, color palettes, fonts, and
        reference images once. Every output automatically applies these settings. Imagine’s Brand Kits and
        Brand Agent features lock in your guidelines, so the platform never drifts off-brand even when you run
        new campaigns, launch seasonal offers, or introduce new products. There is no need to explain your
        brand rules to a new designer or worry about inconsistent visuals when different staff members run the
        workflow.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a small retailer or restaurant, this means you can take one approved product or menu photo and
        generate a complete set of campaign assets: square images for Instagram, vertical videos for TikTok,
        banners for your website, and email-ready graphics. The workflow produces each asset in the right
        dimensions, with the right branding, and in the right order, no extra editing, no reformatting, no
        manual review to catch off-brand details. If you want to refresh a campaign, you update the input and
        rerun the workflow. The system applies the same treatment and outputs a new, consistent set.</p>
      <p className="text-md text-white shadow-text pt-3">
        Imagine’s Ad Studio takes this even further for paid social campaigns. Paste a product URL, and the
        platform pulls in product details, then creates multiple ad variants automatically, each formatted for
        the platform you select, like Meta, TikTok, or Pinterest, with text safe zones and current trend
        intelligence built in. The system handles the research, formatting, and creative generation in one
        pass. You can generate several video and image treatments
        for&nbsp;<GlossaryLink slug="a-b-testing" className="text-[#0B162A] hover:underline">A/B
        testing</GlossaryLink>, all from a single brief.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval and review are built into the workflow itself. The approval chain is enforced by the workflow
        structure, no one can bypass it, and every asset goes through the right checks before publishing.
        Teams can collaborate in real time on the infinite canvas, seeing live updates, comments, and version
        history. This means no more lost files, no more email chains, and no more reviewing assets one at a
        time.</p>
      <p className="text-md text-white shadow-text pt-3">
        The result is a content engine that runs as fast as your business needs. What once took days or weeks,
        shooting new photos, editing, resizing, briefing a designer, and waiting for revisions, now happens in
        a single automated session. Teams can shift their focus from manual production to campaign strategy
        and customer engagement. For a small business, this is the difference between falling behind and
        staying visible in a crowded market.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-imagine-turns-raw-assets-into-campaign-ready-content-without-manual-steps" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Imagine Turns Raw Assets into Campaign-Ready Content Without Manual Steps
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-imagine-turns-raw-assets-into-campaign-ready-content-without-manual-steps-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Imagine Turns Raw Assets into Campaign-Ready Content Without Manual Steps
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
