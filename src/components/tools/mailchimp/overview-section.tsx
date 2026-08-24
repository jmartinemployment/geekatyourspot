export default function OverviewToolSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">Mailchimp is a leading platform in the realm of email marketing automation, designed to help businesses of all
        sizes enhance their marketing efforts. It offers a comprehensive suite of tools that enable users to create,
        execute, and analyze email marketing campaigns effectively. With Mailchimp, businesses can streamline their outreach
        processes, making it easier to connect with their audience and increase engagement.</p>
      <p className="text-md text-white shadow-text pt-3">The platform is particularly beneficial for small businesses looking to optimize their marketing strategies without
        the need for extensive technical expertise. Mailchimp provides a user-friendly interface that simplifies the process
        of designing and sending emails. Users can leverage customizable templates to create professional-looking emails
        that resonate with their target audience.</p>
      <p className="text-md text-white shadow-text pt-3">Moreover, Mailchimp&#39;s analytics capabilities allow businesses to track the performance of their campaigns in
        real-time. This includes metrics such as open rates, click-through rates, and conversion rates, which are crucial
        for understanding customer behavior and refining marketing strategies. By providing these insights, Mailchimp helps
        businesses make data-driven decisions that can lead to improved customer engagement and increased sales.</p>
      <p className="text-md text-white shadow-text pt-3">In addition to its core email marketing features, Mailchimp offers integrations with various other platforms,
        enhancing its functionality and allowing for a more cohesive marketing approach. The platform also supports
        automation, enabling businesses to set up automated email sequences that save time and ensure consistent
        communication with customers.</p>
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
