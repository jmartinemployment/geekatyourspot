export default function ComparingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Marpipe stands apart from other ad automation and creative testing tools by focusing on systematic,
        catalog-driven creative generation and precise multivariate testing. Where most platforms automate only
        basic A/B testing or simple rule-based optimization, Marpipe is built to handle the operational complexity
        that comes with scaling lead generation at $500 to $1,500 a month in ad spend. It does this by automating
        the creation, deployment, and optimization of hundreds of ad variants from a single catalog, something most
        tools in this space cannot do without heavy manual work.</p>
      <p className="text-base text-white shadow-text pt-3">
        A small business in South Florida weighing its options will see that many tools promise ad automation, but
        most still require manual creative uploads, template management, or separate scripts for each platform.
        These solutions often hit a wall when you need to test more than a handful of creative combinations or adapt
        each ad for different placements like Stories, Feeds, or banners. Marpipe’s architecture is designed for
        this exact scaling trap: it takes a single set of assets and can generate all the needed variants, instantly
        resizing for each placement and mapping every product’s data directly into the creative template. This is
        not just a time-saver, it is what allows a team of one or two to run campaigns that would normally take a
        full creative department.</p>
      <p className="text-base text-white shadow-text pt-3">
        Compare this to common approaches like running native ad managers (Meta, Google, TikTok) or using generic
        template-based creative tools. Most of those platforms offer basic catalog ads, but they lack the ability to
        run true multivariate tests at scale. They also require manual intervention to swap out underperforming
        elements, meaning you often leave bad creative live for too long or cannot isolate which asset, headline,
        image, button, caused a drop in performance. Marpipe’s multivariate engine tests every creative element in
        isolation and in combination, so you know not just what ad wins, but why. You can pull out a single bad
        button color or headline without guessing, and the platform can remove it from all variants in one step.</p>
      <p className="text-base text-white shadow-text pt-3">
        Some buyers look at specialized bidding tools or rules engines to automate budget allocation or pause
        underperformers. These are valuable for campaign management, but they do not solve the creative bottleneck,
        the real limit for measured lead generation at this spend level. Marpipe automates the creative pipeline
        itself, so you do not need to write custom scripts or hire a data scientist to keep your ads fresh and
        relevant. Instead, the platform’s automation logic handles the heavy lifting: generating variants, pushing
        them live, and pulling back on what does not perform. This lets you focus on strategy and messaging, not on
        the mechanics of asset production or deployment.</p>
      <p className="text-base text-white shadow-text pt-3">
        Where Marpipe also differs is in how it handles catalog data and feed management. Many tools require you to
        clean, standardize, and segment your product data before uploading. Marpipe integrates feed management and
        creative automation, so you can clean up inconsistent imagery, apply segmentation rules, and push changes
        across your entire catalog without switching platforms. If you need to update a price, add a new product, or
        change a background color, Marpipe propagates that change to every relevant ad variant automatically. This
        is especially important for small teams who cannot afford to spend hours on manual updates or risk running
        outdated ads.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the analytics and optimization side, Marpipe’s approach is to consolidate data at the element level.
        Instead of only reporting on which full ad performed best, it shows you which images, headlines, or
        calls-to-action consistently drive results, across every variant and placement. This depth of reporting is
        what allows you to build a database of creative intelligence over time, learning not just what works now,
        but what tends to work for your audience, your products, and your market. Competing tools may offer
        dashboards or summary reports, but few provide this level of actionable insight at the creative asset level.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, Marpipe’s automation extends to video and dynamic formats. Where many platforms require separate
        workflows for static and video ads, Marpipe can generate video variants from catalog images, update overlays
        when prices or ratings change, and keep every format in sync. This matters because video now outperforms
        static on most channels, and keeping creative current across formats is a major operational hurdle for small
        teams.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Marpipe is built for catalog-driven creative automation, not just campaign management.</li>
        <li>It runs true multivariate tests at scale, isolating the effect of every creative element.</li>
        <li>It automates feed management and creative deployment, reducing manual work to a minimum.</li>
        <li>Its reporting surfaces actionable insights at the element level, not just by ad.</li>
        <li>It keeps static and video creative current and consistent across platforms.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses with a mid-tier ad budget who need to scale lead generation without hiring a creative
        team or writing custom scripts, Marpipe is built to remove the real operational ceiling, while most
        alternatives only patch around it.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-marpipe-compares-to-other-ad-automation-and-creative-testing-tools-in-real-use" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Marpipe compares to other ad automation and creative testing tools in real use
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
              <h2 id="how-marpipe-compares-to-other-ad-automation-and-creative-testing-tools-in-real-use-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Marpipe compares to other ad automation and creative testing tools in real use
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
