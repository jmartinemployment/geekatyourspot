import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Marpipe automates the heavy lifting of <GlossaryLink slug="creative-testing" className="text-[#0B162A] hover:underline">creative
        testing</GlossaryLink> and ad deployment by generating, managing, and optimizing hundreds of ad variants
        from a single set of assets. Instead of manually building ad combinations and tracking performance
        piecemeal, Marpipe’s system builds modular creative templates, runs multivariate tests at scale, and pushes
        live winning combinations, all without the manual bottlenecks that slow down small teams.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the core of Marpipe’s workflow is the concept of modular creative. Rather than producing one-off ad
        files, users build templates where each design element (image, headline, background color, CTA button) is a
        swappable variable. Marpipe’s interface lets you define these variables, upload the different versions you
        want to test, and map them to your product feed fields. For example, you might set up four headlines, three
        images, and two background colors, Marpipe will automatically generate every possible combination as a
        unique ad variant.</p>
      <p className="text-base text-white shadow-text pt-3">
        This approach means you can test hundreds of ad versions at once, not just a handful. Marpipe’s multivariate
        testing engine tracks performance at the element level, not just the ad level. So instead of guessing why
        one ad outperformed another, you see exactly which headline, image, or color drives more clicks or
        conversions, regardless of what it’s paired with. This granular feedback lets you drop underperforming
        elements quickly and double down on what works, tightening your <GlossaryLink slug="feedback-loop" className="text-[#0B162A] hover:underline">feedback
        loop</GlossaryLink> and reducing wasted spend.</p>
      <p className="text-base text-white shadow-text pt-3">
        Marpipe automates deployment by connecting templates directly to your product catalog. As products are added
        or updated, the system pulls in new images and text, applies your design logic, and ensures every SKU gets a
        tailored creative treatment. For products with multiple images, Marpipe’s multi-image layout engine
        automatically populates both primary and secondary images; if only one image is available, it falls back
        cleanly to a single-image layout. Dynamic text fields let you display real-time prices, names, and even star
        ratings, all pulled from your feed.</p>
      <p className="text-base text-white shadow-text pt-3">
        Feed-based video ads are handled similarly. Marpipe can generate short, platform-native product videos from
        static images, overlaying dynamic price or inventory badges, and updating creative instantly as your catalog
        changes. There’s no need for manual video editing, when a price or image changes in your feed, the video
        updates automatically. This keeps your ads fresh and accurate, even across hundreds or thousands of SKUs.</p>
      <p className="text-base text-white shadow-text pt-3">
        Testing and optimization are built into every stage. Marpipe can <GlossaryLink slug="a-b-testing" className="text-[#0B162A] hover:underline">A/B
        test</GlossaryLink> new video or color-matched creative against your existing static catalog ads, using
        identical budgets and targeting to surface what actually works. The system can also automatically filter out
        the worst-performing campaign variants, so you’re not stuck wasting spend on creative that drags down your
        results. Advanced rules and filters let you apply different designs to different product groups, segmenting
        your catalog for better targeting and relevance.</p>
      <p className="text-base text-white shadow-text pt-3">
        Marpipe’s automation extends to the grunt work of resizing and formatting creative for different placements.
        Stories, feeds, banners, and other formats each have their own safe zones and aspect ratios. Marpipe
        instantly reformats every variant to fit the requirements of each platform, so you’re never left manually
        cropping or resizing images for TikTok, Meta, Pinterest, or Google Shopping. This is a time-saver for small
        teams who can’t afford to burn hours on production work that software can handle.</p>
      <p className="text-base text-white shadow-text pt-3">
        All of this is designed for scale. Marpipe is built to let a small business run like a much larger team, one
        design can become hundreds of live ads, each tested, optimized, and swapped out based on real data, not gut
        feel. You get full control over your creative logic, but the rote work is handled by automation. This closes
        the gap that makes manual lead generation so costly and unpredictable for businesses trying to grow their
        pipeline without adding headcount.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-marpipe-actually-automates-creative-testing-and-ad-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Marpipe actually automates creative testing and ad deployment
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
              <h2 id="how-marpipe-actually-automates-creative-testing-and-ad-deployment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Marpipe actually automates creative testing and ad deployment
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
