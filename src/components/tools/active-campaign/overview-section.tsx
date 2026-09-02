import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function OverviewToolSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">ActiveCampaign is a comprehensive <GlossaryLink slug="marketing-automation">marketing automation</GlossaryLink> platform designed to help businesses enhance customer
        engagement through personalized email campaigns, targeted messaging, and effective customer relationship management.
        Tailored for small to medium-sized enterprises, it simplifies complex marketing tasks, enabling companies to focus
        on building meaningful relationships with their customers. By automating repetitive tasks, businesses can save time
        and reduce costs, ultimately driving more sales and improving customer satisfaction.</p>
      <p className="text-md text-white shadow-text pt-3">ActiveCampaign offers a powerful suite of tools that integrate seamlessly into existing workflows, providing
        businesses with the flexibility to create customized marketing strategies. Its intuitive interface ensures that even
        users with limited technical expertise can effectively leverage its capabilities. The platform&#39;s robust
        analytics and reporting features offer insights into campaign performance, allowing businesses to make <GlossaryLink slug="analytics">data-driven</GlossaryLink>
        decisions that enhance their marketing efforts.</p>
      <p className="text-md text-white shadow-text pt-3">One of the key benefits of ActiveCampaign is its ability to deliver highly <GlossaryLink slug="personalized-marketing">personalized content</GlossaryLink> to customers at
        scale. By utilizing advanced segmentation and targeting features, businesses can ensure that their messages reach
        the right audience at the right time. This level of personalization not only improves engagement rates but also
        fosters stronger customer loyalty.</p>
      <p className="text-md text-white shadow-text pt-3">ActiveCampaign&#39;s affordability makes it an attractive option for small businesses looking to maximize their
        marketing impact without breaking the bank. With a range of pricing plans and scalable features, businesses can
        choose a package that best fits their needs and budget. The platform&#39;s focus on delivering tangible results,
        such as increased sales and improved customer satisfaction, makes it a valuable asset for any business looking to
        enhance its marketing capabilities.</p>
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
