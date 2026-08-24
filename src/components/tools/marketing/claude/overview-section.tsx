export default function OverviewSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Claude is an AI-driven content generation tool designed to streamline the process of creating SEO-optimized blogs and articles. In the competitive digital landscape, where small businesses often find themselves overwhelmed by the demands of content creation, Claude offers a solution that reduces time spent on drafting and researching while enhancing content quality. By leveraging AI, Claude helps businesses produce engaging, high-ranking content efficiently.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Many small businesses in areas like Palm Beach and Broward counties face the challenge of producing content that not only engages readers but also ranks well in search engines. Traditional methods of content creation involve extensive keyword research, topic brainstorming, and multiple drafts, which can be both time-consuming and error-prone. Claude addresses these pain points by automating much of the labor-intensive work involved in content creation. It allows businesses to focus more on strategy and creativity, rather than getting bogged down by the technical aspects of SEO.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Claude integrates seamlessly with other tools like ChatGPT and Surfer SEO, enhancing its capability to generate high-quality, SEO-friendly content. This integration ensures that the content produced is not only engaging but also optimized for search engine algorithms, which are constantly evolving. By using Claude, businesses can improve their content&apos;s visibility and reach, ultimately driving more traffic to their websites and increasing potential sales.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        The tool&apos;s ability to automate keyword research and content drafting significantly reduces the time and effort required to produce well-optimized content. This is particularly beneficial for small teams that may not have the resources to dedicate to a full-time content creation staff. With Claude, businesses can achieve more with less, saving both time and money while still producing high-quality content that meets their marketing goals.
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
