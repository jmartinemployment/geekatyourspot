export default function OverviewSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Surfer SEO is a powerful tool specifically designed to streamline the process of creating SEO-optimized blog posts and articles. In the competitive world of digital marketing, where small businesses often find themselves overwhelmed by the demands of content creation, Surfer SEO offers a solution that cuts down on time and effort while enhancing the quality of the output. By leveraging AI-driven insights, it helps users generate content that not only ranks well on search engines but also resonates with target audiences.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Surfer SEO excels in transforming the traditional, labor-intensive approach to SEO content creation into a more efficient and effective process. Traditionally, creating SEO-friendly content involves extensive keyword research, meticulous drafting, and constant updates to keep up with search engine algorithm changes. This process is not only time-consuming but also prone to human error, leading to missed opportunities and wasted resources. Surfer SEO addresses these challenges by automating much of the research and analysis, allowing users to focus more on strategy and creativity.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        The tool is particularly beneficial for small businesses in regions like Palm Beach and Broward counties, where resources may be limited, and the need for efficient content production is high. By using Surfer SEO, businesses can produce high-quality, optimized content faster, reduce the likelihood of errors, and improve their search engine rankings. This not only saves time and reduces costs but also allows businesses to better engage with their audiences and drive more sales.
      </p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
                Overview
              </h2>
            </div>
            <div className="col-span-12">
              {body}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview-desktop">
                Overview
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
