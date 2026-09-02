import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function ImplementationSection() {
  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] font-black font-[var(--font-sora)] shadow-text" id="implementation-considerations">
                Implementation Considerations
              </h2>
              <p className="text-md text-white shadow-text pt-3">Implementing Grammarly into your <GlossaryLink slug="marketing-automation">content creation</GlossaryLink> workflow involves several considerations to ensure a smooth and effective <GlossaryLink slug="api-integration">integration</GlossaryLink>. Here are some key areas to focus on:</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="accelerated-deployment">Accelerated Deployment</h3>
              <p className="text-md text-white shadow-text pt-3">Grammarly offers pre-built connectors and browser extensions that facilitate quick deployment. This allows teams to integrate Grammarly with their existing tools and platforms without extensive setup time.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-model-design">Data Model Design</h3>
              <p className="text-md text-white shadow-text pt-3">While Grammarly does not require complex data model design, it is important to consider how user data, such as writing preferences and feedback, will be managed and utilized to personalize the experience.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="workflow-and-process-configuration">Workflow and Process Configuration</h3>
              <p className="text-md text-white shadow-text pt-3">Grammarly can be configured to fit into existing workflows by setting up specific writing goals and preferences. This includes defining the level of formality, domain-specific language, and other stylistic choices that align with organizational standards.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="custom-code-and-development">Custom Code and Development</h3>
              <p className="text-md text-white shadow-text pt-3">Grammarly is primarily a configuration-based tool and does not require custom coding or development. However, users can leverage its <GlossaryLink slug="api">API</GlossaryLink> for more advanced integrations and automations if needed.</p>
              <p className="text-md text-white shadow-text pt-3">Geek At Your Spot, an AI implementation consultancy, helps organizations close the gap by providing expertise in integrating tools like Grammarly into their workflows. This includes advising on best practices for deployment, customization of settings to align with business objectives, and ensuring that the tool is used to its full potential to enhance content quality and efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#8C4E2A] text-white">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] font-black font-[var(--font-sora)] shadow-text" id="when-to-use">
                When to Use
              </h2>
              <p className="text-md text-white shadow-text pt-3">Grammarly is ideal for a variety of scenarios where clear and effective written communication is crucial. Here are some situations where Grammarly can be particularly beneficial:</p>
              <p className="text-md text-white shadow-text pt-3">Content Creation: Writers and editors can use Grammarly to streamline the editing process, ensuring that articles, blogs, and other content types are polished and error-free before publication.</p>
              <p className="text-md text-white shadow-text pt-3">Business Communication: Professionals can improve the clarity and professionalism of emails, reports, and presentations by using Grammarly to catch errors and suggest improvements.</p>
              <p className="text-md text-white shadow-text pt-3">Academic Writing: Students and educators can benefit from Grammarly&#39;s grammar checks and plagiarism detection to maintain academic integrity and improve writing quality.</p>
              <p className="text-md text-white shadow-text pt-3">By integrating Grammarly into these workflows, organizations can achieve more efficient processes, reduce the time spent on revisions, and enhance the overall quality of their written communication. This not only saves time and costs but also leads to happier customers and more successful outcomes.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
