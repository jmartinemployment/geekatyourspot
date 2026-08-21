export default function OverviewToolSection() {
  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-4xl font-black font-[var(--font-sora)] shadow-text">
                Overview</h2>
              <p className="text-md text-white shadow-text pt-3">Salesforce Pardot is a comprehensive marketing automation platform tailored for businesses looking to enhance their
                marketing campaigns through AI-driven solutions. It offers a suite of tools that facilitate lead generation,
                nurturing, and conversion, allowing marketing teams to redirect their efforts from manual tasks to strategic
                initiatives. By leveraging AI, Salesforce Pardot helps organizations automate repetitive marketing tasks, enabling
                more efficient campaign management and improved customer engagement.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Streamlined lead management: Automate lead scoring and nurturing processes to focus on high-value prospects.
                </li>
                <li>Enhanced email marketing: Create personalized email campaigns with dynamic content tailored to individual
                  customer preferences.</li>
                <li>Advanced reporting: Gain insights into campaign performance with detailed analytics and reporting tools.</li>
                <li>AI-driven insights: Utilize AI to predict customer behavior and optimize marketing strategies.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">Salesforce Pardot is designed to be user-friendly, making it accessible for teams without extensive technical
                expertise. Its integration with Salesforce CRM further enhances its capabilities, providing a seamless experience
                for managing customer data and interactions. This integration allows for a unified view of customer journeys,
                enabling businesses to make informed decisions based on comprehensive data insights.For small businesses, Salesforce
                Pardot offers affordable plans that scale with growth, ensuring that even smaller teams can leverage advanced
                marketing automation tools without significant upfront investment. The platform&#39;s focus on delivering tangible
                results, such as saved time, reduced errors, and increased sales, makes it a valuable asset for any marketing team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
