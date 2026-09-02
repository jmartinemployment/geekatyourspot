import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

const linkClass = "text-[#0B162A] hover:underline";

export default function EnrichTheLeadInstantlySection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">In the fast-paced world of marketing, simply capturing a lead isn't enough. Without the right context and information, a lead can quickly lose its value, costing your business time and potential revenue. This is where smart <GlossaryLink slug="chatbot" className={linkClass}>chatbots</GlossaryLink>, like those provided by <Link href="/tools/marketing/bot-penguin" className={linkClass}>BotPenguin</Link>, come into play, ensuring that each captured lead is enriched with valuable data instantly, allowing your sales team to make informed decisions.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">Imagine a scenario where your marketing team can access detailed insights about a potential customer immediately after they engage with your chatbot. This could include their interests, past interactions, and demographic information. Such enriched data transforms a basic lead into a highly actionable opportunity, reducing the time your team spends on preliminary research.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">Smart chatbots leverage advanced AI capabilities to personalize interactions and gather data through engaging conversations. For instance, <Link href="/tools/marketing/many-chat" className={linkClass}>ManyChat</Link> provides robust automation tools that help capture emails or phone numbers directly from social media interactions, enriching leads right from the first point of contact. This ensures that the leads entering your pipeline are not just numbers but well-documented profiles ready for targeted follow-up.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="integrating-ai">Integrating AI for Lead Enrichment</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">AI integration in lead enrichment processes allows businesses to extract more value from each interaction. By using AI-powered chatbots, you can automate the collection of data such as customer preferences, behavioral patterns, and purchase intent. This data then feeds into your <GlossaryLink slug="crm" className={linkClass}>CRM</GlossaryLink>, creating a comprehensive profile for every lead.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="improving-sales-efficiency">Improving Sales Efficiency</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">With enriched lead data, sales teams can quickly identify the most promising leads, reducing the time spent on unqualified prospects. By incorporating lead enrichment into your workflow with tools like <Link href="/tools/marketing/pipedrive" className={linkClass}>Pipedrive</Link>, you can set up a multi-touch cadence that integrates enriched data into your lead management process. This efficiency boost allows for more strategic allocation of resources, ultimately driving higher <GlossaryLink slug="conversion-funnel" className={linkClass}>conversion rates</GlossaryLink>.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="enrich-the-lead">
                Enrich the Lead Instantly
              </h2>
            </div>
            <div className="col-span-5"></div>
            <div className="col-span-12">
              {body}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="enrich-the-lead">
                Enrich the Lead Instantly
              </h2>
              {body}
            </div>
            <div className="col-span-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
