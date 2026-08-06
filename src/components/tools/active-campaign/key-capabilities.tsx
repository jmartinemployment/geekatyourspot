import Image from "next/image";

export default function KeyCapabilitiesSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
          <div className="col-span-7">
            <h2 className="text-white lg:text-4xl font-black font-[var(--font-sora)] shadow-text">
              Key Capabilities</h2>
            <p className="pt-3 text-md font-normal text-white shadow-text">ActiveCampaign provides a range of features designed to streamline marketing efforts and improve customer
              engagement. Here are some of the key capabilities that make it a powerful tool for businesses:</p>
            <ul className="list-disc list-outside pl-3 space-y-2 pt-3">
              <li>Email Marketing Automation: ActiveCampaign allows businesses to automate their email marketing campaigns,
                ensuring that messages are sent at optimal times based on customer behavior and preferences. This feature helps
                businesses maintain consistent communication with their audience, leading to higher engagement and conversion
                rates.</li>
              <li>Customer Segmentation: With advanced segmentation tools, businesses can categorize their audience based on
                various criteria such as demographics, purchase history, and engagement levels. This allows for more targeted and
                effective marketing strategies.</li>
              <li>CRM Integration: ActiveCampaign integrates seamlessly with customer relationship management (CRM) systems,
                providing businesses with a holistic view of their customer interactions. This integration supports more
                personalized and informed communication with customers.</li>
              <li>Advanced Analytics: The platform offers robust analytics and reporting tools that provide insights into campaign
                performance. Businesses can track metrics such as open rates, click-through rates, and conversion rates to assess
                the effectiveness of their marketing efforts.</li>
              <li>Landing Page Builder: ActiveCampaign includes a landing page builder that allows businesses to create
                high-converting landing pages without the need for extensive coding knowledge. This feature supports lead
                generation and enhances the overall marketing strategy.</li>
              <li>SMS Marketing: In addition to email, ActiveCampaign supports SMS marketing, enabling businesses to reach their
                audience through multiple channels. This multi-channel approach increases the likelihood of message delivery and
                engagement.</li>
              <li>Automated Workflows: The platform&#39;s workflow automation capabilities allow businesses to create complex,
                automated processes that streamline operations and reduce manual effort. This feature is particularly useful for
                nurturing leads and managing customer journeys.</li>
            </ul>
          </div>
          <div className="col-span-5"></div>
        </div>
      </div>
    </section>
  );
}
