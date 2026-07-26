import { px } from "motion/react";
import Image from "next/image";

export default function BenefitsSection() {


  return (
    <section className="min-h-screen bg-[#8C4E2A] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
          <div className="col-span-5">
            <Image
              width="460"
              height="460"
              src="/images/marketing/use-cases/intelligent-lead-capture-pipeline/intelligent-lead-capture-pipeline-pillar-h2-benefits-of-implementing-ai-in-lead-capture.avif"
              alt="Benefits of Automating Accounts Payable"
              style={{ width: '100%', height: '460' }} />
          </div>
          <div className="col-span-7">
            <h2 className="text-white pt-3 lg:text-4xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Benefits of Implementing AI in Lead Capture
            </h2>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Manual lead capture processes are often fraught with errors and inefficiencies that can cost businesses time and
              potential revenue. Mistakes in data entry or delayed follow-ups can mean losing leads to competitors. Companies may
              also find their sales teams overwhelmed by the volume of unqualified leads, leading to wasted effort and
              frustration. Implementing AI can address these pain points, offering more precise and efficient lead capture.
            </p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text">
              <li>Data entry reallocation: AI automates data capture, allowing sales teams to focus on engaging with leads rather
                than inputting data.</li>
              <li>Error reduction: Automated validation ensures lead information is accurate from the start, minimizing costly
                follow-up corrections.</li>
              <li>Faster response times: AI-driven notifications alert sales reps to new leads instantly, enabling quicker
                follow-ups and reducing lead drop-off risk.</li>
              <li>Prioritized leads: AI tools can rank leads based on predefined criteria, ensuring that sales teams prioritize
                high-potential opportunities.</li>
              <li>Increased conversion rates: In a hypothetical mid-sized tech firm, AI-led improvements in lead quality and speed
                of response led to a 20% increase in conversion rates.</li>
            </ul>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Geek At Your Spot, as an AI implementation consultancy, plays a crucial role in ensuring these benefits are
              realized. By designing a robust data model, they enable businesses to map customer information accurately, which is
              essential for personalized lead nurturing. Their expertise in workflow configuration helps automate approval chains
              and routing, making sure that leads are assigned to the right sales reps promptly.
            </p>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Integration is another area where Geek At Your Spot excels. They connect different business systems so that AI
              tools can access necessary data without hiccups, ensuring a seamless flow from lead capture to sales conversion.
              Furthermore, they assist with change management, guiding teams through the transition and promoting widespread
              adoption of the new technology.
            </p>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Ultimately, the implementation of AI in lead capture not only streamlines operations but also empowers sales teams
              to perform their roles more effectively. By reducing manual workload, correcting data issues at the source, and
              ensuring a cohesive integration across platforms, Geek At Your Spot enables businesses to drive more qualified leads
              through their pipelines, resulting in increased sales and reduced operational costs.
            </p>
          </div>

          <div className="col-span-12">
            
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">
              Optimizing Data Models for Better Lead Capture
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Correctly mapping data models is foundational to effective AI implementation. Misaligned data can lead to incorrect
              insights and poor lead handling. Geek At Your Spot focuses on designing data models that reflect the unique customer
              journey of each client. This ensures that AI tools have access to relevant and accurate data, allowing for more
              personalized interactions.
            </p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text">
              <li>Align customer data fields with AI input requirements.</li>
              <li>Integrate data sources to provide a comprehensive view of leads.</li>
              <li>Use feedback loops to continuously refine data accuracy.</li>
            </ul>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">
              Streamlining Workflow Configuration
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Workflow configuration is critical to maximize the benefits of AI in lead capture. Without it, sales teams may
              continue to face bottlenecks or miscommunication. Geek At Your Spot configures workflows to automate lead
              assignments and approval processes, ensuring that every lead is handled efficiently and by the right team member.
            </p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text">
              <li>Automate lead routing based on predefined criteria.</li>
              <li>Set up automated alerts for lead follow-ups.</li>
              <li>Implement approval workflows to streamline lead qualification.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>);
}
