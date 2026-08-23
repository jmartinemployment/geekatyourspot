export default function OverviewSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        HubSpot AI is designed to revolutionize the way small businesses create SEO-optimized content. For businesses in Palm Beach and Broward counties, this tool offers a way to automate and enhance the content creation process, making it more efficient and effective. Traditional content creation is often labor-intensive and prone to human error, which can lead to missed opportunities in search engine rankings. HubSpot AI addresses these challenges by leveraging artificial intelligence to streamline the workflow, allowing businesses to focus on strategic planning and creative content development.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        The platform offers a suite of features specifically tailored for SEO blog and article generation. By automating keyword research, content drafting, and optimization, HubSpot AI reduces the time and cost associated with traditional content creation methods. This allows businesses to produce high-quality content that is more likely to rank well on search engines, thereby increasing visibility and driving more traffic to their websites.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        HubSpot AI integrates seamlessly with existing marketing workflows, making it an ideal choice for businesses looking to enhance their digital marketing efforts without overhauling their current systems. It provides actionable insights and recommendations, helping users make data-driven decisions that can lead to better content performance and higher engagement rates. The platform is designed to be user-friendly, ensuring that even those with limited technical expertise can leverage its capabilities to improve their content strategy.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        In comparison to other tools, HubSpot AI offers a comprehensive solution that not only assists in content generation but also provides valuable insights into content performance and strategy optimization. This makes it a versatile tool for businesses aiming to stay competitive in the ever-evolving digital landscape.
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
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview-desktop">
                Overview
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
