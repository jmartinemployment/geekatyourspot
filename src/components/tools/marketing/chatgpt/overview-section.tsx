export default function OverviewSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        In the realm of content creation, ChatGPT emerges as a powerful AI-driven tool designed to streamline the process of generating SEO-optimized blog posts and articles. For many small businesses, especially those in Palm Beach and Broward counties, the traditional content creation process can be overwhelming. It involves brainstorming, keyword research, and drafting, often with little guarantee of improved search engine rankings. ChatGPT offers a solution by automating much of this labor-intensive work, thereby reducing the time and effort required to produce high-quality content.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        ChatGPT is particularly effective for SEO blog and article generation, as it leverages advanced natural language processing capabilities to create content that is not only engaging but also optimized for search engines. By automating the initial stages of content creation, businesses can focus more on strategic planning and creative direction, rather than getting bogged down by the minutiae of writing and editing. This shift allows for faster content production and a significant reduction in human error, which can lead to missed opportunities and wasted resources.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        While tools like Surfer SEO and Keyword Insights complement ChatGPT by offering keyword analysis and optimization suggestions, ChatGPT stands out by generating the core content itself. It can be seamlessly integrated into existing workflows, providing a flexible solution that adapts to the specific needs of each business. This adaptability makes it an ideal choice for small teams looking for affordable, efficient ways to enhance their digital presence without incurring excessive costs.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        For businesses aiming to transform their content creation process, ChatGPT offers a clear pathway to achieving better results with less effort. By embracing AI-driven content generation, companies can not only improve their search engine rankings but also free up valuable time to focus on other critical aspects of their operations.
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
