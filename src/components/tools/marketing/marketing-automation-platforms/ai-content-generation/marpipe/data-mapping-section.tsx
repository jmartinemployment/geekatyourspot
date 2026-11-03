export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The most important data decisions when deploying Marpipe are how your product catalog is structured and how
        each field maps to the creative templates. Getting this right upfront determines how smoothly your ads
        generate, how accurate your messaging is, and how well you can segment and optimize campaigns over time.</p>
      <p className="text-base text-white shadow-text pt-3">
        Marpipe relies on a live product feed to populate ads. This feed needs to be complete, consistent, and
        structured for advertising, not just for e-commerce. Each product should have clean images, accurate names,
        up-to-date prices, and any additional data you want to use in your ads, like ratings or inventory counts.
        Geek @ Your Spot reviews your catalog for gaps or inconsistencies, then uses Marpipe’s feed management tools
        to clean and enrich the data before mapping it to creative elements.</p>
      <p className="text-base text-white shadow-text pt-3">
        Field mapping is where you decide which product attributes show up in your ads and how they are used. For
        example, you might map the product name to a headline, the price to a dynamic overlay, and the star rating
        to a badge. Marpipe supports dynamic text and image elements, so every ad pulls the correct data for each
        SKU. If your catalog has product variants (like different colors or sizes), each variant should be treated
        as a separate SKU to ensure accurate targeting and reporting.</p>
      <p className="text-base text-white shadow-text pt-3">
        Advanced mapping lets you go beyond the basics. You can set rules so certain creative treatments only apply
        to specific product groups, such as showing a sale badge only on discounted items, or using a different
        background for a premium product line. Geek @ Your Spot configures these rules in Marpipe so your ads are
        always relevant and on brand, without manual sorting or batch editing.</p>
      <p className="text-base text-white shadow-text pt-3">
        For multi-image or video ads, your feed should include multiple image fields for each product. Marpipe can
        automatically assign these to different positions in the creative layout, such as a main product shot and a
        lifestyle image. If a product only has one image, the system falls back to the primary shot without breaking
        the ad. This flexibility means you can scale creative complexity without increasing production overhead.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another key decision is how to handle dynamic updates. Marpipe can pull in real-time changes to prices,
        inventory, or product status, so ads stay accurate without manual intervention. This is especially important
        for fast-moving catalogs where stock or pricing changes daily. Geek @ Your Spot sets up the sync schedule
        and monitors for data issues that could break an ad or cause compliance problems on ad platforms.</p>
      <p className="text-base text-white shadow-text pt-3">
        Segmentation is also driven by your data structure. By tagging products or grouping them by category, you
        can target different audiences with different creative, offers, or messaging. Marpipe supports labels and
        product sets, so you can run campaigns that speak directly to each segment, like new arrivals, best sellers,
        or clearance items, without duplicating work.</p>
      <p className="text-base text-white shadow-text pt-3">
        The final mapping step is setting up tracking fields for reporting. Marpipe captures performance data at the
        element level, so you can see not just which ad performed best, but which headline, image, or call to action
        drove results. Geek @ Your Spot ensures that your reporting structure matches your business goals, so you
        can act on insights as soon as they come in.</p>
      <p className="text-base text-white shadow-text pt-3">
        Getting data structure and mapping right at the start saves hours of troubleshooting and rework down the
        line. With Marpipe’s flexible mapping and Geek @ Your Spot’s implementation support, small businesses can
        launch campaigns that are accurate, scalable, and ready to optimize from day one.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-data-structure-and-mapping-decisions-matter-most-when-deploying-marpipe" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What data structure and mapping decisions matter most when deploying Marpipe
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-data-structure-and-mapping-decisions-matter-most-when-deploying-marpipe-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What data structure and mapping decisions matter most when deploying Marpipe
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
