import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function MapLeadSourceSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        If your small business struggles to keep track of where leads are coming from, you&apos;re not alone. Many businesses lose potential clients simply because they can&apos;t efficiently manage various lead sources. This can result in missed opportunities and wasted marketing efforts. Fortunately, AI-driven solutions can help you connect all your lead sources into a single, manageable system, allowing you to focus on closing deals rather than tracking down information.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        To start, businesses should integrate multiple lead channels into one comprehensive <GlossaryLink slug="crm">CRM</GlossaryLink> system. This includes website forms, landing pages, chatbots, Meta and Google lead forms, inbound calls, email inquiries, social media direct messages, referrals, and appointments. By doing so, you create a centralized hub for all your lead data, making it easier to analyze and act upon.
      </p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Connect website forms and landing pages directly to your CRM for real-time data capture.</li>
        <li>Utilize chatbots to engage visitors and automatically route their contact information into your system.</li>
        <li>Integrate Meta and Google lead forms to streamline social media inquiries.</li>
        <li>Ensure inbound calls and email inquiries are logged automatically for consistent follow-up.</li>
        <li>Track social media direct messages and referrals to maintain a pipeline of potential leads.</li>
      </ul>
      <h3 id="leveraging-crm-tools" className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Leveraging CRM Tools
      </h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        A robust <GlossaryLink slug="crm">CRM</GlossaryLink> system is crucial for mapping lead sources effectively. Tools like ActiveCampaign and Pipedrive offer functionalities that can streamline this process. ActiveCampaign, for instance, provides seamless integration with over 1,000 apps, ensuring that all your marketing channels are connected. This allows you to automate tasks and focus on nurturing leads rather than manual data entry.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        On the other hand, Pipedrive excels in visualizing your sales pipeline, making it easier to see where each lead originated and where it stands in the sales process. By using these tools, small businesses can gain a clearer picture of their lead generation efforts, helping to improve conversion rates and reduce customer acquisition costs.
      </p>
      <h4 id="integrating-with-activecampaign" className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Integrating with ActiveCampaign
      </h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        ActiveCampaign&apos;s strength lies in its ability to automate every marketing channel. By connecting your <GlossaryLink slug="crm">CRM</GlossaryLink> with tools like ChatGPT and Claude, you can take action on your marketing data directly within these platforms. This eliminates the need for data export and manual updates, saving you time and reducing errors.
      </p>
      <h4 id="visualizing-leads-with-pipedrive" className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Visualizing Leads with Pipedrive
      </h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Pipedrive offers a user-friendly interface that helps small businesses visualize their entire lead pipeline. By mapping out each step of the sales journey, you can easily identify which lead sources are most effective and where you might need to focus more effort.
      </p>
      <h3 id="the-role-of-ai-in-lead-mapping" className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        The Role of AI in Lead Mapping
      </h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        AI plays an integral role in mapping lead sources by providing insights that may not be immediately visible through manual analysis. Tools like&nbsp;
        <Link id="tools-marketing-6sense" href="/tools/marketing/6sense" className="text-[#C83803] hover:underline">
          6sense
        </Link>
        &nbsp;offer predictive intelligence to help businesses understand potential customer intent, allowing for better targeting and more personalized engagement.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        By leveraging AI, businesses can automatically categorize leads based on source and behavior, enabling more effective <GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink> and prioritization. This not only saves time but also enhances the efficiency of your sales team, leading to faster conversions.
      </p>
      <h4 id="predictive-intelligence-with-6sense" className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Predictive Intelligence with 6sense
      </h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        6sense uses AI to predict which leads are most likely to convert, based on historical data and current interactions. By understanding these patterns, businesses can allocate resources more effectively to high-potential leads, optimizing the sales process.
      </p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 id="map-every-lead-source" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Map every lead source.
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center">
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 id="map-every-lead-source" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Map every lead source.
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
