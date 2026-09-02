import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function OverviewSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Frase is an <GlossaryLink slug="machine-learning">AI-powered</GlossaryLink> tool designed to streamline the process of creating <GlossaryLink slug="search-engine-optimization">SEO-optimized</GlossaryLink> blog posts and articles. It helps businesses automate the labor-intensive aspects of <GlossaryLink slug="marketing-automation">content creation</GlossaryLink>, such as topic brainstorming, <GlossaryLink slug="keyword-density">keyword research</GlossaryLink>, and drafting, thereby saving time and reducing errors. Frase is particularly beneficial for small businesses in areas like Palm Beach and Broward counties, where resources may be limited and the demand for high-quality content is high.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        By leveraging AI, Frase enables users to generate content that is not only relevant but also optimized for search engines, improving the likelihood of higher rankings and increased visibility. This tool is part of a growing suite of AI-driven platforms that are transforming how content is produced by focusing on efficiency and effectiveness.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Frase stands out by offering a user-friendly interface and affordable plans tailored for small teams. It provides actionable insights that help users create content aligned with current SEO trends, thus maximizing the impact of their digital marketing efforts. The tool&apos;s capabilities are not limited to just content generation; it also offers features that enhance content strategy and planning, making it a comprehensive solution for businesses looking to improve their content marketing strategies.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        In essence, Frase is a powerful ally for businesses aiming to navigate the complexities of SEO and content creation with greater ease and efficiency. By automating routine tasks, it allows users to focus more on creativity and strategic planning, ensuring that their content not only meets but exceeds audience expectations.
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
