export default function ComparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        AdCreative is built for small businesses who need every dollar in their ad budget to work, and it sits apart
        from both manual DIY tools and traditional agency models by removing the guesswork and the overhead. Where
        agencies are priced out of reach for a $500 monthly budget, and DIY tools leave you to figure out what works
        by trial and error, AdCreative uses AI trained on millions of high-performing ads to generate and validate
        both copy and visuals in seconds (<a id={`tools-marketing-budget-ad-copy-message-validation-adcreative-comparing-source-adcreative-ai${idSuffix}`} href="https://www.adcreative.ai/use-case/e-commerce" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">AdCreative</a>,
        as of Oct 23, 2026). This means you get conversion-focused creative without the cost or the uncertainty.</p>
      <p className="text-base text-white shadow-text pt-3">
        The typical DIY approach relies on platform-provided templates or manual design tools, with business owners
        or staff writing copy, picking images, and launching ads alone. This process is slow, inconsistent, and
        vulnerable to the blind spots that burn micro-budgets, generic headlines, off-brand colors, or images that
        blend into the feed and get ignored. Most small businesses cannot afford to test dozens of variations or
        keep up with the constant creative refresh cycles the platforms now reward. As a result, campaigns stagnate,
        and the money disappears into broad-match clicks and irrelevant impressions.</p>
      <p className="text-base text-white shadow-text pt-3">
        AdCreative replaces that cycle with a system that generates hundreds of ad variations in seconds, each one
        scored and ranked for conversion potential before you spend a dollar to run it. The AI draws from a massive
        database of successful layouts and proven copywriting frameworks like AIDA and PAS, so every headline and
        image is built to grab attention and drive action, not just fill a template. This is not just automation for
        its own sake. It is automation focused on what matters: more qualified leads per dollar spent, and less
        wasted budget on creative that does not convert.</p>
      <p className="text-base text-white shadow-text pt-3">
        Compared to agency retainers, which often start at $1,000 or more and add a layer of communication and
        revision cycles, AdCreative’s pricing model is direct and predictable (<a id={`tools-marketing-budget-ad-copy-message-validation-adcreative-comparing-source-adcreative-ai-2${idSuffix}`} href="https://www.adcreative.ai/post/how-ai-product-videos-improve-roas" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">AdCreative</a>,
        as of Oct 23, 2026). The Pro plan is $249 per month for up to 300 credits, with unlimited creative
        generations and all AI assets unlocked (<a id={`tools-marketing-budget-ad-copy-message-validation-adcreative-comparing-source-adcreative-ai-3${idSuffix}`} href="https://www.adcreative.ai/industries/fashion-apparel" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">AdCreative</a>,
        as of Oct 23, 2026). For a small team, this is less than half the cost of a basic agency package and
        delivers more creative volume, faster turnaround, and no retainer risk. There are also quarterly and yearly
        plans with discounts, and a seven-day free trial to test the platform with no commitment. This is a
        structure designed for businesses that cannot tie up cash in large contracts or wait weeks for revisions.</p>
      <p className="text-base text-white shadow-text pt-3">
        Other AI ad platforms serve larger teams or focus on niche use cases, but few are as directly aimed at the
        micro-budget, local business segment. AdCreative is accessible to businesses of all sizes, but its workflow,
        batch generation, instant creative refresh, and built-in brand controls, solves the real operational
        problems of a small team with no dedicated marketing staff. It connects directly to Meta, Google, and
        LinkedIn ad accounts, so campaigns can be launched or updated with no manual file transfers. For a business
        running tight, local campaigns, this means you spend more time on strategy and less on formatting,
        exporting, and uploading assets.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s focus on conversion optimization is not an afterthought. Every creative is scored for
        predicted performance, and the system alerts you when an ad starts to fatigue or underperform. This is not
        just about producing more content, it is about ensuring that every asset you pay to run is validated against
        real-world results. This is the step most DIY tools and even some agencies skip, leaving you to discover
        problems only after the budget is spent. With AdCreative, you have guardrails that catch issues early, so
        your limited daily budget is not wasted on ads that have gone stale or never fit your audience in the first
        place.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in South Florida, the practical difference is clear. AdCreative is not a generic design
        tool or a black-box agency. It is a purpose-built AI system that takes your brand parameters, product
        details, and campaign goals, and turns them into ready-to-launch creative that is always on-brand and always
        focused on conversion. You get the speed and scale of automation, the targeting and validation of
        data-driven advertising, and the cost control that makes small-budget campaigns viable. That is where
        AdCreative stands out compared to the other options a buyer is likely weighing.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-adcreative-compares-to-diy-tools-agencies-and-other-ai-ad-platforms-for-small-budget-campaigns" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How AdCreative compares to DIY tools, agencies, and other AI ad platforms for small-budget campaigns
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-adcreative-compares-to-diy-tools-agencies-and-other-ai-ad-platforms-for-small-budget-campaigns-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How AdCreative compares to DIY tools, agencies, and other AI ad platforms for small-budget campaigns
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
