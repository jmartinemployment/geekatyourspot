export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="frequently-asked-questions" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is Copy.ai?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Copy.ai started as an AI writing tool for generating copy. It has now become an AI-native
              Go-to-Market platform that connects sales, marketing, and operations teams. The platform helps
              automate complex business processes like personalized sales prospecting, content engines, data
              enrichment, and system integrations.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is a &quot;Workflow&quot; in Copy.ai?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              A Workflow in Copy.ai is an AI-powered sequence of actions that codifies a business process.
              Instead of running one-off text prompts, users can set up a workflow to scrape URLs, scan
              websites, pull data from internal sources, and generate multi-step outputs instantly.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What are Workflow Credits and how do they work?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              A Workflow Credit is the unit of computational power needed to run workflow tasks, such as
              crawling websites, calling APIs, or generating text. The number of credits used depends on how
              many steps and how much data processing the workflow requires.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is the &quot;Infobase&quot; feature?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Infobase is a central team knowledge repository where you can store brand guidelines,
              positioning documents, and value propositions. Users can tag specific internal data with
              &quot;@&quot; during chat or workflow creation, which forces the AI to reference exact context
              without needing to copy and paste documentation repeatedly.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Copy.ai differ from standard AI tools like ChatGPT?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Copy.ai is model-agnostic, switching between models like OpenAI, Anthropic, and Gemini based on
              performance needs. It acts as an orchestration layer and integrates directly with CRM tools like
              Salesforce, HubSpot, and Gong to coordinate the entire customer lifecycle, unlike single-task
              copilots or narrow chatbots.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can custom AI actions be built?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Custom actions are being developed, but users can already use hundreds of pre-built AI Actions
              that translate instructions into complex pipeline tasks automatically.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is Copy.ai free to use?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Copy.ai used to focus on a free tier, but with new specialized features and enterprise workflow
              tools, it no longer prioritizes a full free plan for new customers. Paid team and starter plans
              scale with usage, user seats, and access to the automated GTM Workflow Builder.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
