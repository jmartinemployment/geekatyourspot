import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Marpipe takes the manual grind out of measured lead generation by automating every step that used to slow
        small businesses down. Instead of building each ad variation by hand, Marpipe generates hundreds of creative
        combinations instantly from just a few uploaded assets. This means your team spends less time on production
        and more time on strategy, no more resizing images for every platform or rewriting copy for each campaign.
        You get back the hours that manual workflows used to steal, so you can focus on what actually grows your
        business.</p>
      <p className="text-base text-white shadow-text pt-3">
        Marpipe’s automated <GlossaryLink slug="multivariate-testing" className="text-[#0B162A] hover:underline">multivariate
        testing</GlossaryLink> is the core of this shift. Rather than testing two ads at a time and hoping for a
        clear winner, Marpipe measures the performance of every possible combination, images, headlines, background
        colors, <GlossaryLink slug="call-to-action" className="text-[#0B162A] hover:underline">calls to action</GlossaryLink>,
        and more. This approach gives you precise data on what works and why, allowing you to identify the exact
        creative elements that drive clicks and conversions. When a particular design component starts to drag down
        performance, Marpipe makes it clear which one to cut, so you are not left guessing or wasting budget on
        underperforming variants.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s modular creative system means you are never locked into a single design or template. You can
        mix and match elements, swap out a background color, test a new headline, or try a different product image,
        without rebuilding your entire campaign. Marpipe’s automation handles the heavy lifting, deploying these
        variations into your live ad accounts and managing them at scale. This flexibility lets you adapt quickly to
        changes in your market, seasonal promotions, or shifts in customer behavior, all without manual overhead.</p>
      <p className="text-base text-white shadow-text pt-3">
        One of Marpipe’s key strengths is its ability to scale creative production without adding headcount. By
        connecting directly to your product data, Marpipe can create dynamic ads that update automatically as your
        catalog changes. Add a new product, change a price, or update an image, Marpipe pushes those changes live
        across all your campaigns without extra work from your team. This means your ads stay current and accurate,
        and you never have to worry about running promotions for out-of-stock items or outdated offers.</p>
      <p className="text-base text-white shadow-text pt-3">
        Marpipe also tackles the problem of generic, template-driven ads that fail to capture attention in
        competitive markets. Its creative automation tools let you design ads that stand out, with full control over
        layout, colors, overlays, and messaging. You can apply advanced rules and filters to target specific
        products with specific designs, ensuring that each audience sees the most relevant offer. Marpipe even
        supports dynamic video ads and animated overlays, so your campaigns can compete with larger brands on
        quality and engagement.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams struggling with data fragmentation, Marpipe’s feed management tools clean up and consolidate your
        product data before it ever reaches your ad platforms. This means you can segment your catalog, organize
        products into usable groups, and apply image logic by category, all within a single workflow. The result is
        more precise targeting, less wasted spend, and a catalog that powers every ad, <GlossaryLink slug="shopping-ads" className="text-[#0B162A] hover:underline">shopping
        listing</GlossaryLink>, and <GlossaryLink slug="dynamic-product-ads" className="text-[#0B162A] hover:underline">dynamic
        product ad</GlossaryLink> you run.</p>
      <p className="text-base text-white shadow-text pt-3">
        Marpipe’s automation extends to performance optimization as well. The platform can automatically filter out
        underperforming catalog campaigns, so your budget is always focused on the ads that deliver results. It
        tracks the performance of enriched catalogs, which on average perform about 20% better than raw <GlossaryLink slug="catalog-ads" className="text-[#0B162A] hover:underline">catalog
        ads</GlossaryLink>, giving you a clear benchmark for improvement (<a id={`tools-marketing-measured-lead-generation-marpipe-transforms-source-marpipe-com${idSuffix}`} href="https://www.marpipe.com/blog/ab-testing-ads-isnt-enough-heres-how-to-test-instead" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Marpipe</a>,
        as of Oct 24, 2026). And because Marpipe works with any ad platform that supports catalog ads, not just
        Meta, you can run coordinated campaigns across TikTok, Snap, Reddit, Pinterest, and more, all from the same
        system.</p>
      <p className="text-base text-white shadow-text pt-3">
        By removing manual production, slow testing cycles, and data silos, Marpipe lets small businesses in South
        Florida finally break through the operational ceiling that has held them back. The platform returns hours to
        your week, lowers your cost per lead, and gives you the creative firepower to compete at scale. The result
        is a more predictable sales pipeline, fewer errors, and a marketing operation that grows with your business,
        not against it.</p>
      <blockquote cite="https://www.marpipe.com/" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Get 100% control over your Dynamic Product Ads (DPA) with Marpipe.</blockquote>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-marpipe-removes-the-manual-burden-from-measured-lead-generation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Marpipe removes the manual burden from Measured Lead Generation
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-marpipe-removes-the-manual-burden-from-measured-lead-generation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Marpipe removes the manual burden from Measured Lead Generation
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
