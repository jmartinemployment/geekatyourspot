import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ToolsSection() {
  return (
    <section className="min-h-screen bg-[#0A080D] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5">
          <div className="col-span-12">
            <h2 className="text-white pt-3 lg:text-4xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text-orange">
              Top AI Tools for <GlossaryLink slug="lead-generation" className="text-white hover:underline">Lead Generation</GlossaryLink> and Management
            </h2>
          </div>
          <div className="col-span-6">
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text-orange">
              HubSpot</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text-orange">
              HubSpot is a powerful platform that streamlines <GlossaryLink slug="lead-generation">lead management</GlossaryLink> by automating repetitive tasks and providing
              insightful analytics. For businesses struggling with manual lead tracking, HubSpot offers a cohesive approach that
              integrates contacts, marketing, and sales into one seamless system. This reduces human error and frees up valuable
              time for teams to focus on nurturing relationships and closing deals.
            </p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text-orange">
              <li>Automated workflows streamline lead nurturing by setting up triggers and sequences.</li>
              <li>Real-time analytics provide insights into lead behavior and engagement.</li>
              <li>Integrates with email marketing for cohesive communication strategies.</li>
            </ul>
            <h4 className="text-white pt-2 lg:text-2xl font-black font-[var(--font-sora)] shadow-text-orange">
              How an AI implementer helps with HubSpot
            </h4>
            <p className="pt-3 text-md font-normal text-white shadow-text-orange">
              Accelerated deployment in HubSpot focuses on quickly setting up the platform with pre-configured templates and
              workflows, reducing time-to-value. Data model design involves mapping out the interaction between leads, contacts,
              and deals, ensuring efficient data flow and fewer errors. Workflow and process configuration in HubSpot includes
              setting up automated sequences for approvals and lead scoring, optimizing the sales funnel. While HubSpot does not
              support custom code development directly, it allows for the use of APIs to extend functionality, enabling more
              tailored integrations. These efforts lead to faster go-live, a more stable platform, and ready-to-use automation.
            </p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text-orange">
              Salesforce Einstein
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text-orange">
              Salesforce Einstein integrates AI directly into Salesforce, helping businesses automate and optimize customer
              interactions. It enhances CRM by providing smarter insights, predictive analytics, and personalized recommendations,
              making it easier to convert leads into sales.
            </p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text-orange">
              <li>Automatic <GlossaryLink slug="sales-qualified-lead">lead scoring</GlossaryLink> to identify the most promising prospects.</li>
              <li><GlossaryLink slug="analytics">Predictive analytics</GlossaryLink> to forecast sales outcomes and guide decision-making.</li>
              <li>AI-driven recommendations for next-best actions to improve customer engagement.</li>
            </ul>
            <h4 className="text-white pt-2 lg:text-2xl font-black font-[var(--font-sora)] shadow-text-orange">
              How an AI implementer helps with Salesforce Einstein
            </h4>
            <p className="pt-3 text-md font-normal text-white shadow-text-orange">
              An AI implementer accelerates deployment of Salesforce Einstein by setting up pre-configured solutions and best
              practices, reducing time-to-value. They design data models that effectively map and structure CRM data for optimized
              AI processing, leading to fewer failed pilots. Implementers configure key workflows in Salesforce Einstein, such as
              approval chains and automation rules, ensuring production-ready automation. If customization is needed, they extend
              capabilities using Salesforce&#39;s native development tools, such as Apex or Lightning Web Components, to tailor
              the platform to specific business needs.
            </p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text-orange">
              Pardot
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text-orange">
              Pardot is a marketing automation tool that helps businesses streamline lead generation and management processes. It
              simplifies capturing leads, nurturing them, and converting them into sales, reducing the manual work involved.
            </p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text-orange">
              <li>Automated lead scoring to prioritize high-quality leads quickly.</li>
              <li>Advanced segmentation to target specific audiences with precision.</li>
              <li>Real-time analytics to track the performance of marketing campaigns.</li>
            </ul>
            <h4 className="text-white pt-2 lg:text-2xl font-black font-[var(--font-sora)] shadow-text-orange">
              How an AI implementer helps with Pardot
            </h4>
            <p className="pt-3 text-md font-normal text-white shadow-text-orange">
              An AI implementer accelerates Pardot deployment by setting up pre-configured templates and integrations that cut
              down the time to go live. They design a Pardot-specific data model that ensures accurate mapping between leads and
              their attributes, preventing data silos. For workflow configuration, they implement complex approval chains and
              automation rules that align with your business processes. Although Pardot does not support custom code development
              like some platforms, an AI implementer can still optimize existing features to meet unique business needs, leading
              to a faster realization of benefits and fewer failed pilots.
            </p>
          </div>
          <div className="col-span-6">
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text-orange">
              Marketo Engage
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text-orange">
              Marketo Engage transforms how businesses manage marketing automation and customer engagement. It offers tools for
              precise campaign execution, lead management, and personalization to enhance customer experiences. By automating and
              optimizing these processes, Marketo Engage helps businesses efficiently capture and nurture leads.
            </p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text-orange">
              <li>Automate email campaigns and lead nurturing processes to maintain consistent communication with prospects.</li>
              <li>Segment audiences based on behavior and interests for targeted engagement.</li>
              <li>Track and analyze <GlossaryLink slug="customer-journey">customer interactions across multiple touchpoints</GlossaryLink> for actionable insights.</li>
            </ul>
            <h4 className="text-white pt-2 lg:text-2xl font-black font-[var(--font-sora)] shadow-text-orange">
              How an AI implementer helps with Marketo Engage
            </h4>
            <p className="pt-3 text-md font-normal text-white shadow-text-orange">
              Accelerated deployment with Marketo Engage involves speeding up the setup of automated campaigns and workflows,
              reducing time-to-value. Expert data model design ensures that lead data is structured to maximize insight and
              engagement potential. Configuring workflows in Marketo Engage includes setting up automated routing rules and
              approval processes tailored to specific campaigns. While Marketo Engage does not provide a custom code layer, the
              platform&#39;s extensive API support allows for tailored integrations and data synchronization. With these measures,
              businesses see fewer failed pilots and can achieve production-ready automation more swiftly.
            </p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text-orange">
              Zoho CRM
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text-orange">
              Zoho CRM offers businesses a comprehensive tool to manage customer relationships, streamline sales processes, and
              enhance lead generation efforts. By using Zoho CRM, teams can automate repetitive tasks, reduce manual data entry
              errors, and provide a more personalized customer experience. This platform is designed to help businesses boost
              sales efficiency and improve customer satisfaction.
            </p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text-orange">
              <li>Automated workflows streamline tasks like lead assignment and follow-ups, saving time and reducing errors.</li>
              <li>Customizable dashboards and reports provide insights into sales performance and customer interactions.</li>
              <li>Integration capabilities with popular tools like Slack and Google Workspace enhance collaboration and
                communication.
              </li>
            </ul>
            <h4 className="text-white pt-2 lg:text-2xl font-black font-[var(--font-sora)] shadow-text-orange">
              How an AI implementer helps with Zoho CRM
            </h4>
            <p className="pt-3 text-md font-normal text-white shadow-text-orange">
              An AI implementer accelerates the deployment of Zoho CRM by ensuring seamless data migration and system
              integration, reducing the time to go-live. They design a data model that accurately reflects the client&apos;s business
              needs, optimizing the CRM&apos;s data structure for best performance. Implementers also configure Zoho CRM&#39;s
              workflows and automation logic, such as lead routing and approval processes, to ensure efficient operations. For
              businesses needing specific capabilities, implementers can develop custom functions using Zoho&#39;s scripting
              language, allowing for tailored solutions. These actions help achieve faster time-to-value, fewer implementation
              setbacks, and robust, production-ready CRM systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
