import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Judging whether Marpipe fits your business comes down to how well it solves your creative bottleneck, how it
        scales with your team size, and whether its pricing structure matches your ad spend and catalog complexity.
        Marpipe is designed for small businesses running catalog-driven ads across multiple platforms, especially
        those spending $500 to $1,500 a month and struggling to keep up with creative refresh and cost-per-lead
        control. Its value is not in generic automation, but in how it lets you generate, test, and optimize
        hundreds of ad variants without the overhead of manual design or scripting.</p>
      <p className="text-base text-white shadow-text pt-3">
        First, consider the scale and complexity of your product catalog. Marpipe is built for businesses that need
        to manage dynamic product ads, where you have dozens or hundreds of SKUs, each requiring its own creative,
        pricing, and offer logic. If your business relies on static, one-off ads or has only a handful of products,
        Marpipe’s automation may be more than you need. But if you are running frequent promotions, changing
        inventory, or want to match creative to local market conditions, the platform’s ability to update ads
        automatically from your feed is a strong fit.</p>
      <p className="text-base text-white shadow-text pt-3">
        Second, look at your current creative workflow. If your team spends hours resizing images, writing new copy,
        or duplicating templates for every campaign, Marpipe eliminates these steps by handling them through
        configuration and automation. The platform’s multivariate testing engine is especially valuable if you want
        to move beyond basic A/B tests. Marpipe lets you test every element, headline, image, background, button,
        across all combinations, so you find not just which ad works, but which creative elements drive results.
        This is a major advantage for businesses that need to stretch every dollar and cannot afford wasted spend on
        underperforming variants.</p>
      <p className="text-base text-white shadow-text pt-3">
        Third, judge Marpipe on its platform compatibility and ease of integration. The system is not tied to Meta
        or any one channel, it works with any ad platform that supports catalog ads, including TikTok, Snap, Reddit,
        and Pinterest. This is important for businesses running multi-channel campaigns or shifting budgets between
        platforms. The platform’s feed management tools also mean you can clean and enrich your product data before
        it hits your ads, which is key to keeping creative quality high and spend efficient.</p>
      <p className="text-base text-white shadow-text pt-3">
        On pricing, Marpipe does not publish a public price list in the available research, so you cannot compare it
        line by line to every competitor. What is clear is that its pricing is structured around catalog size,
        automation features, and the number of SKUs managed, not just a flat monthly fee. All product variants count
        toward your SKU limit, and the platform’s automation is designed to deliver value as you scale up creative
        and catalog complexity. For a business spending $500 to $1,500 a month on ads, the return comes from
        reducing manual labor, speeding up creative refresh, and cutting wasted spend on ineffective variants.
        Marpipe’s own data shows that Enriched Catalogs perform about 20% better than raw catalog ads on average,
        but results are not guaranteed and will depend on your own creative, <GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">data
        quality</GlossaryLink>, and campaign structure (<a id={`tools-marketing-measured-lead-generation-marpipe-evaluating-source-marpipe-com${idSuffix}`} href="https://www.marpipe.com/blog/ab-testing-ads-isnt-enough-heres-how-to-test-instead" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Marpipe</a>,
        as of Oct 24, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        When weighing Marpipe, ask whether you need to automate creative testing at scale, whether your team is
        bogged down by manual ad production, and whether your catalog is large enough to benefit from dynamic,
        data-driven creative. If your current bottleneck is not creative production but something else, like lead
        qualification, <GlossaryLink slug="call-tracking" className="text-[#0B162A] hover:underline">call tracking</GlossaryLink>,
        or offline <GlossaryLink slug="marketing-attribution" className="text-[#0B162A] hover:underline">attribution</GlossaryLink>,
        another tool may be a better fit. But for small businesses in South Florida looking to break the cycle of
        rising CPL and creative fatigue, Marpipe’s approach to automation and multivariate testing is a strong
        match.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, consider the role of Geek @ Your Spot in your evaluation. Deploying Marpipe is not just a matter of
        signing up for an account; it is about configuring the system to match your business logic, mapping your
        data fields, and designing creative templates that reflect your brand. Geek @ Your Spot’s expertise is in
        making Marpipe work in your environment, ensuring your catalog is clean, your rules are set up for your real
        offers, and your team can manage the platform without technical roadblocks. A DIY approach is possible, but
        most small teams see faster results and fewer errors by working with a partner who knows both the platform
        and the realities of local business advertising.</p>
      <p className="text-base text-white shadow-text pt-3">
        In sum, Marpipe is best judged on its ability to automate creative at scale, its fit for catalog-driven
        advertising, and its support for multichannel campaigns. Its pricing is tied to catalog size and automation
        depth, not just a flat fee. The right buyer is a small business with a real need to break out of manual
        creative production and make every ad dollar count. Fitting Marpipe into your stack with the help of a local
        specialist like Geek @ Your Spot is what turns its automation into real sales pipeline growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-marpipe-on-fit-and-pricing-for-your-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge Marpipe on fit and pricing for your business
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-marpipe-on-fit-and-pricing-for-your-business-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge Marpipe on fit and pricing for your business
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
