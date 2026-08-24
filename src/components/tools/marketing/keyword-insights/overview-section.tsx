export default function OverviewSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Keyword Insights is a robust tool designed to streamline the process of SEO blog and article generation. For small businesses, particularly those in Palm Beach and Broward counties, the challenge of creating content that ranks well on search engines is significant. Traditional methods often involve labor-intensive tasks such as brainstorming, keyword research, and drafting, which can be both time-consuming and prone to human error. Keyword Insights addresses these pain points by automating key aspects of the content creation process, allowing businesses to focus more on strategic elements and creativity.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        With Keyword Insights, businesses can reduce the time spent on content creation while improving the quality and searchability of their content. The tool leverages AI to provide data-driven insights into keyword performance, enabling users to make informed decisions about which keywords to target. This not only helps in crafting content that resonates with target audiences but also enhances the likelihood of achieving higher search engine rankings.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Unlike other tools that focus on content optimization and generation respectively, Keyword Insights specializes in offering a comprehensive analysis of keyword trends and opportunities. This makes it an invaluable asset for businesses looking to optimize their SEO strategies without getting bogged down by the technical complexities usually associated with SEO management.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        By integrating Keyword Insights into their content creation workflow, businesses can not only save time and reduce costs but also increase their chances of driving more traffic to their websites. This is crucial in a digital landscape where staying competitive means continuously adapting to evolving SEO algorithms and consumer search behaviors.
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
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
