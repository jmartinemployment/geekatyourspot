export default function KeyCapabilitiesSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
          <div className="col-span-7">
            <h2 className="text-white lg:text-4xl font-black font-[var(--font-sora)] shadow-text">
              Key Capabilities</h2>
            <p className="text-md text-white shadow-text pt-3">HubSpot provides a range of capabilities that make it a versatile tool for businesses looking to enhance their
              marketing and sales processes. These capabilities include:</p>
            <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
              <li>Marketing Automation: HubSpot allows businesses to automate repetitive marketing tasks such as email campaigns,
                social media posting, and lead nurturing. This automation not only saves time but also ensures consistency in
                marketing efforts.</li>
              <li>Customer Relationship Management (CRM): The CRM system in HubSpot is designed to give businesses a complete view
                of their customer interactions. This helps in managing leads, tracking sales activities, and maintaining customer
                relationships effectively.</li>
              <li>Analytics and Reporting: HubSpot offers robust analytics tools that provide insights into marketing performance,
                customer behavior, and sales trends. These insights help businesses make informed decisions and optimize their
                strategies.</li>
              <li>Content Management System (CMS): With HubSpot&#39;s CMS, businesses can create, manage, and optimize their
                website content to improve SEO and engage visitors. The CMS is user-friendly and integrates seamlessly with other
                HubSpot tools.</li>
              <li>Customer Service Tools: HubSpot includes features for customer support such as ticketing, live chat, and
                feedback collection. These tools help businesses provide timely and effective customer service, enhancing customer
                satisfaction.</li>
            </ul>
            <p className="text-md text-white shadow-text pt-3">These capabilities enable businesses to create a cohesive marketing and sales strategy, improving overall
              efficiency and effectiveness. By using HubSpot, companies can focus more on strategy and less on the manual
              execution of tasks.</p>
          </div>
          <div className="col-span-5"></div>
        </div>
      </div>
    </section>
  );
}
