export default function OverviewToolSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">HubSpot is a robust platform designed to streamline marketing, sales, and customer service processes for businesses
        of all sizes. Its comprehensive suite of tools is particularly beneficial for small businesses aiming to enhance
        their marketing strategies and customer engagement without incurring significant additional costs. By integrating
        various functions into a single ecosystem, HubSpot allows businesses to automate routine tasks, personalize customer
        interactions, and efficiently manage their marketing campaigns.</p>
      <p className="text-md text-white shadow-text pt-3">One of HubSpot&#39;s key strengths is its ability to automate marketing workflows, which helps businesses save time
        and reduce manual effort. This automation is achieved through features like email marketing, social media
        management, and customer segmentation, all of which are designed to enhance the efficiency of marketing teams.
        Additionally, HubSpot provides powerful analytics tools that offer insights into customer behavior and campaign
        performance, enabling businesses to make data-driven decisions.</p>
      <p className="text-md text-white shadow-text pt-3">The platform also supports sales and service teams by providing tools for lead management, customer support, and
        relationship building. HubSpot&#39;s CRM system is central to these capabilities, offering a unified view of
        customer interactions across various touchpoints. This integration ensures that all teams within a business can
        access the information they need to deliver personalized and effective customer experiences.</p>
      <p className="text-md text-white shadow-text pt-3">For small businesses, HubSpot offers affordable plans that scale with their growth. This makes it an ideal choice
        for companies looking to expand their marketing efforts without a proportional increase in costs. By leveraging
        HubSpot&#39;s tools, businesses can not only improve their operational efficiency but also increase sales and
        customer satisfaction.</p>
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
