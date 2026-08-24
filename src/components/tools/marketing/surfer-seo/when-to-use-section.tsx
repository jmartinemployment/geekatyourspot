export default function WhenToUseSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Surfer SEO is particularly useful for businesses looking to enhance their SEO blog and article generation processes. It is ideal for small businesses in competitive markets, such as those in Palm Beach and Broward counties, where efficient content production and optimization are crucial for maintaining visibility and driving traffic.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        The tool is best utilized when a business needs to produce a high volume of content quickly without compromising on quality. Surfer SEO&apos;s capabilities make it possible to generate SEO-optimized content that ranks well in search engines, thus saving time and reducing the costs associated with traditional content creation methods. By automating much of the research and analysis, businesses can focus on developing creative and strategic content that resonates with their audience.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Surfer SEO is also a valuable tool for businesses aiming to improve existing content. Its Audit Tool provides insights and recommendations that can help refine and enhance content, ensuring it remains competitive in search engine rankings. This ongoing optimization is essential for adapting to changing SEO algorithms and maintaining a strong online presence.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Whether you&apos;re just starting your content strategy or looking to optimize your existing content, Surfer SEO provides the tools and insights needed to succeed in the competitive digital landscape.
      </p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="when-to-use">
                When to Use
              </h2>
            </div>
            <div className="col-span-5"></div>
            <div className="col-span-12">
              {body}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="when-to-use-desktop">
                When to Use
              </h2>
              {body}
            </div>
            <div className="col-span-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
