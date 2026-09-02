import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function OverviewToolSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">Adobe Sensei is an AI-driven platform that enhances creative workflows by automating routine tasks and boosting
        content intelligence. This tool is part of Adobe&#39;s suite of solutions aimed at improving design efficiency and
        delivering personalized experiences in real-time. By leveraging advanced <GlossaryLink slug="machine-learning">machine learning</GlossaryLink> algorithms, Adobe Sensei
        enables businesses to streamline their <GlossaryLink slug="marketing-automation">content creation</GlossaryLink> processes, ultimately saving time and reducing operational
        costs.</p>
      <p className="text-md text-white shadow-text pt-3">The platform integrates seamlessly with Adobe&#39;s creative applications, such as Photoshop, Illustrator, and
        Premiere Pro, allowing users to harness AI capabilities directly within their existing tools. This integration is
        crucial for maintaining a cohesive workflow, as it minimizes the need for switching between different applications
        and learning new interfaces. Adobe Sensei&#39;s AI technology can automatically tag images, suggest edits, and even
        generate content variations, which can significantly accelerate the creative process.</p>
      <p className="text-md text-white shadow-text pt-3">Businesses that adopt Adobe Sensei can expect to see improvements in their content creation workflows through
        enhanced efficiency and reduced manual effort. The platform&#39;s ability to deliver <GlossaryLink slug="personalized-marketing">personalized content</GlossaryLink>
        experiences in real-time is a significant advantage, especially in industries where <GlossaryLink slug="engagement-rate">customer engagement</GlossaryLink> and
        satisfaction are paramount. By automating repetitive tasks and providing intelligent insights, Adobe Sensei empowers
        creative professionals to focus on more strategic and innovative aspects of their work.</p>
      <p className="text-md text-white shadow-text pt-3">Overall, Adobe Sensei is a valuable tool for organizations looking to optimize their creative processes and deliver
        high-quality content more efficiently. Its integration with Adobe&#39;s suite of products ensures a smooth
        transition for teams already using these tools, while its AI capabilities offer tangible benefits in terms of time
        savings and improved content quality.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
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
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
