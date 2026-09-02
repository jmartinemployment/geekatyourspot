import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function OverviewToolSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">Marketo is a comprehensive <GlossaryLink slug="marketing-automation">marketing automation</GlossaryLink> platform designed to help businesses streamline and enhance their
        marketing efforts. It offers a suite of tools that facilitate <GlossaryLink slug="engagement-rate">customer engagement</GlossaryLink>, content <GlossaryLink slug="personalized-marketing">personalization</GlossaryLink>, and
        performance tracking. By leveraging Marketo, businesses can efficiently nurture leads and convert them into loyal
        customers.</p>
      <p className="text-md text-white shadow-text pt-3">The platform is particularly beneficial for businesses looking to automate their marketing campaigns and improve
        their reach. It provides capabilities that allow marketers to create personalized customer experiences, manage
        complex campaigns, and analyze marketing performance with ease. This results in saved time, reduced costs, and
        increased sales.</p>
      <p className="text-md text-white shadow-text pt-3">Marketo is suitable for businesses of all sizes, offering scalable solutions that can grow with the organization.
        Its user-friendly interface and robust feature set make it a popular choice among marketers who seek to optimize
        their workflows without the need for extensive technical knowledge. The platform&#39;s ability to integrate with
        various third-party applications further enhances its appeal, providing a seamless experience for users.</p>
      <p className="text-md text-white shadow-text pt-3">With Marketo, businesses can automate repetitive tasks, allowing marketing teams to focus on strategic activities
        that drive growth. The platform&#39;s analytics capabilities provide insights into customer behavior and campaign
        performance, enabling marketers to make <GlossaryLink slug="analytics">data-driven</GlossaryLink> decisions that enhance the effectiveness of their efforts.</p>
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
