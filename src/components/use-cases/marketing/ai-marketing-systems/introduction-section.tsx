import Link from "next/link";
import Image from "next/image";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function IntroductionSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">Many small businesses struggle with the high costs and inefficiencies of traditional marketing methods. Manual
        tasks such as managing customer data, executing campaigns, and analyzing market trends can lead to delays and
        errors. These challenges often result in missed opportunities and wasted resources. AI marketing systems offer a
        solution by automating these processes, allowing businesses to focus on strategic growth rather than operational
        details. Geek @ Your Spot LLC specializes in implementing these systems, helping businesses streamline their marketing
        efforts with AI-driven solutions that are both efficient and cost-effective.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        AI marketing systems transform how businesses approach their marketing strategies. By leveraging <GlossaryLink slug="machine-learning">machine learning</GlossaryLink>&nbsp;and <GlossaryLink slug="analytics">data analytics</GlossaryLink>, these systems can provide insights that drive more personalized and targeted campaigns. Geek @ Your Spot LLC assists clients in deploying these systems quickly, ensuring they are tailored to meet specific business
        needs. The result is a more agile marketing operation that can adapt swiftly to market changes, reduce errors, and
        enhance customer engagement.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        For example, in a hypothetical scenario, a small retail business using AI marketing systems could see its monthly
        campaign preparation time cut from two weeks to just a few days. This efficiency allows the business to allocate
        more resources towards creative strategy development and customer relationship management, ultimately leading to
        increased sales and customer satisfaction.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Geek @ Your Spot LLC offers a comprehensive suite of services to help businesses implement AI marketing systems. From
        initial data model design to ongoing support and change management, our consultancy ensures that the transition to
        AI-enhanced marketing processes is smooth and effective. Our goal is to empower businesses to not only keep pace
        with technological advancements but also to harness these tools for sustainable growth.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        AI marketing systems are not a one-size-fits-all solution. Geek @ Your Spot LLC works with each client to understand
        their unique challenges and objectives, crafting a customized approach that addresses specific pain points. Whether
        it&#39;s integrating AI tools into existing workflows or developing new strategies from the ground up, our
        consultancy provides the expertise needed to navigate the complexities of AI marketing systems.
      </p>
      <h3 id={`ai-content-creation-workflow${idSuffix}`} className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        AI Content Creation Workflow
      </h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">Content creation is often a resource-intensive part of marketing. AI can simplify this by automating the generation
        of written, visual, and audio content tailored to specific audiences. Geek @ Your Spot LLC helps businesses implement
        AI tools that streamline content development, ensuring consistency and relevancy across all channels.
      </p>
      <h4 id={`ai-content-creation-and-repurposing-for-small-businesses${idSuffix}`} className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        AI Content Creation and Repurposing for Small Businesses
      </h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">Small businesses can struggle to produce a steady stream of fresh content. AI tools can generate new content ideas
        and repurpose existing materials to keep marketing efforts dynamic without overwhelming resources. Geek @ Your Spot LLC
        guides businesses in setting up these tools, allowing them to maintain an engaging online presence with less effort.
      </p>
      <h3 id={`lead-capture-pipeline${idSuffix}`} className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        <GlossaryLink slug="lead-generation">Lead Capture Pipeline</GlossaryLink>
      </h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">Capturing leads efficiently is crucial for any business. AI marketing systems enhance lead capture by automating
        data collection and analysis, enabling businesses to identify potential customers more accurately. Geek @ Your Spot LLC
        assists in configuring these systems to ensure seamless integration with existing customer relationship management
        (<GlossaryLink slug="crm">CRM</GlossaryLink>) tools.</p>
      <h4 id={`automated-lead-nurturing${idSuffix}`} className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Automated Lead Nurturing</h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">Once leads are captured, nurturing them through the sales funnel is key. AI systems automate this process by
        delivering personalized content and follow-ups based on individual customer behaviors and preferences. Geek @ Your Spot LLC helps businesses set up these automated nurturing campaigns, improving conversion rates and customer
        satisfaction.</p>
      <h3 id={`ad-spend-optimization${idSuffix}`} className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Ad Spend Optimization</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">Effective&nbsp;<Link id={`use-cases-marketing-ai-marketing-systems-introduction-automated-ad-spend-optimization${idSuffix}`} href="/use-cases/marketing/automated-ad-spend-optimization" className="text-[#C83803] hover:underline">ad spend</Link>&nbsp;management is critical to maximizing marketing ROI. AI tools optimize ad placement and budget
        allocation by analyzing performance data and predicting future trends. Geek @ Your Spot LLC provides expertise in
        deploying these tools to ensure that advertising dollars are spent wisely, achieving better results with less waste.
      </p>
      <h4 id={`predictive-analytics-for-advertising${idSuffix}`} className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Predictive Analytics for Advertising</h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">Predictive analytics use historical data to forecast future ad performance, allowing businesses to make informed
        decisions about where to allocate their marketing budget. Geek @ Your Spot LLC helps businesses implement predictive
        analytics tools, enhancing their ability to plan and execute more effective advertising strategies.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="introduction-to-ai-marketing-systems" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Introduction to AI Marketing Systems
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center">
              <Image
                width="211"
                height="211"
                src="/images/marketing/use-cases/ai-marketing-systems/ai-marketing-systems-pillar-h2-introduction-to-ai-marketing-systems.avif"
                alt="Icons show data collection, analysis and automation as the three steps of an AI marketing system, under the title AI Marketing Systems." />
            </div>
            <div className="col-span-12">
              {body()}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="introduction-to-ai-marketing-systems-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Introduction to AI Marketing Systems
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center">
              <Image
                width="460"
                height="460"
                src="/images/marketing/use-cases/ai-marketing-systems/ai-marketing-systems-pillar-h2-introduction-to-ai-marketing-systems.avif"
                alt="Icons show data collection, analysis and automation as the three steps of an AI marketing system, under the title AI Marketing Systems." />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
