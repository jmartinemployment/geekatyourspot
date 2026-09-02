import Link from "next/link";

export default function BestPracticesSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Without effective lead scoring, small businesses can waste valuable time and resources on leads that are unlikely to convert. This can lead to missed opportunities and decreased sales. By implementing best practices in lead scoring, businesses can prioritize high-quality leads and improve their sales efficiency. Geek At Your Spot leverages AI-driven systems to help clients establish robust lead scoring models, ensuring that every lead is evaluated accurately and efficiently.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        One of the key practices in lead scoring is to start with a clear understanding of your ideal customer profile. Without this, businesses may find themselves chasing leads that do not align with their target market, leading to lower conversion rates. Geek At Your Spot assists businesses in defining their ideal customer profiles by analyzing existing customer data and market trends, which informs the creation of precise lead scoring models.
      </p>
      <h3 id="data-driven-scoring-criteria" className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Data-Driven Scoring Criteria
      </h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Many businesses struggle with subjective lead scoring, which can result in inconsistent and unreliable scores. To counter this, Geek At Your Spot emphasizes the use of data-driven scoring criteria. By leveraging AI and machine learning algorithms, businesses can analyze patterns and behaviors that indicate a lead&apos;s likelihood to convert. This data-driven approach removes bias and enhances the accuracy of lead scores.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        To implement data-driven scoring, Geek At Your Spot uses tools like&nbsp;
        <Link id="tools-marketing-6sense" href="/tools/marketing/6sense" className="text-[#0B162A] hover:underline">
          6sense
        </Link>
        , which provides predictive insights into lead behavior and engagement. This allows for dynamic scoring that adapts to real-time data, ensuring that lead scores reflect the most current information available.
      </p>
      <h4 id="integrating-diverse-data-sources" className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Integrating Diverse Data Sources
      </h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Lead scoring is only as good as the data it uses. Integrating diverse data sources, such as CRM systems, email marketing platforms, and social media interactions, is crucial for comprehensive lead evaluation. Without this integration, lead scores may be incomplete or misleading.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Geek At Your Spot excels in integrating tools like&nbsp;
        <Link id="tools-marketing-pipedrive" href="/tools/marketing/pipedrive" className="text-[#0B162A] hover:underline">
          Pipedrive
        </Link>
        &nbsp;with other marketing and sales platforms, ensuring that all relevant data is captured and utilized in the lead scoring process. This holistic view allows businesses to prioritize leads more effectively and focus on those with the highest conversion potential.
      </p>
      <h4 id="continuous-model-refinement" className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Continuous Model Refinement
      </h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        A static lead scoring model can quickly become outdated. As market conditions and customer behaviors change, so too should the scoring criteria. Geek At Your Spot supports continuous model refinement by monitoring scoring performance and adjusting criteria based on new insights and trends.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        This iterative process ensures that lead scoring models remain relevant and accurate, helping businesses stay ahead of the competition. By using tools like&nbsp;
        <Link id="tools-marketing-lead-squared" href="/tools/marketing/lead-squared" className="text-[#0B162A] hover:underline">
          LeadSquared
        </Link>
        , businesses can automate this refinement process, making adjustments as needed without manual intervention.
      </p>
      <h3 id="automating-lead-scoring-processes" className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Automating Lead Scoring Processes
      </h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Manual lead scoring is time-consuming and prone to human error. Automating these processes not only saves time but also enhances the accuracy and consistency of lead scores. Automation allows sales teams to focus on engaging with leads rather than scoring them.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Geek At Your Spot uses platforms like&nbsp;
        <Link id="tools-marketing-active-campaign" href="/tools/marketing/active-campaign" className="text-[#0B162A] hover:underline">
          ActiveCampaign
        </Link>
        &nbsp;to automate lead scoring processes. This tool can integrate with existing systems to automatically update lead scores based on predefined criteria and real-time data, significantly reducing the manual workload.
      </p>
      <h4 id="streamlining-workflow-with-automation" className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Streamlining Workflow with Automation
      </h4>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Automated lead scoring eliminates the need for repetitive manual tasks, freeing up valuable time for sales teams.</li>
        <li>Automation ensures that all leads are scored consistently, reducing the risk of human error and bias.</li>
        <li>Integrating automated scoring with CRM systems allows for seamless updates and real-time insights.</li>
      </ul>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        By streamlining these workflows, Geek At Your Spot helps businesses allocate resources more efficiently, enhancing overall productivity and sales effectiveness.
      </p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 id="best-practices-for-lead-scoring" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Best Practices for Lead Scoring
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center">
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 id="best-practices-for-lead-scoring" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Best Practices for Lead Scoring
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
