import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Marpipe is structured to handle the demands of catalog-driven advertising at scale, with an architecture
        built around modular templates, feed integration, and automated data flows. Every core function, creative
        generation, testing, deployment, and optimization, relies on a robust connection between your product data
        and the creative logic you define in the platform.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the heart of Marpipe’s system is its product feed engine. This engine ingests your catalog data, product
        names, images, prices, star ratings, stock levels, and custom fields, and standardizes it for use across all
        supported ad platforms. Marpipe’s feed management tools let you clean up inconsistent imagery, fill in
        missing data, and append new fields (like review counts or seasonal labels) without leaving the platform.
        This ensures that every ad variant pulls from the most accurate, up-to-date product information available.</p>
      <p className="text-base text-white shadow-text pt-3">
        Templates in Marpipe are not static files; they are dynamic blueprints that connect directly to your feed.
        Each template defines which feed fields map to which design elements, so when your catalog changes, new SKUs
        added, prices updated, images swapped, the creative updates automatically. This architecture eliminates the
        need to manually rebuild ads for every change in your inventory, freeing your team from tedious versioning
        work.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses running ads on multiple platforms, Marpipe’s channel customization ensures that each
        destination gets the data and creative format it requires. The platform supports any channel that can run
        dynamic product ads, including Meta, TikTok, Snap, Reddit, Pinterest, and Google Shopping. It handles the
        nuances of each platform’s requirements, from image aspect ratios to text length limits, so your creative
        stays compliant and effective everywhere.</p>
      <p className="text-base text-white shadow-text pt-3">
        Marpipe’s automation layer coordinates the full lifecycle of ad variants. When you launch a campaign, the
        system generates all possible creative combinations from your defined variables, then deploys them live with
        budgets and targeting structured for clean testing. Spend is distributed evenly across variants to avoid
        platform auto-optimization skewing your results. Performance data flows back into Marpipe, where it’s
        consolidated and analyzed at both the ad and element level, so you can see not just which ad won, but which
        headline or image consistently drives performance.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s creative intelligence database grows with every test. As you run more campaigns, Marpipe
        builds a historical record of which creative elements perform best for your brand, your products, and your
        audiences. This data is available for future campaigns, letting you compound your learnings and avoid
        repeating old mistakes. Over time, this pool of creative intelligence becomes a competitive advantage, one
        that manual testing and static templates can’t match.</p>
      <p className="text-base text-white shadow-text pt-3">
        Marpipe’s generative AI tools add another layer to the architecture. These tools can generate <GlossaryLink slug="ad-copy" className="text-[#0B162A] hover:underline">ad
        copy</GlossaryLink>, testimonials, and value propositions for every SKU, transform long product descriptions
        into concise, ad-friendly text, and even create new lifestyle backgrounds or seasonal visual variations from
        your existing images. The AI-generated assets are tested in the same way as your original creative, so you
        can quickly see if a new copy variant or background actually moves the needle.</p>
      <p className="text-base text-white shadow-text pt-3">
        Feed-based video is handled through an automated pipeline. When a new product is added or an image or price
        changes, Marpipe’s video engine updates the creative in real time, overlays dynamic badges, and ensures the
        video fits the requirements of each ad platform. This means you can run video catalog ads at scale, with
        every asset always current, no manual editing or re-uploading required.</p>
      <p className="text-base text-white shadow-text pt-3">
        Marpipe’s architecture is designed for reliability and scale, but also for flexibility. You can apply
        advanced rules and filters to segment your catalog, set different creative treatments for different product
        groups, and control which designs apply to which SKUs. All product variants are tracked as separate SKUs, so
        you have granular control over every version in your catalog.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform does not require you to have in-house scripting or data science skills. All configuration,
        mapping, and creative logic are handled through Marpipe’s interface, designed for marketers and small teams.
        The system’s automation and data flows are built to work out of the box, but allow for deep customization
        when you need it. This is what makes Marpipe a fit for small businesses in South Florida who need to scale
        lead generation without adding technical overhead or extra staff.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-powers-marpipe-behind-the-scenes" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What powers Marpipe behind the scenes
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
              <h2 id="what-powers-marpipe-behind-the-scenes-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What powers Marpipe behind the scenes
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
