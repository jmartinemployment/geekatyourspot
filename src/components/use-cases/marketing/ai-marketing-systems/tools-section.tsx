import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScrewdriverWrench,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";

export default function ToolsSection() {
  return (
    <section className="min-h-screen bg-[#0B162A] text-white">
      <div className="container py-5">
        <div className="flex justify-center items-center">
          <div className="col-span-9 ">
            <h2 id="top-ai-tools-for-marketing-automation" className="text-white pt-3 lg:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text-dark-blue">
              Top AI Tools for Marketing Automation</h2>
          </div>
          <div className="col-span-3">
            <FontAwesomeIcon
              icon={faScrewdriverWrench}
              width={128}
              height={128}
              className="text-[#C83803]"
            />
          </div>
        </div>
        <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5">

          <div className="col-span-6">
            <h3 id="hubspot" className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text-dark-blue"><a href="https://www.geekatyourspot.com/tools/marketing/hubspot">HubSpot</a></h3>
            <p className="pt-3 text-md font-normal text-white shadow-text-dark-blue">HubSpot is a comprehensive platform that integrates marketing, sales, and service tools into a single ecosystem. It
              helps businesses automate and personalize their marketing efforts, saving time and increasing efficiency. This makes
              it especially valuable for small businesses looking to scale their operations without scaling up costs.</p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text">
              <li>Automate repetitive marketing tasks like email campaigns and social media scheduling with ease.</li>
              <li>Utilize advanced analytics to gain insights into customer behavior and refine marketing strategies.</li>
              <li>Integrate seamlessly with CRM systems to enhance lead management and customer relationships.</li>
            </ul>
            <h4 id="how-an-ai-implementer-helps-with-hubspot" className="text-white pt-2 lg:text-2xl font-black font-[var(--font-sora)] shadow-text-dark-blue">How an AI implementer helps with HubSpot</h4>
            <p className="pt-3 text-md font-normal text-white shadow-text-dark-blue">An AI implementer accelerates deployment by setting up HubSpot environments swiftly, ensuring businesses start
              seeing benefits sooner. They design the data model to map customer interactions and preferences accurately,
              preventing data silos. Implementers configure workflows by establishing automated approval processes and routing
              rules tailored to specific business needs, enhancing operational efficiency. While HubSpot lacks a built-in custom
              code layer, implementers can leverage its open API to integrate third-party tools, achieving a tailored fit for
              unique business processes. These efforts result in a faster time-to-value, fewer pilot failures, and ready-to-use
              automation that scales with business growth.</p>
            <h3 id="marketo" className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text-dark-blue"><a href="https://www.geekatyourspot.com/tools/marketing/marketo">Marketo</a></h3>
            <p className="pt-3 text-md font-normal text-white shadow-text-dark-blue">Marketo is a powerful platform for automating marketing efforts, helping businesses streamline campaigns and
              improve their reach. It provides tools for managing customer engagement, personalizing content, and tracking
              results. By utilizing Marketo, businesses can efficiently nurture leads and convert them into loyal customers.</p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text">
              <li>Automated email marketing campaigns tailored to customer behavior.</li>
              <li>Advanced analytics to measure campaign performance and ROI.</li>
              <li>Seamless integration with CRM systems for better data management.</li>
            </ul>
            <h4 id="how-an-ai-implementer-helps-with-marketo" className="text-white pt-2 lg:text-2xl font-black font-[var(--font-sora)] shadow-text-dark-blue">How an AI implementer helps with Marketo</h4>
            <p className="pt-3 text-md font-normal text-white shadow-text-dark-blue">Accelerating deployment for Marketo involves setting up predefined templates and workflows that align with industry
              best practices, reducing the time to go live. Proper data model design is crucial, as it ensures that customer data
              is organized effectively for targeted campaigns and analytics. Configuring workflows and processes in Marketo
              includes setting up lead scoring models, nurturing paths, and triggered actions tailored to specific customer
              journeys. While Marketo does not inherently support custom code development, an implementer can leverage its API for
              integrations and custom functionality, ensuring the platform meets unique business needs. These focused efforts lead
              to quicker realization of benefits, fewer implementation hiccups, and a smoother path to robust marketing
              automation.</p>
            <h3 id="salesforce-pardot" className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text-dark-blue"><a href="https://www.geekatyourspot.com/tools/marketing/salesforce-pardot">Salesforce
              Pardot</a></h3>
            <p className="pt-3 text-md font-normal text-white shadow-text-dark-blue">Salesforce Pardot is a powerful marketing automation platform designed to help businesses efficiently manage their
              marketing campaigns. It streamlines lead generation, nurturing, and conversion, making it easier for marketing teams
              to focus on strategic initiatives rather than manual tasks.</p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text">
              <li>Automates lead scoring and grading to prioritize high-quality leads.</li>
              <li>Provides in-depth analytics to measure campaign effectiveness and ROI.</li>
              <li>Integrates seamlessly with Salesforce CRM for unified data management.</li>
            </ul>
            <h4 id="how-an-ai-implementer-helps-with-salesforce-pardot" className="text-white pt-2 lg:text-2xl font-black font-[var(--font-sora)] shadow-text-dark-blue">How an AI implementer helps with Salesforce Pardot</h4>
            <p className="pt-3 text-md font-normal text-white shadow-text-dark-blue">Accelerated deployment of Salesforce Pardot is achieved through tailored implementation plans that align with your
              specific business needs, reducing time-to-value. An AI implementer ensures the data model design is optimized for
              lead management and segmentation, allowing for precise targeting and personalized marketing efforts. Workflow and
              process configurations are meticulously set up, including automated approval chains and custom routing rules, to
              enhance operational efficiency. While Salesforce Pardot does not have a traditional custom code layer, its
              extensibility allows for robust integration with other applications, ensuring seamless workflow automation and data
              synchronization. These tailored solutions lead to fewer failed pilots and production-ready automation.</p>

          </div>
          <div className="col-span-6">
            <h3 id="activecampaign" className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text-dark-blue"><a href="https://www.geekatyourspot.com/tools/marketing/activecampaign">ActiveCampaign</a>
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text-dark-blue">ActiveCampaign is a marketing automation tool that helps businesses streamline their customer engagement through
              personalized email campaigns, targeted messaging, and customer relationship management. It supports small businesses
              by simplifying complex marketing tasks, leading to more effective customer interactions.</p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text">
              <li>Automates email marketing campaigns to deliver personalized content based on customer behavior.</li>
              <li>Provides customer segmentation tools to tailor messages to specific audience groups.</li>
              <li>Offers CRM integration to manage customer data and interactions seamlessly.</li>
            </ul>
            <h4 id="how-an-ai-implementer-helps-with-activecampaign" className="text-white pt-2 lg:text-2xl font-black font-[var(--font-sora)] shadow-text-dark-blue">How an AI implementer helps with ActiveCampaign</h4>
            <p className="pt-3 text-md font-normal text-white shadow-text-dark-blue">An AI implementer accelerates deployment by quickly configuring ActiveCampaign&#39;s predefined templates and
              workflows, reducing time-to-value. They design data models that efficiently map customer interactions to meaningful
              insights, ensuring fewer failed pilots. Workflow configuration is optimized with precise automation logic and
              routing rules tailored to ActiveCampaign&#39;s capabilities, making production-ready automation a reality. While
              ActiveCampaign does not offer a custom coding layer, skilled implementers leverage its robust API for integrations,
              enhancing overall system functionality.</p>
            <h3 id="mailchimp" className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text-dark-blue"><a href="https://www.geekatyourspot.com/tools/marketing/mailchimp">Mailchimp</a></h3>
            <p className="pt-3 text-md font-normal text-white shadow-text-dark-blue">Mailchimp is a versatile tool for email marketing automation, especially helpful for small businesses aiming to
              streamline their outreach efforts. It allows users to create targeted email campaigns, track customer engagement,
              and analyze performance metrics, all from a single platform. This ease of use saves time and reduces manual effort.
            </p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text">
              <li>Automated email sequences for personalized customer journeys.</li>
              <li>Advanced segmentation to reach the right audience with the right message.</li>
              <li>Integration with e-commerce platforms for seamless sales promotions.</li>
            </ul>
            <h4 id="how-an-ai-implementer-helps-with-mailchimp" className="text-white pt-2 lg:text-2xl font-black font-[var(--font-sora)] shadow-text-dark-blue">How an AI implementer helps with Mailchimp</h4>
            <p className="pt-3 text-md font-normal text-white shadow-text-dark-blue">Accelerated deployment is achieved by configuring Mailchimp’s API integrations quickly, reducing time-to-value.
              Data model design ensures proper audience segmentation by mapping customer data to Mailchimp’s fields accurately.
              Workflow configuration involves setting up automated email sequences and triggers to optimize engagement. While
              Mailchimp doesn’t support custom code development like some platforms, these configurations help in launching
              effective, production-ready campaigns swiftly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
